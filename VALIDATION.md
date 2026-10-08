# Verification · 8 October 2026

Verified locally in headless desktop Chrome using Playwright and axe-core 4.10.3. Automated form tests used intercepted requests. One separate real message was sent with the owner's explicit authorisation.

## Content preservation

Compared the redesigned DOM with an inventory extracted from the original site at commit `2b54ad2499f822c8abba21a380a6809859e173d8`:

- All original project subjects retained, with their copy rewritten for clarity. BrillanteSeguro's website and repository are combined in one entry. AllOsint's public thesis edition was added after reviewing GitHub; the page now has 21 distinct project entries.
- All 25 background entries retained and edited. Dates and achievements are retained, with the owner's confirmed MSc completion and diploma attendance.
- Public coursework repositories and the BuyTheTop source repository linked from their existing entries.
- 5 of 5 supporting PDF documents retained.
- All original external, document, email and telephone link destinations retained, including the thesis defence audio and the private-repository notice.
- Original source image and PDF files retained without modification.

The diploma is marked in progress at Google's GSEC, Málaga; the MSc is marked completed. These statuses come directly from the owner. Malware analysis is included in the headline, current focus and metadata. The CV is linked once, in Documents; the existing PDF itself has not been edited.

## Browser and interaction checks

- No horizontal document overflow at widths 320, 375, 390, 430, 600, 601, 640, 768, 1024, 1440 and 1920 px, including with background and project disclosures expanded.
- Desktop and mobile screenshots reviewed for type, spacing, composition and portrait interaction.
- Archive category filters, search, empty state, URL persistence and reload checked.
- Project and history deep links open the relevant disclosure; a direct link to a filtered-out project restores its visibility.
- The former BrillanteSeguro website fragment `#project-13` opens the unified entry, including when filtered out.
- Native project disclosure opens using Enter.
- Mobile navigation announces its state, supports Escape and focus return, and closes when navigating.
- Section navigation highlights the active section.
- Navigation and all project and history content remain available without JavaScript; native disclosure remains usable.
- Reduced-motion preference disables decorative animation and smooth scrolling.
- The optional tiny-bug disclosure supports keyboard activation and announces its state.
- Project SVG symbols are available in the local sprite. The curved logo underline and redundant portrait annotations have been removed.
- SecEmail's technical details can be opened with Enter and remain available without JavaScript.
- All local linked assets and five PDF downloads respond successfully over the preview server.
- No page JavaScript errors or failed local resource requests detected.

## Accessibility

axe-core scans used WCAG A/AA tags through WCAG 2.2. The final desktop and mobile scans with disclosures expanded returned **0 violations and 0 incomplete checks**. Keyboard focus, labels, live status feedback, native semantics, contrast and reflow were also reviewed.

Automated checks are evidence, not a certification of full WCAG compliance. Real screen-reader and additional browser/device testing were not performed.

## Form behaviour

Network requests to Formspree were intercepted locally:

- Simulated success shows persistent confirmation and resets the form.
- Simulated server failure preserves the entered message, re-enables the button and offers the direct email address.
- Error text reports that delivery could not be confirmed, rather than claiming a failed request proves that nothing was sent.
- Submission uses the existing JavaScript endpoint consistently in the HTML action and fetch request.
- In-flight submissions are disabled, live progress is announced, and requests have a 15-second timeout.
- A simulated HTTP 200 response with `ok: false` is treated as failure and preserves the entered message; only explicit acceptance resets the form.

The single authorised real submission used the subject **Prueba del portfolio** and the message **Prueba autorizada del formulario de contacto. No requiere respuesta**. Formspree returned HTTP **200** and `{"ok": true, "next": "/thanks?language=es"}`. The interface displayed its confirmation and reset. Receipt in the associated inbox remains for the owner to confirm; server acceptance does not itself prove inbox delivery. No further real submissions were made.

External project destinations were not exhaustively availability-tested; original destinations were preserved. Newly added repositories were verified as public through GitHub.

## Shipping

Static HTML/CSS/JS with locally hosted fonts, inline SVG illustrations and a local SVG symbol sprite. GitHub Pages publishing layout remains unchanged. No application dependencies or build pipeline were introduced. Changes are prepared on the redesign branch and draft pull request; the production Pages site is not changed until integration.
