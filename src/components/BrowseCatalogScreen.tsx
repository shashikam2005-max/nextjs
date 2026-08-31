import React, { useState, useEffect } from 'react';
import { ClothingItem, GenderTarget, LanguageCode } from '../types';
import { CLOTHING_DATABASE } from '../data/fashionData';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, Filter, Sparkles } from 'lucide-react';

interface BrowseCatalogScreenProps {
  categoryId?: string;
  initialGender?: 'all' | GenderTarget;
  language?: LanguageCode;
  onSelectProduct: (product: ClothingItem) => void;
  onBackToCategories: () => void;
}

export const BrowseCatalogScreen: React.FC<BrowseCatalogScreenProps> = ({
  categoryId = 'shirts_blouses',
  initialGender = 'all',
  language = 'en',
  onSelectProduct,
  onBackToCategories,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [activeGender, setActiveGender] = useState<'all' | GenderTarget>(initialGender);
  const [activeCategory, setActiveCategory] = useState<string>(categoryId);
  const [activeFilter, setActiveFilter] = useState<'all' | 'casual' | 'formal' | 'party' | 'wedding'>('all');

  // Synchronize when parent props change
  useEffect(() => {
    if (initialGender) {
      setActiveGender(initialGender);
    }
  }, [initialGender]);

  useEffect(() => {
    if (categoryId) {
      setActiveCategory(categoryId);
    }
  }, [categoryId]);

  // Dynamic titles based on active gender and category
  const getCategoryTitle = (cat: string, gender: 'all' | GenderTarget): string => {
    if (cat === 'all_categories') {
      return gender === 'all'
        ? 'All Curated Pieces'
        : `${gender.toUpperCase()}'s Entire Collection`;
    }

    if (gender === 'men') {
      switch (cat) {
        case 'shirts_blouses':
          return 'Men’s Shirts, Polos & Tops';
        case 'dresses_gowns':
          return 'Men’s Suits, Blazers & Tailoring';
        case 'home_loungewear':
          return 'Men’s Trousers, Chinos & Pants';
        case 'footwear_shoes':
          return 'Men’s Footwear, Loafers & Boots';
        default:
          return 'Men’s Collection';
      }
    }

    if (gender === 'kids') {
      switch (cat) {
        case 'shirts_blouses':
          return 'Kids’ Tops, Tees & Shirts';
        case 'dresses_gowns':
          return 'Kids’ Party Sets & Dresses';
        case 'home_loungewear':
          return 'Kids’ Shorts, Joggers & Dungarees';
        case 'footwear_shoes':
          return 'Kids’ Footwear, Sneakers & Sandals';
        default:
          return 'Kids’ Collection';
      }
    }

    if (gender === 'women') {
      switch (cat) {
        case 'shirts_blouses':
          return 'Women’s Blouses, Shirts & Tops';
        case 'dresses_gowns':
          return 'Women’s Dresses, Gowns & Midis';
        case 'home_loungewear':
          return 'Women’s Trousers, Culottes & Skirts';
        case 'footwear_shoes':
          return 'Women’s Footwear, Heels & Flats';
        default:
          return 'Women’s Collection';
      }
    }

    // Default 'all'
    switch (cat) {
      case 'shirts_blouses':
        return 'Shirts, Blouses & Tops';
      case 'dresses_gowns':
        return 'Dresses, Suits & Formal Wear';
      case 'home_loungewear':
        return 'Trousers, Bottoms & Loungewear';
      case 'footwear_shoes':
        return 'Footwear, Shoes & Boots';
      default:
        return 'Curated Fashion Collection';
    }
  };

  // Filter products by selected gender, category, and occasion filter
  const filteredProducts = CLOTHING_DATABASE.filter(item => {
    // 1. Gender Filter: Strictly enforce Men, Women, or Kids
    if (activeGender !== 'all') {
      if (item.gender !== activeGender && item.gender !== 'all') {
        return false;
      }
    }

    // 2. Category Filter
    if (activeCategory !== 'all_categories') {
      if (activeCategory === 'shirts_blouses' && item.category !== 'tops') {
        return false;
      }
      if (activeCategory === 'dresses_gowns' && item.category !== 'dresses') {
        return false;
      }
      if (activeCategory === 'footwear_shoes' && item.category !== 'shoes') {
        return false;
      }
      if (
        activeCategory === 'home_loungewear' &&
        item.category !== 'bottoms' &&
        item.category !== 'accessories' &&
        item.category !== 'loungewear'
      ) {
        return false;
      }
    }

    // 3. Occasion Filter
    if (activeFilter === 'casual' && !item.occasion.includes('casual_sun')) return false;
    if (activeFilter === 'formal' && !item.occasion.includes('work_corporate')) return false;
    if (activeFilter === 'party' && !item.occasion.includes('party_night')) return false;
    if (activeFilter === 'wedding' && !item.occasion.includes('wedding_gala')) return false;

    return true;
  });

  const title = getCategoryTitle(activeCategory, activeGender);

  // Quick category options
  const categoryTabs = [
    { id: 'all_categories', label: t.catalog.all },
    { id: 'shirts_blouses', label: activeGender === 'men' ? 'Shirts & Tops' : activeGender === 'kids' ? 'Tees & Tops' : 'Blouses & Tops' },
    { id: 'dresses_gowns', label: activeGender === 'men' ? 'Suits & Blazers' : activeGender === 'kids' ? 'Party Sets' : 'Dresses & Gowns' },
    { id: 'home_loungewear', label: activeGender === 'men' ? 'Trousers & Chinos' : activeGender === 'kids' ? 'Shorts & Pants' : 'Pants & Skirts' },
    { id: 'footwear_shoes', label: activeGender === 'men' ? 'Shoes & Loafers' : activeGender === 'kids' ? 'Shoes & Sneakers' : 'Heels & Flats' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto flex flex-col px-4 py-6 md:py-8"
    >
      {/* Breadcrumb & Gender Selector Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#5C4A7A] uppercase tracking-widest">
          <button onClick={onBackToCategories} className="hover:text-amber-600 transition-colors cursor-pointer">
            {t.catalog.home}
          </button>
          <span>&gt;</span>
          <button onClick={onBackToCategories} className="hover:text-amber-600 transition-colors cursor-pointer">
            {t.catalog.categories}
          </button>
          <span>&gt;</span>
          <span className="text-amber-700 font-bold">
            {activeGender === 'all' ? t.catalog.all.toUpperCase() : activeGender.toUpperCase()}
          </span>
        </div>

        {/* Gender Toggle Pills */}
        <div className="flex items-center gap-2 bg-white/80 p-1 rounded-full border border-purple-200/80 backdrop-blur-md shadow-xs">
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
                id={`catalog-gender-${pill.id}`}
                onClick={() => setActiveGender(pill.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                    : 'text-[#3D285C] hover:text-[#1A0F33] hover:bg-purple-50'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Quick Filter Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
        {categoryTabs.map((tab) => {
          const isSelected = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              id={`tab-category-${tab.id}`}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#1E1139] text-white border-2 border-amber-400 shadow-md'
                  : 'bg-white/80 text-[#3D285C] hover:bg-white border border-purple-200/80'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Header + Filter Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-light text-[#1A0F33] tracking-tight">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-[#5C4A7A] font-light mt-1">
            Showing {filteredProducts.length} curated pieces for {activeGender === 'all' ? 'everyone' : activeGender}
          </p>
        </div>

        {/* Occasion Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { id: 'all', label: t.catalog.allStyles },
            { id: 'casual', label: t.catalog.casual },
            { id: 'formal', label: t.catalog.formal },
            { id: 'party', label: t.catalog.party },
            { id: 'wedding', label: t.catalog.wedding },
          ].map((pill) => {
            const isSelected = activeFilter === pill.id;
            return (
              <button
                key={pill.id}
                id={`filter-${pill.id}`}
                onClick={() => setActiveFilter(pill.id as any)}
                className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
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
      </div>

      {/* Empty State when no items match specific filters */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 my-6 glass-panel rounded-3xl text-center">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-amber-600">
            <Filter className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-light text-[#1A0F33] mb-2">No matching items in this filter</h3>
          <p className="text-sm text-[#5C4A7A] max-w-md mb-6">
            We couldn't find items for this specific combination of {activeGender} and style. Try resetting filters to explore more.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveFilter('all');
                setActiveCategory('all_categories');
              }}
              className="px-6 py-2.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs tracking-wider cursor-pointer shadow-md"
            >
              Show All {activeGender.toUpperCase()} Pieces
            </button>
            <button
              onClick={() => setActiveGender('all')}
              className="px-6 py-2.5 rounded-full bg-white/80 hover:bg-white text-[#2E184D] border border-purple-200/80 font-semibold text-xs tracking-wider cursor-pointer shadow-xs"
            >
              Show All Genders
            </button>
          </div>
        </div>
      ) : (
        /* Product Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group rounded-3xl glass-panel p-6 flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:border-amber-400 shadow-xl relative"
            >
              {/* Discount Badge */}
              {product.discountPercent && (
                <div className="absolute top-6 left-6 z-10 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs tracking-wider shadow-md">
                  {product.discountPercent}% OFF
                </div>
              )}

              {/* Product Image Frame */}
              <div className="w-full sm:w-44 h-52 rounded-2xl overflow-hidden bg-purple-50 flex-shrink-0 border border-purple-200/70">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Details & Action */}
              <div className="flex flex-col justify-between flex-1 h-full py-1 text-left w-full">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold tracking-widest text-[#5C4A7A] uppercase">
                      {product.brand}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 uppercase font-bold">
                      {product.gender}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal font-editorial text-[#1A0F33] mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-bold text-amber-600">
                      Rs.{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#8A79A5] line-through">
                        Rs.{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  id={`btn-view-${product.id}`}
                  onClick={() => onSelectProduct(product)}
                  className="gold-action-btn w-full sm:w-max px-8 py-3 rounded-full text-xs font-extrabold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{t.catalog.viewDetails}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex justify-start">
        <button
          onClick={onBackToCategories}
          className="px-6 py-2.5 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.catalog.allCategories}</span>
        </button>
      </div>
    </motion.div>
  );
};

