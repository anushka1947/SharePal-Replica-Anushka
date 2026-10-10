import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface PromoBannersProps {
  onOpenAssetPartner: () => void;
}

export const AssetPartnerBanner: React.FC<PromoBannersProps> = ({ onOpenAssetPartner }) => {
  return (
    <section
      className="mb-8 rounded-2xl bg-[#0c1427] text-white p-5 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md border border-slate-800 relative overflow-hidden"
      data-purpose="asset-partner-banner"
    >
      {/* Glow background accent */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="z-10 flex-1">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Become an <span className="text-[#a3e635]">Asset Partner.</span> Earn Monthly.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {/* Benefit 1 */}
          <div className="border-l-2 border-[#a3e635] pl-3">
            <div className="text-[10px] uppercase font-bold text-slate-400">Earning Benefits</div>
            <div className="text-sm font-bold text-white mt-0.5 flex items-center gap-1">
              <span>Monthly Earnings</span>
            </div>
            <div className="text-[11px] text-slate-300">From rental assets</div>
          </div>
          {/* Benefit 2 */}
          <div className="border-l-2 border-blue-400 pl-3">
            <div className="text-[10px] uppercase font-bold text-slate-400">Bonus Credits</div>
            <div className="text-sm font-bold text-white mt-0.5">Upto ₹10,000</div>
            <div className="text-[11px] text-slate-300">Instant Wallet credits</div>
          </div>
          {/* Benefit 3 */}
          <div className="border-l-2 border-purple-400 pl-3">
            <div className="text-[10px] uppercase font-bold text-slate-400">Rental Benefits</div>
            <div className="text-sm font-bold text-white mt-0.5">10% OFF</div>
            <div className="text-[11px] text-slate-300">Exclusive discount on rent</div>
          </div>
          {/* Benefit 4 */}
          <div className="border-l-2 border-emerald-400 pl-3">
            <div className="text-[10px] uppercase font-bold text-slate-400">Rewards</div>
            <div className="text-sm font-bold text-white mt-0.5">Get 10% Cashback</div>
            <div className="text-[11px] text-slate-300">On every active order</div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="z-10 shrink-0 w-full sm:w-auto">
        <button
          onClick={onOpenAssetPartner}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-sm px-6 py-3 rounded-xl transition shadow-lg cursor-pointer active:scale-98"
        >
          <span>Know More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export const RentYourGearBanner: React.FC<PromoBannersProps> = ({ onOpenAssetPartner }) => {
  return (
    <section
      className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 text-white p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden"
      data-purpose="c2c-monetize-banner"
    >
      <div className="z-10">
        <p className="text-xs sm:text-sm font-semibold text-blue-200">Got gear you dont use anymore?</p>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-0.5">
          Rent Out Your Gear on SharePal
        </h3>
      </div>
      <div className="z-10 shrink-0">
        <button
          onClick={onOpenAssetPartner}
          className="inline-flex items-center gap-2 bg-[#a3e635] hover:bg-[#84cc16] text-slate-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow cursor-pointer active:scale-98"
        >
          <span>Earn With Us</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
