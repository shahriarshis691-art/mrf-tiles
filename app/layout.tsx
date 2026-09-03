import Footer from "@/components/Footer";
import { OUTLETS } from "@/components/outlet-data";
import LenisProvider from "@/components/LenisProvider";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair_Display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    type: "website",
    locale: "en_BD",
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/hero-display-centre.jpg",
        alt: "MRF Galaxy tiles display centre in Rangpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-display-centre.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_NAME,
  url: siteUrl,
  telephone: OUTLETS[0]?.phone,
  image: `${siteUrl}/images/hero-display-centre.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: OUTLETS[0]?.locationLine,
    addressLocality: "Rangpur",
    addressCountry: "BD",
  },
  department: OUTLETS.map((outlet) => ({
    "@type": "LocalBusiness",
    name: `${SITE_NAME} — ${outlet.name}`,
    telephone: outlet.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: outlet.locationLine,
      addressLocality: "Rangpur",
      addressCountry: "BD",
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair_Display.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-zinc-950 focus:px-4 focus:py-3 focus:text-[12px] focus:tracking-[0.12em] focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
