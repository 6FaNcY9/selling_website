export type Category = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  featured?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  description: string;
  highlights: string[];
  image: string;
  rating: number;
  reviews: number;
  shipping: string;
  inventoryStatus: "in-stock" | "low-stock" | "preorder";
};

export const categories: Category[] = [
  {
    slug: "electronics",
    name: "Electronics",
    description: "Latest gadgets, audio gear, and smart home essentials for every setup.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    slug: "home-living",
    name: "Home & Living",
    description: "Cozy decor, kitchen upgrades, and organizers that make daily life smoother.",
    heroImage:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    slug: "wellness",
    name: "Wellness",
    description: "Self-care picks, aroma diffusers, and wellness tech for mindful routines.",
    heroImage:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    description: "Adventure-ready gear, portable power, and comfort items for the trail.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "fashion",
    name: "Fashion",
    description: "Everyday essentials, statement fits, and accessories for any season.",
    heroImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
  },
];

export const products: Product[] = [
  {
    slug: "aurora-wireless-headset",
    name: "Aurora Wireless Headset",
    category: "electronics",
    price: 129,
    originalPrice: 169,
    badge: "Bestseller",
    description:
      "Immersive spatial audio with adaptive noise control and 40-hour battery life for marathon sessions.",
    highlights: [
      "Bluetooth 5.3 + low-latency mode",
      "Dual beamforming mics",
      "USB-C fast charge",
    ],
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviews: 842,
    shipping: "Ships in 24h",
    inventoryStatus: "in-stock",
  },
  {
    slug: "haven-stone-diffuser",
    name: "Haven Stone Diffuser",
    category: "wellness",
    price: 58,
    description:
      "Ceramic essential oil diffuser with soft glow night-light and automatic shutoff for restful spaces.",
    highlights: ["200ml capacity", "Timer presets", "Matte mineral finish"],
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    reviews: 312,
    shipping: "Ships in 48h",
    inventoryStatus: "in-stock",
  },
  {
    slug: "summit-packable-blanket",
    name: "Summit Packable Blanket",
    category: "outdoor",
    price: 95,
    originalPrice: 119,
    badge: "Trending",
    description:
      "Lightweight insulated blanket with water-repellent shell and corner loops for campsite versatility.",
    highlights: ["600-fill recycled insulation", "Packs into pillow", "Machine washable"],
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
    rating: 4.5,
    reviews: 210,
    shipping: "Ships in 24h",
    inventoryStatus: "low-stock",
  },
  {
    slug: "lumen-glass-kettle",
    name: "Lumen Glass Kettle",
    category: "home-living",
    price: 72,
    description:
      "Borosciliate glass electric kettle with precise temperature presets and soft illumination.",
    highlights: ["1.5L capacity", "Keep-warm mode", "Auto shutoff"],
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviews: 564,
    shipping: "Next-day delivery",
    inventoryStatus: "in-stock",
  },
  {
    slug: "orbit-smart-lamp",
    name: "Orbit Smart Lamp",
    category: "home-living",
    price: 110,
    badge: "Smart home",
    description:
      "Voice-ready desk lamp with tunable white to RGB glow, wireless charging pad, and USB-C hub.",
    highlights: ["App + voice control", "15W wireless charging", "Aluminum body"],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    rating: 4.4,
    reviews: 145,
    shipping: "Ships in 24h",
    inventoryStatus: "preorder",
  },
  {
    slug: "velocity-runner-sneaker",
    name: "Velocity Runner Sneaker",
    category: "fashion",
    price: 89,
    description:
      "Breathable knit running sneaker with responsive cushioning and reflective detailing for night runs.",
    highlights: ["Feather knit", "Cloud midsole", "Reflective heel"],
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    rating: 4.3,
    reviews: 98,
    shipping: "Ships in 48h",
    inventoryStatus: "in-stock",
  },
  {
    slug: "cascade-pour-over-set",
    name: "Cascade Pour-Over Set",
    category: "home-living",
    price: 64,
    originalPrice: 79,
    description:
      "Complete pour-over set with glass dripper, double-wall carafe, and reusable stainless filter.",
    highlights: ["600ml carafe", "Reusable filter", "Heatproof handle"],
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviews: 402,
    shipping: "Ships in 24h",
    inventoryStatus: "in-stock",
  },
  {
    slug: "compass-solar-bank",
    name: "Compass Solar Bank",
    category: "outdoor",
    price: 59,
    badge: "Eco",
    description:
      "10,000mAh rugged power bank with fold-out solar panels and dual USB-C outputs for trail charging.",
    highlights: ["IP65 rated", "LED lantern mode", "Pass-through charging"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    rating: 4.2,
    reviews: 133,
    shipping: "Ships in 24h",
    inventoryStatus: "low-stock",
  },
  {
    slug: "atelier-overshirt",
    name: "Atelier Overshirt",
    category: "fashion",
    price: 120,
    originalPrice: 150,
    description:
      "Heavyweight cotton twill overshirt with drop shoulders, hidden snaps, and interior phone pocket.",
    highlights: ["Organic cotton", "Relaxed fit", "Hidden pockets"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    reviews: 221,
    shipping: "Ships in 48h",
    inventoryStatus: "in-stock",
  },
  {
    slug: "zenbreath-trainer",
    name: "ZenBreath Trainer",
    category: "wellness",
    price: 74,
    description:
      "Pocket-sized guided breathing coach with haptic cues, companion app, and weekly streaks.",
    highlights: ["USB-C recharge", "Haptic pacing", "Mobile insights"],
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1200&q=80",
    rating: 4.1,
    reviews: 75,
    shipping: "Ships in 72h",
    inventoryStatus: "in-stock",
  },
];

export const featuredProducts = products.filter((product) =>
  ["electronics", "home-living", "wellness"].includes(product.category),
);

export const bestsellers = products.slice(0, 6);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);
