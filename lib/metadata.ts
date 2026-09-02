import type { Metadata } from "next";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const url = new URL(path, siteUrl).toString();
  const socialImage = image ? new URL(image, siteUrl).toString() : undefined;
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url,
      type: "website",
      locale: "en_BD",
      siteName: SITE_NAME,
      images: socialImage
        ? [{ url: socialImage, alt: imageAlt ?? title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: socialImage ? [socialImage] : undefined,
    },
  };
}
