# Verification · 8 October 2026

Verified locally in headless desktop Chrome using Playwright and axe-core 4.10.3. No real messages were sent through the contact form.

## Content preservation

Compared the redesigned DOM with an inventory extracted from the original site at commit `2b54ad2499f822c8abba21a380a6809859e173d8`:

- 21 of 21 project titles and full descriptions retained.
- 25 of 25 background descriptions retained.
- 5 of 5 supporting PDF documents retained.
- All original external, document, email and telephone link destinations retained, including the thesis defence audio and the private-repository notice.
- Original source image and PDF files retained without modification.

The stale “Upcoming” label was removed from the dated diploma entry; its dates and original description remain. No completion or attendance status was inferred.

## Browser and interaction checks

- No horizontal document overflow at widths 320, 375, 390, 430, 600, 601, 640, 768, 1024, 1440 and 1920 px, including with background and project disclosures expanded.
- Desktop and mobile screenshots reviewed for type, spacing, composition and portrait interaction.
- Archive category filters, search, empty state, URL persistence and reload checked.
- Project and history deep links open the relevant disclosure; a direct link to a filtered-out project restores its visibility.
- Native project disclosure opens using Enter.
- Mobile navigation announces its state, supports Escape and focus return, and closes when navigating.
- Section navigation highlights the active section.
- Navigation and all project and history content remain available without JavaScript; native disclosure remains usable.
- Reduced-motion preference disables decorative animation and smooth scrolling.
- All local linked assets and five PDF downloads respond successfully over the preview server.
- No page JavaScript errors or failed local resource requests detected.

## Accessibility

axe-core scans used WCAG A/AA tags through WCAG 2.2. The desktop scan with all disclosures expanded returned **0 violations and 0 incomplete checks**. The standard mobile scan returned **0 violations**. Keyboard focus, labels, live status feedback, native semantics, contrast and reflow were also reviewed.

Automated checks are evidence, not a certification of full WCAG compliance. Real screen-reader and additional browser/device testing were not performed.

## Form behaviour

Network requests to Formspree were intercepted locally:

- Simulated success shows persistent confirmation and resets the form.
- Simulated server failure preserves the entered message, re-enables the button and offers the direct email address.
- Submission uses the existing JavaScript endpoint consistently in the HTML action and fetch request.
- In-flight submissions are disabled, live progress is announced, and requests have a 15-second timeout.

Actual inbox delivery and the remote Formspree account configuration remain unverified. No external project destination was exhaustively availability-tested; original destinations were preserved.

## Shipping

Static HTML/CSS/JS with locally hosted fonts and inline SVG icons. GitHub Pages publishing layout remains unchanged. No application dependencies or build pipeline were introduced.
