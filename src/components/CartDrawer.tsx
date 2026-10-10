import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, Tag, ArrowRight, CheckCircle2, MapPin, Truck } from 'lucide-react';
import { CartItem, Order, User } from '../types';
import { BANGALORE_AREAS } from '../data/categories';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateDays: (index: number, days: number) => void;
  onClearCart: () => void;
  currentCity: string;
  currentUser: User | null;
  onOrderPlaced: (order: Order) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateDays,
  onClearCart,
  currentCity,
  currentUser,
  onOrderPlaced,
}) => {
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');

  // Delivery details
  const [selectedArea, setSelectedArea] = useState(BANGALORE_AREAS[0]);
  const [addressLine, setAddressLine] = useState('');
  const [recipientName, setRecipientName] = useState(currentUser?.name || '');
  const [recipientPhone, setRecipientPhone] = useState(currentUser?.phone || '');

  // Confirmed order state
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  if (!isOpen) return null;

  // Pricing calculations
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = subtotal > 400 ? 0 : 99;
  const grandTotal = Math.max(0, subtotal - couponDiscount + deliveryFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = coupon.trim().toUpperCase();

    if (code === 'WELCOME10' || code === 'ASSET10') {
      const disc = Math.round(subtotal * 0.1);
      setAppliedCoupon(code);
      setCouponDiscount(disc);
    } else if (code === 'GAMER2026') {
      const disc = Math.min(subtotal, 150);
      setAppliedCoupon(code);
      setCouponDiscount(disc);
    } else {
      setCouponError('Invalid coupon code. Try WELCOME10 or GAMER2026');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    setCoupon('');
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const newOrder: Order = {
      id: `SP-${currentCity.substring(0, 3).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`,
      items: [...items],
      subtotal,
      discount: couponDiscount,
      couponCode: appliedCoupon || undefined,
      deliveryFee,
      total: grandTotal,
      city: currentCity,
      address: `${addressLine}, ${selectedArea}, ${currentCity}`,
      phone: recipientPhone || '9876543210',
      name: recipientName || 'Gamer Pal',
      deliveryDate: 'Tomorrow (10:00 AM - 1:00 PM)',
      returnDate: 'Flexible schedule',
      status: 'Confirmed',
      createdAt: new Date().toLocaleString(),
    };

    onOrderPlaced(newOrder);
    setPlacedOrder(newOrder);
    onClearCart();
  };

  const handleReset = () => {
    setPlacedOrder(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-lg h-full shadow-2xl flex flex-col justify-between animate-slideInRight overflow-hidden">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">Your Rental Cart</h3>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {placedOrder ? (
            /* Order Success View */
            <div className="text-center py-6 animate-scaleUp">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Order Confirmed
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">Rental Booking Placed!</h2>
              <p className="text-xs text-slate-500 mt-1">
                Order Reference: <strong className="text-slate-900">{placedOrder.id}</strong>
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 my-6 text-left text-xs space-y-3">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Delivery Address:</span>
                  <span className="font-bold text-slate-800 max-w-[200px] text-right truncate">
                    {placedOrder.address}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Estimated Delivery Slot:</span>
                  <span className="font-bold text-emerald-600">Tomorrow by 11:30 AM</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Security Deposit:</span>
                  <span className="font-bold text-slate-800">₹0 (Waived via Paperless KYC)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-slate-800">Total Payable at Delivery:</span>
                  <span className="font-black text-blue-600">₹{placedOrder.total}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-blue-900 text-[11px] mb-6 text-left flex items-start gap-2">
                <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Our verified Bangalore delivery pal will hand over the sanitized gear, perform a live startup check on your TV, and guide you through controls.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3.5 rounded-xl transition cursor-pointer"
              >
                Back to Gaming Catalog
              </button>
            </div>
          ) : items.length === 0 ? (
            /* Empty Cart View */
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-800">Your rental cart is empty</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Explore our gaming consoles, racing wheels, or VR headsets and tap "+" to build your rental setup.
              </p>
            </div>
          ) : (
            /* Items List & Details */
            <>
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex gap-3 relative"
                  >
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 shrink-0 border border-slate-100">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="object-contain h-full mix-blend-multiply"
                      />
                    </div>
                    <div className="flex-1 min-w-0 pr-6">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {item.controllers} Controller{item.controllers > 1 ? 's' : ''} •{' '}
                        {item.days} Days Rental
                      </p>
                      {item.extraGames.length > 0 && (
                        <p className="text-[10px] text-blue-600 font-medium truncate mt-0.5">
                          Games: {item.extraGames.join(', ')}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1.5 text-xs">
                          <label className="text-[10px] text-slate-400">Days:</label>
                          <select
                            value={item.days}
                            onChange={(e) => onUpdateDays(idx, Number(e.target.value))}
                            className="text-xs bg-white border border-slate-200 rounded-md px-1.5 py-0.5 font-bold"
                          >
                            <option value={2}>2 days</option>
                            <option value={3}>3 days</option>
                            <option value={7}>7 days (20% off)</option>
                            <option value={14}>14 days</option>
                            <option value={30}>30 days (45% off)</option>
                          </select>
                        </div>
                        <span className="text-sm font-black text-slate-900">
                          ₹{item.totalPrice}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition"
                      title="Remove product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Zero Security Deposit Info */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs text-emerald-900">
                  <span className="font-bold">Zero Security Deposit</span>
                  <p className="text-[11px] text-emerald-700">
                    Govt ID check completed on delivery. No advance deposit needed.
                  </p>
                </div>
              </div>

              {/* Delivery Details Form */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  Delivery Details ({currentCity})
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Receiver name"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase">
                      Phone (+91)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={recipientPhone}
                      onChange={(e) => setRecipientPhone(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">
                    Bangalore Area / Hub
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2 text-slate-800 font-semibold"
                  >
                    {BANGALORE_AREAS.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">
                    Flat / Building / Landmark
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flat 302, Prestige Palms, 80ft Road"
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2 text-slate-800"
                  />
                </div>
              </div>

              {/* Coupon Code Section */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between text-xs text-emerald-800 font-semibold bg-emerald-100/60 p-2 rounded-xl">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-emerald-700" />
                      Coupon <strong className="uppercase">{appliedCoupon}</strong> applied! (-₹{couponDiscount})
                    </span>
                    <button
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="text-red-500 font-bold hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Coupon code (e.g. WELCOME10)"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        className="w-full text-xs uppercase bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-800"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-red-600 mt-1.5">{couponError}</p>
                )}
                <div className="mt-2 text-[10px] text-slate-400">
                  Try promo code <strong className="text-blue-600">WELCOME10</strong> for 10% discount!
                </div>
              </div>

              {/* Bill Details */}
              <div className="space-y-2 text-xs border-t border-gray-100 pt-3 text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-slate-900">₹{subtotal}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount:</span>
                    <span>-₹{couponDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Bangalore Doorstep Delivery &amp; Pickup:</span>
                  <span className="font-semibold text-slate-900">
                    {deliveryFee === 0 ? <span className="text-emerald-600">FREE</span> : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18% included):</span>
                  <span className="text-emerald-600 font-semibold">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Refundable Security Deposit:</span>
                  <span className="text-emerald-600 font-bold">₹0</span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-900 border-t border-gray-200 pt-2">
                  <span>Grand Total:</span>
                  <span className="text-blue-600">₹{grandTotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom Action Footer */}
        {!placedOrder && items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-gray-100 bg-white">
            <button
              onClick={handleCheckout}
              className="w-full bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-sm py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Confirm &amp; Book Rental (₹{grandTotal})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              Pay upon doorstep inspection • Free cancellation up to 4 hours before slot
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
