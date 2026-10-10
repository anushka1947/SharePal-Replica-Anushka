import React, { useState } from 'react';
import { X, Calendar, Clock, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { RentalDates } from '../types';

interface DateRangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  rentalDates: RentalDates | null;
  onSaveDates: (dates: RentalDates) => void;
}

export const DateRangeModal: React.FC<DateRangeModalProps> = ({
  isOpen,
  onClose,
  rentalDates,
  onSaveDates,
}) => {
  // Reference date: October 2026 (matching video 01:00)
  const [selectedStart, setSelectedStart] = useState<number | null>(rentalDates ? parseInt(rentalDates.deliveryDate.split('-')[2]) : 14);
  const [selectedEnd, setSelectedEnd] = useState<number | null>(rentalDates ? parseInt(rentalDates.returnDate.split('-')[2]) : 17);
  const [activeMonthOffset, setActiveMonthOffset] = useState<number>(0);

  if (!isOpen) return null;

  // Month 1: October 2026 (days: 31, starts on Thursday = index 4)
  // Month 2: November 2026 (days: 30, starts on Sunday = index 0)
  const month1Name = 'October 2026';
  const month1Days = 31;
  const month1StartDay = 4; // Thu

  const month2Name = 'November 2026';
  const month2Days = 30;
  const month2StartDay = 0; // Sun

  const dayHeaders = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const handleDateClick = (day: number) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(day);
      setSelectedEnd(null);
    } else if (selectedStart && !selectedEnd) {
      if (day >= selectedStart) {
        setSelectedEnd(day);
      } else {
        setSelectedEnd(selectedStart);
        setSelectedStart(day);
      }
    }
  };

  const calculatedDays = selectedStart && selectedEnd ? Math.max(1, selectedEnd - selectedStart) : (selectedStart ? 1 : 0);

  const formattedDelivery = selectedStart ? `10/${selectedStart}/2026` : 'select delivery date';
  const formattedPickup = selectedEnd ? `10/${selectedEnd}/2026` : (selectedStart ? `10/${selectedStart + 1}/2026` : 'select pickup date');

  const handleContinue = () => {
    onSaveDates({
      deliveryDate: formattedDelivery,
      returnDate: formattedPickup,
      days: Math.max(1, calculatedDays),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative my-auto animate-scaleUp max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
          Select your Dates
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Inputs, Slots info, Rental Period, CTA) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Delivery Date Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Delivery Date</span>
                <span className="text-xs font-bold text-slate-800">{formattedDelivery}</span>
              </div>
            </div>

            {/* Pickup Date Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-purple-600 shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Pickup Date</span>
                <span className="text-xs font-bold text-slate-800">{formattedPickup}</span>
              </div>
            </div>

            {/* Slot Description */}
            <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-blue-50/50 border border-blue-100 rounded-xl p-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1" />
              <p className="leading-relaxed">
                Same-day delivery between <strong>9PM and 11PM</strong> for future dates. You can choose delivery slot during checkout. We pickup between <strong>6AM to 11AM</strong>.
              </p>
            </div>

            {/* Rental Period Counter */}
            <div className="border border-slate-200 rounded-2xl p-4 bg-white shadow-xs">
              <span className="text-xs font-semibold text-slate-500 block mb-1">Your Rental Period:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">
                  {String(calculatedDays).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-slate-700">Chargeable Period Day</span>
              </div>
            </div>

            {/* Savings Banner */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-3.5 text-xs text-amber-900">
              <span className="font-extrabold flex items-center gap-1 text-amber-800">
                ✨ Save more with us!
              </span>
              <p className="text-[11px] text-amber-800 mt-1 leading-snug">
                Longer rental periods mean bigger savings - enjoy discounts of up to 12%. We don't charge you for delivery and pickup days!
              </p>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl transition shadow-lg cursor-pointer"
            >
              Continue
            </button>
          </div>

          {/* Right Column (Dual Month Calendar) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Month 1: October 2026 */}
              <div>
                <div className="text-center font-bold text-xs text-slate-900 mb-3">
                  {month1Name}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-400 font-bold mb-2">
                  {dayHeaders.map((dh) => (
                    <div key={dh}>{dh}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {/* Empty offset cells */}
                  {Array.from({ length: month1StartDay }).map((_, i) => (
                    <div key={'empty-' + i} className="h-8" />
                  ))}
                  {/* Days */}
                  {Array.from({ length: month1Days }).map((_, i) => {
                    const day = i + 1;
                    const isStart = selectedStart === day;
                    const isEnd = selectedEnd === day;
                    const isInRange = selectedStart && selectedEnd && day > selectedStart && day < selectedEnd;
                    return (
                      <button
                        key={day}
                        onClick={() => handleDateClick(day)}
                        className={`h-8 w-8 rounded-full flex items-center justify-center font-semibold text-xs mx-auto transition cursor-pointer ${
                          isStart || isEnd
                            ? 'bg-blue-600 text-white font-bold shadow-xs'
                            : isInRange
                            ? 'bg-blue-100 text-blue-900'
                            : 'hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Month 2: November 2026 */}
              <div>
                <div className="text-center font-bold text-xs text-slate-900 mb-3">
                  {month2Name}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-400 font-bold mb-2">
                  {dayHeaders.map((dh) => (
                    <div key={dh}>{dh}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {/* Days */}
                  {Array.from({ length: month2Days }).map((_, i) => {
                    const day = i + 1;
                    return (
                      <button
                        key={day}
                        onClick={() => handleDateClick(day + 31)}
                        className="h-8 w-8 rounded-full flex items-center justify-center font-semibold text-xs mx-auto hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-center text-[10px] text-slate-400">
              Click start date and return date to calculate exact tenure &amp; discounts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
