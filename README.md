# javiergc.es

Portfolio de Javier González Casares. Astro, Tailwind v4, sitio estático.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

Requiere Node 22 (ver `.nvmrc`).

## Estructura

- `src/styles/global.css`: tokens de color (claro y oscuro), tipografías y las marcas de esquina (`.frame`).
- `src/i18n/ui.ts`: textos de interfaz y mapa de rutas. El español vive en `/` y el inglés en `/en/`.
- `src/data/content.json`: proyectos, experiencia, formación, premios, comunidad y documentos, en los dos idiomas. Tipos en `src/data/content.ts`.
- `src/data/home.ts`: logros de la home y datos de contacto.
- `src/components/*Page.astro`: cada página se escribe una vez y las rutas de `src/pages` la montan por idioma.
- `src/components/Cover.astro`: portada. Muestra un color plano hasta que se le pasa una ilustración.
- `public/docs/`: CV y cartas en PDF.

## Despliegue en Cloudflare

El repo incluye `wrangler.jsonc` (Workers con assets estáticos) y `public/_headers`.

1. En Cloudflare: Workers & Pages, Create, Import a repository, elegir este repo.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
3. Añadir el dominio `javiergc.es` a Cloudflare y cambiar los nameservers en DonDominio por los que indique Cloudflare.
4. En el Worker: Settings, Domains & Routes, añadir `javiergc.es` y `www.javiergc.es` como dominios personalizados.

## Portadas

Formatos: 4:3 para proyectos y artículos (800x600), 2:3 para reflexiones (320x480).
Guardarlas en `src/assets/covers/` y pasarlas al componente `Cover` con la prop `image`.
