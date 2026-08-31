import React, { useEffect, useState } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { PartyPopper, Check, Sparkles, ArrowRight } from 'lucide-react';

interface OrderConfirmedScreenProps {
  sessionCode?: string;
  language?: LanguageCode;
  onStartNewSession: () => void;
}

export const OrderConfirmedScreen: React.FC<OrderConfirmedScreenProps> = ({
  sessionCode = '#SC-247',
  language = 'en',
  onStartNewSession,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [stepProgress, setStepProgress] = useState(2); // 1 = placed, 2 = preparing, 3 = ready

  useEffect(() => {
    // Fire celebratory confetti on mounting
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FACC15', '#F59E0B', '#FFFFFF', '#38BDF8']
    });

    // Simulate real-time fitting room staff updating after 6 seconds to ready
    const timer = setTimeout(() => {
      setStepProgress(3);
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { y: 0.5 }
      });
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto flex flex-col items-center text-center px-4 py-8 md:py-14"
    >
      {/* Gold Celebration Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-amber-200 flex items-center justify-center text-slate-950 shadow-[0_0_30px_rgba(250,204,21,0.6)] mb-6"
      >
        <PartyPopper className="w-10 h-10 stroke-[2.2]" />
      </motion.div>

      {/* Main Announcement */}
      <h1 className="text-3xl md:text-5xl font-light text-[#1A0F33] tracking-tight mb-3">
        {t.orderConfirmed.title}
      </h1>
      <p className="text-[#5C4A7A] text-sm md:text-lg font-normal mb-8 max-w-lg">
        {t.orderConfirmed.subtitle}
      </p>

      {/* Glassmorphic Cabin Card */}
      <div className="w-full max-w-lg rounded-3xl glass-panel p-6 md:p-8 backdrop-blur-2xl shadow-xl border border-purple-200/80 mb-8">
        <span className="text-xs font-extrabold tracking-widest text-[#5C4A7A] uppercase">
          {t.orderConfirmed.cabinCode}
        </span>

        {/* Big Yellow Cabin Code */}
        <div className="text-4xl md:text-6xl font-black text-amber-600 tracking-wider my-3">
          {sessionCode}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-purple-200/80 my-5" />

        {/* Interactive Step Timeline */}
        <div className="space-y-4 text-left px-2 md:px-6">
          {/* Step 1: Order placed */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 flex-shrink-0 shadow-xs">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-sm md:text-base font-bold text-[#1A0F33]">
              {t.orderConfirmed.step1}
            </span>
          </div>

          {/* Step 2: Staff preparing in Main Hall cabin */}
          <div className="flex items-center gap-4">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-xs ${
                stepProgress >= 3
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/30 animate-pulse'
              }`}
            >
              {stepProgress >= 3 ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-slate-950" />
              )}
            </div>
            <span
              className={`text-sm md:text-base font-semibold ${
                stepProgress >= 2 ? 'text-amber-700' : 'text-[#8F7DAB]'
              }`}
            >
              {t.orderConfirmed.step2}
            </span>
          </div>

          {/* Step 3: Ready for collection */}
          <div className="flex items-center gap-4">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-xs ${
                stepProgress >= 3
                  ? 'bg-emerald-500 text-white ring-4 ring-emerald-500/30'
                  : 'bg-purple-100/80 border border-purple-300 text-transparent'
              }`}
            >
              {stepProgress >= 3 ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-transparent" />
              )}
            </div>
            <span
              className={`text-sm md:text-base ${
                stepProgress >= 3 ? 'text-emerald-700 font-bold' : 'text-[#8F7DAB] font-normal'
              }`}
            >
              {t.orderConfirmed.step3}
            </span>
          </div>
        </div>
      </div>

      {/* Start New Session Button */}
      <button
        id="btn-start-new-session"
        onClick={onStartNewSession}
        className="gold-action-btn px-12 py-4 rounded-full text-sm md:text-base font-extrabold flex items-center gap-3 cursor-pointer shadow-xl mb-5"
      >
        <span>{t.orderConfirmed.startNew}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Footer Status */}
      <div className="text-xs md:text-sm font-extrabold tracking-widest text-amber-700 uppercase">
        ORDER PLACED — STAFF NOTIFIED
      </div>
    </motion.div>
  );
};

