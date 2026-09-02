export type BrandProduct = {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  alt: string;
  category: string;
  specifications: string[];
  priceBdt: number;
};

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  banner: string;
  bannerAlt: string;
  cardImage: string;
  cardAlt: string;
  href: string;
  products: BrandProduct[];
};

export const BRANDS: Brand[] = [
  {
    slug: "khadim-tiles",
    name: "KHADIM TILES",
    tagline: "Porcelain Slabs & Floor Tiles",
    description:
      "Khadim Tiles brings a curated selection of porcelain slabs and floor tiles engineered for performance and refined aesthetics. Each surface is crafted to elevate residential and commercial interiors across Bangladesh.",
    banner: "/images/projects/architectural-tile-experience.jpg",
    bannerAlt: "Khadim Tiles porcelain slab showroom display",
    cardImage: "/images/projects/architectural-tile-experience.jpg",
    cardAlt: "Khadim Tiles porcelain slab collection display",
    href: "/brands/khadim-tiles",
    products: [
      {
        id: "khadim-marble-classic",
        title: "MARBLE CLASSIC",
        description: "Marble-look porcelain slab with elegant veining.",
        details:
          "Large-format marble-look porcelain slab with refined veining and polished finish. Ideal for luxury living rooms, hotel lobbies, and statement feature walls.",
        image: "/images/projects/architectural-tile-experience.jpg",
        alt: "Khadim marble classic porcelain slab in luxury interior",
        category: "Porcelain Slab",
        specifications: [
          "Format: 3200 × 1600 × 12 mm",
          "Finish: Polished",
          "Material: Porcelain Slab",
          "Application: Floor, Wall, Hospitality",
        ],
        priceBdt: 18500,
      },
      {
        id: "khadim-natural-stone",
        title: "NATURAL STONE",
        description: "Stone-inspired porcelain for warm, timeless floors.",
        details:
          "Stone-look porcelain with subtle surface variation and a warm beige palette. Brings organic texture to bedrooms, living rooms, and boutique hospitality spaces.",
        image: "/images/collection/natural-luxury.jpg",
        alt: "Khadim natural stone porcelain flooring",
        category: "Porcelain Tile",
        specifications: [
          "Format: 2700 × 1200 × 10 mm",
          "Finish: Matte",
          "Material: Porcelain Tile",
          "Application: Floor, Living Room, Bedroom",
        ],
        priceBdt: 14200,
      },
      {
        id: "khadim-urban-grey",
        title: "URBAN GREY",
        description: "Concrete-look tile for modern architectural floors.",
        details:
          "Architectural concrete-look porcelain with consistent tone and structured surface. Perfect for open-plan commercial and contemporary residential environments.",
        image: "/images/collection/urban-elegance.jpg",
        alt: "Khadim urban grey concrete-look porcelain tile",
        category: "Technical Porcelain",
        specifications: [
          "Format: 3200 × 1600 × 12 mm",
          "Finish: Structured",
          "Material: Technical Porcelain",
          "Application: Floor, Commercial, Lobby",
        ],
        priceBdt: 16800,
      },
      {
        id: "khadim-wood-grain",
        title: "WOOD GRAIN",
        description: "Wood-look porcelain for warm, inviting interiors.",
        details:
          "Realistic wood-grain porcelain tile combining the warmth of timber with porcelain durability. Suitable for lounges, bedrooms, and transitional living spaces.",
        image: "/images/projects/minimalist-living-space.jpg",
        alt: "Khadim wood-grain porcelain tile interior",
        category: "Porcelain Tile",
        specifications: [
          "Format: 2700 × 1200 × 9 mm",
          "Finish: Matte",
          "Material: Porcelain Tile",
          "Application: Floor, Bedroom, Lounge",
        ],
        priceBdt: 12500,
      },
      {
        id: "khadim-modern-dark",
        title: "MODERN DARK",
        description: "Deep charcoal porcelain for contemporary spaces.",
        details:
          "Deep-toned dark porcelain with subtle surface variation. Creates dramatic floor and wall compositions for open-plan kitchens and feature walls.",
        image: "/images/collection/modern-dark.jpg",
        alt: "Khadim modern dark porcelain kitchen",
        category: "Porcelain Tile",
        specifications: [
          "Format: 1200 × 2400 × 12 mm",
          "Finish: Matte",
          "Material: Porcelain Tile",
          "Application: Floor, Wall, Kitchen",
        ],
        priceBdt: 13800,
      },
      {
        id: "khadim-decor-pattern",
        title: "DÉCOR PATTERN",
        description: "Patterned tile for accent walls and statement floors.",
        details:
          "Statement patterned porcelain tile with bold geometric design. Adds visual rhythm to hospitality interiors, retail environments, and luxury feature zones.",
        image: "/images/projects/premium-hospitality-interior.jpg",
        alt: "Khadim décor pattern tile accent wall",
        category: "Décor - Pattern",
        specifications: [
          "Format: 3200 × 1600 × 6 mm",
          "Finish: Gloss",
          "Material: Décor - Pattern",
          "Application: Wall, Feature, Hospitality",
        ],
        priceBdt: 21500,
      },
    ],
  },
  {
    slug: "marcopolo",
    name: "MARCOPOLO",
    tagline: "Italian-Inspired Surfaces",
    description:
      "Marcopolo delivers refined Italian-inspired porcelain surfaces designed for sophisticated interiors. Each collection reflects a balance of craftsmanship, durability, and timeless European design language.",
    banner: "/images/projects/luxury-villa.jpg",
    bannerAlt: "Marcopolo luxury villa porcelain surfaces",
    cardImage: "/images/projects/luxury-villa.jpg",
    cardAlt: "Marcopolo luxury Italian-inspired tile collection",
    href: "/brands/marcopolo",
    products: [
      {
        id: "marcopolo-statuario",
        title: "STATUARIO",
        description: "Statuario marble-look slab with crisp veining.",
        details:
          "Italian-inspired Statuario marble-look porcelain slab featuring crisp white background with bold grey veining. Engineered for high-end residential and hospitality interiors.",
        image: "/images/projects/luxury-villa.jpg",
        alt: "Marcopolo Statuario marble-look slab",
        category: "Porcelain Slab",
        specifications: [
          "Format: 3200 × 1600 × 12 mm",
          "Finish: Polished",
          "Material: Porcelain Slab",
          "Application: Floor, Wall, Hospitality",
        ],
        priceBdt: 22500,
      },
      {
        id: "marcopolo-calacatta",
        title: "CALACATTA",
        description: "Calacatta gold-veined porcelain slab.",
        details:
          "Calacatta-inspired porcelain slab with warm gold veining on a luminous white surface. Creates refined focal points in luxury bathrooms and living spaces.",
        image: "/images/projects/architectural-tile-experience.jpg",
        alt: "Marcopolo Calacatta porcelain slab",
        category: "Porcelain Slab",
        specifications: [
          "Format: 3200 × 1600 × 12 mm",
          "Finish: Polished",
          "Material: Porcelain Slab",
          "Application: Floor, Wall, Bathroom",
        ],
        priceBdt: 24800,
      },
      {
        id: "marcopolo-travertino",
        title: "TRAVERTINO",
        description: "Travertine-look surface in warm cream tones.",
        details:
          "Italian Travertino-inspired porcelain with warm cream tones and natural surface texture. Suitable for both classic and contemporary luxury interiors.",
        image: "/images/collection/natural-luxury.jpg",
        alt: "Marcopolo Travertino cream porcelain",
        category: "Porcelain Tile",
        specifications: [
          "Format: 2700 × 1200 × 10 mm",
          "Finish: Honed",
          "Material: Porcelain Tile",
          "Application: Floor, Wall, Living Room",
        ],
        priceBdt: 16200,
      },
      {
        id: "marcopolo-onice",
        title: "ONICE",
        description: "Translucent onyx-look slab with luminous depth.",
        details:
          "Translucent onyx-look porcelain slab with crystalline depth and refined veining. Backlit compatible for feature installations and luxury hospitality.",
        image: "/images/projects/premium-hospitality-interior.jpg",
        alt: "Marcopolo Onice translucent slab",
        category: "Porcelain Slab",
        specifications: [
          "Format: 3200 × 1600 × 12 mm",
          "Finish: Polished",
          "Material: Porcelain Slab",
          "Application: Feature Wall, Backlit, Hospitality",
        ],
        priceBdt: 28500,
      },
      {
        id: "marcopolo-cemento",
        title: "CEMENTO",
        description: "Italian cement-look tile with minimalist tone.",
        details:
          "Italian cement-look porcelain tile with smooth minimalist finish and refined grey palette. Ideal for loft-style residences and modern commercial spaces.",
        image: "/images/collection/urban-elegance.jpg",
        alt: "Marcopolo Cemento minimalist tile",
        category: "Technical Porcelain",
        specifications: [
          "Format: 2700 × 1200 × 9 mm",
          "Finish: Matte",
          "Material: Technical Porcelain",
          "Application: Floor, Wall, Loft",
        ],
        priceBdt: 14800,
      },
      {
        id: "marcopolo-metallo",
        title: "METALLO",
        description: "Metal-finish tile for bold architectural walls.",
        details:
          "Industrial metal-finish porcelain tile with brushed surface. Adds an architectural edge to feature walls, reception desks, and contemporary interiors.",
        image: "/images/projects/urban-commercial-space.jpg",
        alt: "Marcopolo Metallo brushed tile",
        category: "Porcelain Tile",
        specifications: [
          "Format: 2400 × 1200 × 9 mm",
          "Finish: Brushed",
          "Material: Porcelain Tile",
          "Application: Wall, Feature, Commercial",
        ],
        priceBdt: 19200,
      },
    ],
  },
  {
    slug: "charu",
    name: "CHARU",
    tagline: "Bespoke Sanitary & Bath",
    description:
      "Charu offers a refined sanitary and bath collection designed for everyday luxury. Each fixture is engineered with meticulous attention to form, finish, and long-term performance for premium residential and hospitality bathrooms.",
    banner: "/images/sanitary/luxury-basins-vanities.jpg",
    bannerAlt: "Charu luxury sanitary bathroom collection",
    cardImage: "/images/sanitary/luxury-basins-vanities.jpg",
    cardAlt: "Charu bespoke sanitary and bath collection",
    href: "/brands/charu",
    products: [
      {
        id: "charu-marble-vessel",
        title: "CHARU MARBLE VESSEL",
        description: "Hand-finished marble vessel basin.",
        details:
          "Hand-finished natural marble vessel basin with soft organic rim profile. Suitable for countertop installation with polished interior for easy maintenance.",
        image: "/images/sanitary/products/basin-vessel-marble.jpg",
        alt: "Charu marble vessel basin",
        category: "Basins & Vanities",
        specifications: [
          "Finish: Polished Marble",
          "Material: Natural Marble",
          "Dimensions: 420 × 420 × 145 mm",
          "Installation: Countertop",
        ],
        priceBdt: 48000,
      },
      {
        id: "charu-wall-hung-gold",
        title: "CHARU WALL-HUNG GOLD",
        description: "Slim wall-hung basin with brushed gold faucet pairing.",
        details:
          "Ceramic wall-hung basin with concealed fixing system and brushed gold faucet pairing. Ideal for compact luxury bathrooms and powder rooms.",
        image: "/images/sanitary/products/basin-wall-hung-gold.jpg",
        alt: "Charu wall-hung basin with gold faucet",
        category: "Basins & Vanities",
        specifications: [
          "Finish: Gloss White + Brushed Gold",
          "Material: Vitreous China",
          "Dimensions: 550 × 400 × 120 mm",
          "Installation: Wall-Hung",
        ],
        priceBdt: 41500,
      },
      {
        id: "charu-rainfall-gold",
        title: "CHARU RAINFALL GOLD",
        description: "Square rainfall shower head in brushed gold.",
        details:
          "300mm square rainfall shower head with silicone nozzles and anti-lime scale technology. Compatible with ceiling or wall arm installation.",
        image: "/images/sanitary/products/shower-rainfall-gold.jpg",
        alt: "Charu brushed gold rainfall shower",
        category: "Showers & Faucets",
        specifications: [
          "Finish: Brushed Gold",
          "Material: Brass",
          "Dimensions: 300 × 300 × 12 mm",
          "Installation: Ceiling or Wall",
        ],
        priceBdt: 30500,
      },
      {
        id: "charu-thermostatic-set",
        title: "CHARU THERMOSTATIC SET",
        description: "Thermostatic shower system with hand shower.",
        details:
          "Complete thermostatic shower set with overhead rainfall, hand shower, hose, and diverter. Temperature-safe valve for family bathroom use.",
        image: "/images/sanitary/products/shower-thermostatic-set.jpg",
        alt: "Charu thermostatic shower set",
        category: "Showers & Faucets",
        specifications: [
          "Finish: Brushed Gold",
          "Material: Brass",
          "Components: Rainfall head, hand shower, hose",
          "Installation: Wall-Mounted",
        ],
        priceBdt: 62500,
      },
      {
        id: "charu-wall-hung-wc",
        title: "CHARU WALL-HUNG RIMLESS",
        description: "Slim rimless wall-hung WC with soft-close seat.",
        details:
          "Rimless wall-hung water closet with antibacterial glaze, soft-close slim seat, and concealed cistern compatibility for clean bathroom lines.",
        image: "/images/sanitary/products/wc-wall-hung-rimless.jpg",
        alt: "Charu wall-hung rimless water closet",
        category: "Water Closets",
        specifications: [
          "Finish: Gloss White",
          "Material: Vitreous China",
          "Dimensions: 520 × 360 × 330 mm",
          "Flush: Rimless Dual",
        ],
        priceBdt: 46500,
      },
      {
        id: "charu-freestanding-oval",
        title: "CHARU FREESTANDING OVAL",
        description: "Sculptural oval freestanding bathtub.",
        details:
          "Premium acrylic freestanding bathtub with ergonomic backrest, slip-resistant base, and pre-drilled overflow trim for luxury master bathrooms.",
        image: "/images/sanitary/products/tub-freestanding-oval.jpg",
        alt: "Charu oval freestanding bathtub",
        category: "Bathtubs & Spa",
        specifications: [
          "Finish: Gloss White",
          "Material: Acrylic",
          "Dimensions: 1700 × 800 × 580 mm",
          "Installation: Freestanding",
        ],
        priceBdt: 185000,
      },
    ],
  },
  {
    slug: "tanvir-fittings",
    name: "TANVIR FITTINGS",
    tagline: "Brassware & Bathroom Fittings",
    description:
      "Tanvir Fittings supplies a comprehensive range of brassware and bathroom fittings engineered for daily performance. Each piece balances reliable mechanics with refined finishes suited for premium residential projects.",
    banner: "/images/sanitary/luxury-showers-faucets.jpg",
    bannerAlt: "Tanvir Fittings brassware and faucet display",
    cardImage: "/images/sanitary/luxury-showers-faucets.jpg",
    cardAlt: "Tanvir Fittings brassware collection",
    href: "/brands/tanvir-fittings",
    products: [
      {
        id: "tanvir-basin-mixer-gold",
        title: "BASIN MIXER GOLD",
        description: "Single-lever basin mixer in brushed gold.",
        details:
          "Deck-mounted single-lever basin mixer with ceramic cartridge, water-saving aerator, and smooth lever operation for daily luxury use.",
        image: "/images/sanitary/products/faucet-basin-gold.jpg",
        alt: "Tanvir brushed gold basin mixer",
        category: "Basin Mixers",
        specifications: [
          "Finish: Brushed Gold",
          "Material: Brass",
          "Dimensions: 180 × 50 × 160 mm",
          "Installation: Deck-Mounted",
        ],
        priceBdt: 22500,
      },
      {
        id: "tanvir-basin-mixer-chrome",
        title: "BASIN MIXER CHROME",
        description: "Minimal chrome basin mixer with clean lines.",
        details:
          "Polished chrome basin mixer with slim profile spout, ceramic disc valve, and easy-clean surface for contemporary bathroom schemes.",
        image: "/images/sanitary/products/faucet-basin-chrome.jpg",
        alt: "Tanvir chrome basin mixer",
        category: "Basin Mixers",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Brass",
          "Dimensions: 175 × 48 × 155 mm",
          "Installation: Deck-Mounted",
        ],
        priceBdt: 18500,
      },
      {
        id: "tanvir-matte-black-mixer",
        title: "MATTE BLACK MIXER",
        description: "Matte black basin mixer for contrast palettes.",
        details:
          "Single-lever matte black basin mixer with fingerprint-resistant coating, ceramic cartridge, and coordinated luxury bathroom styling.",
        image: "/images/sanitary/products/faucet-matte-black.jpg",
        alt: "Tanvir matte black basin mixer",
        category: "Basin Mixers",
        specifications: [
          "Finish: Matte Black",
          "Material: Brass",
          "Dimensions: 185 × 52 × 165 mm",
          "Installation: Deck-Mounted",
        ],
        priceBdt: 24500,
      },
      {
        id: "tanvir-wall-spout-set",
        title: "WALL SPOUT SET",
        description: "Wall-mounted spout with cross-handle controls.",
        details:
          "Wall-mounted basin spout set with separate cross-handle hot and cold controls. Creates an architectural tap arrangement on tiled walls.",
        image: "/images/sanitary/products/faucet-wall-mounted.jpg",
        alt: "Tanvir wall-mounted spout set",
        category: "Basin Mixers",
        specifications: [
          "Finish: Brushed Nickel",
          "Material: Brass",
          "Spout Projection: 220 mm",
          "Installation: Wall-Mounted",
        ],
        priceBdt: 34500,
      },
      {
        id: "tanvir-hand-shower-kit",
        title: "HAND SHOWER KIT",
        description: "Hand shower with multi-mode spray and bracket.",
        details:
          "Hand shower kit with three spray modes, 1.5m stainless hose, and adjustable wall bracket. Ideal as shower upgrade or bath shower combo.",
        image: "/images/sanitary/products/shower-handheld-set.jpg",
        alt: "Tanvir hand shower kit",
        category: "Showers",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Brass + Stainless",
          "Head: 120 × 85 mm",
          "Hose: 1.5 m Stainless",
        ],
        priceBdt: 16500,
      },
      {
        id: "tanvir-concealed-shower",
        title: "CONCEALED SHOWER SET",
        description: "Concealed shower with rainfall head and wall plate.",
        details:
          "Concealed shower valve with rainfall head, diverter, and slim wall plate for clean tiled shower walls and architectural bathroom detailing.",
        image: "/images/sanitary/products/shower-concealed-set.jpg",
        alt: "Tanvir concealed shower set",
        category: "Showers",
        specifications: [
          "Finish: Matte Black + Chrome",
          "Material: Brass",
          "Head: 250 × 250 mm",
          "Installation: Concealed",
        ],
        priceBdt: 48500,
      },
      {
        id: "tanvir-ceiling-rain-400",
        title: "CEILING RAIN 400",
        description: "Ultra-thin ceiling rainfall shower head.",
        details:
          "400mm square ultra-thin ceiling shower head with even water distribution and concealed mounting plate for flush ceiling integration.",
        image: "/images/sanitary/products/shower-ceiling-rain.jpg",
        alt: "Tanvir ceiling rainfall shower",
        category: "Showers",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Stainless Steel",
          "Dimensions: 400 × 400 × 8 mm",
          "Installation: Ceiling",
        ],
        priceBdt: 32000,
      },
      {
        id: "tanvir-spa-column",
        title: "SPA SHOWER COLUMN",
        description: "Full-height spa shower column with body jets.",
        details:
          "Spa shower column with thermostatic control, rainfall head, hand shower, and six body jets for wellness-focused bathroom environments.",
        image: "/images/sanitary/products/shower-column-spa.jpg",
        alt: "Tanvir spa shower column",
        category: "Showers",
        specifications: [
          "Finish: Brushed Nickel",
          "Material: Stainless Steel",
          "Dimensions: 2200 × 300 × 120 mm",
          "Jets: 6 Body Jets",
        ],
        priceBdt: 98000,
      },
    ],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}

export function getAllBrandSlugs(): string[] {
  return BRANDS.map((brand) => brand.slug);
}

export function formatPriceBdt(price: number): string {
  return `৳${price.toLocaleString("en-BD")}`;
}