export const locales = ["es", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "site.description":
      "Ingeniero de ciberseguridad especializado en análisis de malware, Red Team y análisis forense. Herramientas de seguridad, vulnerabilidades reportadas y trabajo en informática forense.",
    "nav.projects": "Proyectos",
    "nav.reflections": "Reflexiones",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.skip": "Saltar al contenido",
    "nav.main": "Navegación principal",
    "nav.home": "Javier González Casares, inicio",
    "theme.toggle": "Cambiar entre tema claro y oscuro",
    "hero.headline": "De pequeño rompía cosas sin querer; ahora lo hago <em>a propósito</em>.",
    "hero.role": "Ingeniero de ciberseguridad",
    "hero.context": "IA y seguridad",
    "hero.skills": "Análisis de malware · Forense digital · OSINT · Pentesting",
    "hero.lead":
      "Te doy la bienvenida a mi baúl digital. Aquí guardo una parte de lo que soy, por si algún día se me olvida.",
    "hero.cta": "Ver proyectos",
    "hero.cv": "Descargar CV",
    "hero.photoAlt": "Javier González Casares en un evento profesional",
    "hero.now": "Ahora",
    "hero.nowText": "Estudio ingeniería inversa e inteligencia de malware en el GSEC de Google, Málaga.",
    "highlights.title": "Logros destacados",
    "projects.title": "Proyectos destacados",
    "projects.all": "Ver todos",
    "projects.pageTitle": "Proyectos",
    "projects.lead": "Lo que sale de mis inquietudes: seguridad, IA y algún que otro producto.",
    "projects.security": "Más trabajo de seguridad",
    "projects.other": "Otros proyectos",
    "projects.otherLead": "Productos, aprendizaje automático y trabajos de la carrera.",
    "projects.details": "Detalles técnicos",
    "projects.back": "Todos los proyectos",
    "projects.links": "Enlaces",
    "projects.specs": "Ficha técnica",
    "projects.more": "Leer más",
    "reflections.title": "Reflexiones",
    "reflections.lead": "Lo que hay detrás de mis inquietudes.",
    "reflections.latest": "Últimas reflexiones",
    "reflections.read": "Leer reflexión",
    "reflections.empty": "Todavía no hay nada publicado. Pronto.",
    "reflections.back": "Todas las reflexiones",
    "reflections.onlyEs": "Solo en español",
    "text.draft": "Borrador",
    "text.contents": "En este texto",
    "about.title": "Sobre mí",
    "about.experience": "Experiencia",
    "about.education": "Formación",
    "about.awards": "Premios y competiciones",
    "about.community": "Comunidad",
    "about.documents": "CV y cartas",
    "about.documentsLead": "Mi CV y cartas de reconocimiento y recomendación.",
    "contact.title": "Contacto",
    "contact.lead": "Para temas de trabajo o preguntas sobre un proyecto, escríbeme.",
  },
  en: {
    "site.description":
      "Cybersecurity engineer specialising in malware analysis, red teaming and digital forensics. Security tools, disclosed vulnerabilities and work in digital forensics.",
    "nav.projects": "Projects",
    "nav.reflections": "Reflections",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.skip": "Skip to content",
    "nav.main": "Main navigation",
    "nav.home": "Javier González Casares, home",
    "theme.toggle": "Switch between light and dark theme",
    "hero.headline": "As a kid, I used to break things by accident; now I do it <em>on purpose</em>.",
    "hero.role": "Cybersecurity engineer",
    "hero.context": "AI & security",
    "hero.skills": "Malware analysis · Digital forensics · OSINT · Pentesting",
    "hero.lead":
      "Welcome to my digital trunk. I keep a part of who I am in here, in case I ever forget.",
    "hero.cta": "View projects",
    "hero.cv": "Download CV",
    "hero.photoAlt": "Javier González Casares at a professional event",
    "hero.now": "Now",
    "hero.nowText": "Studying reverse engineering and malware intelligence at Google's GSEC, Málaga.",
    "highlights.title": "Selected highlights",
    "projects.title": "Selected projects",
    "projects.all": "View all",
    "projects.pageTitle": "Projects",
    "projects.lead": "What comes out of my restlessness: security, AI and the odd product.",
    "projects.security": "More security work",
    "projects.other": "Other projects",
    "projects.otherLead": "Products, machine learning and coursework.",
    "projects.details": "Technical details",
    "projects.back": "All projects",
    "projects.links": "Links",
    "projects.specs": "Technical summary",
    "projects.more": "Read more",
    "reflections.title": "Reflections",
    "reflections.lead": "What lies behind my restlessness.",
    "reflections.latest": "Latest reflections",
    "reflections.read": "Read reflection",
    "reflections.empty": "Nothing published yet. Soon.",
    "reflections.back": "All reflections",
    "reflections.onlyEs": "Spanish only",
    "text.draft": "Draft",
    "text.contents": "In this piece",
    "about.title": "About me",
    "about.experience": "Experience",
    "about.education": "Education",
    "about.awards": "Awards & competitions",
    "about.community": "Community",
    "about.documents": "CV & letters",
    "about.documentsLead": "My CV and letters of recognition and recommendation.",
    "contact.title": "Contact",
    "contact.lead": "For work enquiries or questions about a project, email me.",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

/** Rutas del sitio. El español vive en la raíz y el inglés bajo /en/. */
export const routes = {
  home: { es: "/", en: "/en/" },
  reflections: { es: "/reflexiones/", en: "/en/reflections/" },
  projects: { es: "/proyectos/", en: "/en/projects/" },
  about: { es: "/sobre-mi/", en: "/en/about/" },
} as const;

export type RouteKey = keyof typeof routes;

export function route(lang: Lang, key: RouteKey): string {
  return routes[key][lang];
}

/** Texto en los dos idiomas, tal como llega de los ficheros de datos. */
export type Localized = Record<Lang, string>;
