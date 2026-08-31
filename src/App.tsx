import React, { useState } from 'react';
import {
  AppView,
  CartItem,
  ClothingItem,
  ClothingSize,
  GenderTarget,
  FashionCategory,
  LanguageCode,
  OccasionType,
  BodyType,
  StylistPreferences,
} from './types';
import { INITIAL_PREFERENCES, CLOTHING_DATABASE, getSkinToneProfile } from './data/fashionData';
import { HeaderNavbar } from './components/HeaderNavbar';
import { BackgroundContainer } from './components/BackgroundContainer';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AiStep1Gender } from './components/ai-steps/AiStep1Gender';
import { AiStep2Category } from './components/ai-steps/AiStep2Category';
import { AiStep3Occasion } from './components/ai-steps/AiStep3Occasion';
import { AiStep4SkinTone } from './components/ai-steps/AiStep4SkinTone';
import { AiStep5Fit } from './components/ai-steps/AiStep5Fit';
import { AiStep6BodyType } from './components/ai-steps/AiStep6BodyType';
import { AiMatchResultsScreen } from './components/AiMatchResultsScreen';
import { BrowseCategoriesScreen } from './components/BrowseCategoriesScreen';
import { BrowseCatalogScreen } from './components/BrowseCatalogScreen';
import { BrowseProductDetailScreen } from './components/BrowseProductDetailScreen';
import { CartReviewScreen } from './components/CartReviewScreen';
import { OrderConfirmedScreen } from './components/OrderConfirmedScreen';

export default function App() {
  // Navigation View State
  const [currentView, setCurrentView] = useState<AppView>('welcome');

  // User Styling Preferences (AI Quiz)
  const [preferences, setPreferences] = useState<StylistPreferences>(INITIAL_PREFERENCES);

  // Cart / Fitting Cabin Bag Items
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: CLOTHING_DATABASE[0], // Relaxed Flax Linen Shirt
      selectedSize: 'M',
      quantity: 1,
    },
  ]);

  // Selected product for detailed catalog view
  const [selectedProduct, setSelectedProduct] = useState<ClothingItem>(
    CLOTHING_DATABASE.find(item => item.id === 'dress-v-neck-linen') || CLOTHING_DATABASE[0]
  );

  // Selected category & gender for browsing catalog
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('shirts_blouses');
  const [selectedCatalogGender, setSelectedCatalogGender] = useState<'all' | GenderTarget>('women');

  // Language selection
  const [language, setLanguage] = useState<LanguageCode>('en');

  // --- Cart Actions ---
  const handleAddToCart = (product: ClothingItem, selectedSize: ClothingSize) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedSize, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // --- AI Quiz Preference Handlers ---
  const handleSelectGender = (gender: GenderTarget) => {
    setPreferences((p) => ({ ...p, gender }));
  };

  const handleToggleCategory = (cat: FashionCategory) => {
    setPreferences((p) => {
      const exists = p.categories.includes(cat);
      const updated = exists
        ? p.categories.filter((c) => c !== cat)
        : [...p.categories, cat];
      return { ...p, categories: updated };
    });
  };

  const handleSelectOccasion = (occasion: OccasionType) => {
    setPreferences((p) => ({ ...p, occasion }));
  };

  const handleSkinToneChange = (val: number) => {
    const prof = getSkinToneProfile(val);
    setPreferences((p) => ({
      ...p,
      skinToneValue: val,
      skinToneLabel: prof.label,
    }));
  };

  const handleHeightChange = (heightCm: number) => {
    setPreferences((p) => ({ ...p, heightCm }));
  };

  const handleWaistChange = (waistInch: number) => {
    setPreferences((p) => ({ ...p, waistInch }));
  };

  const handleGeneralSizeChange = (generalSize: ClothingSize) => {
    setPreferences((p) => ({ ...p, generalSize }));
  };

  const handleSelectBodyType = (bodyType: BodyType) => {
    setPreferences((p) => ({ ...p, bodyType }));
  };

  return (
    <BackgroundContainer>
      {/* Top Universal Navbar & Step Indicator */}
      <HeaderNavbar
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)}
        language={language}
        onLanguageChange={(lang) => setLanguage(lang)}
      />

      {/* Dynamic Screen View Router */}
      <main className="flex-1 flex flex-col justify-center">
        {currentView === 'welcome' && (
          <WelcomeScreen
            onStartAiStylist={() => setCurrentView('ai_gender')}
            onStartBrowse={() => setCurrentView('browse_categories')}
            language={language}
            onToggleLanguage={() =>
              setLanguage(language === 'en' ? 'si' : language === 'si' ? 'ta' : 'en')
            }
          />
        )}

        {/* AI Stylist Step 1: Gender */}
        {currentView === 'ai_gender' && (
          <AiStep1Gender
            selectedGender={preferences.gender}
            language={language}
            onSelectGender={handleSelectGender}
            onBack={() => setCurrentView('welcome')}
            onContinue={() => setCurrentView('ai_category')}
          />
        )}

        {/* AI Stylist Step 2: Looking For / Category Pills */}
        {currentView === 'ai_category' && (
          <AiStep2Category
            selectedCategories={preferences.categories}
            language={language}
            onToggleCategory={handleToggleCategory}
            onBack={() => setCurrentView('ai_gender')}
            onContinue={() => setCurrentView('ai_occasion')}
          />
        )}

        {/* AI Stylist Step 3: Occasion */}
        {currentView === 'ai_occasion' && (
          <AiStep3Occasion
            selectedOccasion={preferences.occasion}
            language={language}
            onSelectOccasion={handleSelectOccasion}
            onBack={() => setCurrentView('ai_category')}
            onContinue={() => setCurrentView('ai_skintone')}
          />
        )}

        {/* AI Stylist Step 4: Skin Tone & Undertone Match */}
        {currentView === 'ai_skintone' && (
          <AiStep4SkinTone
            skinToneValue={preferences.skinToneValue}
            language={language}
            onSkinToneChange={handleSkinToneChange}
            onBack={() => setCurrentView('ai_occasion')}
            onContinue={() => setCurrentView('ai_fit')}
          />
        )}

        {/* AI Stylist Step 5: Fit Measurements & Size */}
        {currentView === 'ai_fit' && (
          <AiStep5Fit
            heightCm={preferences.heightCm}
            waistInch={preferences.waistInch}
            generalSize={preferences.generalSize}
            language={language}
            onHeightChange={handleHeightChange}
            onWaistChange={handleWaistChange}
            onGeneralSizeChange={handleGeneralSizeChange}
            onBack={() => setCurrentView('ai_skintone')}
            onContinue={() => setCurrentView('ai_bodytype')}
          />
        )}

        {/* AI Stylist Step 6: Body Type */}
        {currentView === 'ai_bodytype' && (
          <AiStep6BodyType
            selectedBodyType={preferences.bodyType}
            language={language}
            onSelectBodyType={handleSelectBodyType}
            onBack={() => setCurrentView('ai_fit')}
            onFindMyOutfit={() => setCurrentView('ai_match_results')}
          />
        )}

        {/* Curated AI Match Results Stage */}
        {currentView === 'ai_match_results' && (
          <AiMatchResultsScreen
            preferences={preferences}
            language={language}
            onAddToCart={handleAddToCart}
            onBack={() => setCurrentView('ai_bodytype')}
            onProceedToCart={() => setCurrentView('cart_review')}
          />
        )}

        {/* Browse Categories */}
        {currentView === 'browse_categories' && (
          <BrowseCategoriesScreen
            language={language}
            onSelectCategory={(catId, gender) => {
              setSelectedCategoryId(catId);
              setSelectedCatalogGender(gender);
              setCurrentView('browse_catalog');
            }}
            onOpenAiStylist={() => setCurrentView('ai_gender')}
          />
        )}

        {/* Browse Catalog Subcategory */}
        {currentView === 'browse_catalog' && (
          <BrowseCatalogScreen
            categoryId={selectedCategoryId}
            initialGender={selectedCatalogGender}
            language={language}
            onSelectProduct={(product) => {
              setSelectedProduct(product);
              setCurrentView('browse_product_detail');
            }}
            onBackToCategories={() => setCurrentView('browse_categories')}
          />
        )}

        {/* Browse Product Detail View */}
        {currentView === 'browse_product_detail' && (
          <BrowseProductDetailScreen
            product={selectedProduct}
            language={language}
            onAddToCart={handleAddToCart}
            onBackToCatalog={() => setCurrentView('browse_catalog')}
            onProceedToCart={() => setCurrentView('cart_review')}
          />
        )}

        {/* Fitting Bag / Cart Order Review */}
        {currentView === 'cart_review' && (
          <CartReviewScreen
            cart={cart}
            language={language}
            onRemoveItem={handleRemoveFromCart}
            onKeepShopping={() => setCurrentView('browse_categories')}
            onConfirmOrder={() => setCurrentView('order_confirmed')}
          />
        )}

        {/* Order Confirmed & Fitting Cabin Dispatch */}
        {currentView === 'order_confirmed' && (
          <OrderConfirmedScreen
            sessionCode="#SC-247"
            language={language}
            onStartNewSession={() => {
              setPreferences(INITIAL_PREFERENCES);
              setCurrentView('welcome');
            }}
          />
        )}
      </main>
    </BackgroundContainer>
  );
}
