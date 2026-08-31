export const SITE_NAME = "MRF Galaxy Tiles & Sanitary";

export const SITE_DESCRIPTION =
  "Premium porcelain tiles and sanitary ware in Rangpur. Visit MRF Galaxy showrooms at Gomosto para and Burirhat for slabs, fixtures, and project consultation.";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}
