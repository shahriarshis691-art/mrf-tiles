# Production launch audit — 2026-09-09

**Verdict: not yet certified ready to launch.** The local code and HTTP checks pass after fixes, but production configuration, business contact details, and browser verification remain outstanding. No deployment was inspected or changed during this audit.

## Passed

- [x] `npm.cmd run build`: successful optimized build, 107 generated static pages, no compiler warnings or errors reported.
- [x] `npm.cmd run lint`: zero errors and warnings after fixes.
- [x] `npm.cmd run typecheck`: passed.
- [x] Import graph: 92 application source files; no static import cycles, unresolved compilation imports, or unreachable component files detected. All app route files were treated as framework entry points.
- [x] Production HTTP crawl: 100 public sitemap routes plus five admin entry routes checked. All resolved successfully; unavailable admin flows redirect to the setup/login screen.
- [x] Rendered internal links and fragment targets: no failures. Includes navigation, footer, outlet buttons, and rendered catalog/brand links.
- [x] Unknown URL returns HTTP 404.
- [x] All 97 rendered image URL variants returned images successfully. No missing literal local image references. All 87 public image files passed decoder metadata inspection.
- [x] Favicon and SVG icon return successfully.
- [x] All 100 public routes have title, description, OpenGraph title/description/image, canonical tags, and the requested `width=1280` viewport.
- [x] Sitemap covers all generated public page routes; excludes admin routes. `robots.txt` now disallows `/admin` and `/api/admin`.
- [x] External link protocol/phone-format checks pass; rendered new-tab links include `noopener noreferrer`. Telephone links opening the dialer do not require new-tab rel attributes.
- [x] Both Google Maps query URLs and nine linked product/reference URLs return HTTP 200. This confirms availability, not business location accuracy.
- [x] Production and full dependency scans: `npm.cmd audit --omit=dev --json` and `npm.cmd audit --json` report zero known vulnerabilities.
- [x] No tracked `.env`, private-key files, or common credential patterns found in the scanned source. Private values present in the local environment file were not found in browser JavaScript bundles. No application `console.log` calls found; the remaining error-boundary logging is development-only.
- [x] Local production responses include CSP and `nosniff`. Admin responses use `noindex, nofollow` and `private, no-store`, including when Supabase is unavailable.
- [x] URL safeguard and scoped Supabase configuration assertions pass: `node scripts/check-launch-config.mjs`.

## Fixed during this audit

- Replaced admin internal anchors and full-page navigation calls with Next.js Link/router navigation; replaced the enrollment QR image with an unoptimized Next.js Image.
- Converted the one-off catalog script from CommonJS to ESM to remove its lint error.
- Added an accessible main target to the admin authentication form.
- Added root `pb-28` and document scroll-bottom clearance for the fixed contact buttons. The fixed desktop viewport remains unchanged.
- Allowed the configured Supabase origin in CSP and its public website-assets bucket in Next.js remote image configuration. No wildcard Supabase account access was added.
- Added a readable missing-configuration error for browser authentication and moved client construction inside the form's error handling.
- Made the auth confirmation route redirect safely when Supabase is unavailable.
- Removed analytics debug output.
- Prevented a local `NEXT_PUBLIC_SITE_URL` from being published on Vercel: use a valid explicit HTTPS origin or the Vercel production origin; fail if neither is usable. Added scheme and embedded-credential validation.

## Failed or not yet verified — launch gates

- [ ] **Public canonical origin:** the current local environment defines `NEXT_PUBLIC_SITE_URL=http://localhost:3000`. Thus this local production build's canonical, OpenGraph, robots, and sitemap origins are not publishable. Supply the intended public HTTPS domain and confirm its production environment value. The audit script deliberately exits nonzero for this condition.
- [ ] **Contact ownership:** floating buttons use the previously requested `+8801700000000`; flagship outlet data uses `+8801870402966`. Both are syntactically valid, but the correct customer destination needs owner confirmation. No calls or messages were sent.
- [ ] **Business details:** outlet opening hours are not recorded and say to call to confirm. The flagship homepage subtitle says Dhap/Jail Road while the address and Maps data say Gomosto para. An authoritative address/hours confirmation is required before claiming those facts verified.
- [ ] **Authenticated admin workflows:** Supabase URL, publishable key, and server secret are absent locally. The public static catalog works and missing configuration is handled, but sign-in, recovery emails, MFA, uploads, database permissions, catalog mutations, and inventory cannot be certified without the configured environment. Server actions and migration source include admin/MFA checks and row-level security; their deployed state was not inspected.
- [ ] **Visual/mobile interactions:** the browser tool returned “No browser is available.” Layout, focus behavior, actual overflow, mobile scaling, dropdowns, carousels, forms, and floating-bar overlap have not been measured in a browser. Padding and viewport source checks are not substitutes for desktop/mobile screenshots and interaction tests. No Core Web Vitals or Lighthouse measurement was performed.
- [ ] **Production environment:** live domain, deployment environment variables, production database/migrations, and deployment status were not accessible. Local checks do not certify those settings.

## Reproduce

Run `npm.cmd run build`, `npm.cmd run lint`, `npm.cmd run typecheck`, and `node scripts/check-launch-config.mjs`.

Start the production build with `npm.cmd run start -- -p 3100`, then run `node scripts/audit-launch.mjs`. The crawler writes `docs/launch-audit-results.json`. Set `AUDIT_BASE_URL` to change the server under test. Its exit status covers code/HTTP failures and non-public metadata origins; it does not certify visual behavior, business identity, or authenticated workflows. Re-running replaces the JSON, including the separately collected external HTTP check results.

Fixes were verified locally. Production deployment and the outstanding launch gates remain unverified.
