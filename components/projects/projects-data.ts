export type ProjectCategory =
  | "educational-institute"
  | "government-office"
  | "historical-landmark"
  | "hospital-healthcare"
  | "hotel-resort"
  | "industrial-commercial"
  | "residential";

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
  workScope: string;
  year: string;
  khadimMaterial: string;
  materialsUsed: string[];
  gallery: { src: string; alt: string }[];
};

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "educational-institute", label: "Educational Institute" },
  { id: "government-office", label: "Government Office" },
  { id: "historical-landmark", label: "Historical & National Landmark" },
  { id: "hospital-healthcare", label: "Hospital & Healthcare" },
  { id: "hotel-resort", label: "Hotel & Resort" },
  { id: "industrial-commercial", label: "Industrial & Commercial" },
  { id: "residential", label: "Residential" },
] as const;

export type ProjectCategoryFilter =
  (typeof PROJECT_CATEGORIES)[number]["id"];

export const PROJECTS: Project[] = [
  {
    slug: "sarah-resort",
    title: "Sarah Resort",
    category: "hotel-resort",
    categoryLabel: "Hotel & Resort",
    image: "/images/projects/luxury-villa.jpg",
    imagePosition: "object-center",
    description:
      "A premium resort destination defined by warm architectural ceramics, expansive lobby flooring, and a serene material palette inspired by Khadim's hospitality-grade surfaces.",
    longDescription:
      "Sarah Resort integrates Khadim's hospitality-grade ceramics across lobbies, suites, and exterior walkways. Warm-toned vitrified paving, anti-slip pool deck tiles, and facade cladding unify the property into a refined architectural experience that welcomes guests at arrival and continues through every corridor.",
    location: "Rajabari, Rajendrapur, Gazipur",
    workScope: "Exterior Cladding & Facing Bricks",
    year: "2024",
    khadimMaterial: "Khadim Facing Bricks / Vitrified Paving",
    materialsUsed: [
      "Khadim Facing Bricks",
      "Vitrified Paving",
      "Anti-slip Pool Deck Tile",
    ],
    gallery: [
      {
        src: "/images/projects/luxury-villa.jpg",
        alt: "Resort exterior with facing brick cladding",
      },
      {
        src: "/images/villa-dusk.jpg",
        alt: "Resort facade at dusk",
      },
      {
        src: "/images/projects/premium-hospitality-interior.jpg",
        alt: "Resort lobby with vitrified paving",
      },
    ],
  },
  {
    slug: "aga-khan-academy-dhaka",
    title: "Aga Khan Academy Dhaka",
    category: "educational-institute",
    categoryLabel: "Educational Institute",
    image: "/images/projects/architectural-tile-experience.jpg",
    imagePosition: "object-center",
    description:
      "A landmark educational campus integrating durable Khadim vitrified flooring, accent wall cladding, and acoustically tuned interior surfaces across classrooms and communal halls.",
    longDescription:
      "Aga Khan Academy Dhaka sets a new standard for educational architecture in Bangladesh. Khadim technical vitrified tiles and wall cladding provide the durability required for high-traffic learning environments while supporting the Academy's commitment to enduring design quality.",
    location: "Kuratoli, Dhaka",
    workScope: "Interior Flooring & Wall Cladding",
    year: "2024",
    khadimMaterial: "Khadim Vitrified Tiles / Wall Cladding",
    materialsUsed: [
      "Khadim Vitrified Tiles",
      "Wall Cladding",
      "Anti-slip Corridor Tile",
    ],
    gallery: [
      {
        src: "/images/projects/architectural-tile-experience.jpg",
        alt: "Academy interior with vitrified flooring",
      },
      {
        src: "/images/projects/urban-commercial-space.jpg",
        alt: "Communal hall with Khadim wall cladding",
      },
    ],
  },
  {
    slug: "mayor-mohammad-hanif-jame-mosque",
    title: "Mayor Mohammad Hanif Jame Mosque",
    category: "historical-landmark",
    categoryLabel: "Historical & National Landmark",
    image: "/images/projects/mrf-experience-showroom.jpg",
    imagePosition: "object-center",
    description:
      "A revered religious landmark finished with Khadim facing bricks, decorative pattern tiles, and precision-cut architectural ceramics honoring traditional Bangladeshi craftsmanship.",
    longDescription:
      "Mayor Mohammad Hanif Jame Mosque combines spiritual heritage with Khadim's premium architectural ceramics. Facing bricks define the exterior envelope while decorative pattern tiles and precision-cut elements articulate the interior prayer halls with quiet reverence.",
    location: "Azimpur, Dhaka",
    workScope: "Exterior Facing & Decorative Interior",
    year: "2023",
    khadimMaterial: "Khadim Facing Bricks / Decor Pattern Tiles",
    materialsUsed: [
      "Khadim Facing Bricks",
      "Decor Pattern Tile",
      "Marble-look Porcelain",
    ],
    gallery: [
      {
        src: "/images/projects/mrf-experience-showroom.jpg",
        alt: "Mosque exterior with facing brick cladding",
      },
      {
        src: "/images/projects/architectural-tile-experience.jpg",
        alt: "Prayer hall with decorative pattern tiles",
      },
    ],
  },
  {
    slug: "national-martyrs-memorial",
    title: "National Martyrs' Memorial",
    category: "historical-landmark",
    categoryLabel: "Historical & National Landmark",
    image: "/images/projects/architectural-tile-experience.jpg",
    imagePosition: "object-center",
    description:
      "Bangladesh's most significant national landmark — featuring Khadim architectural ceramics across the memorial complex, approach plazas, and ceremonial walkways.",
    longDescription:
      "The National Martyrs' Memorial at Savar is finished with Khadim architectural ceramics selected for permanence, dignity, and resilience. Plaza paving, approach walkways, and ceremonial surfaces align with the memorial's solemn national role.",
    location: "Savar, Dhaka",
    workScope: "Memorial Plaza & Approach Paving",
    year: "2022",
    khadimMaterial: "Khadim Vitrified Paving / Facing Bricks",
    materialsUsed: [
      "Khadim Vitrified Paving",
      "Khadim Facing Bricks",
      "Structured Finish Porcelain",
    ],
    gallery: [
      {
        src: "/images/projects/architectural-tile-experience.jpg",
        alt: "Memorial complex with Khadim paving",
      },
      {
        src: "/images/projects/urban-commercial-space.jpg",
        alt: "Ceremonial approach walkway",
      },
    ],
  },
  {
    slug: "nitor-hospital-complex",
    title: "NITOR Hospital Complex",
    category: "hospital-healthcare",
    categoryLabel: "Hospital & Healthcare",
    image: "/images/projects/modern-sanitary-space.jpg",
    imagePosition: "object-center",
    description:
      "A specialized orthopedic hospital complex finished with Khadim anti-bacteria tiles, seamless wall cladding engineered for hygiene-critical healthcare environments.",
    longDescription:
      "NITOR Hospital Complex relies on Khadim eco anti-bacteria floor and wall tiles to meet the rigorous hygiene standards of modern healthcare. Continuous wall cladding, anti-slip patient corridors, and seamless transitions define the interior experience.",
    location: "Sher-e-Bangla Nagar, Dhaka",
    workScope: "Clinical Flooring & Wall Cladding",
    year: "2024",
    khadimMaterial: "Khadim Eco Antibacteria Tiles / Wall Cladding",
    materialsUsed: [
      "Khadim Eco Antibacteria Tile",
      "Wall Cladding",
      "Anti-slip Floor Tile",
    ],
    gallery: [
      {
        src: "/images/projects/modern-sanitary-space.jpg",
        alt: "Hospital corridor with anti-bacteria tile",
      },
      {
        src: "/images/projects/premium-hospitality-interior.jpg",
        alt: "Clinical interior with hygienic wall cladding",
      },
    ],
  },
  {
    slug: "luxury-residence-rangpur",
    title: "Luxury Residence at Rangpur",
    category: "residential",
    categoryLabel: "Residential",
    image: "/images/projects/modern-residence.jpg",
    imagePosition: "object-center",
    description:
      "The MRF Galaxy Khadim Official Showcase residence — a private home in Rangpur finished entirely with Khadim vitrified slabs, facing bricks, and architectural ceramics.",
    longDescription:
      "Designated as the MRF Galaxy Khadim Official Showcase, this Rangpur residence demonstrates the full range of Khadim's architectural ceramics — exterior facing bricks, large-format vitrified slabs, sanitary-grade bathroom surfaces, and curated decor tiles — unified into a private home of enduring quality.",
    location: "Dhap, Rangpur",
    workScope: "Full Khadim Showcase Residence",
    year: "2025",
    khadimMaterial: "Khadim Vitrified Slabs / Facing Bricks / Decor Tiles",
    materialsUsed: [
      "Khadim Vitrified Slabs",
      "Khadim Facing Bricks",
      "Decor Pattern Tile",
      "Premium Sanitary Ware",
    ],
    gallery: [
      {
        src: "/images/projects/modern-residence.jpg",
        alt: "Showcase residence with Khadim vitrified slabs",
      },
      {
        src: "/images/projects/luxury-villa.jpg",
        alt: "Residence facade with Khadim facing bricks",
      },
      {
        src: "/images/projects/modern-sanitary-space.jpg",
        alt: "Bathroom finished with Khadim sanitary ceramics",
      },
    ],
  },
  {
    slug: "modern-residence",
    title: "Modern Residence",
    category: "residential",
    categoryLabel: "Residential",
    image: "/images/projects/modern-residence.jpg",
    imagePosition: "object-center",
    description:
      "A refined residential interior featuring large-format porcelain slabs, seamless floor transitions, and a muted material palette tailored for contemporary living.",
    longDescription:
      "This modern residence demonstrates how large-format porcelain can define spatial flow across open living zones. Floor-to-ceiling material continuity, paired with warm architectural lighting, creates an atmosphere of quiet luxury suited for everyday living.",
    location: "Gulshan, Dhaka",
    workScope: "Interior Flooring & Feature Walls",
    year: "2024",
    khadimMaterial: "Khadim Vitrified Slabs / Matte Floor Tile",
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
    ],
  },
  {
    slug: "urban-commercial-space",
    title: "Urban Commercial Space",
    category: "industrial-commercial",
    categoryLabel: "Industrial & Commercial",
    image: "/images/projects/urban-commercial-space.jpg",
    imagePosition: "object-center",
    description:
      "A commercial interior concept using Khadim technical porcelain, anti-slip flooring, and cohesive wall treatments for high-traffic public environments.",
    longDescription:
      "Urban Commercial Space addresses the demands of high-footfall environments with Khadim technical porcelain engineered for durability. Cohesive floor and wall treatments create a unified brand experience while meeting the performance requirements of public interiors.",
    location: "Motijheel, Dhaka",
    workScope: "Technical Flooring & Wall Systems",
    year: "2023",
    khadimMaterial: "Khadim Technical Porcelain / Anti-slip Flooring",
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
        src: "/images/projects/urban-commercial-space.jpg",
        alt: "Large-volume commercial interior with slab flooring",
      },
    ],
  },
  {
    slug: "premium-hospitality-interior",
    title: "Premium Hospitality Interior",
    category: "hotel-resort",
    categoryLabel: "Hotel & Resort",
    image: "/images/projects/premium-hospitality-interior.jpg",
    imagePosition: "object-center",
    description:
      "A hospitality project balancing luxury ambiance with durable surfaces, featuring warm tones, statement walls, and spa-inspired sanitary detailing.",
    longDescription:
      "Premium Hospitality Interior brings together warm material tones, statement pattern walls, and spa-grade sanitary detailing. Every surface is selected to withstand commercial use while maintaining the refined atmosphere expected in luxury hospitality environments.",
    location: "Gulshan, Dhaka",
    workScope: "Lobby, Suites & Spa Sanitary",
    year: "2024",
    khadimMaterial: "Khadim Decor Pattern Tile / Marble Porcelain",
    materialsUsed: [
      "Decor Pattern Tile",
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
    ],
  },
  {
    slug: "mrf-experience-showroom",
    title: "MRF Experience Showroom",
    category: "industrial-commercial",
    categoryLabel: "Industrial & Commercial",
    image: "/images/projects/mrf-experience-showroom.jpg",
    imagePosition: "object-center",
    description:
      "A flagship showroom experience designed to present Khadim tile collections, surface finishes, and sanitary solutions in an editorial architectural setting.",
    longDescription:
      "The MRF Experience Showroom is conceived as a curated architectural journey. Display volumes, material samples, and full-scale room settings allow clients to experience Khadim collections in context before specifying for their own projects.",
    location: "Banani, Dhaka",
    workScope: "Showroom Display & Feature Walls",
    year: "2025",
    khadimMaterial: "Khadim Display Slabs / Feature Wall Tile",
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
        src: "/images/projects/modern-sanitary-space.jpg",
        alt: "Sanitary solutions display zone",
      },
    ],
  },
  {
    slug: "minimalist-living-space",
    title: "Minimalist Living Space",
    category: "residential",
    categoryLabel: "Residential",
    image: "/images/projects/minimalist-living-space.jpg",
    imagePosition: "object-center",
    description:
      "A minimalist living space showcasing neutral tile tones, soft natural light, and carefully composed flooring patterns for quiet luxury.",
    longDescription:
      "Minimalist Living Space proves that restraint can be luxurious. Neutral porcelain tones, generous natural light, and carefully composed floor layouts create an interior that feels calm, spacious, and enduring — free from visual clutter.",
    location: "Banani, Dhaka",
    workScope: "Interior Flooring",
    year: "2025",
    khadimMaterial: "Khadim Wood Grain Porcelain / Matte Wall Finish",
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
    ],
  },
  {
    slug: "government-office-interior",
    title: "Government Office Interior",
    category: "government-office",
    categoryLabel: "Government Office",
    image: "/images/projects/architectural-tile-experience.jpg",
    imagePosition: "object-center",
    description:
      "A government office environment finished with Khadim technical porcelain and anti-slip flooring for high-traffic public administration buildings.",
    longDescription:
      "Government Office Interior demonstrates Khadim's suitability for civic architecture — durable technical porcelain, anti-slip public corridors, and refined wall cladding deliver performance without sacrificing architectural dignity.",
    location: "Secretariat, Dhaka",
    workScope: "Public Corridors & Office Flooring",
    year: "2023",
    khadimMaterial: "Khadim Technical Porcelain / Anti-slip Tile",
    materialsUsed: [
      "Technical Porcelain",
      "Antislip Flooring",
      "Wall Cladding",
    ],
    gallery: [
      {
        src: "/images/projects/architectural-tile-experience.jpg",
        alt: "Government lobby with technical porcelain",
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