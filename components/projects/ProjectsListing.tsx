import { Suspense } from "react";
import ProjectsGallery from "./ProjectsGallery";

function ProjectsGalleryFallback() {
  return <div className="mt-12 h-72 animate-pulse border border-neutral-200 bg-white sm:mt-14" />;
}

export default function ProjectsListing() {
  return (
    <section className="pb-20 pt-28 sm:pb-24 sm:pt-32">
      <header className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500 sm:text-[11px]">
          Architectural Portfolio · Official Khadim Provider
        </p>
        <h1 className="mt-5 text-[2rem] font-semibold text-neutral-900 sm:text-[2.4rem] lg:text-[2.75rem]">
          Remarkable Projects & Architectural Installations
        </h1>
        <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
        <p className="mx-auto mt-6 max-w-2xl text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
          Explore prestigious landmarks, luxury resorts, and high-performance
          commercial and residential spaces built with premium Khadim tiles,
          cladding, and architectural ceramics.
        </p>
      </header>

      <Suspense fallback={<ProjectsGalleryFallback />}>
        <ProjectsGallery />
      </Suspense>
    </section>
  );
}