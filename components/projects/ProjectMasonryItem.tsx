import Link from "next/link";
import Image from "next/image";
import ImageWash, { imageLiftClass } from "../ImageWash";
import { ASPECT_CLASSES, type Project } from "./projects-data";

type ProjectMasonryItemProps = {
  project: Project;
};

export default function ProjectMasonryItem({ project }: ProjectMasonryItemProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden border border-zinc-200 bg-white ${ASPECT_CLASSES[project.aspect]}`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover ${imageLiftClass} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
      />

      <ImageWash />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="mb-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
        <h3 className="text-[11px] font-semibold tracking-[0.26em] text-zinc-950 sm:text-xs">
          {project.title}
        </h3>
        <p className="mt-1.5 text-[10px] font-medium tracking-[0.22em] text-gold transition-colors duration-300 group-hover:text-zinc-800 sm:text-[11px]">
          {project.categoryLabel}
        </p>
      </div>
    </Link>
  );
}
