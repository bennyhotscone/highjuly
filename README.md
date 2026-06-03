# High July

Campaign site for **High July** — a creator-led culture brand. Built with Next.js, TypeScript, and Tailwind CSS. Vercel-ready.

## Pages

- **/** — Home (hero, metrics, pillars, merch preview, FAQ, support)
- **/merch** — Product grid
- **/about** — Origin story
- **/media-pack** — Press materials and brand assets

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

Push to GitHub and import the repo in [Vercel](https://vercel.com). No extra configuration required.

## Stripe

Replace the placeholder `#` link on the homepage support section with your Stripe Payment Link URL when ready.

## Age gate

Visitors must confirm they are 18+ before entering. Verification is stored in `localStorage`. Use **Re-verify age** in the footer to test the gate again.

## Background images

Your photos live in `public/backgrounds/` (`bg-rooftop`, `bg-kitchen`, `bg-triptych-1` … `3`). To re-process uploads from the Cursor assets folder (e.g. split a new triptych):

```bash
node scripts/process-backgrounds.mjs
```

Edit placement in `src/lib/data.ts` (`campaignBackgrounds`).

## Compliance

18+ only. Contributions are support/tips — not charitable donations and not tax deductible. Merch is apparel and campaign materials only; no controlled substances sold or shipped.
