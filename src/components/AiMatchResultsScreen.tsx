import React, { useState, useEffect } from 'react';
import { ClothingItem, ClothingSize, StylistPreferences, LanguageCode } from '../types';
import { CLOTHING_DATABASE } from '../data/fashionData';
import { TRANSLATIONS } from '../data/translations';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Check, Shirt, CheckCircle2 } from 'lucide-react';

interface AiMatchResultsScreenProps {
  preferences: StylistPreferences;
  language?: LanguageCode;
  onAddToCart: (item: ClothingItem, size: ClothingSize) => void;
  onBack: () => void;
  onProceedToCart: () => void;
}

export const AiMatchResultsScreen: React.FC<AiMatchResultsScreenProps> = ({
  preferences,
  language = 'en',
  onAddToCart,
  onBack,
  onProceedToCart,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  // Category tabs: tops, bottoms, shoes, accessories
  const [activeTab, setActiveTab] = useState<'tops' | 'bottoms' | 'shoes' | 'accessories'>('tops');

  // Filter items by category AND user gender preference
  const categoryItems = CLOTHING_DATABASE.filter(
    item => item.category === activeTab && (item.gender === preferences.gender || item.gender === 'all')
  );

  // Selected item within this category for the live preview
  const [selectedItemId, setSelectedItemId] = useState<string>(
    categoryItems[0]?.id || 'top-women-flax-linen'
  );

  // Synchronize selectedItemId whenever categoryItems or activeTab changes
  useEffect(() => {
    if (categoryItems.length > 0) {
      const exists = categoryItems.some(i => i.id === selectedItemId);
      if (!exists) {
        setSelectedItemId(categoryItems[0].id);
      }
    }
  }, [activeTab, preferences.gender]);

  // Track added items
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  // Active selected item object
  const activeItem =
    categoryItems.find(item => item.id === selectedItemId) ||
    categoryItems[0] ||
    CLOTHING_DATABASE[0];

  // Dynamically split items for left and right columns
  const halfCount = Math.ceil(categoryItems.length / 2);
  const leftItems = categoryItems.slice(0, halfCount);
  const rightItems = categoryItems.slice(halfCount, 6);

  const handleSelectThumbnail = (item: ClothingItem) => {
    setSelectedItemId(item.id);
  };

  const handleAddCurrentToCart = () => {
    if (activeItem) {
      onAddToCart(activeItem, preferences.generalSize);
      setAddedItems(prev => ({ ...prev, [activeItem.id]: true }));
    }
  };

  const handleAddAndProceed = () => {
    if (activeItem) {
      onAddToCart(activeItem, preferences.generalSize);
    }
    onProceedToCart();
  };

  const genderLabel =
    preferences.gender === 'men'
      ? 'MEN'
      : preferences.gender === 'women'
      ? 'WOMEN'
      : 'KIDS';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto flex flex-col px-4 py-4 md:py-8"
    >
      {/* Top Banner & Category Sub-navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        {/* Left: AI Match Complete Badge & Category Tabs */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-md w-max">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>AI MATCH COMPLETE</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white font-bold text-xs tracking-widest uppercase">
              {genderLabel}
            </div>
          </div>

          {/* 4 Category Filter Tabs */}
          <div className="flex items-center gap-2">
            {[
              { id: 'tops', label: t.matchResults.tops, icon: '👕' },
              { id: 'bottoms', label: t.matchResults.bottoms, icon: '👖' },
              { id: 'shoes', label: t.matchResults.shoes, icon: '👟' },
              { id: 'accessories', label: t.matchResults.accessories, icon: '👜' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-match-${tab.id}`}
                  onClick={() => {
                    const nextCat = tab.id as any;
                    setActiveTab(nextCat);
                    const matchingItems = CLOTHING_DATABASE.filter(
                      i => i.category === nextCat && (i.gender === preferences.gender || i.gender === 'all')
                    );
                    if (matchingItems.length > 0) {
                      setSelectedItemId(matchingItems[0].id);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold tracking-wider transition-all cursor-pointer shadow-xs ${
                    isActive
                      ? 'bg-[#1E1139] text-white border-2 border-amber-400 shadow-md'
                      : 'bg-white/80 text-[#3D285C] hover:bg-white border border-purple-200/70'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Info: Tailored Persona */}
        <div className="hidden lg:flex flex-col items-end text-xs text-[#523F6E] glass-panel px-4 py-2 rounded-xl border border-purple-200/80 shadow-xs">
          <span className="text-amber-700 font-bold">Matched for {preferences.skinToneLabel}</span>
          <span className="font-medium">Size: {preferences.generalSize} • {preferences.bodyType.toUpperCase()} Fit</span>
        </div>
      </div>

      {/* Main 3-Column Interactive Stage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center my-2 mb-8">
        {/* Left Column: 3 Thumbnail Cards */}
        <div className="md:col-span-3 flex flex-row md:flex-col justify-center gap-3 order-2 md:order-1">
          {leftItems.map((item) => {
            const isSelected = item.id === activeItem.id;
            return (
              <button
                key={item.id}
                id={`thumb-left-${item.id}`}
                onClick={() => handleSelectThumbnail(item)}
                className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer flex-1 md:flex-initial ${
                  isSelected
                    ? 'glass-panel-active transform scale-105 shadow-md'
                    : 'glass-panel hover:bg-white/90'
                }`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden mb-2 bg-purple-50 border border-purple-200/70">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs md:text-sm font-bold text-amber-700">
                  Rs.{item.price.toLocaleString()}
                </span>
                <span className="text-[11px] text-[#4A3866] truncate max-w-[110px] hidden md:block">
                  {item.colorName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Center Stage: Focal Large Item Card */}
        <div className="md:col-span-6 flex flex-col items-center order-1 md:order-2">
          <div className="w-full max-w-md p-4 md:p-6 rounded-3xl bg-white/90 border border-purple-200/80 backdrop-blur-2xl shadow-xl flex flex-col items-center relative">
            {/* Match score ribbon */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-extrabold flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{activeItem.matchScore || 96}% Match</span>
            </div>

            {/* Central Garment Display Window */}
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-purple-50/80 border border-purple-200/80 relative shadow-inner mb-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>

            {/* Live Preview Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E1139] border border-[#1E1139] text-xs font-bold text-amber-300 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>LIVE PREVIEW</span>
            </div>

            {/* Garment Details */}
            <div className="text-center w-full px-2">
              <h3 className="text-lg md:text-xl font-bold text-[#1A0F33] mb-1">
                {activeItem.name}
              </h3>
              <p className="text-xs text-[#584575] line-clamp-2 mb-2 font-normal">
                {activeItem.description}
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl font-extrabold text-amber-600">
                  Rs.{activeItem.price.toLocaleString()}
                </span>
                {activeItem.originalPrice && (
                  <span className="text-xs text-[#8A79A5] line-through">
                    Rs.{activeItem.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Thumbnail Cards */}
        <div className="md:col-span-3 flex flex-row md:flex-col justify-center gap-3 order-3">
          {rightItems.map((item) => {
            const isSelected = item.id === activeItem.id;
            return (
              <button
                key={item.id}
                id={`thumb-right-${item.id}`}
                onClick={() => handleSelectThumbnail(item)}
                className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer flex-1 md:flex-initial ${
                  isSelected
                    ? 'glass-panel-active transform scale-105 shadow-md'
                    : 'glass-panel hover:bg-white/90'
                }`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden mb-2 bg-purple-50 border border-purple-200/70">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs md:text-sm font-bold text-amber-700">
                  Rs.{item.price.toLocaleString()}
                </span>
                <span className="text-[11px] text-[#4A3866] truncate max-w-[110px] hidden md:block">
                  {item.colorName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Controls */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          id="btn-match-back"
          onClick={onBack}
          className="px-8 py-3.5 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
        >
          {t.common.back}
        </button>

        <button
          id="btn-add-item-now"
          onClick={handleAddCurrentToCart}
          className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white border border-purple-200/80 text-[#2E184D] font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-xs"
        >
          {addedItems[activeItem.id] ? (
            <>
              <Check className="w-4 h-4 text-amber-600" />
              <span>{t.matchResults.addedToBag}</span>
            </>
          ) : (
            <>
              <span>{t.matchResults.addToFittingBag}</span>
            </>
          )}
        </button>

        <button
          id="btn-match-add-to-cart"
          onClick={handleAddAndProceed}
          className="gold-action-btn px-8 py-3.5 rounded-full text-sm md:text-base font-extrabold flex items-center gap-2 cursor-pointer shadow-xl"
        >
          <span>{t.matchResults.reviewCheckout}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
