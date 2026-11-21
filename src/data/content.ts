import raw from "./content.json";
import type { ImageMetadata } from "astro";
import { type Lang, type Localized, route } from "@/i18n/ui";

export interface Link {
  href: string;
  label: Localized;
}

export interface Project {
  id: string;
  group: "featured" | "security" | "other";
  title: Localized;
  kind: Localized;
  body: Localized[];
  details: Localized[];
  tags: string[];
  links: Link[];
  /** Color plano de la portada hasta que exista la ilustración. */
  tone: string;
  /** Nombre del fichero en src/assets/covers, sin extensión. */
  cover?: string;
  /** Solo los destacados: da nombre a su página propia. */
  slug?: string;
  /** Solo los destacados: la frase que lo presenta en tarjetas y en su página. */
  tagline?: Localized;
}

export interface HistoryEntry {
  date: Localized;
  title: Localized;
  org: Localized | null;
  body: Localized[];
  links: Link[];
}

export interface Doc {
  href: string;
  title: Localized;
  meta: Localized;
  /** Nombre de la miniatura en src/assets/docs, sin extensión. */
  preview?: string;
}

export const projects = raw.projects as Project[];
export const featured = projects.filter((p) => p.group === "featured");
export const experience = raw.experience as HistoryEntry[];
export const education = raw.education as HistoryEntry[];
export const awards = raw.awards as HistoryEntry[];
export const community = raw.community as HistoryEntry[];
export const documents = raw.documents as Doc[];
export const about = raw.about as Localized[];

const byName = (files: Record<string, { default: ImageMetadata }>) =>
  Object.fromEntries(Object.entries(files).map(([path, mod]) => [path.split("/").pop()!.replace(/\.\w+$/, ""), mod.default]));

const covers = byName(import.meta.glob<{ default: ImageMetadata }>("../assets/covers/*.{jpg,png,webp}", { eager: true }));
const previews = byName(import.meta.glob<{ default: ImageMetadata }>("../assets/docs/*.{jpg,png,webp}", { eager: true }));

export const coverOf = (p: Project): ImageMetadata | undefined => (p.cover ? covers[p.cover] : undefined);
export const previewOf = (d: Doc): ImageMetadata | undefined => (d.preview ? previews[d.preview] : undefined);

/** Página propia del proyecto, si la tiene. */
export const projectUrl = (p: Project, lang: Lang): string | undefined =>
  p.slug ? `${route(lang, "projects")}${p.slug}/` : undefined;

export const isExternal = (href: string) => /^https?:\/\//.test(href);
