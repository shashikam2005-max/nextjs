import React from 'react';
import { CartItem, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { Trash2, ArrowRight, ArrowLeft, ShoppingBag } from 'lucide-react';

interface CartReviewScreenProps {
  cart: CartItem[];
  language?: LanguageCode;
  onRemoveItem: (index: number) => void;
  onKeepShopping: () => void;
  onConfirmOrder: () => void;
}

export const CartReviewScreen: React.FC<CartReviewScreenProps> = ({
  cart,
  language = 'en',
  onRemoveItem,
  onKeepShopping,
  onConfirmOrder,
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto flex flex-col px-4 py-6 md:py-10 text-center md:text-left"
    >
      {/* Title & Subtitle */}
      <h2 className="text-3xl md:text-5xl font-light text-[#1A0F33] tracking-tight mb-2">
        {t.cart.title}
      </h2>
      <p className="text-[#5C4A7A] text-sm md:text-base font-normal mb-8">
        {t.cart.subtitle}
      </p>

      {/* Cart Container Card matching prototype */}
      <div className="w-full rounded-3xl glass-panel p-6 md:p-8 backdrop-blur-2xl shadow-xl mb-8 border border-purple-200/80">
        {cart.length === 0 ? (
          <div className="py-16 text-center flex flex-col items-center">
            <ShoppingBag className="w-12 h-12 text-[#8F7DAB] mb-3" />
            <p className="text-lg font-medium text-[#4D396B]">{t.cart.empty}</p>
            <button
              onClick={onKeepShopping}
              className="mt-4 px-6 py-2.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs shadow-md cursor-pointer"
            >
              {t.cart.keepShopping}
            </button>
          </div>
        ) : (
          <div className="divide-y divide-purple-100">
            {cart.map((item, idx) => (
              <div
                key={`${item.product.id}-${idx}`}
                className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
              >
                {/* Thumbnail & Title/Details */}
                <div className="flex items-center gap-4 text-left">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-purple-50 flex-shrink-0 border border-purple-200/70">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-xl font-medium text-[#1A0F33]">
                      {item.product.name}
                    </h3>
                    <span className="text-xs text-[#63507E] font-normal mt-0.5">
                      {item.product.brand} • {item.product.gender.toUpperCase()} • Size {item.selectedSize}
                    </span>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="flex items-center gap-4">
                  <span className="text-lg md:text-2xl font-bold text-amber-600">
                    Rs.{(item.product.price * item.quantity).toLocaleString()}
                  </span>
                  <button
                    onClick={() => onRemoveItem(idx)}
                    title="Remove item"
                    className="text-[#8F7DAB] hover:text-rose-600 p-1.5 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Summary Line */}
        {cart.length > 0 && (
          <div className="mt-8 pt-6 border-t border-purple-200/80 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-base font-semibold text-[#4D396B]">
              {t.cart.estimatedAmount}
            </span>
            <span className="text-2xl md:text-4xl font-extrabold text-amber-600 tracking-tight">
              {t.cart.total}: Rs.{totalPrice.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-center gap-5">
        <button
          id="btn-cart-keep-shopping"
          onClick={onKeepShopping}
          className="px-8 py-3.5 rounded-full border border-purple-300 hover:bg-white/80 text-[#2E184D] font-medium text-sm transition-all cursor-pointer shadow-xs"
        >
          {t.cart.keepShopping}
        </button>

        {cart.length > 0 && (
          <button
            id="btn-confirm-notify-staff"
            onClick={onConfirmOrder}
            className="gold-action-btn px-10 py-3.5 rounded-full text-sm md:text-base font-extrabold flex items-center gap-2 cursor-pointer shadow-xl"
          >
            <span>{t.cart.confirmNotify}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
