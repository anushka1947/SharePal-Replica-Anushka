import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/categories';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const displayedFaqs = showAll ? FAQS : FAQS.slice(0, 5);

  return (
    <section
      className="mb-14 bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm"
      data-purpose="faq-accordion"
    >
      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="divide-y divide-gray-100">
        {displayedFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div key={faq.id} className="py-4 cursor-pointer">
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center font-bold text-sm text-slate-800 text-left cursor-pointer group"
              >
                <span className="group-hover:text-blue-600 transition-colors">{faq.question}</span>
                <span
                  className={`transition-transform duration-200 text-slate-400 group-hover:text-blue-600 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal animate-fadeIn">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="w-full py-2.5 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition cursor-pointer"
        >
          {showAll ? 'Show fewer FAQ’s' : 'View more FAQ’s'}
        </button>
      </div>
    </section>
  );
};
