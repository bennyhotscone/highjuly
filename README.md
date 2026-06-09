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

Edit placement in `src/lib/data.ts` (`siteImages`).

## Logos & merch photos

Logo PNGs live alongside backgrounds in `public/backgrounds/` (`logo-bong.png`, `logo-pill.png`, etc.).

```bash
node scripts/process-products.mjs # cap, tote, mug, poster, store hero
node scripts/process-logos.mjs    # slice logos + tee/hoodie apparel edits (run last)
```

## Sync to GitHub (work from another machine)

From the project folder:

```bash
git status
git add .
git commit -m "Describe your changes"
git push origin main
```

On your home PC in Cursor:

1. Clone or open: `git clone https://github.com/bennyhotscone/highjuly.git`
2. `npm install`
3. `npm run dev` → http://localhost:3000

Before each session: `git pull origin main`

**Commit `public/backgrounds/`** so photos and logos work everywhere. The Cursor `assets/` folder is local-only — back up source files separately.

## Compliance

18+ only. Contributions are support/tips — not charitable donations and not tax deductible. Merch is apparel and campaign materials only; no controlled substances sold or shipped.
