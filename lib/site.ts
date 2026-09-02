export const SITE_NAME = "MRF Galaxy Tiles & Sanitary";

export const SITE_DESCRIPTION =
  "Premium porcelain tiles and sanitary ware in Rangpur. Visit MRF Galaxy showrooms at Gomosto para and Burirhat for slabs, fixtures, and project consultation.";

function normalizeSiteUrl(value: string) {
  const url = value.startsWith("http") ? value : `https://${value}`;
  return new URL(url).origin;
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return normalizeSiteUrl(explicit);

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return normalizeSiteUrl(vercel);

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be configured for production metadata, sitemap, and robots URLs.",
  );
}
