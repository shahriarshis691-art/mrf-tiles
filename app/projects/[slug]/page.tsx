import Navbar from "@/components/Navbar";
import RelatedProjects from "@/components/projects/RelatedProjects";
import {
  getProjectBySlug,
  getRelatedProjects,
  PROJECTS,
} from "@/components/projects/projects-data";
import { contactHref } from "@/lib/contact";
import ImageWash, { imageLiftClass } from "@/components/ImageWash";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);

  const specs = [
    { label: "LOCATION", value: project.location },
    { label: "CATEGORY", value: project.categoryLabel },
    { label: "YEAR", value: project.year },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main" className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/projects"
            className="inline-flex min-h-[44px] items-center gap-2 text-[10px] font-medium tracking-[0.24em] text-neutral-700 transition-colors hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:text-[11px]"
          >
            <span aria-hidden="true">←</span>
            BACK TO PROJECTS
          </Link>

           <header className="mt-10 max-w-3xl">
             <p className="text-[10px] font-medium tracking-[0.26em] text-neutral-500 uppercase sm:text-[11px]">
               {project.categoryLabel}
             </p>
             <h1 className="mt-4 text-[1.85rem] font-semibold uppercase tracking-[0.22em] text-neutral-900 sm:text-[2.4rem] lg:text-[2.75rem]">
               {project.title}
             </h1>
             <span className="mt-5 block h-px w-12 bg-neutral-300" />
             <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
               {project.description}
             </p>
           </header>

           <div className="relative mt-12 aspect-[16/10] overflow-hidden border border-neutral-200/60 bg-white sm:mt-14">
             <Image
               src={project.image}
               alt={project.title}
               fill
               priority
               quality={95}
               sizes="(max-width: 1440px) 100vw, 1440px"
               className={`object-cover ${imageLiftClass}`}
             />
           </div>

           <div className="mt-12 grid grid-cols-1 gap-10 border-y border-neutral-200 py-12 sm:mt-14 lg:grid-cols-[1fr_20rem] lg:gap-16">
             <div>
               <p className="text-[11px] font-medium tracking-[0.22em] text-neutral-500 uppercase">
                 The Project
               </p>
               <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
                 {project.longDescription}
               </p>

               <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
                 {specs.map((spec) => (
                   <div key={spec.label}>
                     <dt className="text-[9px] font-medium tracking-[0.24em] text-neutral-500 uppercase">
                       {spec.label}
                     </dt>
                     <dd className="mt-2 text-[13px] text-neutral-900 sm:text-sm">
                       {spec.value}
                     </dd>
                   </div>
                 ))}
               </dl>
             </div>

             <div>
               <p className="text-[11px] font-medium tracking-[0.22em] text-neutral-500 uppercase">
                 Materials Used
               </p>
               <ul className="mt-8 flex flex-col gap-3">
                 {project.materialsUsed.map((material) => (
                   <li
                     key={material}
                     className="border-l border-neutral-300 pl-4 text-[12px] tracking-wide text-neutral-700 sm:text-[13px]"
                   >
                     {material}
                   </li>
                 ))}
               </ul>
             </div>
           </div>

           {project.gallery.length > 0 ? (
             <div className="mt-12 sm:mt-14">
               <p className="text-[11px] font-medium tracking-[0.22em] text-neutral-500 uppercase">
                 Project Gallery
               </p>
               <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                 {project.gallery.map((image) => (
                   <figure
                     key={image.src}
                     className="relative aspect-[4/3] overflow-hidden border border-neutral-200/60 bg-white"
                   >
                     <Image
                       src={image.src}
                       alt={image.alt}
                       fill
                       quality={95}
                       sizes="(max-width: 768px) 100vw, 50vw"
                       className="object-cover"
                     />
                   </figure>
                 ))}
               </div>
             </div>
           ) : null}

           <div className="mt-16 border border-neutral-200 bg-white px-8 py-12 sm:px-12 sm:py-14">
             <p className="text-[11px] font-medium tracking-[0.22em] text-neutral-500 uppercase">
               Start Your Project
             </p>
             <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
               Inspired by {project.title}? Speak with our team about materials,
               specifications, and installation for your upcoming space.
             </p>
             <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
               <Link
                 href={contactHref(project.title)}
                 className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-8 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-auto"
               >
                 Get In Touch
               </Link>
               <Link
                 href="/collection"
                 className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-8 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-auto"
               >
                 Browse Collection
               </Link>
             </div>
           </div>

          <RelatedProjects projects={relatedProjects} />
        </div>
      </main>
    </div>
  );
}
