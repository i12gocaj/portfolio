# Estructura del Portfolio Web

## Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javier González Casares | Ingeniero Informático & Ciberseguridad</title>
    <!-- Meta tags -->
    <meta name="description" content="Portfolio profesional de Javier González Casares, Ingeniero Informático especializado en ciberseguridad">
    <meta name="keywords" content="ciberseguridad, ingeniería informática, desarrollo web, portfolio, Javier González Casares">
    <!-- Favicon -->
    <link rel="icon" href="assets/img/favicon.ico">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <!-- Preloader -->
    <div id="preloader">
        <!-- Animación de terminal/escaneo -->
    </div>

    <!-- Header/Navegación -->
    <header>
        <nav>
            <div class="logo">
                <a href="#home">JGC</a>
            </div>
            <div class="nav-links">
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre Mí</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="terminal-window">
                <div class="terminal-header">
                    <div class="terminal-buttons">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="terminal-title">terminal</div>
                </div>
                <div class="terminal-body">
                    <div class="line">
                        <span class="prompt">$</span>
                        <span class="command">whoami</span>
                    </div>
                    <div class="line">
                        <span class="output">Javier González Casares</span>
                    </div>
                    <div class="line">
                        <span class="prompt">$</span>
                        <span class="command">cat profile.txt</span>
                    </div>
                    <div class="line">
                        <span class="output">Ingeniero Informático especializado en Ciberseguridad</span>
                    </div>
                    <div class="line">
                        <span class="prompt">$</span>
                        <span class="command">./scan_skills.sh</span>
                    </div>
                    <div class="line">
                        <span class="output">Escaneando habilidades...</span>
                    </div>
                    <div class="line">
                        <span class="prompt">$</span>
                        <span class="command blink">_</span>
                    </div>
                </div>
            </div>
            <div class="hero-content">
                <h1>Javier González Casares</h1>
                <h2>Ingeniero Informático & Especialista en Ciberseguridad</h2>
                <div class="cta-buttons">
                    <a href="#projects" class="btn primary">Ver Proyectos</a>
                    <a href="#contact" class="btn secondary">Contactar</a>
                </div>
            </div>
        </div>
        <div class="particles-container">
            <!-- Partículas de fondo -->
        </div>
    </section>

    <!-- Sobre Mí -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2><span class="accent">#</span> Sobre Mí</h2>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p>Estudiante de Ingeniería Informática en la Universidad de Córdoba, con un fuerte enfoque en ciberseguridad y desarrollo de software.</p>
                    <p>Mi pasión por la tecnología comenzó desde temprana edad, y hoy me dedico a explorar y aprender constantemente sobre las últimas tendencias en seguridad informática y desarrollo.</p>
                    <p>Me especializo en la creación de soluciones seguras y eficientes, aplicando principios de ciberseguridad en cada proyecto que emprendo.</p>
                    <blockquote>
                        "Lo que no sé todavía es solo cuestión de tiempo y determinación para aprender."
                    </blockquote>
                </div>
                <div class="about-image">
                    <!-- Imagen o elemento visual -->
                </div>
            </div>
        </div>
    </section>

    <!-- Habilidades Técnicas -->
    <section id="skills" class="skills">
        <div class="container">
            <div class="section-header">
                <h2><span class="accent">#</span> Habilidades Técnicas</h2>
            </div>
            <div class="skills-container">
                <div class="skills-category">
                    <h3>Lenguajes de Programación</h3>
                    <div class="skills-grid">
                        <div class="skill-item">
                            <div class="skill-icon">
                                <!-- Icono Python -->
                            </div>
                            <div class="skill-info">
                                <h4>Python</h4>
                                <div class="skill-bar">
                                    <div class="skill-level" style="width: 90%"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Repetir para Java, JavaScript, C/C++, Rust, TypeScript -->
                    </div>
                </div>
                
                <div class="skills-category">
                    <h3>Desarrollo Web</h3>
                    <div class="skills-grid">
                        <!-- CSS, React, Next.js, Flutter -->
                    </div>
                </div>
                
                <div class="skills-category">
                    <h3>Ciberseguridad</h3>
                    <div class="skills-grid">
                        <!-- CTF, HackTheBox, Kali Linux -->
                    </div>
                </div>
                
                <div class="skills-category">
                    <h3>Bases de Datos & DevOps</h3>
                    <div class="skills-grid">
                        <!-- MariaDB, MySQL, Docker -->
                    </div>
                </div>
                
                <div class="skills-category">
                    <h3>Herramientas & IA</h3>
                    <div class="skills-grid">
                        <!-- Trello, Notion, ChatGPT, GitHub Copilot, Hugging Face -->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Proyectos Destacados -->
    <section id="projects" class="projects">
        <div class="container">
            <div class="section-header">
                <h2><span class="accent">#</span> Proyectos Destacados</h2>
            </div>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <!-- Imagen del proyecto -->
                    </div>
                    <div class="project-content">
                        <h3>HundirFlotaRedes</h3>
                        <p>Implementación del clásico juego Hundir la Flota con funcionalidades de red.</p>
                        <div class="project-tech">
                            <span>C</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/i12gocaj/HundirFlotaRedes" target="_blank" class="btn small">GitHub</a>
                            <a href="#" class="btn small secondary">Demo</a>
                        </div>
                    </div>
                </div>
                <!-- Repetir para otros proyectos -->
            </div>
        </div>
    </section>

    <!-- Experiencia y Formación -->
    <section id="experience" class="experience">
        <div class="container">
            <div class="section-header">
                <h2><span class="accent">#</span> Experiencia & Formación</h2>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Actual</div>
                    <div class="timeline-content">
                        <h3>Estudiante de Ingeniería Informática</h3>
                        <h4>Universidad de Córdoba</h4>
                        <p>Formación en ingeniería de software, sistemas operativos, redes y ciberseguridad.</p>
                    </div>
                </div>
                <!-- Más elementos de timeline según información adicional -->
            </div>
        </div>
    </section>

    <!-- Dashboard de Ciberseguridad (Elemento Creativo) -->
    <section id="dashboard" class="dashboard">
        <div class="container">
            <div class="section-header">
                <h2><span class="accent">#</span> Security Dashboard</h2>
            </div>
            <div class="dashboard-container">
                <div class="dashboard-header">
                    <div class="dashboard-title">
                        <h3>Security Monitoring System</h3>
                        <span class="status">Status: <span class="active">Active</span></span>
                    </div>
                    <div class="dashboard-controls">
                        <button class="refresh-btn">Refresh</button>
                    </div>
                </div>
                <div class="dashboard-grid">
                    <div class="dashboard-card">
                        <h4>Skill Distribution</h4>
                        <div class="chart-container">
                            <!-- Gráfico de habilidades -->
                        </div>
                    </div>
                    <div class="dashboard-card">
                        <h4>Project Completion</h4>
                        <div class="chart-container">
                            <!-- Gráfico de proyectos -->
                        </div>
                    </div>
                    <div class="dashboard-card">
                        <h4>Security Scanner</h4>
                        <div class="scanner-container">
                            <!-- Animación de escaneo -->
                        </div>
                    </div>
                    <div class="dashboard-card">
                        <h4>Activity Log</h4>
                        <div class="log-container">
                            <!-- Log de actividades -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contacto -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2><span class="accent">#</span> Contacto</h2>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>¿Interesado en colaborar?</h3>
                    <p>Estoy abierto a oportunidades de colaboración, proyectos interesantes y nuevos desafíos.</p>
                    <div class="contact-links">
                        <a href="https://github.com/i12gocaj" target="_blank" class="contact-link">
                            <span class="icon"><!-- GitHub icon --></span>
                            <span>github.com/i12gocaj</span>
                        </a>
                        <a href="https://www.linkedin.com/in/javier-gonzález-casares-16427830b/" target="_blank" class="contact-link">
                            <span class="icon"><!-- LinkedIn icon --></span>
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:javiergc100@protonmail.com" class="contact-link">
                            <span class="icon"><!-- Email icon --></span>
                            <span>javiergc100@protonmail.com</span>
                        </a>
                    </div>
                </div>
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Asunto</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn primary">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <a href="#home">JGC</a>
                </div>
                <div class="footer-links">
                    <ul>
                        <li><a href="https://github.com/i12gocaj" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/javier-gonzález-casares-16427830b/" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Javier González Casares. Todos los derechos reservados.</p>
                <p class="easter-egg"><!-- Easter egg relacionado con ciberseguridad --></p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
</body>
</html>
```

## Estructura de Directorios

```
portfolio/
│
├── index.html              # Página principal
├── assets/                 # Recursos estáticos
│   ├── css/
│   │   ├── styles.css      # Estilos principales
│   │   └── animations.css  # Animaciones específicas
│   ├── js/
│   │   ├── main.js         # JavaScript principal
│   │   ├── animations.js   # Lógica de animaciones
│   │   ├── particles.js    # Efecto de partículas
│   │   └── dashboard.js    # Lógica del dashboard
│   ├── img/                # Imágenes
│   │   ├── favicon.ico
│   │   ├── projects/       # Imágenes de proyectos
│   │   └── icons/          # Iconos
│   └── fonts/              # Fuentes adicionales (si es necesario)
└── README.md               # Documentación
```
