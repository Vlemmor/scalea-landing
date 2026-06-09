# Historial de Versiones y Cambios — Scalea Digital

Este documento registra cronológicamente los hitos, cambios de diseño, correcciones y nuevas funcionalidades implementadas en la plataforma de **Scalea Digital** (tanto en la Landing Page como en el Portal de Administración y Cotizaciones).

---

## 📌 Estado Actual y Última Versión Estable
- **Última Versión (Sesión Actual - 09 de Junio 2026):** Optimización responsiva total de Preloader, Visor de Propuesta PDF, Generador de Presupuestos y CRM.
- **Estado de Compilación:** Recompilado de forma exitosa usando Vite.
- **Rama Activa:** `main`

---

## 🛠️ Historial de Commits y Versiones (Git Log)

### 🔹 Versión 1.3.0 (Sesión Actual - 09/06/2026)
* **Descripción:** Adaptación responsiva completa en móviles y tablets para todos los módulos de gestión y preloader de carga.
* **Cambios Clave:**
  - **Landing Page:** Preloader modificado para usar `height: 100dvh` (Dynamic Viewport Height) y dimensiones explícitas de `100px x 100px` en `.loader` para corregir cortes en Safari y Chrome móvil. Escala reducida a `0.9` en pantallas estrechas (<480px).
  - **proposal.html (Visor PDF):** Reemplazo de estilos inline por clases responsivas (`.proposal-header`, `.proposal-footer-grid`) para apilar el logo, botones y pie de página en celulares.
  - **admin.html (Generador):** Adaptación del grid a 1 columna en celulares. Rediseño completo de la fila de servicios `.service-row-header` (vertical en móviles y botones de eliminar de ancho completo).
  - **crm.html (CRM):** Encabezados adaptables y botones de acción apilados a ancho completo para facilitar la interacción táctil.
  - **Sincronización:** Copia de todos los archivos modificados a la carpeta `/public` para su despliegue activo en Railway.

---

### 🔹 Commits Registrados en Git

A continuación se detallan las versiones confirmadas en el repositorio para facilitar cualquier rollback futuro:

#### 1. `commit 631ea641fc4b01638c87b61c784aa9ba25c0ab29` (09/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `fix: aplicar coordenadas y estructura de mascara SVG exacta de Uiverse para AI Loader`
* **Cambio:** Reparación final de coordenadas de la máscara SVG de lava para el preloader.

#### 2. `commit e5bfe5b8012bff1e6627d48525cc3fa2c7ad7d5d` (09/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `fix: resolver bug de mascara SVG en Chrome aplicando estilo inline`
* **Cambio:** Solución de la visualización de la máscara SVG del loader en el navegador Chrome.

#### 3. `commit c9d7354bf4949e3663402374a0680e1eeec62e75` (09/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `feat: restaurar 4 tarjetas de metas y boton Sugerir con IA en el presupuestador`
* **Cambio:** Inclusión del botón inteligente que analiza los servicios mediante la API de Gemini para sugerir metas automáticamente.

#### 4. `commit a2860614b61b56b93509bf089566bc95c7c71c98` (09/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `feat: implementar nuevo loader esferico de lava y restaurar animacion de particulas de fondo`
* **Cambio:** Nueva estética del preloader de lava y fondo de estrellas/partículas canvas.

#### 5. `commit b58c0f3e48ca660fac782756dc4df2c23ae3d061` (08/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `fix: resolve getApiUrl default fallback in admin and crm pages for automated loading`
* **Cambio:** Configuración automática de la URL de Railway según el entorno de ejecución para evitar URLs estáticas incorrectas.

#### 6. `commit 7bb497ffe980c46f05c5069165b093511a0b798a` (08/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `feat: implement lightweight CRM client manager with query parameter pre-filling and past proposal history`
* **Cambio:** Implementación del CRM de Clientes en `crm.html` para consultar propuestas emitidas e iniciar cotizaciones pre-rellenadas.

#### 7. `commit 78ee7effe980c46f05c5069165b093511a0b798a` (08/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `feat: implement premium analytics dashboard with range selector, CSV export, active users, growth rates...`
* **Cambio:** Creación del panel de analíticas dentro de `paneladmin.html` para registrar y auditar el tráfico del sitio y los clics.

#### 8. `commit 3431086f3e75f32a76dc4df2c23ae3d061ab7a94` (08/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `Feat: add package.json and server.js for Node.js backend deployment on Railway`
* **Cambio:** Preparación del backend Express y Firebase Firestore en `server.js` para persistencia en Railway.

#### 9. `commit dfca69f6307c14a648bf9b4c34d374155fa6f4f0` (06/06/2026)
* **Autor:** Rommel Villafana
* **Mensaje:** `Feat: premium design, A4 print adjustments, customizable metrics and AI suggestions`
* **Cambio:** Rebranding estético minimalista (Light Theme), ajuste para imprimir en hoja A4 y envío por correo con Resend.

---

## ⏪ Guía de Rollback a una Versión Estable

Si en algún momento necesitas revertir el código del servidor o la landing page a un punto estable anterior, sigue estas instrucciones:

1. **Verificar el Historial de Git:**
   Abre una consola en la raíz de `ScaleaDigital` y ejecuta:
   ```bash
   git log --oneline -n 10
   ```

2. **Revertir Temporalmente para Pruebas (Modo Desconectado / Detached HEAD):**
   Si quieres probar una versión sin borrar tus cambios actuales:
   ```bash
   git checkout <HASH_DEL_COMMIT>
   ```
   *Ejemplo para regresar a antes de implementar el loader esférico (commit `b58c0f3`):*
   ```bash
   git checkout b58c0f3
   ```

3. **Revertir de Forma Permanente (Descartar cambios posteriores):**
   > [!CAUTION]
   > Este comando borrará de forma permanente cualquier commit realizado después del commit seleccionado. Asegúrate de respaldar cambios antes.
   ```bash
   git reset --hard <HASH_DEL_COMMIT>
   ```

4. **Reconstruir y Desplegar (si aplica):**
   Si revertiste archivos en la carpeta `Web Scalea Digital/src`, debes reconstruir el bundle de React:
   ```bash
   cd "Web Scalea Digital"
   npm run build
   # Luego copia la carpeta dist/assets y dist/index.html a la raíz de ScaleaDigital
   ```
