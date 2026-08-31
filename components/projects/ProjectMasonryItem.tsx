import Link from "next/link";
import Image from "next/image";
import type { Project } from "./projects-data";

type ProjectMasonryItemProps = {
  project: Project;
};

export default function ProjectMasonryItem({ project }: ProjectMasonryItemProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden w-full h-full bg-neutral-100 border border-neutral-200/60"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        quality={95}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${project.imagePosition ?? ""}`}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-white via-white/90 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="mb-3 block h-px w-0 bg-neutral-900 transition-all duration-500 group-hover:w-8" />
        <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#0F0F0F] sm:text-xs">
          {project.title}
        </h3>
        <p className="mt-1.5 text-[10px] font-medium tracking-[0.2em] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-900 sm:text-[11px] uppercase">
          {project.categoryLabel}
        </p>
      </div>
    </Link>
  );
}
