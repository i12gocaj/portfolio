export const locales = ["es", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "site.description":
      "Ingeniero de ciberseguridad y analista de malware en Córdoba, España. Herramientas de seguridad, vulnerabilidades reportadas y trabajo en informática forense.",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.skip": "Saltar al contenido",
    "nav.main": "Navegación principal",
    "nav.home": "Javier González Casares, inicio",
    "theme.toggle": "Cambiar entre tema claro y oscuro",
    "hero.headline": "De pequeño rompía cosas sin querer; ahora lo hago <em>a propósito</em>.",
    "hero.context": "Córdoba · Malware y Red Team · GSEC Málaga",
    "hero.lead":
      "Analizo malware y busco debilidades en sistemas. También desarrollo herramientas de seguridad y colaboro con la Policía Nacional en investigaciones de cibercrimen.",
    "hero.cta": "Ver proyectos",
    "hero.cv": "Descargar CV",
    "hero.photoAlt": "Javier González Casares en un evento profesional",
    "hero.now": "Ahora",
    "hero.nowText": "Estudio ingeniería inversa e inteligencia de malware en el GSEC de Google, Málaga.",
    "highlights.title": "Logros destacados",
    "projects.title": "Proyectos destacados",
    "projects.all": "Todos en GitHub",
    "contact.title": "Contacto",
    "contact.lead": "Para temas de trabajo o preguntas sobre un proyecto, escríbeme.",
    "footer.oldSite": "Versión anterior",
  },
  en: {
    "site.description":
      "Cybersecurity engineer and malware analyst based in Córdoba, Spain. Security tools, disclosed vulnerabilities and work in digital forensics.",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.skip": "Skip to content",
    "nav.main": "Main navigation",
    "nav.home": "Javier González Casares, home",
    "theme.toggle": "Switch between light and dark theme",
    "hero.headline": "As a kid, I used to break things by accident; now I do it <em>on purpose</em>.",
    "hero.context": "Córdoba · Malware & Red Team · GSEC Málaga",
    "hero.lead":
      "I analyse malware and test systems for weaknesses. I also build security tools and collaborate with the Spanish National Police on cybercrime investigations.",
    "hero.cta": "View projects",
    "hero.cv": "Download CV",
    "hero.photoAlt": "Javier González Casares at a professional event",
    "hero.now": "Now",
    "hero.nowText": "Studying reverse engineering and malware intelligence at Google's GSEC, Málaga.",
    "highlights.title": "Selected highlights",
    "projects.title": "Selected projects",
    "projects.all": "All on GitHub",
    "contact.title": "Contact",
    "contact.lead": "For work enquiries or questions about a project, email me.",
    "footer.oldSite": "Previous version",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

/** Ruta localizada: el español vive en la raíz y el inglés bajo /en/. */
export function localePath(lang: Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/en${clean}`;
}
