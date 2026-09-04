"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const IS_DEV = process.env.NODE_ENV !== "production";

type WindowWithDataLayer = Window & {
  dataLayer: unknown[];
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushToDataLayer(...args: unknown[]) {
  const w = window as WindowWithDataLayer;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

function trackPageView(url: string) {
  if (!GA_ID || typeof window.gtag !== "function") return;
  window.gtag("config", GA_ID, {
    page_path: url,
    send_page_view: true,
  });
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID) return;
    const url = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        onLoad={() => {
          if (IS_DEV) {
            console.info("[analytics] GA4 loaded", GA_ID);
          }
        }}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: false });
          `,
        }}
      />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}

export { pushToDataLayer };
