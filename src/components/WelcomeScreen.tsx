import React from 'react';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';

interface WelcomeScreenProps {
  onStartAiStylist: () => void;
  onStartBrowse: () => void;
  language: LanguageCode;
  onToggleLanguage: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartAiStylist,
  onStartBrowse,
  language,
  onToggleLanguage,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between items-center px-4 sm:px-6 py-6 md:py-10 z-20 text-center select-none">
      {/* Top right language switch pill */}
      <div className="w-full flex justify-end">
        <button
          id="btn-welcome-lang"
          onClick={onToggleLanguage}
          className="px-4 py-1.5 rounded-full bg-white/80 hover:bg-white border border-purple-200/60 backdrop-blur-md text-xs font-semibold tracking-wide text-[#2E184D] transition-all shadow-xs cursor-pointer"
        >
          {language === 'en' ? 'EN / සිං / த' : language === 'si' ? 'සිං / EN / த' : 'த / EN / සිං'}
        </button>
      </div>

      {/* Main Hero Branding Center */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center max-w-3xl mx-auto my-auto"
      >
        {/* StyleCue Custom Hanger Monogram */}
        <div className="relative mb-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/85 border border-purple-200/70 backdrop-blur-2xl flex items-center justify-center p-3.5 shadow-[0_12px_36px_rgba(130,85,190,0.14)]">
            <svg
              viewBox="0 0 120 100"
              className="w-full h-full text-[#241344] filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Hook */}
              <path d="M60 22 C 60 12, 70 8, 70 16 C 70 24, 60 28, 60 36" />
              {/* Triangular Hanger Frame */}
              <path d="M60 36 L15 72 C 15 76, 20 80, 26 80 L94 80 C 100 80, 105 76, 105 72 Z" />
              {/* Stylized 'SC' Monogram Intertwined */}
              <path
                d="M52 48 C 44 48, 40 52, 40 58 C 40 68, 56 62, 56 72 C 56 78, 50 82, 44 82"
                stroke="#F59E0B"
                strokeWidth="4.5"
              />
              <path
                d="M78 52 C 70 48, 60 52, 60 62 C 60 74, 72 78, 78 74"
                stroke="#8B5CF6"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex flex-col items-center mb-5">
          <span className="text-xs font-bold tracking-[0.35em] text-amber-600 uppercase mb-2">
            Light Twilight Atelier • Haute Couture
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.22em] font-heading text-[#1B0F33] drop-shadow-sm">
            STYLECUE
          </h1>
        </div>

        {/* Headline & Subtitle */}
        <div className="space-y-2.5 mb-8 max-w-xl">
          <p className="text-2xl md:text-3xl font-light font-editorial italic tracking-wide text-[#28154D]">
            {t.welcome.findStyle}
          </p>
          <p className="text-sm md:text-base font-normal text-[#584475] leading-relaxed">
            {t.welcome.aiTailored}
          </p>
        </div>

        {/* Two Grand Interactive Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl justify-center">
          <button
            id="btn-start-ai-stylist"
            onClick={onStartAiStylist}
            className="w-full sm:w-64 py-3.5 px-6 rounded-full gold-action-btn text-slate-950 font-bold text-sm md:text-base tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>{t.welcome.aiStylist}</span>
          </button>

          <button
            id="btn-start-browse"
            onClick={onStartBrowse}
            className="w-full sm:w-64 py-3.5 px-6 rounded-full bg-white/85 hover:bg-white border border-purple-200/70 hover:border-amber-400 text-[#241344] font-bold text-sm md:text-base tracking-wider flex items-center justify-center gap-2.5 backdrop-blur-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-amber-500" />
            <span>{t.welcome.browseShop}</span>
          </button>
        </div>
      </motion.div>

      {/* Subtle footer */}
      <div className="text-xs text-[#7A6994] font-medium tracking-wider">
        {t.welcome.kioskSubtitle}
      </div>
    </div>
  );
};

