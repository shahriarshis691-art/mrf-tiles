export type RoomCategory = {
  id: string;
  label: string;
  description: string;
  image: string;
  alt: string;
};

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "living-room",
    label: "Living Room",
    description: "Open-plan living with statement porcelain flooring",
    image: "/explore-tile-main-images/livingroom.jpg",
    alt: "Luxury living room with premium porcelain tile flooring",
  },
  {
    id: "bathroom",
    label: "Bathroom",
    description: "Spa-inspired bathrooms with coordinated surfaces",
    image: "/explore-tile-main-images/washroom.jpg",
    alt: "Modern luxury bathroom with premium tile and sanitary surfaces",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    description: "Warm, quiet luxury for private retreats",
    image: "/explore-tile-main-images/bedroom.jpg",
    alt: "Luxury bedroom interior with warm porcelain tile flooring",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    description: "High-performance surfaces for culinary spaces",
    image: "/explore-tile-main-images/kitchen.jpg",
    alt: "Contemporary kitchen with premium porcelain countertop and floor tiles",
  },
  {
    id: "balcony",
    label: "Balcony",
    description: "Indoor-outdoor continuity with durable slabs",
    image: "/explore-tile-main-images/balcony.jpg",
    alt: "Luxury balcony with large-format porcelain tiles and sunset view",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    description: "Weather-resistant architecture for exteriors",
    image: "/explore-tile-main-images/outdoor.jpg",
    alt: "Premium outdoor architectural space with durable porcelain paving",
  },
];

export const ROOM_FILTERS = [
  { id: "locations", label: "LOCATIONS", active: true },
  { id: "effects", label: "EFFECTS", active: false },
  { id: "colors", label: "COLORS", active: false },
] as const;
