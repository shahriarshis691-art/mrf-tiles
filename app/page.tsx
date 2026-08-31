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
      <div className="relative bg-zinc-950">
        <Hero />
        <Navbar overHero />
      </div>
      <AboutSection />
      <CollectionSection />
      <SanitarySection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
