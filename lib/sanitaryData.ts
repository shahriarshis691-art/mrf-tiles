import { SANITARY_CATEGORIES, SANITARY_LISTINGS, type SanitaryCategory, type SanitaryListingItem } from "@/components/sanitary/sanitary-data";
import { OUTLETS } from "@/components/outlet-data";

export type SanitaryProduct = {
  id: string;
  slug: string;
  title: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  specs: string[];
};

export const SANITARY_PRODUCTS: SanitaryProduct[] = SANITARY_LISTINGS.map((item) => ({
  id: item.id,
  slug: item.id,
  title: item.label,
  category: item.categoryId,
  brand: "MRF Galaxy",
  price: item.priceBdt,
  description: item.description,
  image: item.image,
  specs: [
    `Finish: ${item.finish}`,
    `Material: ${item.material}`,
    `Dimensions: ${item.dimensions.replace(/Ã—/g, "×")}`,
  ],
}));

export { SANITARY_CATEGORIES };

export function getSanitaryCategoryBySlug(
  slug: string,
): SanitaryCategory | undefined {
  return SANITARY_CATEGORIES.find((category) => category.id === slug);
}

export function getSanitaryListingsByCategory(
  categoryId: string,
): SanitaryProduct[] {
  return SANITARY_PRODUCTS.filter((item) => item.category === categoryId);
}

export function getSanitaryProductById(
  id: string,
): SanitaryProduct | undefined {
  return SANITARY_PRODUCTS.find((item) => item.id === id);
}

export function formatPriceBdt(price: number): string {
  return `à§³${price.toLocaleString("en-BD")}`;
}

export function buildProductWhatsAppUrl(productTitle: string): string {
  const outlet = OUTLETS[0];
  const message = `Hello MRF Galaxy,\n\nI am interested in ${productTitle}. Please provide more details about availability, pricing, and specifications.`;
  return `https://wa.me/${outlet.whatsapp}?text=${encodeURIComponent(message)}`;
}
