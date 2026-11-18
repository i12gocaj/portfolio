/*
 * English/Spanish language switch.
 *
 * The HTML stays in English. Each key below is an English text fragment
 * (whitespace collapsed) exactly as it appears in index.html, a visible text
 * node or an aria-label / alt / meta value. Switching to Spanish replaces every
 * fragment found here; anything missing simply stays in English. If you edit
 * English copy in index.html, update its key here too (the console warns about
 * untranslated fragments when the page runs on localhost).
 *
 * Language choice: ?lang=es in the URL, then the saved preference, then English.
 */
(() => {
  "use strict";

  const ES = {
    // Head
    "Javier González Casares | Cybersecurity & Malware Analysis":
      "Javier González Casares | Ciberseguridad y análisis de malware",
    "Cybersecurity engineer and malware analyst based in Córdoba, Spain. Security tools, disclosed vulnerabilities and work in digital forensics.":
      "Ingeniero de ciberseguridad y analista de malware en Córdoba, España. Herramientas de seguridad, vulnerabilidades reportadas y trabajo en informática forense.",

    // Header and navigation
    "Skip to content": "Saltar al contenido",
    "jg. Javier González Casares, Home": "jg. Javier González Casares, inicio",
    Menu: "Menú",
    "Main navigation": "Navegación principal",
    Projects: "Proyectos",
    Background: "Trayectoria",
    Documents: "Documentos",
    Contact: "Contacto",

    // Hero
    "Cybersecurity engineer & malware analyst":
      "Ingeniero de ciberseguridad y analista de malware",
    "I analyse malware and test systems for weaknesses.":
      "Analizo malware y busco debilidades en sistemas.",
    "I also build security tools and collaborate with the Spanish National Police on cybercrime investigations.":
      "También desarrollo herramientas de seguridad y colaboro con la Policía Nacional en investigaciones de cibercrimen.",
    "View projects": "Ver proyectos",
    "Córdoba, Spain": "Córdoba, España",
    "Javier González Casares at a professional event":
      "Javier González Casares en un evento profesional",
    "As a kid, I used to break things by accident, now I do it on purpose.":
      "De pequeño rompía cosas sin querer; ahora lo hago a propósito.",
    "Personal note": "Nota personal",
    "Back to photo": "Volver a la foto",
    "Currently studying reverse engineering":
      "Actualmente estudio ingeniería inversa",
    "& malware intelligence at": "e inteligencia de malware en el",
    "Google’s GSEC, Málaga": "GSEC de Google, Málaga",

    // Highlights
    "Selected highlights": "Logros destacados",
    "National Police": "Policía Nacional",
    "Cybercrime collaborator": "Colaborador en cibercrimen",
    "Validated & patched": "Validado y corregido",
    "VDP recognition": "Reconocimiento VDP",
    "Responsible disclosure, 2026": "Divulgación responsable, 2026",
    "CTFTime, Spain": "CTFTime, España",
    "Caliphal Hounds team, 2024": "Equipo Caliphal Hounds, 2024",

    // Selected projects
    "Selected projects": "Proyectos destacados",
    Email: "Correo",
    Phone: "Teléfono",
    Results: "Resultados",
    "Data breaches": "Filtraciones",
    Report: "Informe",
    "54 email checks": "54 comprobaciones de correo",
    "Master’s project": "Proyecto de máster",
    "I built AllOsint for my master’s in Offensive Security. It combines checks on email addresses and phone numbers, messaging app signals and data breach records, then exports selected results as PDF reports. It runs on your own machine and reports when a data source is unavailable.":
      "Desarrollé AllOsint como proyecto de mi máster en Seguridad Ofensiva. Combina comprobaciones de correos electrónicos y números de teléfono, señales de apps de mensajería y registros de filtraciones de datos, y exporta los resultados seleccionados como informes PDF. Se ejecuta en tu propio equipo e indica cuándo una fuente de datos no está disponible.",
    "Technologies and disciplines": "Tecnologías y disciplinas",
    "View thesis repository": "Ver repositorio del TFM",
    "Diagram of the reported Instagram Notes behaviour":
      "Diagrama del comportamiento reportado en Instagram Notes",
    "Compare video playback": "Comparar la reproducción del vídeo",
    "In Instagram": "En Instagram",
    "Original file": "Archivo original",
    "The video played without sound in Instagram Notes.":
      "El vídeo se reproducía sin sonido en Instagram Notes.",
    "Opening the original video URL revealed the audio.":
      "Al abrir la URL original del vídeo aparecía el audio.",
    "Finding diagram · May 2025 · Fixed":
      "Diagrama del hallazgo · may 2025 · Corregido",
    "Vulnerability disclosure": "Divulgación de vulnerabilidad",
    "Instagram Notes audio leak": "Fuga de audio en Instagram Notes",
    "I found a flaw in Instagram Web that made Notes audio accessible through direct video links. I reported it to Meta, which confirmed the issue, fixed it and awarded me $1,000.":
      "Encontré un fallo en Instagram Web que dejaba accesible el audio de las Notas mediante enlaces directos al vídeo. Lo reporté a Meta, que confirmó el problema, lo corrigió y me premió con 1.000 $.",
    "Vulnerability Research": "Investigación de vulnerabilidades",
    "Web Security": "Seguridad web",
    "$1,000": "1.000 $",
    "View report": "Ver informe",
    "View recorded proof": "Ver prueba grabada",
    "Three email authentication checks in SecEmail":
      "Tres comprobaciones de autenticación de correo en SecEmail",
    "Email authentication": "Autenticación de correo",
    "Sending servers": "Servidores de envío",
    "Message signature": "Firma del mensaje",
    "Sender alignment & policy": "Alineación del remitente y política",
    "Authentication layers checked by the toolkit.":
      "Capas de autenticación que comprueba la herramienta.",
    "Email security": "Seguridad del correo",
    "A Python toolkit for checking email authentication and running authorised phishing simulations. It checks the settings that help prevent sender spoofing, verifies email signatures and detects lookalike domains.":
      "Un conjunto de herramientas en Python para comprobar la autenticación del correo y lanzar simulaciones de phishing autorizadas. Revisa la configuración que ayuda a evitar la suplantación del remitente, verifica las firmas de los correos y detecta dominios parecidos.",
    "Email Security": "Seguridad de correo",
    Cryptography: "Criptografía",
    "View code": "Ver código",
    "Technical details": "Detalles técnicos",
    "SPF, DKIM, DMARC and ARC checks; DKIM signature verification; IDN lookalike detection; MTA-STS, TLS-RPT, DANE and BIMI checks. Includes a campaign dashboard with activity tracking and credential capture for authorised tests.":
      "Comprobaciones de SPF, DKIM, DMARC y ARC; verificación de firmas DKIM; detección de dominios IDN parecidos; comprobaciones de MTA-STS, TLS-RPT, DANE y BIMI. Incluye un panel de campañas con seguimiento de actividad y captura de credenciales para pruebas autorizadas.",
    "Atlas dashboard summarising AI copilot usage, teams, cost and unaccepted output":
      "Panel de Atlas que resume el uso de copilotos de IA, equipos, coste y resultados no aceptados",
    "AI usage audit": "Auditoría del uso de IA",
    "A prototype I built for the 2026 Atmira × OpenAI × Big Data Hackathon. It reviews exported AI coding-assistant usage to report costs, adoption, possible sensitive-data exposure and compliance with usage policies. It runs locally, using fixed rules for calculations and a local language model for interpretation.":
      "Un prototipo que desarrollé para el Atmira × OpenAI × Big Data Hackathon 2026. Revisa el uso exportado de asistentes de programación con IA para informar de costes, adopción, posible exposición de datos sensibles y cumplimiento de las políticas de uso. Funciona en local, con reglas fijas para los cálculos y un modelo de lenguaje local para la interpretación.",
    "AI Assurance": "Aseguramiento de IA",
    "AI Governance": "Gobernanza de IA",

    // More security work
    "More security work": "Más trabajo de seguridad",
    "Instagram Password Bypass": "Bypass de contraseña en Instagram",
    "I found a flaw that allowed an Instagram account’s password to be changed without the current password. I reported it to Meta, which patched it.":
      "Encontré un fallo que permitía cambiar la contraseña de una cuenta de Instagram sin conocer la actual. Lo reporté a Meta, que lo corrigió.",
    "Account Takeover": "Toma de control de cuentas",
    "Club Gym Sierra Time Bypass": "Bypass horario en Club Gym Sierra",
    "Mobile Security": "Seguridad móvil",
    "I found a flaw in the Club Gym Sierra app’s time checks that let users book classes before the permitted time. I reported it, and it was fixed in version 4.4.19.":
      "Encontré un fallo en las comprobaciones horarias de la app de Club Gym Sierra que permitía reservar clases antes de la hora permitida. Lo reporté y se corrigió en la versión 4.4.19.",
    "Logical Vulnerability": "Vulnerabilidad lógica",
    "Responsible Disclosure": "Divulgación responsable",
    "My solutions and write-ups from Hackademics Forum III, a capture-the-flag security competition. I won first prize in the attendee competition, sponsored by Hack The Box.":
      "Mis soluciones y write-ups del Hackademics Forum III, una competición de seguridad tipo capture the flag. Gané el primer premio de la competición para asistentes, patrocinada por Hack The Box.",
    "Reverse Engineering": "Ingeniería inversa",
    "Web Exploitation": "Explotación web",
    "Chrome Extension": "Extensión de Chrome",
    "A Chrome extension that saves Instagram Direct voice messages. It finds audio resources in the browser, matches them to the message duration and downloads the original file or converts it to MP3 locally.":
      "Una extensión de Chrome que guarda las notas de voz de Instagram Direct. Localiza los recursos de audio en el navegador, los asocia con la duración del mensaje y descarga el archivo original o lo convierte a MP3 en local.",
    "Browser APIs": "APIs del navegador",
    "A command-line password manager that stores an encrypted vault on your computer. It uses AES-256-GCM encryption and Scrypt key derivation, with commands to create a vault and add, list, retrieve, remove, import or export entries.":
      "Un gestor de contraseñas de línea de comandos que guarda una bóveda cifrada en tu ordenador. Usa cifrado AES-256-GCM y derivación de claves con Scrypt, con comandos para crear una bóveda y añadir, listar, recuperar, eliminar, importar o exportar entradas.",
    "A desktop encryption app using AES-128-GCM. The Tkinter interface generates keys and nonces (one-use values) and checks whether encrypted data has been altered.":
      "Una app de escritorio de cifrado con AES-128-GCM. La interfaz en Tkinter genera claves y nonces (valores de un solo uso) y comprueba si los datos cifrados se han alterado.",

    // Other projects
    "Other projects": "Otros proyectos",
    "11 non-security builds: products, ML and coursework":
      "11 proyectos ajenos a la seguridad: productos, ML y trabajos de clase",
    "Financial market prediction: BSc thesis":
      "Predicción de mercados financieros: TFG",
    "My Computer Engineering thesis, graded 10/10. I compared statistical, machine learning and deep learning models for predicting price direction in Bitcoin, Tesla and Nvidia. I also tested whether news sentiment from GDELT improved the predictions.":
      "Mi Trabajo de Fin de Grado en Ingeniería Informática, calificado con un 10/10. Comparé modelos estadísticos, de machine learning y de deep learning para predecir la dirección del precio de Bitcoin, Tesla y Nvidia. También comprobé si el sentimiento de las noticias de GDELT mejoraba las predicciones.",
    "GDELT Sentiment": "Sentimiento GDELT",
    "Thesis presentation audio (12:17)": "Audio de la defensa del TFG (12:17)",
    "I built this platform for El Brillante, my neighbourhood in Córdoba, without charging the community. Residents can report security incidents, street problems and lost pets, filter reports, view maps, heatmaps and statistics, and use a local marketplace and services directory. It also handles association membership and moderation. More than 300 residents registered.":
      "Creé esta plataforma para El Brillante, mi barrio en Córdoba, sin cobrar nada a los vecinos. Permite avisar de incidentes de seguridad, problemas en la calle y mascotas perdidas, filtrar avisos, consultar mapas, mapas de calor y estadísticas, y usar un mercadillo y un directorio de servicios locales. También gestiona las altas en la asociación y la moderación. Se registraron más de 300 vecinos.",
    "Geospatial UX": "UX geoespacial",
    "A macOS app I published on the App Store. It shows upload and download rates, connection delay and bandwidth usage, with configurable alerts.":
      "Una app para macOS que publiqué en la App Store. Muestra las velocidades de subida y bajada, la latencia de la conexión y el uso de ancho de banda, con alertas configurables.",
    Monitoring: "Monitorización",
    "App Store link currently unavailable.":
      "El enlace a la App Store no está disponible ahora mismo.",
    "A local football analysis platform for Córdoba CF. It collects data from Sofascore, Transfermarkt and FBref and uses five machine learning models for lineup selection, injury risk, scouting, player valuation and opponent analysis. Scouting uses autoencoder embeddings to compare players. The platform runs locally without paid services.":
      "Una plataforma local de análisis de fútbol para el Córdoba CF. Recoge datos de Sofascore, Transfermarkt y FBref y usa cinco modelos de machine learning para la elección de alineaciones, el riesgo de lesión, el scouting, la valoración de jugadores y el análisis de rivales. El scouting compara jugadores mediante embeddings de autoencoders. Funciona en local sin servicios de pago.",
    "Sports Analytics": "Analítica deportiva",
    "Data Engineering": "Ingeniería de datos",
    "Artificial Intelligence": "Inteligencia artificial",
    "I founded Helion Labs to build AI automations for businesses, including workflows that reduce repetitive tasks.":
      "Fundé Helion Labs para crear automatizaciones con IA para empresas, incluidos flujos de trabajo que reducen las tareas repetitivas.",
    "Business Automation": "Automatización empresarial",
    "Workflow Design": "Diseño de flujos de trabajo",
    Website: "Sitio web",
    "A website that ranks monetary contributions, with automatic leaderboard updates, performance metrics and payout tracking.":
      "Una web que clasifica aportaciones económicas, con actualización automática de la clasificación, métricas de rendimiento y seguimiento de pagos.",
    "Product Design": "Diseño de producto",
    Automation: "Automatización",
    "Live site requires an access token.":
      "La web en producción requiere un token de acceso.",
    "Trading bots": "Bots de trading",
    "Trading bots for KuCoin and other cryptocurrency exchanges. They adjust order prices and spreads to stay competitive, balance holdings and manage risk, with settings adapted to each exchange.":
      "Bots de trading para KuCoin y otros exchanges de criptomonedas. Ajustan los precios de las órdenes y los spreads para seguir siendo competitivos, equilibran la cartera y gestionan el riesgo, con ajustes adaptados a cada exchange.",
    "Private repository": "Repositorio privado",
    "Telegram Bot": "Bot de Telegram",
    "A Telegram bot that transcribes audio and video, cleans up the text and exports it in several formats with timestamps.":
      "Un bot de Telegram que transcribe audio y vídeo, limpia el texto y lo exporta en varios formatos con marcas de tiempo.",
    Transcription: "Transcripción",
    AI: "IA",
    Export: "Exportación",
    "Scouts La Salle website": "Web de Scouts La Salle",
    "I maintain the Scouts La Salle Córdoba website, updating its content and looking after availability and secure communication.":
      "Mantengo la web de Scouts La Salle Córdoba: actualizo sus contenidos y me ocupo de su disponibilidad y de que la comunicación sea segura.",
    Maintenance: "Mantenimiento",
    "A networked Battleship game written in C, with sockets for communication between players.":
      "Un Hundir la flota en red escrito en C, con sockets para la comunicación entre jugadores.",
    Networks: "Redes",
    "University projects": "Proyectos universitarios",
    "University projects in smart-home interfaces, machine learning algorithms, task management, image processing, web development and games. Built with Java, Python and JavaScript.":
      "Proyectos universitarios de interfaces para casas inteligentes, algoritmos de machine learning, gestión de tareas, procesamiento de imágenes, desarrollo web y juegos. Hechos con Java, Python y JavaScript.",
    Coursework: "Trabajos de clase",
    "All repositories": "Todos los repositorios",
    "Smart Home": "Casa inteligente",
    "ML algorithms": "Algoritmos de ML",
    "Image processing": "Procesamiento de imágenes",

    // About and milestones
    "Education milestones": "Hitos de formación",
    "Computer Engineering": "Ingeniería Informática",
    "University of Córdoba · Completed": "Universidad de Córdoba · Completado",
    "Offensive Security": "Seguridad Ofensiva",
    "Master’s degree · Completed": "Máster · Completado",
    Now: "Ahora",
    "Reverse engineering & malware": "Ingeniería inversa y malware",
    "Expert diploma · Google GSEC, until 14 Dec 2026":
      "Diploma de experto · Google GSEC, hasta el 14 dic 2026",
    "About me": "Sobre mí",
    "I studied Computer Engineering at the University of Córdoba and completed a master’s in Offensive Security at Campus Internacional de Ciberseguridad.":
      "Estudié Ingeniería Informática en la Universidad de Córdoba y completé un máster en Seguridad Ofensiva en el Campus Internacional de Ciberseguridad.",
    "I’m now taking the Expert Diploma in Reverse Engineering and Malware Intelligence at Google’s Safety Engineering Center in Málaga.":
      "Ahora curso el Diploma de Experto en Ingeniería Inversa e Inteligencia de Malware en el Safety Engineering Center de Google en Málaga.",
    "Current focus": "Enfoque actual",
    "Malware analysis, reverse engineering":
      "Análisis de malware, ingeniería inversa",
    "and threat intelligence.": "e inteligencia de amenazas.",
    "Connect on LinkedIn": "Conecta en LinkedIn",

    // Experience
    Experience: "Experiencia",
    "Jun 2025 - Present": "Jun 2025 - Actualidad",
    "Cybercrime Analysis Collaborator": "Colaborador en análisis de cibercrimen",
    "Spanish National Police (Policía Nacional) · Remote":
      "Policía Nacional · En remoto",
    "Help analyse online scams affecting people in Spain, using publicly available information (OSINT) and technical analysis. Document findings and handle evidence according to chain-of-custody requirements.":
      "Ayudo a analizar estafas en internet que afectan a personas en España, mediante información de fuentes abiertas (OSINT) y análisis técnico. Documento los hallazgos y trato las evidencias según los requisitos de cadena de custodia.",
    "Recommendation letter": "Carta de recomendación",
    "Jan 2026 - May 2026": "Ene 2026 - May 2026",
    "Digital Forensics & Threat Intelligence Intern":
      "Becario de informática forense e inteligencia de amenazas",
    "AllPentesting · Córdoba, Spain": "AllPentesting · Córdoba, España",
    "Analysed phishing, fraud and malicious Android apps using publicly available information and material from the surface, deep and dark web. Acquired and examined data from computers, phones and storage devices; reviewed logs and wrote technical reports. Reverse engineered Android apps and examined VPN, RDP, NAS and Microsoft 365 and OneDrive logs to identify malware, indicators of compromise and attack techniques. Built n8n automations and security-testing tools, and deployed ATAK-CIV / TAK Server for coordination with law-enforcement teams.":
      "Analicé phishing, fraudes y apps maliciosas de Android a partir de información de fuentes abiertas y material de la surface, deep y dark web. Adquirí y examiné datos de ordenadores, teléfonos y dispositivos de almacenamiento; revisé logs y redacté informes técnicos. Hice ingeniería inversa de apps Android y examiné logs de VPN, RDP, NAS, Microsoft 365 y OneDrive para identificar malware, indicadores de compromiso y técnicas de ataque. Creé automatizaciones con n8n y herramientas de pruebas de seguridad, y desplegué ATAK-CIV / TAK Server para la coordinación con equipos policiales.",
    "Tools: FTK Imager, Autopsy, Volatility, NirSoft and Proxmark3.":
      "Herramientas: FTK Imager, Autopsy, Volatility, NirSoft y Proxmark3.",
    "Nov 2025 - Dec 2025": "Nov 2025 - Dic 2025",
    "Industrial Cybersecurity Intern": "Becario de ciberseguridad industrial",
    "Deuser (Indra Group) · Córdoba, Spain":
      "Deuser (Grupo Indra) · Córdoba, España",
    "Mapped devices, network segments and trust zones in industrial systems. Set up Hyper-V virtual machines for test labs and completed hands-on training in firewall configuration and Siemens programmable logic controllers (PLCs).":
      "Inventarié dispositivos, segmentos de red y zonas de confianza en sistemas industriales. Monté máquinas virtuales Hyper-V para laboratorios de pruebas y completé formación práctica en configuración de firewalls y autómatas programables (PLC) de Siemens.",
    "Jun 2025 - Sep 2025": "Jun 2025 - Sept 2025",
    "Cybersecurity Engineering Intern": "Becario de ingeniería de ciberseguridad",
    "Navantia · COEX Naval Systems · San Fernando, Spain":
      "Navantia · COEX Sistemas Navales · San Fernando, España",
    "Built monitoring and defence infrastructure using a security event system (SIEM), intrusion detection (IDS), routers and firewalls. Set up a network test lab for passive naval combat systems, trained colleagues in cybersecurity and automated recurring operational tasks.":
      "Construí infraestructura de monitorización y defensa con un sistema de eventos de seguridad (SIEM), detección de intrusiones (IDS), routers y firewalls. Monté un laboratorio de red para pruebas de sistemas de combate naval pasivos, formé a compañeros en ciberseguridad y automaticé tareas operativas recurrentes.",

    // Education
    "Education & training": "Educación y formación",
    Education: "Educación",
    "21 Sep - 14 Dec 2026": "21 sept - 14 dic 2026",
    "Expert Diploma in Reverse Engineering & Malware Intelligence":
      "Diploma de Experto en Ingeniería Inversa e Inteligencia de Malware",
    "University of Málaga · NICS Lab · Google GSEC":
      "Universidad de Málaga · NICS Lab · Google GSEC",
    "Currently studying how to analyse malicious software and understand how compiled programs work. Training includes static and dynamic analysis, Frida instrumentation and YARA detection rules. The programme comprises 18 ECTS credits and 180 in-person hours at Google’s Safety Engineering Center in Málaga.":
      "Actualmente aprendo a analizar software malicioso y a entender cómo funcionan los programas compilados. La formación incluye análisis estático y dinámico, instrumentación con Frida y reglas de detección YARA. El programa consta de 18 créditos ECTS y 180 horas presenciales en el Safety Engineering Center de Google en Málaga.",
    "Programme details": "Detalles del programa",
    "Completed · Oct 2025 - Oct 2026": "Completado · Oct 2025 - Oct 2026",
    "Master’s in Offensive Security": "Máster en Seguridad Ofensiva",
    "Completed a master’s covering cryptography, open-source intelligence (OSINT), malware analysis, reverse engineering, vulnerability assessment and network, system and web security testing. My final project was":
      "Completé un máster sobre criptografía, inteligencia de fuentes abiertas (OSINT), análisis de malware, ingeniería inversa, evaluación de vulnerabilidades y pruebas de seguridad de redes, sistemas y aplicaciones web. Mi proyecto final fue",
    "In progress": "En curso",
    "OSCP certification preparation": "Preparación de la certificación OSCP",
    "Preparing for OffSec’s practical penetration-testing certification.":
      "Preparo la certificación práctica de pentesting de OffSec.",
    "Sep 2024 - Jun 2025": "Sept 2024 - Jun 2025",
    "Erasmus Exchange: Computer Engineering":
      "Erasmus: Ingeniería Informática",
    "Gheorghe Asachi Technical University of Iași · Romania":
      "Universidad Técnica Gheorghe Asachi de Iași · Rumanía",
    "Studied artificial intelligence, machine learning and software engineering during my Erasmus exchange in Iași, Romania.":
      "Estudié inteligencia artificial, machine learning e ingeniería del software durante mi Erasmus en Iași, Rumanía.",
    "CCN Cybersecurity Course": "Curso de ciberseguridad del CCN",
    "Higher Polytechnic School of Córdoba": "Escuela Politécnica Superior de Córdoba",
    "Cybersecurity training provided by Spain’s National Cryptologic Centre (CCN).":
      "Formación en ciberseguridad impartida por el Centro Criptológico Nacional (CCN).",
    "Software Architecture Course": "Curso de arquitectura del software",
    "Studied software design and architecture for complex systems.":
      "Estudié diseño y arquitectura del software para sistemas complejos.",
    "BSc in Computer Engineering": "Grado en Ingeniería Informática",
    "Higher Polytechnic School of Córdoba (EPSC), Universidad de Córdoba":
      "Escuela Politécnica Superior de Córdoba (EPSC), Universidad de Córdoba",
    "Studied software engineering, operating systems, networks and cybersecurity, specialising in Computing. My final thesis was graded 10/10.":
      "Estudié ingeniería del software, sistemas operativos, redes y ciberseguridad, con la mención en Computación. Mi Trabajo de Fin de Grado obtuvo un 10/10.",
    "Cybersecurity Course: III National League":
      "Curso de ciberseguridad: III Liga Nacional",
    "Civil Guard": "Guardia Civil",
    "Took part in the Civil Guard’s National Cybersecurity League.":
      "Participé en la Liga Nacional de Ciberseguridad de la Guardia Civil.",

    // Recognition
    Recognition: "Reconocimientos",
    "Awards & competitions": "Premios y competiciones",
    "Built and presented Atlas in the junior category. The challenge was to monitor and control AI use in software development; my prototype audits exported coding-assistant data without modifying it.":
      "Desarrollé y presenté Atlas en la categoría júnior. El reto consistía en monitorizar y controlar el uso de la IA en el desarrollo de software; mi prototipo audita los datos exportados de asistentes de programación sin modificarlos.",
    "NASA vulnerability disclosure recognition":
      "Reconocimiento de la NASA por divulgación de vulnerabilidad",
    "NASA · Information security office":
      "NASA · Oficina de seguridad de la información",
    "NASA recognised my report of a security vulnerability under its Vulnerability Disclosure Program. The letter was signed by the agency’s senior information security officer.":
      "La NASA reconoció mi reporte de una vulnerabilidad de seguridad dentro de su Programa de Divulgación de Vulnerabilidades. La carta la firmó el máximo responsable de seguridad de la información de la agencia.",
    "Read the letter": "Leer la carta",
    "Recognition letter": "Carta de reconocimiento",
    "Apr 2026": "Abr 2026",
    "Best Device Award: 4th Biotechnological Hackathon":
      "Premio al Mejor Dispositivo: IV Hackathon Biotecnológico",
    "Won the Best Device Award for the challenge to count surgical material after an operation.":
      "Gané el premio al Mejor Dispositivo en el reto de contar el material quirúrgico tras una operación.",
    "8th nationally: Talent4Cyber": "8.º a nivel nacional: Talent4Cyber",
    "Reached the semifinals and finished eighth nationally, representing the University of Córdoba in a competition with more than 100 teams. Team: “Estatua de gnomos de jardín gnomos de doble dedo”.":
      "Llegamos a semifinales y quedamos octavos a nivel nacional, representando a la Universidad de Córdoba en una competición con más de 100 equipos. Equipo: “Estatua de gnomos de jardín gnomos de doble dedo”.",
    "Sep 2025": "Sept 2025",
    'Week 4 Winner: "El Bug de la Semana"':
      'Ganador de la semana 4: "El Bug de la Semana"',
    "INCIBE & IMMUNE Technology Institute":
      "INCIBE e IMMUNE Technology Institute",
    "Won the fourth weekly challenge run by INCIBE and IMMUNE Technology Institute.":
      "Gané el cuarto reto semanal organizado por INCIBE e IMMUNE Technology Institute.",
    "$1,000 Meta Bug Bounty (Instagram)": "Meta Bug Bounty de 1.000 $ (Instagram)",
    "Meta Bug Bounty Program": "Programa Meta Bug Bounty",
    "Meta awarded me $1,000 for reporting the Instagram Notes audio vulnerability and confirmed that it had been fixed.":
      "Meta me premió con 1.000 $ por reportar la vulnerabilidad de audio de Instagram Notes y confirmó que estaba corregida.",
    "BSc Thesis (TFG) graded 10/10": "TFG calificado con un 10/10",
    "My thesis, “Predicción direccional de activos financieros con aprendizaje automático y datos alternativos”, received 10/10 from the assessment committee.":
      "Mi TFG, “Predicción direccional de activos financieros con aprendizaje automático y datos alternativos”, obtuvo un 10/10 del tribunal.",
    "Apr 2025": "Abr 2025",
    "1st prize: Hackademics Forum III": "1.er premio: Hackademics Forum III",
    "Cybersecurity and Networks Classroom, EPSC":
      "Aula de Ciberseguridad y Redes, EPSC",
    "Won the attendee competition at Hackademics Forum III, sponsored by Hack The Box.":
      "Gané la competición para asistentes del Hackademics Forum III, patrocinada por Hack The Box.",
    "Caliphal Hounds: 2nd in Spain on CTFTime":
      "Caliphal Hounds: 2.º de España en CTFTime",
    "Member of Caliphal Hounds during 2024, when the team finished second in Spain on CTFTime. Focused on web security, reverse engineering, cryptography and open-source intelligence challenges.":
      "Miembro de Caliphal Hounds durante 2024, año en que el equipo quedó segundo de España en CTFTime. Me centré en retos de seguridad web, ingeniería inversa, criptografía e inteligencia de fuentes abiertas.",
    "1st Place: Free Software Classroom Hackathon":
      "1.er puesto: Hackathon del Aula de Software Libre",
    "Free Software Classroom, University of Córdoba":
      "Aula de Software Libre, Universidad de Córdoba",
    "Won the Free Software Classroom’s first hackathon.":
      "Gané el primer hackathon del Aula de Software Libre.",

    // Community
    "Beyond the work": "Más allá del trabajo",
    Community: "Comunidad",
    "Free Software & Cybersecurity student groups":
      "Aulas de Software Libre y de Ciberseguridad",
    "EPSC, University of Córdoba": "EPSC, Universidad de Córdoba",
    "Gave talks, ran workshops and helped fellow students prepare for security competitions through the Free Software and Cybersecurity & Networks student groups.":
      "Di charlas, organicé talleres y ayudé a otros estudiantes a preparar competiciones de seguridad a través de las aulas de Software Libre y de Ciberseguridad y Redes.",
    "Debate Team: La Salle Córdoba": "Equipo de debate: La Salle Córdoba",
    "Won two inter-school debate competitions and mentored younger students.":
      "Gané dos torneos de debate entre colegios y fui mentor de alumnos más jóvenes.",
    "2008 - Present": "2008 - Actualidad",
    "Scout since 2008. President of the local youth group in 2023-2024, coordinating volunteers and community projects.":
      "Scout desde 2008. Presidente del grupo juvenil local en 2023-2024, coordinando voluntarios y proyectos comunitarios.",

    // Documents
    "CV & letters": "CV y cartas",
    "My CV and letters of recognition and recommendation.":
      "Mi CV y cartas de reconocimiento y recomendación.",
    "Download my CV": "Descargar mi CV",
    "2 pages": "2 páginas",
    "NASA recognition letter": "Carta de reconocimiento de la NASA",
    "NASA information security office · Jun 2026":
      "Oficina de seguridad de la información de la NASA · Jun 2026",
    "Spanish National Police recommendation":
      "Recomendación de la Policía Nacional",
    "Inspector, Brigada Provincial de Policía Judicial · Dec 2025":
      "Inspector, Brigada Provincial de Policía Judicial · Dic 2025",
    "Navantia recommendation": "Recomendación de Navantia",
    "Rafael Gómez Sánchez · Sep 2025": "Rafael Gómez Sánchez · Sept 2025",
    "University of Córdoba recommendation":
      "Recomendación de la Universidad de Córdoba",

    // Contact and footer
    "For work enquiries or questions about a project, email me.":
      "Para propuestas de trabajo o preguntas sobre algún proyecto, escríbeme.",
    "Copy email": "Copiar correo",
    "Email copied": "Correo copiado",
    "Email copied.": "Correo copiado.",
    "Select the address to copy it": "Selecciona la dirección para copiarla",
    "Copying is unavailable. Select the address to copy it.":
      "No se puede copiar. Selecciona la dirección para copiarla.",
    "jg., Home": "jg., inicio",
    "Back to top": "Volver arriba",
  };

  const norm = (value) => value.replace(/\s+/g, " ").trim();
  const dictionaries = { es: ES, en: {} };
  for (const [en, es] of Object.entries(ES)) dictionaries.en[es] = en;

  const LANGS = ["en", "es"];
  const STORAGE_KEY = "lang";
  const ATTRIBUTES = ["aria-label", "alt", "title", "placeholder"];
  const META =
    'meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[name="twitter:title"],meta[name="twitter:description"]';
  let current = "en";

  // Returns the text in `lang`, accepting a fragment in either language.
  function lookup(text, lang) {
    const key = norm(text);
    if (!key) return null;
    if (lang === "es") return ES[key] ?? (dictionaries.en[key] ? key : null);
    return dictionaries.en[key] ?? (key in ES ? key : null);
  }

  function translateNode(node, lang) {
    const value = node.nodeValue;
    const result = lookup(value, lang);
    if (result === null || result === norm(value)) return;
    const lead = /^\s*/.exec(value)[0] ? " " : "";
    const trail = /\s*$/.exec(value)[0] ? " " : "";
    node.nodeValue = lead + result + trail;
  }

  function apply(root = document.body, lang = current) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        node.parentElement?.closest("script,style")
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT,
    });
    while (walker.nextNode()) translateNode(walker.currentNode, lang);
    const elements = root.querySelectorAll(
      ATTRIBUTES.map((name) => `[${name}]`).join(","),
    );
    [root, ...elements].forEach((element) => {
      ATTRIBUTES.forEach((name) => {
        if (!element.hasAttribute?.(name)) return;
        const result = lookup(element.getAttribute(name), lang);
        if (result !== null) element.setAttribute(name, result);
      });
    });
  }

  const toggle = document.querySelector(".lang-toggle");

  function setLanguage(lang, remember = false) {
    current = lang;
    const html = document.documentElement;
    html.lang = lang;
    apply(document.body, lang);
    document.title = lookup(document.title, lang) ?? document.title;
    document.querySelectorAll(META).forEach((meta) => {
      const result = lookup(meta.content, lang);
      if (result !== null) meta.content = result;
    });
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute("content", lang === "es" ? "es_ES" : "en_GB");
    if (toggle) {
      toggle.querySelectorAll("[data-lang]").forEach((label) => {
        label.classList.toggle("is-active", label.dataset.lang === lang);
      });
      toggle.setAttribute(
        "aria-label",
        lang === "es" ? "Switch to English" : "Cambiar a español",
      );
      toggle.setAttribute("lang", lang === "es" ? "en" : "es");
    }
    if (remember) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {}
      const url = new URL(window.location.href);
      lang === "es"
        ? url.searchParams.set("lang", "es")
        : url.searchParams.delete("lang");
      if (url.href !== window.location.href)
        window.history.replaceState(window.history.state, "", url);
    }
    html.classList.remove("i18n-pending");
    document.dispatchEvent(new CustomEvent("languagechange", { detail: lang }));
  }

  function initialLanguage() {
    const fromUrl = new URL(window.location.href).searchParams.get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch {}
    return "en";
  }

  window.portfolioI18n = {
    get lang() {
      return current;
    },
    t: (text) => lookup(text, current) ?? text,
    apply: (root) => apply(root, current),
  };

  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", () =>
      setLanguage(current === "es" ? "en" : "es", true),
    );
  }
  setLanguage(initialLanguage());

  // Development aid: list English fragments that have no Spanish entry.
  if (/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) {
    const missing = new Set();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const text = norm(walker.currentNode.nodeValue);
      if (
        /[a-z]{3}/.test(text) &&
        !walker.currentNode.parentElement.closest("script,style") &&
        lookup(text, "es") === null
      )
        missing.add(text);
    }
    if (missing.size)
      console.info("[i18n] Fragments without Spanish entry:", [...missing]);
  }
})();
