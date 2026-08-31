import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:px-10 sm:pt-32 lg:px-14">
        <p className="text-[11px] font-medium tracking-[0.28em] text-gold">
          404
        </p>

        <h1 className="mt-6 font-sans text-[2rem] font-semibold uppercase tracking-[0.22em] text-zinc-950 sm:text-[2.75rem] lg:text-[3.2rem]">
          Page Not Found
        </h1>

        <span className="mt-6 block h-px w-12 bg-gold/70" />

        <p className="mt-7 max-w-md text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
          The page you are looking for may have been moved or no longer exists.
          Return to explore our collections and projects.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/"
            className="inline-flex h-14 w-full items-center justify-center border border-gold bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-zinc-900 transition-colors duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white sm:w-auto"
          >
            Back to Home
          </Link>
          <Link
            href="/collection"
            className="inline-flex h-14 w-full items-center justify-center border border-zinc-200 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-zinc-800 transition-colors duration-300 hover:border-gold hover:text-zinc-950 sm:w-auto"
          >
            Browse Collection
          </Link>
        </div>
      </main>
    </div>
  );
}
