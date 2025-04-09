# Notas de Diseño para Portfolio Web de Javier González Casares

## Concepto General
Un portfolio web moderno, minimalista y profesional con enfoque en ciberseguridad e ingeniería informática. El diseño debe transmitir profesionalismo técnico y conocimientos en seguridad informática.

## Paleta de Colores
Basada en tonos oscuros y tecnológicos:
- **Color principal**: #0a192f (Azul oscuro)
- **Color secundario**: #112240 (Azul oscuro más claro)
- **Color de acento**: #64ffda (Verde cian)
- **Color de texto principal**: #e6f1ff (Blanco azulado)
- **Color de texto secundario**: #8892b0 (Gris azulado)
- **Color de fondo**: #0a192f a #020c1b (Gradiente de azul oscuro)
- **Color de alerta/seguridad**: #ff5555 (Rojo)

## Tipografía
- **Fuente principal**: 'Fira Code', monospace (para dar sensación de código)
- **Fuente secundaria**: 'Inter', sans-serif (para textos largos y legibilidad)
- **Tamaños**:
  - Títulos principales: 2.5rem
  - Subtítulos: 1.8rem
  - Texto normal: 1rem
  - Texto pequeño: 0.8rem

## Estructura y Secciones

### 1. Header/Navegación
- Barra de navegación fija en la parte superior
- Logo/nombre a la izquierda
- Menú de navegación a la derecha
- Efecto de desvanecimiento al hacer scroll
- Versión móvil con menú hamburguesa

### 2. Hero Section (Pantalla de inicio)
- Ocupará toda la pantalla inicial
- Nombre grande y llamativo
- Subtítulo con especialización en ciberseguridad
- Animación de terminal/código que simule un escaneo de seguridad
- Botón CTA para ver proyectos o contactar

### 3. Sobre Mí
- Foto profesional (opcional)
- Biografía profesional enfocada en ciberseguridad
- Destacar formación en Ingeniería Informática en la Universidad de Córdoba
- Párrafo sobre filosofía profesional y enfoque en seguridad

### 4. Habilidades Técnicas
- Visualización interactiva de habilidades
- Categorías:
  - Lenguajes de programación (Python, Java, JavaScript, C/C++, Rust, TypeScript)
  - Tecnologías web (CSS, React, Next.js, Flutter)
  - Ciberseguridad (CTF, HackTheBox, Kali Linux)
  - Bases de datos (MariaDB, MySQL)
  - DevOps (Docker)
  - Herramientas (Trello, Notion)
  - IA (ChatGPT, GitHub Copilot, Hugging Face)
- Barras de progreso o gráficos hexagonales para visualizar nivel

### 5. Proyectos Destacados
- Tarjetas interactivas para cada proyecto
- Proyectos a incluir:
  - HundirFlotaRedes
  - Interfaz de casa inteligente (SistemasInteractivos)
  - Artificial-Intelligent
  - ToDo_app
  - Snake Game
- Cada tarjeta incluirá:
  - Imagen/captura del proyecto
  - Título
  - Descripción breve
  - Tecnologías utilizadas
  - Enlaces a GitHub y demo (si disponible)
- Efecto hover con más información

### 6. Experiencia y Formación
- Línea de tiempo vertical interactiva
- Destacar Universidad de Córdoba
- Incluir experiencia profesional (pendiente de información adicional)
- Iconos y fechas claras

### 7. Elemento Creativo: Dashboard de Ciberseguridad
- Sección especial que simule un dashboard de monitoreo de seguridad
- Gráficos animados que muestren:
  - "Escaneo" en tiempo real de vulnerabilidades
  - Estadísticas de proyectos completados
  - Mapa de habilidades técnicas
  - Contador de días/horas dedicados a proyectos de seguridad

### 8. Contacto
- Formulario simple y elegante
- Campos: Nombre, Email, Asunto, Mensaje
- Validación de formulario con animaciones
- Enlaces a:
  - GitHub (https://github.com/i12gocaj)
  - LinkedIn
  - Email (javiergc100@protonmail.com)
- Diseño que sugiera seguridad y encriptación

### 9. Footer
- Enlaces a redes sociales
- Copyright
- Pequeño easter egg relacionado con ciberseguridad

## Animaciones y Efectos
- Transiciones suaves entre secciones
- Efecto de "typing" en textos importantes
- Partículas/conexiones en el fondo que simulen una red
- Hover effects en botones y tarjetas
- Animación de carga que simule un escaneo de seguridad
- Scroll reveal para elementos que aparecen al hacer scroll
- Efecto "glitch" sutil en algunos títulos para dar sensación de hacking

## Responsive Design
- Diseño mobile-first
- Breakpoints:
  - Móvil: 320px - 480px
  - Tablet: 481px - 768px
  - Laptop: 769px - 1024px
  - Desktop: 1025px+
- Menú hamburguesa en versiones móviles
- Reorganización de elementos en pantallas pequeñas
- Optimización de animaciones para dispositivos móviles

## Elementos Técnicos
- Preloader animado
- Modo oscuro por defecto (sin opción de cambio, manteniendo la estética de ciberseguridad)
- Optimización de imágenes
- Lazy loading para mejorar rendimiento
- Microinteracciones en elementos interactivos
