import React, { useState } from 'react';
import { X, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onLoginSuccess: (user: User) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onLogout,
}) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('482910');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      name: 'Pal ' + phone.slice(-4),
      phone: phone.trim(),
      email: `user${phone.slice(-4)}@sharepal.in`,
      city: 'Bangalore',
      isKycVerified: true,
    };
    onLoginSuccess(newUser);
    onClose();
    setStep('phone');
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

        {currentUser ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-blue-100 text-blue-700 font-extrabold text-2xl rounded-full flex items-center justify-center mx-auto mb-3">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{currentUser.name}</h3>
            <p className="text-xs text-slate-500">{currentUser.phone}</p>
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full my-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>KYC Verified • Zero Deposit Enabled</span>
            </div>

            <div className="space-y-2 mt-4">
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="w-full bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs py-2.5 rounded-xl transition cursor-pointer"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* SharePal Logo */}
            <div className="flex items-center justify-center gap-0.5 mb-5">
              <span className="text-2xl font-black tracking-tight text-blue-600">
                Share<span className="text-[#84cc16]">Pal</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-600 mb-2"></span>
            </div>

            <h3 className="text-xl font-black text-slate-900 text-center">
              Login/Signup to Your Account
            </h3>
            <p className="text-xs text-slate-500 text-center mt-1 mb-6">
              {step === 'phone'
                ? 'Enter your WhatsApp number to continue'
                : `Enter the 6-digit code sent to +91 ${phone}`}
            </p>

            {step === 'phone' ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                {/* Phone Input with +91 - prefix */}
                <div className="relative">
                  <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2.5 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <span className="text-xs font-bold text-slate-700 pr-2 border-r border-gray-200">
                      +91 -
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your number"
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs pl-3 border-none focus:outline-none text-slate-900 font-semibold"
                    />
                  </div>
                </div>

                {/* Coupon Box (Exact Match to video 01:20) */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-3 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-0.5">
                    <Tag className="w-3.5 h-3.5 text-blue-600" />
                    <span>Use code SHAREPAL &amp; get 10% off</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    on orders above ₹1500. Maximum discount ₹300.
                  </p>
                  <span className="inline-block mt-1.5 text-[10px] font-bold text-blue-600 uppercase">
                    Use Coupon - SHAREPAL
                  </span>
                </div>

                {/* Get OTP Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Get OTP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Terms Disclaimer */}
                <p className="text-[10px] text-slate-400 text-center leading-relaxed mt-4">
                  By continuing, you agree to the <span className="underline">Terms of Service</span> and acknowledge the <span className="underline">Privacy Policy</span>
                </p>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 flex items-center justify-between">
                  <span>Demo auto-filled OTP:</span>
                  <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-blue-200">
                    482910
                  </span>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1 text-center">
                    Enter Verification Code
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full text-center tracking-widest text-lg font-black font-mono rounded-xl border border-gray-300 p-2.5 text-slate-900"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep('phone')}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl transition cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-3 rounded-xl transition shadow-md cursor-pointer"
                  >
                    Verify &amp; Continue
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
