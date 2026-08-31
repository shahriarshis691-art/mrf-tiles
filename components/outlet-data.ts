export type Outlet = {
  name: string;
  address: string[];
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  mapsUrl: string;
  image: string;
  alt: string;
};

export const OUTLETS: Outlet[] = [
  {
    name: "Edinburgh Grey",
    address: [
      "MRF Galaxy Tiles & Sanitary",
      "House 12, Road 08, Outlet Area",
      "Dhaka, Bangladesh",
    ],
    phone: "+8801712345678",
    phoneDisplay: "+880 1712-345678",
    whatsapp: "8801712345678",
    mapsUrl: "https://maps.google.com/?q=MRF+Galaxy+Tiles+Dhaka",
    image: "/images/projects/architectural-tile-experience.jpg",
    alt: "Premium interior with dark grey marble porcelain flooring",
  },
  {
    name: "Dundee",
    address: [
      "MRF Galaxy Tiles & Sanitary",
      "House 24, Road 14, Outlet Area",
      "Dhaka, Bangladesh",
    ],
    phone: "+8801812345678",
    phoneDisplay: "+880 1812-345678",
    whatsapp: "8801812345678",
    mapsUrl: "https://maps.google.com/?q=MRF+Galaxy+Tiles+Dhaka",
    image: "/images/projects/contemporary-kitchen.jpg",
    alt: "Premium kitchen interior with light stone porcelain surfaces",
  },
];
