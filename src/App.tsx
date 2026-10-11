/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategorySidebar } from './components/CategorySidebar';
import { ProductCard } from './components/ProductCard';
import { AssetPartnerBanner, RentYourGearBanner } from './components/PromoBanners';
import { OffersSection } from './components/OffersSection';
import { RecommendationForm } from './components/RecommendationForm';
import { FAQSection } from './components/FAQSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { FloatingBottomBar } from './components/FloatingBottomBar';
import { DateRangeModal } from './components/DateRangeModal';
import { CityPickerModal } from './components/CityPickerModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WaitlistModal } from './components/WaitlistModal';
import { CartDrawer } from './components/CartDrawer';
import { AssetPartnerModal } from './components/AssetPartnerModal';
import { AuthModal } from './components/AuthModal';
import { SupportChatModal } from './components/SupportChatModal';
import { INITIAL_PRODUCTS } from './data/products';
import { TOP_CATEGORIES } from './data/categories';
import { Product, CartItem, RentalDates, Order, User, Recommendation } from './types';

export default function App() {
  // Application State
  const [currentCity, setCurrentCity] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('sharepal_city');
      return saved || 'Bangalore';
    } catch {
      return 'Bangalore';
    }
  });
  const [selectedCategory, setSelectedCategory] = useState<typeof TOP_CATEGORIES[number]>('Photography');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [rentalDates, setRentalDates] = useState<RentalDates | null>(null);

  // Products & Waitlists
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('sharepal_products_v2');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });
  const [visibleLimit, setVisibleLimit] = useState<number>(12);

  // Cart & Orders
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('sharepal_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('sharepal_orders');
    return saved ? JSON.parse(saved) : [];
  });

  // User
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('sharepal_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Recommendations
  const [recommendations, setRecommendations] = useState<Recommendation[]>(() => {
    const saved = localStorage.getItem('sharepal_recommendations');
    return saved ? JSON.parse(saved) : [];
  });

  // Modals Visibility
  const [isCityPickerOpen, setIsCityPickerOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAssetPartnerOpen, setIsAssetPartnerOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSupportChatOpen, setIsSupportChatOpen] = useState(false);

  // Detailed Product & Waitlist Modals
  const [activeDetailProduct, setActiveDetailProduct] = useState<Product | null>(null);
  const [activeWaitlistProduct, setActiveWaitlistProduct] = useState<Product | null>(null);

  // Persistence Effects
  useEffect(() => {
    try {
      localStorage.setItem('sharepal_city', currentCity);
    } catch {
      // ignore
    }
  }, [currentCity]);

  useEffect(() => {
    localStorage.setItem('sharepal_products_v2', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('sharepal_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('sharepal_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('sharepal_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('sharepal_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('sharepal_recommendations', JSON.stringify(recommendations));
  }, [recommendations]);

  // Reset subcategory to 'All' when category changes
  const handleSelectCategory = (cat: typeof TOP_CATEGORIES[number]) => {
    setSelectedCategory(cat);
    setSelectedSubcategory('All');
  };

  // Filter Products
  const filteredProducts = products.filter((prod) => {
    // 1. Category filter
    if (prod.category !== selectedCategory) return false;

    // 2. Subcategory filter
    if (selectedSubcategory !== 'All') {
      if (prod.subcategory.toLowerCase() !== selectedSubcategory.toLowerCase()) return false;
    }

    // 3. Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = prod.name.toLowerCase().includes(q);
      const matchDesc = prod.description?.toLowerCase().includes(q) || false;
      const matchSub = prod.subcategory.toLowerCase().includes(q);
      const matchGames = prod.gamesList?.some((g) => g.toLowerCase().includes(q)) || false;
      if (!matchName && !matchDesc && !matchSub && !matchGames) return false;
    }

    return true;
  });

  const displayedProducts = filteredProducts.slice(0, visibleLimit);

  // Category counts matching video:
  // Gaming: 56 items, Photography: 149 items, Outdoor: 84 items, Entertainment: 18 items
  const categoryTotalCounts: Record<string, number> = {
    Gaming: 56,
    Photography: 149,
    Outdoor: 84,
    Entertainment: 18,
  };
  const currentTotalCount =
    selectedSubcategory !== 'All'
      ? (selectedSubcategory === 'Dji Drones' ? 7 : filteredProducts.length)
      : (categoryTotalCounts[selectedCategory] || filteredProducts.length);

  // Cart operations
  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.product.id === item.product.id);
      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx] = item;
        return copy;
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateCartDays = (index: number, days: number) => {
    setCartItems((prev) => {
      const copy = [...prev];
      const item = copy[index];
      let discountMultiplier = 1.0;
      if (days >= 30) discountMultiplier = 0.55;
      else if (days >= 14) discountMultiplier = 0.70;
      else if (days >= 7) discountMultiplier = 0.80;
      else if (days >= 3) discountMultiplier = 0.95;

      const newDaily = Math.round(item.product.basePricePerDay * discountMultiplier);
      copy[index] = {
        ...item,
        days,
        pricePerDay: newDaily,
        totalPrice: newDaily * days,
      };
      return copy;
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderPlaced = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
  };

  // Waitlist vote increment
  const handleVoteSuccess = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            waitlistCount: (p.waitlistCount || 0) + 1,
          };
        }
        return p;
      })
    );
  };

  const handleAddRecommendation = (rec: Recommendation) => {
    setRecommendations((prev) => [rec, ...prev]);
  };

  // Section title matching video:
  // e.g. "Gaming Gadgets On Rent", "Dji Drones On Rent", "Outdoor Gears On Rent", "Beauty On Rent"
  const getSectionTitle = () => {
    if (searchQuery) return `Results for "${searchQuery}"`;
    if (selectedSubcategory !== 'All') {
      return `${selectedSubcategory} On Rent`;
    }
    if (selectedCategory === 'Outdoor') return 'Outdoor Gears On Rent';
    if (selectedCategory === 'Entertainment') return 'Entertainment On Rent';
    if (selectedCategory === 'Photography') return 'Photography On Rent';
    return 'Gaming Gadgets On Rent';
  };

  // Grid row slicing for interspersed banners
  const row1 = displayedProducts.slice(0, 4);
  const row2 = displayedProducts.slice(4, 8);
  const row3 = displayedProducts.slice(8);

  return (
    <div className="bg-[#f8f9fa] text-slate-800 font-sans antialiased min-h-screen selection:bg-blue-100 selection:text-blue-900 pb-20">
      <div id="top" />

      {/* TopBar Header with Unified Pill and Mega Menus */}
      <Header
        currentCity={currentCity}
        onOpenCityPicker={() => setIsCityPickerOpen(true)}
        rentalDates={rentalDates}
        onOpenDatePicker={() => setIsDatePickerOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onSelectSubcategory={(sub) => setSelectedSubcategory(sub)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={() => setCurrentUser(null)}
        onOpenAssetPartner={() => setIsAssetPartnerOpen(true)}
      />

      {/* Main Layout Container with LEFT STICKY VERTICAL SIDEBAR (Video Exact Architecture) */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 flex gap-5 items-start">
        {/* Left Sticky Vertical Subcategory Sidebar */}
        <CategorySidebar
          category={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onSelectSubcategory={setSelectedSubcategory}
        />

        {/* Right Main Content Stream */}
        <div className="flex-1 min-w-0">
          {/* Dynamic Category Hero Banner */}
          <HeroBanner
            category={selectedCategory}
            currentCity={currentCity}
            onSelectSubcategory={(subcat) => setSelectedSubcategory(subcat)}
          />

          {/* Section Title & Counter Header */}
          <div className="flex items-center justify-between mt-2 mb-6 pb-2 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {getSectionTitle()}
            </h2>
            <span className="text-xs sm:text-sm font-medium text-slate-500">
              Total items: <strong className="text-slate-800">{currentTotalCount} items</strong>
            </span>
          </div>

          {/* Product Grid Row 1 (Items 1-4) */}
          {row1.length > 0 && (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" data-purpose="product-grid-row-1">
              {row1.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  hasSelectedDates={!!rentalDates}
                  onOpenDetail={(prod) => setActiveDetailProduct(prod)}
                  onOpenWaitlist={(prod) => setActiveWaitlistProduct(prod)}
                  onOpenDatePicker={() => setIsDatePickerOpen(true)}
                  isAddedInCart={cartItems.some((i) => i.product.id === product.id)}
                />
              ))}
            </section>
          )}

          {/* Promo Banner: Asset Partner (Dark blue with lime accents) */}
          <AssetPartnerBanner onOpenAssetPartner={() => setIsAssetPartnerOpen(true)} />

          {/* Available Offers (3 Offers) Section (Matching Video 00:11-00:12) */}
          <OffersSection onApplyOfferCode={(code) => console.log('Copied offer:', code)} />

          {/* Product Grid Row 2 (Items 5-8) */}
          {row2.length > 0 && (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" data-purpose="product-grid-row-2">
              {row2.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  hasSelectedDates={!!rentalDates}
                  onOpenDetail={(prod) => setActiveDetailProduct(prod)}
                  onOpenWaitlist={(prod) => setActiveWaitlistProduct(prod)}
                  onOpenDatePicker={() => setIsDatePickerOpen(true)}
                  isAddedInCart={cartItems.some((i) => i.product.id === product.id)}
                />
              ))}
            </section>
          )}

          {/* Secondary Promo Banner: Rent Out Your Gear */}
          <RentYourGearBanner onOpenAssetPartner={() => setIsAssetPartnerOpen(true)} />

          {/* Product Grid Row 3 (Items 9-12 and beyond) */}
          {row3.length > 0 && (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" data-purpose="product-grid-row-3">
              {row3.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  hasSelectedDates={!!rentalDates}
                  onOpenDetail={(prod) => setActiveDetailProduct(prod)}
                  onOpenWaitlist={(prod) => setActiveWaitlistProduct(prod)}
                  onOpenDatePicker={() => setIsDatePickerOpen(true)}
                  isAddedInCart={cartItems.some((i) => i.product.id === product.id)}
                />
              ))}
            </section>
          )}

          {/* Empty Search / Filter Feedback */}
          {displayedProducts.length === 0 && (
            <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center my-8 shadow-xs">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-slate-800">No gear found in this section</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Try switching the category or resetting your filter. You can also recommend gear for us to add!
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSubcategory('All');
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Load More Section */}
          {filteredProducts.length > 0 && (
            <div className="text-center mb-12">
              <p className="text-xs text-slate-500 mb-2 font-medium">
                Showing {displayedProducts.length} of {currentTotalCount} results
              </p>
              <button
                onClick={() => setVisibleLimit((prev) => (prev >= products.length ? 12 : prev + 6))}
                className="bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-xs px-8 py-2.5 rounded-full transition shadow-sm cursor-pointer active:scale-98"
              >
                {visibleLimit >= products.length ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}

          {/* Recommendation Form ("Can't find what you're looking for?") */}
          <RecommendationForm
            onAddRecommendation={handleAddRecommendation}
            recentRecommendations={recommendations}
          />

          {/* FAQs Accordion */}
          <FAQSection />

          {/* Testimonials & Social Proof */}
          <TestimonialsSection
            currentCity={currentCity}
            selectedCategoryName={getSectionTitle()}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenAssetPartner={() => setIsAssetPartnerOpen(true)}
        onOpenSupportChat={() => setIsSupportChatOpen(true)}
      />

      {/* Floating Bottom Action Bar & WhatsApp Support Widget */}
      <FloatingBottomBar
        rentalDates={rentalDates}
        onOpenDatePicker={() => setIsDatePickerOpen(true)}
        onOpenSupportChat={() => setIsSupportChatOpen(true)}
      />

      {/* Interactive Modals Matching Video Reference */}
      <DateRangeModal
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        rentalDates={rentalDates}
        onSaveDates={(dates) => setRentalDates(dates)}
      />

      <CityPickerModal
        isOpen={isCityPickerOpen}
        onClose={() => setIsCityPickerOpen(false)}
        currentCity={currentCity}
        onSelectCity={(city) => setCurrentCity(city)}
      />

      <ProductDetailModal
        isOpen={!!activeDetailProduct}
        onClose={() => setActiveDetailProduct(null)}
        product={activeDetailProduct}
        currentDays={rentalDates?.days || 3}
        onAddToCart={handleAddToCart}
        currentCity={currentCity}
      />

      <WaitlistModal
        isOpen={!!activeWaitlistProduct}
        onClose={() => setActiveWaitlistProduct(null)}
        product={activeWaitlistProduct}
        onVoteSuccess={handleVoteSuccess}
        currentCity={currentCity}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateDays={handleUpdateCartDays}
        onClearCart={handleClearCart}
        currentCity={currentCity}
        currentUser={currentUser}
        onOrderPlaced={handleOrderPlaced}
      />

      <AssetPartnerModal
        isOpen={isAssetPartnerOpen}
        onClose={() => setIsAssetPartnerOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLoginSuccess={(user) => setCurrentUser(user)}
        onLogout={() => setCurrentUser(null)}
        currentCity={currentCity}
      />

      <SupportChatModal
        isOpen={isSupportChatOpen}
        onClose={() => setIsSupportChatOpen(false)}
        currentCity={currentCity}
      />
    </div>
  );
}
