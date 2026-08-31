import React from 'react';
import { BodyType, LanguageCode } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface AiStep6BodyTypeProps {
  selectedBodyType: BodyType;
  language?: LanguageCode;
  onSelectBodyType: (b: BodyType) => void;
  onBack: () => void;
  onFindMyOutfit: () => void;
}

export const AiStep6BodyType: React.FC<AiStep6BodyTypeProps> = ({
  selectedBodyType,
  language = 'en',
  onSelectBodyType,
  onBack,
  onFindMyOutfit,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const bodyTypes: { id: BodyType; title: string; badge: string; desc: string }[] = [
    {
      id: 'slim',
      title: 'Slim',
      badge: 'LEAN BUILD',
      desc: 'Narrow frame, straight silhouette — tailored slim fits'
    },
    {
      id: 'athletic',
      title: 'Athletic',
      badge: 'MOST COMMON',
      desc: 'Defined shoulders & waist — structured, sporty cuts'
    },
    {
      id: 'regular',
      title: 'Regular',
      badge: 'BALANCED',
      desc: 'Proportionate build — versatile classic fits'
    },
    {
      id: 'broad_plus',
      title: 'Broad / Plus',
      badge: 'FULL BUILD',
      desc: 'Fuller frame — relaxed, comfort-first cuts'
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
        {t.step6.title}
      </h2>
      <p className="text-[#554173] text-sm md:text-base max-w-xl mb-10 font-normal">
        {t.step6.subtitle}
      </p>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-3xl mb-12 text-left">
        {bodyTypes.map((type) => {
          const isSelected = selectedBodyType === type.id;
          return (
            <button
              key={type.id}
              id={`card-bodytype-${type.id}`}
              onClick={() => onSelectBodyType(type.id)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'glass-panel-active transform -translate-y-0.5'
                  : 'glass-panel hover:bg-white/95 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#1A0F33]">
                  {type.title}
                </h3>
                <span
                  className={`text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-purple-100/80 text-[#4D386B]'
                  }`}
                >
                  {type.badge}
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#5C4A7A] font-light mt-1">
                {type.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-4">
        <button
          id="btn-bodytype-back"
          onClick={onBack}
          className="px-8 py-3.5 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
        >
          {t.common.back}
        </button>
        <button
          id="btn-find-outfit"
          onClick={onFindMyOutfit}
          className="gold-action-btn px-10 py-3.5 rounded-full text-sm md:text-base font-extrabold flex items-center gap-3 cursor-pointer shadow-xl tracking-wider"
        >
          <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950/20" />
          <span>{t.step6.findOutfit}</span>
        </button>
      </div>
    </motion.div>
  );
};
