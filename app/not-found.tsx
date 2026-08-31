import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main
        id="main"
        className="flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:px-10 sm:pt-32 lg:px-14"
      >
        <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-500 uppercase">
          404
        </p>

        <h1 className="mt-6 font-sans text-[2rem] font-semibold uppercase tracking-[0.22em] text-neutral-900 sm:text-[2.75rem] lg:text-[3.2rem]">
          Page Not Found
        </h1>

        <span className="mt-6 block h-px w-12 bg-neutral-300" />

        <p className="mt-7 max-w-md text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
          The page you are looking for may have been moved or no longer exists.
          Return to explore our collections and projects.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-auto"
          >
            Back to Home
          </Link>
          <Link
            href="/collection"
            className="inline-flex min-h-[44px] items-center justify-center border border-neutral-200 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-700 transition-colors duration-300 hover:border-neutral-900 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-auto"
          >
            Browse Collection
          </Link>
        </div>
      </main>
    </div>
  );
}
