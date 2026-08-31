import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FounderSection from "@/components/FounderSection";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SanitarySection from "@/components/SanitarySection";
import CollectionSection from "@/components/collection/CollectionSection";
import OutletsSection from "@/components/OutletsSection";
import OurServicesSection from "@/components/OurServicesSection";

export default function Home() {
  return (
    <>
      <Navbar overHero />
      <main id="main">
        <div className="relative bg-zinc-950">
          <Hero />
        </div>
        <CollectionSection />
        <OurServicesSection />
        <AboutSection />
        <SanitarySection />
        <OutletsSection />
        <ContactSection />
        <FounderSection />
      </main>
    </>
  );
}
