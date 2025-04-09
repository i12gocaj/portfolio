/**
 * Portfolio Web - Javier González Casares
 * JavaScript for dashboard randomization and enhanced functionality
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
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
    if (typeof Chart !== 'undefined') {
        // Gráfico de habilidades
        if (document.getElementById('skills-chart')) {
            const skillsChart = new Chart(document.getElementById('skills-chart'), {
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
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }

        // Gráfico de proyectos
        if (document.getElementById('projects-chart')) {
            const projectsChart = new Chart(document.getElementById('projects-chart'), {
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
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#8892b0',
                                font: {
                                    family: "'Fira Code', monospace",
                                    size: 10
                                },
                                padding: 20
                            }
                        }
                    }
                }
            });
        }
    }

    // Efecto de escritura para el terminal
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
        let i = 0;
        
        function typeNextCommand() {
            if (i < terminalCommands.length) {
                const command = terminalCommands[i];
                const output = terminalOutputs[i];
                const commandText = command.textContent;
                
                command.textContent = '';
                
                typeWriter(command, commandText, 0, function() {
                    if (output) {
                        output.style.display = 'inline-block';
                    }
                    i++;
                    setTimeout(typeNextCommand, 500);
                });
            }
        }
        
        terminalOutputs.forEach(output => {
            output.style.display = 'none';
        });
        
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
            
            // Simulación de envío de formulario
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            setTimeout(function() {
                submitBtn.textContent = 'Message Sent!';
                
                // Resetear formulario
                contactForm.reset();
                
                // Restaurar botón después de un tiempo
                setTimeout(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);
            }, 2000);
        });
    }

    // Dashboard Security Scanner con aleatoriedad
    function updateSecurityScanner() {
        const vulnerabilityCount = document.getElementById('vulnerability-count');
        const securityScore = document.getElementById('security-score');
        const lastScanTime = document.getElementById('last-scan-time');
        
        if (vulnerabilityCount && securityScore && lastScanTime) {
            // Generar valores aleatorios para simular escaneos
            const randomVulnerabilities = Math.floor(Math.random() * 3); // 0-2 vulnerabilidades
            const randomScore = 95 + Math.floor(Math.random() * 6); // 95-100 score
            
            // Actualizar valores
            vulnerabilityCount.textContent = randomVulnerabilities;
            securityScore.textContent = randomScore + '/100';
            
            // Actualizar tiempo de escaneo
            const now = new Date();
            const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                              now.getMinutes().toString().padStart(2, '0');
            lastScanTime.textContent = timeString;
            
            // Añadir entrada al log
            addLogEntry('Security scan completed. Found ' + randomVulnerabilities + ' potential issues.');
        }
    }
    
    // Activity Log con entradas aleatorias
    const logMessages = [
        'System update completed successfully',
        'New login detected from usual location',
        'Firewall rules updated',
        'Backup completed successfully',
        'Security patches applied',
        'Vulnerability scan started',
        'Network traffic analysis completed',
        'Authentication attempt blocked',
        'Configuration changes detected',
        'System resources optimized'
    ];
    
    function addLogEntry(message = null) {
        const logContainer = document.querySelector('.log-container');
        if (logContainer) {
            const now = new Date();
            const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                              now.getMinutes().toString().padStart(2, '0') + ':' + 
                              now.getSeconds().toString().padStart(2, '0');
            
            // Si no se proporciona mensaje, elegir uno aleatorio
            if (!message) {
                const randomIndex = Math.floor(Math.random() * logMessages.length);
                message = logMessages[randomIndex];
            }
            
            const newLog = document.createElement('div');
            newLog.className = 'log-entry';
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
        // Generar logs iniciales
        const logContainer = document.querySelector('.log-container');
        if (logContainer) {
            // Limpiar logs existentes
            logContainer.innerHTML = '';
            
            // Añadir 5 entradas iniciales con tiempos escalonados
            const now = new Date();
            for (let i = 0; i < 5; i++) {
                const pastTime = new Date(now - (i * 5 * 60000)); // 5 minutos antes por cada entrada
                const timeString = pastTime.getHours().toString().padStart(2, '0') + ':' + 
                                  pastTime.getMinutes().toString().padStart(2, '0') + ':' + 
                                  pastTime.getSeconds().toString().padStart(2, '0');
                
                const randomIndex = Math.floor(Math.random() * logMessages.length);
                const message = logMessages[randomIndex];
                
                const newLog = document.createElement('div');
                newLog.className = 'log-entry';
                newLog.innerHTML = `<span class="log-time">${timeString}</span><span class="log-message">${message}</span>`;
                
                logContainer.appendChild(newLog);
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

// Añadir clase para animaciones CSS
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
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
