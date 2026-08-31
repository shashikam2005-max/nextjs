import React, { useState } from 'react';
import { getCategoryCardsForGender } from '../data/fashionData';
import { GenderTarget, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { Search, Sparkles } from 'lucide-react';

interface BrowseCategoriesScreenProps {
  language?: LanguageCode;
  onSelectCategory: (categoryId: string, gender: 'all' | GenderTarget) => void;
  onOpenAiStylist: () => void;
}

export const BrowseCategoriesScreen: React.FC<BrowseCategoriesScreenProps> = ({
  language = 'en',
  onSelectCategory,
  onOpenAiStylist,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [activeGender, setActiveGender] = useState<'all' | GenderTarget>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategories = getCategoryCardsForGender(activeGender);

  const filteredCategories = currentCategories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto flex flex-col px-4 py-6 md:py-8"
    >
      {/* Search Bar matching prototype */}
      <div className="w-full max-w-4xl mx-auto mb-6">
        <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/80 border border-purple-200/80 backdrop-blur-xl shadow-md focus-within:border-amber-400">
          <Search className="w-5 h-5 text-[#63507E]" />
          <input
            id="input-search-clothes"
            type="text"
            placeholder={t.categories.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-[#1A0F33] placeholder:text-[#8878A3] text-sm md:text-base outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#63507E] hover:text-[#1A0F33] cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Gender Filter Pills */}
      <div className="flex items-center gap-3 justify-center mb-10">
        {[
          { id: 'all', label: t.catalog.all },
          { id: 'men', label: t.catalog.men },
          { id: 'women', label: t.catalog.women },
          { id: 'kids', label: t.catalog.kids },
        ].map((pill) => {
          const isSelected = activeGender === pill.id;
          return (
            <button
              key={pill.id}
              id={`pill-gender-${pill.id}`}
              onClick={() => setActiveGender(pill.id as any)}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'glass-btn-active transform scale-105 shadow-md'
                  : 'glass-btn-pill text-[#2E184D]'
              }`}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      {/* Section Heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-4xl font-light text-[#1A0F33] tracking-tight">
            {t.categories.exploreTitle}
          </h2>
          <p className="text-xs md:text-sm text-[#5C4A7A] font-light mt-1">
            Viewing {activeGender === 'all' ? 'All Collections' : `${activeGender.toUpperCase()}'s Collection`}
          </p>
        </div>
        <button
          onClick={onOpenAiStylist}
          className="hidden sm:flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 bg-white/80 hover:bg-white px-4 py-2 rounded-full border border-amber-400/50 backdrop-blur-md cursor-pointer transition-all shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Switch to AI Stylist</span>
        </button>
      </div>

      {/* 4 Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredCategories.map((cat) => (
          <button
            key={cat.id}
            id={`card-category-${cat.id}`}
            onClick={() => onSelectCategory(cat.id, activeGender)}
            className="group relative rounded-3xl overflow-hidden glass-panel p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 cursor-pointer shadow-lg"
          >
            {/* Background Image Container */}
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative bg-purple-50">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-sm">
                  {cat.name}
                </h3>
              </div>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
