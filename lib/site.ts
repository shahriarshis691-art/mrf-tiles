export const SITE_NAME = "MRF Galaxy Tiles & Sanitary";

export const SITE_DESCRIPTION =
  "Premium porcelain tiles and sanitary ware in Rangpur. Visit MRF Galaxy showrooms at Gomosto para and Burirhat for slabs, fixtures, and project consultation.";

function normalizeSiteUrl(value: string) {
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(value) && !/^https?:\/\//i.test(value)) {
    throw new Error('Site URL must use HTTP(S).');
  }
  const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('Site URL must be an HTTP(S) origin without credentials.');
  }
  return url.origin;
}

function isPublicOrigin(value: string) {
  const url = new URL(value);
  return url.protocol === 'https:' && !['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    const origin = normalizeSiteUrl(explicit);
    // A downloaded local environment must never publish localhost metadata on Vercel.
    if (!process.env.VERCEL || isPublicOrigin(origin)) return origin;
  }

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) {
    const origin = normalizeSiteUrl(vercel);
    if (isPublicOrigin(origin)) return origin;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be configured for production metadata, sitemap, and robots URLs.",
  );
}
