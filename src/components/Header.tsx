import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Search, ShoppingBag, User as UserIcon, ChevronDown, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { TOP_CATEGORIES, MEGA_MENUS } from '../data/categories';
import { RentalDates, User } from '../types';

interface HeaderProps {
  currentCity: string;
  onOpenCityPicker: () => void;
  rentalDates: RentalDates | null;
  onOpenDatePicker: () => void;
  selectedCategory: typeof TOP_CATEGORIES[number];
  onSelectCategory: (category: typeof TOP_CATEGORIES[number]) => void;
  onSelectSubcategory: (subcategory: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenAssetPartner: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCity,
  onOpenCityPicker,
  rentalDates,
  onOpenDatePicker,
  selectedCategory,
  onSelectCategory,
  onSelectSubcategory,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  currentUser,
  onOpenAuth,
  onLogout,
  onOpenAssetPartner,
}) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close user menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubcategoryClick = (cat: typeof TOP_CATEGORIES[number], sub: string) => {
    onSelectCategory(cat);
    onSelectSubcategory(sub);
    setHoveredCategory(null);
  };

  return (
    <header className="sticky top-0 z-50 shadow-xs">
      {/* Top Bar - Vibrant Brand Red Background */}
      <div className="bg-[#e53935] border-b border-red-600/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          {/* Left: SharePal Logo in Blue Background Container */}
          <div className="flex items-center gap-6">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group cursor-pointer select-none"
              aria-label="SharePal Home"
            >
              {/* Blue rectangular background with rounded bottom corners */}
              <div className="bg-[#1e40af] hover:bg-[#1d4ed8] px-4 py-2 sm:px-5 sm:py-2.5 rounded-b-xl rounded-t-none flex items-center shadow-md transition-all duration-200">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
                  Share
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#22c55e] font-sans">
                  Pal
                </span>
              </div>
            </a>
          </div>

          {/* Center: Unified City & Date Selector Pill (White with sleek separators) */}
          <div className="hidden md:flex items-center bg-white border border-white/40 rounded-full px-2 py-1 text-xs shadow-md">
            {/* City */}
            <button
              onClick={onOpenCityPicker}
              className="flex items-center gap-1.5 px-3 py-1 font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer group border-r border-slate-200"
            >
              <MapPin className="w-3.5 h-3.5 text-[#e53935] group-hover:scale-110 transition-transform" />
              <span>{currentCity}</span>
              <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
            </button>

            {/* Delivery Date */}
            <button
              onClick={onOpenDatePicker}
              className="flex items-center gap-1.5 px-3 py-1 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer border-r border-slate-200"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-700">
                {rentalDates ? rentalDates.deliveryDate : 'Delivery Date'}
              </span>
            </button>

            {/* Pickup Date */}
            <button
              onClick={onOpenDatePicker}
              className="flex items-center gap-1.5 px-3 py-1 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-700">
                {rentalDates ? rentalDates.returnDate : 'Pickup Date'}
              </span>
            </button>

            {/* Select Button: Black / dark navy background with white calendar icon and text */}
            <button
              onClick={onOpenDatePicker}
              className="ml-1 bg-black hover:bg-slate-900 text-white border border-slate-800 rounded-full px-4 py-1.5 font-bold text-xs transition cursor-pointer shadow-xs active:scale-95 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>{rentalDates ? 'Change' : 'Select'}</span>
            </button>
          </div>

          {/* Right: Search, Cart & Login (White icons and light pill buttons on red) */}
          <div className="flex items-center gap-2 sm:gap-3 text-white">
            {/* Search Toggle / Input */}
            <div className="relative">
              {isSearchExpanded ? (
                <div className="flex items-center bg-white rounded-full pl-3 pr-2 py-1.5 w-60 sm:w-64 shadow-lg animate-scaleUp">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search gear..."
                    className="w-full text-xs bg-transparent border-none focus:outline-none pl-2 text-slate-800 placeholder-slate-400"
                  />
                  <button
                    onClick={() => setIsSearchExpanded(false)}
                    className="text-xs text-slate-400 hover:text-slate-600 px-1 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchExpanded(true)}
                  className="p-2 text-white/90 hover:text-white hover:bg-white/15 rounded-full transition cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Cart Icon with count */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-white/90 hover:text-white hover:bg-white/15 rounded-full transition cursor-pointer"
              aria-label="Rental Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#a3e635] text-slate-900 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User / Login Trigger */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/25 rounded-full px-3.5 py-1.5 text-xs font-bold text-white transition cursor-pointer shadow-xs"
              >
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                  <UserIcon className="w-3 h-3 text-white" />
                </div>
                <span>{currentUser ? currentUser.name.split(' ')[0] : 'Hi, Login'}</span>
              </button>

              {/* User Popover Panel */}
              {isUserMenuOpen && (
                <div className="absolute right-0 top-11 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-scaleUp text-slate-900">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        {currentUser ? `Hi, ${currentUser.name}!` : 'Hi, Pal!'}
                      </h4>
                      <p className="text-[10px] text-slate-500">
                        {currentUser ? currentUser.phone : 'Welcome to SharePal'}
                      </p>
                    </div>
                    {currentUser ? (
                      <button
                        onClick={() => {
                          onLogout();
                          setIsUserMenuOpen(false);
                        }}
                        className="text-xs text-red-600 font-bold hover:underline"
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          onOpenAuth();
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-3 py-1 rounded-full transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>Log in</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Promo Card: Code SHAREPAL */}
                  <div className="my-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-3 text-left">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-blue-900 mb-0.5">
                      <Tag className="w-3 h-3 text-blue-600" />
                      <span>Use code SHAREPAL</span>
                    </div>
                    <p className="text-[10px] text-slate-600 leading-tight">
                      Get 10% off on orders above ₹1500. Maximum discount ₹300.
                    </p>
                    <div className="mt-2 text-[10px] font-bold text-blue-600 uppercase">
                      Use Coupon - SHAREPAL
                    </div>
                  </div>

                  {/* Promo Card: Asset Partner */}
                  <div
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      onOpenAssetPartner();
                    }}
                    className="bg-slate-900 text-white rounded-xl p-3 cursor-pointer hover:bg-slate-800 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase text-[#a3e635]">
                        Asset Partner
                      </span>
                      <Sparkles className="w-3 h-3 text-[#a3e635]" />
                    </div>
                    <div className="text-xs font-bold mt-0.5">Sponsor an asset</div>
                    <div className="text-[10px] text-slate-300">Earn monthly payouts</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Quick Location & Date Bar */}
        <div className="md:hidden bg-red-700/60 px-4 py-1.5 flex items-center justify-between text-xs text-white border-t border-red-500/30">
          <button onClick={onOpenCityPicker} className="flex items-center gap-1 font-semibold">
            <MapPin className="w-3 h-3 text-white" />
            <span>{currentCity}</span>
            <ChevronDown className="w-3 h-3 opacity-80" />
          </button>
          <button onClick={onOpenDatePicker} className="flex items-center gap-1 font-medium bg-white/20 px-2.5 py-0.5 rounded-full text-[11px]">
            <Calendar className="w-3 h-3" />
            <span>{rentalDates ? `${rentalDates.deliveryDate} - ${rentalDates.returnDate}` : 'Select Dates'}</span>
          </button>
        </div>
      </div>

      {/* Separate Navigation Row: Photography, Gaming, Outdoor, Entertainment */}
      <div
        className="bg-white border-b border-gray-200 relative shadow-xs"
        onMouseLeave={() => setHoveredCategory(null)}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8 sm:gap-14 md:gap-16">
          {TOP_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <div
                key={cat}
                onMouseEnter={() => setHoveredCategory(cat)}
                className="relative"
              >
                <button
                  onClick={() => onSelectCategory(cat)}
                  className={`text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer py-3 relative flex items-center gap-1 ${
                    isActive
                      ? 'text-[#e53935]'
                      : 'text-slate-700 hover:text-[#e53935]'
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#e53935] rounded-t-full" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Mega Menu Dropdown */}
        {hoveredCategory && MEGA_MENUS[hoveredCategory] && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-40 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {MEGA_MENUS[hoveredCategory].map((col, cIdx) => (
                  <div key={cIdx} className="space-y-2.5">
                    {col.map((item) => (
                      <div
                        key={item}
                        onClick={() =>
                          handleSubcategoryClick(
                            hoveredCategory as typeof TOP_CATEGORIES[number],
                            item
                          )
                        }
                        className="text-xs text-slate-600 hover:text-[#e53935] font-medium cursor-pointer transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
