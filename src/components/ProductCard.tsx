import React from 'react';
import { Plus, Check, Calendar } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  hasSelectedDates: boolean;
  onOpenDetail: (product: Product) => void;
  onOpenWaitlist: (product: Product) => void;
  onOpenDatePicker: () => void;
  isAddedInCart?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  hasSelectedDates,
  onOpenDetail,
  onOpenWaitlist,
  onOpenDatePicker,
  isAddedInCart = false,
}) => {
  return (
    <article className="product-card bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between relative shadow-sm hover:border-red-200 hover:shadow-md transition-all duration-200">
      <div>
        {/* Badge header */}
        <div className="flex items-center justify-between mb-2 min-h-[22px]">
          {product.badge === 'Vote to Launch' && (
            <span className="bg-[#d9f99d] text-[#3f6212] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Vote to Launch
            </span>
          )}
          {product.badge === 'New' && (
            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-0.5 rounded-md">
              New
            </span>
          )}
          {product.badge === 'Trending' && (
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
              Trending
            </span>
          )}
          {product.badge === 'Popular' && (
            <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2.5 py-0.5 rounded-md">
              Popular
            </span>
          )}
          {!product.badge && <span />}
        </div>

        {/* Product Image Area */}
        <div
          onClick={() => (product.isWaitlist ? onOpenWaitlist(product) : onOpenDetail(product))}
          className="h-44 w-full bg-slate-50 rounded-xl flex items-center justify-center relative p-3 overflow-hidden cursor-pointer group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="object-contain h-full w-full mix-blend-multiply transition-transform group-hover:scale-105 duration-300"
            loading="lazy"
          />
        </div>

        {/* Waitlist Progress Notification Banner */}
        {product.isWaitlist && (
          <div className="mt-3 bg-emerald-50 border border-emerald-100 rounded-lg p-2 text-[11px] text-emerald-800 flex items-center justify-between">
            <div>
              <p className="font-semibold leading-tight">Launching at 1k votes.</p>
              <p className="text-[10px] text-emerald-600">Get notified first</p>
            </div>
            <span className="bg-emerald-200/80 px-2 py-0.5 rounded text-[10px] font-bold text-emerald-900">
              {product.waitlistCount ?? 74}/1000 Joined
            </span>
          </div>
        )}

        {/* Title */}
        <h3
          onClick={() => (product.isWaitlist ? onOpenWaitlist(product) : onOpenDetail(product))}
          className="font-bold text-slate-800 text-sm mt-3 leading-snug cursor-pointer hover:text-[#e53935] transition-colors line-clamp-2 min-h-[38px]"
        >
          {product.name}
        </h3>
      </div>

      {/* Card Action & Price Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        {product.isWaitlist ? (
          <button
            onClick={() => onOpenWaitlist(product)}
            className="w-full bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-xs py-2.5 rounded-xl transition duration-150 shadow-sm cursor-pointer active:scale-98"
          >
            Join Waitlist
          </button>
        ) : (
          <div className="flex items-end justify-between">
            <div>
              {hasSelectedDates ? (
                <>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                    Starting at
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-extrabold text-slate-900">
                      ₹{product.basePricePerDay}
                    </span>
                    <span className="text-xs text-slate-500">/day</span>
                  </div>
                  {product.gstIncluded && (
                    <span className="inline-block bg-[#bef264] text-[#365314] text-[9px] font-bold px-1.5 py-0.2 rounded mt-0.5">
                      incl. of GST
                    </span>
                  )}
                </>
              ) : (
                <button
                  onClick={onOpenDatePicker}
                  className="text-left group cursor-pointer"
                >
                  <div className="text-xs font-semibold text-slate-700 group-hover:text-[#e53935] transition-colors flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#e53935]" />
                    <span>Select Dates to</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 group-hover:text-[#e53935]">
                    view price
                  </div>
                </button>
              )}
            </div>

            <button
              onClick={() => onOpenDetail(product)}
              aria-label={`Configure or add ${product.name}`}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition cursor-pointer active:scale-95 ${
                isAddedInCart
                  ? 'bg-[#1e40af] border-[#1e40af] text-white shadow-xs'
                  : 'border-slate-300 hover:border-[#e53935] hover:bg-red-50 text-slate-700 hover:text-[#e53935]'
              }`}
            >
              {isAddedInCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </article>
  );
};
