import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SanitarySection from "@/components/SanitarySection";
import CollectionSection from "@/components/collection/CollectionSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <div className="relative h-dvh bg-[#0b0d10]">
        <Hero />
        <Navbar />
      </div>
      <AboutSection />
      <CollectionSection />
      <SanitarySection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
