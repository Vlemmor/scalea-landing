# Arquitectura del Software — Scalea Digital

Este documento detalla la estructura, tecnologías, flujos de datos y el flujo de trabajo para el desarrollo, compilación y despliegue del ecosistema digital de **Scalea Digital**.

---

## 🏗️ Estructura del Directorio del Proyecto

El proyecto está dividido en dos directorios principales dentro de la carpeta comercial:

### 1. Directorio de Producción y Backend (`ScaleaDigital/`)
Es la raíz del repositorio Git y contiene el código de ejecución en el servidor (Railway) y los archivos estáticos de producción (GitHub Pages).
- [server.js](file:///c:/Users/USER/OneDrive%20-%20LICENCIATEC%20SAC%20%281%29/Escritorio/CLIENTES/IA/LangGraph/Comercial%20y%20Ventas/ScaleaDigital/server.js): Servidor Node.js + Express. Gestiona APIs, Firebase y envío de correos.
- [index.html](file:///c:/Users/USER/OneDrive%20-%20LICENCIATEC%20SAC%20%281%29/Escritorio/CLIENTES/IA/LangGraph/Comercial%20y%20Ventas/ScaleaDigital/index.html): Archivo principal de la Landing Page (autogenerado por la compilación de React).
- [assets/](file:///c:/Users/USER/OneDrive%20-%20LICENCIATEC%20SAC%20%281%29/Escritorio/CLIENTES/IA/LangGraph/Comercial%20y%20Ventas/ScaleaDigital/assets/): Código JS/CSS compilado y comprimido por Vite.
- **Portal de Cotización y CRM (Archivos Duplicados para GitHub Pages y Railway):**
  - En la Raíz (para GitHub Pages): [admin.html](file:///c:/Users/USER/OneDrive%20-%20LICENCIATEC%20SAC%20%281%29/Escritorio/CLIENTES/IA/LangGraph/Comercial%20y%20Ventas/ScaleaDigital/admin.html), [crm.html](file:///c:/Users/USER/OneDrive%20-%20LICENCIATEC%20SAC%20%281%29/Escritorio/CLIENTES/IA/LangGraph/Comercial%20y%20Ventas/ScaleaDigital/crm.html), [proposal.html](file:///c:/Users/USER/OneDrive%20-%20LICENCIATEC%20SAC%20%281%29/Escritorio/CLIENTES/IA/LangGraph/Comercial%20y%20Ventas/ScaleaDigital/proposal.html), [paneladmin.html](file:///c:/Users/USER/OneDrive%20-%20LICENCIATEC%20SAC%20%281%29/Escritorio/CLIENTES/IA/LangGraph/Comercial%20y%20Ventas/ScaleaDigital/paneladmin.html) y [css/style.css](file:///c:/Users/USER/OneDrive%20-%20LICENCIATEC%20SAC%20%281%29/Escritorio/CLIENTES/IA/LangGraph/Comercial%20y%20Ventas/ScaleaDigital/css/style.css).
  - En `public/` (para Railway): `public/admin.html`, `public/crm.html`, `public/proposal.html` y `public/css/style.css`.
- **Datos Locales (Fallback sin Base de Datos):**
  - `budgets.json`: Historial de propuestas locales.
  - `analytics.json`: Historial de eventos de analíticas local.

### 2. Directorio de Desarrollo Frontend (`Web Scalea Digital/`)
Es una aplicación independiente basada en **Vite + React** que contiene el diseño interactivo y componentes principales de la Landing Page.
- `src/`:
  - `App.jsx` y `index.css`: Inicializadores globales de React.
  - `components/`: Componentes modulares de la Landing Page (Preloader, Hero, Problem, Services, AboutScalea, Experience, sectors, etc.).
- `dist/`: Directorio temporal generado al ejecutar `npm run build` que contiene la compilación estática lista para mover.

---

## 🛠️ Stack Tecnológico

### Frontend (Landing Page)
- **Base:** React 19 (JavaScript modular)
- **Compilador:** Vite 8
- **Animaciones:** Framer Motion (transiciones fluidas y micro-interacciones)
- **Iconografía:** Lucide React
- **Estilos:** Vanilla CSS (diseño responsivo móvil y tablet con variables `:root` HSL/RGB)

### Backend e Infraestructura
- **Servidor:** Node.js + Express
- **Persistencia en la Nube:** Firebase Firestore (Almacenamiento de propuestas y analíticas)
- **Persistencia Local (Resiliencia):** JSON files en disco (`budgets.json`, `analytics.json`) si Firebase no está disponible.
- **Inteligencia Artificial:** API de Gemini (`gemini-2.5-flash`) para analizar propuestas y sugerir metas comerciales automáticamente.
- **Correos Electrónicos:** SDK de Resend para notificar propuestas a clientes desde la dirección `proyectos@scaleadigital.com`.
- **Hosting del Servidor:** Railway.
- **Hosting de Respaldo:** GitHub Pages.

---

## 🔌 API Endpoints (`server.js`)

El servidor Express expone los siguientes servicios JSON B2B:

| Método | Endpoint | Descripción | Parámetros Body |
|---|---|---|---|
| **POST** | `/api/budgets` | Guarda una cotización en Firestore (o localmente en `budgets.json`). | Datos de cliente, servicios contratados, ROI y condiciones. |
| **GET** | `/api/budgets` | Retorna la lista completa de propuestas ordenadas por fecha. | Ninguno. |
| **POST** | `/api/analytics/event` | Registra visitas o clics en WhatsApp (analíticas). | `eventType`, `page`, `referrer`, `language`. |
| **GET** | `/api/analytics/metrics` | Retorna los KPIs procesados (visitas, clics, conversiones, orígenes, dispositivos, idiomas e historial diario). | `range` (`7`, `30`, `90` o `all`). |
| **GET** | `/api/analytics/export` | Descarga el reporte de analíticas en un archivo CSV compatible con Excel. | `range` (`7`, `30`, `90` o `all`). |
| **POST** | `/api/suggest-roi` | Usa la IA de Gemini para sugerir metas cuantitativas basadas en los servicios agregados. | Lista de servicios seleccionados y descripciones. |
| **POST** | `/api/send-proposal` | Envía por correo la cotización en PDF al cliente mediante la API de Resend. | `email`, `clientName`, `proposalLink`, `message`. |

---

## 🔄 Flujo de Trabajo (Desarrollo a Producción)

Para realizar cualquier modificación en la web y asegurar su despliegue sin fallas, sigue estos pasos:

### Paso 1: Edición Frontend (React)
Realiza las modificaciones visuales y funcionales en los componentes ubicados en `Web Scalea Digital/src/components/`.

### Paso 2: Construcción del Proyecto
En la carpeta `Web Scalea Digital/`, ejecuta:
```bash
npm run build
```
Vite generará archivos únicos con sufijos hash en `Web Scalea Digital/dist/`.

### Paso 3: Sincronizar en la Raíz de Producción (`ScaleaDigital/`)
1. Limpia los assets antiguos de la carpeta de producción para evitar duplicidades:
   ```bash
   Remove-Item -Path "ScaleaDigital/assets/*" -Force
   ```
2. Copia los nuevos assets y el archivo de entrada:
   ```bash
   Copy-Item -Path "Web Scalea Digital/dist/assets/*" -Destination "ScaleaDigital/assets/" -Force
   Copy-Item -Path "Web Scalea Digital/dist/index.html" -Destination "ScaleaDigital/index.html" -Force
   ```

### Paso 4: Sincronizar Herramientas del Portal
Si realizas modificaciones en `admin.html`, `crm.html`, `proposal.html` o `css/style.css` en la raíz (GitHub Pages), recuerda copiarlas a la carpeta `/public` para Railway:
```bash
Copy-Item -Path "admin.html", "crm.html", "proposal.html" -Destination "public/" -Force
Copy-Item -Path "css/style.css" -Destination "public/css/" -Force
```

### Paso 5: Probar Servidor en Local
Sitúate en `ScaleaDigital/` y ejecuta:
```bash
npm run dev
```
Esto levantará el backend y servirá los archivos en `http://localhost:3000`.
