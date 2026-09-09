import Footer from "@/components/Footer";
import { OUTLETS } from "@/components/outlet-data";
import LenisProvider from "@/components/LenisProvider";
import Analytics from "@/components/Analytics";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

const playfair_Display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: 1280,
  // Clear Next.js's default scale so mobile browsers fit the desktop width.
  initialScale: undefined,
};

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
      <body className="min-h-full bg-background pb-28 font-sans text-foreground">
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
        <nav aria-label="Quick contact" className="fixed bottom-0 right-0 z-50 flex items-center gap-3 p-3">
          <a
            href="tel:+8801700000000"
            className="inline-flex min-h-11 items-center justify-center rounded-none bg-[#1c1a17] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            CALL NOW
          </a>
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-none bg-[#1e824c] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            WHATSAPP
          </a>
        </nav>
        <Analytics />
      </body>
    </html>
  );
}
