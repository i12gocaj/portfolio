/*
 * Portfolio Web - Javier González Casares
 * JavaScript Principal
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    const progressBar = preloader.querySelector('.progress');
    
    // Simula carga
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        progressBar.style.width = progress + '%';
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                // Inicia animación de terminal después del preloader
                initHeroTerminalAnimation(); 
            }, 500); // Pequeña pausa antes de ocultar
        }
    }, 150);


    // --- Header Scroll Effect ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = navLinks.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // --- Particles.js Background ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#64ffda' }, // Color de las partículas
                shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
                opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
                size: { value: 3, random: true, anim: { enable: false } },
                line_linked: { enable: true, distance: 150, color: '#8892b0', opacity: 0.4, width: 1 }, // Color de las líneas
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
        });
    }


    // --- Hero Terminal Animation ---
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = ''; // Limpia el contenido inicial
        const intervalId = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(intervalId);
                if (callback) callback();
            }
        }, speed);
    }

    function initHeroTerminalAnimation() {
        const lines = [
            { el: 'line-1', cmd: 'cmd-1', text: 'whoami', output: null, delay: 500 },
            { el: 'line-2', cmd: null, output: 'out-1', text: 'Javier González Casares', delay: 1000 },
            { el: 'line-3', cmd: 'cmd-2', text: 'cat profile.txt', output: null, delay: 500 },
            { el: 'line-4', cmd: null, output: 'out-2', text: 'Computer Engineer specialized in Cybersecurity', delay: 1500 },
            { el: 'line-5', cmd: 'cmd-3', text: './scan_skills.sh', output: null, delay: 500 },
            { el: 'line-6', cmd: null, output: 'out-3', text: 'Scanning skills...', delay: 1000 },
        ];
        const cursor = document.getElementById('cursor');
        const line7 = document.getElementById('line-7');
        cursor.style.opacity = 0; // Oculta el cursor final inicialmente
        line7.style.opacity = 0;

        let cumulativeDelay = 0;

        lines.forEach(lineData => {
            setTimeout(() => {
                const lineElement = document.getElementById(lineData.el);
                lineElement.style.opacity = 1;

                if (lineData.cmd) {
                    const cmdElement = document.getElementById(lineData.cmd);
                    typeWriter(cmdElement, lineData.text, 75); // Velocidad de escritura para comandos
                } else if (lineData.output) {
                    const outputElement = document.getElementById(lineData.output);
                     // Muestra outputs directamente o con animación más rápida
                    // typeWriter(outputElement, lineData.text, 25); 
                     outputElement.textContent = lineData.text; // Mostrar directamente
                }
            }, cumulativeDelay);
            cumulativeDelay += lineData.delay;
        });

        // Mostrar cursor al final
        setTimeout(() => {
            line7.style.opacity = 1;
            cursor.style.opacity = 1;
        }, cumulativeDelay);
    }
    // No iniciar animación hasta que el preloader termine (llamada movida a la lógica del preloader)
    // initHeroTerminalAnimation();


    // --- Scroll Reveal Animations (Ejemplo básico) ---
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1500,
        delay: 100,
        reset: false // Las animaciones ocurren solo una vez
    });

    sr.reveal('.section-header', { origin: 'top' });
    sr.reveal('.about-content .about-text', { origin: 'left' });
    sr.reveal('.about-content .about-image', { origin: 'right' });
    sr.reveal('.skill-item', { interval: 100, origin: 'bottom' });
    sr.reveal('.project-card', { interval: 100, origin: 'bottom' });
    sr.reveal('.timeline-item', { interval: 100, origin: 'left' });
    sr.reveal('.dashboard-card', { interval: 100, origin: 'bottom' });
    sr.reveal('.contact-info', { origin: 'left' });
    sr.reveal('.contact-form', { origin: 'right' });


    // --- Security Dashboard Logic ---
    let skillsChartInstance = null;
    let projectsChartInstance = null;
    let activityLogInterval = null;
    let securityScannerInterval = null;

    function initDashboard() {
        renderSkillsChart();
        renderProjectsChart();
        startActivityLog();
        startSecurityScanner();
    }

    function destroyDashboard() {
        if (skillsChartInstance) skillsChartInstance.destroy();
        if (projectsChartInstance) projectsChartInstance.destroy();
        if (activityLogInterval) clearInterval(activityLogInterval);
        if (securityScannerInterval) clearInterval(securityScannerInterval);
        skillsChartInstance = null;
        projectsChartInstance = null;
        activityLogInterval = null;
        securityScannerInterval = null;
    }

    function renderSkillsChart() {
        const ctx = document.getElementById('skillsChartCanvas')?.getContext('2d');
        if (!ctx) return;

        // Datos de ejemplo - Ajusta según tus habilidades principales
        const data = {
            labels: ['Cybersecurity', 'Python', 'C/C++', 'Networks', 'Web Dev', 'Databases'],
            datasets: [{
                label: 'Skill Distribution',
                data: [30, 25, 15, 10, 10, 10], // Porcentajes aproximados
                backgroundColor: [
                    'rgba(100, 255, 218, 0.7)', // Accent
                    'rgba(230, 241, 255, 0.7)', // Text Primary
                    'rgba(136, 146, 176, 0.7)', // Text Secondary
                    'rgba(17, 34, 64, 0.7)',    // BG Secondary variation
                     'rgba(255, 85, 85, 0.7)',   // Alert Color
                    'rgba(100, 255, 218, 0.4)', // Accent variation
                ],
                borderColor: 'rgba(10, 25, 47, 0.5)', // BG Primary variation
                borderWidth: 1
            }]
        };

        skillsChartInstance = new Chart(ctx, {
            type: 'doughnut', // O 'pie'
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e6f1ff' // Color de texto primario
                        }
                    }
                }
            }
        });
    }

    function renderProjectsChart() {
        const ctx = document.getElementById('projectsChartCanvas')?.getContext('2d');
        if (!ctx) return;

        // Datos de ejemplo
        const data = {
            labels: ['AES-app', 'CTF-Solutions', 'HundirFlota', 'SmartHome', 'AI', 'ToDo', 'Snake'],
            datasets: [{
                label: 'Project Status (%)',
                data: [100, 100, 95, 90, 80, 100, 100], // Porcentaje de completitud (ejemplo)
                backgroundColor: 'rgba(100, 255, 218, 0.6)', // Accent con transparencia
                borderColor: 'rgba(100, 255, 218, 1)', // Accent sólido
                borderWidth: 1
            }]
        };

        projectsChartInstance = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y', // Barras horizontales para mejor lectura de nombres
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                         ticks: { color: '#8892b0' }, // Color texto secundario
                         grid: { color: 'rgba(136, 146, 176, 0.1)' }
                    },
                    y: {
                         ticks: { color: '#e6f1ff' }, // Color texto primario
                         grid: { color: 'rgba(136, 146, 176, 0.1)' }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Ocultar leyenda para gráfico de barras simple
                    }
                }
            }
        });
    }
    
    function startActivityLog() {
        const logContainer = document.getElementById('activity-log');
        if (!logContainer) return;
        
        const maxLogEntries = 15; // Limitar número de entradas
        const logMessages = [
            "System scan initiated.",
            "User 'admin' login successful from 192.168.1.10",
            "Firewall rule updated: Allow port 443",
            "Detected potential SQL injection attempt - blocked.",
            "Project 'AES-app' committed to repository.",
            "Security patch KB5034441 installed.",
            "Network traffic anomaly detected on interface eth0.",
            "New device connected: 'Kali-Linux-VM'",
            "Vulnerability scan completed: 0 critical found.",
            "CTF challenge 'Web Exploitation 101' solved.",
            "Backup process started.",
            "CPU usage high on 'webserver-01'.",
        ];

        const addLogEntry = () => {
            const timestamp = new Date().toLocaleTimeString('en-GB'); // Formato HH:MM:SS
            const randomMessage = logMessages[Math.floor(Math.random() * logMessages.length)];
            
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('log-entry');
            entryDiv.innerHTML = `
                <span class="log-time">${timestamp}</span>
                <span class="log-message">${randomMessage}</span>
            `;
            
            // Añadir al principio
            logContainer.insertBefore(entryDiv, logContainer.firstChild);
            
            // Limitar el número de entradas
            if (logContainer.children.length > maxLogEntries) {
                logContainer.removeChild(logContainer.lastChild);
            }
        };

        // Limpiar logs anteriores y añadir algunos iniciales
        logContainer.innerHTML = '';
        for (let i=0; i<5; i++) {
            setTimeout(addLogEntry, i * 500); // Añade algunos al inicio rápidamente
        }

        // Añadir nuevas entradas periódicamente
        activityLogInterval = setInterval(addLogEntry, Math.random() * (8000 - 3000) + 3000); // Entre 3 y 8 segundos
    }

    function startSecurityScanner() {
        const vulnElem = document.getElementById('vulnerability-count');
        const scoreElem = document.getElementById('security-score');
        const timeElem = document.getElementById('last-scan-time');
        if (!vulnElem || !scoreElem || !timeElem) return;

        const updateScanner = () => {
            const vulnerabilities = Math.floor(Math.random() * 3); // 0, 1 o 2 vulnerabilidades
            let score = 100 - (vulnerabilities * Math.floor(Math.random() * 3 + 1)); // Penalización aleatoria
            if (score < 90) score = 90 + Math.floor(Math.random() * 5); // Mantener score alto
             if (score > 100) score = 100;

            vulnElem.textContent = vulnerabilities;
            scoreElem.textContent = `${score}/100`;
            timeElem.textContent = new Date().toLocaleTimeString('en-GB');
        };

        updateScanner(); // Ejecutar una vez al inicio
        securityScannerInterval = setInterval(updateScanner, 5000 + Math.random() * 5000); // Cada 5-10 segundos
    }

    // Inicializa el dashboard cuando la sección es visible (opcional, mejora rendimiento)
    const dashboardSection = document.getElementById('dashboard');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    const dashboardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initDashboard();
                observer.unobserve(entry.target); // Observar solo una vez
            } else {
                 // Podrías destruir los gráficos si quieres optimizar mucho
                 // destroyDashboard(); 
            }
        });
    }, observerOptions);

    if (dashboardSection) {
        dashboardObserver.observe(dashboardSection);
    }

    // Botón de refresco del dashboard
     const refreshBtn = document.getElementById('refresh-dashboard-btn');
     if (refreshBtn) {
         refreshBtn.addEventListener('click', () => {
             destroyDashboard(); // Limpia intervalos y gráficos existentes
             // Vuelve a renderizar todo
             renderSkillsChart(); 
             renderProjectsChart();
             startActivityLog();
             startSecurityScanner();
         });
     }


    // --- Contact Form Success Message ---
    const formStatusDiv = document.getElementById('form-status');
    if (formStatusDiv && window.location.search.includes('success=true')) {
        formStatusDiv.style.display = 'block';
        formStatusDiv.style.backgroundColor = 'rgba(100, 255, 218, 0.2)'; // Fondo de acento
        formStatusDiv.style.color = 'var(--color-accent)';
        formStatusDiv.querySelector('p').textContent = 'Message sent successfully! Thank you.';
         // Opcional: limpiar la URL
         // window.history.replaceState(null, null, window.location.pathname + '#contact'); 
    }
    // Podrías añadir manejo de errores si Formspree redirige con ?error=true

}); // Fin de DOMContentLoaded