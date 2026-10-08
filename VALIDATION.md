# Verificación · 8 de octubre de 2026

Comprobado localmente en Chrome mediante Playwright y axe-core 4.10.3, tras el cambio a la temática de análisis de malware y la retirada de la tipografía pixel.

## Contenido

El inventario anterior al cambio visual, en el commit `8216fa428da0ad92f689b13d37d182ef732f4acd`, se comparó con el DOM actual:

- Los títulos y las descripciones de los 21 proyectos coinciden exactamente, tras normalizar los espacios.
- Las descripciones de las 25 entradas de trayectoria coinciden exactamente. La reorganización conserva sus identificadores y fechas.
- Todos los destinos de enlaces del inventario anterior siguen presentes, incluidos los cinco PDF, el audio de defensa del TFG, el correo y el teléfono.
- BrillanteSeguro mantiene una sola ficha para su web y su repositorio. El antiguo enlace `#project-13` abre esa ficha.
- El máster figura como terminado y el diploma de ingeniería inversa e inteligencia de malware como en curso, según las correcciones del propietario.
- El CV tiene un único enlace. Sus contenidos, los otros PDF y las imágenes originales no se han modificado.

## Navegación y presentación

- Sin desbordamiento horizontal a 320, 390, 600, 601, 768, 900, 1024, 1440 y 1920 px, con las cuatro pestañas y entradas desplegadas.
- Capturas de escritorio, móvil, proyectos, índice y trayectoria revisadas visualmente.
- El índice abre una ficha de proyecto a la vez. Búsqueda, filtros, estado sin resultados y persistencia de la consulta al recargar comprobados.
- Una búsqueda que oculta el proyecto enlazado elimina ese fragmento obsoleto de la URL; recargar conserva la consulta.
- Los enlaces directos abren proyectos ocultos por un filtro y seleccionan la pestaña correcta de trayectoria. Los hitos de formación abren sus detalles.
- Las pestañas funcionan con flechas, Home y End; mantienen selección y foco mediante ARIA.
- El menú móvil anuncia su estado y se cierra con Escape. Su símbolo cambia al abrirlo y cerrarlo.
- La navegación marca la sección activa. Los cinco enlaces de descarga responden con archivos PDF válidos.
- La nota del retrato y la ilustración del insecto funcionan con teclado y anuncian su estado. La ilustración se puede inspeccionar y restablecer.
- Sin JavaScript, las 25 entradas siguen visibles en sus grupos, los desplegables nativos funcionan y el correo permanece disponible.
- Nombre, logo, fechas y resultados usan Hanken Grotesk. Se han retirado la fuente pixel y sus archivos.
- La preferencia de movimiento reducido desactiva las transiciones de la ilustración y el resto del movimiento decorativo.
- Los 194 usos de símbolos SVG de la página resuelven a un identificador existente en el sprite local. Los símbolos se han revisado por significado: [ICON-AUDIT.md](ICON-AUDIT.md).
- Sin errores de JavaScript ni respuestas fallidas de los recursos locales solicitados durante las pruebas.

## Contacto

El formulario, los campos y el código de envío se han eliminado. No se producen peticiones POST durante las pruebas. El enlace de correo contiene `mailto:javiergc100@protonmail.com`; el botón copia esa misma dirección y anuncia el resultado. El portapapeles se simula en la comprobación para no modificar el del usuario. Se mantienen los destinos de GitHub, LinkedIn y teléfono.

## Accesibilidad y límites

Ocho análisis de axe-core —las cuatro pestañas a 1440 y 390 px, con detalles abiertos— devuelven **0 infracciones y 0 comprobaciones incompletas** para las etiquetas WCAG A/AA hasta 2.2. También se comprobaron teclado, selección, foco, estados, contraste y reflujo.

La ilustración inspeccionada se comprobó además a 1440 y 320 px: sin desbordamiento, con el restablecimiento funcionando y sin infracciones ni comprobaciones incompletas de axe-core. Las etiquetas de la ilustración usan texto HTML; el dibujo SVG es decorativo.

Las comprobaciones automatizadas no certifican cumplimiento completo de WCAG. No se han realizado pruebas con un lector de pantalla real ni con todos los navegadores o dispositivos. Los destinos externos se conservan; no se ha probado exhaustivamente su disponibilidad.

## Entrega

HTML/CSS/JS estáticos, fuentes alojadas localmente y símbolos SVG propios. Se conserva la estructura de publicación en GitHub Pages, sin dependencias de aplicación ni compilación. La propuesta sigue en la rama de rediseño y en una PR en borrador.
