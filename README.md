# sotreus.com

**Sotreus — See the signals. Remember the encounters.**
*Situational awareness, privately yours.*

This repo is the single-page marketing site for Sotreus, live at **https://sotreus.com**.

Sotreus is a private instrument for the space around you: an Android app, with a pocket Edge companion, that shows what nearby electronics are broadcasting, remembers what you have encountered before, and adds airspace and orbital context. It is local-first, evidence-first and receive-only.

Built by **NetSepio LLC** · [X · @netsepio](https://x.com/netsepio)

---

## What the site covers

The page is one scroll, numbered the same way the design is:

| # | Section | Anchor | What it says |
|---|---|---|---|
| – | Hero | `#top` | “See the signals. Remember the encounters.” Listening-field illustration showing the three provenance types. |
| – | Timeline ticker | – | An example journey: BLE fingerprints, an aircraft, a Remote ID broadcast and a satellite pass on one timeline. |
| 01 | The visibility gap | – | Infrastructure can sense, log and correlate; the person moving through it has no comparable view. |
| 02 | How it works | `#how` | Walk into any space and get five answers: what is here, familiar, changed, seen before, and around or above you. |
| 03 | Encounter memory | – | Familiar / New / Persistent / Re-encountered, plus an explainable attention score (“not a threat score”). |
| 04 | Context fusion | `#context` | Look around, then look up: drones (sensed), aircraft (network) and satellite passes (predicted), never blurred together. |
| 05 | Calm by design | – | Awareness without alarmism: what other apps say compared with what Sotreus says. |
| 06 | Sotreus Edge · V2 | `#edge` | A pocket companion with two personalities, **Edge Mode** and **Mesh Mode** (interactive), hardware specs, and phone-only vs phone + Edge. |
| 07 | Privacy + trust | `#trust` | No account, local database first, opt-in context, you set retention. Receive-only, always. |
| 08 | Roadmap | `#roadmap` | V1 Phone → V1.1 Context → V2 Sotreus Edge → a personal context graph. |
| – | Early access | `#access` | Email sign-up for the Android app and the first Sotreus Edge field units. |

### Provenance language

Every context example on the site carries one of three labels. The shape carries the meaning and the colour reinforces it, so these shapes and colours are not used for anything else:

| Label | Glyph | Colour | Meaning |
|---|---|---|---|
| **SENSED** | solid disc | amber `#F2B33D` | Observed directly by the phone or Sotreus Edge |
| **NETWORK** | ring | blue `#6CB8F0` | Reported by an external provider, always shown with its data age |
| **PREDICTED** | dashed ring | lavender `#B9A6FF` | Computed on-device (e.g. satellite passes from public orbital elements) |

### Copy rules

When editing copy, keep the product's restraint (handoff §11):

1. Never claim intent or detection certainty: no “spy”, “tracking you”, “threat detected”, “area is clean”, “live coverage”.
2. Every context example shows its provenance label and its age.
3. Correlation is temporal only: “overlapped”, “during the same window”, never “connected”.
4. Signal strength means rough proximity, never direction.
5. Names: **Sotreus**, **Sotreus Edge**, **Edge Mode**, **Mesh Mode**. Company: **NetSepio LLC**. Social: **@netsepio**.

Don't invent stats, dates, prices or user counts. Unknown facts stay as `[PLACEHOLDER]`.

---

## Tech

- **Next.js 15** (App Router, TypeScript, React 19) with `output: 'export'`: the site is plain static HTML in `./out`.
- **Global CSS tokens** (`app/tokens.css`) plus **CSS Modules** per section. No Tailwind, no CSS-in-JS.
- **Server components by default.** The only client components are `EdgeModeSwitch`, `EarlyAccessForm`, `MobileNav`, and `RevealObserver` (a fallback for browsers without scroll-driven animations).
- **Fonts** (Instrument Serif, Geist, Geist Mono) are committed in `app/fonts` (SIL OFL) and self-hosted with `next/font/local`.
- **Privacy matches the product:** no analytics, no cookies, no third-party scripts, and no runtime requests to font CDNs.
- **Accessible motion:** everything animated is CSS, and `prefers-reduced-motion` stops every loop. All content is visible with JavaScript off.

```
app/          layout (metadata, OG, JSON-LD), page, tokens, globals, icons, robots, sitemap, fonts
  privacy/    /privacy/ — Privacy Policy
  terms/      /terms/ — Terms
components/   Logo, ProvenanceGlyph, Eyebrow, RevealObserver, LegalPage (shared legal layout)
  sections/   one component + CSS module per page section
public/       CNAME, .nojekyll, og.png, logo/
scripts/      generate-images.mjs (placeholder OG/icon rasters)
docs/         handoff spec + reference render
```

## Develop

Requires Node 24 (see `.nvmrc`; CI uses the same).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
npm start          # serve ./out locally
npm run lint
```

`@emnapi/core` and `@emnapi/runtime` are listed as direct dev dependencies on purpose. npm 11 otherwise drops them from `package-lock.json`, and then `npm ci` fails in CI with “Missing: @emnapi/… from lock file”. Don't remove them.

## Configuration

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | Where the early-access form sends sign-ups. GitHub Pages is static, so this must be an external, privacy-respecting form or list provider with double opt-in and no tracking pixels. Set it as a repo **Actions variable** (Settings → Secrets and variables → Actions → Variables) so CI bakes it into the build, or in `.env.local` for local testing (see `.env.example`). Until it's set, the site works but the form shows its error message. |
| `NEXT_PUBLIC_BASE_PATH` | Only for previewing at `<user>.github.io/<repo>`. Leave it unset for sotreus.com. |

The form's fine print promises “One email when access opens. No tracking pixels. Unsubscribe anytime.” Keep that promise true when choosing a provider.

## Deploy (GitHub Pages)

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): `npm ci` → `npm run build` → publish `./out` to Pages. `public/CNAME` keeps the custom domain, and `public/.nojekyll` makes sure `_next/` is served.

One-time setup:

1. **Settings → Pages → Source:** GitHub Actions.
2. **Settings → Pages → Custom domain:** `sotreus.com`, then tick **Enforce HTTPS** once the certificate has been issued.
3. **DNS** at the registrar (check against GitHub's Pages docs before going live):
   - Apex `A`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Apex `AAAA`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` `CNAME`: `netsepio.github.io`
4. Optional: verify the domain under the org's Settings → Pages to prevent takeover.

## Placeholder assets

`public/og.png`, `app/apple-icon.png` and `public/logo/icon-512.png` are generated placeholders (`npm run images`, which installs `sharp` temporarily). Replace them with the exports from the Sotreus design canvas (handoff §9).

## Open items

| Item | Owner |
|---|---|
| `[FORM ENDPOINT]` and provider choice | NetSepio |
| Legal review of `/privacy/` and `/terms/`; name the aircraft-data and early-access list providers in the privacy policy once chosen | NetSepio |
| `[PLAY STORE URL]`: replaces the hero CTA target when V1 ships | NetSepio |
| `[CONFIRM WITH OWNER]`: should the hero badge switch to the tagline? | NetSepio |
| Real Edge photography and app screenshots to replace the CSS mockups | NetSepio |
| `NODES [N]` in the Mesh Mode OLED readout | NetSepio |

## References

- Build spec: [`docs/SOTREUS_NEXTJS_HANDOFF.md`](docs/SOTREUS_NEXTJS_HANDOFF.md)
- Pixel and copy reference: [`docs/landing.reference.html`](docs/landing.reference.html)

---

Sotreus © 2026 NetSepio LLC. All rights reserved.
