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

export type StoreFloor =
  | "Ground Floor"
  | "First Floor"
  | "Second Floor"
  | "Third Floor";

export interface Store {
  id: string;
  slug: string;

  name: string;
  description: string;

  category: StoreCategory;

  floor: StoreFloor;
  unit: string;

  featured: boolean;

  mobileContact: string;
  email: string;
  websiteUrl: string;

  images: string[];
  logo?: string;

  workingHours: string;

  tags: string[];
  hasOffers?: boolean;
  isNew?: boolean;
  acceptsGiftCard?: boolean;

  featuredOrder?: number;

  socials?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };

  coordinates?: {
    floor: StoreFloor;
    x: number;
    y: number;
  };
}

export const STORES: Store[] = [
  {
    id: "north-star-fashion",
    slug: "north-star-fashion",

    name: "North Star Fashion",
    description:
      "Contemporary ready-to-wear for men and women, featuring a curated mix of local and international designers.",

    category: "Fashion",
    floor: "First Floor",
    unit: "F-112",

    featured: true,

    mobileContact: "+254 700 111 222",
    email: "hello@northstarfashion.com",
    websiteUrl: "https://northstarfashion.example.com",

    images: [
      "/images/stores/zara.jpg",
      "/images/stores/north-star-fashion-2.jpg",
    ],

    logo: "/images/stores/logos/north-star-fashion.svg",

    workingHours:
      "Mon – Sat: 10:00 AM – 10:00 PM · Sun: 11:00 AM – 8:00 PM",

    tags: [
      "fashion",
      "clothing",
      "menswear",
      "womenswear",
      "designer",
      "apparel",
    ],
  },

  {
    id: "vivo",
    slug: "vivo-women",

    name: "Vivo ",
    description:
      "Leading brand in women's fashion, offering a wide range of stylish clothing, footwear, and accessories for every occasion.",

    category: "Fashion",
    floor: "First Floor",
    unit: "F-112",

    featured: false,

    mobileContact: "+254 700 111 222",
    email: "hello@vivowomen.com",
    websiteUrl: "https://vivowomen.example.com",

    images: [
      "/images/stores/vivo.jpg",
      "/images/stores/vivo-2.jpg",
    ],

    logo: "/images/stores/logos/vivo.svg",

    workingHours:
      "Mon – Sat: 10:00 AM – 10:00 PM · Sun: 11:00 AM – 8:00 PM",

    tags: [
      "fashion",
      "clothing",
      "menswear",
      "womenswear",
      "designer",
      "apparel",
    ],
  },

  {
    id: "velvet-and-vine",
    slug: "velvet-and-vine",

    name: "Velvet & Vine",
    description:
      "Luxury spa and skincare studio offering premium facials, massage therapy, and curated beauty products.",

    category: "Beauty & Wellness",
    floor: "Second Floor",
    unit: "S-204",

    featured: false,

    mobileContact: "+254 700 222 333",
    email: "book@velvetandvine.com",
    websiteUrl: "https://velvetandvine.example.com",

    images: [
      "/images/stores/spa.jpg",
      "/images/stores/velvet-and-vine-2.jpg",
    ],

    logo: "/images/stores/logos/velvet-and-vine.svg",

    workingHours:
      "Daily: 9:00 AM – 9:00 PM",

    tags: [
      "spa",
      "massage",
      "beauty",
      "facial",
      "wellness",
      "skincare",
    ],
  },

  {
    id: "circuit-and-co",
    slug: "circuit-and-co",

    name: "Circuit & Co.",
    description:
      "Latest smartphones, laptops, gaming accessories, smart home devices, repairs, and trade-ins.",

    category: "Electronics",
    floor: "Ground Floor",
    unit: "G-018",

    featured: true,

    mobileContact: "+254 700 333 444",
    email: "support@circuitandco.com",
    websiteUrl: "https://circuitandco.example.com",

    images: [
      "/images/stores/samsung.jpg",
      "/images/stores/circuit-and-co-2.jpg",
    ],

    logo: "/images/stores/logos/circuit-and-co.svg",

    workingHours:
      "Mon – Sun: 10:00 AM – 10:00 PM",

    tags: [
      "electronics",
      "phones",
      "laptops",
      "gaming",
      "repair",
      "apple",
      "android",
    ],
  },

  {
    id: "little-explorers",
    slug: "little-explorers",

    name: "Little Explorers",

    description:
      "A colourful children's store filled with educational toys, books, games, and nursery furniture.",

    category: "Kids & Toys",
    floor: "Second Floor",
    unit: "S-221",

    featured: false,

    mobileContact: "+254 700 444 555",
    email: "hello@littleexplorers.com",
    websiteUrl: "https://littleexplorers.example.com",

    images: [
      "/images/stores/toys.jpg",
      "/images/stores/little-explorers-2.jpg",
    ],

    logo: "/images/stores/logos/little-explorers.svg",

    workingHours:
      "Mon – Sat: 10:00 AM – 9:00 PM · Sun: 11:00 AM – 7:00 PM",

    tags: [
      "kids",
      "toys",
      "books",
      "baby",
      "games",
      "nursery",
    ],
  },

  {
    id: "harbor-social",
    slug: "harbor-social",

    name: "Harbor Social",

    description:
      "An all-day dining destination serving breakfast, lunch, dinner, cocktails, and rooftop experiences.",

    category: "Dining",
    floor: "Third Floor",
    unit: "R-305",

    featured: true,

    mobileContact: "+254 700 555 666",
    email: "reservations@harborsocial.com",
    websiteUrl: "https://harborsocial.example.com",

    images: [
      "/images/stores/cjs.jpg",
      "/images/stores/harbor-social-2.jpg",
    ],

    logo: "/images/stores/logos/harbor-social.svg",

    workingHours:
      "Daily: 11:00 AM – 12:00 AM",

    tags: [
      "restaurant",
      "food",
      "bar",
      "cocktails",
      "lunch",
      "dinner",
      "rooftop",
    ],
  },

  {
    id: "pixel-arcade",
    slug: "pixel-arcade",

    name: "Pixel Arcade",

    description:
      "A family entertainment destination with arcade games, VR experiences, claw machines, and party rooms.",

    category: "Entertainment",
    floor: "Third Floor",
    unit: "E-312",

    featured: false,

    mobileContact: "+254 700 666 777",
    email: "play@pixelarcade.com",
    websiteUrl: "https://pixelarcade.example.com",

    images: [
      "/images/stores/game.jpg",
      "/images/stores/pixel-arcade-2.jpg",
    ],

    logo: "/images/stores/logos/pixel-arcade.svg",

    workingHours:
      "Daily: 10:00 AM – 11:00 PM",

    tags: [
      "gaming",
      "vr",
      "arcade",
      "family",
      "fun",
      "kids",
    ],
  },

  {
    id: "nest-home",
    slug: "nest-home",

    name: "Nest Home",

    description:
      "Modern furniture, décor, lighting, and interior styling for every room in your home.",

    category: "Home & Living",
    floor: "First Floor",
    unit: "H-145",

    featured: false,

    mobileContact: "+254 700 777 888",
    email: "hello@nesthome.com",
    websiteUrl: "https://nesthome.example.com",

    images: [
      "/images/stores/home.jpg",
      "/images/stores/nest-home-2.jpg",
    ],

    logo: "/images/stores/logos/nest-home.svg",

    workingHours:
      "Mon – Sat: 10:00 AM – 9:00 PM · Sun: 11:00 AM – 7:00 PM",

    tags: [
      "furniture",
      "decor",
      "lighting",
      "home",
      "interior",
      "living",
    ],
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
    link: "/stores?category=Fashion",
    image: "/images/hero/hero-fashion.jpg",
  },
  {
    id: "dining",
    title: "Dine & Unwind",
    tagline: "Something for every craving",
    link: "/stores?category=Dining",
    image: "/images/hero/hero-dining.jpg",
  },
  {
    id: "entertainment",
    title: "Entertain the Family",
    tagline: "Play, watch, and celebrate",
    link: "/stores?category=Entertainment",
    image: "/images/hero/hero-entertainment.jpg",
  },
  {
    id: "beauty",
    title: "Beauty & Wellness",
    tagline: "Slow down, treat yourself",
    link: "/stores?category=Beauty%20%26%20Wellness",
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
    link: "/offers",
    image: "/images/hero/hero-offers.jpg",
  },
  {
    id: "stores",
    title: "Find a Store",
    tagline: "Browse the full store directory",
    link: "/stores",
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
    link: "/stores?category=Dining",
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

  details: string;
  location: string;
  instructions?: string[];

  image: string;

  icon: string;
}
 
export const SERVICES: MallService[] = [
  {
    id: "prayer-rooms",
    title: "Prayer Rooms",
    description:
      "Quiet, dedicated rooms open throughout the day for all faiths.",

    details:
      "Our prayer rooms provide a calm and respectful environment for visitors seeking a quiet place for prayer or reflection.",

    location: "Ground Floor, East Wing next to Customer Service",

    instructions: [
      "Open daily during mall operating hours.",
      "Please keep noise to a minimum.",
      "Shoes should be removed where indicated."
    ],

    image: "/images/services/prayer-room.jpg",
    icon:"prayer",
  },

  {
    id: "atms",
    title: "ATM Machines",
    description:
      "Multiple bank ATMs conveniently located throughout the mall.",

    details:
      "ATMs from multiple banks are available for convenient cash withdrawals and balance enquiries.",

    location:
      "Main Entrance, Food Court and Basement Parking Lobby",

    instructions: [
      "Available during mall operating hours.",
      "Security personnel are stationed nearby."
    ],

    image: "/images/services/atm.jpg",
    icon: "atm",
  },
  {
    id: "wifi",
    title: "Free Wi-Fi",
    description:"Access our complimentary Wi-Fi throughout the mall.",

    details:
      "Enjoy free high-speed Wi-Fi access in all public areas of the mall.",
    location: "Throughout the mall",
    image: "/images/services/free-wifi.jpg",
    icon: "wifi",
  },
  {
    id: "parking",
    title: "Parking",
    description: "Convenient and secure parking available throughout the mall.",
    details: "Enjoy safe and accessible parking with easy access to all areas of the mall.",
    location: "Basement Parking Level",
    image: "/images/services/parking.jpg",
    icon: "parking",
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description: "Wheelchair ramps, elevators, and accessible restrooms available.",
    details: "Our mall is designed to be accessible to all visitors, with features to assist those with mobility challenges.",
    location: "Throughout the mall",
    image: "/images/services/accessibility.jpg",
    icon: "accessibility",
  }
];

// -----------------------------------------------------------------------------
// Offers
// -----------------------------------------------------------------------------

export interface Offer {
  id: string;
  storeId?: string;

  title: string;
  image: string;

  /**
   * Store / brand displayed on the offer card.
   * For mall-wide offers this can be "Imaara Mall".
   */
  brand: string;

  /**
   * Optional short description shown below the brand.
   */
  description?: string;

  /**
   * Offer validity.
   */
  startDate?: string;
  endDate?: string;

  /**
   * Optional category used by the filter.
   * Examples: Fashion, Beauty, Dining, Entertainment.
   */
  category?: string;
}

export const OFFERS: Offer[] = [
  {
    id: "offer-north-star-fashion",
    storeId: "north-star-fashion",
    title: "Buy 2, Get 1 Free",
    brand: "North Star Fashion",
    description:
      "Shop selected styles and enjoy our latest buy two, get one free offer.",
    startDate: "2026-08-01",
    endDate: "2026-08-31",
    category: "Fashion",
    image: "/images/offers/offer.jpg",
  },

  {
    id: "offer-velvet-and-vine",
    storeId: "velvet-and-vine",
    title: "20% Off All Facials",
    brand: "Velvet & Vine",
    description:
      "Refresh your routine with 20% off selected facial treatments.",
    startDate: "2026-08-01",
    endDate: "2026-08-31",
    category: "Beauty",
    image: "/images/offers/offer1.jpg",
  },

  {
    id: "offer-circuit-and-co",
    storeId: "circuit-and-co",
    title: "Bonus Trade-In Credit",
    brand: "Circuit & Co.",
    description:
      "Upgrade your device and receive additional credit on selected trade-ins.",
    startDate: "2026-08-01",
    endDate: "2026-08-31",
    category: "Electronics",
    image: "/images/offers/offer2.jpg",
  },

  {
    id: "offer-little-explorers",
    storeId: "little-explorers",
    title: "Kids' Books, 3 for 2",
    brand: "Little Explorers",
    description:
      "Pick three selected children's books and pay for only two.",
    startDate: "2026-08-01",
    endDate: "2026-08-31",
    category: "Books",
    image: "/images/offers/offer3.jpg",
  },

  {
    id: "offer-harbor-social",
    storeId: "harbor-social",
    title: "Happy Hour All Day Sunday",
    brand: "Harbor Social",
    description:
      "Make Sundays better with selected drinks and bites at special prices.",
    startDate: "2026-08-01",
    endDate: "2026-08-31",
    category: "Dining",
    image: "/images/offers/offer4.jpg",
  },

  {
    id: "offer-pixel-arcade",
    storeId: "pixel-arcade",
    title: "Double Arcade Credits",
    brand: "Pixel Arcade",
    description:
      "Double your arcade credits every weekend throughout August.",
    startDate: "2026-08-01",
    endDate: "2026-08-31",
    category: "Entertainment",
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
    href: "/stores/apple",
  },
  {
    id: "zara",
    name: "Zara",
    image: "/images/stores/zara.jpg",
    size: "narrow",
    href: "/stores/zara",
  },
  {
    id: "cjs",
    name: "CJ's",
    image: "/images/stores/cjs.jpg",
    size: "wide",
    href: "/stores/cjs",
    featured: true,
  },
  {
    id: "samsung",
    name: "Samsung",
    image: "/images/stores/samsung.jpg",
    size: "regular",
    href: "/stores/samsung",
  },
  {
    id: "vivo",
    name: "Vivo",
    image: "/images/stores/vivo.jpg",
    size: "wide",
    href: "/stores/vivo-women",
  },
  {
    id: "naivas",
    name: "Naivas",
    image: "/images/stores/naivas.jpg",
    size: "narrow",
    href: "/stores/naivas",
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
    href: "/stores",
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