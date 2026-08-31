export type GenderTarget = 'men' | 'women' | 'kids';

export type FashionCategory = 
  | 'casual' 
  | 'formal' 
  | 'accessories' 
  | 'ethnic' 
  | 'swimwear' 
  | 'sportswear' 
  | 'outerwear' 
  | 'footwear';

export type OccasionType = 
  | 'casual_sun' 
  | 'work_corporate' 
  | 'wedding_gala' 
  | 'party_night';

export type BodyType = 
  | 'slim' 
  | 'athletic' 
  | 'regular' 
  | 'broad_plus';

export type ClothingSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface SkinToneProfile {
  value: number; // 0 to 100
  label: string; // e.g. "WARM MEDIUM GOLDEN"
  tier: 'fair' | 'medium' | 'rich';
  recommendedColors: string[];
  stylistTip: string;
}

export interface ClothingItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: 'tops' | 'bottoms' | 'shoes' | 'accessories' | 'dresses' | 'loungewear';
  gender: GenderTarget | 'all';
  occasion: OccasionType[];
  image: string;
  colorName: string;
  colorHex: string;
  description: string;
  availableSizes: ClothingSize[];
  discountPercent?: number;
  isAiMatch?: boolean;
  matchScore?: number;
}

export interface CartItem {
  product: ClothingItem;
  selectedSize: ClothingSize;
  selectedColor?: string;
  quantity: number;
}

export interface StylistPreferences {
  gender: GenderTarget;
  categories: FashionCategory[];
  occasion: OccasionType;
  skinToneValue: number;
  skinToneLabel: string;
  heightCm: number;
  waistInch: number;
  generalSize: ClothingSize;
  bodyType: BodyType;
}

export type AppView = 
  | 'welcome'
  | 'ai_gender'
  | 'ai_category'
  | 'ai_occasion'
  | 'ai_skintone'
  | 'ai_fit'
  | 'ai_bodytype'
  | 'ai_match_results'
  | 'browse_categories'
  | 'browse_catalog'
  | 'browse_product_detail'
  | 'cart_review'
  | 'order_confirmed';

export type BackgroundTheme = 'twilight_velvet' | 'twilight_dusk' | 'twilight_aurora';

export type LanguageCode = 'en' | 'si' | 'ta';
