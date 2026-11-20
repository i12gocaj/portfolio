import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Escritos: reflexiones, artículos técnicos y textos sobre proyectos.
 * El idioma sale de la carpeta (es/ o en/). Dos ficheros con el mismo nombre
 * en carpetas distintas son traducciones el uno del otro.
 */
const writing = defineCollection({
  loader: glob({ pattern: "{es,en}/*.{md,mdx}", base: "./src/content/writing" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      type: z.enum(["reflexion", "articulo", "proyecto"]),
      tags: z.array(z.string()).default([]),
      /** Identificador del proyecto relacionado, por ejemplo "P-02". */
      project: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().default(""),
      /** Color plano de la portada mientras no haya ilustración. */
      tone: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { writing };
