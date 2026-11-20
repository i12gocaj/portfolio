import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * El idioma sale de la carpeta (es/ o en/). Dos ficheros con el mismo nombre
 * en carpetas distintas son traducciones el uno del otro.
 */

/** Reflexiones: textos personales, con portada vertical tipo libro. */
const reflections = defineCollection({
  loader: glob({ pattern: "{es,en}/*.{md,mdx}", base: "./src/content/reflexiones" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().default(""),
      /** Color plano de la portada mientras no haya ilustración. */
      tone: z.string().default("#a79cc9"),
      draft: z.boolean().default(false),
    }),
});

/**
 * Texto largo de un proyecto destacado. El nombre del fichero es el `slug`
 * del proyecto en src/data/content.json.
 */
const projectNotes = defineCollection({
  loader: glob({ pattern: "{es,en}/*.{md,mdx}", base: "./src/content/proyectos" }),
  schema: z.object({
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { reflections, projectNotes };
