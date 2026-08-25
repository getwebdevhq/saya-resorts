// -----------------------------------------------------------------------
// Single source of truth for all editable content on the SAYA Resorts
// site. Swap placeholder text, numbers and image URLs here — no need to
// touch any component. Anything marked "PLACEHOLDER" must be replaced
// with the real property details before this site goes live.
// -----------------------------------------------------------------------

export const property = {
  name: "SAYA Resorts",
  tagline: "Where the sea breeze meets serene luxury, and time slows down.",
  location: "Alibaug, Maharashtra",
  address: "SAYA Resorts, Varsoli Beach Road, Alibaug, Maharashtra 402201",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "stay@sayaresorts.in",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Alibaug,Maharashtra&output=embed",
  mapsLink: "https://maps.google.com/?q=Alibaug,Maharashtra",
  instagram: "https://instagram.com/sayaresorts",
};

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${property.whatsappNumber}?text=${encoded}`;
}

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const heroTags = [
  { label: "Pool Villa", href: "#room-pool-villa" },
  { label: "Beach Cottage", href: "#room-coastal-cottage" },
  { label: "Coastal Suite", href: "#room-coastal-suite" },
];

export const stats = [
  { value: "8+", label: "Years hosting guests" },
  { value: "4.8★", label: "Average guest rating" },
  { value: "1500+", label: "Happy stays" },
  { value: "24/7", label: "Concierge service" },
];

export type Room = {
  slug: string;
  name: string;
  description: string;
  price: number;
  sleeps: number;
  amenities: string[];
  image: string;
};

export const rooms: Room[] = [
  {
    slug: "pool-villa",
    name: "Private Pool Villa",
    description:
      "A standalone luxury villa with a private plunge pool and open-air lounge — the signature stay at SAYA Alibaug.",
    price: 8500,
    sleeps: 4,
    amenities: ["Private plunge pool", "Sun lounge", "AC", "Free Wi-Fi"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "coastal-cottage",
    name: "Beach Cottage",
    description:
      "Tucked among lush coconut groves with a private wooden deck for morning sea breeze and evening quiet.",
    price: 5200,
    sleeps: 2,
    amenities: ["Palm grove view", "Private deck", "Free Wi-Fi", "Breakfast included"],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "coastal-suite",
    name: "Coastal Suite",
    description:
      "A Konkan coastal-inspired luxury suite with high ceilings, teak wood finishes, and a balcony overlooking private gardens.",
    price: 6800,
    sleeps: 3,
    amenities: ["Sea & Garden view", "Private balcony", "AC", "Free Wi-Fi"],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "beachside-cabin",
    name: "Beachside Cabin",
    description:
      "A serene wooden cabin just minutes from the shore, built for guests seeking the soothing sound of coastal waves.",
    price: 6000,
    sleeps: 2,
    amenities: ["Coastal breeze", "Bonfire lawn", "Free Wi-Fi", "Breakfast included"],
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop",
  },
];

export const amenities = [
  { label: "Free Wi-Fi", icon: "wifi" },
  { label: "Coastal dining restaurant", icon: "utensils" },
  { label: "Swimming pool", icon: "waves" },
  { label: "Free parking", icon: "car" },
  { label: "Bonfire & games lawn", icon: "flame" },
  { label: "Speedboat & ferry transfer", icon: "ship" },
  { label: "Mandwa / station pickup", icon: "car-front" },
  { label: "Power backup & AC", icon: "plug" },
] as const;

export const gallery = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
];

export const nearby = [
  { name: "Varsoli Beach", distance: "2 km" },
  { name: "Alibaug Beach & Kolaba Fort", distance: "4 km" },
  { name: "Kihim Beach", distance: "7 km" },
  { name: "Mandwa Jetty (Ferries from Mumbai)", distance: "18 km" },
  { name: "Alibaug Bus Station", distance: "3 km" },
]; // PLACEHOLDER — confirm real distances from the property
