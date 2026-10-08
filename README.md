# Javier González Casares · Portfolio

A complete portfolio redesign built around **A closer look**: curiosity, investigation and evidence. Cool daylight colours, locally hosted Hanken Grotesk, handwritten Caveat annotations, 22 original project symbols and optional portrait and tiny-bug discoveries.

![Desktop preview](preview-desktop.png)

## Content and navigation

- Four selected projects: AllOsint (MSc thesis), Instagram disclosure, SecEmail and Atlas; then an 18-project archive with category filters and search. Security projects appear first.
- All 21 original project descriptions, technologies and links are retained.
- All 25 background entries are organised into experience, education, recognition and community. The MSc is completed and the Google GSEC reverse engineering and malware intelligence diploma is in progress, as confirmed by Javier.
- Malware analysis is part of the headline and current focus. One CV download remains in Documents.
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

Edit content in `index.html`, tokens and layout in `assets/css/styles.css`, and progressive enhancements in `assets/js/main.js`. The project artwork, annotations and responsive refinements live in `assets/css/personality.css`; the optional bug discovery is in `assets/js/personality.js`. Custom project symbols are in `assets/img/project-marks.svg`. HTML remains the source of truth for project and background content. Project archive categories are declared with `data-category`; `category` and `q` URL parameters retain filters across reloads. Editorial priority is the DOM order, so it also works without JavaScript.

The form action is `https://formspree.io/f/myzelwak`; enhanced and native submissions use this action. On 8 October 2026, one explicitly authorised real test returned HTTP 200 with `ok: true`. Inbox receipt requires confirmation in the associated mailbox. The enhanced form only resets after an explicit acceptance response.

Hanken Grotesk and Caveat are self-hosted under the SIL Open Font License; see `assets/fonts/OFL.txt` and `assets/fonts/Caveat-OFL.txt`. Supporting documents and original images are unchanged.
