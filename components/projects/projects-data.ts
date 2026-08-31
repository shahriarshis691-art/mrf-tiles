export type ProjectCategory =
  | "residential"
  | "commercial"
  | "showroom"
  | "hospitality";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  imagePosition?: string;
  description: string;
  longDescription: string;
  location: string;
  year: string;
  materialsUsed: string[];
  gallery: { src: string; alt: string }[];
};

export const PROJECT_CATEGORIES = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "residential", label: "RESIDENTIAL" },
  { id: "commercial", label: "COMMERCIAL" },
  { id: "showroom", label: "SHOWROOM" },
  { id: "hospitality", label: "HOSPITALITY" },
] as const;

export type ProjectCategoryFilter =
  (typeof PROJECT_CATEGORIES)[number]["id"];

export const PROJECTS: Project[] = [
  {
    slug: "modern-residence",
    title: "MODERN RESIDENCE",
    category: "residential",
    categoryLabel: "RESIDENTIAL",
    image: "/images/projects/modern-residence.jpg",
    imagePosition: "object-center",
    description:
      "A refined residential interior featuring large-format porcelain slabs, seamless floor transitions, and a muted material palette tailored for contemporary living.",
    longDescription:
      "This modern residence demonstrates how large-format porcelain can define spatial flow across open living zones. Floor-to-ceiling material continuity, paired with warm architectural lighting, creates an atmosphere of quiet luxury suited for everyday living.",
    location: "Gulshan, Dhaka",
    year: "2024",
    materialsUsed: [
      "Porcelain Slab",
      "Matte Floor Tile",
      "Wall Porcelain",
    ],
    gallery: [
      {
        src: "/images/projects/minimalist-living-space.jpg",
        alt: "Open living area with seamless porcelain flooring",
      },
      {
        src: "/images/projects/contemporary-kitchen.jpg",
        alt: "Kitchen zone with coordinated porcelain surfaces",
      },
      {
        src: "/images/collection/natural-luxury.jpg",
        alt: "Detail of large-format floor tile installation",
      },
    ],
  },
  {
    slug: "luxury-villa",
    title: "LUXURY VILLA",
    category: "residential",
    categoryLabel: "RESIDENTIAL",
    image: "/images/projects/luxury-villa.jpg",
    imagePosition: "object-center",
    description:
      "An expansive villa project combining stone-textured wall tiles, warm architectural lighting, and premium sanitary selections across open living zones.",
    longDescription:
      "The Luxury Villa project spans multiple living levels, each unified by stone-inspired porcelain and premium sanitary fixtures. Terraces, gardens, and interior volumes share a cohesive material language that balances indoor comfort with outdoor durability.",
    location: "Uttara, Dhaka",
    year: "2023",
    materialsUsed: [
      "Stone Porcelain",
      "Antislip Outdoor Tile",
      "Premium Sanitary",
    ],
    gallery: [
      {
        src: "/images/villa-dusk.jpg",
        alt: "Villa exterior at dusk with warm interior lighting",
      },
      {
        src: "/images/villa-sun.jpg",
        alt: "Villa facade with landscaped garden and terrace",
      },
      {
        src: "/images/projects/modern-residence.jpg",
        alt: "Interior living space with stone-textured surfaces",
      },
    ],
  },
  {
    slug: "mrf-experience-showroom",
    title: "MRF EXPERIENCE SHOWROOM",
    category: "showroom",
    categoryLabel: "SHOWROOM",
    image: "/images/projects/mrf-experience-showroom.jpg",
    imagePosition: "object-center",
    description:
      "A flagship showroom experience designed to present tile collections, surface finishes, and sanitary solutions in an editorial architectural setting.",
    longDescription:
      "The MRF Experience Showroom is conceived as a curated architectural journey. Display volumes, material samples, and full-scale room settings allow clients to experience collections in context before specifying for their own projects.",
    location: "Banani, Dhaka",
    year: "2025",
    materialsUsed: [
      "Display Slabs",
      "Feature Wall Tile",
      "Sanitary Showroom Fixtures",
    ],
    gallery: [
      {
        src: "/images/projects/architectural-tile-experience.jpg",
        alt: "Architectural tile display within the showroom",
      },
      {
        src: "/images/collection/urban-elegance.jpg",
        alt: "Large-format slab presentation area",
      },
      {
        src: "/images/projects/modern-sanitary-space.jpg",
        alt: "Sanitary solutions display zone",
      },
    ],
  },
  {
    slug: "contemporary-kitchen",
    title: "CONTEMPORARY KITCHEN",
    category: "residential",
    categoryLabel: "RESIDENTIAL",
    image: "/images/projects/contemporary-kitchen.jpg",
    imagePosition: "object-center",
    description:
      "A kitchen environment defined by clean cabinetry lines, durable porcelain surfaces, and subtle contrast between matte and polished tile finishes.",
    longDescription:
      "This contemporary kitchen pairs functional durability with refined aesthetics. Backsplash and floor tiles work in tandem with cabinetry to create a workspace that feels both practical and elevated — designed for daily use without compromising visual harmony.",
    location: "Dhanmondi, Dhaka",
    year: "2024",
    materialsUsed: [
      "Wall Porcelain",
      "Matte Floor Tile",
      "Eco Antibacteria Tile",
    ],
    gallery: [
      {
        src: "/images/collection/modern-dark.jpg",
        alt: "Dark-toned kitchen with porcelain backsplash",
      },
      {
        src: "/images/projects/modern-residence.jpg",
        alt: "Kitchen connected to open living area",
      },
    ],
  },
  {
    slug: "urban-commercial-space",
    title: "URBAN COMMERCIAL SPACE",
    category: "commercial",
    categoryLabel: "COMMERCIAL",
    image: "/images/projects/urban-commercial-space.jpg",
    imagePosition: "object-center",
    description:
      "A commercial interior concept using technical porcelain, antislip flooring, and cohesive wall treatments for high-traffic public environments.",
    longDescription:
      "Urban Commercial Space addresses the demands of high-footfall environments with technical porcelain engineered for durability. Cohesive floor and wall treatments create a unified brand experience while meeting the performance requirements of public interiors.",
    location: "Motijheel, Dhaka",
    year: "2023",
    materialsUsed: [
      "Technical Porcelain",
      "Antislip Flooring",
      "Metal Accent Wall Tile",
    ],
    gallery: [
      {
        src: "/images/projects/architectural-tile-experience.jpg",
        alt: "Commercial lobby with technical porcelain flooring",
      },
      {
        src: "/images/collection/urban-elegance.jpg",
        alt: "Large-volume commercial interior with slab flooring",
      },
    ],
  },
  {
    slug: "premium-hospitality-interior",
    title: "PREMIUM HOSPITALITY INTERIOR",
    category: "hospitality",
    categoryLabel: "HOSPITALITY",
    image: "/images/projects/premium-hospitality-interior.jpg",
    imagePosition: "object-center",
    description:
      "A hospitality project balancing luxury ambiance with durable surfaces, featuring warm tones, statement walls, and spa-inspired sanitary detailing.",
    longDescription:
      "Premium Hospitality Interior brings together warm material tones, statement pattern walls, and spa-grade sanitary detailing. Every surface is selected to withstand commercial use while maintaining the refined atmosphere expected in luxury hospitality environments.",
    location: "Gulshan, Dhaka",
    year: "2024",
    materialsUsed: [
      "Décor Pattern Tile",
      "Marble Porcelain",
      "Spa Sanitary Fixtures",
    ],
    gallery: [
      {
        src: "/images/projects/modern-sanitary-space.jpg",
        alt: "Spa-inspired bathroom with premium sanitary fixtures",
      },
      {
        src: "/images/projects/luxury-villa.jpg",
        alt: "Hospitality lounge with warm-toned flooring",
      },
      {
        src: "/images/collection/natural-luxury.jpg",
        alt: "Guest corridor with marble-look porcelain",
      },
    ],
  },
  {
    slug: "minimalist-living-space",
    title: "MINIMALIST LIVING SPACE",
    category: "residential",
    categoryLabel: "RESIDENTIAL",
    image: "/images/projects/minimalist-living-space.jpg",
    imagePosition: "object-center",
    description:
      "A minimalist living space showcasing neutral tile tones, soft natural light, and carefully composed flooring patterns for quiet luxury.",
    longDescription:
      "Minimalist Living Space proves that restraint can be luxurious. Neutral porcelain tones, generous natural light, and carefully composed floor layouts create an interior that feels calm, spacious, and enduring — free from visual clutter.",
    location: "Banani, Dhaka",
    year: "2025",
    materialsUsed: [
      "Wood Grain Porcelain",
      "Neutral Floor Tile",
      "Matte Wall Finish",
    ],
    gallery: [
      {
        src: "/images/projects/modern-residence.jpg",
        alt: "Minimalist living area with neutral floor tiles",
      },
      {
        src: "/images/collection/natural-luxury.jpg",
        alt: "Soft natural light across porcelain flooring",
      },
    ],
  },
  {
    slug: "architectural-tile-experience",
    title: "ARCHITECTURAL TILE EXPERIENCE",
    category: "commercial",
    categoryLabel: "COMMERCIAL",
    image: "/images/projects/architectural-tile-experience.jpg",
    imagePosition: "object-center",
    description:
      "An architectural display environment highlighting large slabs, vertical tile applications, and material transitions across commercial volumes.",
    longDescription:
      "Architectural Tile Experience explores the full potential of porcelain as a building material. Vertical slab applications, floor transitions, and feature wall compositions demonstrate how surfaces can define architectural character in commercial and institutional settings.",
    location: "Tejgaon, Dhaka",
    year: "2023",
    materialsUsed: [
      "Large Format Slab",
      "Vertical Wall Tile",
      "Structured Finish Porcelain",
    ],
    gallery: [
      {
        src: "/images/projects/mrf-experience-showroom.jpg",
        alt: "Showroom environment with vertical tile applications",
      },
      {
        src: "/images/projects/urban-commercial-space.jpg",
        alt: "Commercial volume with material transitions",
      },
      {
        src: "/images/collection/urban-elegance.jpg",
        alt: "Slab display with architectural lighting",
      },
    ],
  },
  {
    slug: "modern-sanitary-space",
    title: "MODERN SANITARY SPACE",
    category: "residential",
    categoryLabel: "RESIDENTIAL",
    image: "/images/projects/modern-sanitary-space.jpg",
    imagePosition: "object-center",
    description:
      "A modern bathroom and sanitary installation featuring premium fixtures, textured wall tiles, and a spa-like atmosphere with precise detailing.",
    longDescription:
      "Modern Sanitary Space reimagines the bathroom as a personal retreat. Textured wall tiles, premium fixtures, and precise grout detailing combine to create a spa-like atmosphere where hygiene, comfort, and design excellence converge.",
    location: "Gulshan, Dhaka",
    year: "2024",
    materialsUsed: [
      "Textured Wall Tile",
      "Eco Antibacteria Floor Tile",
      "Premium Sanitary Ware",
    ],
    gallery: [
      {
        src: "/images/projects/premium-hospitality-interior.jpg",
        alt: "Luxury bathroom with textured wall surfaces",
      },
      {
        src: "/images/collection/natural-luxury.jpg",
        alt: "Calm bathroom interior with stone-inspired tiles",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const sameCategory = PROJECTS.filter(
    (item) =>
      item.slug !== project.slug && item.category === project.category,
  );
  const others = PROJECTS.filter(
    (item) =>
      item.slug !== project.slug && item.category !== project.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
