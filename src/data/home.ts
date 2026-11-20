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

export const contact = {
  email: "javiergc100@protonmail.com",
  github: "https://github.com/i12gocaj",
  linkedin: "https://www.linkedin.com/in/javier-gonzalez-casares/",
  cv: "/docs/cv-javier-gonzalez-casares.pdf",
};
