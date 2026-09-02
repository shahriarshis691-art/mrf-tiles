"use client";

import { useMemo, useRef, type KeyboardEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategoryFilter,
} from "./projects-data";
import ProjectMasonryItem from "./ProjectMasonryItem";

function getActiveCategory(searchParams: URLSearchParams): ProjectCategoryFilter {
  const category = searchParams.get("category");
  return PROJECT_CATEGORIES.find((item) => item.id === category)?.id ?? "all";
}

export default function ProjectsGallery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeCategory = useMemo(
    () => getActiveCategory(searchParams),
    [searchParams],
  );
  const activeCategoryLabel =
    PROJECT_CATEGORIES.find((category) => category.id === activeCategory)
      ?.label ?? "Projects";

  const handleCategoryChange = (category: ProjectCategoryFilter) => {
    if (category === activeCategory) return;

    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

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
      handleCategoryChange(nextCategory.id);
      categoryRefs.current[nextIndex]?.focus();
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <nav
        aria-label="Filter projects by category"
        aria-controls="projects-gallery"
        className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-14 sm:gap-x-10 lg:gap-x-14"
      >
        {PROJECT_CATEGORIES.map((category, index) => {
          const active = activeCategory === category.id;
          return (
            <button
              ref={(element) => {
                categoryRefs.current[index] = element;
              }}
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.id)}
              onKeyDown={(event) => handleCategoryKeyDown(event, index)}
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

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Showing {filteredProjects.length} {activeCategory === "all" ? "projects" : `projects in ${activeCategoryLabel}`}.
      </p>

      <div id="projects-gallery" className="mt-12 grid grid-flow-col auto-cols-[78vw] grid-rows-1 gap-6 overflow-x-auto sm:mt-14 sm:auto-cols-[16rem] md:mt-16 md:gap-8 lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:overflow-visible">
        {filteredProjects.map((project) => (
          <ProjectMasonryItem key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
