import { ClothingItem, FashionCategory, GenderTarget, OccasionType, SkinToneProfile, StylistPreferences } from '../types';

export const SKIN_TONE_TIERS: { min: number; max: number; label: string; tier: 'fair' | 'medium' | 'rich'; tip: string; colors: string[] }[] = [
  {
    min: 0,
    max: 20,
    label: 'PORCELAIN COOL IVORY',
    tier: 'fair',
    tip: 'Stylist tip: Soft rose, icy pastels, sapphire, and crisp cool navy create striking definition against your porcelain undertones.',
    colors: ['#4A6B82', '#9FB1BC', '#E2C2C6', '#2F3E46']
  },
  {
    min: 21,
    max: 40,
    label: 'WARM FAIR PEACH',
    tier: 'fair',
    tip: 'Stylist tip: Coral, soft champagne, warm sage, and peach undertones illuminate your natural radiant glow.',
    colors: ['#E07A5F', '#81B29A', '#F2CC8F', '#3D405B']
  },
  {
    min: 41,
    max: 60,
    label: 'WARM MEDIUM GOLDEN',
    tier: 'medium',
    tip: 'Stylist tip: Earthy colors, rich terracotta, warm amber, and sage green will look exceptionally brilliant on you.',
    colors: ['#C5832B', '#8C4F2B', '#586A4C', '#2B4162']
  },
  {
    min: 61,
    max: 80,
    label: 'RICH CARAMEL & OLIVE',
    tier: 'rich',
    tip: 'Stylist tip: Burnt orange, emerald, saffron yellow, and deep teal provide balanced, vibrant harmony.',
    colors: ['#D66800', '#1F563E', '#DDA15E', '#1D3557']
  },
  {
    min: 81,
    max: 100,
    label: 'DEEP RICH ESPRESSO',
    tier: 'rich',
    tip: 'Stylist tip: Vivid jewel tones, electric cobalt, stark optic ivory, and regal crimson elevate your natural depth.',
    colors: ['#9E2A2B', '#1D3557', '#F4F1DE', '#E9C46A']
  }
];

export function getSkinToneProfile(value: number): SkinToneProfile {
  const match = SKIN_TONE_TIERS.find(t => value >= t.min && value <= t.max) || SKIN_TONE_TIERS[2];
  return {
    value,
    label: match.label,
    tier: match.tier,
    recommendedColors: match.colors,
    stylistTip: match.tip
  };
}

export const CLOTHING_DATABASE: ClothingItem[] = [
  // ==========================================
  // WOMEN - AI MATCH & CATALOG ITEMS
  // ==========================================
  // Tops (Women)
  {
    id: 'top-women-flax-linen',
    name: 'Relaxed Flax Linen Shirt',
    brand: 'STYLECUE ATELIER',
    price: 2190,
    originalPrice: 2890,
    category: 'tops',
    gender: 'women',
    occasion: ['casual_sun', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
    colorName: 'Warm Sand Beige',
    colorHex: '#C5A880',
    description: 'Minimalist mandarin-collar shirt spun from pure breathable Normandy flax linen. Draped for an effortless relaxed silhouette.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    isAiMatch: true,
    matchScore: 98
  },
  {
    id: 'top-women-silk-blouse',
    name: 'Ethereal Silk Flutter Blouse',
    brand: 'STYLECUE LUXE',
    price: 3490,
    originalPrice: 4200,
    category: 'tops',
    gender: 'women',
    occasion: ['work_corporate', 'party_night'],
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=900&q=80',
    colorName: 'Rose Quartz Blush',
    colorHex: '#E2C2C6',
    description: 'Featherlight mulberry silk blouse with subtle gathered neck and gentle balloon sleeves.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 96
  },
  {
    id: 'top-women-amber-tunic',
    name: 'Saffron Amber Linen Tunic',
    brand: 'STYLECUE LUXE',
    price: 1990,
    originalPrice: 2690,
    category: 'tops',
    gender: 'women',
    occasion: ['casual_sun', 'party_night'],
    image: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&w=900&q=80',
    colorName: 'Warm Amber Mustard',
    colorHex: '#D49B18',
    description: 'Sun-drenched golden tones formulated to illuminate warm undertones with radiant sophistication.',
    availableSizes: ['S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 99
  },
  {
    id: 'top-women-merlot-drape',
    name: 'Rich Merlot Draped Tunic',
    brand: 'HUF&DEE',
    price: 2790,
    originalPrice: 3500,
    category: 'tops',
    gender: 'women',
    occasion: ['party_night', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80',
    colorName: 'Crimson Merlot',
    colorHex: '#6B1D2F',
    description: 'Deep gemstone hue with soft brushed drape, perfect for twilight celebrations and elevated dinners.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isAiMatch: true,
    matchScore: 94
  },
  {
    id: 'top-women-sage-shirt',
    name: 'Forest Sage Utility Blouse',
    brand: 'STYLECUE ATELIER',
    price: 2490,
    originalPrice: 3100,
    category: 'tops',
    gender: 'women',
    occasion: ['casual_sun', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    colorName: 'Olive Sage',
    colorHex: '#525B44',
    description: 'Organic cotton-linen hybrid with drop shoulders and soft curved hem.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 93
  },
  {
    id: 'top-women-charcoal-crop',
    name: 'Artisan Washed Charcoal Wrap',
    brand: 'STYLECUE ATELIER',
    price: 2890,
    originalPrice: 3400,
    category: 'tops',
    gender: 'women',
    occasion: ['party_night', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    colorName: 'Charcoal Noir',
    colorHex: '#3A3D40',
    description: 'Tailored wrap silhouette with tie waist fastening and fluid draped neckline.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 95
  },
  {
    id: 'top-women-ivory-peplum',
    name: 'Pleated Ivory Georgette Blouse',
    brand: 'STYLECUE LUXE',
    price: 2850,
    originalPrice: 3600,
    category: 'tops',
    gender: 'women',
    occasion: ['work_corporate', 'party_night'],
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80',
    colorName: 'Off-White Ivory',
    colorHex: '#F5F5DC',
    description: 'Fluid lightweight georgette top with tailored waist darts and delicate wrist cuffs.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    discountPercent: 20
  },
  {
    id: 'top-women-floral-embroidered',
    name: 'Embroidered Cotton Artisan Tunic',
    brand: 'ETHNIC ATELIER',
    price: 3190,
    originalPrice: 3990,
    category: 'tops',
    gender: 'women',
    occasion: ['casual_sun', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    colorName: 'Warm Sand Beige',
    colorHex: '#C5A880',
    description: 'Intricately handcrafted tonal thread embroidery on breathable pre-washed cotton.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    discountPercent: 20
  },

  // Bottoms (Women)
  {
    id: 'bottom-women-pleated',
    name: 'Classic Pleated Trousers',
    brand: 'STYLECUE ATELIER',
    price: 1950,
    originalPrice: 2800,
    category: 'bottoms',
    gender: 'women',
    occasion: ['work_corporate', 'casual_sun'],
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sand Khaki',
    colorHex: '#D2B48C',
    description: 'High-waisted tailored trousers with subtle single front pleats, providing elongating clean vertical lines.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 97
  },
  {
    id: 'bottom-women-linen-palazzo',
    name: 'Wide-Leg Linen Palazzo Pants',
    brand: 'HUF&DEE',
    price: 2850,
    originalPrice: 3600,
    category: 'bottoms',
    gender: 'women',
    occasion: ['casual_sun', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
    colorName: 'Off-White Ivory',
    colorHex: '#F5F5DC',
    description: 'Fluid wide-leg silhouette in breathable French flax linen with tailored waist.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 96
  },
  {
    id: 'bottom-women-silk-culottes',
    name: 'Midnight Silk Satin Culottes',
    brand: 'STYLECUE LUXE',
    price: 3200,
    originalPrice: 4100,
    category: 'bottoms',
    gender: 'women',
    occasion: ['party_night', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80',
    colorName: 'Midnight Navy',
    colorHex: '#1D2A44',
    description: 'Lustrous heavyweight satin culottes offering an architectural, flattering drape.',
    availableSizes: ['S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 92
  },

  // Shoes (Women)
  {
    id: 'shoes-women-ballet-flats',
    name: 'Minimalist Leather Ballet Flats',
    brand: 'STYLECUE LUXE',
    price: 3200,
    originalPrice: 3900,
    category: 'shoes',
    gender: 'women',
    occasion: ['casual_sun', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    colorName: 'Chestnut Tan',
    colorHex: '#A0522D',
    description: 'Ultra-flexible butter-soft nappa leather flats engineered for cloud-like foot cushioning.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 98
  },
  {
    id: 'shoes-women-strappy-heels',
    name: 'Artisan Block Heel Sandals',
    brand: 'STYLECUE ATELIER',
    price: 4600,
    originalPrice: 5800,
    category: 'shoes',
    gender: 'women',
    occasion: ['wedding_gala', 'party_night'],
    image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=900&q=80',
    colorName: 'Warm Gold Champagne',
    colorHex: '#D4AF37',
    description: 'Sculpted leather sandals with comfortable geometric block heel and soft ankle wrap.',
    availableSizes: ['S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 95
  },

  // Accessories (Women)
  {
    id: 'acc-women-artisan-coat',
    name: 'Premium Artisan Woolen Coat',
    brand: 'ETHNIC ATELIER',
    price: 18900,
    originalPrice: 24000,
    category: 'accessories',
    gender: 'women',
    occasion: ['wedding_gala', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=80',
    colorName: 'Camel Wool',
    colorHex: '#C19A6B',
    description: 'Hand-spun virgin wool coat featuring an architectural shawl collar and bespoke horn buttons.',
    availableSizes: ['S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 99
  },
  {
    id: 'acc-women-leather-tote',
    name: 'Handcrafted Woven Leather Tote',
    brand: 'STYLECUE LUXE',
    price: 3950,
    originalPrice: 4800,
    category: 'accessories',
    gender: 'women',
    occasion: ['work_corporate', 'casual_sun'],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sienna Tan',
    colorHex: '#A0522D',
    description: 'Vegetable-tanned structured shopper with reinforced gold-brass hardware and interior compartments.',
    availableSizes: ['M'],
    isAiMatch: true,
    matchScore: 94
  },

  // ==========================================
  // MEN - AI MATCH & CATALOG ITEMS
  // ==========================================
  // Tops (Men)
  {
    id: 'top-men-linen-mandarin',
    name: 'Tailored Linen Mandarin Shirt',
    brand: 'STYLECUE ATELIER',
    price: 2390,
    originalPrice: 2990,
    category: 'tops',
    gender: 'men',
    occasion: ['casual_sun', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
    colorName: 'Warm Sand Linen',
    colorHex: '#C5A880',
    description: 'Crisp structured linen shirt with modern stand collar and tailored athletic cut.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isAiMatch: true,
    matchScore: 98
  },
  {
    id: 'top-men-oxford-navy',
    name: 'Midnight Navy Oxford Button-Down',
    brand: 'HUF&DEE',
    price: 2150,
    originalPrice: 2700,
    category: 'tops',
    gender: 'men',
    occasion: ['work_corporate', 'casual_sun'],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80',
    colorName: 'Midnight Navy',
    colorHex: '#1B2A4A',
    description: 'Premium heavyweight cotton Oxford weave tailored for sharp business casual layering.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isAiMatch: true,
    matchScore: 96
  },
  {
    id: 'top-men-sage-overshirt',
    name: 'Alpine Sage Linen Utility Overshirt',
    brand: 'STYLECUE ATELIER',
    price: 2890,
    originalPrice: 3500,
    category: 'tops',
    gender: 'men',
    occasion: ['casual_sun', 'party_night'],
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80',
    colorName: 'Olive Sage',
    colorHex: '#525B44',
    description: 'Breathable dual-pocket utility overshirt crafted from Belgian flax linen.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isAiMatch: true,
    matchScore: 95
  },
  {
    id: 'top-men-amber-knit-polo',
    name: 'Saffron Amber Mercerized Polo',
    brand: 'STYLECUE LUXE',
    price: 2290,
    originalPrice: 2950,
    category: 'tops',
    gender: 'men',
    occasion: ['casual_sun', 'party_night'],
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=900&q=80',
    colorName: 'Warm Amber Mustard',
    colorHex: '#D49B18',
    description: 'Silk-touch mercerized cotton polo with open camp collar and ribbed cuffs.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isAiMatch: true,
    matchScore: 97
  },
  {
    id: 'top-men-charcoal-merino',
    name: 'Washed Charcoal Merino Crewneck',
    brand: 'STYLECUE LUXE',
    price: 3600,
    originalPrice: 4400,
    category: 'tops',
    gender: 'men',
    occasion: ['work_corporate', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
    colorName: 'Charcoal Noir',
    colorHex: '#3A3D40',
    description: 'Superfine 19.5-micron Italian merino wool sweater with thermo-regulating fibers.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isAiMatch: true,
    matchScore: 93
  },
  {
    id: 'top-men-burgundy-shirt',
    name: 'Burgundy Twill Grandad Shirt',
    brand: 'HUF&DEE',
    price: 2450,
    originalPrice: 3100,
    category: 'tops',
    gender: 'men',
    occasion: ['party_night', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    colorName: 'Crimson Merlot',
    colorHex: '#6B1D2F',
    description: 'Structured fine-twill weave with mother-of-pearl buttons and clean slim silhouette.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isAiMatch: true,
    matchScore: 94
  },

  // Bottoms (Men)
  {
    id: 'bottom-men-tailored-chinos',
    name: 'Deep Navy Tailored Chinos',
    brand: 'STYLECUE LUXE',
    price: 2600,
    originalPrice: 3200,
    category: 'bottoms',
    gender: 'men',
    occasion: ['work_corporate', 'casual_sun'],
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
    colorName: 'Navy Dusk',
    colorHex: '#1D2A44',
    description: 'Stretch-infused Egyptian long-staple cotton tailored for all-day comfort with smart crease retention.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isAiMatch: true,
    matchScore: 97
  },
  {
    id: 'bottom-men-linen-trousers',
    name: 'Flax Linen Drawstring Trousers',
    brand: 'HUF&DEE',
    price: 2750,
    originalPrice: 3500,
    category: 'bottoms',
    gender: 'men',
    occasion: ['casual_sun', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sand Khaki',
    colorHex: '#D2B48C',
    description: 'Tapered relaxed linen trousers with concealed interior drawstring and horn button closure.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isAiMatch: true,
    matchScore: 95
  },
  {
    id: 'bottom-men-charcoal-wool',
    name: 'Woven Charcoal Wool Slacks',
    brand: 'STYLECUE ATELIER',
    price: 3400,
    originalPrice: 4200,
    category: 'bottoms',
    gender: 'men',
    occasion: ['work_corporate', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80',
    colorName: 'Charcoal Noir',
    colorHex: '#3A3D40',
    description: 'Bespoke fit pleated wool slacks with side tab adjusters and taped hems.',
    availableSizes: ['M', 'L', 'XL', 'XXL'],
    isAiMatch: true,
    matchScore: 93
  },

  // Shoes (Men)
  {
    id: 'shoes-men-leather-loafers',
    name: 'Classic Italian Leather Loafers',
    brand: 'STYLECUE ATELIER',
    price: 4500,
    originalPrice: 5800,
    category: 'shoes',
    gender: 'men',
    occasion: ['work_corporate', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80',
    colorName: 'Cognac Saddle Brown',
    colorHex: '#8B4513',
    description: 'Hand-burnished full-grain calfskin loafers with cushioned ergonomic arch support.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isAiMatch: true,
    matchScore: 98
  },
  {
    id: 'shoes-men-suede-chelsea',
    name: 'Artisan Suede Chelsea Boots',
    brand: 'HUF&DEE',
    price: 5900,
    originalPrice: 7200,
    category: 'shoes',
    gender: 'men',
    occasion: ['party_night', 'casual_sun'],
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=80',
    colorName: 'Espresso Suede',
    colorHex: '#3E2723',
    description: 'Water-resistant velvety suede boots with Goodyear-welted sole for durable all-weather grip.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isAiMatch: true,
    matchScore: 95
  },

  // Accessories (Men)
  {
    id: 'acc-men-wool-overcoat',
    name: 'Tailored Camel Wool Overcoat',
    brand: 'STYLECUE LUXE',
    price: 19500,
    originalPrice: 25000,
    category: 'accessories',
    gender: 'men',
    occasion: ['wedding_gala', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=900&q=80',
    colorName: 'Camel Wool',
    colorHex: '#C19A6B',
    description: 'Structured single-breasted overcoat tailored in double-faced Italian cashmere blend.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    isAiMatch: true,
    matchScore: 99
  },
  {
    id: 'acc-men-leather-briefcase',
    name: 'Full-Grain Leather Executive Folio',
    brand: 'STYLECUE ATELIER',
    price: 4200,
    originalPrice: 5300,
    category: 'accessories',
    gender: 'men',
    occasion: ['work_corporate', 'casual_sun'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sienna Tan',
    colorHex: '#A0522D',
    description: 'Slimline vegetable-tanned leather folio with magnetic flap closure and laptop sleeve.',
    availableSizes: ['M'],
    isAiMatch: true,
    matchScore: 94
  },

  // ==========================================
  // KIDS - AI MATCH & CATALOG ITEMS
  // ==========================================
  // Tops (Kids)
  {
    id: 'top-kids-organic-tee',
    name: 'Organic Cotton Soft Graphic Tee',
    brand: 'STYLECUE JUNIOR',
    price: 890,
    originalPrice: 1250,
    category: 'tops',
    gender: 'kids',
    occasion: ['casual_sun', 'party_night'],
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sunbeam Gold',
    colorHex: '#F2CC8F',
    description: '100% GOTS certified combed organic cotton tee. Hypoallergenic, breathable, and super-soft.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 98
  },
  {
    id: 'top-kids-linen-shirt',
    name: 'Little Voyager Flax Linen Shirt',
    brand: 'STYLECUE JUNIOR',
    price: 1350,
    originalPrice: 1790,
    category: 'tops',
    gender: 'kids',
    occasion: ['casual_sun', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sky Blue Mist',
    colorHex: '#87CEEB',
    description: 'Lightweight pastel linen button-up with easy-snap buttons for active kids.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 96
  },
  {
    id: 'top-kids-striped-tunic',
    name: 'Nautical Striped Cotton Tunic',
    brand: 'HUF&DEE KIDS',
    price: 1190,
    originalPrice: 1490,
    category: 'tops',
    gender: 'kids',
    occasion: ['casual_sun', 'party_night'],
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80',
    colorName: 'Midnight Navy',
    colorHex: '#1B2A4A',
    description: 'Classic Breton-stripe long sleeve in durable heavyweight jersey with soft neck binding.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 95
  },
  {
    id: 'top-kids-sage-hoodie',
    name: 'Forest Sage Organic Zip Hoodie',
    brand: 'STYLECUE JUNIOR',
    price: 1590,
    originalPrice: 1990,
    category: 'tops',
    gender: 'kids',
    occasion: ['casual_sun', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=80',
    colorName: 'Olive Sage',
    colorHex: '#525B44',
    description: 'Brushed fleece interior with kangaroo pockets and pinch-free zipper guard.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 94
  },
  {
    id: 'top-kids-merlot-cardigan',
    name: 'Merlot Cozy Knit Cardigan',
    brand: 'STYLECUE JUNIOR',
    price: 1750,
    originalPrice: 2200,
    category: 'tops',
    gender: 'kids',
    occasion: ['wedding_gala', 'party_night'],
    image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80',
    colorName: 'Crimson Merlot',
    colorHex: '#6B1D2F',
    description: 'Chunky cable-knit cardigan crafted with soft anti-scratch cotton yarn.',
    availableSizes: ['S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 93
  },
  {
    id: 'top-kids-sand-polo',
    name: 'Sand Dune Cotton Pique Polo',
    brand: 'HUF&DEE KIDS',
    price: 990,
    originalPrice: 1350,
    category: 'tops',
    gender: 'kids',
    occasion: ['casual_sun', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=900&q=80',
    colorName: 'Warm Sand Beige',
    colorHex: '#C5A880',
    description: 'Smart collared polo with ribbed trim, perfect for weekend outings and school celebrations.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 97
  },

  // Bottoms (Kids)
  {
    id: 'bottom-kids-stretch-denim',
    name: 'Flexi-Move Stretch Denim Dungarees',
    brand: 'STYLECUE JUNIOR',
    price: 1690,
    originalPrice: 2190,
    category: 'bottoms',
    gender: 'kids',
    occasion: ['casual_sun', 'party_night'],
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80',
    colorName: 'Midnight Navy',
    colorHex: '#1D2A44',
    description: 'Adjustable shoulder straps with reinforced knee patches and flexible stretch denim.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 98
  },
  {
    id: 'bottom-kids-chino-shorts',
    name: 'Elastic-Waist Twill Chino Shorts',
    brand: 'HUF&DEE KIDS',
    price: 1150,
    originalPrice: 1490,
    category: 'bottoms',
    gender: 'kids',
    occasion: ['casual_sun', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sand Khaki',
    colorHex: '#D2B48C',
    description: 'Super-stretchy elasticated waistband with faux horn button and deep hand pockets.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 96
  },
  {
    id: 'bottom-kids-linen-joggers',
    name: 'Sage Green Linen Easy Joggers',
    brand: 'STYLECUE JUNIOR',
    price: 1290,
    originalPrice: 1650,
    category: 'bottoms',
    gender: 'kids',
    occasion: ['casual_sun', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=80',
    colorName: 'Olive Sage',
    colorHex: '#525B44',
    description: 'Pure lightweight linen pants with cuffed ribbed ankles and functional drawstring.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 94
  },

  // Shoes (Kids)
  {
    id: 'shoes-kids-canvas-sneakers',
    name: 'Flex-Grip Canvas Play Sneakers',
    brand: 'STYLECUE JUNIOR',
    price: 1850,
    originalPrice: 2400,
    category: 'shoes',
    gender: 'kids',
    occasion: ['casual_sun', 'party_night'],
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80',
    colorName: 'Optic White',
    colorHex: '#FFFFFF',
    description: 'Easy-velcro strap sneakers with non-marking natural rubber waffle soles.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 97
  },
  {
    id: 'shoes-kids-leather-sandals',
    name: 'Tan Leather Adventure Sandals',
    brand: 'HUF&DEE KIDS',
    price: 2100,
    originalPrice: 2650,
    category: 'shoes',
    gender: 'kids',
    occasion: ['wedding_gala', 'casual_sun'],
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
    colorName: 'Chestnut Tan',
    colorHex: '#A0522D',
    description: 'Breathable ergonomic open-toe sandals with cushioned leather footbed.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    isAiMatch: true,
    matchScore: 95
  },

  // Accessories (Kids)
  {
    id: 'acc-kids-sun-hat',
    name: 'UV50+ Reversible Cotton Bucket Hat',
    brand: 'STYLECUE JUNIOR',
    price: 750,
    originalPrice: 990,
    category: 'accessories',
    gender: 'kids',
    occasion: ['casual_sun', 'party_night'],
    image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sunbeam Gold',
    colorHex: '#F2CC8F',
    description: 'Wide-brim UPF50+ rated sun protection hat with breakaway chin strap.',
    availableSizes: ['S', 'M'],
    isAiMatch: true,
    matchScore: 98
  },
  {
    id: 'acc-kids-mini-backpack',
    name: 'Little Explorer Canvas Backpack',
    brand: 'STYLECUE JUNIOR',
    price: 1450,
    originalPrice: 1850,
    category: 'accessories',
    gender: 'kids',
    occasion: ['casual_sun', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=900&q=80',
    colorName: 'Olive Sage',
    colorHex: '#525B44',
    description: 'Lightweight water-repellent mini pack with chest buckle and reflective safety trims.',
    availableSizes: ['M'],
    isAiMatch: true,
    matchScore: 94
  },

  // ==========================================
  // BROWSE PATH: DRESSES, SUITS & SPECIALTY
  // ==========================================
  {
    id: 'dress-v-neck-summer',
    name: 'V Neck Summer Dress',
    brand: 'HUF&DEE',
    price: 2190,
    originalPrice: 3790,
    category: 'dresses',
    gender: 'women',
    occasion: ['casual_sun'],
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sky Blue Mist',
    colorHex: '#87CEEB',
    description: 'An airy, fluid summer silhouette crafted from breathable light cotton, offering relaxed day-long elegance.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    discountPercent: 41
  },
  {
    id: 'dress-v-neck-linen',
    name: 'V Neck Linen Dress',
    brand: 'STYLECUE ATELIER',
    price: 2190,
    originalPrice: 3790,
    category: 'dresses',
    gender: 'women',
    occasion: ['casual_sun', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    colorName: 'Warm Sand Flax',
    colorHex: '#D8C3A5',
    description: 'An airy, elegant summer classic crafted from 100% sustainably sourced organic flax linen. Expertly draped for absolute movement and comfort.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    discountPercent: 41
  },
  {
    id: 'dress-classic-tunic',
    name: 'Classic Cotton Tunic Dress',
    brand: 'STYLECUE ATELIER',
    price: 1190,
    originalPrice: 1590,
    category: 'dresses',
    gender: 'women',
    occasion: ['casual_sun'],
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
    colorName: 'Pure White Linen',
    colorHex: '#FFFFFF',
    description: 'Breathable bohemian-cut tunic with delicate shell-finish mother-of-pearl buttons.',
    availableSizes: ['S', 'M', 'L'],
    discountPercent: 25
  },
  {
    id: 'dress-linen-summer-classic',
    name: 'Linen Tiered Midi Dress',
    brand: 'NOLIMIT CLASSIC',
    price: 2190,
    originalPrice: 2990,
    category: 'dresses',
    gender: 'women',
    occasion: ['casual_sun'],
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
    colorName: 'Natural Oatmeal',
    colorHex: '#E3DAC9',
    description: 'Tiered linen slip with adjustable delicate straps and hidden side pockets.',
    availableSizes: ['XS', 'S', 'M'],
    discountPercent: 26
  },
  {
    id: 'men-suit-classic-linen',
    name: 'Italian Flax Linen Suit Blazer',
    brand: 'STYLECUE ATELIER',
    price: 8900,
    originalPrice: 11500,
    category: 'dresses',
    gender: 'men',
    occasion: ['wedding_gala', 'work_corporate'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sand Khaki',
    colorHex: '#D2B48C',
    description: 'Unconstructed lightweight linen blazer featuring notch lapels and natural horn buttons.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    discountPercent: 22
  },
  {
    id: 'men-suit-charcoal-2pc',
    name: 'Tailored Two-Piece Wool Suit',
    brand: 'STYLECUE LUXE',
    price: 16500,
    originalPrice: 21000,
    category: 'dresses',
    gender: 'men',
    occasion: ['work_corporate', 'wedding_gala'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
    colorName: 'Charcoal Noir',
    colorHex: '#3A3D40',
    description: 'Super 130s Italian virgin wool bespoke tailored 2-piece suit jacket and trousers set with cupro lining.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    discountPercent: 21
  },
  {
    id: 'men-blazer-navy-hopsack',
    name: 'Midnight Navy Hopsack Blazer',
    brand: 'STYLECUE ATELIER',
    price: 9800,
    originalPrice: 12900,
    category: 'dresses',
    gender: 'men',
    occasion: ['work_corporate', 'party_night'],
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
    colorName: 'Midnight Navy',
    colorHex: '#1D2A44',
    description: 'Versatile 4-season breathable hopsack weave tailored blazer with soft shoulder padding and patch pockets.',
    availableSizes: ['S', 'M', 'L', 'XL'],
    discountPercent: 24
  },
  {
    id: 'kids-party-tux-set',
    name: 'Little Gentleman Linen Vest & Shorts Set',
    brand: 'STYLECUE JUNIOR',
    price: 2490,
    originalPrice: 3200,
    category: 'dresses',
    gender: 'kids',
    occasion: ['wedding_gala', 'party_night'],
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80',
    colorName: 'Off-White Ivory',
    colorHex: '#F5F5DC',
    description: 'Adorable linen waistcoat with clip-on matching bow tie and elastic pleated shorts.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    discountPercent: 22
  },
  {
    id: 'kids-dress-floral-frill',
    name: 'Floral Chiffon Tiered Party Dress',
    brand: 'STYLECUE JUNIOR',
    price: 2150,
    originalPrice: 2800,
    category: 'dresses',
    gender: 'kids',
    occasion: ['wedding_gala', 'party_night', 'casual_sun'],
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80',
    colorName: 'Rose Quartz Blush',
    colorHex: '#E2C2C6',
    description: 'Gentle floral printed chiffon dress with flutter sleeves and 100% soft cotton inner lining.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    discountPercent: 23
  },
  {
    id: 'kids-dress-princess-tulle',
    name: 'Pastel Sunshine Tulle Gala Dress',
    brand: 'STYLECUE JUNIOR',
    price: 2650,
    originalPrice: 3400,
    category: 'dresses',
    gender: 'kids',
    occasion: ['wedding_gala', 'party_night'],
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    colorName: 'Sunbeam Gold',
    colorHex: '#F2CC8F',
    description: 'Magical golden champagne party gown with sparkly tulle layers and satin sash ribbon.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    discountPercent: 22
  },
  {
    id: 'dress-women-emerald-gala',
    name: 'Emerald Silk Gala Evening Gown',
    brand: 'STYLECUE LUXE',
    price: 12900,
    originalPrice: 16500,
    category: 'dresses',
    gender: 'women',
    occasion: ['wedding_gala', 'party_night'],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
    colorName: 'Deep Emerald',
    colorHex: '#1F563E',
    description: 'Floor-length pure silk satin gown with cowl neckline, sculpted bias-cut waist, and subtle train.',
    availableSizes: ['XS', 'S', 'M', 'L'],
    discountPercent: 22
  }
];

export interface CategoryCardInfo {
  id: string;
  name: string;
  itemCount: number;
  image: string;
  categoryKey: 'tops' | 'dresses' | 'shoes' | 'bottoms' | 'loungewear';
}

export function getCategoryCardsForGender(gender: 'all' | GenderTarget): CategoryCardInfo[] {
  if (gender === 'men') {
    return [
      {
        id: 'shirts_blouses',
        name: 'Shirts, Polos & Tops',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'men' || i.gender === 'all') && i.category === 'tops').length || 18,
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'tops'
      },
      {
        id: 'dresses_gowns',
        name: 'Suits, Blazers & Formal',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'men' || i.gender === 'all') && i.category === 'dresses').length || 12,
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'dresses'
      },
      {
        id: 'home_loungewear',
        name: 'Trousers, Chinos & Pants',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'men' || i.gender === 'all') && (i.category === 'bottoms' || i.category === 'accessories')).length || 16,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'bottoms'
      },
      {
        id: 'footwear_shoes',
        name: 'Shoes, Loafers & Boots',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'men' || i.gender === 'all') && i.category === 'shoes').length || 10,
        image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'shoes'
      }
    ];
  }

  if (gender === 'kids') {
    return [
      {
        id: 'shirts_blouses',
        name: 'Kids Tops, Tees & Shirts',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'kids' || i.gender === 'all') && i.category === 'tops').length || 15,
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'tops'
      },
      {
        id: 'dresses_gowns',
        name: 'Party Sets & Dresses',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'kids' || i.gender === 'all') && i.category === 'dresses').length || 9,
        image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'dresses'
      },
      {
        id: 'home_loungewear',
        name: 'Shorts, Dungarees & Pants',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'kids' || i.gender === 'all') && (i.category === 'bottoms' || i.category === 'accessories')).length || 14,
        image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'bottoms'
      },
      {
        id: 'footwear_shoes',
        name: 'Kids Shoes & Sandals',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'kids' || i.gender === 'all') && i.category === 'shoes').length || 8,
        image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'shoes'
      }
    ];
  }

  if (gender === 'women') {
    return [
      {
        id: 'shirts_blouses',
        name: 'Blouses, Tops & Tunics',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'women' || i.gender === 'all') && i.category === 'tops').length || 24,
        image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'tops'
      },
      {
        id: 'dresses_gowns',
        name: 'Dresses & Evening Gowns',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'women' || i.gender === 'all') && i.category === 'dresses').length || 18,
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'dresses'
      },
      {
        id: 'home_loungewear',
        name: 'Trousers, Culottes & Skirts',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'women' || i.gender === 'all') && (i.category === 'bottoms' || i.category === 'accessories')).length || 15,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'bottoms'
      },
      {
        id: 'footwear_shoes',
        name: 'Heels, Flats & Footwear',
        itemCount: CLOTHING_DATABASE.filter(i => (i.gender === 'women' || i.gender === 'all') && i.category === 'shoes').length || 12,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
        categoryKey: 'shoes'
      }
    ];
  }

  // Default 'all'
  return [
    {
      id: 'shirts_blouses',
      name: 'Shirts, Blouses & Tops',
      itemCount: CLOTHING_DATABASE.filter(i => i.category === 'tops').length,
      image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80',
      categoryKey: 'tops'
    },
    {
      id: 'dresses_gowns',
      name: 'Dresses, Suits & Gowns',
      itemCount: CLOTHING_DATABASE.filter(i => i.category === 'dresses').length,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      categoryKey: 'dresses'
    },
    {
      id: 'home_loungewear',
      name: 'Trousers & Loungewear',
      itemCount: CLOTHING_DATABASE.filter(i => i.category === 'bottoms' || i.category === 'accessories').length,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      categoryKey: 'bottoms'
    },
    {
      id: 'footwear_shoes',
      name: 'Footwear & Shoes',
      itemCount: CLOTHING_DATABASE.filter(i => i.category === 'shoes').length,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      categoryKey: 'shoes'
    }
  ];
}

export const CATEGORY_CARD_DATA = getCategoryCardsForGender('all');

export const INITIAL_PREFERENCES: StylistPreferences = {
  gender: 'women',
  categories: ['casual', 'accessories'],
  occasion: 'casual_sun',
  skinToneValue: 50,
  skinToneLabel: 'WARM MEDIUM GOLDEN',
  heightCm: 168,
  waistInch: 28,
  generalSize: 'M',
  bodyType: 'regular'
};
