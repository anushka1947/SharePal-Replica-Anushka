import React, { useState } from 'react';
import { X, Check, ShieldCheck, Zap, Gamepad2, Calendar, ShoppingBag } from 'lucide-react';
import { Product, CartItem } from '../types';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  currentDays: number;
  onAddToCart: (item: CartItem) => void;
  currentCity?: string;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  product,
  currentDays,
  onAddToCart,
  currentCity,
}) => {
  if (!isOpen || !product) return null;

  // Initial controllers based on bundle name
  const initialControllers = product.name.includes('4 Controller')
    ? 4
    : product.name.includes('2 Controller')
    ? 2
    : 1;

  const [controllers, setControllers] = useState<number>(initialControllers);
  const [selectedDays, setSelectedDays] = useState<number>(currentDays || 3);
  const [selectedGames, setSelectedGames] = useState<string[]>(
    product.gamesList?.slice(0, 2) || []
  );

  // Calculate pricing based on duration discounts
  let discountMultiplier = 1.0;
  if (selectedDays >= 30) discountMultiplier = 0.55; // 45% off
  else if (selectedDays >= 14) discountMultiplier = 0.70; // 30% off
  else if (selectedDays >= 7) discountMultiplier = 0.80; // 20% off
  else if (selectedDays >= 3) discountMultiplier = 0.95; // 5% off

  // Controller extra price
  let controllerDailyAddon = 0;
  if (controllers === 2 && initialControllers === 1) controllerDailyAddon = 56;
  if (controllers === 4 && initialControllers === 1) controllerDailyAddon = 125;
  if (controllers === 4 && initialControllers === 2) controllerDailyAddon = 69;

  const dailyPrice = Math.round((product.basePricePerDay + controllerDailyAddon) * discountMultiplier);
  const totalRentalPrice = dailyPrice * selectedDays;

  const handleToggleGame = (game: string) => {
    setSelectedGames((prev) =>
      prev.includes(game) ? prev.filter((g) => g !== game) : [...prev, game]
    );
  };

  const handleAdd = () => {
    const item: CartItem = {
      product,
      quantity: 1,
      controllers,
      extraGames: selectedGames,
      days: selectedDays,
      pricePerDay: dailyPrice,
      totalPrice: totalRentalPrice,
    };
    onAddToCart(item);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative my-auto animate-scaleUp max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header grid: Image & Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-gray-100 pb-6">
          <div className="md:col-span-5 h-48 sm:h-56 bg-slate-50 rounded-2xl flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain h-full w-full mix-blend-multiply"
            />
          </div>

          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              {product.badge && (
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                  {product.badge}
                </span>
              )}
              <span className="bg-[#bef264] text-[#365314] text-[10px] font-bold px-2 py-0.5 rounded-md">
                100% Sanitized
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              {product.name}
            </h2>

            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {product.description || 'Enjoy complete next-gen console gaming right at your doorstep.'}
            </p>

            {/* Daily price banner */}
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">₹{dailyPrice}</span>
              <span className="text-xs text-slate-500">/day (incl. GST)</span>
              {discountMultiplier < 1 && (
                <span className="text-[10px] bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">
                  {Math.round((1 - discountMultiplier) * 100)}% Discount Applied
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Configuration Sections */}
        <div className="py-6 space-y-6">
          {/* 1. Duration Selector */}
          <div>
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-2.5">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Select Rental Duration:</span>
              <span className="text-blue-600 font-extrabold">{selectedDays} Days</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { days: 2, label: '2 Days', desc: 'Weekend' },
                { days: 3, label: '3 Days', desc: '5% Off' },
                { days: 7, label: '7 Days', desc: '20% Off' },
                { days: 14, label: '14 Days', desc: '30% Off' },
                { days: 30, label: '30 Days', desc: '45% Off' },
              ].map((opt) => (
                <button
                  key={opt.days}
                  type="button"
                  onClick={() => setSelectedDays(opt.days)}
                  className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                    selectedDays === opt.days
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-gray-200 hover:border-blue-300 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{opt.label}</div>
                  <div className="text-[10px] text-slate-500">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Controllers Option */}
          <div>
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-2.5">
              <Gamepad2 className="w-4 h-4 text-purple-600" />
              <span>DualSense Wireless Controllers:</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { count: 1, label: '1 Controller', sub: 'Single Player' },
                { count: 2, label: '2 Controllers', sub: 'Co-op (Recommended)' },
                { count: 4, label: '4 Controllers', sub: 'Party Tournament' },
              ].map((c) => (
                <button
                  key={c.count}
                  type="button"
                  onClick={() => setControllers(c.count)}
                  className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                    controllers === c.count
                      ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold'
                      : 'border-gray-200 hover:border-purple-300 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{c.label}</div>
                  <div className="text-[10px] text-slate-500">{c.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Pre-installed Games Selection */}
          {product.gamesList && product.gamesList.length > 0 && (
            <div>
              <label className="text-xs font-bold text-slate-800 flex items-center justify-between mb-2">
                <span>Free Pre-installed Games Available:</span>
                <span className="text-[11px] text-emerald-600 font-semibold">100+ Total Library</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.gamesList.map((game) => {
                  const isChecked = selectedGames.includes(game);
                  return (
                    <button
                      key={game}
                      type="button"
                      onClick={() => handleToggleGame(game)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition flex items-center gap-1.5 cursor-pointer ${
                        isChecked
                          ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                          : 'bg-slate-50 border-gray-200 text-slate-700 hover:border-blue-400'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                      <span>{game}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Included Accessories */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-800 mb-2">Included in this Package:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {(product.includedItems || [
                'Original Console & Power Adapter',
                'High-Speed HDMI 2.1 4K Cable',
                'DualSense Wireless Controller(s)',
                'Protective Travel Case',
              ]).map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security & KYC Highlight */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 mb-6 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div className="text-xs text-emerald-900">
            <p className="font-bold">Zero Security Deposit on SharePal</p>
            <p className="text-emerald-700 font-normal">
              Zero deposit needed after quick 2-minute digital government ID verification.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
              Total Rental Amount ({selectedDays} Days)
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">₹{totalRentalPrice}</span>
              <span className="text-xs text-emerald-600 font-bold">Free {currentCity || 'Bangalore'} Delivery</span>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full sm:w-auto bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Rental Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
