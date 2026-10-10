import React from 'react';
import { CATEGORY_SIDEBAR_ITEMS, SubcategoryItem } from '../data/categories';

interface SubcategoryFilterBarProps {
  category?: string;
  selectedSubcategory: string;
  onSelectSubcategory: (id: string) => void;
  totalItemsCount: number;
  categoryTitle?: string;
}

export const SubcategoryFilterBar: React.FC<SubcategoryFilterBarProps> = ({
  category = 'Gaming',
  selectedSubcategory,
  onSelectSubcategory,
  totalItemsCount,
  categoryTitle = 'Gaming Gadgets On Rent',
}) => {
  const items: SubcategoryItem[] = CATEGORY_SIDEBAR_ITEMS[category] || CATEGORY_SIDEBAR_ITEMS.Gaming;

  return (
    <div className="mb-8" data-purpose="subcategory-navigation">
      {/* Icon Navigation Pills */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
        {items.map((subcat) => {
          const isActive = selectedSubcategory.toLowerCase() === subcat.id.toLowerCase();
          return (
            <button
              key={subcat.id}
              onClick={() => onSelectSubcategory(subcat.id)}
              className={`flex flex-col items-center justify-center min-w-[72px] sm:min-w-[82px] py-2 px-3 rounded-2xl transition shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-white border-2 border-blue-600 shadow-sm text-blue-600 font-bold text-xs ring-2 ring-blue-100'
                  : 'bg-white border border-gray-200 hover:border-blue-400 text-slate-700 font-medium text-xs group'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1 overflow-hidden p-1 transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 scale-105'
                    : 'bg-gray-50 group-hover:bg-blue-50'
                }`}
              >
                <img
                  src={subcat.imageUrl}
                  alt={subcat.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <span className="whitespace-nowrap">{subcat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Section Title & Counter */}
      <div className="flex items-center justify-between mt-6 pb-2 border-b border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {categoryTitle}
        </h2>
        <span className="text-xs sm:text-sm font-medium text-slate-500">
          Total items: <strong className="text-slate-800">{totalItemsCount} items</strong>
        </span>
      </div>
    </div>
  );
};
