export type SharifProduct = {
  id: string;
  name: string;
  category: "Basin" | "Bath & Shower" | "Kitchen";
  material_finish: string;
  approx_price_bdt: number;
  description: string;
  image_placeholder: string;
  image_concept: string;
  source_url: string;
};

// Retail observations checked 2026-09-08; these are not MRF quotations or
// inventory promises. Product names follow the manufacturer/retailer listings.
// Do not infer brass construction where the source only specifies a finish.
export const SHARIF_PRICE_CHECKED_ON = "2026-09-08";
export const SHARIF_MANUFACTURER_URL = "https://www.sharifmetal.com.bd/products";
export const SHARIF_CARD_CONCEPT = "A luxurious dark marble shower room with warm recessed lighting, refined metallic fittings and a frameless glass partition; architectural interior photography, no logos or text.";

export const SHARIF_PRODUCTS: SharifProduct[] = [
  {
    id: "sharif-electra-sm7311-6",
    name: "Electra Single Lever Basin Mixer · SM 7311-6",
    category: "Basin",
    material_finish: "Chrome finish; body material to be confirmed",
    approx_price_bdt: 5200,
    description: "Single-lever basin mixer in the Electra range. The retailer specifies a 40 mm cartridge.",
    image_placeholder: "/images/sanitary/products/faucet-basin-chrome.jpg",
    image_concept: "Clean high-resolution chrome basin mixer render against white marble; illustrative, not model-exact.",
    source_url: "https://safamarwatrading.com/details/531",
  },
  {
    id: "sharif-lucid-sm7301-6",
    name: "Lucid Single Lever Basin Mixer · SM 7301-6",
    category: "Basin",
    material_finish: "Material and finish to be confirmed with supplier",
    approx_price_bdt: 5000,
    description: "Single-lever basin mixer from Sharif’s Lucid collection. Confirm the finish variant when requesting a quotation.",
    image_placeholder: "/images/sanitary/products/faucet-basin-chrome.jpg",
    image_concept: "Minimal chrome basin mixer with cylindrical body in a bright studio-style bathroom; illustrative only.",
    source_url: "https://safamarwatrading.com/brands/11",
  },
  {
    id: "sharif-fino-pillar-cock",
    name: "Fino Basin Pillar Cock",
    category: "Basin",
    material_finish: "Brass body; finish to be confirmed",
    approx_price_bdt: 2850,
    description: "Fino pillar cock for basin use with a brass body, as specified by the retailer.",
    image_placeholder: "/images/sanitary/products/faucet-basin-chrome.jpg",
    image_concept: "Compact polished basin tap, clean white surface and soft studio light; illustrative only.",
    source_url: "https://safamarwatrading.com/details/645",
  },
  {
    id: "sharif-electra-sm7311-3",
    name: "Electra Single Lever Bath Mixer · SM 7311-3",
    category: "Bath & Shower",
    material_finish: "Chrome finish; body material to be confirmed",
    approx_price_bdt: 6900,
    description: "Single-lever bath mixer from the Electra range with a chrome finish. Confirm included shower accessories before ordering.",
    image_placeholder: "/images/sanitary/products/faucet-wall-mounted.jpg",
    image_concept: "Polished wall-mounted bathroom mixer on pale stone, soft architectural lighting; illustrative only.",
    source_url: "https://safamarwatrading.com/details/541",
  },
  {
    id: "sharif-conceal-stop-half",
    name: "Conceal Stop Cock · ½ inch",
    category: "Bath & Shower",
    material_finish: "Brass body, chrome finish",
    approx_price_bdt: 1250,
    description: "Concealed water-control fitting with a ½-inch connection and chrome-finished brass construction.",
    image_placeholder: "/images/brands/sharif/stop.png",
    image_concept: "Chrome concealed stop-cock trim and circular escutcheon, isolated white studio render; illustrative only.",
    source_url: "https://safamarwatrading.com/details/504",
  },
  {
    id: "sharif-conceal-stop-three-quarter",
    name: "Conceal Stop Cock · ¾ inch",
    category: "Bath & Shower",
    material_finish: "Brass body, chrome finish",
    approx_price_bdt: 1650,
    description: "¾-inch concealed stop cock with a brass body and chrome finish. Match the connection size to your plumbing plan.",
    image_placeholder: "/images/brands/sharif/stop.png",
    image_concept: "Chrome concealed valve trim isolated on white with soft contact shadow; illustrative only.",
    source_url: "https://safamarwatrading.com/details/505",
  },
  {
    id: "sharif-drizzle-shower",
    name: "Drizzle Moving Shower",
    category: "Bath & Shower",
    material_finish: "Brass, chrome finish (retailer specification)",
    approx_price_bdt: 1500,
    description: "Moving shower from the Drizzle range. The retailer lists brass construction and a chrome finish.",
    image_placeholder: "/images/sanitary/products/shower-ceiling-rain.jpg",
    image_concept: "Clean chrome shower-head render with bright neutral surroundings; category illustration, not the Drizzle model.",
    source_url: "https://safamarwatrading.com/details/509",
  },
  {
    id: "sharif-dipper-sink-mixer",
    name: "Dipper Single Lever Sink Mixer",
    category: "Kitchen",
    material_finish: "Chrome finish; body material to be confirmed",
    approx_price_bdt: 4700,
    description: "Wall-mounted kitchen sink mixer with single-lever control. The retailer lists a 40 mm cartridge.",
    image_placeholder: "/images/brands/sharif/sink.png",
    image_concept: "Chrome wall-mounted kitchen faucet with curved spout on seamless white, high-resolution render; illustrative only.",
    source_url: "https://safamarwatrading.com/details/507",
  },
  {
    id: "sharif-lilac-moving-sink",
    name: "Lilac Moving Sink Cock",
    category: "Kitchen",
    material_finish: "Brass body; finish to be confirmed",
    approx_price_bdt: 2350,
    description: "Moving sink cock from the Lilac range with a brass body. Suitable for a kitchen sink fitting selection.",
    image_placeholder: "/images/brands/sharif/sink.png",
    image_concept: "Curved chrome kitchen tap isolated on white with soft shadows; illustrative only.",
    source_url: "https://safamarwatrading.com/details/650",
  },
  {
    id: "sharif-bib-cock",
    name: "Sharif Bib Cock",
    category: "Bath & Shower",
    material_finish: "Material and finish to be confirmed with supplier",
    approx_price_bdt: 1000,
    description: "Sharif bib cock listed for general water-outlet use. Confirm the connection size and handle variant with the showroom.",
    image_placeholder: "/images/brands/sharif/bib.png",
    image_concept: "Short chrome wall tap with cross handle on seamless white background; high-resolution illustrative render.",
    source_url: "https://safamarwatrading.com/brands/11",
  },
];
