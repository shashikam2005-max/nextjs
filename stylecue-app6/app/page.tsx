"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Briefcase, Sparkles, Wine, Palette, ArrowRight } from "lucide-react";

// --- Types & Options ---
interface StylistPreferences {
  categories: string[];
  occasion: string;
  skinToneValue: number;
  heightCm: string;
  waistInch: string;
  generalSize: string;
}

const CATEGORIES = [
  "Casual Wear", "Formal Wear", "Accessories", "Ethnic Wear",
  "Swimwear", "Sports Wear", "Outerwear", "Footwear"
];

const OCCASIONS = [
  { id: "casual", label: "Casual / Sun", desc: "Weekend, Travel & Lounging", icon: Sun },
  { id: "work", label: "Work / Corporate", desc: "Meetings, Office & Business Formal", icon: Briefcase },
  { id: "wedding", label: "Wedding / Gala", desc: "Celebrations & Formal Ceremonies", icon: Sparkles },
  { id: "party", label: "Party / Night Out", desc: "Club, Cocktails & Dynamic Evenings", icon: Wine },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export default function AIStylistPath() {
  const [step, setStep] = useState<number>(2); // Ranging from Step 2 to Step 5 as per wireframes
  const totalSteps = 6;

  const [formData, setFormData] = useState<StylistPreferences>({
    categories: ["Casual Wear", "Accessories"],
    occasion: "casual",
    skinToneValue: 50,
    heightCm: "168",
    waistInch: "28",
    generalSize: "M",
  });

  const handleCategoryToggle = (cat: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  // Determine Skin Tone label dynamically based on slider value
  const getSkinToneDetails = (val: number) => {
    if (val < 33) {
      return {
        label: "FAIR RADIANCE",
        tip: "Stylist tip: Soft pastels, emerald greens, classic navy, and ruby reds highlight cool and neutral fair undertones.",
      };
    } else if (val < 66) {
      return {
        label: "WARM MEDIUM GOLDEN",
        tip: "Stylist tip: Earthy colors, rich terracotta, warm amber, and sage green will look exceptionally brilliant on you.",
      };
    } else {
      return {
        label: "RICH DEEP ESPRESSO",
        tip: "Stylist tip: High-contrast jewel tones, mustard yellow, vivid magenta, and crisp whites amplify your natural radiance.",
      };
    }
  };

  const skinDetails = getSkinToneDetails(formData.skinToneValue);
  const progressPercent = Math.round((step / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-[#130b24] text-white flex flex-col justify-between p-6 md:p-12 font-sans relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Progress Bar */}
      <header className="w-full max-w-4xl mx-auto z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider">STYLECUE</span>
          </div>
          <span className="text-xs tracking-wider text-amber-400 font-semibold uppercase">
            STEP {step} OF {totalSteps} ({progressPercent}%)
          </span>
        </div>
        <div className="text-xs uppercase text-gray-400 tracking-wider mb-2 font-medium">
          AI Stylist Assistant Path
        </div>
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <motion.div
            className="bg-amber-400 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </header>

      {/* Main Content Dynamic Steps */}
      <main className="w-full max-w-3xl mx-auto my-auto py-8 z-10 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 2: CATEGORY SELECTION */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full text-center"
            >
              <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-3">
                What Are You Looking For?
              </h1>
              <p className="text-gray-400 text-sm md:text-base mb-10">
                Select all that apply. Your AI Stylist will build outfit bundles based on your choice.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {CATEGORIES.map((cat) => {
                  const isSelected = formData.categories.includes(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryToggle(cat)}
                      className={`py-3.5 px-4 rounded-full text-sm font-medium transition-all border ${
                        isSelected
                          ? "bg-amber-400 text-black border-amber-400 shadow-lg shadow-amber-400/20 font-semibold"
                          : "bg-white/5 text-gray-200 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 3: OCCASION */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full text-center"
            >
              <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-3">
                What's the Occasion?
              </h1>
              <p className="text-gray-400 text-sm md:text-base mb-10">
                We tailor the color schemes, fabrics, and formality level accordingly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {OCCASIONS.map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.occasion === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setFormData({ ...formData, occasion: item.id })}
                      className={`p-5 rounded-2xl flex items-center space-x-4 border text-left transition-all ${
                        isSelected
                          ? "border-amber-400 bg-white/10 ring-1 ring-amber-400"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div className={`p-3 rounded-full ${isSelected ? "bg-amber-400 text-black" : "bg-white/10 text-gray-300"}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base">{item.label}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 4: COLOUR MATCHING */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full text-center"
            >
              <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-3">
                Colour Matching
              </h1>
              <p className="text-gray-400 text-sm md:text-base mb-10">
                We analyze your skin undertones to suggest palettes that make you pop.
              </p>

              <div className="max-w-xl mx-auto">
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                  <span>Fair</span>
                  <span>Medium</span>
                  <span>Rich / Deep</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.skinToneValue}
                  onChange={(e) => setFormData({ ...formData, skinToneValue: Number(e.target.value) })}
                  className="w-full h-4 rounded-lg appearance-none cursor-pointer accent-amber-400 bg-gradient-to-r from-[#fce2cf] via-[#bd8253] to-[#422617]"
                />

                <div className="mt-6 font-semibold text-amber-400 tracking-wider text-sm uppercase">
                  SELECTED: {skinDetails.label}
                </div>

                <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4 flex items-start space-x-3 text-left">
                  <Palette className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {skinDetails.tip}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: MEASUREMENTS & FIT */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full text-center"
            >
              <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-3">
                Find Your Fit
              </h1>
              <p className="text-gray-400 text-sm md:text-base mb-10">
                Input your measurements for precision sizing recommendations.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                <div className="text-left">
                  <label className="block text-xs text-gray-400 mb-2 font-semibold tracking-wider">
                    HEIGHT (CM)
                  </label>
                  <input
                    type="number"
                    value={formData.heightCm}
                    onChange={(e) => setFormData({ ...formData, heightCm: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-xs text-gray-400 mb-2 font-semibold tracking-wider">
                    WAIST (INCH)
                  </label>
                  <input
                    type="number"
                    value={formData.waistInch}
                    onChange={(e) => setFormData({ ...formData, waistInch: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="relative my-8 max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-[#130b24] px-4 text-gray-400 uppercase tracking-wider">
                    Or Choose General Size
                  </span>
                </div>
              </div>

              <div className="flex justify-center flex-wrap gap-3 max-w-md mx-auto">
                {SIZES.map((sz) => {
                  const isSelected = formData.generalSize === sz;
                  return (
                    <button
                      key={sz}
                      onClick={() => setFormData({ ...formData, generalSize: sz })}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all border ${
                        isSelected
                          ? "bg-amber-400 text-black border-amber-400 shadow-lg shadow-amber-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Navigation Buttons */}
      <footer className="w-full max-w-4xl mx-auto flex justify-center items-center gap-4 z-10 pt-6">
        <button
          onClick={handleBack}
          disabled={step <= 1}
          className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm tracking-wide"
        >
          BACK
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-semibold flex items-center space-x-2 transition-all shadow-lg shadow-amber-400/20 text-sm tracking-wide"
        >
          <span>CONTINUE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
}
    
