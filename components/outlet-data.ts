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
    name: "First Branch",
    address: [
      "MRF Galaxy Tiles & Sanitary",
      "Gomosto para, Rangpur",
    ],
    phone: "+8801870402966",
    phoneDisplay: "01870402966",
    whatsapp: "8801870402966",
    mapsUrl: "https://maps.google.com/?q=Gomosto+para,+Rangpur+MRF+Galaxy+Tiles",
    image: "/images/projects/architectural-tile-experience.jpg",
    alt: "Premium interior with dark grey marble porcelain flooring",
  },
  {
    name: "Second Branch",
    address: [
      "MRF Galaxy Tiles & Sanitary",
      "Burirhat, Mohipur Road, Rangpur",
    ],
    phone: "+8801743182524",
    phoneDisplay: "01743182524",
    whatsapp: "8801743182524",
    mapsUrl:
      "https://maps.google.com/?q=Burirhat,+Mohipur+Road,+Rangpur+MRF+Galaxy+Tiles",
    image: "/images/projects/contemporary-kitchen.jpg",
    alt: "Premium kitchen interior with light stone porcelain surfaces",
  },
];
