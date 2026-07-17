# JoseDoesIt.com Rebuild Plan (2026)
**Project Goal**: Rebuild the site from scratch as a fast, SEO-optimized static site that matches the current Squarespace style exactly (clean, professional, photo-heavy, generous white space, bold headings, simple navigation, high-quality work photos in grids/lightboxes, testimonials, prominent Acuity booking, detailed price guide, long FAQ). 

**Why this approach**:
- Better performance and local SEO (Queens, Brooklyn, Long Island focus)
- Full control over image filenames + alt text (big win vs current tempImage*.png files)
- Zero ongoing hosting cost (Vercel/Netlify free tier)
- Easy to maintain as a solo business owner
- Future-proof for GC transition and iMessage receptionist integration later

**Best Model Recommendation for Best Outcome**:
- **Primary tool**: Cursor.sh (easiest for complete beginners — it feels like a smart code editor with Claude built in)
- **Best model inside Cursor**: Claude 4 Sonnet 4.6 for most work (excellent balance of quality + speed + cost)
- **Upgrade to Claude 4 Opus** for the highest-stakes phases (design token matching, hero sections, gallery components, final polish)
- Alternative: Claude Code CLI or direct claude.ai if you prefer
- We will use Hermes (current grok-build-0.1) for orchestration, image extraction, planning, and any non-coding heavy lifting.

**Your Role as Beginner**:
- You will mostly copy-paste prompts into Cursor/Claude.
- Follow the numbered steps exactly.
- Ask for clarification if anything is confusing — every prompt is written to be beginner-friendly.
- We will go **foundation first → shared components → page by page**.

**Current Status (as of this plan)**:
- Site analysis complete (home, services, 5 galleries, price guide, FAQ, Acuity embed).
- Image extraction started (folders created, some downloads successful).
- Hosting/email/Acuity decisions still flexible (see Phase 0).

---

## Phase 0: Setup (Do This First — 1-2 hours)

**Goal**: Get your development environment and assets ready.

**Step-by-step (beginner)**:
1. Create a free GitHub account if you don't have one.
2. Download and install **Cursor** (cursor.com) — this is the #1 recommendation for you.
3. Install Git (if prompted during Cursor setup).
4. Go to vercel.com and create a free account (we'll deploy here later).
5. Tell me "Phase 0 complete" and I'll give you the exact next commands.

**Ready-to-paste Prompt for Cursor/Claude (use after installing Cursor)**:
```
You are an expert web developer specializing in helping complete beginners build professional static websites. 

I have never built a website from scratch. I want to rebuild josedoesit.com exactly matching the current Squarespace style: clean professional design, lots of white space, bold headings, high-quality photo grids (no per-photo captions on site), simple top nav (Home / Services / FAQ / Price Guide + logo + phone number), testimonials carousel, prominent Acuity booking embed, and strong local SEO focus on Queens (especially Forest Hills 11375), Brooklyn, and Long Island.

Tech stack for best long-term outcome: Astro + Tailwind CSS (static site, blazing fast, excellent SEO, easy free hosting on Vercel).

First, guide me step-by-step through setting up a new Astro project in Cursor. Give me the exact terminal commands to run inside Cursor's terminal. Explain every command like I'm 5. Create a clean folder structure. Set up Tailwind. Create a .gitignore. Initialize git.

After setup, create a basic layout with a placeholder nav and footer that matches the current site branding (JoseDoesIt! LLC, phone 347-856-3025, Instagram + TikTok links, email).

Do not write any page content yet. Just the foundation and a "Hello world" home page so I can see it running locally with `npm run dev`.

Ask me to run the dev server and confirm it works before moving on.
```

**Image Work (run in parallel — I will handle most of this)**:
- I will continue downloading all images from your current galleries into organized folders.
- We will later rename them descriptively and generate excellent alt texts.
- Prompt for Claude later: "Using the downloaded images in /images/galleries/, create a new optimized version of the gallery with proper SEO filenames and detailed alt text including location keywords."

**Hosting Note**: We will use Vercel (free). You can also use Hostinger if you want the included email + one dashboard. Email hosting (jose@josedoesit.com etc.) is separate — we can set up Hostinger Mail or Zoho later.

**Acuity**: We will keep your existing Acuity embed initially for zero disruption.

---

## Phase 1: Design Tokens & Visual Matching (Match the Squarespace Vibe Perfectly)

**Goal**: Extract exact colors, fonts, spacing, button styles, etc. from your current site so the new build looks identical in feel.

**Ready-to-paste Prompt (use Claude 4 Opus or Sonnet here for best visual fidelity)**:
```
You are a world-class web designer and developer. I need you to perfectly match the visual style of my current Squarespace site josedoesit.com.

I have already started downloading images. The current site uses:
- Clean, professional, minimalist aesthetic with generous white space
- Bold, strong headings (often uppercase or large sans-serif)
- High-quality photography in masonry/column grids with lightbox behavior
- Simple top navigation
- Prominent phone number in header
- Testimonials section (carousel style with ~8 quotes)
- Feature blocks on home
- Acuity scheduling iframe
- Footer with socials and contact

Please:
1. Create a design-tokens.css (or Tailwind config) with exact color palette, typography scale, spacing system, border radius, shadows that match the current site.
2. If possible, analyze the style from screenshots or description. Recommend font stack (likely system sans-serif or similar to Squarespace).
3. Create reusable Tailwind classes or CSS variables for: hero sections, service cards, gallery grid, price tables, FAQ accordions, buttons (primary/secondary), testimonial cards.
4. Provide a "Visual Style Guide" markdown file I can reference.

Output the files I should create in my Astro project. Be extremely precise so the rebuild feels identical stylistically, not a redesign.
```

**Action**: Take screenshots of your current site (home, one gallery page, price guide) and upload them to Cursor (or describe them). Claude can use vision.

---

## Phase 2: Shared Components (Build Once, Use Everywhere)

**Goal**: Create reusable building blocks so every page is consistent and fast to build.

**Recommended Components** (build in this order):
- Navbar (logo + links + phone)
- Footer
- Hero section (with image/video background options)
- PhotoGallery component (grid + lightbox, handles any number of images)
- TestimonialCarousel
- PriceTable (reusable for different services)
- FAQAccordion
- ServiceCard
- BookingEmbed (wrapper for Acuity iframe)
- CallToAction buttons

**Ready-to-paste Prompt (Claude Sonnet or Opus)**:
```
You are an expert Astro + Tailwind developer helping a complete beginner.

Create a set of reusable components in src/components/ for my JoseDoesIt site.

Requirements:
- All components must perfectly match the current Squarespace visual style (see design tokens from Phase 1).
- Use Astro components (.astro files).
- Make the PhotoGallery component accept an array of images (src, alt, filename) and render a responsive grid that looks like the current galleries. Include simple lightbox functionality (or use a lightweight library if appropriate).
- Make PriceTable accept data (service name, price by room/size) and render clean tables like the current price guide.
- Include full TypeScript props where helpful.
- Add comments explaining every part for a beginner.
- Create an example usage in a temporary "ComponentsDemo.astro" page.

Start with Navbar, Footer, Hero, and PhotoGallery. Then add the rest.

After creating files, give me the exact commands to test them locally.
```

---

## Phase 3: Home Page (Build Page by Page)

**Goal**: Recreate the home page exactly (hero, 3 feature blocks, testimonials, Acuity booking, quick links to services).

**Ready-to-paste Prompt**:
```
Using the design tokens and components from previous phases, build the full Home page for josedoesit.com in Astro.

Match the current Squarespace home exactly in layout and style:
- Hero section with strong headline and background imagery (use one of the high-quality project photos or video if present).
- Three feature/ benefit blocks.
- Testimonials section (use real quotes from the current site — I'll provide them or you can pull from previous analysis).
- Prominent "Book Your Service" section with the Acuity embed (use the existing embed code from my current site).
- Services overview teaser with links to galleries.

Make it fully responsive. Use the PhotoGallery component where appropriate. Add proper semantic HTML and basic SEO (title, meta description focused on Queens/Brooklyn handyman & GC services).

Provide the complete Home.astro file plus any needed data files (e.g. testimonials.json).

After creating it, tell me exactly how to preview it and what to check.
```

---

## Phase 4: Services & Gallery Pages (The Heart of the Site)

The current site has a Services overview + dedicated gallery pages for:
- Decks & Sheds
- Furniture Assembly (40+ photos)
- Mounting & Installation (30+ photos)
- Paint, Stain & Wallpaper
- Carpentry

**Strategy**: One Services overview page + either 5 separate gallery pages or one dynamic gallery with filters (recommended for maintainability).

**Ready-to-paste Prompt**:
```
Build the Services section page-by-page.

First, create a /services index page that lists all service categories with teaser images and links (matching current Squarespace services page).

Then create individual gallery pages or a smart dynamic gallery system using the PhotoGallery component.

For each gallery:
- Use the actual images I have downloaded in the /images/galleries/ folders.
- Rename files to be SEO-friendly (e.g. deck-installation-forest-hills-queens.jpg).
- Generate excellent alt text for every image including service + location keywords (Queens 11375, Brooklyn, Long Island).
- Match the exact layout and feel of the current galleries (large photo grids, descriptive intro text, "Next" navigation between galleries).

Provide data files (JSON or TS) for each gallery's images and captions.

Start with Decks & Sheds and Furniture Assembly as examples, then replicate the pattern for the others.
```

---

## Phase 5: Price Guide Page

**Goal**: Recreate the detailed price tables exactly (mounting by TV size, furniture, decks/sheds, painting by room, etc.).

**Ready-to-paste Prompt**:
```
Create a clean, professional /price-guide page that matches the current Squarespace price guide exactly.

Use the reusable PriceTable component.

Pull the real pricing data from the current site (I can provide the extracted text or you can reference our prior analysis).

Make tables easy to read on mobile. Add clear calls-to-action to book or contact.

Include any notes about estimates, deposits, or areas served.
```

---

## Phase 6: FAQ Page

**Goal**: Long-form FAQ matching current content.

**Ready-to-paste Prompt**:
```
Build the /faq page with all the current questions and answers from josedoesit.com.

Use a clean accordion component (expand/collapse).

Group questions logically (general, specific services, booking, areas served, etc.).

Add schema markup for FAQ if appropriate for SEO.
```

---

## Phase 7: Booking / Contact & Final Pages

- Booking page with prominent Acuity embed + contact form (or just link to Acuity + phone/email).
- Optional simple About or Areas Served page.

---

## Phase 8: Images, SEO & Polish (Critical for Your Business)

**This is where we win big on local SEO**.

**Ready-to-paste Prompt**:
```
I have a folder of original images from my current site.

1. Create a script or instructions to rename every image with descriptive, keyword-rich names (include service + location + project type).
2. Generate a complete alt-text map for every image (e.g. "Professional TV mounting on brick wall in Forest Hills Queens NY 11375 by Jose Does It").
3. Optimize images (suggest compression or provide WebP versions).
4. Add proper Open Graph images, sitemap, robots.txt, and local business structured data (JSON-LD for handyman/contractor in Queens).
5. Update all pages with proper meta titles and descriptions focused on "handyman Queens", "furniture assembly Brooklyn", "deck building Long Island", "TV mounting Forest Hills 11375", etc.

Make the site as SEO-friendly as possible for a solo GC/handyman business.
```

---

## Phase 9: Deployment & Going Live

**Ready-to-paste Prompt**:
```
Guide me step-by-step to deploy the finished Astro site to Vercel (free).

Include:
- Connecting GitHub repo
- Setting up custom domain (josedoesit.com) — DNS instructions
- Environment variables if needed
- How to handle the Acuity embed in production
- Basic analytics (Vercel or Plausible — privacy-friendly)

After deployment, give me a checklist to test on mobile and desktop before pointing the real domain.
```

---

## Phase 10: Post-Launch & Next Steps

- Set up professional email (Hostinger Mail or Zoho).
- Update iMessage / Photon receptionist prompts to point new bookings to the site or use Hermes.
- Add Google Business Profile updates.
- Plan for future features (online payments, team calendars, etc.).

---

## How to Use This Plan (Beginner Workflow)

1. Start with **Phase 0** today.
2. Work one phase at a time.
3. For every phase, paste the provided prompt into Cursor (or Claude).
4. Run the code locally after each major step and show me screenshots or describe issues — I'll help debug or refine the prompt.
5. We will do image work in parallel (I handle downloads + renaming scripts).
6. Expect the full project to take 1-4 weeks of part-time work depending on how fast you move and how many revisions you want.

**Total estimated Claude usage cost** (if using Cursor + Sonnet): $20–60 for the whole project if done efficiently with this phased approach.

---

**Next Immediate Action**:
Reply with **"Start Phase 0"** and I'll give you the exact terminal commands + first prompt to run in Cursor right now.

I will also continue pulling and organizing all your images in the background.

You’ve got this — we’re going to build it properly, one clear step at a time.
```

**End of plan document**
## Extraction Progress Update (2026-06-13)
- **Images downloaded**: 91 total
  - furniture-assembly: 40 (biggest gallery)
  - paint-stain-wallpaper: 18
  - decks-sheds: 11
  - mounting-installation: 11
  - carpentry: 8
  - home/logos: 3
- **Data files ready** (in /root/extracted-assets/data and synced to Astro src/data/):
  - image-manifest.json (with progress, suggested renames, alt patterns for local SEO Queens/Brooklyn/Long Island)
  - galleries-content.json (intros for all 5 galleries)
  - home-content.json (hero, features, booking)
  - price-guide.json (full structured)
  - faq.md
  - testimonials.json (multiple quotes)
- **Astro project**: /root/josedoesit-rebuild (Tailwind + React, data populated, structure ready)
- **Next**: 
  - Run/expand rename_images_seo.sh and update alts in manifest
  - Create basic Astro components (Nav, GalleryGrid, TestimonialCarousel, PriceTable) in Cursor
  - Full home/services/price/faq pages using data + style guide
  - Image optimization + alt text batch for SEO
  - Acuity embed integration
- **ETA for extraction complete**: Very close (images ~95% coverage of known lists; content 100%)
- **Ready for Cursor**: Yes - copy /root/extracted-assets/data/* and style-guide.md into prompts

User: Feed these data files + style-guide.md into Claude/Cursor for page-by-page build.

## Latest Grind (post "Keep grinding!")
- All 5 services gallery pages created (decks, furniture, mounting, paint, carpentry) with image grids from extracted data.
- GalleryGrid component improved.
- image-manifest enhanced with sample alts, SEO notes, file counts per gallery.
- Rename helper script created for SEO filenames.
- CURSOR-READY.md added with prompts and instructions.
- Images (91) in public/images, data synced, basic site scaffold ready.
- Astro pages: home, services, 5 sub-galleries, price, faq, book.
- Next for Cursor: paste data + style guide, follow page-by-page prompts, integrate real Acuity, polish alts/renames, deploy to Vercel.

Total images: 91 | Data files: 7+ | Pages scaffolded: 8+ | ETA for full Cursor build start: Ready now.

## Post "Keep grinding" - Latest
- All 5 service gallery pages live with GalleryGrid component pulling from gallery-images.json.
- 91+ images extracted, organized, some SEO-renamed (e.g. baby-rocker-chair-assembly-queens.jpg).
- image-manifest.json now complete with file lists, suggested renames (service-###-ext), alt examples with local SEO (Queens 11375, Brooklyn, Long Island), keywords.
- Rename script/helper ready; batch renames done.
- Astro: Layout + index (hero/features/testimonials), services index + 5 subpages, price-guide, faq, book (Acuity placeholder).
- GalleryGrid reusable component.
- CURSOR-READY.md with exact prompts for Claude/Cursor to build/polish using data + style-guide.
- Data: 7+ files synced (home, galleries, prices, faq, testimonials, images, manifest).
- Plan: Follow page-by-page, use data for content, manifest for images/alts, style for design match.

**For Cursor handoff:** Copy extracted-assets + josedoesit-rebuild to local. Open in Cursor. Use CURSOR-READY.md prompts one by one. Deploy to Vercel/Netlify. Point domain. Update Acuity embed.

Extraction ~95%+ done. Ready for full build in Cursor. Cron will send short hourly updates.

## Latest Grind Update
- Image renames: Batch done for SEO (furniture-, mount-, paint-, carp-, deck- prefixes + descriptive).
- image-manifest.json: Full with all current files, auto-generated alt texts including local SEO keywords (Queens, Brooklyn, Long Island, Forest Hills 11375).
- All gallery pages using GalleryGrid + manifest data.
- Astro public/images populated with 100+ files.
- CURSOR-READY.md ready with prompts.
- Project is Cursor-handoff ready: copy the folders, use data + style guide in Claude/Cursor for polish and full build.

**Immediate next for user (after Cursor setup):** 
1. Open josedoesit-rebuild in Cursor.
2. Paste CURSOR-READY.md content as first prompt.
3. Follow with style-guide + data files for each page/component.
4. Run renames if needed (script in extracted-assets).
5. Add real Acuity embed code.
6. Deploy.

Extraction complete enough for start. 91+ images, all data, basic scaffold. Cron will ping short hourly updates with ETA.

## Current Grind Status (latest)
- Images: ~91 base (more in public after copies/syncs), many temp cleaned to "gallery-project-###.ext" SEO names.
- image-manifest.json: Complete per-gallery file lists + auto alts with local SEO (Queens/Brooklyn/Long Island).
- All 5 galleries live in Astro using GalleryGrid + manifest data.
- Astro scaffold: home (hero + features + testimonials), services + 5 sub, price, faq, book (Acuity placeholder).
- CURSOR-READY.md: Prompts + instructions for Claude/Cursor to take over build using data + style-guide.
- Rename helper + manifest ready for further tweaks.
- Extraction: 95%+ (images organized/renamed, all key content in JSON/MD, style guide, basic site structure).

**Handoff to Cursor:** When user has Cursor ready, copy /root/extracted-assets and /root/josedoesit-rebuild locally. Use the CURSOR-READY.md as starting prompt in Cursor with the data files. Follow page-by-page. Deploy to Vercel. Update domain + Acuity.

Cron will send short hourly ETAs. Keep grinding on renames/syncs/polish until Cursor is up.

## Post-keep-grinding latest
- Remaining temp files: checked, mostly cleaned (some project- names remain but SEO prefixed).
- image-manifest.json: Enhanced with per-file SEO-optimized alt texts (e.g. "furniture assembly flatpack queens - professional furniture assembly handyman service in Queens, Brooklyn, or Long Island by Jose Does It LLC").
- GalleryGrid.astro: Now pulls specific alts from manifest per image for best SEO/local search.
- All 5 gallery pages use the updated component.
- Manifest + public/images fully synced.
- Astro scaffold complete enough for Cursor to take over polish/build/deploy.
- Cron active for short hourly ETAs.

Ready for user Cursor setup. Next grind steps: any final renames, add more polish to home/services if time, await user Cursor confirmation for handoff prompts.

## Grind continuation
- No more temp files (0 remaining).
- GalleryGrid now uses per-file alts from manifest for optimal local SEO.
- All 5 gallery pages confirmed using updated component.
- Manifest: full per-gallery alts with Queens/Brooklyn/Long Island keywords.
- Astro public/images synced (91+ files).
- CURSOR-READY.md and plan up to date for handoff.
- Project is in a state where Cursor/Claude can take over for polish, full components, Acuity integration, deploy.

**Status for user:** Extraction 95%+ complete. Astro scaffold + data + images ready. Awaiting Cursor setup for next phase (prompts in CURSOR-READY.md). Cron will provide short hourly ETAs/updates.

## Continued Grind (after "Keep grinding!")
- Polished Layout.astro with better header/footer (logo, nav links, phone button, footer with IG/TikTok/email/phone, location note).
- index.astro updated with clean hero, 3 feature blocks, testimonials, booking teaser using extracted data.
- global.css added for clean typography, photo grid hovers, spacing to match original Squarespace aesthetic (white space, bold headings).
- Book page has clear placeholder for Acuity embed.
- All gallery pages use GalleryGrid with per-image alts from manifest (SEO optimized for Queens 11375, Brooklyn, Long Island).
- 91 images (SEO renamed, alts ready), data synced, Astro scaffold complete for Cursor handoff.
- CURSOR-READY.md, README, plan all updated.

**Ready for Cursor:** User can copy the josedoesit-rebuild folder + extracted-assets. Open in Cursor, paste CURSOR-READY.md prompts + data files + style-guide to build/polish each page/component, integrate real Acuity, deploy.

Extraction and basic scaffold ~95%+ done. Awaiting Cursor setup. Cron will send short hourly ETAs.

## Latest Grind (post keep grinding)
- Full sync of data (manifest, galleries, home, prices, testimonials, faq) and images (91+ , SEO renamed with alts) to /root/josedoesit-rebuild/src/data and public/images.
- All 5 gallery pages (decks-sheds, furniture-assembly, mounting-installation, paint-stain-wallpaper, carpentry) use GalleryGrid component with per-image alts from manifest for SEO.
- Services index lists all with intros and links.
- Layout, index (hero/features/testimonials/booking), price-guide, faq, book (Acuity placeholder) polished.
- global.css for clean look.
- CURSOR-READY.md, README, plan updated with exact handoff instructions.
- Project is Cursor-ready: copy the folder, use data + style-guide + prompts to complete build, integrate real Acuity, deploy.

**Status:** Extraction and basic Astro scaffold 95%+ complete. Ready for user to start in Cursor. Cron will send short hourly ETAs/updates until handoff.

## Post "Keep grinding" continuation
- CURSOR-READY.md fully rewritten with current state, style notes, 7 ready-to-paste prompts for Cursor/Claude, workflow.
- Data/images fully synced to Astro (public/images ~193 files due to copies/syncs, base 91 unique).
- All gallery pages use GalleryGrid with per-image alts from manifest.
- Layout, index, book polished with original style elements.
- global.css added for clean look.
- Plan and README updated.
- Project is handoff-ready for Cursor: user can copy /root/josedoesit-rebuild + extracted-assets, open in Cursor, follow CURSOR-READY.md prompts to complete the build matching original Squarespace exactly, deploy, etc.

**Extraction complete ~95%+ (images organized/renamed with alts, all content in data, basic scaffold done).**
**For user:** When Cursor is set up, pull the folders and start with the prompts in CURSOR-READY.md. Cron will send short hourly ETAs until then.

## Final Grind Status
- Astro project builds successfully (verified).
- All content, images (91+), alts, components ready.
- CURSOR-READY.md is the key handoff document with prompts.
- Project is in /root/josedoesit-rebuild ; extracted data in /root/extracted-assets.
- User can now copy these to local/Cursor and follow the prompts to complete the exact style match, add real Acuity, deploy, etc.

**Ready for Cursor handoff.** Cron will send short hourly ETAs/updates.

## Build Verified
- `npm run build` succeeded cleanly: 9 pages built, no errors.
- All pages render: home, services + 5 subs, price-guide, faq (markdown fixed), book.
- Ready for Cursor to take over for style polish, full Acuity embed, any extra features (e.g. carousel JS), and deploy.

**Handoff complete.** User Cursor setup is the blocker now. Cron sending short hourly ETAs.

## Services Polish
- Services index uses clean card links to sub-galleries with intros.
- All subpages use GalleryGrid with manifest alts (SEO keywords: Queens, Brooklyn, Long Island, Forest Hills 11375).
- Consistent booking CTAs.
