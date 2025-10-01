/**
 * Portfolio Web - Javier González Casares
 * JavaScript for interactive navigation, animations, and project pagination
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
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

    // Efecto de escritura para el terminal - versión secuencial
    const terminalCommands = document.querySelectorAll('.terminal-body .command:not(.blink)');
    const terminalOutputs = document.querySelectorAll('.terminal-body .output');
    const DEFAULT_TYPING_SPEED = 25;
    const DEFAULT_OUTPUT_DELAY = 150;
    const DEFAULT_COMMAND_DELAY = 350;

    const parseWithFallback = (value, fallback) => {
        const parsed = parseInt(value, 10);
        return Number.isNaN(parsed) ? fallback : parsed;
    };

    function typeWriter(element, text, index, speed, done) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeWriter(element, text, index + 1, speed, done), speed);
        } else if (typeof done === 'function') {
            done();
        }
    }

    function startTypingEffect() {
        if (!terminalCommands.length) {
            return;
        }

        // Preparar comandos y salidas antes de iniciar la animación
        terminalCommands.forEach((cmd, commandIndex) => {
            const originalText = cmd.textContent;
            cmd.setAttribute('data-text', originalText);
            cmd.textContent = '';
            cmd.style.transition = 'opacity 0.3s';
            cmd.style.opacity = '0';

            if (commandIndex !== 0) {
                cmd.style.display = 'none';
            }
        });

        terminalOutputs.forEach(output => {
            output.style.display = 'none';
            output.style.opacity = '0';
            output.style.transition = 'opacity 0.3s';
        });

        let currentIndex = 0;

        function typeNextCommand() {
            if (currentIndex >= terminalCommands.length) {
                return;
            }

            const command = terminalCommands[currentIndex];
            const output = terminalOutputs[currentIndex] || null;
            const commandText = command.getAttribute('data-text') || '';
            const typingSpeed = Math.max(parseWithFallback(command.dataset.typingSpeed, DEFAULT_TYPING_SPEED), 10);
            const outputDelay = Math.max(parseWithFallback(command.dataset.outputDelay, DEFAULT_OUTPUT_DELAY), 0);
            const delayAfter = Math.max(parseWithFallback(command.dataset.delayAfter, DEFAULT_COMMAND_DELAY), 0);

            command.style.display = 'inline-block';
            setTimeout(() => {
                command.style.opacity = '1';
            }, 40);

            const proceedToNext = () => {
                currentIndex++;
                if (currentIndex < terminalCommands.length) {
                    setTimeout(typeNextCommand, delayAfter);
                }
            };

            typeWriter(command, commandText, 0, typingSpeed, () => {
                if (output) {
                    setTimeout(() => {
                        output.style.display = 'block';
                        requestAnimationFrame(() => {
                            output.style.opacity = '1';
                        });

                        const progressElement = output.querySelector('.terminal-progress');
                        if (progressElement) {
                            progressElement.classList.remove('animate');
                            void progressElement.offsetWidth;
                            progressElement.classList.add('animate');
                        }

                        proceedToNext();
                    }, outputDelay);
                } else {
                    proceedToNext();
                }
            });
        }

        typeNextCommand();
    }

    // Iniciar efecto de escritura una vez cargado el DOM
    setTimeout(startTypingEffect, 400);

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

    // Pagination for Projects Section
    const projectsGrid = document.querySelector('#projects .projects-grid');
    if (projectsGrid) {
        const projectCards = Array.from(projectsGrid.querySelectorAll('.project-card'));
        const projectsPerPage = 6;
        let currentPage = 1;

        const updatePaginationControls = () => {
            const totalPages = Math.ceil(projectCards.length / projectsPerPage);
            const prevButton = document.getElementById('prev-page');
            const nextButton = document.getElementById('next-page');
            const pageInfo = document.getElementById('page-info');

            if (prevButton) prevButton.disabled = currentPage === 1;
            if (nextButton) nextButton.disabled = currentPage === totalPages;
            if (pageInfo) pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        };

        const displayProjects = (page) => {
            currentPage = page;
            const startIndex = (page - 1) * projectsPerPage;
            const endIndex = startIndex + projectsPerPage;

            projectCards.forEach((card, index) => {
                if (index >= startIndex && index < endIndex) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });

            updatePaginationControls();
        };

        const createPaginationControls = () => {
            const paginationContainer = document.createElement('div');
            paginationContainer.classList.add('pagination-controls');
            projectsGrid.parentNode.insertBefore(paginationContainer, projectsGrid.nextSibling);

            const prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.classList.add('btn', 'small');
            prevButton.id = 'prev-page';
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    displayProjects(currentPage - 1);
                }
            });
            paginationContainer.appendChild(prevButton);

            const pageInfo = document.createElement('span');
            pageInfo.id = 'page-info';
            pageInfo.classList.add('page-info');
            paginationContainer.appendChild(pageInfo);

            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.classList.add('btn', 'small');
            nextButton.id = 'next-page';
            nextButton.addEventListener('click', () => {
                const totalPages = Math.ceil(projectCards.length / projectsPerPage);
                if (currentPage < totalPages) {
                    displayProjects(currentPage + 1);
                }
            });
            paginationContainer.appendChild(nextButton);

            updatePaginationControls();
        };

        createPaginationControls();
        displayProjects(1);
    }
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


