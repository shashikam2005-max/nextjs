import React from 'react';
import { OccasionType, LanguageCode } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { motion } from 'motion/react';
import { Sun, Briefcase, Sparkles, Wine, ArrowRight } from 'lucide-react';

interface AiStep3OccasionProps {
  selectedOccasion: OccasionType;
  language?: LanguageCode;
  onSelectOccasion: (occ: OccasionType) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const AiStep3Occasion: React.FC<AiStep3OccasionProps> = ({
  selectedOccasion,
  language = 'en',
  onSelectOccasion,
  onBack,
  onContinue,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const occasionList: { id: OccasionType; title: string; subtitle: string; icon: React.ReactNode }[] = [
    {
      id: 'casual_sun',
      title: t.step3.casualSun,
      subtitle: t.step3.casualSunSub,
      icon: <Sun className="w-6 h-6" />
    },
    {
      id: 'work_corporate',
      title: t.step3.workCorp,
      subtitle: t.step3.workCorpSub,
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 'wedding_gala',
      title: t.step3.weddingGala,
      subtitle: t.step3.weddingGalaSub,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: 'party_night',
      title: t.step3.partyNight,
      subtitle: t.step3.partyNightSub,
      icon: <Wine className="w-6 h-6" />
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
        {t.step3.title}
      </h2>
      <p className="text-[#554173] text-sm md:text-base max-w-xl mb-10 font-normal">
        {t.step3.subtitle}
      </p>

      {/* 2x2 Grid of Occasion Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-3xl mb-12 text-left">
        {occasionList.map((occ) => {
          const isSelected = selectedOccasion === occ.id;
          return (
            <button
              key={occ.id}
              id={`card-occasion-${occ.id}`}
              onClick={() => onSelectOccasion(occ.id)}
              className={`flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'glass-panel-active transform -translate-y-0.5'
                  : 'glass-panel hover:bg-white/95 hover:border-purple-300'
              }`}
            >
              {/* Icon Bubble */}
              <div
                className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(245,158,11,0.35)]'
                    : 'bg-purple-100/70 text-[#3A2260] border border-purple-200'
                }`}
              >
                {occ.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-[#1A0F33] leading-snug">
                  {occ.title}
                </h3>
                <p className="text-xs md:text-sm text-[#5C4A7A] font-light mt-0.5">
                  {occ.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-4">
        <button
          id="btn-occasion-back"
          onClick={onBack}
          className="px-8 py-3 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
        >
          {t.common.back}
        </button>
        <button
          id="btn-occasion-continue"
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
