import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Recommendation } from '../types';

interface RecommendationFormProps {
  onAddRecommendation: (rec: Recommendation) => void;
  recentRecommendations: Recommendation[];
}

export const RecommendationForm: React.FC<RecommendationFormProps> = ({
  onAddRecommendation,
  recentRecommendations,
}) => {
  const [productName, setProductName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim()) return;

    const newRec: Recommendation = {
      id: 'rec-' + Date.now(),
      productName: productName.trim(),
      occasion: occasion.trim() || 'General Rental',
      createdAt: new Date().toLocaleDateString(),
    };

    onAddRecommendation(newRec);
    setProductName('');
    setOccasion('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      className="mb-14 rounded-2xl bg-[#f0f4ff] border border-blue-100 p-6 sm:p-8 relative overflow-hidden"
      data-purpose="recommendation-form"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Can't find what you're looking for?
          </h3>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          Tell us what gear we should launch next in Bangalore &amp; across India
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 text-emerald-800 text-xs font-semibold animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="font-bold">Thank you for your recommendation!</p>
              <p className="text-emerald-700 font-normal mt-0.5">
                Our procurement team tracks popular requests. We will notify you once this gadget is added.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-5">
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name (e.g. Steam Deck, DJI RS 4)"
                required
                className="w-full text-xs rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 py-2.5 px-3 bg-white text-slate-800"
              />
            </div>
            <div className="sm:col-span-4">
              <input
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder="e.g. trekking trip, weekend party"
                className="w-full text-xs rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 py-2.5 px-3 bg-white text-slate-800"
              />
            </div>
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow cursor-pointer active:scale-98"
              >
                Submit Recommendation
              </button>
            </div>
          </form>
        )}

        {recentRecommendations.length > 0 && (
          <div className="mt-4 pt-3 border-t border-blue-100 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-medium text-slate-500">Recently recommended:</span>
            {recentRecommendations.slice(-3).map((r) => (
              <span
                key={r.id}
                className="bg-white border border-blue-200 text-blue-700 px-2 py-0.5 rounded-full text-[10px] font-semibold"
              >
                {r.productName}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
