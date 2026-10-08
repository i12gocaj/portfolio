# Diseño del portfolio

El portfolio original utilizaba una introducción de terminal, partículas, tarjetas repetidas y paginación de cuatro proyectos. La cronología mezclaba empleos, formación, premios y actividades. El rediseño presenta primero la identidad profesional y el trabajo, y agrupa la trayectoria para facilitar su lectura.

Se conservan HTML, CSS y JavaScript estáticos y la estructura de GitHub Pages, sin dependencias de aplicación.

## Criterios visuales

La temática parte de una mesa de análisis de malware: conexiones entre indicios, diagramas y estructura interna. La pieza propia de la portada es un insecto de línea que se desmonta al pulsar «Inspect the bug». Sus tres ramas muestran estructura, comportamiento y conexiones. La interacción cambia el dibujo y se puede restablecer; no representa un escáner ni resultados reales.

Hanken Grotesk se utiliza en toda la información: nombre completo, monograma, cifras y fechas. Se han eliminado Pixelify Sans y la mezcla de tratamientos del nombre. Los números de resultados y fechas usan cifras tabulares. El retrato mantiene la fotografía original con un recorte limpio y su nota personal opcional.

Los símbolos SVG se han redibujado con trazos propios sobre una cuadrícula de 24 × 24. Cada uno representa el contenido de su proyecto; no se presentan como logos de empresas. Los controles tienen símbolos según su acción. Los nodos circulares y el diagrama de AllOsint comparten el lenguaje de conexiones de la portada. [ICON-AUDIT.md](ICON-AUDIT.md) recoge el criterio de cada caso.

| Color     | Uso                          |
| --------- | ---------------------------- |
| `#F2F4F7` | Fondo                        |
| `#25303F` | Texto principal              |
| `#5746A6` | Acciones y selección         |
| `#E8ECF1` | Secciones de apoyo           |
| `#526078` | Texto secundario             |
| `#D3DBE6` | Interior de los símbolos     |
| `#CE855E` | Nodos del diagrama y diploma |

El movimiento responde a la inspección del insecto, al foco o a la apertura de contenido. Se ha retirado la animación de entrada de la portada. No hay bucles decorativos. La preferencia de movimiento reducido desactiva animaciones y transiciones; la ilustración sigue cambiando de estado al activarla.

## Contenido y orden

La selección es AllOsint, la vulnerabilidad de Instagram Notes, SecEmail y Atlas. AllOsint ocupa la pieza principal; los dos casos de seguridad aparecen a su lado y Atlas cierra la selección con su captura real. El índice de los otros 17 proyectos utiliza tres columnas de iconos y títulos, dos en móvil. Al abrir uno, su descripción ocupa todo el ancho disponible y se cierra la ficha anterior. Se conservan la búsqueda y los filtros.

La trayectoria comienza con tres hitos: grado terminado en 2025, máster terminado en 2026 y diploma actual. Debajo, cuatro pestañas separan experiencia, formación, premios y comunidad. La vista inicial muestra las cuatro experiencias profesionales, con sus detalles desplegables. Los enlaces directos seleccionan la pestaña correspondiente. Sin JavaScript, todos los grupos siguen disponibles y etiquetados.

Los documentos y el contacto cierran la página. Hay una sola descarga del CV. El contacto muestra el correo directamente y permite copiarlo; no hay formulario. Se conservan los enlaces anteriores a los proyectos, documentos y perfiles.

Los títulos y botones explican su función. Las descripciones dicen qué hizo Javier y para qué sirve cada proyecto. La revisión retiró el tratamiento de «investigador»: era una interpretación del concepto visual, no un cargo proporcionado por el propietario. También eliminó eslóganes, anotaciones redundantes y el subrayado curvo del logo.

## Referencias consultadas

- [Brittany Chiang](https://brittanychiang.com/): presentación y trayectoria legibles.
- [Bruno Simon](https://bruno-simon.com/): personalidad ligada al trabajo del autor.
- [Josh W. Comeau](https://www.joshwcomeau.com/): interacción que responde al lector.
- [Figma: portfolios](https://www.figma.com/resource-library/portfolio-website-examples/): jerarquía y presentación de proyectos.
- [Awesome portfolios](https://github.com/benzara-tahar/awesome-portfolios): estructura y navegación.
- [Frontend design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) y [Web design guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines): skills instaladas para el rediseño.
- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/): teclado, contraste, foco, reflujo y controles.

La auditoría editorial está en [COPY-AUDIT.md](COPY-AUDIT.md) y la verificación en [VALIDATION.md](VALIDATION.md).
