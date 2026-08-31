import React from 'react';
import { GenderTarget, LanguageCode } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AiStep1GenderProps {
  selectedGender: GenderTarget;
  language?: LanguageCode;
  onSelectGender: (gender: GenderTarget) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const AiStep1Gender: React.FC<AiStep1GenderProps> = ({
  selectedGender,
  language = 'en',
  onSelectGender,
  onBack,
  onContinue,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const genderCounts: Record<GenderTarget, string> = {
    men: t.step1.itemCountMen,
    women: t.step1.itemCountWomen,
    kids: t.step1.itemCountKids,
  };

  const options: { id: GenderTarget; label: string; sub: string; icon: React.ReactNode }[] = [
    {
      id: 'men',
      label: t.step1.men,
      sub: t.step1.menSub,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      )
    },
    {
      id: 'women',
      label: t.step1.women,
      sub: t.step1.womenSub,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
          <path d="m9 2 1 5-4 4 3 11h6l3-11-4-4 1-5z" />
        </svg>
      )
    },
    {
      id: 'kids',
      label: t.step1.kids,
      sub: t.step1.kidsSub,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
          <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
        </svg>
      )
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto flex flex-col items-center text-center px-4 py-6 md:py-10"
    >
      {/* Title & Subtitle */}
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1A0F33] mb-3">
        {t.step1.title}
      </h2>
      <p className="text-[#554173] text-sm md:text-base max-w-xl mb-10 font-normal">
        {t.step1.subtitle}
      </p>

      {/* 3 Gender Choice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-8">
        {options.map((opt) => {
          const isSelected = selectedGender === opt.id;
          return (
            <button
              key={opt.id}
              id={`card-gender-${opt.id}`}
              onClick={() => onSelectGender(opt.id)}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'glass-panel-active transform -translate-y-1'
                  : 'glass-panel hover:bg-white/95 hover:border-purple-300'
              }`}
            >
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-colors ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                    : 'bg-purple-100/70 text-[#3A2260] border border-purple-200'
                }`}
              >
                {opt.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-semibold text-[#1A0F33] mb-1">
                {opt.label}
              </h3>
              <p className="text-xs text-[#5C4A7A] font-light">
                {opt.sub}
              </p>
            </button>
          );
        })}
      </div>

      {/* Dynamic store match count */}
      <div className="mb-10 text-xs md:text-sm font-bold tracking-wider text-amber-600 uppercase">
        {genderCounts[selectedGender]}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-4">
        <button
          id="btn-gender-back"
          onClick={onBack}
          className="px-8 py-3 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
        >
          {t.common.back}
        </button>
        <button
          id="btn-gender-continue"
          onClick={onContinue}
          className="gold-action-btn px-10 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <span>{t.common.continue}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
