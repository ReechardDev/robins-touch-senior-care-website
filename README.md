# Senior Care Website (Next.js + Tailwind)

A clean, production-ready starter for a senior-care landing site, built with Next.js App Router, Tailwind, framer-motion, and lucide-react.

## Quick Start

```bash
pnpm install   # or npm i / yarn
pnpm dev       # or npm run dev / yarn dev
```

Open http://localhost:3000

## Pages

- `/` Home (Hero → Services → CTA → Pricing → Areas → Testimonials)
- `/services`
- `/pricing`
- `/about`
- `/contact` (with contact details and a booking form)
- `/request` (standalone booking page)

## API

- `GET /api/testimonials?page=1&pageSize=6` — paginated testimonials (static data in `lib/testimonials.js`)
- `POST /api/booking` — accepts booking form JSON and returns a confirmation. (For real email/CRM, integrate Zapier, Formspree, or a server email service.)

## Deployment

- Works on Vercel/Netlify/Render. No special config required.
