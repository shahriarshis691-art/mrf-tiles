import ProjectsGallery from "./ProjectsGallery";

export default function ProjectsListing() {
  return (
    <section className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14 lg:pb-28">
      <div className="mx-auto max-w-[1440px]">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-[2rem] font-semibold uppercase tracking-[0.34em] text-neutral-900 sm:text-[2.35rem] lg:text-[2.6rem]">
            PROJECTS
          </h1>
          <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
          <p className="mt-6 text-[13px] leading-relaxed tracking-[0.04em] text-neutral-600 sm:text-sm">
            Explore our completed architectural spaces,
            <br className="hidden sm:block" />
            premium tile installations and design experiences.
          </p>
        </header>

        <ProjectsGallery />
      </div>
    </section>
  );
}
