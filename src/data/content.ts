import raw from "./content.json";
import type { Localized } from "@/i18n/ui";

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
}

export const projects = raw.projects as Project[];
export const featured = projects.filter((p) => p.group === "featured");
export const experience = raw.experience as HistoryEntry[];
export const education = raw.education as HistoryEntry[];
export const awards = raw.awards as HistoryEntry[];
export const community = raw.community as HistoryEntry[];
export const documents = raw.documents as Doc[];
export const about = raw.about as Localized[];

export const isExternal = (href: string) => /^https?:\/\//.test(href);
