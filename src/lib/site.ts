// -----------------------------------------------------------------------
// Single source of truth for SAYA Forest Resort, Alibaug
// (Formerly Giriraj Garden Resort)
// -----------------------------------------------------------------------

export const property = {
  name: "Saya Forest Resort",
  subtitle: "Alibaug",
  fullName: "Saya Forest Resort, Alibaug",
  formerName: "Formerly Giriraj Garden Resort",
  tagline: "Where the forest canopy cradles quiet luxury.",
  taglineLong:
    "A tranquil transformation of Alibaug's beloved Giriraj Garden Resort into a serene forest sanctuary. Every room opens up to living forest vistas, crowned by our signature Forest Chalets.",
  location: "Alibaug, Maharashtra",
  address: "Saya Forest Resort, Chondi-Kihim Road, Alibaug, Maharashtra 402201",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "stay@sayaforestresort.com",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Alibaug,Maharashtra&output=embed",
  mapsLink: "https://maps.google.com/?q=Alibaug,Maharashtra",
  instagram: "https://instagram.com/sayaforestresort",
};

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${property.whatsappNumber}?text=${encoded}`;
}

export const nav = [
  { label: "Story", href: "#story" },
  { label: "The Chalets", href: "#chalets" },
  { label: "Accommodations", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Inquire", href: "#contact" },
];

export const quickStats = [
  { value: "5", label: "Curated Room Categories" },
  { value: "100%", label: "Forest Facing Rooms" },
  { value: "15 min", label: "From Mandwa Jetty" },
  { value: "4.9★", label: "Guest Satisfaction" },
];

export type RoomCategory = {
  slug: string;
  name: string;
  categoryTag: string;
  isCrownJewel?: boolean;
  tagline: string;
  description: string;
  price: number;
  size: string;
  sleeps: string;
  bedType: string;
  view: string;
  amenities: string[];
  features: string[];
  image: string;
  secondaryImage?: string;
};

export const rooms: RoomCategory[] = [
  {
    slug: "forest-chalet",
    name: "Forest Chalet",
    categoryTag: "Crown Jewel • Highest Category",
    isCrownJewel: true,
    tagline: "Suspended amidst the forest canopy with panoramic glass & private sundeck",
    description:
      "Our most exclusive architectural masterpiece. Elevated among ancient trees, each standalone Forest Chalet features towering vaulted ceilings, raw Scandinavian timber craftsmanship, expansive floor-to-ceiling glass walls, a private cantilevered forest deck, an open-air soaking bath, and dedicated butler concierge service.",
    price: 14500,
    size: "880 sq.ft",
    sleeps: "2 Adults (+ 1 Child)",
    bedType: "California King Handcrafted Bed",
    view: "360° Uninterrupted Forest Canopy",
    amenities: [
      "Panoramic glass forest walls",
      "Private cantilevered timber deck",
      "Open-air forest soaking tub",
      "Raindance outdoor shower",
      "Dedicated 24/7 chalet butler",
      "Curated artisanal forest mini-bar",
      "In-chalet champagne breakfast",
      "Starlink high-speed Wi-Fi",
    ],
    features: [
      "Highest room category on property",
      "Total privacy shrouded by tall trees",
      "Acoustic insulation & whisper-quiet AC",
      "Custom brass and teak wood accents",
    ],
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1800&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1800&auto=format&fit=crop",
  },
  {
    slug: "villa-4bhk",
    name: "Villa 4BHK",
    categoryTag: "Grand Private Estate",
    tagline: "Sprawling 4-bedroom private estate with secluded forest lawn & private lounge",
    description:
      "A lavish private sanctuary created for multi-generational families and close celebrations. Spanning over 3,200 sq.ft, this standalone villa features four expansive ensuite bedrooms, a grand double-height living parlor, dining pavilion, private forest garden lawn, and an exclusive poolside lounge.",
    price: 32000,
    size: "3,200 sq.ft",
    sleeps: "Up to 10 Guests (4 Suites)",
    bedType: "4 King Master Suites",
    view: "Private Forest Estate & Manicured Lawn",
    amenities: [
      "4 Ensuite master bedrooms",
      "Expansive central living pavilion",
      "Private forest lawn & outdoor lounge",
      "Dedicated villa attendant & chef",
      "Barbecue & bonfire lawn setup",
      "Private dining area for 10",
      "Direct pool & sun deck access",
      "Full pantry & espresso bar",
    ],
    features: [
      "Exclusive gated privacy within resort",
      "Balconies & forest views from every bedroom",
      "State-of-the-art audio visual lounge",
      "Priority check-in & speedboat transfers",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  },
  {
    slug: "two-bed-suite",
    name: "Two Bed Suite",
    categoryTag: "2 BHK Family Haven",
    tagline: "Two interconnected luxury master bedrooms connected by an airy forest parlor",
    description:
      "Generously designed for families or friends traveling together. The Two Bed Suite provides the perfect balance of togetherness and private retreat, featuring two private master suites, an expansive central lounge, and wide sliding glass doors framing sweeping forest panoramas.",
    price: 11000,
    size: "1,150 sq.ft",
    sleeps: "4 to 5 Guests",
    bedType: "2 King Plush Beds",
    view: "Dual-Aspect Lush Forest Panorama",
    amenities: [
      "2 Separate master bedrooms",
      "Shared central forest parlor",
      "Oversized double viewing balconies",
      "2 Luxury ensuite bathrooms",
      "Artisanal tea & coffee bar",
      "Complimentary gourmet breakfast",
      "High-speed optical Wi-Fi",
      "In-suite dining service",
    ],
    features: [
      "Double wardrobe & dressing zones",
      "Interconnected layout with private doors",
      "Lush foliage directly outside windows",
      "Premium organic bath amenities",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1800&auto=format&fit=crop",
  },
  {
    slug: "one-bed-suite",
    name: "One Bed Suite",
    categoryTag: "1 BHK Forest Suite",
    tagline: "Spacious private suite featuring a distinct living parlor and canopy balcony",
    description:
      "An intimate yet grand retreat for couples or solo rejuvenators. Featuring a dedicated living room with cozy reading nooks, an opulent master bedroom, and a deep private sit-out balcony that gazes directly into the verdant tree canopy.",
    price: 7800,
    size: "680 sq.ft",
    sleeps: "2 to 3 Guests",
    bedType: "1 Grand King Bed + Daybed",
    view: "Deep Forest Canopy & Tree Line",
    amenities: [
      "Separate living lounge & parlor",
      "Private deep forest sit-out balcony",
      "Walk-in dressing & rain shower",
      "Organic botanical toiletries",
      "Smart TV with streaming apps",
      "Complimentary daily breakfast",
      "High-speed Wi-Fi",
      "Plush cotton bathrobes & slippers",
    ],
    features: [
      "Generous architectural proportions",
      "Warm teak and neutral linen styling",
      "Floor-to-ceiling glass picture framing",
      "Quiet zone away from common pathways",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1800&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800&auto=format&fit=crop",
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    categoryTag: "Forest View Deluxe",
    tagline: "Serene nature-immersed room with private garden patio and organic textures",
    description:
      "Intelligently appointed and immersed in natural quietude. The Deluxe Room features polished stone floors, warm timber millwork, and expansive windows that look straight out into the resort's lush forest grove.",
    price: 5500,
    size: "420 sq.ft",
    sleeps: "2 Guests",
    bedType: "1 King or Twin Plush Beds",
    view: "Verdant Forest Garden View",
    amenities: [
      "Forest-facing picture windows",
      "Private ground garden patio",
      "Spacious marble rain shower",
      "Artisanal coffee & tea kettle",
      "High-speed Wi-Fi access",
      "Silent inverter air conditioning",
      "Farm-fresh breakfast included",
      "Daily forest housekeeping",
    ],
    features: [
      "Direct ground garden access",
      "Earthy neutral minimalism",
      "Pure cotton luxury linens",
      "Close to swimming pool & dining bistro",
    ],
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1800&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1800&auto=format&fit=crop",
  },
];

export const experienceHighlights = [
  {
    title: "Forest Canopy Pool",
    category: "Relaxation",
    description:
      "A serene turquoise pool bordered by towering teak and mango trees, sun loungers, and dappled emerald shade.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "The Forest Bistro",
    category: "Gastronomy",
    description:
      "Open-air dining celebrating authentic Konkani seafood, wood-fired coastal grills, and fresh organic garden greens.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Starlit Bonfires & Acoustics",
    category: "Evenings",
    description:
      "Nightly gatherings around stone fire pits under unpolluted starry skies, serenaded by gentle forest breezes.",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Nature Trails & Birding",
    category: "Discovery",
    description:
      "Guided morning walks through the revitalized forest grounds, spotting native hornbills, kingfishers, and butterflies.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1400&auto=format&fit=crop",
  },
];

export const amenitiesList = [
  {
    name: "Canopy Swimming Pool",
    desc: "Sun deck & loungers under trees",
    icon: "waves",
  },
  {
    name: "Forest Dining Bistro",
    desc: "Authentic coastal & continental cuisine",
    icon: "utensils",
  },
  {
    name: "High-Speed Wi-Fi",
    desc: "Starlink & optical fiber across grounds",
    icon: "wifi",
  },
  {
    name: "Bonfire & Lawn Lounge",
    desc: "Stone fire pits & acoustic evenings",
    icon: "flame",
  },
  {
    name: "Mandwa Ferry Pickups",
    desc: "Speedboat & Ro-Pax car transfers",
    icon: "ship",
  },
  {
    name: "In-Chalet Butler Service",
    desc: "Exclusive for Forest Chalet & Villa",
    icon: "bell",
  },
  {
    name: "EV Charging Station",
    desc: "Fast EV chargers for your journey",
    icon: "zap",
  },
  {
    name: "100% Power Backup",
    desc: "Uninterrupted AC & quiet comfort",
    icon: "shield-check",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1400&auto=format&fit=crop",
    caption: "The Signature Forest Chalet nestled in dense greenery",
    tag: "Chalet",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop",
    caption: "Forest canopy swimming pool surrounded by nature",
    tag: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1400&auto=format&fit=crop",
    caption: "Interior timber sanctuary of the Forest Chalet",
    tag: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1400&auto=format&fit=crop",
    caption: "The private 4BHK Forest Villa with sundeck",
    tag: "Villa",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
    caption: "Alfresco dining under the ancient trees",
    tag: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
    caption: "Sunlit living spaces in the Two Bed Suite",
    tag: "Suites",
  },
];

export const nearbyPlaces = [
  {
    name: "Mandwa Jetty",
    distance: "15 mins",
    detail: "Speedboats & M2M Ferries from Gateway of India, Mumbai",
  },
  {
    name: "Kihim Beach",
    distance: "7 mins",
    detail: "Lush shoreline, coconut woods & tranquil sunsets",
  },
  {
    name: "Awas Beach",
    distance: "10 mins",
    detail: "Secluded golden sand beach, ideal for quiet morning walks",
  },
  {
    name: "Alibaug Town & Kolaba Fort",
    distance: "18 mins",
    detail: "Historic sea fort, local spice bazaars and coastal shopping",
  },
  {
    name: "Varsoli Beach",
    distance: "14 mins",
    detail: "Watersports, coastal shacks, and long white sand stretch",
  },
];
