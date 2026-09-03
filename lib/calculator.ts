export type TileSize = {
  id: string;
  label: string;
  widthMm: number;
  heightMm: number;
  thicknessMm: number;
  ratePerSqft: number;
  tilesPerBox: number;
};

export const TILE_SIZES: TileSize[] = [
  {
    id: "3200x1600x12",
    label: "3200 × 1600 mm",
    widthMm: 3200,
    heightMm: 1600,
    thicknessMm: 12,
    ratePerSqft: 520,
    tilesPerBox: 1,
  },
  {
    id: "1200x2400x12",
    label: "1200 × 2400 mm",
    widthMm: 1200,
    heightMm: 2400,
    thicknessMm: 12,
    ratePerSqft: 420,
    tilesPerBox: 2,
  },
  {
    id: "2700x1200x10",
    label: "2700 × 1200 mm",
    widthMm: 2700,
    heightMm: 1200,
    thicknessMm: 10,
    ratePerSqft: 380,
    tilesPerBox: 2,
  },
  {
    id: "3200x1600x6",
    label: "3200 × 1600 mm (Décor)",
    widthMm: 3200,
    heightMm: 1600,
    thicknessMm: 6,
    ratePerSqft: 340,
    tilesPerBox: 1,
  },
  {
    id: "2700x1200x9",
    label: "2700 × 1200 mm",
    widthMm: 2700,
    heightMm: 1200,
    thicknessMm: 9,
    ratePerSqft: 350,
    tilesPerBox: 2,
  },
  {
    id: "2400x1200x9",
    label: "2400 × 1200 mm",
    widthMm: 2400,
    heightMm: 1200,
    thicknessMm: 9,
    ratePerSqft: 320,
    tilesPerBox: 2,
  },
];

export type WastagePreset = {
  id: string;
  label: string;
  rate: number;
  description: string;
};

export const WASTAGE_PRESETS: WastagePreset[] = [
  { id: "standard", label: "Standard Floor", rate: 0.05, description: "Rectified tiles on flat substrate" },
  { id: "diagonal", label: "Diagonal / Complex", rate: 0.10, description: "Patterned layouts, diagonal laying" },
  { id: "sanitary", label: "Sanitary / Wall", rate: 0.08, description: "Wall cladding, sanitary areas" },
];

export type Unit = "sqft" | "sqm";

export type CalculatorState = {
  length: number;
  width: number;
  unit: Unit;
  tileSizeId: string;
  wastagePresetId: string;
};

export type CalculatorResult = {
  areaSqft: number;
  areaSqm: number;
  tileSqft: number;
  baseTiles: number;
  tilesNeeded: number;
  wastageTiles: number;
  boxesNeeded: number;
  ratePerSqft: number;
  totalBdt: number;
};

export function getTileSizeById(id: string): TileSize | undefined {
  return TILE_SIZES.find((size) => size.id === id);
}

export function getWastagePresetById(id: string): WastagePreset | undefined {
  return WASTAGE_PRESETS.find((preset) => preset.id === id);
}

export function sqftToSqm(sqft: number): number {
  return sqft * 0.092903;
}

export function sqmToSqft(sqm: number): number {
  return sqm / 0.092903;
}

export function calculateTiles(state: CalculatorState): CalculatorResult | null {
  const length = state.length;
  const width = state.width;
  if (length <= 0 || width <= 0) return null;

  const tileSize = getTileSizeById(state.tileSizeId);
  const wastagePreset = getWastagePresetById(state.wastagePresetId);
  if (!tileSize || !wastagePreset) return null;

  const tileSqft = (tileSize.widthMm * tileSize.heightMm) / 92903;
  let areaSqft: number;
  if (state.unit === "sqft") {
    areaSqft = length * width;
  } else {
    areaSqft = sqmToSqft(length * width);
  }

  const baseTiles = areaSqft / tileSqft;
  const tilesNeeded = Math.ceil(baseTiles * (1 + wastagePreset.rate));
  const wastageTiles = tilesNeeded - Math.ceil(baseTiles);
  const boxesNeeded = Math.ceil(tilesNeeded / tileSize.tilesPerBox);
  const totalBdt = tilesNeeded * tileSize.ratePerSqft;

  return {
    areaSqft: Math.round(areaSqft * 100) / 100,
    areaSqm: Math.round(sqftToSqm(areaSqft) * 100) / 100,
    tileSqft: Math.round(tileSqft * 1000) / 1000,
    baseTiles: Math.ceil(baseTiles),
    tilesNeeded,
    wastageTiles,
    boxesNeeded,
    ratePerSqft: tileSize.ratePerSqft,
    totalBdt,
  };
}
