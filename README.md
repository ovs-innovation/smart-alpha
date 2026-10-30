# Smart Alpha

Premium investment advisory website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Recharts.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand logo

Place the official mark at `public/brand/smart-alpha-logo.png` (already copied from `logo/logo.png`). Navbar, footer, and favicon use `BrandLogo`.

## CMS-ready content

Editable typed modules live in `src/content/`:

- `site.ts` — company details, nav, footer, stats
- `services.ts` — services, why-us, process
- `markets.ts` — market dashboard mock data
- `blogs.ts` — insights / articles
- `faqs.ts` — FAQs
- `plans.ts` — investment plans
- `testimonials.ts` — testimonials and team

Swap these for Sanity/Contentful fetchers later without rewriting UI.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
