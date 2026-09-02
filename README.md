# MRF Galaxy

Production website for MRF Galaxy Tiles & Sanitary, built with the Next.js App Router.

## Tech stack

- Next.js 16, React 19, and TypeScript
- Tailwind CSS 4
- Framer Motion for interface motion
- Lenis for smooth scrolling
- Next/Image and local assets in `public/images`

## Local setup

1. Install Node.js 20.9 or later.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000`.

## Environment configuration

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin before a production build or deployment. It must include the protocol and must not include a trailing path.

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is also supported. Development falls back to `http://localhost:3000`; production does not, so canonical URLs, sitemap URLs, robots URLs, and schema cannot accidentally reference localhost.

## Scripts

```bash
npm run dev       # Run the local development server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript without emitting files
npm run build     # Create a production build
npm run start     # Serve the production build
```

For a local production build, supply the same canonical URL used for deployment:

```powershell
$env:NEXT_PUBLIC_SITE_URL = "https://your-production-domain.example"
npm run build
```

## Content and data structure

- `app/` contains App Router pages, route metadata, `robots.ts`, and `sitemap.ts`.
- `components/collection/collection-data.ts` is the source for the Collection catalog and its detail routes.
- `components/projects/projects-data.ts` is the source for projects and project detail routes.
- `components/sanitary/sanitary-data.ts` is the source for sanitary categories and standard sanitary products.
- `lib/sanitaryData.ts` adapts that sanitary source for category and product routes.
- `lib/brands.ts` and `lib/sanitaryBrands.ts` contain the tile-brand and sanitary-brand catalog data.
- `components/outlet-data.ts` is the verified shared source for outlets, phones, WhatsApp numbers, map links, and showroom imagery.
- `lib/contact.ts` centralizes contact and WhatsApp URL generation.

When adding a public catalog item, use the existing data source and a unique stable ID/slug. Dynamic pages and the sitemap are generated from these collections, so valid routes stay aligned with their source data.

## Images

All visual assets live in `public/images`. Keep the existing image subject, aspect ratio, and alt text aligned with the relevant data record. Use `next/image` for content imagery and provide an accurate `sizes` value for responsive layouts. Only the true LCP image should be preloaded; below-the-fold images should remain lazy-loaded.

## Quality assurance

Run the following before release:

```bash
npm run lint
npm run typecheck
npm run build
```

Also verify the homepage, catalog and detail journeys, brand pages, sanitary routes, outlet/contact actions, filters, and navigation at 320px, 375px, 430px, 768px, 1024px, desktop, and large desktop. Check keyboard navigation, reduced-motion behavior, image loading, and WhatsApp links.

## Deployment

1. Configure `NEXT_PUBLIC_SITE_URL` with the verified production domain.
2. Run lint, typecheck, and the production build.
3. Deploy the generated Next.js application to the selected host.
4. Verify `/robots.txt`, `/sitemap.xml`, canonical tags, Open Graph metadata, and representative public routes on the production domain.

Do not commit generated build output or local environment files.
