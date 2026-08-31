import React from 'react';
import { FashionCategory, LanguageCode } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AiStep2CategoryProps {
  selectedCategories: FashionCategory[];
  language?: LanguageCode;
  onToggleCategory: (cat: FashionCategory) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const AiStep2Category: React.FC<AiStep2CategoryProps> = ({
  selectedCategories,
  language = 'en',
  onToggleCategory,
  onBack,
  onContinue,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const categoryPills: { id: FashionCategory; label: string }[] = [
    { id: 'casual', label: t.step2.casual },
    { id: 'formal', label: t.step2.formal },
    { id: 'accessories', label: t.step2.accessories },
    { id: 'ethnic', label: t.step2.ethnic },
    { id: 'swimwear', label: t.step2.swimwear },
    { id: 'sportswear', label: t.step2.sportswear },
    { id: 'outerwear', label: t.step2.outerwear },
    { id: 'footwear', label: t.step2.footwear },
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
        {t.step2.title}
      </h2>
      <p className="text-[#554173] text-sm md:text-base max-w-xl mb-12 font-normal">
        {t.step2.subtitle}
      </p>

      {/* Grid of Pill Chips (4 columns on desktop, 2 on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 w-full max-w-3xl mb-14">
        {categoryPills.map((pill) => {
          const isSelected = selectedCategories.includes(pill.id);
          return (
            <button
              key={pill.id}
              id={`pill-category-${pill.id}`}
              onClick={() => onToggleCategory(pill.id)}
              className={`py-4 px-5 rounded-full text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer text-center ${
                isSelected
                  ? 'glass-btn-active transform scale-105'
                  : 'glass-btn-pill text-[#2E184D]'
              }`}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-4">
        <button
          id="btn-category-back"
          onClick={onBack}
          className="px-8 py-3 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
        >
          {t.common.back}
        </button>
        <button
          id="btn-category-continue"
          onClick={onContinue}
          disabled={selectedCategories.length === 0}
          className="gold-action-btn px-10 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span>{t.common.continue}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
