import React, { useState } from 'react';
import { Tag, Check } from 'lucide-react';
import { OFFERS } from '../data/categories';

interface OffersSectionProps {
  onApplyOfferCode?: (code: string) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onApplyOfferCode }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    if (onApplyOfferCode) onApplyOfferCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section className="mb-8" data-purpose="available-offers">
      <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mb-3">
        Available Offers ({OFFERS.length} Offers)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {OFFERS.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black tracking-wide text-slate-900 font-mono bg-slate-100 px-2 py-0.5 rounded">
                  {offer.code}
                </span>
                <span className="text-[10px] bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">
                  {offer.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {offer.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-blue-600">
                Use Coupon - {offer.code}
              </span>
              <button
                onClick={() => handleCopy(offer.code)}
                className="text-xs font-bold text-slate-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-slate-50 transition cursor-pointer flex items-center gap-1"
              >
                {copiedCode === offer.code ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Tag className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
