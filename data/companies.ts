export type CompanyAccent = {
  border: string;
  surface: string;
  text: string;
  ring: string;
};

export type Company = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: readonly string[];
  href: string;
  badge: string;
  accent: CompanyAccent;
};

export const COMPANIES: Company[] = [
  {
    slug: "shis-fashion",
    name: "Shis Fashion",
    category: "Apparel & Lifestyle",
    tagline: "Contemporary & Premium Men's Apparel",
    description:
      "Specializing in premium streetwear, oversized fits, acid-washed textures, and contemporary fashion aesthetics.",
    highlights: ["Premium Cotton", "Urban Streetwear", "Sustainable Practices"],
    href: "/companies/shis-fashion",
    badge: "01",
    accent: {
      border: "from-stone-900/30 via-stone-700/20 to-stone-500/30",
      surface: "from-stone-50 to-stone-100/60",
      text: "text-stone-900",
      ring: "ring-stone-900/20",
    },
  },
  {
    slug: "xeroxii",
    name: "XeroXii",
    category: "Horology & Timepieces",
    tagline: "Precision Craftsmanship & Modern Luxury",
    description:
      "Curating distinctive, precision-engineered wristwatches blending classic luxury with cutting-edge minimalist design.",
    highlights: [
      "Precision Quartz/Automatic",
      "Sapphire Crystal",
      "Minimalist Aesthetics",
    ],
    href: "/companies/xeroxii",
    badge: "02",
    accent: {
      border: "from-amber-900/30 via-amber-700/20 to-amber-500/30",
      surface: "from-amber-50 to-amber-100/60",
      text: "text-amber-900",
      ring: "ring-amber-900/20",
    },
  },
  {
    slug: "ceravo-tiles",
    name: "Ceravo Tiles & Ceramic",
    category: "Building Materials & Ceramics",
    tagline: "Architectural Elegance & Surface Innovation",
    description:
      "Providing premium floor, wall, and architectural ceramics designed for refined residential and commercial interior spaces.",
    highlights: ["Porcelain & Ceramic", "Architectural Finishes", "High Durability"],
    href: "/companies/ceravo-tiles",
    badge: "03",
    accent: {
      border: "from-emerald-900/30 via-emerald-700/20 to-emerald-500/30",
      surface: "from-emerald-50 to-emerald-100/60",
      text: "text-emerald-900",
      ring: "ring-emerald-900/20",
    },
  },
  {
    slug: "cortex-softsolutions",
    name: "Cortex SoftSolutions",
    category: "Technology & Enterprise Software",
    tagline: "Scalable Software & Digital Transformation",
    description:
      "Delivering end-to-end cloud solutions, AI workflows, enterprise software architectures, and modern digital platforms.",
    highlights: [
      "Cloud Architecture",
      "AI & Automation",
      "Custom Enterprise Platforms",
    ],
    href: "/companies/cortex-softsolutions",
    badge: "04",
    accent: {
      border: "from-indigo-900/30 via-indigo-700/20 to-indigo-500/30",
      surface: "from-indigo-50 to-indigo-100/60",
      text: "text-indigo-900",
      ring: "ring-indigo-900/20",
    },
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return COMPANIES.find((company) => company.slug === slug);
}

export function getAllCompanySlugs(): string[] {
  return COMPANIES.map((company) => company.slug);
}
