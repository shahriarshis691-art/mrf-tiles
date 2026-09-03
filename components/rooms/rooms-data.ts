import { ROOM_CATEGORIES } from "@/lib/roomCategories";

export const ROOM_FILTER_OPTIONS = {
  finish: ["Matte", "Glossy", "Polished", "Satin", "Structured", "Textured"],
  size: ["600x600", "600x1200", "1200x2400", "800x1600", "1200x1200"],
  material: [
    "Porcelain Tile",
    "Porcelain Slab",
    "Technical Porcelain",
    "Antislip",
    "Eco Tile Antibacteria",
  ],
  color: ["Ivory", "Beige", "Grey", "Charcoal", "White", "Black", "Sand"],
} as const;

export type RoomFilterId = keyof typeof ROOM_FILTER_OPTIONS;

export type RoomProduct = {
  id: string;
  name: string;
  finish: string;
  size: string;
  material: string;
  color: string;
  image: string;
  alt: string;
};

const FINISH_BY_ROOM: Record<string, string[]> = {
  "living-room": ["Matte", "Polished", "Satin", "Glossy"],
  bathroom: ["Matte", "Glossy", "Satin"],
  bedroom: ["Matte", "Satin"],
  kitchen: ["Polished", "Satin", "Matte"],
  balcony: ["Structured", "Textured", "Matte"],
  outdoor: ["Structured", "Textured"],
};

const SIZE_BY_ROOM: Record<string, string[]> = {
  "living-room": ["600x1200", "1200x2400", "800x1600"],
  bathroom: ["600x600", "600x1200", "1200x1200"],
  bedroom: ["600x1200", "800x1600"],
  kitchen: ["600x1200", "1200x2400"],
  balcony: ["600x1200", "800x1600"],
  outdoor: ["600x600", "600x1200", "1200x2400"],
};

const MATERIAL_BY_ROOM: Record<string, string[]> = {
  "living-room": ["Porcelain Slab", "Porcelain Tile", "Technical Porcelain"],
  bathroom: ["Porcelain Tile", "Eco Tile Antibacteria"],
  bedroom: ["Porcelain Tile", "Porcelain Slab"],
  kitchen: ["Porcelain Slab", "Technical Porcelain", "Porcelain Tile"],
  balcony: ["Technical Porcelain", "Antislip", "Porcelain Tile"],
  outdoor: ["Antislip", "Technical Porcelain"],
};

const COLOR_POOL = ["Ivory", "Beige", "Grey", "Charcoal", "White", "Black", "Sand"] as const;

const TILE_IMAGE_POOL = [
  "/images/collection/modern-dark.jpg",
  "/images/collection/natural-luxury.jpg",
  "/images/collection/urban-elegance.jpg",
  "/images/projects/architectural-tile-experience.jpg",
  "/images/projects/modern-residence.jpg",
  "/images/projects/minimalist-living-space.jpg",
  "/images/projects/contemporary-kitchen.jpg",
  "/images/projects/luxury-villa.jpg",
  "/images/projects/urban-commercial-space.jpg",
  "/images/projects/premium-hospitality-interior.jpg",
  "/images/projects/mrf-experience-showroom.jpg",
  "/images/projects/modern-sanitary-space.jpg",
  "/images/villa-sun.jpg",
];

const SAMPLE_NAMES = [
  "STATEMENT",
  "ATELIER",
  "CALACATTA",
  "PIETRA",
  "LINEN",
  "OBSIDIAN",
  "MARQUEE",
  "VERONA",
  "ONYX",
  "ALABASTER",
  "QUARZITE",
  "RIVIERA",
];

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function pick<T>(arr: readonly T[], seed: number): T {
  return arr[Math.floor(pseudoRandom(seed) * arr.length)];
}

function buildRoomProducts(roomId: string): RoomProduct[] {
  const finishes = FINISH_BY_ROOM[roomId] ?? ["Matte"];
  const sizes = SIZE_BY_ROOM[roomId] ?? ["600x1200"];
  const materials = MATERIAL_BY_ROOM[roomId] ?? ["Porcelain Tile"];

  const count = 9;
  const roomIndex = ROOM_CATEGORIES.findIndex((r) => r.id === roomId);

  return Array.from({ length: count }, (_, i) => {
    const seed = roomIndex * 17 + i * 7 + 1;
    const finish = pick(finishes, seed + 1);
    const size = pick(sizes, seed + 2);
    const material = pick(materials, seed + 3);
    const color = pick(COLOR_POOL, seed + 4);
    const image = pick(TILE_IMAGE_POOL, seed + 5);
    const name = pick(SAMPLE_NAMES, seed + 6);
    const id = `${roomId}-${i + 1}`;

    return {
      id,
      name: `${name} ${size.replace("x", "×")}`,
      finish,
      size,
      material,
      color,
      image,
      alt: `${color} ${finish.toLowerCase()} ${material.toLowerCase()} sample for ${roomId.replace("-", " ")}`,
    };
  });
}

export const ROOM_PRODUCTS: Record<string, RoomProduct[]> = Object.fromEntries(
  ROOM_CATEGORIES.map((room) => [room.id, buildRoomProducts(room.id)]),
);

export function getRoomProducts(roomId: string): RoomProduct[] {
  return ROOM_PRODUCTS[roomId] ?? [];
}
