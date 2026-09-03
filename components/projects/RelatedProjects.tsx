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

      <div className="mt-12 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8 max-w-7xl mx-auto px-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out ${project.imagePosition ?? ""}`}
              />
            </div>

            <div className="mt-3">
              <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium mb-1">
                {project.categoryLabel}
              </p>
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 group-hover:text-black transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-500 font-normal leading-relaxed">
                {project.location} · {project.workScope}
              </p>
              <span className="inline-block mt-2 text-[11px] font-medium tracking-wider uppercase text-neutral-700 bg-neutral-100 px-2.5 py-1">
                {project.khadimMaterial}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}