import Image from "next/image";
import Link from "next/link";
import type { Project } from "./projects-data";

type RelatedProjectsProps = {
  projects: Project[];
};

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section aria-labelledby="related-projects-heading" className="mt-20 sm:mt-24">
      <header className="text-center">
        <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
          More To Explore
        </p>
        <h2
          id="related-projects-heading"
          className="mt-4 text-[1.35rem] font-semibold uppercase tracking-[0.2em] text-[#0F0F0F] sm:text-[1.5rem]"
        >
          Related Projects
        </h2>
        <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
      </header>

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200/60 bg-white"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${project.imagePosition ?? "object-center"}`}
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-white via-white/90 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="mb-3 block h-px w-0 bg-neutral-900 transition-all duration-500 group-hover:w-8" />
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#0F0F0F] sm:text-xs uppercase">
                {project.title}
              </h3>
              <p className="mt-1.5 text-[10px] font-medium tracking-[0.2em] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-900 sm:text-[11px] uppercase">
                {project.categoryLabel}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
