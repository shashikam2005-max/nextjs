import React from 'react';
import { getSkinToneProfile } from '../../data/fashionData';
import { LanguageCode } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { motion } from 'motion/react';
import { Palette, ArrowRight } from 'lucide-react';

interface AiStep4SkinToneProps {
  skinToneValue: number;
  language?: LanguageCode;
  onSkinToneChange: (value: number) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const AiStep4SkinTone: React.FC<AiStep4SkinToneProps> = ({
  skinToneValue,
  language = 'en',
  onSkinToneChange,
  onBack,
  onContinue,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const profile = getSkinToneProfile(skinToneValue);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto flex flex-col items-center text-center px-4 py-6 md:py-10"
    >
      {/* Title & Subtitle */}
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1A0F33] mb-3">
        {t.step4.title}
      </h2>
      <p className="text-[#554173] text-sm md:text-base max-w-xl mb-12 font-normal">
        {t.step4.subtitle}
      </p>

      {/* Slider Container */}
      <div className="w-full max-w-2xl mb-8 px-4">
        {/* 3 Tier Labels */}
        <div className="flex justify-between text-sm md:text-base font-semibold text-[#3D285C] mb-3 px-1">
          <span>{t.step4.fair}</span>
          <span>{t.step4.medium}</span>
          <span>{t.step4.rich}</span>
        </div>

        {/* The Skin Tone Slider Track */}
        <div className="relative py-2">
          <input
            id="slider-skintone"
            type="range"
            min={0}
            max={100}
            value={skinToneValue}
            onChange={(e) => onSkinToneChange(Number(e.target.value))}
            className="w-full skin-slider cursor-pointer"
          />
        </div>

        {/* Selected Label Display */}
        <div className="mt-5 text-sm md:text-base font-extrabold tracking-widest text-amber-600 uppercase">
          {t.step4.selected}: {profile.label}
        </div>
      </div>

      {/* Stylist Tip Box */}
      <div className="w-full max-w-2xl p-5 md:p-6 rounded-2xl glass-panel text-left flex items-start gap-4 mb-10 shadow-md border border-purple-200/80">
        <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex-shrink-0 flex items-center justify-center text-amber-700">
          <Palette className="w-5 h-5" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs md:text-sm text-[#2E184D] leading-relaxed">
            {profile.stylistTip}
          </p>
          {/* Palette Swatches */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[11px] text-[#63507E] uppercase tracking-wider font-semibold mr-1">
              {t.step4.topMatches}
            </span>
            {profile.recommendedColors.map((color, idx) => (
              <span
                key={idx}
                className="w-5 h-5 rounded-full border border-purple-300/80 shadow-xs"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-4">
        <button
          id="btn-skintone-back"
          onClick={onBack}
          className="px-8 py-3 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
        >
          {t.common.back}
        </button>
        <button
          id="btn-skintone-continue"
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
