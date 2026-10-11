export interface SubcategoryItem {
  id: string;
  name: string;
  imageUrl: string;
}

export const CATEGORY_SIDEBAR_ITEMS: Record<string, SubcategoryItem[]> = {
  Gaming: [
    {
      id: 'All',
      name: 'All',
      imageUrl: 'https://images.sharepal.in/misc/hard-coded/sharepal/Product=All%20Products.webp',
    },
    {
      id: 'Handheld',
      name: 'Handheld',
      imageUrl: 'https://images.sharepal.in/new%20image/NINTENDO_SWITCH_01_Hero.png',
    },
    {
      id: 'GTA VI',
      name: 'GTA VI',
      imageUrl: 'https://images.sharepal.in/category-icons/gta-vi.webp',
    },
    {
      id: 'PS5 Console',
      name: 'PS5 Console',
      imageUrl: 'https://images.sharepal.in/sub-category-card/ps5-console-on-rent-sharepal.webp',
    },
    {
      id: 'Xbox Console',
      name: 'Xbox Console',
      imageUrl: 'https://images.sharepal.in/sub-category-card/xbox-console-on-rent-sharepal.webp',
    },
    {
      id: 'VR',
      name: 'VR',
      imageUrl: 'https://images.sharepal.in/sub-category-card/vr-on-rent-sharepal.webp',
    },
    {
      id: 'Racing Wheel',
      name: 'Racing Wheel',
      imageUrl: 'https://images.sharepal.in/categories/gaming-consoles/gaming-accessories/logitech-G29-driving-force-racing-wheel/logitech-g29-racing-wheel-on-rent-sharepal-1.webp',
    },
    {
      id: 'Big Screen',
      name: 'Big Screen',
      imageUrl: 'https://images.sharepal.in/categories/gaming-consoles/big-screen-gaming/products/ps5-with-2-controllers-with-projector-on-rent+.webp',
    },
    {
      id: 'PS5 Games',
      name: 'PS5 Games',
      imageUrl: 'https://images.sharepal.in/categories/gaming-consoles/ps5-games/gta-V/gta%20v.webp',
    },
  ],

  Photography: [
    {
      id: 'All',
      name: 'All',
      imageUrl: 'https://images.sharepal.in/misc/hard-coded/sharepal/Product=All%20Products.webp',
    },
    {
      id: 'Dji Drones',
      name: 'DJI Drones',
      imageUrl: 'https://images.sharepal.in/sub-category-card/DJI-Mini-4-Pro-RC2-drone.webp',
    },
    {
      id: 'Wearables',
      name: 'Wearables',
      imageUrl: 'https://images.sharepal.in/new%20image/META_WAYFARER_TRANSITION_01_Hero.png',
    },
    {
      id: 'iPhones',
      name: 'iPhones',
      imageUrl: 'https://images.sharepal.in/categories/cameras/iphones/iphone-17-pro-max/iphone-17-pro-max-on-rent-on-sharepal-1.webp',
    },
    {
      id: 'Cameras',
      name: 'Cameras',
      imageUrl: 'https://images.sharepal.in/sub-category-card/dslr-cameras-on-rent-sharepal.webp',
    },
    {
      id: 'Pocket Cameras',
      name: 'Pocket Cameras',
      imageUrl: 'https://images.sharepal.in/category-icons/pocket-cameras-on-rent.webp',
    },
    {
      id: '360 Cameras',
      name: '360 Cameras',
      imageUrl: 'https://images.sharepal.in/category-icons/360-cameras-on-rent.webp',
    },
    {
      id: 'Action Cameras',
      name: 'Action Cameras',
      imageUrl: 'https://images.sharepal.in/category-icons/action-cameras-on-rent.webp',
    },
    {
      id: 'DSLR Cameras',
      name: 'DSLR Cameras',
      imageUrl: 'https://images.sharepal.in/sub-category-card/dslr-cameras-on-rent-sharepal.webp',
    },
    {
      id: 'Mirrorless Cameras',
      name: 'Mirrorless',
      imageUrl: 'https://images.sharepal.in/categories/cameras/dslr-cameras/sony-zve10/sony-zv-e10-vlogging-camera-on-rent-on-sharepal-1.webp',
    },
    {
      id: 'Vlogging',
      name: 'Vlogging',
      imageUrl: 'https://images.sharepal.in/category-card-images/dslr-camera-on-rent-sharepal.webp',
    },
    {
      id: 'UNLMTD Vlogging',
      name: 'UNLMTD Vlogging',
      imageUrl: 'https://images.sharepal.in/sub-category-card/UNLMTD%20Vlogging%20(1).webp',
    },
    {
      id: 'Wildlife Photography',
      name: 'Wildlife',
      imageUrl: 'https://images.sharepal.in/categories/cameras/dslr-cameras/sony-alpha-7-zoomlens-combo/sony-alpha7-zoom-lens-combo-on-rent-sharepal-1.webp',
    },
    {
      id: 'Professional Cameras',
      name: 'Professional',
      imageUrl: 'https://images.sharepal.in/sub-category-card/professional-cameras-on-rent.webp',
    },
    {
      id: 'GoPro Cameras',
      name: 'GoPro',
      imageUrl: 'https://images.sharepal.in/sub-category-card/gopro-cameras-on-rent-sharepal.webp',
    },
    {
      id: 'Insta360 Cameras',
      name: 'Insta360',
      imageUrl: 'https://images.sharepal.in/sub-category-card/360-cameras-on-rent-sharepal.webp',
    },
    {
      id: 'DJI Cameras',
      name: 'DJI Cameras',
      imageUrl: 'https://images.sharepal.in/sub-category-card/dji-cameras-on-rent-sharepal.webp',
    },
    {
      id: 'DSLR Gimbal Combos',
      name: 'DSLR Gimbals',
      imageUrl: 'https://images.sharepal.in/sub-category-card/dslr-gimbal-on-rent-sharepal.webp',
    },
    {
      id: 'Mobile Gimbals',
      name: 'Mobile Gimbals',
      imageUrl: 'https://images.sharepal.in/categories/creator-gear/gimbals-and-grips/dji-osmo-mobile/dji-osmo-6-on-rent-sharepal-1.webp',
    },
    {
      id: 'Wireless & Collar Mics',
      name: 'Wireless Mics',
      imageUrl: 'https://images.sharepal.in/categories/audio-visual-equipment/mics/rode-go-ii-mics/rode-go-ii-mic-on-rent-sharepal-1.webp',
    },
    {
      id: 'DSLR Lens',
      name: 'DSLR Lens',
      imageUrl: 'https://images.sharepal.in/sub-category-card/dslr-lens-on-rent-sharepal.webp',
    },
    {
      id: 'Tripod and camera accessories',
      name: 'Tripods',
      imageUrl: 'https://images.sharepal.in/sub-category-card/tripod_camera-accessories-on-rent-sharepal.webp',
    },
  ],

  Outdoor: [
    {
      id: 'All',
      name: 'All',
      imageUrl: 'https://images.sharepal.in/misc/hard-coded/sharepal/Product=All%20Products.webp',
    },
    {
      id: 'Trekking Gear',
      name: 'Trekking Gear',
      imageUrl: 'https://images.sharepal.in/sub-category-card/trekking-gear-on-rent-sharepal-1.webp',
    },
    {
      id: 'Riding Gear',
      name: 'Riding Gear',
      imageUrl: 'https://images.sharepal.in/sub-category-card/riding-gear-on-rent-sharepal-1.webp',
    },
    {
      id: 'Camping Gear',
      name: 'Camping Gear',
      imageUrl: 'https://images.sharepal.in/categories/camping-gear/camping-tents/2-person-camping-tent/2-persons-camping-tents-on-rent-sharepal-1.webp',
    },
    {
      id: 'Trekking Shoes',
      name: 'Trekking Shoes',
      imageUrl: 'https://images.sharepal.in/categories/trekking-gear/trekking-shoes/men-s-leather-high-trekking-shoes-mt100/unisex-trek-mt100-trekking-shoes-on-rent-1.webp',
    },
    {
      id: 'Snow Boots',
      name: 'Snow Boots',
      imageUrl: 'https://images.sharepal.in/sub-category-card/snow-boots-on-rent-sharepal.webp',
    },
    {
      id: 'Trekking Jackets',
      name: 'Trek Jackets',
      imageUrl: 'https://images.sharepal.in/sub-category-card/trekking-jackets-on-rent-sharepal.webp',
    },
    {
      id: 'Trek/Snow Pants',
      name: 'Trek Pants',
      imageUrl: 'https://images.sharepal.in/categories/trekking-gear/trek-accessories/women-trek-pant/women-trek-pant-on-rent-sharepal-1.webp',
    },
    {
      id: 'Trek Accessories',
      name: 'Accessories',
      imageUrl: 'https://images.sharepal.in/sub-category-card/trek-accessories-on-rent-sharepal.webp',
    },
    {
      id: 'Winter Jackets',
      name: 'Winter Wear',
      imageUrl: 'https://images.sharepal.in/sub-category-card/winter-jackets-on-rent-sharepal.webp',
    },
    {
      id: 'Riding Jackets',
      name: 'Riding Jackets',
      imageUrl: 'https://images.sharepal.in/sub-category-card/riding-jackets-on-rent-sharepal.webp',
    },
    {
      id: 'Riding Boots',
      name: 'Riding Boots',
      imageUrl: 'https://images.sharepal.in/sub-category-card/riding-boots-on-rent-sharepal.webp',
    },
    {
      id: 'Riding Essentials',
      name: 'Essentials',
      imageUrl: 'https://images.sharepal.in/sub-category-card/riding-essentials-on-rent-sharepal.webp',
    },
    {
      id: 'Riding Luggage',
      name: 'Luggage',
      imageUrl: 'https://images.sharepal.in/sub-category-card/riding-luggage-on-rent-sharepal.webp',
    },
    {
      id: 'Backpacks',
      name: 'Backpacks',
      imageUrl: 'https://images.sharepal.in/sub-category-card/backPacks-on-rent-sharepal.webp',
    },
    {
      id: 'Binoculars',
      name: 'Binoculars',
      imageUrl: 'https://images.sharepal.in/sub-category-card/binoculars-on-rent-sharepal.webp',
    },
    {
      id: 'Camping Tents',
      name: 'Camping Tents',
      imageUrl: 'https://images.sharepal.in/sub-category-card/camping-tents-on-sharepal.webp',
    },
    {
      id: 'Camping Stools & Tables',
      name: 'Stools & Tables',
      imageUrl: 'https://images.sharepal.in/sub-category-card/camping-stools-tables-on-rent-sharepal.webp',
    },
    {
      id: 'Sleeping Bags & Mats',
      name: 'Sleeping Bags',
      imageUrl: 'https://images.sharepal.in/sub-category-card/Sleeping-bags-and-mats-on-rent-sharepal.webp',
    },
  ],

  Entertainment: [
    {
      id: 'All',
      name: 'All',
      imageUrl: 'https://images.sharepal.in/misc/hard-coded/sharepal/Product=All%20Products.webp',
    },
    {
      id: 'Beauty',
      name: 'Beauty',
      imageUrl: 'https://images.sharepal.in/new%20image/DYSON-AIR-WRAP_01_Hero.png',
    },
    {
      id: 'Headphones',
      name: 'Headphones',
      imageUrl: 'https://images.sharepal.in/new%20image/APPLE_AIRPODS_MAX_01_Hero.png',
    },
    {
      id: 'Laptops',
      name: 'Laptops',
      imageUrl: 'https://images.sharepal.in/new%20image/APPLE_MACBOOK_PRO_01_Hero.png',
    },
    {
      id: 'Wearables',
      name: 'Wearables',
      imageUrl: 'https://images.sharepal.in/new%20image/META_WAYFARER_TRANSITION_01_Hero.png',
    },
    {
      id: 'Speakers',
      name: 'Speakers',
      imageUrl: 'https://images.sharepal.in/sub-category-card/speakers-on-rent-sharepal.webp',
    },
    {
      id: 'Mics',
      name: 'Mics',
      imageUrl: 'https://images.sharepal.in/sub-category-card/mics-on-rent-sharepal.webp',
    },
    {
      id: 'VR',
      name: 'VR',
      imageUrl: 'https://images.sharepal.in/sub-category-card/vr-on-rent-sharepal.webp',
    },
    {
      id: 'Projectors',
      name: 'Projectors',
      imageUrl: 'https://images.sharepal.in/sub-category-card/Projectors-on-rent-sharepal.webp',
    },
  ],
};

export const MEGA_MENUS: Record<string, string[][]> = {
  Photography: [
    ['Dji Drones', 'Wearables', 'iPhones', 'Cameras'],
    ['Pocket Cameras', '360 Cameras', 'Action Cameras', 'Dji Pocket'],
    ['Mirrorless Cameras', 'Vlogging', 'UNLMTD Vlogging', 'Wildlife Photography'],
    ['Professional Cameras', 'Dji Ronin', 'Insta360 Cameras', 'Dji Cameras'],
    ['DSLR Gimbal Combos', 'Mobile Gimbals', 'Wireless & Collar Mics', 'DSLR Lens'],
    ['Tripod and camera accessories', 'Action Camera Mounts', 'Action Camera Add ons'],
  ],
  Gaming: [
    ['Handheld', 'GTA VI', 'PS5 Console', 'Xbox Console'],
    ['VR', 'Racing Wheel', 'Big Screen Gaming', 'PS5 Games'],
  ],
  Outdoor: [
    ['Trekking Gear', 'Riding Gear', 'Camping Gear', 'Trekking Shoes'],
    ['Snow Boots', 'Trekking Jackets', 'Trek/Snow Pants', 'Trek Accessories'],
    ['Winter Jackets', 'Riding Jackets', 'Riding Boots', 'Riding Essentials'],
    ['Riding Luggage', 'Backpacks', 'Binoculars', 'Camping Tents'],
    ['Camping Stools & Tables', 'Sleeping Bags & Mats'],
  ],
  Entertainment: [
    ['Beauty', 'Headphones', 'Laptops', 'Wearables'],
    ['Speakers', 'Mics', 'VR', 'Projectors'],
  ],
};

export const TOP_CATEGORIES = ['Photography', 'Gaming', 'Outdoor', 'Entertainment'] as const;

export interface CityInfo {
  name: string;
  iconType: 'monument' | 'gateway' | 'palace' | 'charminar' | 'temple' | 'soudha';
  popular: boolean;
}

export const POPULAR_CITIES: CityInfo[] = [
  { name: 'Delhi', iconType: 'monument', popular: true },
  { name: 'Mumbai', iconType: 'gateway', popular: true },
  { name: 'Pune', iconType: 'palace', popular: true },
  { name: 'Hyderabad', iconType: 'charminar', popular: true },
  { name: 'Chennai', iconType: 'temple', popular: true },
  { name: 'Bangalore', iconType: 'soudha', popular: true },
];

export const OTHER_CITIES = ['Faridabad', 'Kolkata', 'Gurgaon', 'Noida', 'Ghaziabad'];

export const OFFERS = [
  {
    id: 'offer-1',
    code: 'SHAREPAL',
    title: 'SHAREPAL',
    desc: 'Use code SHAREPAL & get 10% off on orders above ₹1500. Maximum discount ₹300.',
    tag: 'Popular',
  },
  {
    id: 'offer-2',
    code: 'EARLYBIRD15',
    title: 'EARLYBIRD15',
    desc: 'Use code EARLYBIRD15 & get 15% off on orders above ₹2500 when booked 7 DAYS in advance. Max ₹600.',
    tag: 'Save 15%',
  },
  {
    id: 'offer-3',
    code: 'EARLYBIRD20',
    title: 'EARLYBIRD20',
    desc: 'Use code EARLYBIRD20 & get 20% off on orders above ₹5000 when booked 15 DAYS in advance. Max ₹1200.',
    tag: 'Save 20%',
  },
];

export const CITY_HUBS: Record<string, string[]> = {
  Bangalore: [
    'Koramangala',
    'Indiranagar',
    'HSR Layout',
    'Whitefield',
    'Bellandur',
    'JP Nagar',
    'Jayanagar',
    'Electronic City',
    'BTM Layout',
    'Marathahalli',
    'Malleshwaram',
    'Hebbal',
    'Yelahanka',
    'Sarjapur Road',
    'Bannerghatta Road',
  ],
  Mumbai: [
    'Andheri West',
    'Bandra West',
    'Powai',
    'Juhu',
    'Lower Parel',
    'Borivali West',
    'Dadar',
    'Malad West',
    'Ghatkopar',
    'Thane West',
    'Navi Mumbai (Vashi)',
    'Goregaon East',
    'Worli',
    'Colaba',
    'Chembur',
  ],
  Pune: [
    'Baner',
    'Kothrud',
    'Viman Nagar',
    'Hinjawadi',
    'Wakad',
    'Koregaon Park',
    'Magarpatta City',
    'Aundh',
    'Kalyani Nagar',
    'Hadapsar',
    'Shivaji Nagar',
    'Pimple Saudagar',
    'Bavdhan',
    'Kharadi',
  ],
  Delhi: [
    'Connaught Place',
    'South Extension',
    'Hauz Khas',
    'Saket',
    'Dwarka Sector 12',
    'Rohini Sector 9',
    'Lajpat Nagar',
    'Vasant Kunj',
    'Karol Bagh',
    'Janakpuri',
    'Greater Kailash',
    'Pitampura',
    'Mayur Vihar',
  ],
  Hyderabad: [
    'Hitec City',
    'Gachibowli',
    'Madhapur',
    'Banjara Hills',
    'Jubilee Hills',
    'Kondapur',
    'Kukatpally',
    'Begumpet',
    'Secunderabad',
    'Ameerpet',
    'Miyapur',
  ],
  Chennai: [
    'T. Nagar',
    'Adyar',
    'Velachery',
    'Anna Nagar',
    'OMR (Thoraipakkam)',
    'Nungambakkam',
    'Besant Nagar',
    'Mylapore',
    'Porur',
    'Guindy',
    'Tambaram',
  ],
  Gurgaon: [
    'Cyber City (DLF Phase 2)',
    'Golf Course Road',
    'Sohna Road',
    'Sector 29',
    'DLF Phase 5',
    'Sector 56',
    'Sushant Lok',
    'MG Road',
  ],
  Noida: [
    'Sector 18',
    'Sector 62',
    'Sector 137',
    'Sector 50',
    'Sector 76',
    'Sector 128',
    'Greater Noida (Knowledge Park)',
  ],
  Kolkata: [
    'Salt Lake (Sector V)',
    'New Town',
    'Park Street',
    'Ballygunge',
    'South City (Jadavpur)',
    'Alipore',
    'Behala',
    'Rajarhat',
  ],
  Faridabad: [
    'Sector 15',
    'Sector 16',
    'NIT Faridabad',
    'Green Field Colony',
    'Greater Faridabad (Sector 81)',
  ],
  Ghaziabad: [
    'Indirapuram',
    'Vaishali',
    'Raj Nagar Extension',
    'Vasundhara',
    'Crossings Republik',
  ],
};

export const BANGALORE_AREAS = CITY_HUBS['Bangalore'];

export const getCityAreas = (cityName: string): string[] => {
  if (!cityName) return CITY_HUBS['Bangalore'];
  const matchKey = Object.keys(CITY_HUBS).find(
    (key) => key.toLowerCase() === cityName.toLowerCase()
  );
  if (matchKey && CITY_HUBS[matchKey]?.length > 0) {
    return CITY_HUBS[matchKey];
  }
  return [
    `${cityName} Central Hub`,
    `${cityName} North Hub`,
    `${cityName} South Hub`,
    `${cityName} East Hub`,
    `${cityName} West Hub`,
  ];
};

export const FAQS = [
  {
    id: 'faq-1',
    question: 'How can I rent from SharePal?',
    answer: 'Choose your desired console or gadget, select your delivery and pickup dates, complete our quick digital KYC verification, and pay. We provide doorstep delivery and pickup right across Bangalore!',
  },
  {
    id: 'faq-2',
    question: 'If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?',
    answer: 'Yes, partial extension is possible! You can easily extend individual products via your account dashboard or by contacting our Bangalore support team before your return slot.',
  },
  {
    id: 'faq-3',
    question: 'When does the rental start?',
    answer: 'The rental period starts from your chosen delivery date slot. We don\'t charge you for transit or courier delivery times.',
  },
  {
    id: 'faq-4',
    question: 'What will be the condition of the products at the time of delivery?',
    answer: 'All consoles and controllers are thoroughly tested, sanitized, updated to latest software versions, and packed in reinforced travel cases with original cables and accessories.',
  },
  {
    id: 'faq-5',
    question: 'Why is verification required?',
    answer: 'Since gaming gear is expensive and delicate, a standard 100% paperless government ID check helps maintain zero-deposit rentals for the entire community.',
  },
  {
    id: 'faq-6',
    question: 'Is there any security deposit required?',
    answer: 'SharePal offers ZERO security deposit for all verified Indian residents. Simply upload your Aadhaar or Driving License during checkout to enjoy zero-deposit rental!',
  },
  {
    id: 'faq-7',
    question: 'What if an accessory or controller gets damaged accidentally?',
    answer: 'We offer an optional CarePal Protection cover at checkout which covers minor accidental wear and tear. You are never liable for pre-existing scratches or manufacturer hardware defects.',
  },
  {
    id: 'faq-8',
    question: 'Can I choose specific games to be installed on the console?',
    answer: 'Yes! All PS5 and Xbox bundles come with 10+ popular titles pre-installed. You can also mention custom title requests in order notes or select them in the bundle configurator.',
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    quote: '" I have used their services twice now. They never disappoint. Quick responses, good gear condition, lowest price in market. Well, rented trekking gear as well as camera! "',
    author: 'Amal',
    location: 'Bangalore • Gaming Console',
    initials: 'AA',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: '" It\'s an amazing service, starting from the quality of the gear provided to the pickup and drop at doorstep facility. The staff is extremely helpful and supportive... "',
    author: 'Gaurav',
    location: 'Bangalore • Riding Gear',
    initials: 'GS',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: '" I am a regular customer and order ps4. It\'s very affordable and booking an order is super easy and user friendly website and polite staff. "',
    author: 'Amal',
    location: 'Bangalore • Gaming Console',
    initials: 'AA',
    rating: 5,
  },
  {
    id: 'test-4',
    quote: '" The experience with share pal is awesome. The camera, service provide by them is good. Overall I am Happy by renting camera gear from share pal.... "',
    author: 'Pankaj',
    location: 'Mumbai • Action Cameras',
    initials: 'PS',
    rating: 5,
  },
];

export const IMPACT_METRICS = [
  {
    value: '250Cr+',
    label: 'Saved Together',
    highlight: '+',
  },
  {
    value: '4.5M Kg',
    label: 'CO₂e Emissions Saved',
    highlight: 'Kg',
  },
  {
    value: '100K+',
    label: 'Products In Circulation',
    highlight: '+',
  },
];
