# sotreus.com

Single-page marketing site for **Sotreus**: Next.js 15 (App Router, static export), deployed to GitHub Pages at https://sotreus.com.

- Spec: [`docs/SOTREUS_NEXTJS_HANDOFF.md`](docs/SOTREUS_NEXTJS_HANDOFF.md)
- Pixel/copy reference: [`docs/landing.reference.html`](docs/landing.reference.html)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
npm start          # serve ./out
npm run lint
```

Node 20+. No analytics, cookies or third-party scripts. Fonts are self-hosted from `app/fonts` (SIL OFL).

## Configuration

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | Early-access form POST target. Set it as a repo **Actions variable** for CI, or in `.env.local` locally. Until it is set, the form shows its error state. |
| `NEXT_PUBLIC_BASE_PATH` | Only for previewing on `<user>.github.io/<repo>`. Leave unset for sotreus.com. |

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. One-time setup: Settings → Pages → Source **GitHub Actions**, custom domain `sotreus.com`, then DNS (see handoff §4).

## Placeholder assets

`public/og.png`, `app/apple-icon.png` and `public/logo/icon-512.png` are generated placeholders (`npm run images`). Replace them with the exports from the Sotreus design canvas (handoff §9).

## Open items

`[FORM ENDPOINT]`, `[PRIVACY POLICY]` / `[TERMS]` pages, `[PLAY STORE URL]` for the hero CTA, `[CONFIRM WITH OWNER]` hero badge → tagline, real Edge photography, `NODES [N]` in the Mesh OLED readout.
