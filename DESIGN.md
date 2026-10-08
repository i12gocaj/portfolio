# Diseño del portfolio

El portfolio original utilizaba una introducción de terminal, partículas, tarjetas repetidas y paginación de cuatro proyectos. La cronología mezclaba empleos, formación, premios y actividades. El rediseño presenta primero la identidad profesional y el trabajo, y agrupa la trayectoria para facilitar su lectura.

Se conservan HTML, CSS y JavaScript estáticos y la estructura de GitHub Pages, sin dependencias de aplicación.

## Criterios visuales

La identidad recorre toda la página con un lenguaje de análisis: marcos abiertos, conexiones entre fuentes y anotaciones en los márgenes. Se mantiene la estructura limpia y la tipografía legible. La portada combina el nombre sin efectos con un retrato de esquina recortada y un marco abierto; su ubicación y formación actual se conectan con el retrato.

Los cuatro proyectos destacados comparten el marco, pero muestran contenidos diferentes: relaciones entre fuentes de AllOsint, comparación del fallo de Instagram, capas de autenticación de SecEmail y captura real de Atlas. El esquema de SecEmail muestra SPF (servidores remitentes), DKIM (firma del mensaje) y DMARC (alineación y política). Procede del [README del propietario](https://github.com/i12gocaj/SecEmail), consultado el 8 de octubre de 2026, blob `eb6eca7e79f03e3e70fc394bdcd25ce9449ab85c`; no es un resultado de auditoría ni una simulación en ejecución.

La formación utiliza una conexión continua para los títulos terminados y discontinua para el diploma en curso. Las pestañas y los símbolos de trayectoria e índice siguen el mismo lenguaje, conservando su función. El archivo de documentos muestra miniaturas de la primera página de los cinco PDF reales: CV destacado y cuatro cartas, sin añadir otra descarga del CV. Las entradas de NASA, Policía y Navantia enlazan sus respectivas cartas. El correo cierra la página con el mismo marco abierto.

Los marcos se reservan para identidad, ilustraciones, foco y acciones. No se añaden terminales ficticios, datos de análisis inventados, números decorativos o animaciones al desplazarse. El insecto decorativo, su control y su mensaje permanecen retirados.

La comparación explica visualmente el mecanismo descrito en el [informe público de Javier](https://github.com/i12gocaj/Instagram-Notes-Audio-Leakage-via-URL-Extraction-Fixed). Se consultó el README el 8 de octubre de 2026, blob `0f9aadd5bd714bcdcc3e7295bedd3c45d89de589`. La fecha de mayo de 2025 y el estado corregido proceden de ese informe. La onda y las formas son un esquema ilustrativo; no son una captura de Instagram ni audio extraído de la grabación. El enlace a la prueba grabada conduce al archivo que Javier ya publicó en su repositorio.

Hanken Grotesk se utiliza en toda la información: nombre completo, monograma, cifras y fechas. Se han eliminado Pixelify Sans y la mezcla de tratamientos del nombre. Los números de resultados y fechas usan cifras tabulares. El retrato mantiene la fotografía original con un recorte limpio y su nota personal opcional.

Los símbolos SVG se han redibujado con trazos propios sobre una cuadrícula de 24 × 24. Cada uno representa el contenido de su proyecto; no se presentan como logos de empresas. Los controles tienen símbolos según su acción. El diagrama de AllOsint y la comparación de Instagram muestran información del trabajo, con formas distintas según su contenido. [ICON-AUDIT.md](ICON-AUDIT.md) recoge el criterio de cada caso.

| Color     | Uso                          |
| --------- | ---------------------------- |
| `#F2F4F7` | Fondo                        |
| `#25303F` | Texto principal              |
| `#5746A6` | Acciones y selección         |
| `#E8ECF1` | Secciones de apoyo           |
| `#526078` | Texto secundario             |
| `#D3DBE6` | Interior de los símbolos     |
| `#CE855E` | Nodos del diagrama y diploma |

El movimiento responde al cambio de vista del hallazgo, al foco o a la apertura de contenido. No hay bucles decorativos ni animación de entrada en la portada. La preferencia de movimiento reducido desactiva animaciones y transiciones; la comparación sigue cambiando de estado al activarla. Sin JavaScript se muestran las dos vistas, etiquetadas.

## Contenido y orden

La selección es AllOsint, la vulnerabilidad de Instagram Notes, SecEmail y Atlas. AllOsint ocupa la pieza principal; los dos casos de seguridad aparecen a su lado y Atlas cierra la selección con su captura real. El índice de los otros 17 proyectos utiliza tres columnas de iconos y títulos, dos en móvil. Al abrir uno, su descripción ocupa todo el ancho disponible y se cierra la ficha anterior. Se conservan la búsqueda y los filtros.

La trayectoria comienza con tres hitos: grado terminado en 2025, máster terminado en 2026 y diploma actual. Debajo, cuatro pestañas separan experiencia, formación, premios y comunidad. La vista inicial muestra las cuatro experiencias profesionales, con sus detalles desplegables. Los enlaces directos seleccionan la pestaña correspondiente. Sin JavaScript, todos los grupos siguen disponibles y etiquetados.

Los documentos y el contacto cierran la página. Hay una sola descarga del CV. El contacto muestra el correo directamente y permite copiarlo; no hay formulario. La auditoría conserva los enlaces a documentos, código y perfiles, actualiza el dominio scout y sustituye dos destinos inaccesibles por avisos de disponibilidad: App Store devuelve 404 y BuyTheTop exige un token. Los proyectos siguen presentes.

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
