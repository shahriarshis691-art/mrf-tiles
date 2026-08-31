"use client";

import { useMemo, useState } from "react";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategoryFilter,
} from "./projects-data";
import ProjectMasonryItem from "./ProjectMasonryItem";

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryFilter>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <nav
        aria-label="Project categories"
        className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-14 sm:gap-x-10 lg:gap-x-14"
      >
        {PROJECT_CATEGORIES.map((category) => {
          const active = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`relative pb-2 text-[10px] font-medium tracking-[0.24em] transition-colors sm:text-[11px] ${
                active ? "text-zinc-950" : "text-zinc-800 hover:text-zinc-950"
              }`}
            >
              {category.label}
              {active ? (
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gold" />
              ) : null}
            </button>
          );
        })}
      </nav>

      <div className="mt-12 columns-1 gap-3 sm:mt-14 sm:columns-2 lg:mt-16 lg:columns-3 [&>*]:mb-3">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="break-inside-avoid">
            <ProjectMasonryItem project={project} />
          </div>
        ))}
      </div>
    </>
  );
}
