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
              aria-pressed={active}
              className={`relative min-h-[44px] min-w-[44px] pb-2 text-[10px] font-medium tracking-[0.24em] transition-colors sm:text-[11px] focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 ${
                active ? "text-neutral-900" : "text-neutral-700 hover:text-neutral-900"
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

      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectMasonryItem key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
