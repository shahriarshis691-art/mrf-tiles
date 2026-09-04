"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorBoundaryProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("[error-boundary]", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-white">
      <main
        id="main"
        className="flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:px-10 sm:pt-32 lg:px-14"
      >
        <div className="flex items-center justify-center gap-3">
          <span aria-hidden="true" className="block h-px w-8 bg-[#8b5a12]/60" />
          <p className="text-[11px] font-medium tracking-[0.32em] text-neutral-500 uppercase">
            Unexpected Error
          </p>
          <span aria-hidden="true" className="block h-px w-8 bg-[#8b5a12]/60" />
        </div>

        <h1 className="mt-6 font-serif text-[2.5rem] font-semibold uppercase leading-tight tracking-[0.18em] text-neutral-900 sm:text-[3.5rem] lg:text-[4rem]">
          Something Cracked
        </h1>

        <span className="mx-auto mt-6 block h-px w-12 bg-neutral-300" />

        <p className="mx-auto mt-7 max-w-lg text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
          A rendering error occurred on this page. Our team has been notified.
          You can retry, return home, or browse the collection while we resolve
          the issue.
        </p>

        {error.digest ? (
          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
            Reference · {error.digest}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-neutral-900 bg-neutral-900 px-10 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#0A3826] hover:border-[#0A3826] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3826] focus-visible:ring-offset-2 sm:w-auto"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center border border-neutral-300 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-900 transition-colors duration-300 hover:border-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-auto"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
