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
// Hero
// -----------------------------------------------------------------------------
export interface HeroPanel {
  id: string;
  title: string;
  tagline: string;
  link: string;
  image: string;
}
 
export const HERO_PANELS: HeroPanel[] = [
  {
    id: "shopping",
    title: "Awesome Offers",
    tagline: "Great deals on your favorite brands",
    link: "/directory",
    image: "/images/hero/hero-offers.jpg",
  },
  {
    id: "stores",
    title: "Find a Store",
    tagline: "Browse the full store directory",
    link: "/directory",
    image: "/images/hero/hero-wellness.jpg",
  },
  {
    id: "visit",
    title: "Enjoy the Experience",
    tagline: "Great shopping, dining, and entertainment under one roof",
    link: "/visit",
    image: "/images/hero/hero-entertainment.jpg",
  },
  {
    id: "dining",
    title: "Dining Delights",
    tagline: "A culinary adventure awaits",
    link: "/dining",
    image: "/images/hero/hero-dining.jpg",
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

// -----------------------------------------------------------------------------
// Offers
// -----------------------------------------------------------------------------
export interface Offer {
  id: string;
  storeId: string;
  title: string;
  image: string;
}
 
export const OFFERS: Offer[] = [
  {
    id: "offer-north-star-fashion",
    storeId: "north-star-fashion",
    title: "Buy 2, Get 1 Free",
    image: "/images/offers/offer.jpg",
  },
  {
    id: "offer-velvet-and-vine",
    storeId: "velvet-and-vine",
    title: "20% Off All Facials",
    image: "/images/offers/offer1.jpg",
  },
  {
    id: "offer-circuit-and-co",
    storeId: "circuit-and-co",
    title: "Bonus Trade-In Credit",
    image: "/images/offers/offer2.jpg",
  },
  {
    id: "offer-little-explorers",
    storeId: "little-explorers",
    title: "Kids' Books, 3 for 2",
    image: "/images/offers/offer3.jpg",
  },
  {
    id: "offer-harbor-social",
    storeId: "harbor-social",
    title: "Happy Hour All Day Sunday",
    image: "/images/offers/offer4.jpg",
  },
  {
    id: "offer-pixel-arcade",
    storeId: "pixel-arcade",
    title: "Double Arcade Credits",
    image: "/images/offers/offer5.jpg",
  },
];

//-------FOOTER DETAILS-------//
export const footerLinks = {
  explore: [
    {
      title: "Stores",
      href: "/stores",
    },
    {
      title: "Dining",
      href: "/dining",
    },
    {
      title: "Entertainment",
      href: "/entertainment",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Offers",
      href: "/offers",
    },
    {
      title: "Gift Cards",
      href: "/gift-cards",
    },
  ],

  information: [
    {
      title: "About Imaara",
      href: "/about",
    },
    {
      title: "Leasing",
      href: "/leasing",
    },
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],

  legal: [
    {
      title: "Privacy",
      href: "/privacy",
    },
    {
      title: "Terms",
      href: "/terms",
    },
    {
      title: "Cookies",
      href: "/cookies",
    },
    {
      title: "Accessibility",
      href: "/accessibility",
    },
  ],
};

export const mallInfo = {
  name: "IMAARA",

  slogan: "The Heart of Shopping",

  address: [
    "Imaara Mall",
    "Mombasa Road",
    "Nairobi, Kenya",
  ],

  email: "marketing@theimaara.co.ke",

  phone: "+254 757 800 800",

  openingHours: [
    "Mon – Fri · 8:00 AM – 9:00 PM",
    "Sat – Sun · 8:00 AM – 10:00 PM",
  ],
};

export const socialLinks = [
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "Facebook",
    href: "#",
  },
  {
    name: "TikTok",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
];

// -----EVENTS SLIDER -----//
export interface Event {

    id: string;

    title: string;

    category: string;

    date: string;

    description: string;

    image: string;

    slug: string;

}

export const events: Event[] = [
  {
      id:"1",
      category:"Easter Weekend",
      title:"Happy Easter!",
      date:"03.07.26",
      description:"The season is here...",
      image:"/images/events/event1.jpg",
      slug:"summer-is-in"
  },
  {
      id:"2",
      category:"Party Time",
      title:"The Party Is on!",
      date:"07.08.26",
      description:"Enjoy happy times at the Imaara Mall rooftop bar and restaurant.",
      image:"/images/events/event2.jpg",
      slug:"rooftop-party"
  },
  {
      id:"3",
      category:"Maasai Market",
      title:"Maasai Cultural Experience",
      date:"15.08.26",
      description:"Immerse yourself in the rich traditions of the Maasai people.",
      image:"/images/events/event3.jpg",
      slug:"maasai-culture"
  },
]

// ----TRENDING STORES----//
export type CarouselSize = "narrow" | "regular" | "wide";
 
export interface TrendingStore {
  id: string;
  name: string;
  image: string;
  size: CarouselSize;
  /** Featured cards render taller, like the Swatch spot in the reference. */
  featured?: boolean;
  href?: string;
}
 
// Swap `image` for real assets in /public. Any remote host must be added to
// next.config.js images.remotePatterns if you keep using external URLs.
export const trendingStores: TrendingStore[] = [
  {
    id: "apple",
    name: "Apple Store",
    image: "/images/stores/apple.jpg",
    size: "regular",
  },
  {
    id: "zara",
    name: "Zara",
    image: "/images/stores/zara.jpg",
    size: "narrow",
  },
  {
    id: "cjs",
    name: "CJ's",
    image: "/images/stores/cjs.jpg",
    size: "wide",
    featured: true,
  },
  {
    id: "samsung",
    name: "Samsung",
    image: "/images/stores/samsung.jpg",
    size: "regular",
  },
  {
    id: "vivo",
    name: "Vivo",
    image: "/images/stores/vivo.jpg",
    size: "wide",
  },
  {
    id: "naivas",
    name: "Naivas",
    image: "/images/stores/naivas.jpg",
    size: "narrow",
    featured: true,
  },
];

export interface VisitCard {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  href: string;
}

export const planYourVisitCards: VisitCard[] = [
  {
    id: "store-directory",
    eyebrow: "Find A Store",
    title: "Imaara Mall Store Directory",
    image: "/images/home-living.jpg",
    href: "/store-directory",
  },
  {
    id: "mall-services",
    eyebrow: "At Your Convenience",
    title: "Mall Services",
    image: "/images/services-background.jpg",
    href: "/services",
  },
];

// ----feature rows-----//
export interface FeatureRow {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

// Rows render text-left/image-right, then alternate to image-left/text-right,
// and so on — set purely by index (even = text-first) in the section below.
export const featureRows: FeatureRow[] = [
  {
    id: "shop-the-mall",
    title: "Shop The Mall",
    description:
      "Discover a world of shopping possibilities at our vibrant mall, where you can find everything from fashion and electronics to home goods and more.",
    ctaLabel: "Explore Our Stores",
    ctaHref: "/stores",
    image: "/images/home-living.jpg",
    imageAlt: "Imaara Mall",
  },
  {
    id: "have-a-question",
    title: "Have a Question? We're Here to Help",
    description:
      "Connect directly with one of our expert agents to enquire about general information, brand offers, Mall Gift Cards, and more.",
    ctaLabel: "Connect With Us",
    ctaHref: "/contact",
    image: "/images/concierge.jpg",
    imageAlt: "A concierge holding a phone with a QR code, boxes stacked behind her",
  },
];