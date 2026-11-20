import { getCollection, type CollectionEntry } from "astro:content";
import { type Lang, route } from "@/i18n/ui";

export type Post = CollectionEntry<"writing">;
export type PostType = Post["data"]["type"];

export const typeLabels: Record<PostType, Record<Lang, string>> = {
  reflexion: { es: "Reflexión", en: "Reflection" },
  articulo: { es: "Artículo", en: "Article" },
  proyecto: { es: "Proyecto", en: "Project" },
};

const defaultTones: Record<PostType, string> = {
  reflexion: "#a79cc9",
  articulo: "#c98f73",
  proyecto: "#8fa3b8",
};

export const langOf = (post: Post): Lang => (post.id.startsWith("en/") ? "en" : "es");
export const slugOf = (post: Post): string => post.id.replace(/^(es|en)\//, "");
export const toneOf = (post: Post): string => post.data.tone ?? defaultTones[post.data.type];
export const postUrl = (post: Post): string => `${route(langOf(post), "writing")}${slugOf(post)}/`;

/** Los borradores se ven en desarrollo y se excluyen al compilar para producción. */
async function all(): Promise<Post[]> {
  const posts = await getCollection("writing", ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Escritos en un idioma concreto. */
export async function postsIn(lang: Lang): Promise<Post[]> {
  return (await all()).filter((p) => langOf(p) === lang);
}

/**
 * Listado para un idioma. En inglés se añaden los textos que solo existen en
 * español, para que la sección no quede vacía mientras no haya traducciones.
 */
export async function listingFor(lang: Lang): Promise<Post[]> {
  const posts = await all();
  const own = posts.filter((p) => langOf(p) === lang);
  if (lang === "es") return own;
  const translated = new Set(own.map(slugOf));
  const rest = posts.filter((p) => langOf(p) === "es" && !translated.has(slugOf(p)));
  return [...own, ...rest].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Traducción de un escrito al otro idioma, si existe. */
export async function translationOf(post: Post): Promise<Post | undefined> {
  const other: Lang = langOf(post) === "es" ? "en" : "es";
  return (await postsIn(other)).find((p) => slugOf(p) === slugOf(post));
}

/** Escrito asociado a un proyecto, preferiblemente en el idioma pedido. */
export async function postForProject(projectId: string, lang: Lang): Promise<Post | undefined> {
  const posts = (await all()).filter((p) => p.data.project === projectId);
  return posts.find((p) => langOf(p) === lang) ?? posts[0];
}

export function readingMinutes(post: Post): number {
  const words = (post.body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
