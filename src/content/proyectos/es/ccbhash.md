---
updated: 2026-11-21
---

Esta historia empieza un día cualquiera en clase de análisis estático, con el profesor José Antonio Onieva, en el Diploma de Experto en Ingeniería Inversa e Inteligencia de Malware.

Nos estaba explicando los tipos de hashes que existen. Entre ellos hay unos pensados para identificar familias de malware: devuelven el mismo hash cuando dos muestras, en esencia, se comportan igual. O por lo menos lo intentan.

En las transparencias aparecía uno llamado CCBHash. Nos contó que se había desarrollado en VirusTotal en colaboración con la Universidad de Málaga, y que todavía le faltaban las pruebas de colisiones para poder empezar a moverlo y darlo a conocer. Y entonces, medio en broma, lo dejó caer: él no tenía tiempo, pero quien quisiera podía animarse a hacerlas.

Me llamó la atención cómo lo dijo. Hacer las pruebas de colisiones de un hash no es precisamente trivial, y lo soltó con toda la naturalidad del mundo, como si cualquiera del mundillo lo tuviera resuelto en unas tardes.

Pero lo que de verdad me dio que pensar fue lo del tiempo. No creo que en ningún momento se le pasara por la cabeza la IA. Yo me preguntaba: ¿y por qué no poner a un agente a hacer el trabajo en segundo plano y revisarlo cuando termine?

Como estoy convencido de que con la IA somos capaces de casi cualquier cosa, no pude rechazar la invitación. Le dediqué unas cuantas tardes, como reto, y porque me atraía la idea de hacer algo de investigación.

Puse a trabajar a los mejores modelos, pero con una condición: una metodología muy estricta, tanto estadística como matemática, para que los resultados no dependieran de lo que la IA creyera, sino de lo que las matemáticas demostraran. Cada afirmación tenía que poder comprobarse. Así no había lugar a que nos equivocásemos.

Lo que salió cabe en una frase: firma igual no implica comportamiento igual. El estudio separa los tres motivos por los que CCBHash da la misma firma a funciones distintas, y acompaña cada uno de ejemplos que cualquiera puede verificar. El más llamativo son 256 funciones que comparten firma y devuelven resultados demostrablemente distintos. Y sobre un corpus público de 7,2 millones de funciones cuenta, una por una, todas las parejas que coinciden.

Llegué a clase y se lo enseñé. Lo primero fue la sorpresa de que alguien hubiera tomado cartas en el asunto a raíz de un comentario hecho de pasada. Lo segundo, después de revisarlo por encima, que tenía muy buena pinta.

Y ahí sigo a día de hoy, esperando a que terminen de revisarlo para poder publicarlo como aportación a la investigación. Mientras tanto, el estudio completo y la forma de reproducirlo están en el repositorio.
