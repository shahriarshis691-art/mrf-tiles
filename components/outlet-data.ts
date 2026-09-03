export type Outlet = {
  name: string;
  address: string[];
  locationLine: string;
  displayTitle?: string;
  displaySubtitle?: string;
  displayHref?: string;
  tag: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  mapsUrl: string;
  image: string;
  alt: string;
};

export const OUTLETS: Outlet[] = [
  {
    name: "Main Flagship Gallery",
    address: ["MRF Galaxy Tiles & Sanitary", "Gomosto para, Rangpur"],
    locationLine: "Gomosto para, Rangpur",
    displayTitle: "Main Flagship Gallery — Rangpur Showroom",
    displaySubtitle: "Dhap, Jail Road, Rangpur",
    displayHref: "/contact",
    tag: "Luxury Tiles & Ceramic",
    phone: "+8801870402966",
    phoneDisplay: "01870402966",
    whatsapp: "8801870402966",
    mapsUrl: "https://maps.google.com/?q=Gomosto+para,+Rangpur+MRF+Galaxy+Tiles",
    image: "/outlets/branch-1.jpg",
    alt: "MRF Galaxy luxury tiles display centre interior",
  },
  {
    name: "Architectural Surface Studio",
    address: ["MRF Galaxy Tiles & Sanitary", "Burirhat, Mohipur Road, Rangpur"],
    locationLine: "Burirhat, Mohipur Road, Rangpur",
    displayTitle: "Architectural Surface Studio — Khadim Experience Center",
    displaySubtitle: "Premium Brick & Cladding Display",
    displayHref: "/contact",
    tag: "Premium Design Center",
    phone: "+8801743182524",
    phoneDisplay: "01743182524",
    whatsapp: "8801743182524",
    mapsUrl:
      "https://maps.google.com/?q=Burirhat,+Mohipur+Road,+Rangpur+MRF+Galaxy+Tiles",
    image: "/outlets/branch-2.jpg",
    alt: "Premium design center with large-format porcelain displays",
  },
];

export const SHOWROOM_GALLERY_SLIDES = [
  [
    {
      src: "/images/hero-display-centre.jpg",
      alt: "Luxury tiles display centre with large-format porcelain slabs",
    },
    {
      src: "/images/projects/modern-sanitary-space.jpg",
      alt: "Galaxy showroom interior with curated tile collections",
    },
  ],
  [
    {
      src: "/images/projects/architectural-tile-experience.jpg",
      alt: "Architectural tile experience corridor in showroom",
    },
    {
      src: "/images/projects/contemporary-kitchen.jpg",
      alt: "Showroom kitchen vignette with premium ceramic surfaces",
    },
  ],
] as const;
