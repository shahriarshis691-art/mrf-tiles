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
        <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
          MORE TO EXPLORE
        </p>
        <h2
          id="related-projects-heading"
          className="mt-4 text-[1.35rem] font-light uppercase tracking-[0.22em] text-white sm:text-[1.5rem]"
        >
          Related Projects
        </h2>
        <span className="mx-auto mt-5 block h-px w-12 bg-gold/70" />
      </header>

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative block aspect-[4/5] overflow-hidden bg-[#0a0a0a]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            <div className="pointer-events-none absolute inset-0 bg-[#050505]/10 transition-colors duration-500 group-hover:bg-[#050505]/45" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#050505]/90 via-[#050505]/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="mb-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
              <h3 className="text-[11px] font-medium tracking-[0.26em] text-white/95 sm:text-xs">
                {project.title}
              </h3>
              <p className="mt-1.5 text-[10px] font-light tracking-[0.22em] text-gold/80 transition-colors duration-300 group-hover:text-gold sm:text-[11px]">
                {project.categoryLabel}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
