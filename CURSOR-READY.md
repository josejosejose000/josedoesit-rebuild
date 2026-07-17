# CURSOR-READY: Jose Does It Rebuild Handoff

**Project location:** /root/josedoesit-rebuild (Astro + Tailwind scaffold)

**Extracted data location:** /root/extracted-assets (use for reference or copy data/)

**Current state:**
- 91+ images extracted, organized by gallery, many SEO-renamed (e.g. furniture-assembly-xxx-queens.jpg), alts in image-manifest.json with Queens/Brooklyn/Long Island keywords.
- All key content in src/data/: home-content.json, galleries-content.json, price-guide.json, testimonials.json, faq.md, image-manifest.json (with files + alts), gallery-images.json.
- Basic pages scaffolded: index.astro (hero, features, testimonials, booking), services.astro + 5 subpages (using GalleryGrid), price-guide.astro, faq.astro, book.astro (Acuity placeholder).
- Layout.astro with nav/footer matching original style.
- GalleryGrid.astro component for photo grids (uses manifest alts).
- global.css for clean typography/spacing.
- README.md and CURSOR-READY.md for guidance.
- Plan at /root/josedoesit-rebuild-plan.md for full workflow.

**Style to match (from style-guide.md):**
- Clean, professional, minimalist.
- Lots of white space.
- Bold/strong headings.
- High-quality photo grids (no captions, lightbox feel).
- Simple top nav: logo + Services/FAQ/Price Guide + phone button.
- 3 feature blocks on home (On Time & Local, Clear Pricing $80 first hr/$65 addl, Quality Work).
- Testimonials carousel (~8 quotes).
- Prominent Acuity booking embed.
- Footer with IG/TikTok, email, phone.

**Ready-to-paste prompts for Cursor/Claude (start here):**
1. "Read the full CURSOR-READY.md, README.md, style-guide.md (from extracted-assets), and all files in src/data/. Improve the existing index.astro, Layout.astro, and global.css to exactly match the original Squarespace style: clean white space, bold headings, photo-heavy grids, simple nav with phone, hero with video feel, 3 feature blocks, testimonials, booking CTA. Use the extracted home-content.json and testimonials.json. Add proper responsive Tailwind classes."

2. "For each services subpage (e.g. furniture-assembly.astro), use the intro from galleries-content.json and the GalleryGrid component with images from public/images/[folder]/ and alts from image-manifest.json for that gallery. Make the grid look like the original photo masonry/columns with no captions. Add booking CTA at bottom. Do one gallery at a time starting with furniture-assembly."

3. "Polish price-guide.astro to display the full tables from price-guide.json in clean HTML tables or cards matching the original detailed pricing (mounting by item/time, furniture by category, painting by room size). Keep the note about estimates and $80/$65 hourly."

4. "Update faq.astro to render the full FAQ from faq.md or structure it nicely with accordions if possible, matching original Q&A style."

5. "In book.astro, replace the placeholder with a real Acuity embed (user will provide the iframe code from their Acuity account). Keep the intro text and call to action."

6. "Add a simple contact section or link if needed. Ensure mobile responsiveness, fast loads (images lazy + optimized), and local SEO (alts with Queens 11375, Brooklyn, Long Island)."

7. "Once pages are solid, suggest improvements for testimonials carousel (use JS or Astro if needed), better hero, and final polish. Then run `npm run build` and deploy to Vercel (connect GitHub repo for easy deploys). Update domain DNS after."

**Workflow in Cursor:**
- Use the data files directly (import JSON/MD).
- Follow the page-by-page plan in josedoesit-rebuild-plan.md.
- After each major section, test with `npm run dev`.
- For images: they are in public/images/[gallery]/. Use the manifest for alts.
- Rename more files if needed using the rename script in extracted-assets (but most are done).

**Handoff complete when:**
- All pages match original style and content.
- Real Acuity embed works.
- Deployed and domain pointed.
- Then update iMessage receptionist with new site links.

Copy this folder to your local machine or use in Cursor directly on the VPS if possible. Start with prompt #1 above.