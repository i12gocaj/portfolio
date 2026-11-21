---
updated: 2026-11-21
---

Tenía ocho o nueve años cuando vi por primera vez un correo que mentía sobre quién lo enviaba. Decía venir de Google y no venía de Google. Alguien había escrito en la cabecera lo que le había dado la gana y el mensaje había llegado igualmente, tan tranquilo, a la bandeja de entrada.

A un niño al que no le cabía otra pregunta en la boca que "¿por qué?", aquello le explotó la cabeza.

No tardé en dar con [emkei.cz](https://emkei.cz), una página que te dejaba enviar un correo con el remitente que quisieras y que, sorprendentemente, sigue activa hoy. Se me abrió un sinfín de posibilidades para gastar bromas a mis colegas y a mi familia. No recuerdo bien qué llegué a enviar en aquella época. Sí recuerdo que hoy no estaría muy bien visto.

Tengo un problema, y es que me aburro enseguida. En cuanto entiendo cómo funciona algo, o creo que lo entiendo, dejo de usarlo. Se me ocurrieron mil formas de hacer daño con aquello y no usé ninguna, porque hacer el mal nunca ha sido lo que me mueve. Pero tampoco me movía lo contrario: no dediqué ni un minuto a pensar cómo se podía evitar. Pasé a otra cosa.

Eran otros tiempos. Los filtros de correo no deseado fallaban más que acertaban y casi nadie había visto una estafa así, de modo que la gente se las comía con papas. Hoy lo raro es que pase un día sin recibir alguno, y la mayoría sabemos reconocerlos al vuelo. Eso los que llegan: muchos ni se entregan y otros mueren en la carpeta de spam.

---

Unos catorce años después me volví a chocar con el tema, esta vez desde el otro lado. En uno de mis análisis de ciberestafas me tocó leer las cabeceras de un correo, algo que hasta entonces nunca había necesitado hacer. Y entonces lo comprendí de verdad.

El correo nació como las cartas de papel: en el sobre escribes el remitente que quieras y nadie lo comprueba. Todo lo que hoy nos protege se añadió después, en tres capas. **SPF** es la lista de servidores a los que un dominio autoriza a enviar en su nombre. **DKIM** es un sello criptográfico que demuestra que nadie ha tocado el mensaje por el camino. Y **DMARC** es la norma que une las dos anteriores con el remitente que tú ves, y le dice a quien recibe qué hacer cuando fallan: entregarlo, mandarlo a spam o rechazarlo.

Lo que yo hacía de pequeño funcionaba porque casi nadie tenía esa tercera capa. Lo que me sorprendió de mayor es que todavía hay muchos dominios que la tienen a medias.

Esta vez sí me paré a pensar en cómo mitigarlo. Y gracias a la IA, ahora sí, pude poner mis ideas sobre la mesa y convertirlas en una herramienta.

SecEmail hace lo que haría un atacante, pero con permiso. Audita un dominio o un correo concreto, comprueba SPF, DKIM, DMARC y ARC, verifica las firmas y te dice en una frase qué está roto. Y cuando la auditoría está autorizada, permite llevarla hasta el final: enviar el correo suplantado, jugar con la ingeniería social y con los filtros, medir quién lo abre y quién acaba escribiendo su contraseña, y dejar un registro de todo lo que se hizo para poder explicarlo meses después.

La pensé para equipos de Red Team por una razón sencilla. Quien quiera engañarte no va a dudar ni un segundo en usar las mejores técnicas y las mejores herramientas. Lo mínimo es que quien te defiende juegue con las mismas.

El niño de las bromas se aburrió del truco en cuanto creyó entenderlo. Ha hecho falta volver a encontrármelo de adulto para darme cuenta de que no lo había entendido del todo, y de que la parte interesante empezaba justo donde yo lo dejé.
