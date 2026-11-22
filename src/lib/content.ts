import { getCollection, type CollectionEntry } from "astro:content";
import { type Lang, route } from "@/i18n/ui";

export type Reflection = CollectionEntry<"reflections">;
export type ProjectNote = CollectionEntry<"projectNotes">;

type Entry = Reflection | ProjectNote;

export const langOf = (entry: Entry): Lang => (entry.id.startsWith("en/") ? "en" : "es");
export const slugOf = (entry: Entry): string => entry.id.replace(/^(es|en)\//, "");

/** Los borradores se ven en desarrollo y se excluyen al compilar para producción. */
const visible = ({ data }: { data: { draft: boolean } }) => (import.meta.env.PROD ? !data.draft : true);

const byDate = (a: Reflection, b: Reflection) => b.data.date.valueOf() - a.data.date.valueOf();

export const reflectionUrl = (r: Reflection): string => `${route(langOf(r), "reflections")}${slugOf(r)}/`;

/** Reflexiones en un idioma concreto. */
export async function reflectionsIn(lang: Lang): Promise<Reflection[]> {
  return (await getCollection("reflections", visible)).filter((r) => langOf(r) === lang).sort(byDate);
}

/**
 * Listado para un idioma. En inglés se añaden las que solo existen en español,
 * para que la sección no quede vacía mientras no haya traducciones.
 */
export async function reflectionListing(lang: Lang): Promise<Reflection[]> {
  const all = await getCollection("reflections", visible);
  const own = all.filter((r) => langOf(r) === lang);
  if (lang === "es") return own.sort(byDate);
  const translated = new Set(own.map(slugOf));
  return [...own, ...all.filter((r) => langOf(r) === "es" && !translated.has(slugOf(r)))].sort(byDate);
}

export async function reflectionTranslation(r: Reflection): Promise<Reflection | undefined> {
  const other: Lang = langOf(r) === "es" ? "en" : "es";
  return (await reflectionsIn(other)).find((x) => slugOf(x) === slugOf(r));
}

/** Texto largo de un proyecto: en el idioma pedido o, si no existe, en español. */
export async function projectNote(slug: string, lang: Lang): Promise<ProjectNote | undefined> {
  const notes = (await getCollection("projectNotes", visible)).filter((n) => slugOf(n) === slug);
  return notes.find((n) => langOf(n) === lang) ?? notes.find((n) => langOf(n) === "es");
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
