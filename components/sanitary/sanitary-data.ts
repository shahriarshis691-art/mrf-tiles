export type SanitaryCategory = {
  id: string;
  label: string;
  description: string;
  image: string;
  alt: string;
  imagePosition?: string;
};

export type SanitaryListingItem = {
  id: string;
  categoryId: string;
  label: string;
  description: string;
  details: string;
  image: string;
  alt: string;
  finish: string;
  material: string;
  dimensions: string;
  priceBdt: number;
};

export const SANITARY_CATEGORIES: SanitaryCategory[] = [
  {
    id: "basins-vanities",
    label: "BASINS & VANITIES",
    description:
      "Sculptural basins and vanity units crafted for refined bathroom interiors.",
    image: "/images/sanitary/luxury-basins-vanities.jpg",
    alt: "Luxury designer basin and vanity with marble countertop and gold fixtures",
    imagePosition: "object-[center_35%]",
  },
  {
    id: "water-closets",
    label: "WATER CLOSETS",
    description:
      "Wall-hung and floor-mounted solutions combining hygiene with quiet luxury.",
    image: "/images/sanitary/luxury-water-closets.jpg",
    alt: "Luxury wall-hung water closet in dark marble bathroom",
    imagePosition: "object-[center_45%]",
  },
  {
    id: "showers-faucets",
    label: "SHOWERS & FAUCETS",
    description:
      "Rainfall showers, mixer taps, and fittings engineered for daily performance.",
    image: "/images/sanitary/luxury-showers-faucets.jpg",
    alt: "Luxury rainfall shower with brushed gold fixtures in dark marble bathroom",
    imagePosition: "object-[center_40%]",
  },
  {
    id: "bathtubs-spa",
    label: "BATHTUBS & SPA",
    description:
      "Freestanding tubs and spa-inspired fixtures for restorative bathing experiences.",
    image: "/images/sanitary/luxury-bathtubs-spa.jpg",
    alt: "Luxury freestanding bathtub in spa bathroom with natural light",
    imagePosition: "object-[center_45%]",
  },
];

export const BASIN_VANITY_PRODUCTS: SanitaryListingItem[] = [
  {
    id: "galaxy-marble-vessel",
    categoryId: "basins-vanities",
    label: "GALAXY MARBLE VESSEL",
    description: "Hand-finished marble vessel basin with soft organic rim profile.",
    details:
      "Premium natural marble vessel basin suitable for countertop installation. Includes overflow-ready design and polished interior surface for easy maintenance.",
    image: "/images/sanitary/products/basin-vessel-marble.jpg",
    alt: "Galaxy marble vessel basin on dark countertop",
    finish: "Polished Marble",
    material: "Natural Marble",
    dimensions: "420 × 420 × 145 mm",
    priceBdt: 45000,
  },
  {
    id: "aurora-wall-hung-gold",
    categoryId: "basins-vanities",
    label: "AURORA WALL-HUNG",
    description: "Slim-profile wall-hung basin with brushed gold faucet pairing.",
    details:
      "Ceramic wall-hung basin with concealed fixing system. Ideal for compact luxury bathrooms and powder rooms with premium brassware compatibility.",
    image: "/images/sanitary/products/basin-wall-hung-gold.jpg",
    alt: "Aurora wall-hung basin with gold faucet",
    finish: "Gloss White",
    material: "Vitreous China",
    dimensions: "550 × 400 × 120 mm",
    priceBdt: 38500,
  },
  {
    id: "eclipse-floating-800",
    categoryId: "basins-vanities",
    label: "ECLIPSE FLOATING 800",
    description: "Dark fluted floating vanity with marble top and undermount basin.",
    details:
      "800mm floating vanity unit with soft-close drawers, integrated undermount basin, and pre-cut tap deck. Includes mounting hardware and overflow kit.",
    image: "/images/sanitary/products/basin-floating-vanity.jpg",
    alt: "Eclipse 800mm floating vanity with marble top",
    finish: "Matte Charcoal",
    material: "Marble + Lacquer",
    dimensions: "800 × 460 × 520 mm",
    priceBdt: 125000,
  },
  {
    id: "luna-double-suite",
    categoryId: "basins-vanities",
    label: "LUNA DOUBLE SUITE",
    description: "Dual-basin vanity suite for master bathrooms and luxury suites.",
    details:
      "Double undermount basin configuration with seamless marble countertop, dual tap holes, and concealed storage modules for shared bathroom layouts.",
    image: "/images/sanitary/products/basin-double-vanity.jpg",
    alt: "Luna double basin vanity suite",
    finish: "Polished Stone",
    material: "Marble Composite",
    dimensions: "1200 × 500 × 520 mm",
    priceBdt: 198000,
  },
  {
    id: "onyx-undermount-oval",
    categoryId: "basins-vanities",
    label: "ONYX UNDERMOUNT OVAL",
    description: "Oval undermount ceramic basin for stone and solid-surface tops.",
    details:
      "Undermount oval basin with anti-stain glaze and smooth basin floor. Designed for seamless integration with vanity countertops and stone fabricators.",
    image: "/images/sanitary/products/basin-undermount-oval.jpg",
    alt: "Onyx oval undermount basin in granite top",
    finish: "Satin White",
    material: "Ceramic",
    dimensions: "580 × 380 × 170 mm",
    priceBdt: 32000,
  },
  {
    id: "royal-carrara-block",
    categoryId: "basins-vanities",
    label: "ROYAL CARRARA BLOCK",
    description: "Rectangular basin carved from a single Carrara marble block.",
    details:
      "Monolithic Carrara marble basin with chiseled exterior and honed interior bowl. Each piece features unique natural veining for one-of-a-kind interiors.",
    image: "/images/sanitary/products/basin-carrara-stone.jpg",
    alt: "Royal Carrara block basin carved from marble",
    finish: "Honed Carrara",
    material: "Carrara Marble",
    dimensions: "600 × 400 × 130 mm",
    priceBdt: 52000,
  },
  {
    id: "zen-matte-black-vessel",
    categoryId: "basins-vanities",
    label: "ZEN MATTE BLACK VESSEL",
    description: "Square matte black vessel basin for contemporary bathroom schemes.",
    details:
      "Statement matte black vessel basin with refined square geometry. Resistant to surface marks and suited for contrast-led luxury bathroom palettes.",
    image: "/images/sanitary/products/basin-matte-black.jpg",
    alt: "Zen matte black square vessel basin",
    finish: "Matte Black",
    material: "Fine Ceramic",
    dimensions: "400 × 400 × 120 mm",
    priceBdt: 41000,
  },
  {
    id: "crystal-glass-vessel",
    categoryId: "basins-vanities",
    label: "CRYSTAL GLASS VESSEL",
    description: "Amber-tinted glass vessel basin with luminous depth and clarity.",
    details:
      "Tempered glass vessel basin with warm amber tone. Creates a jewel-like focal point on marble or stone vanity counters in boutique hospitality spaces.",
    image: "/images/sanitary/products/basin-glass-vessel.jpg",
    alt: "Crystal amber glass vessel basin",
    finish: "Tinted Glass",
    material: "Tempered Glass",
    dimensions: "380 × 380 × 130 mm",
    priceBdt: 48000,
  },
  {
    id: "heritage-pedestal",
    categoryId: "basins-vanities",
    label: "HERITAGE PEDESTAL",
    description: "Classic sculptural pedestal basin with timeless ceramic form.",
    details:
      "Full pedestal basin with generous bowl volume and refined pedestal column. Suitable for traditional and transitional luxury bathroom interiors.",
    image: "/images/sanitary/products/basin-pedestal-luxury.jpg",
    alt: "Heritage classic pedestal basin",
    finish: "Gloss White",
    material: "Vitreous China",
    dimensions: "660 × 520 × 850 mm",
    priceBdt: 36000,
  },
  {
    id: "nova-integrated-600",
    categoryId: "basins-vanities",
    label: "NOVA INTEGRATED 600",
    description: "Compact integrated vanity and basin unit for refined guest baths.",
    details:
      "600mm integrated vanity with single drawer, ceramic top basin, and pre-drilled tap hole. Space-efficient solution without compromising premium detailing.",
    image: "/images/sanitary/products/basin-integrated-600.jpg",
    alt: "Nova 600mm integrated vanity basin unit",
    finish: "Gloss White",
    material: "Lacquer + Ceramic",
    dimensions: "600 × 420 × 500 mm",
    priceBdt: 89000,
  },
  {
    id: "prestige-semi-recessed",
    categoryId: "basins-vanities",
    label: "PRESTIGE SEMI-RECESSED",
    description: "Semi-recessed oval basin for stone vanity countertops.",
    details:
      "Semi-recessed basin with slim rim profile for stone and solid-surface fabrication. Offers a clean inset look with simplified countertop detailing.",
    image: "/images/sanitary/products/basin-semi-recessed.jpg",
    alt: "Prestige semi-recessed oval basin",
    finish: "Satin White",
    material: "Ceramic",
    dimensions: "500 × 420 × 160 mm",
    priceBdt: 29500,
  },
  {
    id: "opal-round-vessel",
    categoryId: "basins-vanities",
    label: "OPAL ROUND VESSEL",
    description: "Round white vessel basin with smooth rim and compact footprint.",
    details:
      "Round countertop vessel basin with uniform glaze and compact diameter. Ideal for powder rooms, guest bathrooms, and ensuite vanity niches.",
    image: "/images/sanitary/products/basin-round-white.jpg",
    alt: "Opal round white vessel basin",
    finish: "Gloss White",
    material: "Fine Ceramic",
    dimensions: "360 × 360 × 120 mm",
    priceBdt: 34000,
  },
  {
    id: "titan-stone-vanity-900",
    categoryId: "basins-vanities",
    label: "TITAN STONE 900",
    description: "900mm travertine-top vanity with vessel basin and open storage.",
    details:
      "Wide stone vanity unit with natural travertine top, vessel basin, and open lower shelf. Brings organic texture to spa-inspired bathroom environments.",
    image: "/images/sanitary/products/basin-stone-vanity-900.jpg",
    alt: "Titan 900mm stone vanity with vessel basin",
    finish: "Natural Travertine",
    material: "Stone + Oak",
    dimensions: "900 × 480 × 540 mm",
    priceBdt: 145000,
  },
  {
    id: "serene-console-wall",
    categoryId: "basins-vanities",
    label: "SERENE CONSOLE WALL",
    description: "Wall console basin with stone shelf and designer tap deck.",
    details:
      "Wall-mounted console basin with integrated stone shelf for accessories. Creates an architectural focal point against large-format tile wall surfaces.",
    image: "/images/sanitary/products/basin-console-wall.jpg",
    alt: "Serene wall console basin with stone shelf",
    finish: "Honed Stone",
    material: "Stone + Ceramic",
    dimensions: "720 × 450 × 180 mm",
    priceBdt: 42500,
  },
  {
    id: "grand-master-double",
    categoryId: "basins-vanities",
    label: "GRAND MASTER DOUBLE",
    description: "Flagship 1400mm double vanity for luxury master suites.",
    details:
      "Grand double vanity with full marble top, twin undermount basins, dual gold tap positions, and four soft-close drawers for premium master bathrooms.",
    image: "/images/sanitary/products/basin-grand-double.jpg",
    alt: "Grand Master double vanity 1400mm",
    finish: "Polished Marble",
    material: "Marble + Lacquer",
    dimensions: "1400 × 520 × 540 mm",
    priceBdt: 265000,
  },
];

export const WATER_CLOSET_PRODUCTS: SanitaryListingItem[] = [
  {
    id: "galaxy-wall-hung-rimless",
    categoryId: "water-closets",
    label: "GALAXY WALL-HUNG RIMLESS",
    description: "Slim rimless wall-hung WC with soft-close seat and concealed fixings.",
    details:
      "Rimless wall-hung water closet with antibacterial glaze, soft-close slim seat, and compatible with standard concealed cistern frames.",
    image: "/images/sanitary/products/wc-wall-hung-rimless.jpg",
    alt: "Galaxy wall-hung rimless water closet",
    finish: "Gloss White",
    material: "Vitreous China",
    dimensions: "520 × 360 × 330 mm",
    priceBdt: 42000,
  },
  {
    id: "aurora-one-piece-floor",
    categoryId: "water-closets",
    label: "AURORA ONE-PIECE FLOOR",
    description: "Seamless one-piece floor WC with quiet dual-flush mechanism.",
    details:
      "One-piece floor-mounted WC with fully skirted base, rimless bowl, and quiet dual-flush cistern for easy cleaning and refined bathroom lines.",
    image: "/images/sanitary/products/wc-floor-one-piece.jpg",
    alt: "Aurora one-piece floor water closet",
    finish: "Gloss White",
    material: "Vitreous China",
    dimensions: "680 × 380 × 780 mm",
    priceBdt: 38500,
  },
  {
    id: "eclipse-matte-black-hung",
    categoryId: "water-closets",
    label: "ECLIPSE MATTE BLACK",
    description: "Designer matte black wall-hung WC for bold contemporary bathrooms.",
    details:
      "Statement matte black wall-hung WC with rimless bowl technology and quick-release soft-close seat for high-contrast luxury interiors.",
    image: "/images/sanitary/products/wc-wall-hung-black.jpg",
    alt: "Eclipse matte black wall-hung water closet",
    finish: "Matte Black",
    material: "Fine Ceramic",
    dimensions: "510 × 355 × 320 mm",
    priceBdt: 58000,
  },
  {
    id: "luna-back-to-wall",
    categoryId: "water-closets",
    label: "LUNA BACK-TO-WALL",
    description: "Back-to-wall floor WC with concealed trapway and compact projection.",
    details:
      "Back-to-wall floor WC with fully concealed plumbing zone and slim tank profile. Ideal for modern bathrooms requiring clean floor lines.",
    image: "/images/sanitary/products/wc-back-to-wall.jpg",
    alt: "Luna back-to-wall floor water closet",
    finish: "Gloss White",
    material: "Vitreous China",
    dimensions: "650 × 370 × 760 mm",
    priceBdt: 44500,
  },
  {
    id: "nova-smart-bidet",
    categoryId: "water-closets",
    label: "NOVA SMART BIDET",
    description: "Smart WC with integrated bidet wash, dry, and heated seat functions.",
    details:
      "Premium smart water closet with rear and front wash modes, warm air dry, heated seat, and remote control for spa-grade bathroom comfort.",
    image: "/images/sanitary/products/wc-smart-bidet.jpg",
    alt: "Nova smart bidet water closet",
    finish: "Gloss White",
    material: "Ceramic + Electronics",
    dimensions: "700 × 400 × 520 mm",
    priceBdt: 185000,
  },
  {
    id: "zen-compact-wall-hung",
    categoryId: "water-closets",
    label: "ZEN COMPACT WALL-HUNG",
    description: "Space-saving wall-hung WC for ensuite and guest bathroom layouts.",
    details:
      "Compact wall-hung WC with reduced projection depth, rimless flush, and soft-close seat suited for smaller luxury bathroom footprints.",
    image: "/images/sanitary/products/wc-compact-wall-hung.jpg",
    alt: "Zen compact wall-hung water closet",
    finish: "Gloss White",
    material: "Vitreous China",
    dimensions: "480 × 340 × 300 mm",
    priceBdt: 36500,
  },
  {
    id: "royal-rimless-floor",
    categoryId: "water-closets",
    label: "ROYAL RIMLESS FLOOR",
    description: "Full rimless floor WC with powerful hygiene flush and quiet operation.",
    details:
      "Rimless floor-standing WC with tornado flush technology, soft-close seat, and easy-clean ceramic surfaces for daily hygiene performance.",
    image: "/images/sanitary/products/wc-rimless-floor.jpg",
    alt: "Royal rimless floor water closet",
    finish: "Gloss White",
    material: "Vitreous China",
    dimensions: "670 × 380 × 770 mm",
    priceBdt: 41000,
  },
  {
    id: "prestige-concealed-suite",
    categoryId: "water-closets",
    label: "PRESTIGE CONCEALED SUITE",
    description: "Wall-hung WC suite with concealed cistern frame for architectural installs.",
    details:
      "Complete wall-hung WC suite including ceramic pan, soft-close seat, and heavy-duty concealed cistern frame for in-wall installation.",
    image: "/images/sanitary/products/wc-concealed-cistern.jpg",
    alt: "Prestige concealed cistern water closet suite",
    finish: "Gloss White",
    material: "Ceramic + Steel Frame",
    dimensions: "530 × 365 × 330 mm pan",
    priceBdt: 72000,
  },
  {
    id: "heritage-designer-floor",
    categoryId: "water-closets",
    label: "HERITAGE DESIGNER FLOOR",
    description: "Sculptural designer floor WC with matte white ceramic finish.",
    details:
      "Designer floor WC with organic bowl form, matte white finish, and concealed fixings for boutique hotel and high-end residential bathrooms.",
    image: "/images/sanitary/products/wc-designer-floor.jpg",
    alt: "Heritage designer floor water closet",
    finish: "Matte White",
    material: "Fine Ceramic",
    dimensions: "690 × 390 × 790 mm",
    priceBdt: 49500,
  },
  {
    id: "serene-close-coupled",
    categoryId: "water-closets",
    label: "SERENE CLOSE COUPLED",
    description: "Classic close-coupled WC with soft-close seat and efficient dual flush.",
    details:
      "Close-coupled water closet with compact cistern, soft-close seat, and dual flush plate for reliable performance in family bathroom environments.",
    image: "/images/sanitary/products/wc-close-coupled.jpg",
    alt: "Serene close coupled water closet",
    finish: "Gloss White",
    material: "Vitreous China",
    dimensions: "640 × 360 × 740 mm",
    priceBdt: 33500,
  },
];

export const SHOWER_FAUCET_PRODUCTS: SanitaryListingItem[] = [
  {
    id: "galaxy-rainfall-gold",
    categoryId: "showers-faucets",
    label: "GALAXY RAINFALL GOLD",
    description: "Square rainfall shower head in brushed gold with soft water diffusion.",
    details:
      "300mm square rainfall shower head with silicone nozzles and anti-lime scale technology. Compatible with ceiling or wall arm installation.",
    image: "/images/sanitary/products/shower-rainfall-gold.jpg",
    alt: "Galaxy brushed gold rainfall shower head",
    finish: "Brushed Gold",
    material: "Brass",
    dimensions: "300 × 300 × 12 mm",
    priceBdt: 28500,
  },
  {
    id: "aurora-thermostatic-set",
    categoryId: "showers-faucets",
    label: "AURORA THERMOSTATIC SET",
    description: "Thermostatic shower system with rainfall head and hand shower kit.",
    details:
      "Complete thermostatic shower set with overhead rainfall, hand shower, hose, and diverter. Temperature-safe valve for family bathroom use.",
    image: "/images/sanitary/products/shower-thermostatic-set.jpg",
    alt: "Aurora thermostatic shower set with hand shower",
    finish: "Brushed Gold",
    material: "Brass",
    dimensions: "300 mm head + hand shower",
    priceBdt: 56000,
  },
  {
    id: "eclipse-basin-mixer-gold",
    categoryId: "showers-faucets",
    label: "ECLIPSE BASIN MIXER GOLD",
    description: "Single-lever basin mixer with refined spout in brushed gold finish.",
    details:
      "Deck-mounted single-lever basin mixer with ceramic cartridge, water-saving aerator, and smooth lever operation for daily luxury use.",
    image: "/images/sanitary/products/faucet-basin-gold.jpg",
    alt: "Eclipse brushed gold basin mixer tap",
    finish: "Brushed Gold",
    material: "Brass",
    dimensions: "180 × 50 × 160 mm",
    priceBdt: 22500,
  },
  {
    id: "luna-basin-mixer-chrome",
    categoryId: "showers-faucets",
    label: "LUNA BASIN MIXER CHROME",
    description: "Minimal chrome basin mixer with clean lines and precise flow control.",
    details:
      "Polished chrome basin mixer with slim profile spout, ceramic disc valve, and easy-clean surface for contemporary bathroom schemes.",
    image: "/images/sanitary/products/faucet-basin-chrome.jpg",
    alt: "Luna chrome basin mixer tap",
    finish: "Polished Chrome",
    material: "Brass",
    dimensions: "175 × 48 × 155 mm",
    priceBdt: 18500,
  },
  {
    id: "nova-hand-shower-kit",
    categoryId: "showers-faucets",
    label: "NOVA HAND SHOWER KIT",
    description: "Premium hand shower with multi-mode spray and sliding bracket.",
    details:
      "Hand shower kit with three spray modes, 1.5m stainless hose, and adjustable wall bracket. Ideal as shower upgrade or bath shower combo.",
    image: "/images/sanitary/products/shower-handheld-set.jpg",
    alt: "Nova hand shower kit with hose and bracket",
    finish: "Polished Chrome",
    material: "Brass + Stainless",
    dimensions: "120 × 85 mm head",
    priceBdt: 16500,
  },
  {
    id: "zen-ceiling-rain-400",
    categoryId: "showers-faucets",
    label: "ZEN CEILING RAIN 400",
    description: "Ultra-thin 400mm ceiling rainfall shower head for spa-like flow.",
    details:
      "400mm square ultra-thin ceiling shower head with even water distribution and concealed mounting plate for flush ceiling integration.",
    image: "/images/sanitary/products/shower-ceiling-rain.jpg",
    alt: "Zen 400mm ceiling rainfall shower head",
    finish: "Polished Chrome",
    material: "Stainless Steel",
    dimensions: "400 × 400 × 8 mm",
    priceBdt: 32000,
  },
  {
    id: "royal-wall-spout-set",
    categoryId: "showers-faucets",
    label: "ROYAL WALL SPOUT SET",
    description: "Wall-mounted spout with cross-handle controls in brushed nickel.",
    details:
      "Wall-mounted basin spout set with separate cross-handle hot and cold controls. Creates an architectural tap arrangement on tiled walls.",
    image: "/images/sanitary/products/faucet-wall-mounted.jpg",
    alt: "Royal wall-mounted spout and handle set",
    finish: "Brushed Nickel",
    material: "Brass",
    dimensions: "220 mm spout projection",
    priceBdt: 34500,
  },
  {
    id: "prestige-spa-column",
    categoryId: "showers-faucets",
    label: "PRESTIGE SPA COLUMN",
    description: "Full-height spa shower column with body jets and rainfall head.",
    details:
      "Spa shower column with thermostatic control, rainfall head, hand shower, and six body jets for wellness-focused bathroom environments.",
    image: "/images/sanitary/products/shower-column-spa.jpg",
    alt: "Prestige spa shower column with body jets",
    finish: "Brushed Nickel",
    material: "Stainless Steel",
    dimensions: "2200 × 300 × 120 mm",
    priceBdt: 98000,
  },
  {
    id: "heritage-matte-black-mixer",
    categoryId: "showers-faucets",
    label: "HERITAGE MATTE BLACK",
    description: "Matte black basin mixer for contrast-led luxury bathroom palettes.",
    details:
      "Single-lever matte black basin mixer with fingerprint-resistant coating, ceramic cartridge, and coordinated luxury bathroom styling.",
    image: "/images/sanitary/products/faucet-matte-black.jpg",
    alt: "Heritage matte black basin mixer tap",
    finish: "Matte Black",
    material: "Brass",
    dimensions: "185 × 52 × 165 mm",
    priceBdt: 24500,
  },
  {
    id: "serene-concealed-shower",
    categoryId: "showers-faucets",
    label: "SERENE CONCEALED SHOWER",
    description: "Concealed shower set with rainfall head and minimalist wall plate.",
    details:
      "Concealed shower valve with rainfall head, diverter, and slim wall plate for clean tiled shower walls and architectural bathroom detailing.",
    image: "/images/sanitary/products/shower-concealed-set.jpg",
    alt: "Serene concealed shower set with rainfall head",
    finish: "Matte Black + Chrome",
    material: "Brass",
    dimensions: "250 × 250 mm head",
    priceBdt: 48500,
  },
];

export const BATHTUB_SPA_PRODUCTS: SanitaryListingItem[] = [
  {
    id: "galaxy-freestanding-oval",
    categoryId: "bathtubs-spa",
    label: "GALAXY FREESTANDING OVAL",
    description: "Sculptural oval freestanding tub with smooth gloss white finish.",
    details:
      "Premium acrylic freestanding bathtub with ergonomic backrest, slip-resistant base, and pre-drilled overflow trim for luxury master bathrooms.",
    image: "/images/sanitary/products/tub-freestanding-oval.jpg",
    alt: "Galaxy oval freestanding bathtub",
    finish: "Gloss White",
    material: "Acrylic",
    dimensions: "1700 × 800 × 580 mm",
    priceBdt: 175000,
  },
  {
    id: "aurora-stone-resin",
    categoryId: "bathtubs-spa",
    label: "AURORA STONE RESIN",
    description: "Matte stone resin freestanding tub with organic sculptural form.",
    details:
      "Solid stone resin freestanding bathtub with matte surface, excellent heat retention, and refined silhouette for spa-inspired interiors.",
    image: "/images/sanitary/products/tub-stone-resin.jpg",
    alt: "Aurora stone resin freestanding bathtub",
    finish: "Matte White",
    material: "Stone Resin",
    dimensions: "1650 × 750 × 560 mm",
    priceBdt: 245000,
  },
  {
    id: "eclipse-whirlpool-corner",
    categoryId: "bathtubs-spa",
    label: "ECLIPSE WHIRLPOOL CORNER",
    description: "Corner whirlpool tub with hydrotherapy jets and ergonomic seating.",
    details:
      "Corner whirlpool bathtub with multi-point massage jets, digital control panel, and integrated overflow for wellness-focused bathroom layouts.",
    image: "/images/sanitary/products/tub-whirlpool-corner.jpg",
    alt: "Eclipse corner whirlpool bathtub",
    finish: "Gloss White",
    material: "Acrylic",
    dimensions: "1500 × 1500 × 650 mm",
    priceBdt: 320000,
  },
  {
    id: "luna-matte-black-tub",
    categoryId: "bathtubs-spa",
    label: "LUNA MATTE BLACK",
    description: "Statement matte black freestanding tub for dramatic bathroom schemes.",
    details:
      "Designer matte black freestanding bathtub with double-skinned acrylic construction and floor-mounted tap compatibility for bold luxury spaces.",
    image: "/images/sanitary/products/tub-freestanding-black.jpg",
    alt: "Luna matte black freestanding bathtub",
    finish: "Matte Black",
    material: "Acrylic",
    dimensions: "1600 × 780 × 560 mm",
    priceBdt: 198000,
  },
  {
    id: "nova-drop-in-deck",
    categoryId: "bathtubs-spa",
    label: "NOVA DROP-IN DECK",
    description: "Rectangular drop-in tub for stone or tile deck installations.",
    details:
      "Drop-in rectangular bathtub designed for custom deck surrounds with tiled or stone cladding and concealed rim mounting.",
    image: "/images/sanitary/products/tub-drop-in-rect.jpg",
    alt: "Nova drop-in deck bathtub",
    finish: "Gloss White",
    material: "Acrylic",
    dimensions: "1800 × 900 × 480 mm",
    priceBdt: 142000,
  },
  {
    id: "zen-deep-soaking",
    categoryId: "bathtubs-spa",
    label: "ZEN DEEP SOAKING",
    description: "Deep soaking tub inspired by Japanese ofuro bathing traditions.",
    details:
      "Compact deep soaking bathtub with upright seating posture and minimal water volume for restorative bathing in smaller luxury bathrooms.",
    image: "/images/sanitary/products/tub-soaking-deep.jpg",
    alt: "Zen deep soaking bathtub",
    finish: "Matte White",
    material: "Solid Surface",
    dimensions: "1200 × 1200 × 650 mm",
    priceBdt: 165000,
  },
  {
    id: "royal-double-ended",
    categoryId: "bathtubs-spa",
    label: "ROYAL DOUBLE ENDED",
    description: "Double-ended freestanding tub with central tap deck position.",
    details:
      "Double-ended freestanding bathtub allowing entry from both sides with central tap ledge, ideal for shared master bathroom layouts.",
    image: "/images/sanitary/products/tub-double-ended.jpg",
    alt: "Royal double ended freestanding bathtub",
    finish: "Gloss White",
    material: "Acrylic",
    dimensions: "1750 × 800 × 580 mm",
    priceBdt: 188000,
  },
  {
    id: "prestige-spa-chromotherapy",
    categoryId: "bathtubs-spa",
    label: "PRESTIGE SPA CHROMOTHERAPY",
    description: "Spa bathtub with air jets, LED chromotherapy, and digital controls.",
    details:
      "Full spa bathtub with air bubble system, colour therapy lighting, and digital control panel for hotel-grade wellness experiences at home.",
    image: "/images/sanitary/products/tub-spa-chromotherapy.jpg",
    alt: "Prestige spa chromotherapy bathtub",
    finish: "Gloss White",
    material: "Acrylic + Electronics",
    dimensions: "1800 × 900 × 620 mm",
    priceBdt: 385000,
  },
  {
    id: "heritage-clawfoot",
    categoryId: "bathtubs-spa",
    label: "HERITAGE CLAWFOOT",
    description: "Classic clawfoot freestanding tub with timeless rolled rim profile.",
    details:
      "Heritage clawfoot bathtub with cast-style feet, rolled rim, and glossy enamel finish for traditional and transitional luxury bathrooms.",
    image: "/images/sanitary/products/tub-clawfoot-classic.jpg",
    alt: "Heritage classic clawfoot bathtub",
    finish: "Gloss White",
    material: "Acrylic",
    dimensions: "1700 × 750 × 600 mm",
    priceBdt: 155000,
  },
  {
    id: "serene-compact-1500",
    categoryId: "bathtubs-spa",
    label: "SERENE COMPACT 1500",
    description: "Compact 1500mm freestanding tub for ensuite and guest bathrooms.",
    details:
      "Space-efficient freestanding bathtub with slim footprint, comfortable depth, and floor-level waste for compact luxury bathroom planning.",
    image: "/images/sanitary/products/tub-compact-freestanding.jpg",
    alt: "Serene compact 1500 freestanding bathtub",
    finish: "Gloss White",
    material: "Acrylic",
    dimensions: "1500 × 700 × 520 mm",
    priceBdt: 128000,
  },
];

export const SANITARY_LISTINGS: SanitaryListingItem[] = [
  ...BASIN_VANITY_PRODUCTS,
  ...WATER_CLOSET_PRODUCTS,
  ...SHOWER_FAUCET_PRODUCTS,
  ...BATHTUB_SPA_PRODUCTS,
];

export function getSanitaryCategoryBySlug(
  slug: string,
): SanitaryCategory | undefined {
  return SANITARY_CATEGORIES.find((category) => category.id === slug);
}

export function getSanitaryListingsByCategory(
  categoryId: string,
): SanitaryListingItem[] {
  return SANITARY_LISTINGS.filter((item) => item.categoryId === categoryId);
}

export function getSanitaryProductById(
  id: string,
): SanitaryListingItem | undefined {
  return SANITARY_LISTINGS.find((item) => item.id === id);
}
