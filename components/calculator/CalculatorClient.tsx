"use client";

import { useState, useMemo } from "react";
import { buildWhatsAppUrl } from "@/lib/contact";
import { OUTLETS } from "@/components/outlet-data";
import ScrollReveal from "@/components/ScrollReveal";
import {
  TILE_SIZES,
  WASTAGE_PRESETS,
  calculateTiles,
  type CalculatorState,
  type Unit,
} from "@/lib/calculator";

const ROOM_TYPES = [
  "Living Room",
  "Kitchen",
  "Bathroom",
  "Bedroom",
  "Outdoor / Terrace",
  "Commercial / Lobby",
  "Full Home",
];

const DEFAULT_STATE: CalculatorState = {
  length: 0,
  width: 0,
  unit: "sqft",
  tileSizeId: TILE_SIZES[0].id,
  wastagePresetId: WASTAGE_PRESETS[0].id,
};

export default function CalculatorClient() {
  const [state, setState] = useState<CalculatorState>(DEFAULT_STATE);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [roomType, setRoomType] = useState(ROOM_TYPES[0]);

  const result = useMemo(() => calculateTiles(state), [state]);

  const updateState = (partial: Partial<CalculatorState>) => {
    setState((prev) => ({ ...prev, ...partial }));
  };

  const handleSubmit = () => {
    if (!result || !name.trim() || !phone.trim()) return;

    const tileLabel = TILE_SIZES.find((s) => s.id === state.tileSizeId)?.label ?? state.tileSizeId;
    const wastageLabel = WASTAGE_PRESETS.find((p) => p.id === state.wastagePresetId)?.label ?? state.wastagePresetId;

    const message = [
      `Room Type: ${roomType}`,
      `Dimensions: ${state.length} × ${state.width} ${state.unit}`,
      `Total Area: ${result.areaSqft} sqft / ${result.areaSqm} sqm`,
      `Tile Size: ${tileLabel}`,
      `Wastage Preset: ${wastageLabel}`,
      ``,
      `Calculation Breakdown:`,
      `Base Tiles Required: ${result.baseTiles}`,
      `Total Tiles Needed (incl. wastage): ${result.tilesNeeded}`,
      `Estimated Wastage: ${result.wastageTiles} tiles`,
      `Boxes Required: ${result.boxesNeeded}`,
      `Rate: ৳${result.ratePerSqft}/sqft`,
      `Estimated Total: ৳${result.totalBdt.toLocaleString()}`,
    ].join("\n");

    const url = buildWhatsAppUrl(OUTLETS[0].whatsapp, {
      name: name.trim(),
      phone: phone.trim(),
      message,
      interest: "Tile Calculator Quote",
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Header */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal variant="fadeInUp">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                Project Planning Tool
              </p>
              <h1 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-[0.06em] text-[#0F0F0F] sm:text-[2.4rem] lg:text-[2.75rem]">
                Tile Calculator &amp; Area Estimator
              </h1>
              <span className="mx-auto mt-4 block h-px w-10 bg-gold sm:w-12" />
              <p className="mt-5 line-clamp-2 text-xs leading-relaxed tracking-[0.04em] text-neutral-600 sm:line-clamp-none sm:text-sm">
                Plan your porcelain slab and tile installation with precision.
                Enter your room dimensions to estimate material quantities,
                wastage, and project cost.
              </p>
            </header>
          </ScrollReveal>

          {/* Calculator Grid */}
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            {/* Left Column — Inputs */}
            <ScrollReveal variant="fadeInUp" delay={0.1}>
              <div className="rounded-sm border border-neutral-200 bg-white p-5 sm:p-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Room Type */}
                  <div className="sm:col-span-2">
                    <label htmlFor="room-type" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Room Type
                    </label>
                    <select
                      id="room-type"
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="mt-2 w-full border border-neutral-200 bg-white px-4 py-3 text-[13px] text-[#0F0F0F] outline-none transition-colors focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                    >
                      {ROOM_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Length */}
                  <div>
                    <label htmlFor="length" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Length
                    </label>
                    <input
                      id="length"
                      type="number"
                      min="0"
                      step="0.1"
                      value={state.length || ""}
                      onChange={(e) => updateState({ length: parseFloat(e.target.value) || 0 })}
                      placeholder="0"
                      className="mt-2 w-full border border-neutral-200 bg-white px-4 py-3 text-[13px] text-[#0F0F0F] outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                    />
                  </div>

                  {/* Width */}
                  <div>
                    <label htmlFor="width" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Width
                    </label>
                    <input
                      id="width"
                      type="number"
                      min="0"
                      step="0.1"
                      value={state.width || ""}
                      onChange={(e) => updateState({ width: parseFloat(e.target.value) || 0 })}
                      placeholder="0"
                      className="mt-2 w-full border border-neutral-200 bg-white px-4 py-3 text-[13px] text-[#0F0F0F] outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                    />
                  </div>

                  {/* Unit Toggle */}
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Unit
                    </label>
                    <div className="mt-2 inline-flex border border-neutral-200">
                      {(["sqft", "sqm"] as Unit[]).map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          onClick={() => updateState({ unit })}
                          className={`px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
                            state.unit === unit
                              ? "bg-[#0F0F0F] text-white"
                              : "bg-white text-neutral-600 hover:text-neutral-900"
                          }`}
                        >
                          {unit === "sqft" ? "Sq Ft" : "Sq M"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tile Size */}
                  <div className="sm:col-span-2">
                    <label htmlFor="tile-size" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Tile Size
                    </label>
                    <select
                      id="tile-size"
                      value={state.tileSizeId}
                      onChange={(e) => updateState({ tileSizeId: e.target.value })}
                      className="mt-2 w-full border border-neutral-200 bg-white px-4 py-3 text-[13px] text-[#0F0F0F] outline-none transition-colors focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                    >
                      {TILE_SIZES.map((size) => (
                        <option key={size.id} value={size.id}>
                          {size.label} — ৳{size.ratePerSqft}/sqft
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Wastage Preference */}
                  <div className="sm:col-span-2">
                    <label htmlFor="wastage" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Laying Type
                    </label>
                    <select
                      id="wastage"
                      value={state.wastagePresetId}
                      onChange={(e) => updateState({ wastagePresetId: e.target.value })}
                      className="mt-2 w-full border border-neutral-200 bg-white px-4 py-3 text-[13px] text-[#0F0F0F] outline-none transition-colors focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                    >
                      {WASTAGE_PRESETS.map((preset) => (
                        <option key={preset.id} value={preset.id}>
                          {preset.label} ({Math.round(preset.rate * 100)}%)
                        </option>
                      ))}
                    </select>
                    <p className="mt-2 text-[11px] leading-relaxed text-neutral-500">
                      {WASTAGE_PRESETS.find((p) => p.id === state.wastagePresetId)?.description}
                    </p>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="calc-name" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Your Name
                    </label>
                    <input
                      id="calc-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="mt-2 w-full border border-neutral-200 bg-white px-4 py-3 text-[13px] text-[#0F0F0F] outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-phone" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Phone Number
                    </label>
                    <input
                      id="calc-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="mt-2 w-full border border-neutral-200 bg-white px-4 py-3 text-[13px] text-[#0F0F0F] outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!result || !name.trim() || !phone.trim()}
                    className="inline-flex h-14 w-full items-center justify-center border border-[#0F0F0F] bg-transparent px-8 text-[12px] font-medium uppercase tracking-[0.16em] text-[#0F0F0F] transition-colors duration-300 hover:bg-[#0F0F0F] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                  >
                    Request Detailed Quote via WhatsApp
                  </button>
                  <p className="mt-3 text-[11px] leading-relaxed text-neutral-500">
                    Receive a detailed breakdown including box count, wastage estimate, and total project cost.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column — Summary */}
            <ScrollReveal variant="fadeInUp" delay={0.2}>
              <div className="lg:sticky lg:top-24">
                <div className="rounded-sm border border-neutral-200 bg-white p-6 sm:p-8">
                  <h2 className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                    Estimation Summary
                  </h2>

                  {result ? (
                    <div className="mt-6 space-y-5">
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                        <span className="text-xs text-neutral-600">Total Area</span>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-[#0F0F0F]">
                            {result.areaSqft} <span className="text-xs font-normal text-neutral-500">sqft</span>
                          </p>
                          <p className="text-xs text-neutral-500">
                            {result.areaSqm} sqm
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                        <span className="text-xs text-neutral-600">Tile Size</span>
                        <span className="text-sm font-semibold text-[#0F0F0F]">
                          {TILE_SIZES.find((s) => s.id === state.tileSizeId)?.label}
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                        <span className="text-xs text-neutral-600">Base Tiles</span>
                        <span className="text-sm font-semibold text-[#0F0F0F]">
                          {result.baseTiles} pcs
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                        <span className="text-xs text-neutral-600">Wastage Allowance</span>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-[#0F0F0F]">
                            {result.wastageTiles} pcs
                          </p>
                          <p className="text-xs text-neutral-500">
                            {WASTAGE_PRESETS.find((p) => p.id === state.wastagePresetId)?.label}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                        <span className="text-xs text-neutral-600">Total Tiles Needed</span>
                        <span className="text-sm font-semibold text-[#0F0F0F]">
                          {result.tilesNeeded} pcs
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                        <span className="text-xs text-neutral-600">Boxes Required</span>
                        <span className="text-sm font-semibold text-[#0F0F0F]">
                          {result.boxesNeeded} {result.boxesNeeded === 1 ? "box" : "boxes"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-700">
                          Grand Total
                        </span>
                        <div className="text-right">
                          <p className="text-xl font-semibold text-[#0F0F0F]">
                            ৳{result.totalBdt.toLocaleString()}
                          </p>
                          <p className="text-[11px] text-neutral-500">
                            ৳{result.ratePerSqft}/sqft × {result.tilesNeeded} tiles
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8 text-center">
                      <p className="text-xs text-neutral-500">
                        Enter valid length and width to see your estimation.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
