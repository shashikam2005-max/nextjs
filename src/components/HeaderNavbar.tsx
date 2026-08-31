import React from 'react';
import { AppView, LanguageCode } from '../types';
import { ShoppingBag, Sparkles, Compass, Grid, Home } from 'lucide-react';

interface HeaderNavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  cartCount: number;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  currentView,
  onNavigate,
  cartCount,
  language,
  onLanguageChange,
}) => {
  // Determine active tab
  const isHomeActive = currentView === 'welcome';
  const isAiActive =
    currentView === 'ai_gender' ||
    currentView === 'ai_category' ||
    currentView === 'ai_occasion' ||
    currentView === 'ai_skintone' ||
    currentView === 'ai_fit' ||
    currentView === 'ai_bodytype' ||
    currentView === 'ai_match_results';
  const isCategoriesActive = currentView === 'browse_categories';
  const isCatalogActive = currentView === 'browse_catalog' || currentView === 'browse_product_detail';
  const isCartActive = currentView === 'cart_review' || currentView === 'order_confirmed';

  // Calculate step number and percentage for AI Stylist & Cart paths
  let stepTitle = 'AI STYLIST ATELIER PATH';
  let stepText = 'STEP 1 OF 6 (16%)';
  let progressPercent = 16.6;
  let showProgress = currentView !== 'welcome';

  if (currentView === 'ai_gender') {
    stepTitle = 'AI STYLIST • GENDER SELECTION';
    stepText = 'STEP 1 OF 6 (16%)';
    progressPercent = 16.6;
  } else if (currentView === 'ai_category') {
    stepTitle = 'AI STYLIST • WARDROBE CATEGORIES';
    stepText = 'STEP 2 OF 6 (33%)';
    progressPercent = 33.3;
  } else if (currentView === 'ai_occasion') {
    stepTitle = 'AI STYLIST • OCCASION CURATION';
    stepText = 'STEP 3 OF 6 (50%)';
    progressPercent = 50;
  } else if (currentView === 'ai_skintone') {
    stepTitle = 'AI STYLIST • PALETTE HARMONY';
    stepText = 'STEP 4 OF 6 (66%)';
    progressPercent = 66.6;
  } else if (currentView === 'ai_fit') {
    stepTitle = 'AI STYLIST • MEASUREMENTS & FIT';
    stepText = 'STEP 5 OF 6 (83%)';
    progressPercent = 83.3;
  } else if (currentView === 'ai_bodytype') {
    stepTitle = 'AI STYLIST • SILHOUETTE & BUILD';
    stepText = 'STEP 6 OF 6 (100%)';
    progressPercent = 100;
  } else if (currentView === 'ai_match_results') {
    stepTitle = 'YOUR CURATED AI MATCH RESULTS';
    stepText = 'FITTING SALON';
    progressPercent = 100;
  } else if (currentView === 'browse_categories') {
    stepTitle = 'EXPLORE ATELIER CATEGORIES';
    stepText = 'COLLECTIONS';
    progressPercent = 45;
  } else if (currentView === 'browse_catalog' || currentView === 'browse_product_detail') {
    stepTitle = 'STYLECUE BOUTIQUE CATALOG';
    stepText = 'CURATED PIECES';
    progressPercent = 70;
  } else if (currentView === 'cart_review') {
    stepTitle = 'ORDER REVIEW & CABIN DISPATCH';
    stepText = 'FINAL STEP (100%)';
    progressPercent = 100;
  } else if (currentView === 'order_confirmed') {
    stepTitle = 'FITTING CABIN DISPATCH';
    stepText = 'SESSION CONFIRMED';
    progressPercent = 100;
  }

  return (
    <header className="w-full pt-4 px-4 sm:px-6 md:px-12 z-30 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 md:gap-4 flex-wrap lg:flex-nowrap">
        {/* Logo & Brand */}
        <button
          id="btn-nav-home"
          onClick={() => onNavigate('welcome')}
          className="flex items-center gap-2.5 group text-left cursor-pointer transition-transform hover:scale-[1.02]"
        >
          {/* Stylized Coat Hanger Icon */}
          <div className="w-9 h-9 rounded-xl bg-white/80 border border-purple-200 shadow-sm flex items-center justify-center backdrop-blur-md group-hover:border-amber-400 transition-colors">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-amber-500 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
            >
              <path d="M12 4a2 2 0 0 0-2 2c0 1.5 2 2 2 4" />
              <path d="m2 18 10-8 10 8H2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] font-heading text-[#1B0F33]">
              STYLECUE
            </span>
          </div>
        </button>

        {/* Primary Navigation Tabs */}
        <nav className="flex items-center p-1 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/60 shadow-[0_2px_12px_rgba(110,75,165,0.08)] order-3 lg:order-2 w-full lg:w-auto justify-center overflow-x-auto scrollbar-none">
          {/* Home Tab */}
          <button
            id="tab-nav-welcome"
            onClick={() => onNavigate('welcome')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              isHomeActive
                ? 'bg-[#1E1139] text-white shadow-sm font-bold'
                : 'text-[#4A3966] hover:text-[#1E1139] hover:bg-purple-50/70'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Atelier</span>
          </button>

          {/* AI Stylist Tab */}
          <button
            id="tab-nav-stylist"
            onClick={() => onNavigate('ai_gender')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              isAiActive
                ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                : 'text-[#4A3966] hover:text-[#1E1139] hover:bg-purple-50/70'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>AI Stylist</span>
          </button>

          {/* Collections Tab */}
          <button
            id="tab-nav-categories"
            onClick={() => onNavigate('browse_categories')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              isCategoriesActive
                ? 'bg-[#1E1139] text-white shadow-sm font-bold'
                : 'text-[#4A3966] hover:text-[#1E1139] hover:bg-purple-50/70'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Collections</span>
          </button>

          {/* Catalog Tab */}
          <button
            id="tab-nav-catalog"
            onClick={() => onNavigate('browse_catalog')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              isCatalogActive
                ? 'bg-[#1E1139] text-white shadow-sm font-bold'
                : 'text-[#4A3966] hover:text-[#1E1139] hover:bg-purple-50/70'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Catalog</span>
          </button>
        </nav>

        {/* Right utility toolbar: Language, Cart */}
        <div className="flex items-center gap-2.5 order-2 lg:order-3">
          {/* Language selector */}
          <div className="flex items-center px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/60 shadow-xs text-xs text-[#2E184D]">
            <span className="font-semibold tracking-wide">
              {language === 'en' ? 'EN' : language === 'si' ? 'සිං' : 'த'}
            </span>
            <span className="mx-1.5 opacity-40 text-purple-300">/</span>
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'si' : language === 'si' ? 'ta' : 'en')}
              className="text-[#6C568C] hover:text-amber-600 text-[11px] underline underline-offset-2 transition-colors cursor-pointer"
            >
              {language === 'en' ? 'සිං / த' : language === 'si' ? 'EN / த' : 'EN / සිං'}
            </button>
          </div>

          {/* Cart / Fitting Room button */}
          <button
            id="btn-nav-cart"
            onClick={() => onNavigate('cart_review')}
            className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full backdrop-blur-md text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs ${
              isCartActive
                ? 'bg-[#1E1139] text-white border border-[#1E1139]'
                : 'bg-white/85 hover:bg-white text-[#2E184D] border border-purple-200/70'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">Fitting Bag</span>
            {cartCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[11px]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Light Twilight Step Progress Bar */}
      {showProgress && (
        <div className="w-full flex flex-col gap-1 mt-1">
          <div className="flex items-center justify-between text-xs font-bold tracking-wider text-[#544070] uppercase">
            <span className="text-[#3A2859]">{stepTitle}</span>
            <span className="text-amber-600 font-extrabold">{stepText}</span>
          </div>
          <div className="w-full h-1.5 bg-purple-200/60 rounded-full overflow-hidden backdrop-blur-xs">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(245,158,11,0.5)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

