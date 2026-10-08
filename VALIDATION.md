# Verificación · 8 de octubre de 2026

Comprobado localmente en Chrome mediante Playwright y axe-core 4.10.3, después de extender la identidad visual a toda la página, añadir el diagrama de SecEmail y las miniaturas reales de documentos.

## Contenido

El inventario anterior al cambio visual, en el commit `4db9f4d06e54b3a3d2403836855b9e185f07232d`, se comparó con el DOM actual:

- Los títulos y las descripciones de los 21 proyectos coinciden exactamente, tras normalizar los espacios y comparar el texto descriptivo por separado de los enlaces. Se añade un enlace a la prueba grabada pública de Instagram.
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
- La navegación marca las cuatro secciones al seguir sus enlaces. Al final de una pantalla alta marca Contacto, aunque esa sección no pueda llegar a la línea de lectura. Se elimina el espacio duplicado entre el destino y la cabecera fija.
- Los cinco enlaces de descarga responden con archivos PDF válidos; sus bytes coinciden con los originales. Sus cinco miniaturas WebP, generadas a partir de la primera página con Poppler, cargan correctamente y se han revisado visualmente. Se comprueba también el reflujo interno de los enlaces entre 320 y 1440 px.
- Las tres referencias desde NASA, Policía y Navantia llegan a la carta correcta y destacan su miniatura.
- La nota del retrato funciona con teclado y anuncia su estado. La comparación de Instagram funciona con flechas, Home y End; muestra una vista a la vez y anuncia su selección.
- Sin JavaScript, las 25 entradas siguen visibles en sus grupos, los desplegables nativos funcionan y el correo permanece disponible.
- Nombre, logo, fechas y resultados usan Hanken Grotesk. Se han retirado la fuente pixel y sus archivos.
- La preferencia de movimiento reducido desactiva la animación de la onda y el resto del movimiento decorativo.
- Los 203 usos de símbolos SVG de la página resuelven a un identificador existente en el sprite local. Los símbolos se han revisado por significado: [ICON-AUDIT.md](ICON-AUDIT.md).
- Sin errores de JavaScript ni respuestas fallidas de los recursos locales solicitados durante las pruebas.

## Contacto

El formulario, los campos y el código de envío se han eliminado. No se producen peticiones POST durante las pruebas. El enlace de correo contiene `mailto:javiergc100@protonmail.com`; el botón copia esa misma dirección y anuncia el resultado. El portapapeles se simula en la comprobación para no modificar el del usuario. Se mantienen los destinos de GitHub, LinkedIn y teléfono.

## Accesibilidad y límites

Ocho análisis de axe-core —las cuatro pestañas a 1440 y 390 px, con detalles abiertos— devuelven **0 infracciones y 0 comprobaciones incompletas** para las etiquetas WCAG A/AA hasta 2.2. También se comprobaron teclado, selección, foco, estados, contraste y reflujo.

Las dos vistas del hallazgo se comprueban también a 1440 y 320 px, con axe-core limitado al componente nuevo: 0 infracciones y 0 comprobaciones incompletas. Sin JavaScript aparecen ambas, con sus etiquetas. El insecto decorativo y su script se han eliminado. El contenido nuevo procede del README público del propietario; el esquema no reproduce datos ni audio del vídeo publicado.

Se realizan cuatro comprobaciones adicionales, limitadas al esquema de SecEmail y a Documentos a 1440 y 320 px: 0 infracciones y 0 comprobaciones incompletas. Los ocho análisis globales se realizan con la página situada arriba; los análisis adicionales se limitan a los componentes indicados.

Las comprobaciones automatizadas no certifican cumplimiento completo de WCAG. No se han realizado pruebas con un lector de pantalla real ni con todos los navegadores o dispositivos. Los destinos externos se conservan; no se ha probado exhaustivamente su disponibilidad.

## Entrega

HTML/CSS/JS estáticos, fuentes alojadas localmente y símbolos SVG propios. Se conserva la estructura de publicación en GitHub Pages, sin dependencias de aplicación ni compilación. La propuesta sigue en la rama de rediseño y en una PR en borrador.
