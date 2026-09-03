"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
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

  const handleCategoryKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % PROJECT_CATEGORIES.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + PROJECT_CATEGORIES.length) % PROJECT_CATEGORIES.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = PROJECT_CATEGORIES.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const nextCategory = PROJECT_CATEGORIES[nextIndex];
      setActiveCategory(nextCategory.id);
    }
  };

  const activeCategoryLabel =
    PROJECT_CATEGORIES.find((category) => category.id === activeCategory)
      ?.label ?? "All";

  return (
    <>
      <nav
        aria-label="Filter projects by category"
        aria-controls="projects-gallery"
        className="flex overflow-x-auto no-scrollbar gap-2 justify-start md:justify-center py-4 px-4 sm:px-6 lg:px-8"
      >
        {PROJECT_CATEGORIES.map((category, index) => {
          const active = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              onKeyDown={(event) => handleCategoryKeyDown(event, index)}
              aria-pressed={active}
              className={
                active
                  ? "bg-black text-white px-5 py-2 text-xs md:text-sm uppercase tracking-wider font-semibold rounded-none whitespace-nowrap focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                  : "text-neutral-500 hover:text-black transition-colors px-5 py-2 text-xs md:text-sm uppercase tracking-wider rounded-none whitespace-nowrap focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
              }
            >
              {category.label}
            </button>
          );
        })}
      </nav>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Showing {filteredProjects.length}{" "}
        {activeCategory === "all" ? "projects" : `projects in ${activeCategoryLabel}`}.
      </p>

      <div
        id="projects-gallery"
        className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8 max-w-7xl mx-auto px-6 py-8"
      >
        {filteredProjects.map((project) => (
          <ProjectMasonryItem key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}