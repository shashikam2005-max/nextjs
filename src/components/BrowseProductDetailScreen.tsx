import React, { useState } from 'react';
import { ClothingItem, ClothingSize, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { Check, ArrowLeft, Plus } from 'lucide-react';

interface BrowseProductDetailScreenProps {
  product: ClothingItem;
  language?: LanguageCode;
  onAddToCart: (item: ClothingItem, size: ClothingSize) => void;
  onBackToCatalog: () => void;
  onProceedToCart: () => void;
}

export const BrowseProductDetailScreen: React.FC<BrowseProductDetailScreenProps> = ({
  product,
  language = 'en',
  onAddToCart,
  onBackToCatalog,
  onProceedToCart,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [selectedSize, setSelectedSize] = useState<ClothingSize>('S');
  const [addedToast, setAddedToast] = useState(false);

  const availableSizes = product.availableSizes || ['XS', 'S', 'M', 'L'];

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedToast(true);
    setTimeout(() => {
      onProceedToCart();
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto flex flex-col px-4 py-6 md:py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Large Editorial Garment Frame */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden glass-panel p-2 shadow-xl">
          {/* Discount Pill */}
          {product.discountPercent && (
            <div className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs tracking-wider shadow-lg">
              {product.discountPercent}% OFF
            </div>
          )}

          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-purple-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right: Garment Details and Fitting Selection */}
        <div className="lg:col-span-6 flex flex-col text-left py-2">
          <div className="text-xs font-bold tracking-widest text-[#5C4A7A] uppercase mb-2">
            {(product.gender || 'WOMEN').toUpperCase()} • CONTEMPORARY
          </div>

          <h1 className="text-3xl md:text-5xl font-light font-editorial text-[#1A0F33] mb-4 leading-tight">
            {product.name}
          </h1>

          <p className="text-sm md:text-base text-[#523F6E] font-normal leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Pricing */}
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-3xl md:text-4xl font-extrabold text-amber-600">
              Rs.{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm md:text-base text-[#8A79A5] line-through">
                Rs.{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Sizing Selector */}
          <div className="flex flex-col gap-3 mb-10">
            <span className="text-xs font-bold tracking-widest text-[#4A3966] uppercase">
              {t.productDetail.selectSize}
            </span>
            <div className="flex items-center gap-3">
              {availableSizes.map((sz) => {
                const isSelected = selectedSize === sz;
                return (
                  <button
                    key={sz}
                    id={`btn-detail-size-${sz}`}
                    onClick={() => setSelectedSize(sz)}
                    className={`w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)] transform scale-110'
                        : 'bg-white/80 hover:bg-white border border-purple-200/80 text-[#2E184D] shadow-xs'
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              id="btn-detail-back"
              onClick={onBackToCatalog}
              className="px-8 py-3.5 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
            >
              {t.common.back}
            </button>
            <button
              id="btn-detail-add-cart"
              onClick={handleAdd}
              className="gold-action-btn px-10 py-3.5 rounded-full text-sm md:text-base font-extrabold flex items-center gap-2 cursor-pointer shadow-xl"
            >
              {addedToast ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>{t.productDetail.addedCabin}</span>
                </>
              ) : (
                <>
                  <span>{t.productDetail.addToCart}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
