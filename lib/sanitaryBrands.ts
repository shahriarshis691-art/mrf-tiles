export type SanitaryBrandProduct = {
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

export type SanitaryBrand = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bio: string;
  image: string;
  banner: string;
  bannerAlt: string;
  href: string;
  products: SanitaryBrandProduct[];
};

export const SANITARY_BRANDS: SanitaryBrand[] = [
  {
    slug: "kohler",
    name: "KOHLER",
    tagline: "American Craftsmanship & Bold Design",
    description:
      "Bold, beautifully engineered bathroom and kitchen products crafted with American ingenuity and timeless silhouettes.",
    bio:
      "Founded in 1873 in Wisconsin, Kohler Co. is one of the world's most recognised names in bathroom and kitchen craftsmanship. The brand is celebrated for combining audacious industrial design with engineering precision — from intelligent bidet systems and statement colour finishes to iconic cast-iron baths that anchor luxury interiors worldwide.",
    image: "/brands/kohler.jpg",
    banner: "/images/sanitary/luxury-water-closets.jpg",
    bannerAlt: "Kohler signature bathroom interior with premium fittings",
    href: "/sanitary/brands/kohler",
    products: [
      {
        id: "kohler-veil-intelligent",
        title: "VEIL INTELLIGENT TOILET",
        description: "Floor-standing intelligent toilet with integrated bidet and dryer.",
        details:
          "The Veil intelligent toilet merges minimalist design with hands-free cleansing, adjustable temperature, and a heated seat — an uncompromising statement piece for the modern master bathroom.",
        image: "/images/sanitary/products/wc-smart-bidet.jpg",
        alt: "Kohler Veil intelligent toilet with integrated bidet",
        category: "Intelligent Toilets",
        specifications: [
          "Finish: Gloss White",
          "Material: Vitreous China + Electronics",
          "Functions: Bidet wash, warm air dry, heated seat",
          "Control: Touch remote",
        ],
        priceBdt: 285000,
      },
      {
        id: "kohler-stillness-bath",
        title: "STILLNESS SOAKING BATH",
        description: "Sculptural cast-iron soaking bath with deep immersion depth.",
        details:
          "A modern reinterpretation of the Japanese ofuro. The Stillness soaking bath is hand-finished in enameled cast iron with a deep, contemplative profile for restorative bathing rituals.",
        image: "/images/sanitary/products/tub-soaking-deep.jpg",
        alt: "Kohler Stillness cast-iron soaking bath",
        category: "Bathtubs",
        specifications: [
          "Finish: Enameled Cast Iron",
          "Material: Cast Iron",
          "Dimensions: 1524 × 762 × 660 mm",
          "Installation: Freestanding",
        ],
        priceBdt: 365000,
      },
      {
        id: "kohler-composed-faucet",
        title: "COMPOSED FAUCET",
        description: "Sculpted single-handle basin mixer in polished chrome.",
        details:
          "The Composed faucet features Kohler's sweepingly organic silhouette paired with a precision ceramic disc valve and water-saving aerator for refined daily use.",
        image: "/images/sanitary/products/faucet-basin-chrome.jpg",
        alt: "Kohler Composed polished chrome faucet",
        category: "Faucets",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Brass",
          "Installation: Deck-Mounted",
          "Valve: Ceramic Disc",
        ],
        priceBdt: 38500,
      },
      {
        id: "kohler-ceric-basin",
        title: "CERIC VESSEL BASIN",
        description: "Modern rectangular vessel basin with thin-edge ceramic.",
        details:
          "The Ceric vessel basin brings architectural precision to the vanity top with a thin-edge profile, anti-stain glaze, and an organic rectangular form.",
        image: "/images/sanitary/products/basin-vessel-marble.jpg",
        alt: "Kohler Ceric vessel basin on vanity",
        category: "Vessel Basins",
        specifications: [
          "Finish: Gloss White",
          "Material: Fine Ceramic",
          "Dimensions: 580 × 380 × 120 mm",
          "Installation: Countertop",
        ],
        priceBdt: 56000,
      },
      {
        id: "kohler-rainhead",
        title: "REAL RAIN RAINHEAD",
        description: "Statement round rainhead with Katalyst air-induction spray.",
        details:
          "Engineered to mimic warm summer rain, the Real Rain rainhead uses air-induction technology for larger, softer droplets that envelop the body.",
        image: "/images/sanitary/products/shower-ceiling-rain.jpg",
        alt: "Kohler Real Rain round ceiling rainhead",
        category: "Showers",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Brass",
          "Diameter: 305 mm",
          "Installation: Ceiling or Wall",
        ],
        priceBdt: 64000,
      },
      {
        id: "kohler-pinstripe-shower",
        title: "PINSTRIPE SHOWER SYSTEM",
        description: "Thermostatic shower system with precision handles.",
        details:
          "Industrial-inspired PinstrIPE thermostatic valve and trim deliver precise temperature control with vintage detailing for heritage luxury bathrooms.",
        image: "/images/sanitary/products/shower-thermostatic-set.jpg",
        alt: "Kohler Pinstripe thermostatic shower system",
        category: "Showers",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Brass",
          "Components: Valve, trim, head, hand shower",
          "Installation: Wall-Mounted",
        ],
        priceBdt: 112000,
      },
    ],
  },
  {
    slug: "grohe",
    name: "GROHE",
    tagline: "Pure German Engineering & Water Luxury",
    description:
      "Precision-engineered brassware and shower systems that bring German engineering excellence into the most refined bathroom interiors.",
    bio:
      "GROHE is Germany's leading premium brand for sanitary fittings, blending over a century of engineering heritage with award-winning design. From thermostatic showers that maintain temperature to a fraction of a degree, to faucets with diamond-hard chrome finishes, GROHE defines reliable water luxury for residential and hospitality projects across the globe.",
    image: "/brands/grohe.jpg",
    banner: "/images/sanitary/luxury-showers-faucets.jpg",
    bannerAlt: "Grohe shower system and brassware display",
    href: "/sanitary/brands/grohe",
    products: [
      {
        id: "grohe-essence-mixer",
        title: "ESSENCE SINGLE-LEVER MIXER",
        description: "Slim single-lever basin mixer with SilkMove cartridge.",
        details:
          "The Essence mixer pairs a slim cylindrical silhouette with GROHE's SilkMove ceramic cartridge for effortless, precise flow and temperature control.",
        image: "/images/sanitary/products/faucet-basin-chrome.jpg",
        alt: "Grohe Essence single-lever basin mixer",
        category: "Faucets",
        specifications: [
          "Finish: StarLight Chrome",
          "Material: Brass",
          "Cartridge: SilkMove 28 mm",
          "Installation: Deck-Mounted",
        ],
        priceBdt: 28500,
      },
      {
        id: "grohe-rainshower-thermo",
        title: "RAINSHOWER THERMOSTATIC SET",
        description: "Rainshower SmartControl system with thermostatic valve.",
        details:
          "A complete thermostatic shower system with a 310mm Rainshower head, hand shower, and intuitive push-button SmartControl for precise spray selection.",
        image: "/images/sanitary/products/shower-thermostatic-set.jpg",
        alt: "Grohe Rainshower SmartControl thermostatic set",
        category: "Showers",
        specifications: [
          "Finish: StarLight Chrome",
          "Material: Brass",
          "Components: Head, hand shower, thermostat valve",
          "Head Diameter: 310 mm",
        ],
        priceBdt: 145000,
      },
      {
        id: "grohe-allure-brilliant",
        title: "ALLURE BRILLIANT FAUCET",
        description: "Architectural 3-hole basin mixer in polished chrome.",
        details:
          "The Allure Brilliant 3-hole basin mixer expresses GROHE's most architectural design language — geometric, confident, and built around precision engineering.",
        image: "/images/sanitary/products/faucet-wall-mounted.jpg",
        alt: "Grohe Allure Brilliant 3-hole faucet",
        category: "Faucets",
        specifications: [
          "Finish: StarLight Chrome",
          "Material: Brass",
          "Configuration: 3-Hole",
          "Installation: Deck-Mounted",
        ],
        priceBdt: 89000,
      },
      {
        id: "grohe-essence-wall-hung-wc",
        title: "ESSENCE WALL-HUNG WC",
        description: "Rimless wall-hung WC with Triple Vortex flush.",
        details:
          "The Essence wall-hung WC pairs a skirted silhouette with GROHE's Triple Vortex flush technology for powerful, hygienic, water-efficient cleansing.",
        image: "/images/sanitary/products/wc-wall-hung-rimless.jpg",
        alt: "Grohe Essence rimless wall-hung water closet",
        category: "Water Closets",
        specifications: [
          "Finish: Alpine White",
          "Material: Vitreous China",
          "Flush: Triple Vortex Rimless",
          "Installation: Wall-Hung",
        ],
        priceBdt: 52000,
      },
      {
        id: "grohe-rapido-concealed",
        title: "RAPIDO CONCEALED VALVE",
        description: "Universal concealed shower mixer for architectural installs.",
        details:
          "Compact and powerful, the Rapido concealed valve delivers precise thermostatic control behind the wall, paired with GROHE TurboStat technology.",
        image: "/images/sanitary/products/shower-concealed-set.jpg",
        alt: "Grohe Rapido concealed shower valve",
        category: "Concealed Systems",
        specifications: [
          "Finish: Rough-In",
          "Material: Brass",
          "Technology: TurboStat",
          "Installation: Concealed",
        ],
        priceBdt: 64000,
      },
      {
        id: "grohe-euphoria-shower",
        title: "EUPHORIA SYSTEM",
        description: "Shower system with 160mm head and hand shower.",
        details:
          "The Euphoria system offers a complete shower upgrade with a 160mm Rainshower head, hand shower, and integrated thermostat — engineered for daily luxury.",
        image: "/images/sanitary/products/shower-handheld-set.jpg",
        alt: "Grohe Euphoria shower system",
        category: "Showers",
        specifications: [
          "Finish: StarLight Chrome",
          "Material: Brass + Stainless",
          "Components: Head, hand shower, thermostat",
          "Head Diameter: 160 mm",
        ],
        priceBdt: 98000,
      },
    ],
  },
  {
    slug: "toto",
    name: "TOTO",
    tagline: "Japanese Precision & Advanced Technology",
    description:
      "Pioneering Japanese sanitary technology — from the Washlet to cyclone-flush innovation — designed around hygiene, calm, and daily wellness.",
    bio:
      "TOTO is Japan's most influential sanitary brand, founded in 1917 in Kitakyushu. Globally recognised for inventing the Washlet and refining the modern toilet experience, TOTO combines quiet engineering with thoughtful Japanese design principles to create bathrooms that feel calm, hygienic, and effortlessly refined.",
    image: "/brands/toto.jpg",
    banner: "/images/sanitary/products/wc-smart-bidet.jpg",
    bannerAlt: "Toto Washlet intelligent toilet display",
    href: "/sanitary/brands/toto",
    products: [
      {
        id: "toto-washlet-rf",
        title: "WASHLET RF",
        description: "Integrated Washlet bidet seat with ewater+ hygiene.",
        details:
          "TOTO's flagship Washlet RF combines an integrated bidet with warm air drying, heated seat, and ewater+ technology that mist-sprays the bowl between flushes for enhanced hygiene.",
        image: "/images/sanitary/products/wc-smart-bidet.jpg",
        alt: "Toto Washlet RF intelligent bidet seat",
        category: "Intelligent Toilets",
        specifications: [
          "Finish: Gloss White",
          "Material: Plastic + Ceramic",
          "Functions: Rear/front wash, dryer, heated seat",
          "Hygiene: ewater+ mist",
        ],
        priceBdt: 245000,
      },
      {
        id: "toto-neorest-xh",
        title: "NEOREST XH",
        description: "Flagship one-piece intelligent toilet with Actilight.",
        details:
          "The Neorest XH is TOTO's flagship one-piece intelligent toilet featuring Actilight photocatalytic cleaning, tornado flush, and a fully skirted silhouette.",
        image: "/images/sanitary/products/wc-floor-one-piece.jpg",
        alt: "Toto Neorest XH one-piece intelligent toilet",
        category: "Intelligent Toilets",
        specifications: [
          "Finish: Gloss White",
          "Material: Vitreous China",
          "Flush: Tornado Siphon",
          "Cleaning: Actilight Photocatalytic",
        ],
        priceBdt: 685000,
      },
      {
        id: "toto-ceravenity-basin",
        title: "CERAVENITY VESSEL BASIN",
        description: "Round countertop vessel basin with CeFiONtect finish.",
        details:
          "The Ceravenity vessel basin's CeFiONtect glaze creates an ultra-smooth surface that resists waste and bacteria — paired with a calm Japanese-inspired silhouette.",
        image: "/images/sanitary/products/basin-round-white.jpg",
        alt: "Toto Ceravenity round vessel basin",
        category: "Vessel Basins",
        specifications: [
          "Finish: CeFiONtect White",
          "Material: Fine Ceramic",
          "Dimensions: 460 × 460 × 130 mm",
          "Installation: Countertop",
        ],
        priceBdt: 48000,
      },
      {
        id: "toto-soiree-basin",
        title: "SOIRÉE PEDESTAL BASIN",
        description: "Sculptural pedestal basin with organic Japanese form.",
        details:
          "The Soirée pedestal basin combines a sculptural organic form and CeFiONtect glaze to deliver a serene focal point in boutique hospitality bathrooms.",
        image: "/images/sanitary/products/basin-pedestal-luxury.jpg",
        alt: "Toto Soirée pedestal basin",
        category: "Basins",
        specifications: [
          "Finish: CeFiONtect White",
          "Material: Vitreous China",
          "Installation: Pedestal",
          "Glaze: CeFiONtect",
        ],
        priceBdt: 64000,
      },
      {
        id: "toto-flotation-tub",
        title: "FLOTATION FREESTANDING TUB",
        description: "Deep Japanese-style freestanding bathtub for restorative soaks.",
        details:
          "Designed around the Japanese bathing tradition, the Flotation bathtub offers a deep, narrow silhouette and ergonomic lumbar support for contemplative soaks.",
        image: "/images/sanitary/products/tub-freestanding-oval.jpg",
        alt: "Toto Flotation freestanding bathtub",
        category: "Bathtubs",
        specifications: [
          "Finish: Matte White",
          "Material: Acrylic",
          "Dimensions: 1500 × 750 × 620 mm",
          "Installation: Freestanding",
        ],
        priceBdt: 245000,
      },
      {
        id: "toto-concealed-faucet",
        title: "CONCEALED BASIN FAUCET",
        description: "Wall-mounted basin spout for minimalist tile walls.",
        details:
          "A clean wall-mounted basin spout with TOTO's aerated flow and EcoPower technology — engineered for calm, efficient daily luxury.",
        image: "/images/sanitary/products/faucet-wall-mounted.jpg",
        alt: "Toto concealed wall-mounted basin faucet",
        category: "Faucets",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Brass",
          "Spout Projection: 180 mm",
          "Installation: Wall-Mounted",
        ],
        priceBdt: 56000,
      },
    ],
  },
  {
    slug: "duravit",
    name: "DURAVIT",
    tagline: "Designer Bathroom Ceramics & Aesthetics",
    description:
      "Designer bathroom ceramics and furniture crafted in collaboration with the world's leading industrial designers for expressive, modern bathrooms.",
    bio:
      "Founded in 1817 in Hornberg, Germany, Duravit has become one of the most influential design-led bathroom brands in the world. With long-standing design collaborations with Philippe Starck, Cecilie Manz, and Sebastian Herkner, Duravit crafts ceramic basins, baths, and bathroom furniture that balance sculptural form with everyday practicality.",
    image: "/brands/duravit.jpg",
    banner: "/images/sanitary/luxury-basins-vanities.jpg",
    bannerAlt: "Duravit designer bathroom ceramic interior",
    href: "/sanitary/brands/duravit",
    products: [
      {
        id: "duravit-me-by-starck",
        title: "ME BY STARCK VESSEL BASIN",
        description: "Iconic vessel basin designed by Philippe Starck.",
        details:
          "The ME by Starck basin embodies Philippe Starck's minimal geometric language — a precise rectangular vessel that brings calm architectural clarity to the vanity top.",
        image: "/images/sanitary/products/basin-vessel-marble.jpg",
        alt: "Duravit ME by Starck vessel basin",
        category: "Vessel Basins",
        specifications: [
          "Finish: Gloss White",
          "Material: Vitreous China",
          "Dimensions: 600 × 400 × 145 mm",
          "Designer: Philippe Starck",
        ],
        priceBdt: 52000,
      },
      {
        id: "duravit-luv-basin",
        title: "LUV COUNTERTOP BASIN",
        description: "Soft organic basin designed by Cecilie Manz.",
        details:
          "Cecilie Manz's Luv basin pairs a calm Nordic sensibility with Duravit's signature ceramic quality — an elegant countertop centrepiece for refined bathrooms.",
        image: "/images/sanitary/products/basin-round-white.jpg",
        alt: "Duravit Luv Cecilie Manz basin",
        category: "Vessel Basins",
        specifications: [
          "Finish: Gloss White",
          "Material: Fine Ceramic",
          "Dimensions: 520 × 380 × 145 mm",
          "Designer: Cecilie Manz",
        ],
        priceBdt: 68000,
      },
      {
        id: "duravit-darling-new-bath",
        title: "DARLING NEW BATHTUB",
        description: "Freestanding acrylic bathtub with soft organic form.",
        details:
          "The Darling New bathtub pairs Duravit's signature soft-edge design with a durable acrylic construction for everyday luxury.",
        image: "/images/sanitary/products/tub-freestanding-oval.jpg",
        alt: "Duravit Darling New freestanding bathtub",
        category: "Bathtubs",
        specifications: [
          "Finish: Gloss White",
          "Material: Acrylic",
          "Dimensions: 1700 × 750 × 600 mm",
          "Installation: Freestanding",
        ],
        priceBdt: 195000,
      },
      {
        id: "duravit-viu-bath",
        title: "VIU BATHTUB BY STARCK",
        description: "Architectural freestanding bath designed by Philippe Starck.",
        details:
          "The Viu bathtub by Philippe Starck combines precise geometric architecture with a comfortable interior slope — a defining statement for the modern master bathroom.",
        image: "/images/sanitary/products/tub-freestanding-black.jpg",
        alt: "Duravit Viu bathtub by Philippe Starck",
        category: "Bathtubs",
        specifications: [
          "Finish: Matte White",
          "Material: Acrylic",
          "Dimensions: 1800 × 800 × 600 mm",
          "Designer: Philippe Starck",
        ],
        priceBdt: 285000,
      },
      {
        id: "duravit-starck-faucet",
        title: "STARCK SINGLE-LEVER FAUCET",
        description: "Iconic single-lever faucet designed by Philippe Starck.",
        details:
          "The Starck single-lever faucet pairs an architectural cylindrical body with a precision cartridge for a calm, confident statement at the basin.",
        image: "/images/sanitary/products/faucet-basin-chrome.jpg",
        alt: "Duravit Starck single-lever faucet",
        category: "Faucets",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Brass",
          "Installation: Deck-Mounted",
          "Designer: Philippe Starck",
        ],
        priceBdt: 42000,
      },
      {
        id: "duravit-d-code-shower",
        title: "D-CODE SHOWER SET",
        description: "Concealed shower set with thermostatic control.",
        details:
          "The D-Code shower set combines a thermostatic valve with a 250mm head for calm, reliable daily performance at an accessible price point.",
        image: "/images/sanitary/products/shower-concealed-set.jpg",
        alt: "Duravit D-Code concealed shower set",
        category: "Showers",
        specifications: [
          "Finish: Polished Chrome",
          "Material: Brass",
          "Components: Valve, trim, head",
          "Head Diameter: 250 mm",
        ],
        priceBdt: 72000,
      },
    ],
  },
];

export function getSanitaryBrandBySlug(slug: string): SanitaryBrand | undefined {
  return SANITARY_BRANDS.find((brand) => brand.slug === slug);
}

export function getAllSanitaryBrandSlugs(): string[] {
  return SANITARY_BRANDS.map((brand) => brand.slug);
}

export function formatSanitaryBrandPriceBdt(price: number): string {
  return `৳${price.toLocaleString("en-BD")}`;
}
