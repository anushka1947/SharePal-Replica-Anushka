import React from 'react';
import { X, Check } from 'lucide-react';
import { POPULAR_CITIES, OTHER_CITIES } from '../data/categories';

interface CityPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCity: string;
  onSelectCity: (city: string) => void;
}

export const CityPickerModal: React.FC<CityPickerModalProps> = ({
  isOpen,
  onClose,
  currentCity,
  onSelectCity,
}) => {
  if (!isOpen) return null;

  // Render iconic architectural monuments matching video 00:55
  const renderCityIcon = (type: string) => {
    switch (type) {
      case 'monument': // India Gate / Delhi
        return (
          <svg className="w-8 h-8 text-slate-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 21h16M6 21V5h12v16M9 21v-7a3 3 0 0 1 6 0v7M4 5h16M7 2h10" />
          </svg>
        );
      case 'gateway': // Gateway of India / Mumbai
        return (
          <svg className="w-8 h-8 text-slate-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M5 21V7l7-3 7 3v14M9 21v-6a3 3 0 0 1 6 0v6M5 7h14" />
          </svg>
        );
      case 'palace': // Pune
        return (
          <svg className="w-8 h-8 text-slate-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M4 21V9l8-6 8 6v12M9 21v-5a3 3 0 0 1 6 0v5M9 9h6" />
          </svg>
        );
      case 'charminar': // Hyderabad
        return (
          <svg className="w-8 h-8 text-slate-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M4 21V4m16 17V4M8 21v-6a4 4 0 0 1 8 0v6M4 8h16M4 14h16M3 4h3m12 0h3" />
          </svg>
        );
      case 'temple': // Chennai
        return (
          <svg className="w-8 h-8 text-slate-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 21h20M5 21l3-14h8l3 14M8 7l4-5 4 5M10 21v-4a2 2 0 0 1 4 0v4" />
          </svg>
        );
      case 'soudha': // Vidhana Soudha / Bangalore
      default:
        return (
          <svg className="w-8 h-8 text-blue-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 21h20M4 21V11l8-4 8 4v10M10 21v-5a2 2 0 0 1 4 0v5M7 11h10M12 2v5" />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 text-center tracking-tight mb-6">
          Select Your City
        </h3>

        {/* Popular Cities */}
        <div className="mb-6">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-center mb-4">
            Popular Cities
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {POPULAR_CITIES.map((city) => {
              const isSelected = city.name.toLowerCase() === currentCity.toLowerCase();
              return (
                <button
                  key={city.name}
                  onClick={() => {
                    onSelectCity(city.name);
                    onClose();
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition cursor-pointer text-center group ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-100 font-bold text-blue-900'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-slate-50 text-slate-700 font-medium'
                  }`}
                >
                  <div className="h-10 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
                    {renderCityIcon(city.iconType)}
                  </div>
                  <span className="text-xs mt-1">{city.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Other Cities */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-center mb-3">
            Other Cities
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {OTHER_CITIES.map((city) => {
              const isSelected = city.toLowerCase() === currentCity.toLowerCase();
              return (
                <button
                  key={city}
                  onClick={() => {
                    onSelectCity(city);
                    onClose();
                  }}
                  className={`text-xs px-4 py-2 rounded-xl border transition cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-gray-200 hover:border-blue-300 text-slate-700 bg-white'
                  }`}
                >
                  {city}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center mt-6 pt-4 border-t border-gray-100">
          Doorstep delivery &amp; pickup available in all serviceable pin codes.
        </p>
      </div>
    </div>
  );
};
