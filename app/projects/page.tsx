import Navbar from "@/components/Navbar";
import ProjectsListing from "@/components/projects/ProjectsListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore completed architectural spaces, premium tile installations, and design experiences by MRF Galaxy.",
};

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
