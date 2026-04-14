# Arquitectura del Proyecto: Doña Nela

Este documento detalla la estructura técnica, activos y decisiones de diseño del proyecto de landing page para los concentrados de fruta premium de Doña Nela.

## 1. Estructura de Archivos
El proyecto se organiza de la siguiente manera:
- `/fruit_concentrates/`
    - `index.html`: Estructura semántica, triggers de scroll y contenedores de video.
    - `styles.css`: Sistema de diseño (Olipop-style), variables de color dinámicas y transiciones.
    - `script.js`: Lógica de Intersection Observer para el cambio automático de sabores y beneficios.
    - `/assets/`:
        - `logo.png`: Isotipo circular de la marca.
        - `chicha.png`, `maracuya.png`, `camu_camu.png`: Imágenes de botellas de 1L.
        - `hero_video.mp4`: Video promocional central.

## 2. Tecnologías y Estándares
- **HTML5/CSS3**: Uso de Flexbox y CSS Grid para layout. Variables CSS (`:root`) para manejo dinámico de temas de color.
- **JavaScript (Vanilla)**: Implementación de `IntersectionObserver` para detectar la posición del usuario y disparar cambios de estado sin frameworks pesados.
- **Tipografía**: Fredoka (Google Fonts) para un estilo redondeado, amigable y premium.

## 3. Estado de Versiones
- **v1.0**: Diseño inicial base tipo landing.
- **v1.1**: Integración de video hero y cambio a tipografía Fredoka.
- **v1.2 (Actual)**: 
    - Corrección de layout (logo circular, navbar transparente).
    - Implementación de `benefit-box` (beneficios de salud dinámicos).
    - Lógica de scroll v2 (soporte para scroll ascendente y descendente).
    - Eliminación de assets que tapaban el video.

## 4. Decisiones de Diseño Críticas
- **Estética Olipop**: Bordes muy redondeados (60px-80px), colores pasteles vibrantes y minimalismo.
- **Interactividad**: El usuario no navega, "vive" la transición de sabores a través del scroll.
- **Mobile First**: Diseño optimizado prioritariamente para visualización en móviles y pedidos directos vía WhatsApp.
