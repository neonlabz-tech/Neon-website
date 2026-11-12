# NeonLabz Website

Next.js (App Router + TypeScript + Tailwind CSS v4) recreation of the **Neon Labz (Pvt) Ltd.** (`theneonlabz.com`) software company website, inspired by cosmic obsidian-violet glassmorphism and optimized for **Vercel** deployment.

## Project Folder Structure

```text
public/
└── images/
    ├── blog/           # Engineering article cover visuals
    ├── brand/          # Official NeonLabz PNG wordmark and mark emblem
    ├── hero/           # Hero beam artwork
    └── portfolio/      # Case-study preview visuals
src/
├── app/                # Next.js App Router pages, API route, metadata & icon
│   ├── about/
│   ├── api/contact/
│   ├── blog/
│   ├── contact/
│   ├── portfolio/
│   ├── privacy-policy/
│   ├── services/
│   └── terms/
├── components/
│   ├── layout/         # Global Navbar and Footer
│   ├── sections/
│   │   ├── contact/    # Interactive contact inquiry form client
│   │   ├── home/       # Modular landing-page sections
│   │   └── shared/     # Reusable cross-page sections
│   └── ui/             # Atomic UI primitives (ActionPill, BrandLogo, Eyebrow)
├── constants/          # Route constants & navigation links
├── data/               # Modular domain data (company, services, portfolio, estimator, blog)
├── lib/                # Pure helpers & payload validation
└── types/              # Shared TypeScript domain interfaces
```

## Media & Image Handling
- All brand marks, hero graphics, portfolio cards, and blog covers use `next/image` (`Image`) backed by local assets in `public/images/` and `next.config.ts` image optimization (`AVIF`/`WebP` + hardened SVG CSP).

## Pages Included
- `/` — Flagship landing page (Light-beam hero with brand intro video modal, capability marquee, asymmetric bento grid, 8-service interactive showcase, interactive Project Scope & Timeline Estimator, engineering guarantees & stats, 4-step orbital process, portfolio cards with Next Image previews, radial Why-NeonLabz stack, 10 FAQs, CTA banner)
- `/about` — Story, Mission & Vision, capability scores, Outstanding IT Features
- `/services` — All 8 core IT & digital services with deliverables
- `/portfolio` & `/portfolio/[slug]` — 6 core capability case studies
- `/blog` & `/blog/[slug]` — Engineering & AI insights
- `/contact` — Inquiry form wired to `/api/contact` + query prefill + WhatsApp link
- `/privacy-policy` & `/terms` — Clean legal pages

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket (or run `vercel` from the project directory).
2. Import the project in Vercel — Next.js is detected automatically with zero extra build config (`npm run build`).
3. Optional: Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL=info@theneonlabz.com` under **Project Settings -> Environment Variables** to deliver `/api/contact` form submissions via Resend.
