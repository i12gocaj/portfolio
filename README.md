# Javier González Casares · Portfolio

Portfolio de ciberseguridad y análisis de malware, construido con HTML, CSS y JavaScript estáticos.

![Vista de escritorio](preview-desktop.png)

La web reúne cuatro proyectos destacados y otros 17 con búsqueda y filtros, 25 entradas de trayectoria y cinco PDF. BrillanteSeguro tiene una sola ficha para su repositorio y su web. El máster figura como terminado y el diploma de ingeniería inversa e inteligencia de malware como en curso, según lo confirmado por Javier.

El contenido público está en inglés. [COPY-AUDIT.md](COPY-AUDIT.md) explica la revisión del texto; [DESIGN.md](DESIGN.md), los criterios visuales; y [VALIDATION.md](VALIDATION.md), las comprobaciones.

## Ejecutar en local

No requiere instalación ni compilación. Desde esta carpeta:

```sh
python -m http.server 4173
```

Abre `http://localhost:4173/`. Un servidor local permite probar el portapapeles, los símbolos SVG y el formulario en el contexto normal del navegador.

## Publicación y edición

Se mantiene la estructura de GitHub Pages: `index.html` y rutas relativas a `assets/`. La web pública cambia cuando se integra la propuesta en la rama de publicación.

- Contenido: `index.html`.
- Tipografía, colores y estructura: `assets/css/styles.css`.
- Ilustraciones y ajustes de proyectos: `assets/css/personality.css`.
- Menú, filtros, enlaces directos y formulario: `assets/js/main.js`.
- Detalle opcional del insecto: `assets/js/personality.js`.
- Símbolos de proyectos: `assets/img/project-marks.svg`.

El orden está en el HTML y se conserva sin JavaScript. Las categorías usan `data-category`; los parámetros `category` y `q` conservan el filtro y la búsqueda. El antiguo enlace `#project-13` abre la ficha unificada de BrillanteSeguro.

El formulario usa `https://formspree.io/f/myzelwak`. Una única prueba real, autorizada el 8 de octubre de 2026, recibió HTTP 200 y `ok: true`; la recepción en el buzón sigue pendiente de confirmación. Las comprobaciones posteriores usan respuestas simuladas.

Hanken Grotesk y Caveat se alojan localmente con licencia SIL Open Font License. Las licencias están en `assets/fonts/`. Los PDF y las imágenes originales no se han editado.
