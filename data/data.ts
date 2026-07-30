// -----------------------------------------------------------------------------
// Store directory
// -----------------------------------------------------------------------------
export type StoreCategory =
  | "Fashion"
  | "Beauty & Wellness"
  | "Electronics"
  | "Kids & Toys"
  | "Dining"
  | "Entertainment"
  | "Home & Living";

export interface Store {
  id: string;
  name: string;
  description: string;
  mobileContact: string;
  email: string;
  websiteUrl: string;
  images: string[];
  workingHours: string;
  category: StoreCategory;
}

export const STORES: Store[] = [
  {
    id: "north-star-fashion",
    name: "North Star Fashion",
    description:
      "Contemporary ready-to-wear for men and women, with a rotating edit of local and international designers.",
    mobileContact: "+254 700 111 222",
    email: "hello@northstarfashion.com",
    websiteUrl: "https://northstarfashion.example.com",
    images: ["/images/stores/north-star-fashion-1.jpg", "/images/stores/north-star-fashion-2.jpg"],
    workingHours: "Mon – Sat: 10:00 AM – 10:00 PM · Sun: 11:00 AM – 8:00 PM",
    category: "Fashion",
  },
  {
    id: "velvet-and-vine",
    name: "Velvet & Vine",
    description: "A boutique spa and skincare studio offering facials, massage, and a curated retail wall.",
    mobileContact: "+254 700 222 333",
    email: "book@velvetandvine.com",
    websiteUrl: "https://velvetandvine.example.com",
    images: ["/images/stores/velvet-and-vine-1.jpg"],
    workingHours: "Daily: 9:00 AM – 9:00 PM",
    category: "Beauty & Wellness",
  },
  {
    id: "circuit-and-co",
    name: "Circuit & Co.",
    description: "Phones, laptops, and smart home gear, with an in-store repair counter and trade-in desk.",
    mobileContact: "+254 700 333 444",
    email: "support@circuitandco.com",
    websiteUrl: "https://circuitandco.example.com",
    images: ["/images/stores/circuit-and-co-1.jpg"],
    workingHours: "Mon – Sun: 10:00 AM – 10:00 PM",
    category: "Electronics",
  },
  {
    id: "little-explorers",
    name: "Little Explorers",
    description: "Toys, books, and playroom furniture for newborns through pre-teens.",
    mobileContact: "+254 700 444 555",
    email: "hello@littleexplorers.com",
    websiteUrl: "https://littleexplorers.example.com",
    images: ["/images/stores/little-explorers-1.jpg"],
    workingHours: "Mon – Sat: 10:00 AM – 9:00 PM · Sun: 11:00 AM – 7:00 PM",
    category: "Kids & Toys",
  },
  {
    id: "harbor-social",
    name: "Harbor Social",
    description: "An all-day restaurant and rooftop bar serving coastal-inspired small plates.",
    mobileContact: "+254 700 555 666",
    email: "reservations@harborsocial.com",
    websiteUrl: "https://harborsocial.example.com",
    images: ["/images/stores/harbor-social-1.jpg", "/images/stores/harbor-social-2.jpg"],
    workingHours: "Daily: 11:00 AM – 12:00 AM",
    category: "Dining",
  },
  {
    id: "pixel-arcade",
    name: "Pixel Arcade",
    description: "A retro-meets-modern gaming arcade with VR pods, claw machines, and a party room.",
    mobileContact: "+254 700 666 777",
    email: "play@pixelarcade.com",
    websiteUrl: "https://pixelarcade.example.com",
    images: ["/images/stores/pixel-arcade-1.jpg"],
    workingHours: "Daily: 10:00 AM – 11:00 PM",
    category: "Entertainment",
  },
  {
    id: "nest-home",
    name: "Nest Home",
    description: "Furniture, textiles, and decor for every room, with a free in-store styling consult.",
    mobileContact: "+254 700 777 888",
    email: "hello@nesthome.com",
    websiteUrl: "https://nesthome.example.com",
    images: ["/images/stores/nest-home-1.jpg"],
    workingHours: "Mon – Sat: 10:00 AM – 9:00 PM · Sun: 11:00 AM – 7:00 PM",
    category: "Home & Living",
  },
];

// -----------------------------------------------------------------------------
// Store categories
// -----------------------------------------------------------------------------
export interface CategoryInfo {
  name: StoreCategory;
  image: string;
}
 
export const CATEGORIES: CategoryInfo[] = [
  { name: "Fashion", image: "/images/categories/category-fashion.jpg" },
  { name: "Beauty & Wellness", image: "/images/categories/category-beauty.jpg" },
  { name: "Electronics", image: "/images/categories/category-electronics.jpg" },
  { name: "Kids & Toys", image: "/images/categories/category-kids-toys.jpg" },
  { name: "Dining", image: "/images/categories/category-dining.jpg" },
  { name: "Entertainment", image: "/images/categories/category-entertainment.jpg" },
  { name: "Home & Living", image: "/images/categories/category-home-living.jpg" },
];

// -----------------------------------------------------------------------------
// Hero carousel
// -----------------------------------------------------------------------------
export interface HeroSlide {
  id: string;
  title: string;
  tagline: string;
  link: string;
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "fashion",
    title: "Fashion Avenue",
    tagline: "New season, new arrivals",
    link: "/directory?category=Fashion",
    image: "/images/hero/hero-fashion.jpg",
  },
  {
    id: "dining",
    title: "Dine & Unwind",
    tagline: "Something for every craving",
    link: "/directory?category=Dining",
    image: "/images/hero/hero-dining.jpg",
  },
  {
    id: "entertainment",
    title: "Entertain the Family",
    tagline: "Play, watch, and celebrate",
    link: "/directory?category=Entertainment",
    image: "/images/hero/hero-entertainment.jpg",
  },
  {
    id: "beauty",
    title: "Beauty & Wellness",
    tagline: "Slow down, treat yourself",
    link: "/directory?category=Beauty%20%26%20Wellness",
    image: "/images/hero/hero-beauty.jpg",
  },
  {
    id: "offers",
    title: "This Week's Offers",
    tagline: "Deals worth the trip",
    link: "/offers",
    image: "/images/hero/hero-offers.jpg",
  },
];

// -----------------------------------------------------------------------------
// Mall services / amenities
// -----------------------------------------------------------------------------
export interface MallService {
  id: string;
  title: string;
  description: string;
  link: string;
}
 
export const SERVICES: MallService[] = [
  {
    id: "free-wifi",
    title: "Free Wi-Fi",
    description: "Fast, complimentary internet across every level of the mall.",
    link: "/services/free-wifi",
  },
  {
    id: "prayer-rooms",
    title: "Prayer Rooms",
    description: "Quiet, dedicated rooms open throughout the day for all faiths.",
    link: "/services/prayer-rooms",
  },
  {
    id: "accessible-parking",
    title: "Disabled Parking & Ramps",
    description: "Reserved accessible bays and step-free ramp access at every entrance.",
    link: "/services/accessible-parking",
  },
  {
    id: "ample-parking",
    title: "Ample Parking",
    description: "Multi-level parking with real-time bay availability and valet options.",
    link: "/services/ample-parking",
  },
  {
    id: "atms",
    title: "ATM Machines",
    description: "Multiple bank ATMs conveniently located near entrances and the food court.",
    link: "/services/atms",
  },
];