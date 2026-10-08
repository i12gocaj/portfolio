# Auditoría final · 8 de octubre de 2026

Se revisó la propuesta completa desde el commit `cbdbd9d0699335cc41c16b0fba4455f773b2877a`: navegación, contenido, interacciones, enlaces, recursos, accesibilidad, tamaños de pantalla, impresión y carga. Los fallos reproducidos se corrigieron y las pruebas funcionales pasan. La identidad visual y la estructura aprobadas se mantienen.

## Fallos corregidos

| Ubicación                                              | Problema reproducido                                                                                           | Corrección y verificación                                                                                                                                                              |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/js/main.js:85`                                 | La categoría de trayectoria se perdía al recargar o volver atrás.                                              | `background` conserva la categoría en la URL. Atrás restaura la selección; un fragmento de otra categoría deja de quedar obsoleto.                                                     |
| `assets/js/main.js:217`                                | Las fichas abiertas no se podían compartir de forma coherente; Atrás podía dejar otra ficha abierta.           | Abrir una ficha guarda su identificador; cerrar limpia su fragmento y Atrás restaura el proyecto correspondiente. Se comprueban los 46 destinos y el alias antiguo de BrillanteSeguro. |
| `assets/js/main.js:244`                                | Ctrl+clic en un enlace interno modificaba también la pestaña actual.                                           | Se respetan los modificadores y el comportamiento del navegador. Comprobado con Ctrl+clic.                                                                                             |
| `assets/js/main.js:36`                                 | Al pasar de escritorio a móvil, el foco podía quedar en un enlace oculto.                                      | El foco pasa al botón de menú. Escape devuelve el foco al botón; salir de la navegación cierra el menú.                                                                                |
| `assets/css/analysis.css:7`                            | La cabecera tapaba algunos controles al recorrerlos con teclado; los destinos tenían un margen duplicado.      | Un único desplazamiento protege el foco y los enlaces. Recorrido de teclado y las cuatro secciones comprobados.                                                                        |
| `assets/css/analysis.css:648`                          | El menú abierto comprimía el logo; la navegación sin JavaScript desbordaba a 320 px.                           | Altura y espacios corregidos; navegación en dos columnas en pantallas pequeñas. Cinco tamaños con menú abierto, incluidos ambos lados de 420 px.                                       |
| `assets/css/analysis.css:20`                           | El símbolo de menos del menú aparecía como una barra diagonal.                                                 | Se elimina la rotación antigua. Más y menos corresponden al estado real.                                                                                                               |
| `assets/css/analysis.css:31`                           | El espaciado ampliado del texto desbordaba enlaces y títulos estrechos.                                        | Los elementos admiten reflujo. Probado a 320 px con interlineado 1,5, espaciado de letras 0,12 em, palabras 0,16 em y párrafos 2 em.                                                   |
| `assets/js/main.js:322`, `assets/css/analysis.css:783` | La impresión omitía grupos ocultos y descripciones plegadas.                                                   | Se imprime todo el contenido relevante y se restaura el estado anterior. Probado también desde una búsqueda y una categoría distintas de las iniciales.                                |
| `index.html:129`, `index.html:3488`                    | El nombre accesible del logo omitía su texto visible `jg.`.                                                    | Las etiquetas incluyen el texto visible. La observación de Lighthouse desaparece.                                                                                                      |
| `index.html:199`, `index.html:691`                     | Las imágenes descargaban versiones mayores de las necesarias y el retrato declaraba una proporción incorrecta. | WebP con `srcset` y tamaños adecuados; proporción 800 × 741. Originales conservados y nuevas versiones revisadas visualmente.                                                          |
| `assets/js/main.js:318`                                | La medición inicial de geometría provocaba un recálculo forzado del diseño.                                    | Se programa después de cargar mediante `requestAnimationFrame`. La observación de recálculo forzado desaparece de la medición final.                                                   |

## Enlaces externos

- **Scouts La Salle:** la URL HTTPS anterior falla con un error TLS; su variante HTTP redirige al [dominio oficial actual](https://scoutlasallecordoba.es/), cuya página corresponde al mismo grupo de Córdoba. El enlace del proyecto se actualiza a ese dominio.
- **Network Monitor Pro:** la URL anterior de App Store devuelve 404 en una petición HTTP y en Chrome. La consulta oficial de Apple para España y Estados Unidos devuelve cero resultados para ese identificador. Se conserva la ficha y se muestra «App Store link currently unavailable». Esto no demuestra que la aplicación haya desaparecido de todas las regiones o con cualquier otro identificador.
- **BuyTheTop:** la URL pública devuelve 401 tanto por HTTP como en Chrome, con el mensaje «No autorizado. Abre la URL completa con el token». Se conserva el enlace al repositorio y se indica que la web requiere un token de acceso.
- **LinkedIn:** las peticiones automatizadas devuelven 405 con HEAD y 999 con GET. Su disponibilidad queda sin verificar; el enlace se mantiene.
- Los otros destinos publicados responden correctamente en la comprobación HTTP, incluidos los repositorios, la prueba grabada de Instagram, el audio del TFG y la página del diploma. Una respuesta HTTP correcta no sustituye una prueba funcional completa de cada servicio externo.

## Pruebas realizadas

| Área                     | Resultado                                                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido                | 21 proyectos y 25 entradas de trayectoria; títulos y descripciones preservados frente al inventario anterior. Tres cambios de enlaces indicados arriba.                               |
| Documentos               | Los cinco PDF responden y sus bytes coinciden con los originales. Una sola descarga del CV.                                                                                           |
| Interacciones            | 16 pruebas ampliadas superadas: destinos, URL, Atrás, búsqueda, filtros, teclado, menú, copia de correo con éxito y fallo, contenido sin JavaScript, impresión y espaciado.           |
| Adaptación               | Sin desbordamiento horizontal a 320, 390, 600, 601, 768, 900, 1024, 1440 y 1920 px con las cuatro categorías y detalles abiertos. Comprobaciones adicionales del menú a 420 y 421 px. |
| Accesibilidad automática | 21 análisis axe-core 4.10.3: ocho globales y trece de componentes/menú, todos con cero infracciones y cero comprobaciones incompletas.                                                |
| HTML                     | html-validate 11.16.2: cero errores y cero avisos de estructura y semántica. Se excluyen preferencias de formato válidas equivalentes.                                                |
| Recursos e iconos        | Recursos locales comprobados sin respuestas fallidas; 201 usos SVG resueltos. Sin errores de JavaScript registrados.                                                                  |
| Contacto                 | Correo `mailto:` y copia con confirmación accesible. Se simulan éxito y rechazo del portapapeles; el del usuario no se modifica. No hay formulario ni nuevos envíos.                  |
| Movimiento               | Preferencia de movimiento reducido respetada; la comparación sigue funcionando.                                                                                                       |

Se revisaron las capturas de portada, móvil, menú, proyectos, trayectoria, documentos, contacto, impresión y texto con espaciado aumentado. Las reglas de interfaz se contrastaron con las [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), aplicando las pertinentes al portfolio.

[audit-results.json](audit-results.json) conserva los resultados funcionales, de contenido, componentes, HTML, las 31 URL externas actuales y el resumen de las mediciones Lighthouse. Treinta destinos externos responden 200; LinkedIn queda sin verificar.

## Rendimiento local

Lighthouse 13.5.0, Chrome 154 y servidor HTTP local. Las cifras varían entre ejecuciones; son mediciones de laboratorio, no resultados de visitantes reales.

| Medición                | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP   | Bloqueo total | CLS |
| ----------------------- | ----------- | ------------- | ---------------- | --- | ----- | ------------- | --- |
| Móvil antes de corregir | 89          | 100           | 100              | 100 | 3,1 s | 200 ms        | 0   |
| Móvil al terminar       | 93          | 100           | 100              | 100 | 2,7 s | 170 ms        | 0   |
| Escritorio al terminar  | 100         | 100           | 100              | 100 | 0,5 s | 0 ms          | 0   |

El retrato móvil WebP pesa 32,9 KB frente a 73,2 KB del original; la captura de Atlas de 640 px pesa 11,7 KB frente a 41,5 KB. Los originales siguen disponibles y no se han editado. La selección final depende del tamaño de pantalla y la densidad de píxeles.

Lighthouse sigue sugiriendo minificar CSS/JS y revisar el camino de carga de los estilos. También señala caché y compresión que el servidor Python local no proporciona. Son oportunidades de optimización; no se añaden herramientas de compilación para resolver avisos del servidor de pruebas. Los estilos aparentemente no usados incluyen estados ocultos, tamaños de pantalla e impresión y no se eliminan a ciegas.

## Límites y cierre

No quedan fallos reproducibles abiertos en los recorridos comprobados. Esto no garantiza ausencia absoluta de errores ni certifica WCAG. Falta una prueba con lector de pantalla real, Safari/Firefox, dispositivos físicos y zoom real del navegador; se comprobó el reflujo a 320 píxeles CSS. No se ha medido la carga de la propuesta ya publicada en GitHub Pages, su caché o compresión, ni se han probado exhaustivamente los servicios externos.

La entrega conserva HTML/CSS/JS estáticos, rutas relativas, fuentes locales y documentos originales. Los cambios quedan en la rama de rediseño y la PR en borrador, junto con capturas y este informe. La publicación en la rama de producción no forma parte de esta auditoría.
