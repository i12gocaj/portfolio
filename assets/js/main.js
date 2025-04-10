/**
 * Portfolio Web - Javier González Casares
 * JavaScript for dashboard randomization and enhanced functionality
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Implementación de la Alternativa 2: Ocultar inmediatamente el contenido de la terminal
    const terminalElements = document.querySelectorAll('.terminal-body .command, .terminal-body .output');
    terminalElements.forEach(el => {
        el.style.opacity = '0';
        el.style.visibility = 'hidden';
    });

    // Preloader
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 2500);

    // Navegación
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace (móvil) y scroll suave
    const navItems = document.querySelectorAll('.nav-links a, .cta-buttons a');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Cerrar menú móvil si está abierto
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            // Scroll suave para navegación
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Cambiar estilo de la navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Inicializar partículas
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#64ffda"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#64ffda",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Inicializar gráficos del dashboard con datos aleatorios
    function initializeCharts() {
        console.log("Inicializando gráficos del dashboard");
        if (typeof Chart !== 'undefined') {
            // Gráfico de habilidades
            const skillsChartCanvas = document.getElementById('skills-chart-canvas');
            if (skillsChartCanvas) {
                console.log("Canvas de habilidades encontrado, creando gráfico");
                const skillsChart = new Chart(skillsChartCanvas, {
                    type: 'radar',
                    data: {
                        labels: ['Cybersecurity', 'Programming', 'Networks', 'Databases', 'Standards', 'Web Development'],
                        datasets: [{
                            label: 'Skill Level',
                            data: [90, 85, 80, 75, 80, 70],
                            backgroundColor: 'rgba(100, 255, 218, 0.2)',
                            borderColor: '#64ffda',
                            pointBackgroundColor: '#64ffda',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#64ffda'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            r: {
                                angleLines: {
                                    color: 'rgba(255, 255, 255, 0.1)'
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.1)'
                                },
                                pointLabels: {
                                    color: '#8892b0',
                                    font: {
                                        family: "'Fira Code', monospace",
                                        size: 10
                                    }
                                },
                                ticks: {
                                    backdropColor: 'transparent',
                                    color: '#8892b0',
                                    font: {
                                        family: "'Fira Code', monospace",
                                        size: 10
                                    },
                                    stepSize: 20,
                                    max: 100,
                                    min: 0
                                },
                                suggestedMin: 0,
                                suggestedMax: 100
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                titleFont: {
                                    family: "'Fira Code', monospace"
                                },
                                bodyFont: {
                                    family: "'Fira Code', monospace"
                                },
                                callbacks: {
                                    label: function(context) {
                                        return context.raw + '/100';
                                    }
                                }
                            }
                        }
                    }
                });
            } else {
                console.log("Canvas de habilidades no encontrado");
            }

            // Gráfico de proyectos
            const projectsChartCanvas = document.getElementById('projects-chart-canvas');
            if (projectsChartCanvas) {
                console.log("Canvas de proyectos encontrado, creando gráfico");
                const projectsChart = new Chart(projectsChartCanvas, {
                    type: 'doughnut',
                    data: {
                        labels: ['Completed', 'In Progress', 'Planned'],
                        datasets: [{
                            data: [5, 2, 3],
                            backgroundColor: [
                                '#64ffda',
                                '#ffbd2e',
                                '#8892b0'
                            ],
                            borderColor: [
                                '#64ffda',
                                '#ffbd2e',
                                '#8892b0'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '70%',
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    color: '#8892b0',
                                    font: {
                                        family: "'Fira Code', monospace",
                                        size: 10
                                    },
                                    padding: 20,
                                    usePointStyle: true,
                                    pointStyle: 'circle'
                                }
                            },
                            tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                titleFont: {
                                    family: "'Fira Code', monospace"
                                },
                                bodyFont: {
                                    family: "'Fira Code', monospace"
                                }
                            }
                        },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        }
                    }
                });
            } else {
                console.log("Canvas de proyectos no encontrado");
            }
        } else {
            console.log("Chart.js no está disponible");
        }
    }
    
    // Ejecutar inicialización de gráficos después de que el DOM esté completamente cargado
    // y también con un retraso para asegurar que los elementos estén disponibles
    setTimeout(initializeCharts, 1000);

    // Efecto de escritura para el terminal - versión secuencial
    const terminalCommands = document.querySelectorAll('.terminal-body .command:not(.blink)');
    const terminalOutputs = document.querySelectorAll('.terminal-body .output');
    
    function typeWriter(element, text, i, callback) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(function() {
                typeWriter(element, text, i, callback);
            }, 50);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }
    
    function startTypingEffect() {
        // Limpiar todos los comandos y salidas primero
        terminalCommands.forEach(cmd => {
            // Guardar el texto original como atributo data-text
            const originalText = cmd.textContent;
            cmd.setAttribute('data-text', originalText);
            // Limpiar el texto visible
            cmd.textContent = '';
            // Configurar transición para animación suave
            cmd.style.transition = 'opacity 0.3s';
            cmd.style.opacity = '0';
            // Ocultar todos los comandos excepto el primero
            if (cmd !== terminalCommands[0]) {
                cmd.style.display = 'none';
            }
        });
        
        // Ocultar todas las salidas
        terminalOutputs.forEach(output => {
            output.style.display = 'none';
            output.style.opacity = '0';
            output.style.transition = 'opacity 0.3s';
        });
        
        let currentIndex = 0;
        
        function typeNextCommand() {
            if (currentIndex < terminalCommands.length) {
                const command = terminalCommands[currentIndex];
                const output = terminalOutputs[currentIndex];
                const commandText = command.getAttribute('data-text');
                
                // Hacer visible el comando actual
                command.style.display = 'inline-block';
                setTimeout(() => {
                    command.style.opacity = '1';
                }, 50);
                
                typeWriter(command, commandText, 0, function() {
                    // Mostrar la salida después de escribir el comando
                    if (output) {
                        output.style.display = 'inline-block';
                        setTimeout(() => {
                            output.style.opacity = '1';
                        }, 50);
                    }
                    
                    currentIndex++;
                    
                    // Preparar el siguiente comando si existe
                    if (currentIndex < terminalCommands.length) {
                        setTimeout(typeNextCommand, 1000);
                    }
                });
            }
        }
        
        // Iniciar con el primer comando
        typeNextCommand();
    }
    
    // Iniciar efecto de escritura después de que se oculte el preloader
    setTimeout(startTypingEffect, 3000);

    // Animación de aparición al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener elementos del formulario
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const formStatus = contactForm.querySelector('.form-status');
            const formStatusText = formStatus.querySelector('p');
            const originalBtnText = submitBtn.textContent;
            
            // Deshabilitar botón y mostrar estado de carga
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Recopilar datos del formulario
            const formData = new FormData(contactForm);
            
            // Enviar datos a Formspree
            fetch('https://formspree.io/f/myzelwak', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Mostrar mensaje de éxito
                formStatus.style.display = 'block';
                formStatus.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                formStatus.style.color = '#64ffda';
                formStatusText.textContent = 'Message sent successfully! I will get back to you soon.';
                
                // Resetear formulario
                contactForm.reset();
                
                // Restaurar botón después de un tiempo
                setTimeout(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                    
                    // Ocultar mensaje de éxito después de un tiempo
                    setTimeout(function() {
                        formStatus.style.display = 'none';
                    }, 5000);
                }, 2000);
            })
            .catch(error => {
                // Mostrar mensaje de error
                formStatus.style.display = 'block';
                formStatus.style.backgroundColor = 'rgba(255, 100, 100, 0.1)';
                formStatus.style.color = '#ff6464';
                formStatusText.textContent = 'There was a problem sending your message. Please try again or contact me directly via email.';
                
                // Restaurar botón
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                
                console.error('Error:', error);
            });
        });
    }

    // Dashboard Security Scanner con aleatoriedad
    function updateSecurityScanner() {
        const vulnerabilityCount = document.getElementById('vulnerability-count');
        const securityScore = document.getElementById('security-score');
        const lastScanTime = document.getElementById('last-scan-time');
        
        if (vulnerabilityCount && securityScore && lastScanTime) {
            // Generar valores aleatorios para simular escaneos
            const randomVulnerabilities = Math.floor(Math.random() * 5); // 0-4 vulnerabilidades
            const randomScore = 85 + Math.floor(Math.random() * 16); // 85-100 score
            
            // Actualizar valores
            vulnerabilityCount.textContent = randomVulnerabilities;
            securityScore.textContent = randomScore + '/100';
            
            // Actualizar tiempo de escaneo
            const now = new Date();
            const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                              now.getMinutes().toString().padStart(2, '0');
            lastScanTime.textContent = timeString;
            
            // Añadir entrada al log con mensaje específico basado en vulnerabilidades
            let message = '';
            if (randomVulnerabilities === 0) {
                message = 'Security scan completed. No vulnerabilities found.';
            } else if (randomVulnerabilities === 1) {
                message = 'Security scan completed. Found 1 potential issue.';
            } else {
                message = `Security scan completed. Found ${randomVulnerabilities} potential issues.`;
            }
            addLogEntry(message);
            
            // Actualizar clase visual basada en vulnerabilidades
            const scannerStatus = document.querySelector('.scanner-status');
            if (scannerStatus) {
                scannerStatus.className = 'scanner-status';
                if (randomVulnerabilities === 0) {
                    scannerStatus.classList.add('secure');
                } else if (randomVulnerabilities <= 2) {
                    scannerStatus.classList.add('warning');
                } else {
                    scannerStatus.classList.add('danger');
                }
            }
        }
    }
    
    // Activity Log con entradas inteligentes y contextuales
    const logCategories = {
        security: [
            'Vulnerability scan completed: {0} issues found',
            'Firewall rules updated: {0} new rules applied',
            'Suspicious IP {0} blocked from {1}',
            'Authentication attempt from {0} {1}',
            'Port scan from {0} detected and mitigated',
            'Malware scan completed: System clean',
            'Security patches applied: {0} updates installed',
            'Intrusion detection alert: {0} activity detected',
            'System integrity check: {1}'
        ],
        system: [
            'System update {0}: {1} components updated',
            'Backup completed: {0} files ({1} MB)',
            'System resources optimized: {0}% improvement',
            'Configuration changes detected in {0}',
            'Database backup completed: {0} tables',
            'SSL certificate for {0} {1}',
            'User permissions updated for {0}',
            'New device connected: {0} from {1}',
            'Software update available: {0} v{1}'
        ],
        activity: [
            'User login from {0} at {1}',
            'File {0} {1} by user',
            'Project {0} status changed to {1}',
            'New comment on {0}: "{1}"',
            'Resource {0} accessed by {1}',
            'API request to {0} endpoint: {1}',
            'Data export completed: {0} records',
            'Search performed for "{0}" with {1} results',
            'Profile information updated: {0}'
        ]
    };
    
    // Datos para generar entradas de log más realistas
    const ipAddresses = ['192.168.1.45', '10.0.0.15', '172.16.254.1', '8.8.8.8', '1.1.1.1', '203.0.113.42'];
    const countries = ['Spain', 'United States', 'Germany', 'Japan', 'Brazil', 'Australia'];
    const statuses = ['successful', 'failed', 'pending', 'in progress', 'completed', 'verified'];
    const components = ['kernel', 'network', 'security', 'database', 'application', 'interface'];
    const projects = ['AES-app', 'CTF-Hackademics', 'Smart Home', 'ToDo App', 'Snake Game', 'ZooWeb'];
    const users = ['admin', 'javier', 'guest', 'system', 'scheduler', 'api'];
    
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function formatLogMessage(template) {
        // Reemplazar marcadores de posición con datos aleatorios
        return template.replace(/{(\d+)}/g, function(match, number) {
            switch (number) {
                case '0':
                    // Primer parámetro - varía según el contexto
                    if (template.includes('IP')) return getRandomItem(ipAddresses);
                    if (template.includes('scan')) return getRandomNumber(0, 5).toString();
                    if (template.includes('rules')) return getRandomNumber(1, 10).toString();
                    if (template.includes('update')) return getRandomItem(components);
                    if (template.includes('files')) return getRandomNumber(100, 5000).toString();
                    if (template.includes('improvement')) return getRandomNumber(5, 30).toString();
                    if (template.includes('tables')) return getRandomNumber(5, 50).toString();
                    if (template.includes('certificate')) return 'portfolio.javiergc.com';
                    if (template.includes('permissions')) return getRandomItem(users);
                    if (template.includes('device')) return 'MacBook Pro';
                    if (template.includes('Software')) return 'Security Scanner';
                    if (template.includes('login')) return getRandomItem(countries);
                    if (template.includes('File')) return 'report-' + getRandomNumber(1, 100) + '.pdf';
                    if (template.includes('Project')) return getRandomItem(projects);
                    if (template.includes('comment')) return 'Pull Request #' + getRandomNumber(10, 99);
                    if (template.includes('Resource')) return '/api/data/' + getRandomNumber(1000, 9999);
                    if (template.includes('API')) return '/users';
                    if (template.includes('export')) return getRandomNumber(50, 500).toString();
                    if (template.includes('Search')) return 'cybersecurity best practices';
                    if (template.includes('Profile')) return 'contact info';
                    return 'unknown';
                case '1':
                    // Segundo parámetro
                    if (template.includes('IP')) return getRandomItem(countries);
                    if (template.includes('Authentication')) return getRandomItem(statuses);
                    if (template.includes('integrity')) return Math.random() > 0.9 ? 'Warning: modified files detected' : 'All files verified';
                    if (template.includes('update')) return getRandomNumber(1, 15).toString();
                    if (template.includes('files')) return getRandomNumber(50, 500).toString();
                    if (template.includes('certificate')) return Math.random() > 0.8 ? 'expires in 7 days' : 'renewed successfully';
                    if (template.includes('device')) return getRandomItem(countries);
                    if (template.includes('Software')) return '2.' + getRandomNumber(0, 9) + '.' + getRandomNumber(0, 9);
                    if (template.includes('login')) return new Date().toLocaleTimeString('en-US', {hour12: false});
                    if (template.includes('File')) return Math.random() > 0.7 ? 'uploaded' : 'downloaded';
                    if (template.includes('Project')) return getRandomItem(['in progress', 'completed', 'on hold', 'testing']);
                    if (template.includes('comment')) return 'Looks good, approved!';
                    if (template.includes('Resource')) return getRandomItem(users);
                    if (template.includes('API')) return Math.random() > 0.8 ? '403 Forbidden' : '200 OK';
                    if (template.includes('Search')) return getRandomNumber(3, 25).toString();
                    return '';
                default:
                    return match;
            }
        });
    }
    
    function addLogEntry(message = null) {
        const logContainer = document.querySelector('.log-container');
        if (logContainer) {
            const now = new Date();
            const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                              now.getMinutes().toString().padStart(2, '0') + ':' + 
                              now.getSeconds().toString().padStart(2, '0');
            
            // Si no se proporciona mensaje, generar uno inteligente
            if (!message) {
                // Seleccionar una categoría aleatoria
                const categories = Object.keys(logCategories);
                const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
                const templates = logCategories[selectedCategory];
                
                // Seleccionar una plantilla aleatoria de la categoría
                const templateIndex = Math.floor(Math.random() * templates.length);
                const template = templates[templateIndex];
                
                // Formatear el mensaje con datos aleatorios
                message = formatLogMessage(template);
            }
            
            // Determinar la clase de severidad basada en el contenido del mensaje
            let severityClass = '';
            if (message.includes('alert') || message.includes('blocked') || message.includes('failed') || 
                message.includes('suspicious') || message.includes('Warning')) {
                severityClass = 'log-warning';
            } else if (message.includes('successful') || message.includes('completed') || 
                      message.includes('optimized') || message.includes('verified')) {
                severityClass = 'log-success';
            }
            
            const newLog = document.createElement('div');
            newLog.className = 'log-entry ' + severityClass;
            newLog.innerHTML = `<span class="log-time">${timeString}</span><span class="log-message">${message}</span>`;
            
            // Añadir al principio para que las entradas más recientes estén arriba
            logContainer.prepend(newLog);
            
            // Limitar a 10 entradas
            const entries = logContainer.querySelectorAll('.log-entry');
            if (entries.length > 10) {
                logContainer.removeChild(entries[entries.length - 1]);
            }
        }
    }
    
    
    // Inicializar el dashboard con datos aleatorios
    function initDashboard() {
        const logContainer = document.querySelector('.log-container');
        if (logContainer) {
            // Limpiar logs existentes
            logContainer.innerHTML = '';
            
            // Añadir 5 entradas iniciales usando addLogEntry para generar mensajes inteligentes
            for (let i = 0; i < 5; i++) {
                addLogEntry();
            }
        }
        
        // Inicializar scanner
        updateSecurityScanner();
    }
    
    // Ejecutar inicialización del dashboard
    initDashboard();
    
    // Actualizar dashboard periódicamente
    setInterval(function() {
        // 20% de probabilidad de añadir una entrada de log aleatoria
        if (Math.random() < 0.2) {
            addLogEntry();
        }
    }, 10000); // Cada 10 segundos
    
    // Botón de actualización del dashboard
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            // Actualizar scanner
            updateSecurityScanner();
            
            // Efecto de actualización
            this.disabled = true;
            this.textContent = 'Refreshing...';
            
            setTimeout(() => {
                this.disabled = false;
                this.textContent = 'Refresh';
            }, 2000);
        });
    }
});

// Añadir clase para animaciones CSS y arreglar botones de navegación
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    
    // Fix navigation buttons - Implementación directa en el evento principal
    const setupNavigationButtons = function() {
        console.log("Configurando botones de navegación");
        
        // Fix Projects button
        const projectsBtn = document.getElementById('view-projects-btn');
        if (projectsBtn) {
            console.log("Botón de proyectos encontrado");
            projectsBtn.onclick = function(e) {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    window.scrollTo({
                        top: projectsSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            };
        } else {
            console.log("Botón de proyectos no encontrado");
        }
        
        // Fix Contact button
        const contactBtn = document.getElementById('contact-me-btn');
        if (contactBtn) {
            console.log("Botón de contacto encontrado");
            contactBtn.onclick = function(e) {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    window.scrollTo({
                        top: contactSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            };
        } else {
            console.log("Botón de contacto no encontrado");
        }
    };
    
    // Ejecutar inmediatamente y también después de un retraso para asegurar que los elementos estén cargados
    setupNavigationButtons();
    setTimeout(setupNavigationButtons, 1000);
});

// Estilos adicionales para animaciones
document.head.insertAdjacentHTML('beforeend', `
<style>
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
.loaded .hero h1,
.loaded .hero h2,
.loaded .cta-buttons {
    animation-play-state: running;
}
</style>
`);
