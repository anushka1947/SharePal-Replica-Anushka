import React, { useState } from 'react';
import { X, TrendingUp, ShieldCheck, CheckCircle2, DollarSign, Sparkles } from 'lucide-react';

interface AssetPartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetPartnerModal: React.FC<AssetPartnerModalProps> = ({ isOpen, onClose }) => {
  const [assetType, setAssetType] = useState('ps5');
  const [assetUnits, setAssetUnits] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bangalore');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Earnings estimation logic
  const assetRates: Record<string, { label: string; monthlyPerUnit: number; cost: number }> = {
    ps5: { label: 'PlayStation 5 Disc Console', monthlyPerUnit: 3600, cost: 54990 },
    xbox: { label: 'Xbox Series X Console', monthlyPerUnit: 3400, cost: 52990 },
    vr: { label: 'Meta Quest 3 / Quest 2', monthlyPerUnit: 2800, cost: 42990 },
    gopro: { label: 'GoPro Hero 12 / Action Cam', monthlyPerUnit: 2200, cost: 38990 },
    camera: { label: 'Sony A7 IV / Mirrorless DSLR', monthlyPerUnit: 9500, cost: 180000 },
    drone: { label: 'DJI Mini 4 Pro Drone', monthlyPerUnit: 5200, cost: 79990 },
  };

  const selected = assetRates[assetType] || assetRates.ps5;
  const estimatedMonthly = selected.monthlyPerUnit * assetUnits;
  const estimatedAnnual = estimatedMonthly * 12;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#0c1427] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-auto animate-scaleUp max-h-[92vh] overflow-y-auto border border-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 bg-[#a3e635]/20 text-[#a3e635] text-xs font-bold px-3 py-1 rounded-full mb-3 border border-[#a3e635]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SharePal Asset Partner Program</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Monetize Your Gear. <span className="text-[#a3e635]">Earn Monthly Income.</span>
        </h2>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Put your idle gaming consoles, cameras, lenses, and VR headsets to work. SharePal manages doorstep delivery, maintenance, sanitized packaging, and security while you earn monthly payouts.
        </p>

        {submitted ? (
          <div className="my-8 text-center bg-slate-900 border border-slate-800 p-8 rounded-3xl animate-scaleUp">
            <div className="w-16 h-16 bg-lime-400/20 text-[#a3e635] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Partner Application Received!</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
              Thank you {name || 'Pal'}! Our Asset Procurement Manager in {city} will reach out to you on <strong>{phone}</strong> within 4 business hours to inspect the gear and arrange pickup.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#a3e635] text-black font-extrabold text-xs px-6 py-2.5 rounded-xl hover:bg-[#84cc16] transition cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Interactive Earnings Calculator */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 my-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#a3e635]" />
                  Asset Yield Calculator
                </span>
                <span className="text-[10px] text-slate-400">100% Insured</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Select Gear Type</label>
                  <select
                    value={assetType}
                    onChange={(e) => setAssetType(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-xs rounded-xl p-2.5 text-white font-semibold focus:border-[#a3e635]"
                  >
                    <option value="ps5">PlayStation 5 Console</option>
                    <option value="xbox">Xbox Series X</option>
                    <option value="vr">Meta Quest 2 / Quest 3</option>
                    <option value="gopro">GoPro Hero Action Cam</option>
                    <option value="camera">Sony A7 / DSLR Camera</option>
                    <option value="drone">DJI Drone</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    Units You Own: <strong className="text-white">{assetUnits}</strong>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={assetUnits}
                    onChange={(e) => setAssetUnits(Number(e.target.value))}
                    className="w-full accent-[#a3e635] mt-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>1 unit</span>
                    <span>3 units</span>
                    <span>5 units</span>
                  </div>
                </div>
              </div>

              {/* Calculated Results */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-center">
                <div className="bg-slate-800/60 rounded-xl p-3">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Estimated Monthly</div>
                  <div className="text-xl sm:text-2xl font-black text-[#a3e635] mt-0.5">
                    ₹{estimatedMonthly.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-slate-400">Direct bank transfer</span>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-3">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Estimated Annual</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                    ₹{estimatedAnnual.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">~45-60% ROI</span>
                </div>
              </div>
            </div>

            {/* Partner Benefits Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-6">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="font-bold text-white text-[11px]">100% Protection</div>
                <div className="text-[10px] text-slate-400">Total damage &amp; loss insurance</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <DollarSign className="w-4 h-4 text-[#a3e635] mb-1" />
                <div className="font-bold text-white text-[11px]">Zero Logistics</div>
                <div className="text-[10px] text-slate-400">We pick up and sanitize</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <Sparkles className="w-4 h-4 text-purple-400 mb-1" />
                <div className="font-bold text-white text-[11px]">₹10,000 Bonus</div>
                <div className="text-[10px] text-slate-400">Instant joining credits</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <TrendingUp className="w-4 h-4 text-blue-400 mb-1" />
                <div className="font-bold text-white text-[11px]">10% Rent Discount</div>
                <div className="text-[10px] text-slate-400">On all personal rentals</div>
              </div>
            </div>

            {/* Partner Application Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <h4 className="text-xs font-bold text-slate-200">Submit Your Gear for Assessment:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-xs bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile number (+91)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-xs bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white"
                />
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="text-xs bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white"
                >
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-xs sm:text-sm py-3 rounded-xl transition shadow-lg cursor-pointer"
              >
                Register as an Asset Partner
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
