# A closer look — Javier González Casares

## Brief and audit

Redesign of `i12gocaj/portfolio`, based on commit `2b54ad2499f822c8abba21a380a6809859e173d8`. The existing site is buildless HTML/CSS/JS on GitHub Pages. Retain that deployment model and the English content.

The original terminal delays the introduction and particles compete with it. The navy/mint palette, monospace headings and repeated icon cards suggest a generic developer theme. Four-item pagination hides the range of 21 projects. A single timeline mixes 25 jobs, awards, education and community activities. Documents precede the work rather than supporting it. JavaScript intercepts anchor navigation repeatedly and the mobile menu does not update its announced state. Preserve the Formspree endpoint and verify its actual submission behaviour.

## Creative direction

“A closer look”: the practice of investigation becomes a visual gesture. A circular inspection window frames Javier's existing portrait; an explicit button reveals his existing childhood quote. This small, optional interaction is the memorable moment. Work and evidence remain easy to read without interacting.

Avoid the first obvious security treatment (terminal, green-on-black, scanning loops). Also reject a cream-and-serif editorial template. Use a cool, daylight palette and one expressive sans-serif family, drawing the blue from the existing suit portrait. Do not add generic decorative numbers, scrolling marquees, fake telemetry, custom cursors or invented performance claims.

### Tokens

| Token  | Value     | Role                          |
| ------ | --------- | ----------------------------- |
| Paper  | `#F8FAFC` | Main surface                  |
| Ink    | `#172842` | Primary text                  |
| Cobalt | `#244ED8` | Actions and selected states   |
| Mist   | `#E7EDF5` | Supporting surfaces           |
| Slate  | `#526078` | Secondary text                |
| Ice    | `#C9DDF0` | Portrait / inspection surface |

Hanken Grotesk, locally hosted variable font: expressive large headings, readable body copy, restrained semibold navigation. A system sans fallback keeps content usable if fonts fail. Body text has a maximum readable line length of approximately 68 characters.

### Structure

```
Name / identity                      Work  Background  Documents  Contact
Large personal introduction          Portrait / inspection interaction
Focused role and actions             Córdoba, Spain
Three evidence highlights

Selected work: AllOsint thesis → Meta disclosure → SecEmail → Atlas
Project archive: category filters + searchable expandable project rows

About / current focus                Work / Learning / Recognition / Community
                                     Expandable entries retain full descriptions

Documents: CV + four supporting letters in a compact download list
Contact details                      Accessible Formspree form
Footer / back to top
```

Left-aligned text, a consistent shared grid, deliberate shifts in scale and background between sections. Mobile preserves content order and has a compact disclosure navigation. Original section anchors are retained so existing links continue working.

## Interaction and quality floor

Native links and details elements, progressive enhancement, no dependency on JavaScript to read projects or history. Filters and search reflect in URL parameters. Inspection works with keyboard and touch, and reduced motion suppresses transition effects. Visible focus, proper form labels, persistent live feedback, escaped UI text, local images with dimensions, no framework or runtime dependencies. Automated form checks intercept network requests; one separate real test was explicitly authorised by the owner and accepted by Formspree.

## Personal identity refinement

The owner confirmed completion of the MSc and current attendance at the Google GSEC diploma. The headline and focus now explicitly include malware analysis. A review of the public GitHub repositories identified [AllOsint's public thesis edition](https://github.com/i12gocaj/allosint-tfm) as the substantive missing project. It leads the selection because it links recent academic work with investigation practice. Existing academic repositories are linked from the coursework entry rather than inflating the featured selection.

Each of the 22 projects has a hand-authored SVG symbol tied to its subject: a correlation lens for AllOsint, an interrupted waveform for the Instagram disclosure, a verified envelope for SecEmail, and distinct symbols for the archive. AllOsint's signal diagram reflects email, phone, breach intelligence and report generation. Small Caveat annotations, a cobalt signature stroke and a warm yellow study marker add a human accent. The tiny optional bug discovery rewards curiosity without obscuring content.

Motion follows interaction: waveform changes, a shifted envelope, a rotating correlation halo and a gentle disclosure movement on hover, keyboard focus or opening. No continuous decorative loops. The four featured entries alternate a lead investigation, two related security cases and a supporting AI assurance project. Archive order prioritises security tools and research, then products and academic work. A single CV download stays in Documents.

## Research

- [Brittany Chiang](https://brittanychiang.com/): clear professional positioning and readable work history; do not copy the palette or layout.
- [Bruno Simon](https://bruno-simon.com/): a playful idea can come directly from the author's practice; keep the interaction optional and lightweight here.
- [Josh W. Comeau](https://www.joshwcomeau.com/): interaction responds to the reader and rewards curiosity.
- [Figma portfolio examples](https://www.figma.com/resource-library/portfolio-website-examples/): hierarchy, project presentation and clear navigation.
- [Awesome portfolios on GitHub](https://github.com/benzara-tahar/awesome-portfolios): breadth of approaches, emphasis on legibility and findability.
- [Anthropic frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design): intentional identity, restraint and critique; installed locally.
- [Vercel web-design-guidelines skill](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines): accessibility, navigation, motion and forms; installed locally.
- [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/): keyboard access, contrast, reflow, focus and target size.

The direction is a design judgment informed by these references, not a claim that one visual style is the universal trend for 2026.
