# Deploy Jose Does It to Vercel

Static Astro site — no server adapter needed. Vercel auto-detects Astro.

## 1. Verify build locally

```bash
cd ~/Downloads/josedoesit-rebuild
npm install
npm run build
npm run preview   # optional — preview at http://localhost:4321
```

If `npm run build` succeeds, you're ready to deploy.

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Jose Does It site rebuild — Astro + Tailwind"
```

Create a new repo on GitHub (e.g. `josedoesit-rebuild`), then:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/josedoesit-rebuild.git
git push -u origin main
```

## 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New Project** → import your `josedoesit-rebuild` repo.
3. Vercel should auto-detect:
   - **Framework:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Node.js Version:** 22.x (matches `package.json` engines)
4. Click **Deploy**.

First deploy gives you a URL like `josedoesit-rebuild.vercel.app`. Test every page before pointing your domain.

## 4. Connect josedoesit.com (DNS)

In Vercel: **Project → Settings → Domains → Add** `josedoesit.com` and `www.josedoesit.com`.

At your domain registrar (where you bought josedoesit.com), add:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | `76.76.21.21`            |
| CNAME | www  | `cname.vercel-dns.com`   |

*(Vercel may show slightly different values — use what they display in the Domains panel.)*

DNS can take up to 24–48 hours; often much faster. Vercel will issue HTTPS automatically.

## 5. After launch

- [x] Acuity embed integrated (owner ID from josedoesit.com)
- [ ] Update Instagram/TikTok links in `src/layouts/Layout.astro` if handles differ
- [ ] Test booking, phone links, and galleries on mobile
- [ ] Update iMessage receptionist with new site links

## Optional: deploy via Vercel CLI

```bash
npm i -g vercel
cd ~/Downloads/josedoesit-rebuild
vercel login
vercel        # first deploy (preview)
vercel --prod # production
```

## Troubleshooting

- **Build fails on Node version:** Set Node 22.x in Vercel → Settings → General → Node.js Version.
- **Images missing:** Ensure `public/images/` is committed (not in `.gitignore`).
- **404 on routes:** Astro static output handles file-based routes automatically; no extra config needed.
