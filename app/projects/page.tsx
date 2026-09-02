import Navbar from "@/components/Navbar";
import ProjectsListing from "@/components/projects/ProjectsListing";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore completed architectural spaces, premium tile installations, and design experiences by MRF Galaxy.",
  path: "/projects",
  image: "/images/projects/architectural-tile-experience.jpg",
  imageAlt: "Architectural tile experience in an MRF Galaxy showroom",
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main">
        <ProjectsListing />
      </main>
    </div>
  );
}
