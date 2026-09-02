export const FILTER_OPTIONS = {
  look: [
    "Marble",
    "Stone",
    "Concrete",
    "Wood",
    "Metal",
    "Contemporary",
  ],
  formats: [
    "3200x1600x12",
    "1200x2400x12",
    "2700x1200x10",
    "3200x1600x6",
    "2700x1200x9",
    "2400x1200x9",
  ],
  material: [
    "Porcelain Slab",
    "Porcelain Tile",
    "Technical Porcelain",
    "Antislip",
    "Eco Tile Antibacteria",
    "Décor - Pattern",
  ],
} as const;

export type FilterId = keyof typeof FILTER_OPTIONS;

export const COLLECTION_FILTERS: {
  id: FilterId;
  label: string;
  options: readonly string[];
}[] = [
  { id: "look", label: "LOOK", options: FILTER_OPTIONS.look },
  { id: "formats", label: "FORMATS", options: FILTER_OPTIONS.formats },
  { id: "material", label: "TILE MATERIAL", options: FILTER_OPTIONS.material },
];

export type CatalogProduct = {
  id: string;
  label: string;
  description: string;
  longDescription: string;
  image: string;
  imagePosition?: string;
  alt: string;
  gallery: { src: string; alt: string }[];
  look: string;
  format: string;
  material: string;
  finish: string;
  applications: string[];
};

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: "modern-dark",
    label: "MODERN DARK",
    description: "Deep-toned porcelain for contemporary kitchen and living spaces.",
    longDescription:
      "Modern Dark brings depth and sophistication to contemporary interiors. Its rich charcoal tones and subtle surface variation create dramatic floor and wall compositions ideal for open-plan kitchens, living areas, and feature walls.",
    image: "/images/collection/modern-dark.jpg",
    alt: "Modern premium kitchen with dark tiles and stone surfaces",
    gallery: [
      {
        src: "/images/projects/contemporary-kitchen.jpg",
        alt: "Contemporary kitchen with dark porcelain surfaces",
      },
      {
        src: "/images/projects/modern-residence.jpg",
        alt: "Modern residence featuring dark floor tiles",
      },
    ],
    look: "Contemporary",
    format: "1200x2400x12",
    material: "Porcelain Tile",
    finish: "Matte",
    applications: ["Floor", "Wall", "Kitchen"],
  },
  {
    id: "natural-luxury",
    label: "NATURAL LUXURY",
    description: "Warm stone-inspired surfaces for calm, refined interiors.",
    longDescription:
      "Natural Luxury captures the warmth and texture of natural stone in a durable porcelain format. Soft beige and sand tones bring quiet elegance to bedrooms, living spaces, and spa-inspired bathrooms.",
    image: "/images/collection/natural-luxury.jpg",
    alt: "Luxury minimalist interior with beige tiles and natural elements",
    gallery: [
      {
        src: "/images/projects/minimalist-living-space.jpg",
        alt: "Minimalist living space with natural luxury tiles",
      },
      {
        src: "/images/projects/luxury-villa.jpg",
        alt: "Luxury villa interior with stone-inspired flooring",
      },
    ],
    look: "Stone",
    format: "2700x1200x10",
    material: "Porcelain Slab",
    finish: "Polished",
    applications: ["Floor", "Wall", "Living Room"],
  },
  {
    id: "urban-elegance",
    label: "URBAN ELEGANCE",
    description: "Architectural porcelain for open-plan commercial environments.",
    longDescription:
      "Urban Elegance is engineered for large-scale architectural applications. Its concrete-inspired surface and generous slab format deliver seamless transitions across commercial lobbies, retail spaces, and modern residences.",
    image: "/images/collection/urban-elegance.jpg",
    alt: "Premium architectural living space with elegant flooring",
    gallery: [
      {
        src: "/images/projects/urban-commercial-space.jpg",
        alt: "Urban commercial space with elegant porcelain flooring",
      },
      {
        src: "/images/projects/architectural-tile-experience.jpg",
        alt: "Architectural tile display with urban elegance surfaces",
      },
    ],
    look: "Concrete",
    format: "3200x1600x12",
    material: "Technical Porcelain",
    finish: "Structured",
    applications: ["Floor", "Commercial", "Lobby"],
  },
  {
    id: "marble-classic",
    label: "MARBLE CLASSIC",
    description: "Large-format marble-look slabs for luxury residential floors.",
    longDescription:
      "Marble Classic replicates the veining and luminosity of natural marble with the performance of technical porcelain. Perfect for luxury residences, hotel suites, and statement flooring where timeless beauty is essential.",
    image: "/images/projects/architectural-tile-experience.jpg",
    alt: "Premium interior with marble-look porcelain flooring",
    gallery: [
      {
        src: "/images/projects/premium-hospitality-interior.jpg",
        alt: "Hospitality interior with marble classic flooring",
      },
      {
        src: "/images/projects/mrf-experience-showroom.jpg",
        alt: "Showroom display of marble classic porcelain slabs",
      },
    ],
    look: "Marble",
    format: "3200x1600x12",
    material: "Porcelain Slab",
    finish: "Polished",
    applications: ["Floor", "Wall", "Hospitality"],
  },
  {
    id: "wood-grain",
    label: "WOOD GRAIN",
    description: "Natural wood texture porcelain for warm, inviting spaces.",
    longDescription:
      "Wood Grain offers the warmth of timber with porcelain durability. Realistic grain patterns and natural colour variation make it ideal for bedrooms, lounges, and transitional spaces where comfort meets performance.",
    image: "/images/projects/minimalist-living-space.jpg",
    alt: "Minimalist living space with wood-grain porcelain flooring",
    gallery: [
      {
        src: "/images/collection/natural-luxury.jpg",
        alt: "Warm interior combining wood grain and natural tones",
      },
      {
        src: "/images/projects/modern-residence.jpg",
        alt: "Modern residence with wood-grain floor tiles",
      },
    ],
    look: "Wood",
    format: "2700x1200x9",
    material: "Porcelain Tile",
    finish: "Matte",
    applications: ["Floor", "Bedroom", "Living Room"],
  },
  {
    id: "metal-accent",
    label: "METAL ACCENT",
    description: "Industrial metal-finish tiles for bold feature walls.",
    longDescription:
      "Metal Accent introduces an industrial edge to interior architecture. Its metallic surface finish creates striking feature walls, reception desks, and accent zones in commercial and contemporary residential projects.",
    image: "/images/projects/urban-commercial-space.jpg",
    alt: "Commercial interior with metal-finish porcelain wall tiles",
    gallery: [
      {
        src: "/images/collection/modern-dark.jpg",
        alt: "Dark interior with metal accent wall tiles",
      },
      {
        src: "/images/projects/mrf-experience-showroom.jpg",
        alt: "Showroom featuring metal accent porcelain surfaces",
      },
    ],
    look: "Metal",
    format: "2400x1200x9",
    material: "Porcelain Tile",
    finish: "Brushed",
    applications: ["Wall", "Feature", "Commercial"],
  },
  {
    id: "antislip-outdoor",
    label: "ANTISLIP OUTDOOR",
    description: "Durable antislip porcelain for terraces and high-traffic zones.",
    longDescription:
      "Antislip Outdoor is designed for exterior and wet-area applications where safety and durability are paramount. Textured surface grip and frost-resistant composition make it ideal for terraces, pool surrounds, and entryways.",
    image: "/images/projects/luxury-villa.jpg",
    alt: "Luxury villa terrace with antislip porcelain flooring",
    gallery: [
      {
        src: "/images/villa-sun.jpg",
        alt: "Outdoor terrace with antislip porcelain tiles",
      },
      {
        src: "/images/collection/urban-elegance.jpg",
        alt: "Architectural outdoor space with durable porcelain flooring",
      },
    ],
    look: "Stone",
    format: "1200x2400x12",
    material: "Antislip",
    finish: "Textured",
    applications: ["Outdoor", "Terrace", "Pool Area"],
  },
  {
    id: "eco-antibacteria",
    label: "ECO ANTIBACTERIA",
    description: "Hygiene-focused tiles designed for bathroom and kitchen use.",
    longDescription:
      "Eco Antibacteria combines advanced surface technology with refined aesthetics. Engineered for bathrooms, kitchens, and healthcare environments where hygiene standards and design quality must coexist.",
    image: "/images/projects/modern-sanitary-space.jpg",
    alt: "Modern bathroom with eco antibacterial porcelain tiles",
    gallery: [
      {
        src: "/images/projects/contemporary-kitchen.jpg",
        alt: "Kitchen with eco antibacterial porcelain surfaces",
      },
      {
        src: "/images/collection/natural-luxury.jpg",
        alt: "Clean bathroom interior with antibacterial tile surfaces",
      },
    ],
    look: "Contemporary",
    format: "2700x1200x10",
    material: "Eco Tile Antibacteria",
    finish: "Satin",
    applications: ["Bathroom", "Kitchen", "Healthcare"],
  },
  {
    id: "decor-pattern",
    label: "DÉCOR PATTERN",
    description: "Statement pattern tiles for accent walls and feature zones.",
    longDescription:
      "Décor Pattern transforms walls into architectural statements. Bold geometric and organic patterns add visual rhythm to hospitality interiors, retail environments, and luxury residential feature zones.",
    image: "/images/projects/premium-hospitality-interior.jpg",
    alt: "Hospitality interior with decorative pattern porcelain tiles",
    gallery: [
      {
        src: "/images/projects/architectural-tile-experience.jpg",
        alt: "Architectural display of decorative pattern tiles",
      },
      {
        src: "/images/projects/urban-commercial-space.jpg",
        alt: "Commercial space with patterned porcelain accent wall",
      },
    ],
    look: "Contemporary",
    format: "3200x1600x6",
    material: "Décor - Pattern",
    finish: "Gloss",
    applications: ["Wall", "Feature", "Hospitality"],
  },
];

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return CATALOG_PRODUCTS.find((product) => product.id === slug);
}

export function getRelatedProducts(
  product: CatalogProduct,
  limit = 3,
): CatalogProduct[] {
  return CATALOG_PRODUCTS.filter(
    (item) =>
      item.id !== product.id &&
      (item.look === product.look || item.material === product.material),
  ).slice(0, limit);
}
