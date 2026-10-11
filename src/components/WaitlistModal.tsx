import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Bell, Users } from 'lucide-react';
import { Product } from '../types';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onVoteSuccess: (productId: string) => void;
  currentCity?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  product,
  onVoteSuccess,
  currentCity,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [voted, setVoted] = useState(false);

  if (!isOpen || !product) return null;

  const currentVotes = product.waitlistCount || 74;
  const targetVotes = product.waitlistTarget || 1000;
  const progressPercent = Math.min(100, Math.round((currentVotes / targetVotes) * 100));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    onVoteSuccess(product.id);
    setVoted(true);
  };

  const handleDone = () => {
    setVoted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {voted ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Vote Cast Successfully!</h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              You are vote <strong className="text-emerald-700">#{currentVotes + 1}</strong> for{' '}
              <span className="font-bold">{product.name}</span>! When this gadget hits 1,000 votes, we will dispatch initial units in {currentCity || 'Bangalore'} and notify you first via WhatsApp/SMS.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-xs text-emerald-800 font-semibold mb-6">
              Bonus ₹200 rental credit added to your account for helping curate our inventory!
            </div>
            <button
              onClick={handleDone}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition cursor-pointer"
            >
              Continue Exploring SharePal
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#d9f99d] text-[#3f6212] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Vote to Launch
              </span>
            </div>

            <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Help us bring this gadget to SharePal inventory in {currentCity || 'Bangalore'}.
            </p>

            {/* Product Snapshot */}
            <div className="my-4 h-36 bg-slate-50 rounded-2xl flex items-center justify-center p-3 border border-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain h-full mix-blend-multiply"
              />
            </div>

            {/* Progress Counter */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-5">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  Community Votes
                </span>
                <span className="font-extrabold text-blue-600">
                  {currentVotes} / {targetVotes} Joined
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 to-lime-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                Launching when 1,000 votes are reached. Estimated launch date: next 14 days.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full text-xs rounded-xl border border-gray-300 p-2.5 focus:border-blue-500 font-medium text-slate-800"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  WhatsApp / Mobile Number (+91)
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  pattern="[0-9]{10}"
                  className="w-full text-xs rounded-xl border border-gray-300 p-2.5 focus:border-blue-500 font-medium text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-xs sm:text-sm py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Bell className="w-4 h-4" />
                <span>Join Waitlist &amp; Cast Vote</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
