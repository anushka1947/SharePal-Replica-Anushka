export interface Product {
  id: string;
  name: string;
  category: 'Gaming' | 'Photography' | 'Outdoor' | 'Entertainment';
  subcategory: string;
  image: string;
  badge?: 'Vote to Launch' | 'New' | 'Trending' | 'Popular';
  isWaitlist?: boolean;
  waitlistTarget?: number;
  waitlistCount?: number;
  basePricePerDay: number; // in INR
  gstIncluded: boolean;
  minDays?: number;
  description?: string;
  features?: string[];
  includedItems?: string[];
  gamesList?: string[];
  depositAmount?: number; // 0 for verified
}

export interface RentalDates {
  deliveryDate: string; // YYYY-MM-DD
  returnDate: string; // YYYY-MM-DD
  days: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  controllers: number; // 1, 2, 4
  extraGames: string[];
  days: number;
  pricePerDay: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  couponCode?: string;
  deliveryFee: number;
  total: number;
  city: string;
  address: string;
  phone: string;
  name: string;
  deliveryDate: string;
  returnDate: string;
  status: 'Confirmed' | 'Dispatched' | 'Delivered' | 'Returned';
  createdAt: string;
}

export interface User {
  name: string;
  phone: string;
  email: string;
  city: string;
  isKycVerified: boolean;
}

export interface Recommendation {
  id: string;
  productName: string;
  occasion: string;
  createdAt: string;
}
