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
      className="group block"
    >
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
  );
}