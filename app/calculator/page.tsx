import Navbar from "@/components/Navbar";
import CalculatorClient from "@/components/calculator/CalculatorClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Tile Calculator",
  description:
    "Estimate tile quantities, boxes, and project cost for your space. Plan your porcelain slab and tile installation with MRF Galaxy's precision calculator.",
  path: "/calculator",
  image: "/images/hero-display-centre.jpg",
  imageAlt: "MRF Galaxy tiles display centre in Rangpur",
});

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navbar />
      <main id="main">
        <CalculatorClient />
      </main>
    </div>
  );
}
