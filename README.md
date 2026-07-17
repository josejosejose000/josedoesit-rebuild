# Jose Does It - Handyman Website Rebuild (Astro + Tailwind)

This is the scaffold for the new JoseDoesIt.com site, matching the original Squarespace style (clean, photo-heavy, professional, lots of white space, bold headings).

## Quick Start
1. `npm install`
2. `npm run dev` to preview locally.
3. Images are in `public/images/` (organized by gallery, SEO-renamed where possible).
4. Data in `src/data/` (JSON/MD from original site extraction: prices, FAQs, testimonials, gallery intros, image lists + alts).

## Key Files for Cursor/Claude
- `CURSOR-READY.md` - Ready-to-paste prompts and instructions for building/polishing pages.
- `src/data/image-manifest.json` - Full image lists + SEO alt texts (use these for <img alt="">).
- `src/data/galleries-content.json` - Intros for each service gallery.
- `src/data/price-guide.json`, `testimonials.json`, `home-content.json`, `faq.md` - Content.
- `src/components/GalleryGrid.astro` - Reusable gallery component (pulls from manifest).
- `src/layouts/Layout.astro` - Basic layout (expand with nav/footer matching original).
- Style guide: See extracted-assets/style/style-guide.md (or copy from extracted-assets).

## Current State
- Home, Services (with 5 sub-galleries), Price Guide, FAQ, Book pages scaffolded.
- Uses real extracted content and images.
- GalleryGrid for photo grids (masonry-like, lazy-loaded).
- SEO alts with Queens/Brooklyn/Long Island keywords.

## Next Steps (for Cursor)
Follow CURSOR-READY.md prompts one by one:
- Improve home to match original hero/features/testimonials/Acuity.
- Polish each gallery page with proper alts from manifest.
- Add real Acuity embed in book.astro (get from your Acuity account).
- Style match: clean white space, bold text, photo grids, simple nav with phone button.
- Deploy to Vercel/Netlify (free, easy Astro support).
- Update domain DNS, test on mobile.

## Image Notes
- 91+ images extracted and organized.
- Many renamed for SEO (e.g. furniture-assembly-xxx-queens.jpg).
- Alts in image-manifest.json - copy into pages for local search boost (Queens 11375, Brooklyn, Long Island).

## Data Sources
All from original josedoesit.com extraction (June 2026). Use as-is for fidelity, then enhance.

Run `npm run build` to generate static site for deploy.

## Deploy to Vercel

See **[DEPLOY.md](./DEPLOY.md)** for step-by-step: local build → GitHub → Vercel → DNS for josedoesit.com.
