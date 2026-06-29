const translations = {
    es: {
        dir: "ltr",
        nav_btn: "Diagnóstico Gratis",
        hero_badge: "Ecosistemas digitales a medida",
        hero_title: "Tu restaurante no necesita más herramientas.",
        hero_title_span: "Necesita un sistema que conecte ventas, reservas, costes y operación.",
        hero_subtitle: "Ecosistemas digitales a medida de BarLi para operar, vender y decidir mejor.",
        hero_btn_cta: "Agendar Diagnóstico Gratuito",
        hero_btn_explore: "Explorar Módulos",
        badge_reservas: "Reservas 24/7 sin Comisiones",
        badge_offline: "Soporte Offline-First",
        badge_escandallos: "Escandallos en Tiempo Real",
        badge_app: "App Multidispositivo",
        
        // Mockup
        mock_title: "Panel de Control BarLi",
        mock_ventas_hoy: "Ventas Hoy",
        mock_ahorro: "Ahorro Comis.",
        mock_reservas_mes: "Reservas Mes",
        mock_chart_title: "Facturación de la Semana",
        mock_table_terraza: "Mesa 5 - Terraza 1",
        mock_table_order: "Hamburguesa BarLi x2, Cerveza x2",
        mock_table_status: "Cobrado (78.4% Margen)",
        mock_table_res: "Reserva Online 21:00h",
        mock_table_pax: "Familia Gómez - 4 pax",
        mock_table_confirm: "Confirmada (Asistente IA)",
        
        // Iceberg section
        iceberg_badge: "El Diagnóstico del Sector",
        iceberg_title: "Los problemas invisibles que frenan tu restaurante",
        iceberg_subtitle: "Lo que a menudo parece 'falta de tiempo' es en realidad una falta de sistema ordenado de control.",
        iceberg_lbl_visible: "Visible",
        iceberg_lbl_hidden: "Oculto",
        iceberg_lbl_time: "Falta de Tiempo",
        iceberg_lbl_owner: "Todo depende del Dueño",
        iceberg_lbl_blindness: "Ceguera Financiera",
        iceberg_desc_blindness: "Descontrol total de costes e ingredientes.",
        iceberg_lbl_leak: "Fuga de Clientes",
        iceberg_desc_leak: "Reservas de WhatsApp no atendidas a tiempo.",
        iceberg_lbl_wear: "Desgaste Operativo",
        iceberg_desc_wear: "Horas perdidas cuadrando cajas a mano.",
        iceberg_lbl_margin: "Desconocer el Margen",
        iceberg_desc_margin: "Vender platos estrella a pérdidas sin saberlo.",
        
        iceberg_side_title: "Cuando no hay sistema, el problema escala",
        iceberg_side_desc: "Haz clic en cada riesgo operativo para ver el impacto contable y operativo en tu local y cómo lo frena BarLi:",
        iceberg_side_item1: "1. Ceguera Financiera y Costes Fuera de Control",
        iceberg_side_item1_body: "La subida de precios de los proveedores desdibuja el margen real de tus platos. Si no cruzas compras con el TPV al instante, puedes estar vendiendo tus platos estrella a pérdidas.",
        iceberg_side_item2: "2. Fuga de Clientes y Comisiones de Reserva",
        iceberg_side_item2_body: "No responder WhatsApp a tiempo cuesta reservas los fines de semana. Además, regalar entre 1.50€ y 3€ por comensal a portales de reservas de terceros destruye tu margen neto.",
        iceberg_side_item3: "3. Desgaste Operativo en Burocracia Manual",
        iceberg_side_item3_body: "Registrar facturas de proveedores a mano, calcular horas del personal y enviar informes a la gestoría quita más de 15 horas al mes al dueño, horas robadas al descanso y la estrategia.",
        
        // Indicators
        ind_title: "Indicadores de la Realidad de la Hostelería",
        ind_subtitle: "Las estadísticas del mercado hostelero actual demuestran la urgencia de estructurar tu gestión operativa:",
        ind_card1_title: "Mortalidad del Negocio",
        ind_card1_desc: "Negocios de restauración que cierran o se traspasan en los primeros 18 meses debido a la ceguera financiera y el desgaste operativo.",
        ind_card1_src: "Fuente: Barcelona Culinary Hub",
        ind_card2_title: "Traspasos del Sector",
        ind_card2_desc: "De todos los traspasos de locales comerciales registrados a nivel nacional ocurren en el sector de la hostelería.",
        ind_card2_src: "Fuente: Portal Traspasalo.com",
        ind_card3_title: "Nuevos Locales Anuales",
        ind_card3_desc: "La apertura constante de competencia obliga a digitalizarse para asegurar la retención de clientes y la eficiencia operativa.",
        ind_card3_src: "Fuente: Anuario Patronal de Hostelería",
        
        // Modules
        mod_badge: "El Ecosistema BarLi",
        mod_title: "Un ecosistema unificado de control a tu medida",
        mod_subtitle: "Nuestros servicios no son aplicaciones aisladas. Son módulos que se conectan entre si para optimizar todo tu restaurante.",
        mod_action: "Ver funcionalidades",
        
        // Chat Demo
        chat_badge: "Demostración en Vivo",
        chat_title: "Pon a prueba al Asistente Virtual 24/7",
        chat_subtitle: "Simulación en vivo de reserva o consultas por WhatsApp a cualquier hora del día.",
        chat_status: "En línea (IA Activa)",
        chat_welcome: "Hola, gracias por contactar con nuestro restaurante. Soy el asistente de reservas BarLi. ¿En qué te puedo ayudar hoy?",
        chat_lbl_options: "Interactúa con el chat",
        chat_lbl_desc: "Haz clic en cualquiera de las consultas comunes de los clientes para ver cómo responde el chatbot en menos de 3 segundos:",
        chat_opt1: "📅 Quiero reservar una mesa para cenar hoy",
        chat_opt2: "☀️ ¿Tienen terraza disponible?",
        chat_opt3: "🌾 ¿Tenéis opciones sin gluten?",
        chat_side_title: "🤖 Inteligencia de Salón Conectada",
        chat_side_desc: "El asistente está conectado al Control de Salón en tiempo real. Si las mesas están llenas para esa hora, el asistente le ofrecerá alternativas automáticamente al cliente en vez de generar sobreventas.",
        
        // ROI Calculator
        roi_badge: "Calcular el Retorno",
        roi_title: "¿Cuánto dinero pierde tu restaurante hoy sin BarLi?",
        roi_subtitle: "Usa los controles deslizantes para configurar el tamaño de tu restaurante y compara tu pérdida actual vs. tu beneficio al digitalizarte.",
        roi_lbl_tables: "Mesas Disponibles",
        roi_lbl_ticket: "Ticket Promedio por Mesa",
        roi_lbl_reserves: "Reservas al Mes",
        roi_col_current: "❌ Situación Actual",
        roi_lbl_loss_com: "Pérdida en comisiones",
        roi_desc_loss_com: "Dinero regalado a portales externos cobrándote por cada comensal.",
        roi_lbl_loss_time: "Tiempo perdido",
        roi_desc_loss_time: "Horas del propietario consumidas en contabilidad y gestión manual.",
        roi_lbl_total_leak: "Fuga de dinero estimada",
        roi_col_barli: "🚀 Optimizado con BarLi",
        roi_lbl_barli_com: "Comisiones a portales",
        roi_desc_barli_com: "¡Ahorro total del 100%! Reservas directas en redes y web.",
        roi_lbl_extra_sales: "Ventas extras estimadas",
        roi_desc_extra_sales: "Por incremento del 20% en ticket promedio con la carta en video.",
        roi_lbl_net_benefit: "Beneficio Neto Mensual",
        roi_amort: "Con este beneficio neto estimado, la inversión única del Plan Inteligente se amortiza sola en menos de",
        roi_months: "meses",
        
        // Brain Finance
        fin_badge: "Control de Costes",
        fin_title: "El Cerebro Financiero: Escandallos y Punto de Equilibrio",
        fin_subtitle: "Estima los gastos totales de tu negocio y visualiza cómo las ventas registradas por el TPV te impulsan a superar tu punto de equilibrio.",
        fin_dish: "🍔 Escandallo de Plato: Hamburguesa Gourmet BarLi",
        fin_dish_desc: "El sistema cruza el coste real de los ingredientes con el precio de compra más reciente de tus proveedores.",
        fin_th_item: "Ingrediente / Concepto",
        fin_th_qty: "Peso / Cantidad",
        fin_th_unit: "Costo Unitario",
        fin_th_total: "Costo Total",
        fin_ing1: "Carne Vacuno Seleccionada",
        fin_ing2: "Pan Brioche Artesanal",
        fin_ing3: "Queso Cheddar + Salsas",
        fin_ing4: "Guarnición (Patatas Rústicas)",
        fin_total_row: "Coste Total Materia Prima (Food Cost)",
        fin_lbl_pvp: "PVP Neto",
        fin_lbl_margin: "Margen Bruto",
        fin_lbl_pct: "% Margen",
        
        fin_be_title: "Simulador de Punto de Equilibrio",
        fin_be_desc: "Visualiza si tus ventas superan el volumen mínimo para cubrir tus costes fijos mensuales.",
        fin_lbl_sales: "Ventas del TPV (Mensuales)",
        fin_sales_sub: "Simuladas según tus mesas, ticket y reservas de arriba",
        fin_lbl_fixed: "Gastos Fijos del Local (Alquiler, Personal, Suministros...)",
        fin_lbl_be_target: "Punto de Equilibrio (Ventas Mínimas)",
        fin_be_sub: "Ventas necesarias para cubrir los gastos fijos + el coste de los ingredientes (basado en el 77.7% de margen del escandallo)",
        
        // Pricing
        price_badge: "Inversión Inteligente",
        price_title: "Estructura de Planes BarLi Restauración",
        price_subtitle: "Nuestros planes se adaptan a la madurez de tu negocio. Elige entre pago único de implementación y tarifas mensuales opcionales de mantenimiento.",
        price_toggle_imp: "Pago de Implementación",
        price_toggle_maint: "Soporte y Mantenimiento",
        
        // Plans details
        plan_btn_base: "Seleccionar Plan Base",
        plan_btn_ope: "Seleccionar Plan Operativo",
        plan_btn_intel: "Seleccionar Plan Inteligente",
        price_lbl_from: "Desde",
        price_lbl_once: "pago único",
        price_lbl_monthly: "/mes",
        price_lbl_maint_label: "Mantenimiento Opcional",
        
        // Intelligent maintenance detail
        maint_detail_title: "⭐ Mantenimiento Inteligente: Acceso Inmediato e Innovación Continua",
        maint_detail_desc: "Al contratar el Mantenimiento Inteligente (300 €/mes - Opcional), tu restaurante no solo recibe soporte prioritario, sino que tu TPV tendrá acceso inmediato a todas las nuevas mejoras de software del TPV que vayamos desarrollando. Además, contarás de forma ilimitada con las nuevas herramientas y optimizaciones continuas de nuestros modelos de Inteligencia Artificial, garantizando que tu negocio siempre opere con la tecnología más avanzada del mercado.",
        
        // FAQs
        faq_title: "Preguntas Frecuentes",
        faq_subtitle: "Respondemos las dudas más comunes sobre la implementación de nuestro ecosistema.",
        
        // CTA & footer
        cta_title: "El primer paso no te cuesta nada",
        cta_subtitle: "Agendemos un diagnóstico gratuito de 30 minutos por WhatsApp. Analizaremos tu menú, localizaremos tus fugas de rentabilidad y te propondremos soluciones claras.",
        form_name: "Tu nombre",
        form_rest: "Nombre de tu local",
        form_phone: "Tu número de móvil / WhatsApp",
        form_btn: "Solicitar Diagnóstico por WhatsApp",
        footer_contact: "Contacto",
        footer_desc: "Ecosistemas digitales a medida para hostelería. Creamos herramientas tecnológicas estables para operar, vender y decidir mejor.",
        
        // Calculator strings
        calc_suffix_monthly: " €/mes",
        calc_suffix_once: " €",
        calc_be_success: "🎉 ¡Tu negocio se encuentra en zona de <strong>Ganancias Netas</strong> de <strong>+{val} €/mes</strong>!",
        calc_be_fail: "⚠️ Estás a <strong>{val} €</strong> de alcanzar tu punto de equilibrio.",
        calc_maint_b_desc: "Soporte técnico continuo del TPV y copias de seguridad",
        calc_maint_o_desc: "Soporte Base + reunión de análisis de rentabilidad mensual",
        calc_maint_i_desc: "Todo lo Operativo + optimización del motor de IA 24/7",
        calc_imp_b_desc: "Incluye 3 meses de soporte de arranque gratis",
        calc_imp_o_desc: "Reunión de análisis y mejora mensual",
        calc_imp_i_desc: "Acompañamiento estratégico e IA de negocio"
    },
    en: {
        dir: "ltr",
        nav_btn: "Free Diagnosis",
        hero_badge: "Custom B2B digital ecosystems",
        hero_title: "Your restaurant doesn't need more tools.",
        hero_title_span: "It needs a system that connects sales, reservations, costs, and operation.",
        hero_subtitle: "Custom B2B digital ecosystems by BarLi to operate, sell, and decide better.",
        hero_btn_cta: "Schedule Free Diagnosis",
        hero_btn_explore: "Explore Modules",
        badge_reservas: "24/7 Commission-Free Bookings",
        badge_offline: "Offline-First Support",
        badge_escandallos: "Real-Time Recipe Costing",
        badge_app: "Multi-Device App",
        
        // Mockup
        mock_title: "BarLi Control Panel",
        mock_ventas_hoy: "Sales Today",
        mock_ahorro: "Comm. Saved",
        mock_reservas_mes: "Bookings Month",
        mock_chart_title: "Weekly Revenue Overview",
        mock_table_terraza: "Table 5 - Terrace 1",
        mock_table_order: "BarLi Burger x2, Beer x2",
        mock_table_status: "Paid (78.4% Margin)",
        mock_table_res: "Online Booking 9:00 PM",
        mock_table_pax: "Gómez Family - 4 pax",
        mock_table_confirm: "Confirmed (AI Assistant)",
        
        // Iceberg section
        iceberg_badge: "Industry Diagnosis",
        iceberg_title: "Invisible problems holding back your restaurant",
        iceberg_subtitle: "What often feels like 'lack of time' is actually a lack of a structured control system.",
        iceberg_lbl_visible: "Visible",
        iceberg_lbl_hidden: "Hidden",
        iceberg_lbl_time: "Lack of Time",
        iceberg_lbl_owner: "Everything depends on Owner",
        iceberg_lbl_blindness: "Financial Blindness",
        iceberg_desc_blindness: "Total lack of control over costs and ingredients.",
        iceberg_lbl_leak: "Client Leakage",
        iceberg_desc_leak: "WhatsApp bookings not answered on time.",
        iceberg_lbl_wear: "Operational Fatigue",
        iceberg_desc_wear: "Hours lost squaring registers manually.",
        iceberg_lbl_margin: "Unknown Margins",
        iceberg_desc_margin: "Selling star dishes at a loss without knowing it.",
        
        iceberg_side_title: "When there is no system, the problem scales",
        iceberg_side_desc: "Click on each operational risk to see the accounting and operational impact on your restaurant and how BarLi solves it:",
        iceberg_side_item1: "1. Financial Blindness & Cost Out of Control",
        iceberg_side_item1_body: "Rising supplier prices blur the real margin of your dishes. If you do not cross-reference purchases with the POS instantly, you might be selling your star dishes at a loss.",
        iceberg_side_item2: "2. Customer Leakage & Booking Commissions",
        iceberg_side_item2_body: "Not answering WhatsApp on time costs bookings on weekends. In addition, paying €1.50 to €3 per diner to third-party booking portals destroys your net margin.",
        iceberg_side_item3: "3. Operational Wear & Tear in Manual Bureaucracy",
        iceberg_side_item3_body: "Entering supplier invoices by hand, calculating staff hours, and sending reports to the accountant takes more than 15 hours a month from the owner—hours stolen from rest and strategy.",
        
        // Indicators
        ind_title: "Indicators of Restaurant Industry Reality",
        ind_subtitle: "Statistics from the current restaurant market show the urgency of structuring your operational management:",
        ind_card1_title: "Business Mortality Rate",
        ind_card1_desc: "Restaurateurs who close or transfer their business in the first 18 months due to financial blindness and operational wear.",
        ind_card1_src: "Source: Barcelona Culinary Hub",
        ind_card2_title: "Sector Transfers",
        ind_card2_desc: "Of all commercial property transfers registered nationwide occur in the hospitality and restaurant industry.",
        ind_card2_src: "Source: Traspasalo.com Portal",
        ind_card3_title: "New Annual Openings",
        ind_card3_desc: "The constant opening of competitors forces digitalization to ensure customer retention and operational efficiency.",
        ind_card3_src: "Source: Hospitality Employer Yearbook",
        
        // Modules
        mod_badge: "The BarLi Ecosystem",
        mod_title: "A unified control ecosystem tailored to you",
        mod_subtitle: "Our services are not isolated applications. They are modules that connect with each other to optimize your entire restaurant.",
        mod_action: "See features",
        
        // Chat Demo
        chat_badge: "Live Demonstration",
        chat_title: "Test the 24/7 Virtual Assistant",
        chat_subtitle: "Live booking or customer inquiry simulation via WhatsApp at any time of day.",
        chat_status: "Online (AI Active)",
        chat_welcome: "Hi, thank you for contacting our restaurant. I am the BarLi booking assistant. How can I help you today?",
        chat_lbl_options: "Interact with the chat",
        chat_lbl_desc: "Click on any of the common customer inquiries to see how the chatbot responds in less than 3 seconds:",
        chat_opt1: "📅 I want to book a table for dinner tonight",
        chat_opt2: "☀️ Do you have terrace seating available?",
        chat_opt3: "🌾 Do you have gluten-free options?",
        chat_side_title: "🤖 Connected Dining Room Intelligence",
        chat_side_desc: "The assistant is connected to the real-time floor plan. If tables are full for that time, the assistant will automatically offer alternatives instead of creating double-bookings.",
        
        // ROI Calculator
        roi_badge: "Calculate Return",
        roi_title: "How much money does your restaurant lose today without BarLi?",
        roi_subtitle: "Use the sliders to configure your restaurant size and compare your current loss vs. your benefit when digitalizing.",
        roi_lbl_tables: "Available Tables",
        roi_lbl_ticket: "Average Ticket per Table",
        roi_lbl_reserves: "Bookings per Month",
        roi_col_current: "❌ Current Situation",
        roi_lbl_loss_com: "Lost in commissions",
        roi_desc_loss_com: "Money given away to external portals charging you per diner.",
        roi_lbl_loss_time: "Time wasted",
        roi_desc_loss_time: "Owner hours spent on bookkeeping and manual tasks.",
        roi_lbl_total_leak: "Estimated money leak",
        roi_col_barli: "🚀 Optimized with BarLi",
        roi_lbl_barli_com: "Portal commissions",
        roi_desc_barli_com: "100% total savings! Direct bookings on social media and web.",
        roi_lbl_extra_sales: "Estimated extra sales",
        roi_desc_extra_sales: "Through a 20% average ticket increase with the video menu.",
        roi_lbl_net_benefit: "Net Monthly Benefit",
        roi_amort: "With this estimated net benefit, the one-time investment of the Intelligent Plan pays for itself in less than",
        roi_months: "months",
        
        // Brain Finance
        fin_badge: "Cost Control",
        fin_title: "The Financial Brain: Costs and Break-Even Point",
        fin_subtitle: "Estimate the total expenses of your business and visualize how the TPV sales push you to beat your break-even point.",
        fin_dish: "🍔 Dish Costing: BarLi Gourmet Burger",
        fin_dish_desc: "The system crosses the real ingredient costs with the most recent purchase prices from your suppliers.",
        fin_th_item: "Ingredient / Concept",
        fin_th_qty: "Weight / Qty",
        fin_th_unit: "Unit Cost",
        fin_th_total: "Total Cost",
        fin_ing1: "Selected Beef Patty",
        fin_ing2: "Artisanal Brioche Bun",
        fin_ing3: "Cheddar Cheese + Sauces",
        fin_ing4: "Side Dish (Rustic Potatoes)",
        fin_total_row: "Total Raw Material Cost (Food Cost)",
        fin_lbl_pvp: "Net Retail Price",
        fin_lbl_margin: "Gross Margin",
        fin_lbl_pct: "% Margin",
        
        fin_be_title: "Break-Even Point Simulator",
        fin_be_desc: "Visualize if your sales exceed the minimum volume required to cover your fixed monthly costs.",
        fin_lbl_sales: "TPV Sales (Monthly)",
        fin_sales_sub: "Simulated according to your tables, ticket, and bookings above",
        fin_lbl_fixed: "Local Fixed Expenses (Rent, Staff, Utilities...)",
        fin_lbl_be_target: "Break-Even Point (Minimum Sales)",
        fin_be_sub: "Sales needed to cover fixed expenses + ingredient costs (based on the 77.7% escandallo margin)",
        
        // Pricing
        price_badge: "Smart Investment",
        price_title: "BarLi Restaurant Plans Structure",
        price_subtitle: "Our plans adapt to the maturity of your business. Choose between a one-time implementation fee and optional monthly support rates.",
        price_toggle_imp: "Implementation Fee",
        price_toggle_maint: "Support & Maintenance",
        
        // Plans details
        plan_btn_base: "Select Base Plan",
        plan_btn_ope: "Select Operativo Plan",
        plan_btn_intel: "Select Inteligente Plan",
        price_lbl_from: "From",
        price_lbl_once: "one-time fee",
        price_lbl_monthly: "/month",
        price_lbl_maint_label: "Optional Maintenance",
        
        // Intelligent maintenance detail
        maint_detail_title: "⭐ Intelligent Maintenance: Immediate Access & Continuous Innovation",
        maint_detail_desc: "By contracting the Intelligent Maintenance (300 €/month - Optional), your restaurant not only receives priority support, but your POS will also have immediate access to all new software upgrades we develop. Furthermore, you will enjoy unlimited access to continuous updates and features of our Artificial Intelligence models, ensuring your business always operates with the most advanced technology on the market.",
        
        // FAQs
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "We answer the most common doubts about deploying our ecosystem.",
        
        // CTA & footer
        cta_title: "The first step costs you nothing",
        cta_subtitle: "Let's schedule a free 30-minute diagnosis via WhatsApp. We will analyze your menu, locate your profit leaks, and propose clear solutions.",
        form_name: "Your name",
        form_rest: "Your restaurant name",
        form_phone: "Your mobile / WhatsApp number",
        form_btn: "Request Diagnosis on WhatsApp",
        footer_contact: "Contact",
        footer_desc: "Tailored B2B digital ecosystems for hospitality. We build stable technology systems to help you operate, sell, and decide better.",
        
        // Calculator strings
        calc_suffix_monthly: " €/month",
        calc_suffix_once: " €",
        calc_be_success: "🎉 Your business is in the <strong>Net Profits</strong> zone of <strong>+${val} €/month</strong>!",
        calc_be_fail: "⚠️ You are <strong>{val} €</strong> away from your break-even point.",
        calc_maint_b_desc: "Ongoing TPV technical support and database backups",
        calc_maint_o_desc: "Base Support + monthly business profitability meeting",
        calc_maint_i_desc: "Everything in Operativo + 24/7 AI engine optimization",
        calc_imp_b_desc: "Includes 3 months of startup support for free",
        calc_imp_o_desc: "Monthly analysis and operations improvement meeting",
        calc_imp_i_desc: "Strategic operations consulting and business AI models"
    },
    ca: {
        dir: "ltr",
        nav_btn: "Diagnòstic Gratis",
        hero_badge: "Ecosistemes digitals a mida",
        hero_title: "El teu restaurant no necessita més eines.",
        hero_title_span: "Necessita un sistema que connecti vendes, reserves, costos i operació.",
        hero_subtitle: "Ecosistemes digitals a mida de BarLi per operar, vendre i decidir millor.",
        hero_btn_cta: "Reservar Diagnòstic Gratuït",
        hero_btn_explore: "Explorar Mòduls",
        badge_reservas: "Reserves 24/7 sense Comissions",
        badge_offline: "Suport Offline-First",
        badge_escandallos: "Escandalls en Temps Real",
        badge_app: "App Multidispositiu",
        
        // Mockup
        mock_title: "Tauler de Control BarLi",
        mock_ventas_hoy: "Vendes Avui",
        mock_ahorro: "Estalvi Comis.",
        mock_reservas_mes: "Reserves Mes",
        mock_chart_title: "Facturació de la Setmana",
        mock_table_terraza: "Taula 5 - Terrassa 1",
        mock_table_order: "Hamburguesa BarLi x2, Cervesa x2",
        mock_table_status: "Cobrat (78.4% Marge)",
        mock_table_res: "Reserva Online 21:00h",
        mock_table_pax: "Família Gómez - 4 pax",
        mock_table_confirm: "Confirmada (Assistent IA)",
        
        // Iceberg section
        iceberg_badge: "El Diagnòstic del Sector",
        iceberg_title: "Els problemes invisibles que frenen el teu restaurant",
        iceberg_subtitle: "El que sovint sembla 'manca de temps' és en realitat una manca de sistema ordenat de control.",
        iceberg_lbl_visible: "Visible",
        iceberg_lbl_hidden: "Ocult",
        iceberg_lbl_time: "Falta de Temps",
        iceberg_lbl_owner: "Tot depèn de l'Amo",
        iceberg_lbl_blindness: "Ceguesa Financera",
        iceberg_desc_blindness: "Descontrol total de costos i ingredients.",
        iceberg_lbl_leak: "Fuga de Clients",
        iceberg_desc_leak: "Reserves de WhatsApp no ateses a temps.",
        iceberg_lbl_wear: "Desgast Operatiu",
        iceberg_desc_wear: "Hores perdudes quadrant caixes a mà.",
        iceberg_lbl_margin: "Desconèixer el Marge",
        iceberg_desc_margin: "Vendre plats estrella a pèrdues sense saber-ho.",
        
        iceberg_side_title: "Quan no hi ha sistema, el problema escala",
        iceberg_side_desc: "Fes clic a cada risc operatiu per veure l'impacte comptable i operatiu al teu local i com el frena BarLi:",
        iceberg_side_item1: "1. Ceguesa Financera i Costos Fora de Control",
        iceberg_side_item1_body: "La pujada de preus dels proveïdors desdibuixa el marge real dels teus plats. Si no creues compres amb el TPV a l'instant, pots estar venent els teus plats estrella a pèrdues.",
        iceberg_side_item2: "2. Fuga de Clients i Comissions de Reserva",
        iceberg_side_item2_body: "No respondre WhatsApp a temps costa reserves els caps de setmana. A més, regalar entre 1.50€ i 3€ per comensal a portals de reserves de tercers destrueix el teu marge net.",
        iceberg_side_item3: "3. Desgast Operatiu en Burocràcia Manual",
        iceberg_side_item3_body: "Registrar factures de proveïdors a mà, calcular hores del personal i enviar informes a la gestoria treu més de 15 hores al mes al propietari, hores robades al descans i a l'estratègia.",
        
        // Indicators
        ind_title: "Indicadors de la Realitat de l'Hostaleria",
        ind_subtitle: "Les estadístiques del mercat hostaler actual demostren la urgència d'estructurar la teva gestió operativa:",
        ind_card1_title: "Mortalitat del Negocio",
        ind_card1_desc: "Negocis de restauració que tanquen o es traspassen en els primers 18 mesos a causa de la ceguesa financera i el desgast operatiu.",
        ind_card1_src: "Font: Barcelona Culinary Hub",
        ind_card2_title: "Traspassos del Sector",
        ind_card2_desc: "De tots els traspassos de locals comercials registrats a nivell nacional es produeixen en el sector de l'hostaleria.",
        ind_card2_src: "Font: Portal Traspasalo.com",
        ind_card3_title: "Nous Locals Anuals",
        ind_card3_desc: "L'obertura constant de competència obliga a digitalitzar-se per assegurar la retenció de clients i l'eficiència operativa.",
        ind_card3_src: "Font: Anuari Patronal d'Hostaleria",
        
        // Modules
        mod_badge: "L'Ecosistema BarLi",
        mod_title: "Un ecosistema unificat de control a la teva mida",
        mod_subtitle: "Els nostres serveis no son aplicacions aïllades. Són mòduls que es connecten entre si per optimitzar tot el teu restaurant.",
        mod_action: "Veure funcionalitats",
        
        // Chat Demo
        chat_badge: "Demostració en Viu",
        chat_title: "Posa a prova l'Assistent Virtual 24/7",
        chat_subtitle: "Simulació en viu de reserva o consultes per WhatsApp a qualsevol hora del dia.",
        chat_status: "En línia (IA Activa)",
        chat_welcome: "Hola, gràcies per contactar amb el nostre restaurant. Sóc l'assistent de reserves BarLi. En què et puc ajudar avui?",
        chat_lbl_options: "Interactua amb el xat",
        chat_lbl_desc: "Fes clic en qualsevol de les consultes comunes dels clients per veure com respon el chatbot en menys de 3 segons:",
        chat_opt1: "📅 Vull reservar una taula per sopar avui",
        chat_opt2: "☀️ Teniu terrassa disponible?",
        chat_opt3: "🌾 Teniu opcions sense gluten?",
        chat_side_title: "🤖 Intel·ligència de Sala Connectada",
        chat_side_desc: "L'assistent està connectat al Control de Sala en temps real. Si les taules estan plenes per a aquesta hora, l'assistent oferirà alternatives automàticament al client en comptes de generar sobrevendes.",
        
        // ROI Calculator
        roi_badge: "Calcular el Retorn",
        roi_title: "Quants diners perd el teu restaurant avui sense BarLi?",
        roi_subtitle: "Utilitza els controls lliscants per configurar la mida del teu restaurant i compara la teva pèrdua actual vs. el teu benefici en digitalitzar-te.",
        roi_lbl_tables: "Taules Disponibles",
        roi_lbl_ticket: "Ticket Mitjà per Taula",
        roi_lbl_reserves: "Reserves al Mes",
        roi_col_current: "❌ Situació Actual",
        roi_lbl_loss_com: "Pèrdua en comissions",
        roi_desc_loss_com: "Diners regalats a portals externs cobrant-te per cada comensal.",
        roi_lbl_loss_time: "Temps perdut",
        roi_desc_loss_time: "Hores del propietari consumides en comptabilitat i gestió manual.",
        roi_lbl_total_leak: "Fuga de diners estimada",
        roi_col_barli: "🚀 Optimitzat amb BarLi",
        roi_lbl_barli_com: "Comissions a portals",
        roi_desc_barli_com: "Estalvi total del 100%! Reserves directes a xarxes i web.",
        roi_lbl_extra_sales: "Vendes extres estimades",
        roi_desc_extra_sales: "Per increment del 20% en ticket mitjà amb la carta en vídeo.",
        roi_lbl_net_benefit: "Benefici Net Mensual",
        roi_amort: "Amb aquest benefici net estimat, la inversió única del Plan Inteligente s'amortitza sola en menys de",
        roi_months: "mesos",
        
        // Brain Finance
        fin_badge: "Control de Costos",
        fin_title: "El Cervell Financer: Escandalls i Punt d'Equilibri",
        fin_subtitle: "Estima les despeses totals del teu negoci i visualitza com les vendes registrades pel TPV t'impulsen a superar el teu punt d'equilibri.",
        fin_dish: "🍔 Escandall de Plat: Hamburguesa Gourmet BarLi",
        fin_dish_desc: "El sistema creua el cost real dels ingredients amb el preu de compra més recent dels teus proveïdors.",
        fin_th_item: "Ingredient / Concepte",
        fin_th_qty: "Pes / Quantitat",
        fin_th_unit: "Cost Unitari",
        fin_th_total: "Cost Total",
        fin_ing1: "Carn de Vedella Seleccionada",
        fin_ing2: "Pa Brioche Artesanal",
        fin_ing3: "Formatge Cheddar + Salsas",
        fin_ing4: "Guarnició (Patates Rústiques)",
        fin_total_row: "Cost Total Matèria Prima (Food Cost)",
        fin_lbl_pvp: "PVP Net",
        fin_lbl_margin: "Marge Brut",
        fin_lbl_pct: "% Marge",
        
        fin_be_title: "Simulador de Punt d'Equilibri",
        fin_be_desc: "Visualitza si les teves vendes superan el volum mínim per cobrir les teves despeses fixes mensuals.",
        fin_lbl_sales: "Vendes del TPV (Mensuals)",
        fin_sales_sub: "Simulades segons les teves taules, tiquet i reserves de dalt",
        fin_lbl_fixed: "Despeses Fixes del Local (Lloguer, Personal, Subministraments...)",
        fin_lbl_be_target: "Punt d'Equilibri (Vendes Mínimes)",
        fin_be_sub: "Vendes necessàries per cobrir les despeses fixes + el cost dels ingredients (basat en el 77.7% de marge de l'escandall)",
        
        // Pricing
        price_badge: "Inversió Intel·ligent",
        price_title: "Estructura de Plans BarLi Restauració",
        price_subtitle: "Els nostres plans s'adapten a la maduresa del teu negoci. Tria entre pagament únic d'implementació i tarifes mensuals opcionals de manteniment.",
        price_toggle_imp: "Pagament d'Implementació",
        price_toggle_maint: "Suport i Mantenimiento",
        
        // Plans details
        plan_btn_base: "Seleccionar Plan Base",
        plan_btn_ope: "Seleccionar Plan Operativo",
        plan_btn_intel: "Seleccionar Plan Inteligente",
        price_lbl_from: "Des de",
        price_lbl_once: "pagament únic",
        price_lbl_monthly: "/mes",
        price_lbl_maint_label: "Manteniment Opcional",
        
        // Intelligent maintenance detail
        maint_detail_title: "⭐ Manteniment Intel·ligent: Accés Immediat i Innovació Contínua",
        maint_detail_desc: "En contractar el Manteniment Intel·ligent (300 €/mes - Opcional), el teu restaurant no només rep suport prioritari, sinó que el teu TPV tindrà accés immediat a totes les noves millores de programari del TPV que anem desenvolupant. A més, comptaràs de forma il·limitada amb les noves eines i optimitzacions contínues dels nostres models d'Intel·ligència Artificial, garantint que el teu negoci sempre operi amb la tecnologia més avançada del mercat.",
        
        // FAQs
        faq_title: "Preguntes Frecuents",
        faq_subtitle: "Responem els dubtes més comuns sobre la implementació del nostre ecosistema.",
        
        // CTA & footer
        cta_title: "El primer pas no et costa res",
        cta_subtitle: "Programem un diagnòstic gratuït de 30 minuts per WhatsApp. Analitzarem el teu menú, localitzarem les teves fugues de rendibilitat i et proposarem solucions clares.",
        form_name: "El teu nom",
        form_rest: "Nom del teu local",
        form_phone: "El teu número de mòbil / WhatsApp",
        form_btn: "Sol·licitar Diagnòstic per WhatsApp",
        footer_contact: "Contacte",
        footer_desc: "Ecosistemes digitals a mida per a hostaleria. Creem eines tecnològiques estables per operar, vendre i decidir millor.",
        
        // Calculator strings
        calc_suffix_monthly: " €/mes",
        calc_suffix_once: " €",
        calc_be_success: "🎉 El teu negoci es troba en zona de <strong>Guanys Nets</strong> de <strong>+{val} €/mes</strong>!",
        calc_be_fail: "⚠️ Estàs a <strong>{val} €</strong> d'assolir el teu punt d'equilibri.",
        calc_maint_b_desc: "Suport tècnic continu del TPV i còpies de seguretat",
        calc_maint_o_desc: "Suport Base + reunió d'anàlisi de rendibilitat mensual",
        calc_maint_i_desc: "Tot l'Operatiu + optimització del motor de IA 24/7",
        calc_imp_b_desc: "Inclou 3 mesos de suport de posada en marxa gratis",
        calc_imp_o_desc: "Reunió d'anàlisi i millora mensual",
        calc_imp_i_desc: "Acompanyament estratègic i IA de negoci"
    },
    ar: {
        dir: "rtl",
        nav_btn: "تشخيص مجاني",
        hero_badge: "أنظمة رقمية مخصصة",
        hero_title: "مطعمك لا يحتاج إلى المزيد من الأدوات.",
        hero_title_span: "إنه بحاجة إلى نظام يربط المبيعات والحجوزات والتكاليف والتشغيل.",
        hero_subtitle: "أنظمة رقمية مخصصة من BarLi للتشغيل والبيع واتخاذ قرارات أفضل للمطاعم.",
        hero_btn_cta: "حجز موعد تشخيص مجاني",
        hero_btn_explore: "استكشف الوحدات",
        badge_reservas: "حجوزات 24/7 بدون عمولات",
        badge_offline: "دعم العمل بدون إنترنت أولاً",
        badge_escandallos: "حساب تكلفة الوصفات بالوقت الفعلي",
        badge_app: "تطبيق متعدد الأجهزة",
        
        // Mockup
        mock_title: "لوحة تحكم BarLi",
        mock_ventas_hoy: "مبيعات اليوم",
        mock_ahorro: "توفير العمولات",
        mock_reservas_mes: "حجوزات الشهر",
        mock_chart_title: "إيرادات الأسبوع",
        mock_table_terraza: "طاولة 5 - الشرفة 1",
        mock_table_order: "برجر BarLi عدد 2، بيرة عدد 2",
        mock_table_status: "تم الدفع (هامش 78.4%)",
        mock_table_res: "حجز عبر الإنترنت 9:00 مساءً",
        mock_table_pax: "عائلة غوميز - 4 أفراد",
        mock_table_confirm: "تم التأكيد (مساعد الذكاء الاصطناعي)",
        
        // Iceberg section
        iceberg_badge: "تشخيص قطاع المطاعم",
        iceberg_title: "المشكلات غير المرئية التي تعيق تقدم مطعمك",
        iceberg_subtitle: "ما يبدو غالبًا كأنه 'ضيق وقت' هو في الواقع غياب نظام رقابة منظم.",
        iceberg_lbl_visible: "مرئي",
        iceberg_lbl_hidden: "مخفي",
        iceberg_lbl_time: "ضيق الوقت",
        iceberg_lbl_owner: "كل شيء يعتمد على المالك",
        iceberg_lbl_blindness: "العمى المالي",
        iceberg_desc_blindness: "فقدان كامل للرقابة على التكاليف والمكونات.",
        iceberg_lbl_leak: "تسرب العملاء",
        iceberg_desc_leak: "عدم الرد على حجوزات واتساب في الوقت المناسب.",
        iceberg_lbl_wear: "الإرهاق التشغيلي",
        iceberg_desc_wear: "ساعات ضائعة في مطابقة الصناديق يدويًا.",
        iceberg_lbl_margin: "عدم معرفة الهامش الربحي",
        iceberg_desc_margin: "بيع الأطباق الأكثر طلبًا بخسارة دون علمك.",
        
        iceberg_side_title: "عندما لا يتوفر نظام، تتفاقم المشكلة",
        iceberg_side_desc: "انقر فوق كل خطر تشغيلي لمعرفة تأثيره المحاسبي والتشغيلي على مطعمك وكيف يوقفه BarLi:",
        iceberg_side_item1: "1. العمى المالي والتكاليف الخارجة عن السيطرة",
        iceberg_side_item1_body: "يؤدي ارتفاع أسعار الموردين إلى طمس هامش أرباح أطباقك الحقيقي. إذا لم تقم بمطابقة مشترياتك مع نظام البيع فورًا، فقد تبيع أطباقك المميزة بخسارة.",
        iceberg_side_item2: "2. تسرب العملاء وعمولات الحجز",
        iceberg_side_item2_body: "عدم الرد على واتساب بالوقت المناسب يفقدك الحجوزات في عطلة نهاية الأسبوع. بالإضافة إلى ذلك، دفع 1.50 إلى 3 يورو لكل زبون لبوابات الحجز الخارجية يدمر صافي أرباحك.",
        iceberg_side_item3: "3. الاستهلاك التشغيلي في المعاملات الورقية اليدوية",
        iceberg_side_item3_body: "تسجيل فواتير الموردين يدويًا، وحساب ساعات عمل الموظفين، وإرسال التقارير للمحاسب يستنزف أكثر من 15 ساعة شهريًا من وقت صاحب المطعم - ساعات مسروقة من راحته وتخطيطه الاستراتيجي.",
        
        // Indicators
        ind_title: "مؤشرات واقع قطاع المطاعم والضيافة",
        ind_subtitle: "تثبت إحصاءات السوق الحالية الحاجة الملحة لتنظيم وإدارة عملياتك:",
        ind_card1_title: "معدل تعثر المشاريع",
        ind_card1_desc: "المطاعم التي تغلق أو يتم التنازل عنها خلال أول 18 شهرًا بسبب العمى المالي والإرهاق التشغيلي.",
        ind_card1_src: "المصدر: Barcelona Culinary Hub",
        ind_card2_title: "التنازل عن المطاعم",
        ind_card2_desc: "من إجمالي عمليات التنازل ونقل ملكية المحلات التجارية المسجلة وطنيًا تقع في قطاع المطاعم والضيافة.",
        ind_card2_src: "المصدر: بوابة Traspasalo.com",
        ind_card3_title: "الافتتاحات السنوية الجديدة",
        ind_card3_desc: "الافتتاح المستمر للمنافسين يفرض التحول الرقمي لضمان الاحتفاظ بالعملاء وكفاءة العمليات.",
        ind_card3_src: "المصدر: الكتاب السنوي لرابطة الضيافة",
        
        // Modules
        mod_badge: "نظام BarLi المتكامل",
        mod_title: "نظام موحد للتحكم والرقابة مصمم خصيصًا لك",
        mod_subtitle: "خدماتنا ليست تطبيقات معزولة. إنها وحدات متصلة ببعضها البعض لتحسين وتطوير مطعمك بالكامل.",
        mod_action: "عرض الميزات",
        
        // Chat Demo
        chat_badge: "عرض تجريبي مباشر",
        chat_title: "اختبر المساعد الافتراضي على مدار الساعة 24/7",
        chat_subtitle: "محاكاة حية لطلب حجز طاولة أو استفسار عميل عبر واتساب في أي وقت من اليوم.",
        chat_status: "نشط (الذكاء الاصطناعي يعمل)",
        chat_welcome: "مرحباً، شكراً لتواصلك مع مطعمنا. أنا مساعد حجز الطاولات من BarLi. كيف يمكنني مساعدتك اليوم؟",
        chat_lbl_options: "تفاعل مع الدردشة",
        chat_lbl_desc: "انقر فوق أي من استفسارات العملاء الشائعة لرؤية كيف يجيب المساعد الذكي في أقل من 3 ثوانٍ:",
        chat_opt1: "📅 أريد حجز طاولة للعشاء الليلة",
        chat_opt2: "☀️ هل تتوفر لديكم جلسات خارجية؟",
        chat_opt3: "🌾 هل تتوفر خيارات خالية من الجلوتين؟",
        chat_side_title: "🤖 ذكاء صالة الطعام المتصل",
        chat_side_desc: "المساعد متصل بنظام مراقبة الصالة بالوقت الفعلي. إذا كانت الطاولات ممتلئة في ذلك الوقت، سيقترح المساعد بدائل تلقائيًا بدلاً من التسبب في حجز مزدوج.",
        
        // ROI Calculator
        roi_badge: "حساب العائد",
        roi_title: "ما مقدار الأموال التي يخسرها مطعمك اليوم بدون BarLi؟",
        roi_subtitle: "استخدم المؤشرات لتحديد حجم مطعمك وقارن خسارتك الحالية بمكاسبك بعد التحول الرقمي.",
        roi_lbl_tables: "عدد الطاولات المتوفرة",
        roi_lbl_ticket: "متوسط الفاتورة لكل طاولة",
        roi_lbl_reserves: "الحجوزات شهرياً",
        roi_col_current: "❌ الوضع الحالي",
        roi_lbl_loss_com: "الخسارة في العمولات",
        roi_desc_loss_com: "أموال تذهب لمنصات الحجز الخارجية التي تفرض عمولة على كل زبون.",
        roi_lbl_loss_time: "الوقت الضائع",
        roi_desc_loss_time: "ساعات من وقت المالك تضيع في المحاسبة والإدارة اليدوية.",
        roi_lbl_total_leak: "تسرب الأموال التقديري",
        roi_col_barli: "🚀 تحسين الأداء مع BarLi",
        roi_lbl_barli_com: "عمولات منصات الحجز",
        roi_desc_barli_com: "توفير كامل بنسبة 100%! حجوزات مباشرة عبر موقعك وشبكات التواصل.",
        roi_lbl_extra_sales: "المبيعات الإضافية التقديرية",
        roi_desc_extra_sales: "بفضل زيادة متوسط الفاتورة بنسبة 20% باستخدام قائمة الفيديو التفاعلية.",
        roi_lbl_net_benefit: "صافي الأرباح الشهري",
        roi_amort: "مع هذا الربح الصافي التقديري، يسترد الاستثمار لمرة واحدة في الخطة الذكية تكلفته في أقل من",
        roi_months: "أشهر",
        
        // Brain Finance
        fin_badge: "الرقابة على التكاليف",
        fin_title: "العقل المالي: حساب التكاليف ونقطة التعادل",
        fin_subtitle: "احسب التكاليف الإجمالية لمشروعك وشاهد كيف تدفعك مبيعات نظام البيع لتجاوز نقطة التعادل وتحقيق أرباح.",
        fin_dish: "🍔 حساب تكلفة طبق: برجر BarLi الفاخر",
        fin_dish_desc: "يربط النظام تكلفة المكونات الحقيقية بأحدث أسعار الشراء المسجلة من مورديك.",
        fin_th_item: "المكون / البند",
        fin_th_qty: "الوزن / الكمية",
        fin_th_unit: "تكلفة الوحدة",
        fin_th_total: "التكلفة الإجمالية",
        fin_ing1: "لحم بقري مختار بعناية",
        fin_ing2: "خبز بريوش حرفي",
        fin_ing3: "جبن شيدر + صوصات",
        fin_ing4: "طبق جانبي (بطاطس ريفية)",
        fin_total_row: "إجمالي تكلفة المواد الخام (تكلفة الطعام)",
        fin_lbl_pvp: "سعر البيع الصافي",
        fin_lbl_margin: "الهامش الإجمالي",
        fin_lbl_pct: "% الهامش الربحي",
        
        fin_be_title: "محاكاة نقطة التعادل",
        fin_be_desc: "شاهد بالوقت الفعلي إذا كانت مبيعاتك تتجاوز الحد الأدنى المطلوب لتغطية تكاليفك الثابتة شهرياً.",
        fin_lbl_sales: "مبيعات نظام البيع TPV (شهرياً)",
        fin_sales_sub: "محسوبة بناءً على عدد الطاولات، متوسط الفاتورة، وحجوزاتك المحددة أعلاه",
        fin_lbl_fixed: "التكاليف الثابتة للمحل (الإيجار، الرواتب، الفواتير...)",
        fin_lbl_be_target: "نقطة التعادل (الحد الأدنى للمبيعات)",
        fin_be_sub: "المبيعات المطلوبة لتغطية المصاريف الثابتة + تكلفة المواد الخام (بناءً على هامش ربح 77.7% للطبق)",
        
        // Pricing
        price_badge: "استثمار ذكي",
        price_title: "هيكلية باقات BarLi للمطاعم",
        price_subtitle: "تتناسب خططنا مع مرحلة نمو مشروعك. اختر بين رسوم التأسيس لمرة واحدة أو رسوم الدعم الاختيارية شهرياً.",
        price_toggle_imp: "رسوم التأسيس والتجهيز",
        price_toggle_maint: "الدعم والصيانة",
        
        // Plans details
        plan_btn_base: "اختر الباقة الأساسية",
        plan_btn_ope: "اختر الباقة التشغيلية",
        plan_btn_intel: "اختر الباقة الذكية",
        price_lbl_from: "تبدأ من",
        price_lbl_once: "دفع لمرة واحدة",
        price_lbl_monthly: "/شهرياً",
        price_lbl_maint_label: "صيانة اختيارية",
        
        // Intelligent maintenance detail
        maint_detail_title: "⭐ الصيانة الذكية: وصول فوري وابتكار مستمر",
        maint_detail_desc: "عند اشتراكك في خدمة الصيانة الذكية (300 يورو شهرياً - اختيارية)، لن يحصل مطعمك على دعم فني ذي أولوية فحسب، بل سيحصل نظام البيع TPV لديك على وصول فوري ومباشر لجميع تحديثات وميزات البرامج التي نطورها. بالإضافة إلى ذلك، ستستفيد بشكل غير محدود من الأدوات والتحسينات المستمرة لنماذج الذكاء الاصطناعي الخاصة بنا، مما يضمن تشغيل عملك دائماً بأحدث التقنيات المتاحة في السوق.",
        
        // FAQs
        faq_title: "الأسئلة الشائعة",
        faq_subtitle: "نجيب عن التساؤلات الأكثر شيوعاً حول تركيب وتشغيل النظام لدينا.",
        
        // CTA & footer
        cta_title: "الخطوة الأولى مجانية بالكامل",
        cta_subtitle: "لنحدد موعد تشخيص مجاني لمدة 30 دقيقة عبر واتساب. سنحلل قائمتك، ونحدد نقاط تسرب الأرباح ونقترح حلولاً واضحة.",
        form_name: "اسمك",
        form_rest: "اسم مطعمك",
        form_phone: "رقم جوالك / واتساب",
        form_btn: "طلب موعد تشخيص عبر واتساب",
        footer_contact: "اتصل بنا",
        footer_desc: "أنظمة بيئية رقمية مخصصة لقطاع المطاعم والضيافة. نبتكر حلولاً تكنولوجية مستقرة لتشغيل وبيع واتخاذ قرارات أفضل.",
        
        // Calculator strings
        calc_suffix_monthly: " يورو/شهرياً",
        calc_suffix_once: " يورو",
        calc_be_success: "🎉 يقع عملك في منطقة <strong>صافي الأرباح</strong> بقيمة <strong>+{val} يورو/شهرياً</strong>!",
        calc_be_fail: "⚠️ أنت على بُعد <strong>{val} يورو</strong> من الوصول لنقطة التعادل.",
        calc_maint_b_desc: "الدعم الفني المستمر لنظام البيع TPV والنسخ الاحتياطي لقواعد البيانات",
        calc_maint_o_desc: "الدعم الأساسي + اجتماع شهري لتحليل ربحية الأعمال والمبيعات",
        calc_maint_i_desc: "كل ميزات الباقة التشغيلية + تحسين نموذج الذكاء الاصطناعي 24/7",
        calc_imp_b_desc: "تشمل 3 أشهر من الدعم الفني المجاني عند إطلاق وتجهيز النظام",
        calc_imp_o_desc: "اجتماع شهري لتحليل وتحسين سير العمليات وتدريب الكادر",
        calc_imp_i_desc: "استشارات تشغيلية استراتيجية وربط كامل بنماذج الذكاء الاصطناعي للشركة"
    }
};

const modulesDataTranslations = {
    es: {
        1: {
            num: "Módulo 01",
            title: "TPV Personalizado e Interactivo",
            desc: "Diseñado para agilizar el registro de comandas sin fricciones operativas ni botones innecesarios que distraigan al camarero.",
            features: [
                { t: "Hiper-Personalización", d: "Adaptamos la interfaz al menú y a la operativa física específica de tu local." },
                { t: "Fichaje de pedidos intuitivo", d: "Registro de comandas desde cualquier barra, móvil, tablet u ordenador conectado." },
                { t: "Control de asistencia integrado", d: "El personal de sala y barra ficha su entrada y salida directamente en el TPV de manera rápida." },
                { t: "Uso multidispositivo total", d: "El sistema no requiere hardware cerrado; funciona en dispositivos Android, iOS o Windows." },
                { t: "Cierre de caja simplificado", d: "Proceso guiado al final de cada turno para cuadrar efectivo y cobros con tarjeta rápidamente." }
            ]
        },
        2: {
            num: "Módulo 02",
            title: "Motor de Reservas 24/7 sin Comisiones",
            desc: "Captura reservas directamente desde tus redes sociales o web corporativa sin pagar comisiones por cubierto a portales intermediarios.",
            features: [
                { t: "0€ en Comisiones", d: "Ahorra comisiones cobradas por portales externos. Las reservas son ilimitadas y directas." },
                { t: "Asistente Virtual por Voz/Texto", d: "Atiende reservas las 24 horas a través de WhatsApp o llamadas con IA integrada." },
                { t: "Panel de Ocupación en Vivo", d: "Línea de tiempo visual del salón que divide las reservas por mesa y horas automáticamente." },
                { t: "Alertas Sonoras de Sala", d: "El TPV emite un aviso sonoro para notificar de inmediato cuando entra una reserva online." },
                { t: "Base de Datos Propedéutica", d: "Registro automático de la ficha de tus clientes y sus hábitos para personalizar su experiencia." }
            ]
        },
        3: {
            num: "Módulo 03",
            title: "Carta Web tipo TikTok e Instagram",
            desc: "Aumenta tus ventas captando la atención de tus comensales mediante formatos de video interactivos en móvil.",
            features: [
                { t: "Visualización Real en Video", d: "Los platos estrella se presentan en videos verticales de alta calidad en vez de fotos estáticas." },
                { t: "Botones de Acción Integrados", d: "Enlace directo para reservar mesa o pedir el plato con un clic desde el video." },
                { t: "Optimizado para Redes", d: "Enlace perfecto para colocar en tu biografía de Instagram o tus códigos QR de mesa." },
                { t: "Mayor Alcance y Conversión", d: "El formato de feed dinámico fomenta una mayor permanencia web e interactividad." }
            ]
        },
        4: {
            num: "Módulo 04",
            title: "Admin Automatizado e Inteligencia Financiera",
            desc: "Conecta la cocina y la administración contable de tu negocio para eliminar los procesos de gestión manual.",
            features: [
                { t: "Escandallos Dinámicos", d: "Calcula el coste real por ingrediente y el margen dinámico por plato de forma automática." },
                { t: "Lectura OCR de Facturas de Compra", d: "Toma fotos a las facturas de proveedores; la IA extrae e ingresa los importes de inmediato." },
                { t: "Envío Mensual a Gestoría", d: "Organiza las facturas emitidas y recibidas al mes y las envía de forma automática a tu gestor." },
                { t: "Cruce Ventas vs Compras", d: "Gráfica comparativa financiera que evalúa tu punto de equilibrio y rentabilidad diaria." },
                { t: "Pantallas de Cocina (KDS)", d: "Envía los pedidos del TPV al instante a una pantalla interactiva, eliminando tickets perdidos." }
            ]
        },
        5: {
            num: "Módulo 05",
            title: "Reputación Online Automatizada con IA",
            desc: "Protege y potencia tu posicionamiento en Google Maps contestando opiniones en segundos y gestionando las crisis de reputación.",
            features: [
                { t: "Robot de Reseñas Google 24/7", d: "Responde de forma personalizada y en el idioma correspondiente a cada opinión de Google Maps." },
                { t: "Filtro de Reseñas Negativas", d: "Alerta en tu móvil si entra una valoración baja con una respuesta propuesta para tu aprobación." },
                { t: "Panel de Análisis de Reputación", d: "Estadísticas gráficas sobre la evolución de la satisfacción de tus clientes a lo largo del tiempo." },
                { t: "Respuesta con Tono Propio", d: "Configuramos la IA para responder con el tono formal o cercano que identifique a tu local." }
            ]
        },
        6: {
            num: "Módulo 06",
            title: "SEO Local Google Business Profile",
            desc: "Posiciona tu restaurante de manera estratégica para liderar las búsquedas gastronómicas locales de Google.",
            features: [
                { t: "Optimización de Ficha Técnica", d: "Configuración profesional de tu perfil, fotos y categorías clave de hostelería." },
                { t: "Posts y Novedades Dinámicas", d: "Programación de contenidos periódicos automáticos sobre tus platos o eventos en Google." },
                { t: "Aumento de Visitas Físicas", d: "Mejora en las conversiones de llamadas, clics de indicaciones de ruta y visitas web directas." }
            ]
        },
        7: {
            num: "Módulo 07",
            title: "Creación de Páginas Web Optimizadas",
            desc: "Desarrollamos una web corporativa rápida, de diseño premium y enfocada al 100% en la venta y conversión de visitas.",
            features: [
                { t: "Diseño Adaptativo Móvil", d: "Optimizada para cargar a máxima velocidad y facilidad de lectura en móviles." },
                { t: "Carta y Reservas Integradas", d: "Acceso inmediato al motor de reservas directas y al visualizador de platos." },
                { t: "Personalización Completa", d: "Estética adaptada a los colores, logotipos e identidad visual de tu marca." }
            ]
        },
        8: {
            num: "Módulo 08",
            title: "Campañas de Google Ads",
            desc: "Atrae comensales a tu local mediante campañas de publicidad segmentada en Google de manera efectiva.",
            features: [
                { t: "Segmentación Local Precisa", d: "Anuncios dirigidos exclusivamente a usuarios que se encuentran en el radio de tu restaurante." },
                { t: "Enfoque en Reservas y Llamadas", d: "Estructura de anuncios optimizada para capturar el contacto telefónico o la reserva online." },
                { t: "Medición Clara de Resultados", d: "Informes de conversiones para evaluar cuántas mesas lograste llenar con tu inversión." }
            ]
        }
    },
    en: {
        1: {
            num: "Module 01",
            title: "Custom Interactive POS",
            desc: "Designed to speed up order entry without operational friction or unnecessary buttons to distract the waiter.",
            features: [
                { t: "Hyper-Personalization", d: "We adapt the interface to your menu and the specific physical operations of your venue." },
                { t: "Intuitive Order Entry", d: "Enter orders from any connected bar, mobile, tablet, or computer." },
                { t: "Integrated Attendance", d: "Floor and bar staff clock in and out directly on the POS quickly." },
                { t: "Multi-Device Use", d: "The system does not require proprietary hardware; it works on Android, iOS, or Windows devices." },
                { t: "Simplified Cash Out", d: "Guided end-of-shift process to reconcile cash and card payments quickly." }
            ]
        },
        2: {
            num: "Module 02",
            title: "24/7 Commission-Free Booking Engine",
            desc: "Capture bookings directly from your social media or corporate website without paying cover commissions to intermediaries.",
            features: [
                { t: "0€ in Commissions", d: "Save fees charged by external portals. Bookings are unlimited and direct." },
                { t: "Voice/Text Virtual Assistant", d: "Attends bookings 24 hours a day via WhatsApp or calls with integrated AI." },
                { t: "Live Occupancy Grid", d: "Visual floor plan timeline dividing bookings by table and hour automatically." },
                { t: "Sound Alerts", d: "The POS emits an alert sound to immediately notify when an online booking is received." },
                { t: "Customer Database", d: "Automatic registration of customer files and preferences to personalize their experience." }
            ]
        },
        3: {
            num: "Module 03",
            title: "TikTok & Instagram Web Menu",
            desc: "Increase your sales by capturing diners' attention through interactive video formats on mobile.",
            features: [
                { t: "Real Video View", d: "Star dishes are presented in high-quality vertical videos instead of static photos." },
                { t: "Integrated Call-To-Action", d: "Direct link to book a table or order the dish with one click from the video." },
                { t: "Social Media Optimized", d: "Perfect link to place in your Instagram bio or table QR codes." },
                { t: "Higher Reach & Conversion", d: "The dynamic feed format promotes longer web duration and interactiveness." }
            ]
        },
        4: {
            num: "Module 04",
            title: "Automated Admin & Costing Intelligence",
            desc: "Connect kitchen and bookkeeping administration to eliminate manual management processes.",
            features: [
                { t: "Dynamic Recipe Costing", d: "Automatically calculate real ingredient costs and dynamic margins per dish." },
                { t: "Supplier Invoice OCR Reader", d: "Take photos of supplier invoices; the AI extracts and registers totals instantly." },
                { t: "Monthly Accountant Sync", d: "Organizes monthly invoices and automatically sends them to your accountant." },
                { t: "Sales vs. Purchases Check", d: "Comparative financial charts evaluating your daily break-even and profitability." },
                { t: "Kitchen Screens (KDS)", d: "Send orders from the POS instantly to an interactive screen, eliminating lost tickets." }
            ]
        },
        5: {
            num: "Module 05",
            title: "AI Reputation Management",
            desc: "Protect and boost your Google Maps positioning by answering reviews in seconds and handling negative opinions.",
            features: [
                { t: "24/7 Google Review Bot", d: "Responded to each Google Maps review personally and in the reviewer's language." },
                { t: "Negative Review Filter", d: "Receive an alert with a proposed answer to review and approve before posting." },
                { t: "Reputation Analytics Panel", d: "Graphical statistics showing customer satisfaction evolution over time." },
                { t: "Custom Tone Adjustment", d: "We configure the AI to speak with the formal or casual voice that identifies your brand." }
            ]
        },
        6: {
            num: "Module 06",
            title: "Google Business Profile Local SEO",
            desc: "Position your restaurant strategically to lead local culinary searches on Google.",
            features: [
                { t: "Technical Profile Tuning", d: "Professional setup of your profile, photos, and key hospitality categories." },
                { t: "Dynamic Posts & Updates", d: "Automatic programming of posts about your dishes or events on Google." },
                { t: "Physical Visits Boost", d: "Increase calls, driving directions clicks, and direct web traffic." }
            ]
        },
        7: {
            num: "Module 07",
            title: "Optimized Web Pages Development",
            desc: "We develop a fast, premium-design website focused 100% on conversion and sales.",
            features: [
                { t: "Mobile Responsive Design", d: "Optimized for maximum speed and readability on mobile devices." },
                { t: "Integrated Menu & Booking", d: "Immediate access to the direct booking engine and the video menu." },
                { t: "Full Brand Alignment", d: "Aesthetics tailored to your logo, colors, and visual identity." }
            ]
        },
        8: {
            num: "Module 08",
            title: "Google Ads Campaigns",
            desc: "Attract diners to your restaurant through highly targeted local Google advertising.",
            features: [
                { t: "Precise Local Targeting", d: "Ads targeted exclusively to users located in your restaurant's area." },
                { t: "Focus on Bookings & Calls", d: "Ad copy optimized to drive direct telephone calls or online bookings." },
                { t: "Clear Performance Metrics", d: "Reports detailing exactly how many tables were filled from your ad budget." }
            ]
        }
    },
    ca: {
        1: {
            num: "Mòdul 01",
            title: "TPV Personalitzat i Interactiu",
            desc: "Dissenyat per agilitzar el registre de comandes sense friccions operatives ni botons innecessaris que distreguin el cambrer.",
            features: [
                { t: "Hiper-Personalització", d: "Adaptem la interfície al menú i a l'operativa física específica del teu local." },
                { t: "Registre de comandes intuïtiu", d: "Registre de comandes des de qualsevol barra, mòbil, tauleta o ordinador connectat." },
                { t: "Control d'assistència integrat", d: "El personal de sala i barra fitxa la seva entrada i sortida directament al TPV de manera ràpida." },
                { t: "Ús multidispositiu total", d: "El sistema no requereix maquinari tancat; funciona en dispositius Android, iOS o Windows." },
                { t: "Tancament de caixa simplificat", d: "Procés guiat al final de cada torn per quadrar efectiu i cobraments amb targeta ràpidament." }
            ]
        },
        2: {
            num: "Mòdul 02",
            title: "Motor de Reserves 24/7 sense Comissions",
            desc: "Captura reserves directament des de les teves xarxes socials o web corporativa sense pagar comissions per cobert a portals intermediaris.",
            features: [
                { t: "0€ en Comissions", d: "Estalvia comissions cobrades per portals externs. Les reserves són il·limitades i directes." },
                { t: "Assistent Virtual per Veu/Text", d: "Atén reserves les 24 hores a través de WhatsApp o trucades amb IA integrada." },
                { t: "Tauler d'Ocupació en Viu", d: "Línia de temps visual del saló que divideix les reserves per taula i hores automàticament." },
                { t: "Alertes Sonores de Sala", d: "El TPV emet un avís sonor per notificar immediatament quan entra una reserva online." },
                { t: "Base de Dades Propedèutica", d: "Registre automàtic de la fitxa dels teus clients i els seus hàbits per personalitzar la seva experiència." }
            ]
        },
        3: {
            num: "Mòdul 03",
            title: "Carta Web tipus TikTok i Instagram",
            desc: "Augmenta les teves vendes captant l'atenció dels teus comensals mitjançant formats de vídeo interactius al mòbil.",
            features: [
                { t: "Visualització Real en Vídeo", d: "Els plats estrella es presenten en vídeos verticals d'alta qualitat en comptes de fotos estàtiques." },
                { t: "Botons d'Acció Integrats", d: "Enllaç directe per reservar taula o demanar el plat amb un clic des del vídeo." },
                { t: "Optimitzat per a Xarxes", d: "Enllaç perfecte per posar a la teva biografia d'Instagram o als teus codis QR de taula." },
                { t: "Major Abast i Conversió", d: "El format de feed dinàmic fomenta una major permanència web i interactivitat." }
            ]
        },
        4: {
            num: "Mòdul 04",
            title: "Admin Automatitzat i Intel·ligència Financera",
            desc: "Connecta la cuina i l'administració comptable del teu negoci per eliminar els processos de gestió manual.",
            features: [
                { t: "Escandalls Dinàmics", d: "Calcula el cost real per ingredient i el marge dinàmic per plat de forma automàtica." },
                { t: "Lectura OCR de Factures de Compra", d: "Fes fotos a les factures de proveïdors; la IA extreu i ingressa els imports immediatament." },
                { t: "Enviament Mensual a Gestoria", d: "Organitza les factures emeses i rebudes al mes i les envia de forma automàtica al teu gestor." },
                { t: "Creuament Vendes vs Compres", d: "Gràfica comparativa financera que avalua el teu punt d'equilibri i rendibilitat diària." },
                { t: "Pantalles de Cuina (KDS)", d: "Envia les comandes del TPV a l'instant a una pantalla interactiva, eliminant tiquets perduts." }
            ]
        },
        5: {
            num: "Mòdul 05",
            title: "Reputació Online Automatitzada amb IA",
            desc: "Protegeix i potencia el teu posicionament a Google Maps contestant opinions en segons i gestionant les crisis de reputació.",
            features: [
                { t: "Robot de Ressenyes Google 24/7", d: "Respon de manera personalitzada i en l'idioma corresponent a cada opinió de Google Maps." },
                { t: "Filtre de Ressenyes Negatives", d: "Alerta al teu mòbil si entra una valoració baixa amb una resposta proposada per a la teva aprovació." },
                { t: "Tauler d'Anàlisi de Reputació", d: "Estadístiques gràfiques sobre l'evolució de la satisfacció dels teus clients al llarg del temps." },
                { t: "Resposta amb To Propi", d: "Configurem la IA per respondre amb el to formal o proper que identifiqui el teu local." }
            ]
        },
        6: {
            num: "Mòdul 06",
            title: "SEO Local Google Business Profile",
            desc: "Posiciona el teu restaurant de manera estratègica per liderar les cerques gastronòmiques locals de Google.",
            features: [
                { t: "Optimització de Fitxa Tècnica", d: "Configuració professional del teu perfil, fotos i categories clau d'hostaleria." },
                { t: "Posts i Novetats Dinàmiques", d: "Programació de continguts periòdics automàtics sobre els teus plats o esdeveniments a Google." },
                { t: "Augment de Visites Físiques", d: "Millora en les conversions de trucades, clics d'indicacions de ruta i visites web directes." }
            ]
        },
        7: {
            num: "Mòdul 07",
            title: "Creació de Pàgines Web Optimitzades",
            desc: "Desenvolupem una web corporativa ràpida, de disseny premium i enfocada al 100% en la venda i conversió de visites.",
            features: [
                { t: "Disseny Adaptatiu Mòbil", d: "Optimitzada per carregar a màxima velocitat i facilitat de lectura en mòbils." },
                { t: "Carta i Reserves Integrades", d: "Accés immediat al motor de reserves directes i al visualitzador de plats." },
                { t: "Personalització Completa", d: "Estètica adaptada als colors, logotips i identitat visual de la teva marca." }
            ]
        },
        8: {
            num: "Mòdul 08",
            title: "Campanyes de Google Ads",
            desc: "Atreu comensals al teu local mitjançant campanyes de publicitat segmentada a Google de manera efectiva.",
            features: [
                { t: "Segmentació Local Precisa", d: "Anuncis dirigits exclusivament a usuaris que es troben en el radi del teu restaurant." },
                { t: "Enfocament en Reserves i Trucades", d: "Estructura d'anuncis optimitzada per capturar el contacte telefònic o la reserva online." },
                { t: "Mesura Clara de Resultats", d: "Informes de conversions per avaluar quantes taules has aconseguit omplir amb la teva inversió." }
            ]
        }
    },
    ar: {
        1: {
            num: "وحدة 01",
            title: "نظام بيع TPV مخصص وتفاعلي",
            desc: "مصمم لتسريع تسجيل الطلبات وتفادي الأخطاء دون أزرار غير ضرورية تشتت النادل.",
            features: [
                { t: "تخصيص فائق للواجهة", d: "نكيف الواجهة لتناسب قائمة طعامك تمامًا والعمليات الميدانية لمطعمك." },
                { t: "تسجيل طلبات سهل", d: "إدخال الطلبات من أي هاتف أو جهاز لوحي أو كمبيوتر متصل في المطعم." },
                { t: "نظام تسجيل حضور مدمج", d: "يسجل طاقم العمل حضورهم وانصرافهم مباشرة عبر شاشة النظام بكل سرعة." },
                { t: "توافق مع الأجهزة المتنوعة", d: "لا يتطلب النظام شراء أجهزة خاصة ومغلقة؛ يعمل على أجهزة أندرويد وiOS وويندوز." },
                { t: "عملية إغلاق صندوق مبسطة", d: "خطوات موجهة في نهاية الوردية لمطابقة النقدية والبطاقات بسهولة ودون تعقيد." }
            ]
        },
        2: {
            num: "وحدة 02",
            title: "حجوزات مباشرة على مدار الساعة بدون عمولات",
            desc: "التقط حجوزات طاولاتك مباشرة من شبكات التواصل وموقعك دون دفع عمولة وسيط لكل مقعد.",
            features: [
                { t: "عمولة 0 يورو", d: "احفظ ميزانيتك من عمولات مواقع الحجز. الحجوزات مباشرة وغير محدودة." },
                { t: "مساعد حجوزات ذكي 24/7", d: "يجيب المساعد التلقائي على الحجوزات والاستفسارات عبر واتساب بالصوت والكتابة." },
                { t: "لوحة تخطيط صالة الطعام", d: "جدول زمني مرئي يقسم الحجوزات على الطاولات والساعات تلقائياً." },
                { t: "تنبيهات صوتية فورية", d: "يصدر النظام تنبيهاً صوتياً فورياً عند دخول أي حجز جديد عبر الإنترنت لتجهيز الطاولة." },
                { t: "قاعدة بيانات متكاملة للعملاء", d: "تسجيل تلقائي لبيانات وتفضيلات عملائك لتقديم خدمة ضيافة مخصصة لهم." }
            ]
        },
        3: {
            num: "وحدة 03",
            title: "قائمة طعام تفاعلية (TikTok Style)",
            desc: "زد من مبيعاتك وأبهر زبائنك من خلال تقديم أطباقك في مقاطع فيديو قصيرة تفاعلية للهواتف.",
            features: [
                { t: "عرض فيديو حقيقي للمطعم", d: "تُعرض الأطباق في مقاطع فيديو عمودية جذابة تثير شهية الزبائن وتزيد الطلب." },
                { t: "أزرار حجز وطلب فورية", d: "زر لحجز طاولة أو طلب طبق معين بنقرة واحدة مباشرة أثناء مشاهدة الفيديو." },
                { t: "مهيأ لشبكات التواصل الاجتماعي", d: "رابط مثالي لوضعه في حساب إنستغرام أو لطباعة أكواد الـ QR على الطاولات." },
                { t: "معدل تفاعل ومبيعات أعلى", d: "يساهم تصفح الفيديو في إبقاء العميل بالموقع لفترة أطول وزيادة حجم الطلب." }
            ]
        },
        4: {
            num: "وحدة 04",
            title: "إدارة مؤتمتة وتحليل مالي ذكي",
            desc: "اربط المطبخ بإدارة الحسابات لتفادي العمليات اليدوية المجهدة وضبط نفقاتك.",
            features: [
                { t: "حساب تكلفة Ingredients ديناميكي", d: "يحسب النظام تلقائياً التكلفة الحقيقية وهوامش الربح مع كل تغيير لأسعار الموردين." },
                { t: "قارئ ذكي لفواتير المشتريات", d: "صور الفواتير بهاتفك؛ ليقوم الذكاء الاصطناعي باستخراج القيم وتحديث التكاليف فوراً." },
                { t: "إرسال التقارير التلقائي للمحاسب", d: "ينظم فواتيرك وتقرير المبيعات شهرياً ويرسلها تلقائياً لمكتب المحاسبة الخاص بك." },
                { t: "مطابقة المبيعات مع المشتريات", d: "رسومات بيانية يومية توضح لك صافي أرباحك وتنبيهك عند حدوث أي خلل مالي." },
                { t: "شاشات المطبخ الرقمية KDS", d: "إرسال طلبات الـ TPV فوراً لشاشات المطبخ التفاعلية لمنع ضياع الأوراق وتسريع التحضير." }
            ]
        },
        5: {
            num: "وحدة 05",
            title: "إدارة سمعة المطعم بالذكاء الاصطناعي",
            desc: "حافظ على ظهورك بالصدارة في خرائط جوجل عن طريق الرد الفوري على التقييمات وحل الشكاوى.",
            features: [
                { t: "روبوت ردود جوجل على مدار الساعة", d: "يرد تلقائياً بشكل مخصص وبلغة العميل على كل تقييم جديد في خرائط جوجل." },
                { t: "نظام فلترة التقييمات السلبية", d: "يرسل النظام تنبيهاً لهاتفك بالتقييم السلبي مع اقتراح رد ذكي لتراجعه وتوافق عليه." },
                { t: "لوحة تحليل رضا الزبائن", d: "إحصاءات ورسوم توضح مدى رضا عملائك وتطور تقييمات مطعمك شهراً بشهر." },
                { t: "نبرة صوت مخصصة لمطعمك", d: "نبرمج المساعد للرد بأسلوب رسمي أو ودي يتماشى تماماً مع هوية علامتك التجارية." }
            ]
        },
        6: {
            num: "وحدة 06",
            title: "تحسين محركات البحث المحلي لجوجل",
            desc: "اضمن ظهور مطعمك بالصدارة للباحثين عن الطعام في منطقتك لزيادة الزوار الجدد.",
            features: [
                { t: "تهيئة فنية كاملة للحساب", d: "إعداد احترافي لحسابك وصور أطباقك والكلمات المفتاحية الأساسية للبحث." },
                { t: "جدولة المنشورات التلقائية", d: "برمجة ونشر منشورات دورية في جوجل حول أطباقك الجديدة وعروضك بشكل آلي." },
                { t: "زيادة العملاء الفعليين", d: "تحسين معدلات الاتصال بمطعمك، وطلبات تحديد الاتجاهات على الخريطة، وزوار الموقع." }
            ]
        },
        7: {
            num: "وحدة 07",
            title: "تطوير مواقع إلكترونية سريعة ومميزة",
            desc: "نصمم موقعك بتصميم جذاب وسرعة فائقة يركز كلياً على دفع الزوار للطلب والحجز.",
            features: [
                { t: "تصميم متوافق مع الموبايل", d: "مهيأ ليعمل بأقصى سرعة وسهولة قراءة وتصفح على كافة شاشات الهواتف." },
                { t: "قائمة طعام وحجز متكاملين", d: "وصول مباشر لنظام الحجز بدون عمولات وقائمة الطعام التفاعلية بمجرد فتح الموقع." },
                { t: "تصميم يعكس هويتك", d: "ألوان وعناصر مرئية تتماشى بالكامل مع شعار مطعمك وهوية مشروعك." }
            ]
        },
        8: {
            num: "وحدة 08",
            title: "حملات إعلانات جوجل Ads",
            desc: "اجذب زبائن جدد لمطعمك بكفاءة عبر إعلانات محلية ممولة تظهر للباحثين بجوجل.",
            features: [
                { t: "استهداف محلي دقيق جداً", d: "توجيه الإعلانات حصرياً للأشخاص الموجودين في محيط مطعمك الجغرافي." },
                { t: "تركيز على الاتصالات والحجوزات", d: "صياغة إعلانات تدفع العميل للاتصال الهاتفي الفوري أو حجز طاولة مباشرة." },
                { t: "متابعة دقيقة للأرباح والنتائج", d: "تقارير توضح بدقة عدد الطاولات والعملاء الذين تم جذبهم مقابل كل درهم أنفقته." }
            ]
        }
    }
};
