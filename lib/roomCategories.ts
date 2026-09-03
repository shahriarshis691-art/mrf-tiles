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
    image: "/images/projects/modern-residence.jpg",
    alt: "Luxury living room with premium porcelain tile flooring",
  },
  {
    id: "bathroom",
    label: "Bathroom",
    description: "Spa-inspired bathrooms with coordinated surfaces",
    image: "/images/projects/modern-sanitary-space.jpg",
    alt: "Modern luxury bathroom with premium tile and sanitary surfaces",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    description: "Warm, quiet luxury for private retreats",
    image: "/images/projects/luxury-villa.jpg",
    alt: "Luxury bedroom interior with warm porcelain tile flooring",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    description: "High-performance surfaces for culinary spaces",
    image: "/images/projects/contemporary-kitchen.jpg",
    alt: "Contemporary kitchen with premium porcelain countertop and floor tiles",
  },
  {
    id: "balcony",
    label: "Balcony",
    description: "Indoor-outdoor continuity with durable slabs",
    image: "/images/villa-sun.jpg",
    alt: "Luxury balcony with large-format porcelain tiles and sunset view",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    description: "Weather-resistant architecture for exteriors",
    image: "/images/projects/urban-commercial-space.jpg",
    alt: "Premium outdoor architectural space with durable porcelain paving",
  },
];

export const ROOM_FILTERS = [
  { id: "locations", label: "LOCATIONS", active: true },
  { id: "effects", label: "EFFECTS", active: false },
  { id: "colors", label: "COLORS", active: false },
] as const;
