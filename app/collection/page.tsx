import Navbar from "@/components/Navbar";
import CollectionCatalog from "@/components/collection/CollectionCatalog";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Collection Catalog",
  description:
    "Browse premium porcelain collections by look, format, and material. Find the perfect surfaces for your project.",
};

function CatalogFallback() {
  return (
    <div className="mt-12 h-48 animate-pulse border border-zinc-200 bg-white" />
  );
}

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main
        id="main"
        className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="text-[2rem] font-semibold uppercase tracking-[0.34em] text-zinc-950 sm:text-[2.35rem] lg:text-[2.6rem]">
              COLLECTION
            </h1>
            <span className="mx-auto mt-5 block h-px w-12 bg-gold/70" />
            <p className="mt-6 text-[13px] leading-relaxed tracking-[0.04em] text-zinc-800 sm:text-sm">
              Discover premium porcelain surfaces curated by look,
              <br className="hidden sm:block" />
              format, and material for every architectural vision.
            </p>
          </header>

          <div className="mx-auto mt-12 max-w-[960px] sm:mt-14">
            <Suspense fallback={<CatalogFallback />}>
              <CollectionCatalog />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
