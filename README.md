# Javier González Casares · Portfolio

A complete portfolio redesign built around **A closer look**: curiosity, investigation and evidence. Cool daylight colours, locally hosted Hanken Grotesk, a quiet layout and a small optional portrait interaction.

![Desktop preview](preview-desktop.png)

## Content and navigation

- Three selected projects, followed by an 18-project archive with category filters and search.
- All 21 original project descriptions, technologies and links are retained.
- All 25 background entries are organised into experience, education, recognition and community, with full expandable descriptions.
- Original portrait, Atlas screenshot, five downloadable PDF documents, contact details and Formspree integration are retained.
- Native section anchors remain available: `#home`, `#projects`, `#experience`, `#about`, `#documents`, `#contact`.

The site is in English, matching its original content. The complete creative rationale and research sources are in [DESIGN.md](DESIGN.md); verification and its limits are in [VALIDATION.md](VALIDATION.md).

## Run locally

No build step or package installation is needed. From this directory:

```sh
python -m http.server 4173
```

Open `http://localhost:4173/`. The site also opens directly from `index.html`; serving over localhost allows testing clipboard and form enhancements in their normal browser context.

## Deployment

The existing GitHub Pages layout is preserved: `index.html` and relative `assets/` paths at the repository root. Integrating this branch into the Pages publishing branch uses the existing deployment settings. There is no framework, bundler, particle library, icon CDN or remote font dependency.

## Maintain

Edit content in `index.html`, tokens and layout in `assets/css/styles.css`, and progressive enhancements in `assets/js/main.js`. HTML remains the source of truth for project and background content. Project archive categories are declared with `data-category`; `category` and `q` URL parameters retain filters across reloads.

The form action is `https://formspree.io/f/myzelwak`, matching the endpoint previously used by the site's JavaScript. Both enhanced and native submissions now use this same action. Confirm the endpoint's ownership and delivery settings in your Formspree account before relying on production delivery.

Hanken Grotesk is self-hosted under the SIL Open Font License; see `assets/fonts/OFL.txt`. Supporting documents and original images are unchanged.
