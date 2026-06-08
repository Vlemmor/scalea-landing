const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Firebase
try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        // Use environment variable (for Railway)
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        console.log("Firebase initialized via environment variable");
    } else {
        // Fallback to local file if exists
        const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');
        if (require('fs').existsSync(serviceAccountPath)) {
            const serviceAccount = require(serviceAccountPath);
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            console.log("Firebase initialized via serviceAccountKey.json");
        } else {
            console.warn("Firebase not initialized: Missing credentials. Data will NOT be persistent.");
        }
    }
} catch (err) {
    console.error("Firebase initialization error:", err);
}

const db = admin.apps.length ? admin.firestore() : null;
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve landing page from root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});
app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.js'));
});

// API: Save Budget to Firebase
app.post('/api/budgets', async (req, res) => {
    try {
        const budgetData = req.body;
        const budgetId = Date.now().toString();
        const dataToSave = { ...budgetData, id: budgetId, createdAt: new Date() };

        if (db) {
            await db.collection('budgets').doc(budgetId).set(dataToSave);
            console.log(`Budget saved to Firestore: ${budgetId}`);
        } else {
            console.log("Firestore not available. Saving to local budgets.json file.");
            const fs = require('fs');
            const budgetsPath = path.join(__dirname, 'budgets.json');
            let budgets = [];
            if (fs.existsSync(budgetsPath)) {
                try {
                    budgets = JSON.parse(fs.readFileSync(budgetsPath, 'utf8'));
                } catch (e) {
                    console.error("Error reading local budgets file:", e);
                }
            }
            budgets.push(dataToSave);
            fs.writeFileSync(budgetsPath, JSON.stringify(budgets, null, 2), 'utf8');
        }

        res.json({ success: true, id: budgetId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error saving budget' });
    }
});

// API: Get Budgets from Firebase
app.get('/api/budgets', async (req, res) => {
    try {
        if (db) {
            const snapshot = await db.collection('budgets').orderBy('createdAt', 'desc').get();
            const budgets = snapshot.docs.map(doc => doc.data());
            res.json(budgets);
        } else {
            const fs = require('fs');
            const budgetsPath = path.join(__dirname, 'budgets.json');
            let budgets = [];
            if (fs.existsSync(budgetsPath)) {
                try {
                    budgets = JSON.parse(fs.readFileSync(budgetsPath, 'utf8'));
                } catch (e) {
                    console.error("Error reading local budgets file:", e);
                }
            }
            // Sort by creation date descending
            budgets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            res.json(budgets);
        }
    } catch (err) {
        res.status(500).json({ error: 'Error fetching budgets' });
    }
});

// Serve paneladmin.html
app.get('/paneladmin', (req, res) => {
    res.sendFile(path.join(__dirname, 'paneladmin.html'));
});

// API: Log Analytics Event
app.post('/api/analytics/event', async (req, res) => {
    try {
        const { eventType, page, referrer, language } = req.body;
        if (!eventType) {
            return res.status(400).json({ error: 'Missing eventType' });
        }

        const eventId = Date.now().toString() + '_' + Math.random().toString(36).substr(2, 9);
        const userAgent = req.headers['user-agent'] || '';
        
        // Detect device category: Mobile vs Desktop
        let deviceType = 'Ordenador';
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(userAgent)) {
            deviceType = 'Móvil';
        }

        const eventData = {
            id: eventId,
            eventType,
            page: page || '/',
            referrer: referrer || '',
            userAgent,
            deviceType,
            language: language || 'Desconocido',
            createdAt: new Date().toISOString()
        };

        if (db) {
            await db.collection('analytics').doc(eventId).set(eventData);
            console.log(`Analytics event saved to Firestore: ${eventType}`);
        } else {
            const fs = require('fs');
            const analyticsPath = path.join(__dirname, 'analytics.json');
            let events = [];
            if (fs.existsSync(analyticsPath)) {
                try {
                    events = JSON.parse(fs.readFileSync(analyticsPath, 'utf8'));
                } catch (e) {
                    console.error("Error reading local analytics file:", e);
                }
            }
            events.push(eventData);
            // Limit local file size to 10,000 events
            if (events.length > 10000) {
                events = events.slice(events.length - 10000);
            }
            fs.writeFileSync(analyticsPath, JSON.stringify(events, null, 2), 'utf8');
            console.log(`Analytics event saved to local JSON: ${eventType}`);
        }

        res.json({ success: true, id: eventId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error logging analytics event' });
    }
});

// API: Get Analytics Metrics
app.get('/api/analytics/metrics', async (req, res) => {
    try {
        const range = req.query.range || '30';
        let days = 30;
        if (range === '7') days = 7;
        else if (range === '90') days = 90;
        else if (range === 'all') days = 365 * 10; // 10 years fallback

        const now = new Date();
        const currentStart = new Date();
        currentStart.setDate(currentStart.getDate() - days);
        currentStart.setUTCHours(0,0,0,0);

        const prevStart = new Date(currentStart);
        prevStart.setDate(prevStart.getDate() - days);

        let allEventsForCalc = [];
        if (db) {
            const snapshot = await db.collection('analytics')
                .where('createdAt', '>=', prevStart.toISOString())
                .get();
            allEventsForCalc = snapshot.docs.map(doc => doc.data());
        } else {
            const fs = require('fs');
            const analyticsPath = path.join(__dirname, 'analytics.json');
            if (fs.existsSync(analyticsPath)) {
                try {
                    const raw = JSON.parse(fs.readFileSync(analyticsPath, 'utf8'));
                    allEventsForCalc = raw.filter(evt => evt.createdAt && evt.createdAt >= prevStart.toISOString());
                } catch (e) {
                    console.error("Error reading local analytics file:", e);
                }
            }
        }

        // Split events into current and previous periods
        const currentEvents = allEventsForCalc.filter(evt => evt.createdAt >= currentStart.toISOString());
        const prevEvents = allEventsForCalc.filter(evt => evt.createdAt >= prevStart.toISOString() && evt.createdAt < currentStart.toISOString());

        // Calculate real-time active users (unique User-Agents in last 5 minutes)
        const fiveMinAgo = new Date(now.getTime() - 5 * 60 * 1000);
        const activeSessions = new Set(
            allEventsForCalc
                .filter(evt => evt.eventType === 'pageview' && evt.createdAt >= fiveMinAgo.toISOString())
                .map(evt => evt.userAgent)
        );
        const activeUsers = activeSessions.size;

        // Process metrics
        const metrics = processMetricsWithTrends(currentEvents, prevEvents, days, activeUsers);
        res.json(metrics);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching analytics metrics' });
    }
});

// API: Export Analytics to CSV
app.get('/api/analytics/export', async (req, res) => {
    try {
        const range = req.query.range || '30';
        let days = 30;
        if (range === '7') days = 7;
        else if (range === '90') days = 90;
        else if (range === 'all') days = 365 * 10;

        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        startDate.setUTCHours(0,0,0,0);

        let events = [];
        if (db) {
            const snapshot = await db.collection('analytics')
                .where('createdAt', '>=', startDate.toISOString())
                .get();
            events = snapshot.docs.map(doc => doc.data());
        } else {
            const fs = require('fs');
            const analyticsPath = path.join(__dirname, 'analytics.json');
            if (fs.existsSync(analyticsPath)) {
                try {
                    const allEvents = JSON.parse(fs.readFileSync(analyticsPath, 'utf8'));
                    events = allEvents.filter(evt => evt.createdAt && evt.createdAt >= startDate.toISOString());
                } catch (e) {
                    console.error("Error reading local analytics file:", e);
                }
            }
        }

        // Sort events newest first
        events.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Generate CSV Content (Excel compatible with BOM and semicolons)
        let csvContent = '\uFEFF'; 
        csvContent += 'ID;Fecha (UTC);Tipo de Evento;Pagina;Referente;Dispositivo;Idioma;Navegador\n';

        events.forEach(evt => {
            const id = evt.id || '';
            const date = evt.createdAt ? evt.createdAt.replace('T', ' ').substring(0, 19) : '';
            const type = evt.eventType || '';
            const page = evt.page || '';
            const referrer = (evt.referrer || '').replace(/;/g, ',');
            const device = evt.deviceType || 'Ordenador';
            const language = evt.language || '';
            const userAgent = (evt.userAgent || '').replace(/;/g, ',').replace(/"/g, '""');

            csvContent += `"${id}";"${date}";"${type}";"${page}";"${referrer}";"${device}";"${language}";"${userAgent}"\n`;
        });

        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename=reporte_analytics_${range}dias.csv`);
        res.status(200).send(csvContent);

    } catch (err) {
        console.error(err);
        res.status(500).send('Error al exportar datos de analítica');
    }
});

// Helper function to process events and calculate trends
function processMetricsWithTrends(currentEvents, prevEvents, days, activeUsers) {
    let currentVisits = 0;
    let currentClicks = 0;
    const pages = {};
    const referrers = {};
    const devices = { 'Móvil': 0, 'Ordenador': 0 };
    const languages = {};
    const dailyHistory = {};

    // Initialize daily history
    for (let i = days - 1; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        dailyHistory[dateStr] = { visits: 0, clicks: 0 };
    }

    currentEvents.forEach(evt => {
        const isVis = evt.eventType === 'pageview';
        const isClick = evt.eventType === 'click_whatsapp';

        if (isVis) currentVisits++;
        if (isClick) currentClicks++;

        // Pages breakdown
        const p = evt.page || '/';
        pages[p] = (pages[p] || 0) + 1;

        // Referrer breakdown
        let ref = evt.referrer || '';
        let source = 'Directo / Orgánico';
        if (ref) {
            try {
                const url = new URL(ref);
                const hostname = url.hostname.toLowerCase();
                if (hostname.includes('google')) source = 'Google';
                else if (hostname.includes('facebook') || hostname.includes('fb.')) source = 'Facebook';
                else if (hostname.includes('instagram') || hostname.includes('ig.')) source = 'Instagram';
                else if (hostname.includes('linkedin')) source = 'LinkedIn';
                else if (hostname.includes('t.co') || hostname.includes('twitter') || hostname.includes('x.com')) source = 'Twitter / X';
                else source = hostname;
            } catch (e) {
                source = ref;
            }
        }
        referrers[source] = (referrers[source] || 0) + 1;

        // Device breakdown
        const dev = evt.deviceType || 'Ordenador';
        devices[dev] = (devices[dev] || 0) + 1;

        // Language breakdown (e.g. ES, EN, CA)
        const lang = (evt.language || 'Desconocido').split('-')[0].toUpperCase();
        languages[lang] = (languages[lang] || 0) + 1;

        // Daily history
        if (evt.createdAt) {
            const dateStr = evt.createdAt.split('T')[0];
            if (dailyHistory[dateStr]) {
                if (isVis) dailyHistory[dateStr].visits++;
                if (isClick) dailyHistory[dateStr].clicks++;
            }
        }
    });

    // Previous metrics
    let prevVisits = 0;
    let prevClicks = 0;
    prevEvents.forEach(evt => {
        if (evt.eventType === 'pageview') prevVisits++;
        if (evt.eventType === 'click_whatsapp') prevClicks++;
    });

    // Growth calculation helper
    const calcGrowth = (curr, prev) => {
        if (prev === 0) return curr > 0 ? 100 : 0;
        return parseFloat((((curr - prev) / prev) * 100).toFixed(1));
    };

    const visitsGrowth = calcGrowth(currentVisits, prevVisits);
    const clicksGrowth = calcGrowth(currentClicks, prevClicks);

    const currentConv = currentVisits > 0 ? (currentClicks / currentVisits) * 100 : 0;
    const prevConv = prevVisits > 0 ? (prevClicks / prevVisits) * 100 : 0;
    const convGrowth = parseFloat((currentConv - prevConv).toFixed(2));

    return {
        kpis: {
            totalVisits: currentVisits,
            visitsGrowth,
            whatsappClicks: currentClicks,
            clicksGrowth,
            conversionRate: parseFloat(currentConv.toFixed(2)),
            convGrowth,
            activeUsers
        },
        pages: Object.entries(pages)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10),
        referrers: Object.entries(referrers)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10),
        devices: {
            mobile: devices['Móvil'] || 0,
            desktop: devices['Ordenador'] || 0,
            total: (devices['Móvil'] || 0) + (devices['Ordenador'] || 0)
        },
        languages: Object.entries(languages)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5),
        history: Object.entries(dailyHistory).map(([date, data]) => ({
            date,
            visits: data.visits,
            clicks: data.clicks
        })).sort((a, b) => a.date.localeCompare(b.date))
    };
}


// API: Suggest ROI Goals based on Services
app.post('/api/suggest-roi', async (req, res) => {
    try {
        const { services } = req.body;
        const rawApiKey = process.env.GEMINI_API_KEY;
        const geminiApiKey = rawApiKey ? rawApiKey.trim() : null;

        console.log("Endpoint /api/suggest-roi llamado. API Key detectada:", geminiApiKey ? `${geminiApiKey.substring(0, 6)}...${geminiApiKey.slice(-4)}` : "NO ENCONTRADA");

        // If no API key, use smart rule-based mock suggestions to ensure resilience
        if (!geminiApiKey) {
            console.log("GEMINI_API_KEY not found in env. Returning smart local mock suggestions.");
            
            // Analyze services to generate mock suggestions
            let hasBot = false;
            let hasAds = false;
            let hasAudit = false;
            let hasWeb = false;
            
            services.forEach(s => {
                const name = (s.name || '').toLowerCase();
                const desc = (s.description || '').toLowerCase();
                if (name.includes('bot') || name.includes('aitana') || desc.includes('bot') || desc.includes('automatización')) hasBot = true;
                if (name.includes('ads') || name.includes('marketing') || name.includes('campaña')) hasAds = true;
                if (name.includes('auditoría') || name.includes('proceso') || name.includes('consultoría')) hasAudit = true;
                if (name.includes('web') || name.includes('landing') || name.includes('desarrollo')) hasWeb = true;
            });

            let roi = {
                hours: "+40h",
                hoursLabel: "Tiempo libre para ti / mes",
                reservations: "+25%",
                reservationsLabel: "Más ventas y reservas",
                metric3Value: "24/7",
                metric3Label: "Tu negocio activo 24/7",
                metric4Value: "100%",
                metric4Label: "Soporte y tranquilidad total"
            };

            if (hasBot) {
                roi.hours = "+50h";
                roi.hoursLabel = "Ahorro en soporte/atención";
                roi.reservations = "+30%";
                roi.reservationsLabel = "Mejora de conversión";
                roi.metric3Value = "24/7";
                roi.metric3Label = "Atención automática al cliente";
            } else if (hasAudit) {
                roi.hours = "+25h";
                roi.hoursLabel = "Ahorro de tiempo en procesos";
                roi.reservations = "100%";
                roi.reservationsLabel = "Control e ineficiencias corregidas";
                roi.metric3Value = "0";
                roi.metric3Label = "Errores operativos críticos";
            } else if (hasAds) {
                roi.hours = "+15h";
                roi.hoursLabel = "Gestión automatizada de leads";
                roi.reservations = "+35%";
                roi.reservationsLabel = "Retorno de inversión (ROI)";
                roi.metric3Value = "+2x";
                roi.metric3Label = "Clientes potenciales captados";
            } else if (hasWeb) {
                roi.hours = "+10h";
                roi.hoursLabel = "Ahorro en gestión de contenido";
                roi.reservations = "+20%";
                roi.reservationsLabel = "Conversión web optimizada";
                roi.metric3Value = "100%";
                roi.metric3Label = "Diseño premium adaptado a móvil";
            }

            return res.json({ roi });
        }

        const prompt = `Analiza los siguientes servicios propuestos para una cotización comercial de una consultora/agencia tecnológica:
${JSON.stringify(services, null, 2)}

En base a estos servicios, genera las métricas e indicadores de impacto (4 tarjetas) más motivadores y realistas para el cliente.
Debes devolver una respuesta en formato JSON estricto con las siguientes claves:
{
  "roi": {
    "hours": "Valor tarjeta 1 (ej: '+30h', '+15 días', 'Ahorro')",
    "hoursLabel": "Descripción tarjeta 1 corta (ej: 'Ahorro de tiempo al mes')",
    "reservations": "Valor tarjeta 2 (ej: '+20%', '+10 procesos', 'Precisión')",
    "reservationsLabel": "Descripción tarjeta 2 corta (ej: 'Mejora en contratación')",
    "metric3Value": "Valor tarjeta 3 (ej: '24/7', '100%', '+5x')",
    "metric3Label": "Descripción tarjeta 3 corta",
    "metric4Value": "Valor tarjeta 4 (ej: '100%', '0 errores', 'Continuo')",
    "metric4Label": "Descripción tarjeta 4 corta"
  }
}

IMPORTANTE: Devuelve SOLAMENTE el JSON, sin markdown, sin explicaciones.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    responseMimeType: "application/json",
                    temperature: 0.2
                }
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Gemini API error: ${errText}`);
        }

        const data = await response.json();
        let textResult = data.candidates[0].content.parts[0].text;
        
        // Parse the JSON
        const parsed = JSON.parse(textResult);
        res.json(parsed);
    } catch (err) {
        console.error("Error generating ROI suggestions:", err);
        res.status(500).json({ error: err.message });
    }
});

// API: Send Proposal Email
app.post('/api/send-proposal', async (req, res) => {
    const { email, clientName, proposalLink, message } = req.body;

    if (!resend) {
        return res.status(500).json({ error: 'Resend API Key missing' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Scalea Digital <proyectos@scaleadigital.com>', // Ensure domain is verified in Resend
            to: [email],
            subject: `Propuesta de Transformación Digital - ${clientName}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #000;">Hola, ${clientName}</h2>
                    <p style="color: #555; line-height: 1.6;">${message}</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${proposalLink}" style="background: #000; color: #fff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Ver Propuesta Completa</a>
                    </div>
                    <hr style="border: 0; border-top: 1px solid #eee;">
                    <p style="font-size: 12px; color: #999;">Esta es una propuesta exclusiva creada por Scalea Digital.</p>
                </div>
            `
        });

        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
