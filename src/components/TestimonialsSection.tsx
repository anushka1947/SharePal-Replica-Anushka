import React from 'react';
import { TESTIMONIALS, IMPACT_METRICS } from '../data/categories';

interface TestimonialsSectionProps {
  currentCity: string;
  selectedCategoryName: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  currentCity,
  selectedCategoryName,
}) => {
  return (
    <section className="mb-16" data-purpose="social-proof-testimonials">
      {/* Breadcrumb path */}
      <nav aria-label="Breadcrumb" className="text-[11px] text-slate-500 mb-8 flex items-center gap-1.5">
        <span className="hover:underline cursor-pointer">{currentCity}</span>
        <span>›</span>
        <span className="text-slate-700 font-semibold">{selectedCategoryName} on rent</span>
      </nav>

      {/* Social Proof Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Served more than <span className="text-orange-500">1 Lakh Orders</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">Verified reviews from authentic gamers and creators</p>
      </div>

      {/* Testimonial Cards Carousel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-all duration-200"
          >
            <div>
              <div className="flex items-center gap-1 mb-2.5">
                <span className="text-amber-500 font-bold text-xs mr-1 bg-amber-50 w-5 h-5 rounded-full flex items-center justify-center">
                  G
                </span>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {t.quote}
              </p>
            </div>
            <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-gray-100">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center">
                {t.initials}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">{t.author}</div>
                <div className="text-[10px] text-slate-400">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Impact Metrics Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
        {IMPACT_METRICS.map((metric, idx) => (
          <div
            key={idx}
            className={idx === 1 ? 'border-y sm:border-y-0 sm:border-x border-gray-100 py-4 sm:py-0' : ''}
          >
            <div className="text-3xl sm:text-4xl font-black text-blue-600">
              {metric.value.split(metric.highlight)[0]}
              <span className="text-lime-500">{metric.highlight}</span>
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
