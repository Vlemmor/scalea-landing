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

### [Transición a v3]
- **Contrastes de texto**: Arreglado el problema de botones ilegibles (texto blanco sobre fondo blanco se cambió a oscuro). Enlaces del header en blanco.
- **Glassmorphism**: Añadido efecto de difuminado (`backdrop-filter: blur`) en el navbar superior.
- **Logo Area**: Eliminados bordes blancos residuales del logo para que flote limpiamente sobre el navbar difuminado sin generar líneas o barras falsas.
