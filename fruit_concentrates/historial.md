# Historial de Conversaciones: Doña Nela

Este documento sirve como memoria del proyecto para evitar la pérdida de contexto en futuras sesiones.

## 📅 Log de Hitos Principales

### [2026-04-09] - Inicio del Proyecto
- **Objetivo**: Crear landing page para concentrados de fruta peruana en España.
- **Referencia**: Estilo Olipop (retro-pop, pastel, redondeado).
- **Acciones**: Creación de v1.0, generación de imágenes de botellas con IA, primer borrador de HTML/CSS.

### [2026-04-10] - v1.1: El Salto Multimedia
- **User Feedback**: Video hero de Camu Camu entregado por el usuario.
- **Acciones**: Integración de video hero. Cambio de tipografía de Outfit a Fredoka (más amigable).

### [2026-04-10] - v1.2: El "Rescate" de Layout e Interactividad
- **Conflictos detectados**: Layout colapsado, logo tapando texto, navbar bloqueando visión, scroll rompiéndose al subir.
- **Acciones Críticas**:
    - **Logo**: Se forzó recorte circular vía CSS para eliminar marcos blancos.
    - **Video**: Se movió del fondo al "cuadro de producto" para evitar distracciones.
    - **Scroll**: Implementación de `IntersectionObserver` para cambio de sabor automático al scrollear.
    - **Contenido**: Añadido de bloque "Salud/Beneficios" dinámico.
    - **Estética**: Aumento de bordes redondeados a 80px para máxima suavidad visual.

## ⚠️ Observaciones Pendientes / Errores a Vigilar
- **Z-Index**: Vigilar que el Navbar (transparente) no colisione con el logo absoluto.
- **Persistencia en Scroll**: Asegurar que al volver al inicio de la página, el estado de "Chicha" se mantenga siempre como el activo inicial.
- **Diseño del Hero**: Continuar refinando el Hero para que el video sea el protagonista sin elementos que lo tapen innecesariamente.

### [2026-04-14] - v3: Lanzamiento y Publicación
- **UI/UX**: Implementación de Sticky Storytelling (escenario fijo durante scroll).
- **Legibilidad**: Corrección de colores en botones y enlaces (Glassmorphism en navbar).
- **Layout**: Añadido efecto espejo (maracuya a la izquierda) y copy dinámico vendedor.
- **Hito**: Publicación exitosa en GitHub Pages (`https://vlemmor.github.io/scalea-landing/fruit_concentrates/`).
- **Limpieza**: Removidos botones manuales y archivos pesados (>100MB) para optimización de carga.

### [2026-06-03] - v3.1: Optimización Móvil, Tablet y Unificación Estética
- **Breakpoint**: Se cambió el breakpoint principal de `768px` a `1024px` para soportar tablets (iPad, etc.) y evitar colisiones de navbar y problemas de flexbox horizontal.
- **Intro Section**: Limpieza de estilos inline de la animación de inicio que rompían el diseño en móvil. Se modularizó en clases CSS autoadaptables con `clamp`.
- **Estética Unificada**: Se movió la personalización de `.contact-card h2` al CSS para que se aplique en todas las páginas y se unificó la forma de los botones sociales (`.social-btn`) con el estándar de bordes de la marca (5px) en lugar de los antiguos bordes circulares (50px).
- **SEO & Caché**: Se incrementó la versión de carga del stylesheet a `styles.css?v=20` en `index.html`, `quienes-somos.html` y `productos.html`.

