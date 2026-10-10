import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { RentalDates } from '../types';

interface FloatingBottomBarProps {
  rentalDates: RentalDates | null;
  onOpenDatePicker: () => void;
  onOpenSupportChat: () => void;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({
  rentalDates,
  onOpenDatePicker,
  onOpenSupportChat,
}) => {
  return (
    <>
      {/* Centered Floating Date Trigger */}
      <aside
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[92vw]"
        data-purpose="floating-date-picker-trigger"
      >
        <button
          onClick={onOpenDatePicker}
          className="bg-[#0b1329] text-white hover:bg-slate-900 border border-slate-700 shadow-2xl px-5 py-3 rounded-full flex items-center gap-2.5 text-xs font-bold transition transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <Calendar className="w-4 h-4 text-blue-400" />
          <span>
            {rentalDates
              ? `Rental: ${rentalDates.deliveryDate} → ${rentalDates.returnDate} (${rentalDates.days} days)`
              : 'Select rental dates to view prices'}
          </span>
        </button>
      </aside>

      {/* Floating Chat Support Widget */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={onOpenSupportChat}
          aria-label="Customer Support Chat"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-2xl transition transform hover:scale-110 active:scale-95 border-2 border-white cursor-pointer relative group"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></span>
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat with SharePal Support
          </span>
        </button>
      </div>
    </>
  );
};
