import type { Lang } from "@/i18n/ui";

type L = Record<Lang, string>;

export const highlights: { value: string; label: L; note: L }[] = [
  {
    value: "Policía",
    label: { es: "Policía Nacional", en: "National Police" },
    note: { es: "Colaborador en cibercrimen", en: "Cybercrime collaborator" },
  },
  {
    value: "$1,000",
    label: { es: "Meta Bug Bounty", en: "Meta Bug Bounty" },
    note: { es: "Validado y corregido", en: "Validated & patched" },
  },
  {
    value: "NASA",
    label: { es: "Reconocimiento VDP", en: "VDP recognition" },
    note: { es: "Divulgación responsable, 2026", en: "Responsible disclosure, 2026" },
  },
  {
    value: "#2",
    label: { es: "CTFTime, España", en: "CTFTime, Spain" },
    note: { es: "Equipo Caliphal Hounds, 2024", en: "Caliphal Hounds team, 2024" },
  },
];

export interface Project {
  id: string;
  title: L;
  kind: L;
  summary: L;
  tags: string[];
  href: string;
  /** Color plano de la portada hasta que exista la ilustración. */
  tone: string;
}

export const projects: Project[] = [
  {
    id: "P-01",
    title: { es: "AllOsint", en: "AllOsint" },
    kind: { es: "Proyecto de máster", en: "Master's project" },
    summary: {
      es: "Combina comprobaciones de correos y teléfonos, señales de apps de mensajería y filtraciones de datos, y exporta los resultados como informes PDF. Se ejecuta en tu propio equipo.",
      en: "Combines checks on email addresses and phone numbers, messaging app signals and data breach records, then exports results as PDF reports. It runs on your own machine.",
    },
    tags: ["OSINT", "Python", "FastAPI", "Next.js"],
    href: "https://github.com/i12gocaj/allosint-tfm",
    tone: "#8fa3b8",
  },
  {
    id: "P-02",
    title: { es: "Fuga de audio en Instagram Notes", en: "Instagram Notes audio leak" },
    kind: { es: "Divulgación de vulnerabilidad", en: "Vulnerability disclosure" },
    summary: {
      es: "Encontré un fallo en Instagram Web que dejaba accesible el audio de las Notas mediante enlaces directos. Lo reporté a Meta, que lo confirmó, lo corrigió y me premió con 1.000 $.",
      en: "I found a flaw in Instagram Web that made Notes audio accessible through direct video links. I reported it to Meta, which confirmed the issue, fixed it and awarded me $1,000.",
    },
    tags: ["Web Security", "Meta Bug Bounty"],
    href: "https://github.com/i12gocaj/Instagram-Notes-Audio-Leakage-via-URL-Extraction-Fixed",
    tone: "#c98f73",
  },
  {
    id: "P-03",
    title: { es: "SecEmail", en: "SecEmail" },
    kind: { es: "Seguridad de correo", en: "Email security" },
    summary: {
      es: "Herramientas en Python para comprobar la autenticación del correo y lanzar simulaciones de phishing autorizadas. Verifica firmas y detecta dominios parecidos.",
      en: "A Python toolkit for checking email authentication and running authorised phishing simulations. It verifies signatures and detects lookalike domains.",
    },
    tags: ["Python", "Red Team", "Cryptography"],
    href: "https://github.com/i12gocaj/SecEmail",
    tone: "#a79cc9",
  },
  {
    id: "P-04",
    title: { es: "Atlas", en: "Atlas" },
    kind: { es: "Auditoría de uso de IA", en: "AI usage audit" },
    summary: {
      es: "Prototipo del Atmira × OpenAI × Big Data Hackathon 2026. Revisa el uso de asistentes de programación con IA para informar de costes, adopción y posible exposición de datos sensibles.",
      en: "A prototype for the 2026 Atmira × OpenAI × Big Data Hackathon. It reviews AI coding-assistant usage to report costs, adoption and possible sensitive-data exposure.",
    },
    tags: ["AI Governance", "Python", "Ollama"],
    href: "https://github.com/i12gocaj/Atlas",
    tone: "#9fb39a",
  },
];

export const contact = {
  email: "javiergc100@protonmail.com",
  github: "https://github.com/i12gocaj",
  linkedin: "https://www.linkedin.com/in/javier-gonzalez-casares/",
  oldSite: "https://i12gocaj.github.io/portfolio/",
  cv: "/docs/cv-javier-gonzalez-casares.pdf",
};
