import React from 'react';
import { CATEGORY_SIDEBAR_ITEMS } from '../data/categories';

interface CategorySidebarProps {
  category: string;
  selectedSubcategory: string;
  onSelectSubcategory: (subcat: string) => void;
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  category,
  selectedSubcategory,
  onSelectSubcategory,
}) => {
  const items = CATEGORY_SIDEBAR_ITEMS[category] || CATEGORY_SIDEBAR_ITEMS.Gaming;

  return (
    <aside className="block w-[80px] md:w-[100px] lg:w-[110px] shrink-0" data-purpose="vertical-category-sidebar">
      <div className="sticky top-28 h-full max-h-[calc(100vh-140px)] overflow-y-auto rounded-xl bg-gray-100/90 p-1 md:p-2.5 shadow-[0_2px_15px_rgba(0,0,0,0.06)] transition-all duration-300 no-scrollbar">
        <div className="flex flex-col gap-2.5 md:gap-3.5">
          {items.map((item) => {
            const isActive = selectedSubcategory.toLowerCase() === item.id.toLowerCase() ||
              (item.id === 'All' && selectedSubcategory === 'All');

            return (
              <button
                key={item.id}
                onClick={() => onSelectSubcategory(item.id)}
                className="group flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer w-full text-center"
              >
                {/* Icon Container with original proportions and border */}
                <div
                  className={`relative flex aspect-square w-12 md:w-14 lg:w-16 items-center justify-center overflow-hidden rounded-xl p-1.5 transition-all duration-300 ${
                    isActive
                      ? 'border-2 border-[#e53935] bg-white shadow-xs'
                      : 'border border-gray-200 bg-white group-hover:border-red-200 group-hover:bg-gray-50'
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    loading="lazy"
                    className={`h-full w-full object-contain mix-blend-multiply transition-transform duration-300 ${
                      isActive ? 'scale-105' : 'group-hover:scale-110 scale-100'
                    }`}
                  />
                </div>

                {/* Category label with active underline */}
                <span
                  className={`line-clamp-2 max-w-[65px] md:max-w-[85px] text-center text-[10px] md:text-xs leading-tight transition-colors ${
                    isActive
                      ? 'font-bold text-[#e53935]'
                      : 'font-semibold text-neutral-800 group-hover:text-[#e53935]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="mx-auto mt-0.5 h-[2px] w-4 md:w-6 lg:w-8 rounded-full bg-[#e53935]" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
