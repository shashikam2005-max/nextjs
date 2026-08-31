import React from 'react';
import { ClothingSize, LanguageCode } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { motion } from 'motion/react';
import { ArrowRight, Minus, Plus } from 'lucide-react';

interface AiStep5FitProps {
  heightCm: number;
  waistInch: number;
  generalSize: ClothingSize;
  language?: LanguageCode;
  onHeightChange: (h: number) => void;
  onWaistChange: (w: number) => void;
  onGeneralSizeChange: (s: ClothingSize) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const AiStep5Fit: React.FC<AiStep5FitProps> = ({
  heightCm,
  waistInch,
  generalSize,
  language = 'en',
  onHeightChange,
  onWaistChange,
  onGeneralSizeChange,
  onBack,
  onContinue,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const sizes: ClothingSize[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto flex flex-col items-center text-center px-4 py-6 md:py-10"
    >
      {/* Title & Subtitle */}
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1A0F33] mb-3">
        {t.step5.title}
      </h2>
      <p className="text-[#554173] text-sm md:text-base max-w-xl mb-10 font-normal">
        {t.step5.subtitle}
      </p>

      {/* Inputs for Height & Waist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl mb-8">
        {/* Height CM */}
        <div className="flex flex-col items-start gap-2">
          <label className="text-xs font-bold tracking-widest text-[#4A3966] uppercase">
            {t.step5.height}
          </label>
          <div className="w-full flex items-center bg-white/85 border border-purple-200/80 rounded-xl px-3 py-2 backdrop-blur-md focus-within:border-amber-400 shadow-xs">
            <button
              onClick={() => onHeightChange(Math.max(120, heightCm - 1))}
              className="p-2 text-[#5C4A7A] hover:text-[#1A0F33] hover:bg-purple-50 rounded-lg cursor-pointer transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              id="input-height"
              type="number"
              value={heightCm}
              onChange={(e) => onHeightChange(Number(e.target.value))}
              className="w-full bg-transparent text-center text-xl font-bold text-[#1A0F33] outline-none"
            />
            <button
              onClick={() => onHeightChange(Math.min(220, heightCm + 1))}
              className="p-2 text-[#5C4A7A] hover:text-[#1A0F33] hover:bg-purple-50 rounded-lg cursor-pointer transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Waist Inch */}
        <div className="flex flex-col items-start gap-2">
          <label className="text-xs font-bold tracking-widest text-[#4A3966] uppercase">
            {t.step5.waist}
          </label>
          <div className="w-full flex items-center bg-white/85 border border-purple-200/80 rounded-xl px-3 py-2 backdrop-blur-md focus-within:border-amber-400 shadow-xs">
            <button
              onClick={() => onWaistChange(Math.max(20, waistInch - 1))}
              className="p-2 text-[#5C4A7A] hover:text-[#1A0F33] hover:bg-purple-50 rounded-lg cursor-pointer transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              id="input-waist"
              type="number"
              value={waistInch}
              onChange={(e) => onWaistChange(Number(e.target.value))}
              className="w-full bg-transparent text-center text-xl font-bold text-[#1A0F33] outline-none"
            />
            <button
              onClick={() => onWaistChange(Math.min(50, waistInch + 1))}
              className="p-2 text-[#5C4A7A] hover:text-[#1A0F33] hover:bg-purple-50 rounded-lg cursor-pointer transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center w-full max-w-xl gap-4 my-4">
        <div className="flex-1 h-px bg-purple-200/70" />
        <span className="text-xs font-semibold tracking-wider text-[#685585] uppercase">
          {t.step5.orChooseSize}
        </span>
        <div className="flex-1 h-px bg-purple-200/70" />
      </div>

      {/* Size Bubbles */}
      <div className="flex items-center justify-center flex-wrap gap-3 md:gap-4 my-6 mb-12">
        {sizes.map((sz) => {
          const isSelected = generalSize === sz;
          return (
            <button
              key={sz}
              id={`btn-size-${sz}`}
              onClick={() => onGeneralSizeChange(sz)}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-full font-bold text-base md:text-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 shadow-[0_0_18px_rgba(245,158,11,0.4)] transform scale-110 border-2 border-amber-300'
                  : 'bg-white/80 hover:bg-white border border-purple-200/80 text-[#2E184D] shadow-xs'
              }`}
            >
              {sz}
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-4">
        <button
          id="btn-fit-back"
          onClick={onBack}
          className="px-8 py-3 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
        >
          {t.common.back}
        </button>
        <button
          id="btn-fit-continue"
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
