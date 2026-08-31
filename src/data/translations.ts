import { LanguageCode } from '../types';

export const TRANSLATIONS: Record<LanguageCode, {
  welcome: {
    findStyle: string;
    aiTailored: string;
    aiStylist: string;
    browseShop: string;
    kioskSubtitle: string;
  };
  step1: {
    title: string;
    subtitle: string;
    men: string;
    menSub: string;
    women: string;
    womenSub: string;
    kids: string;
    kidsSub: string;
    itemCountMen: string;
    itemCountWomen: string;
    itemCountKids: string;
  };
  step2: {
    title: string;
    subtitle: string;
    casual: string;
    formal: string;
    accessories: string;
    ethnic: string;
    swimwear: string;
    sportswear: string;
    outerwear: string;
    footwear: string;
  };
  step3: {
    title: string;
    subtitle: string;
    casualSun: string;
    casualSunSub: string;
    workCorp: string;
    workCorpSub: string;
    weddingGala: string;
    weddingGalaSub: string;
    partyNight: string;
    partyNightSub: string;
  };
  step4: {
    title: string;
    subtitle: string;
    fair: string;
    medium: string;
    rich: string;
    selected: string;
    topMatches: string;
  };
  step5: {
    title: string;
    subtitle: string;
    height: string;
    waist: string;
    orChooseSize: string;
  };
  step6: {
    title: string;
    subtitle: string;
    findOutfit: string;
  };
  matchResults: {
    aiMatchComplete: string;
    tops: string;
    bottoms: string;
    shoes: string;
    accessories: string;
    livePreview: string;
    addToFittingBag: string;
    addedToBag: string;
    reviewCheckout: string;
  };
  categories: {
    searchPlaceholder: string;
    exploreTitle: string;
    aiStylistPrompt: string;
  };
  catalog: {
    all: string;
    men: string;
    women: string;
    kids: string;
    allStyles: string;
    casual: string;
    formal: string;
    party: string;
    wedding: string;
    viewDetails: string;
    allCategories: string;
    home: string;
    categories: string;
  };
  productDetail: {
    selectSize: string;
    addedCabin: string;
    addToCart: string;
  };
  cart: {
    title: string;
    subtitle: string;
    empty: string;
    browseCatalog: string;
    size: string;
    estimatedAmount: string;
    total: string;
    keepShopping: string;
    confirmNotify: string;
  };
  orderConfirmed: {
    title: string;
    subtitle: string;
    cabinCode: string;
    step1: string;
    step2: string;
    step3: string;
    step3Ready: string;
    startNew: string;
    orderPlaced: string;
  };
  order: {
    title: string;
    subtitle: string;
    cabinCode: string;
    step1: string;
    step2: string;
    step3: string;
    step3Ready: string;
    startNewSession: string;
    orderPlaced: string;
  };
  common: {
    back: string;
    continue: string;
    fittingBag: string;
  };
}> = {
  en: {
    welcome: {
      findStyle: 'Curated Personal Wardrobe',
      aiTailored: 'Bespoke tailoring, chromatic harmony & silhouette precision',
      aiStylist: 'START CONSULTATION',
      browseShop: 'EXPLORE COLLECTION',
      kioskSubtitle: 'STYLECUE ATELIER • BESPOKE DIGITAL FITTING SALON',
    },
    step1: {
      title: 'Who Are You Shopping For?',
      subtitle: 'We will curate collections specific to their lifestyle and proportions.',
      men: 'Men',
      menSub: 'Tailored and Casual',
      women: 'Women',
      womenSub: 'Contemporary & Classic',
      kids: 'Kids',
      kidsSub: 'Comfortable & Playful',
      itemCountMen: '740+ PREMIUM ITEMS IN STORE MATCHING MEN',
      itemCountWomen: '858+ PREMIUM ITEMS IN STORE MATCHING WOMEN',
      itemCountKids: '420+ COMFORT ITEMS IN STORE MATCHING KIDS',
    },
    step2: {
      title: 'What Are You Looking For?',
      subtitle: 'Select all that apply. Your AI Stylist will build outfit bundles based on your choice.',
      casual: 'Casual Wear',
      formal: 'Formal Wear',
      accessories: 'Accessories',
      ethnic: 'Ethnic Wear',
      swimwear: 'Swimwear',
      sportswear: 'Sports Wear',
      outerwear: 'Outerwear',
      footwear: 'Footwear',
    },
    step3: {
      title: "What's the Occasion?",
      subtitle: 'We tailor the color schemes, fabrics, and formality level accordingly.',
      casualSun: 'Casual / Sun',
      casualSunSub: 'Weekend, Travel & Lounging',
      workCorp: 'Work / Corporate',
      workCorpSub: 'Meetings, Office & Business Formal',
      weddingGala: 'Wedding / Gala',
      weddingGalaSub: 'Celebrations & Formal Ceremonies',
      partyNight: 'Party / Night Out',
      partyNightSub: 'Club, Cocktails & Dynamic Evenings',
    },
    step4: {
      title: 'Colour Matching',
      subtitle: 'We analyze your skin undertones to suggest palettes that make you pop.',
      fair: 'Fair',
      medium: 'Medium',
      rich: 'Rich / Deep',
      selected: 'SELECTED',
      topMatches: 'Top matches:',
    },
    step5: {
      title: 'Find Your Fit',
      subtitle: 'Input your measurements for precision sizing recommendations.',
      height: 'HEIGHT (CM)',
      waist: 'WAIST (INCH)',
      orChooseSize: 'OR CHOOSE GENERAL SIZE',
    },
    step6: {
      title: 'Your Body Type',
      subtitle: 'Select your build for the most flattering fit. We tailor recommendations to match your body type precisely.',
      findOutfit: 'FIND MY OUTFIT',
    },
    matchResults: {
      aiMatchComplete: 'AI MATCH COMPLETE',
      tops: 'TOPS',
      bottoms: 'BOTTOMS',
      shoes: 'SHOES',
      accessories: 'ACCESSORIES',
      livePreview: 'LIVE PREVIEW',
      addToFittingBag: 'ADD TO FITTING BAG',
      addedToBag: 'ADDED TO BAG',
      reviewCheckout: 'REVIEW & CHECKOUT',
    },
    categories: {
      searchPlaceholder: 'Search clothes, collections, or styles...',
      exploreTitle: 'Explore Premium Categories',
      aiStylistPrompt: 'Need AI curated styling recommendations?',
    },
    catalog: {
      all: 'All',
      men: 'Men',
      women: 'Women',
      kids: 'Kids',
      allStyles: 'All Styles',
      casual: 'Casual',
      formal: 'Formal',
      party: 'Party',
      wedding: 'Occasion',
      viewDetails: 'VIEW DETAILS',
      allCategories: 'ALL CATEGORIES',
      home: 'HOME',
      categories: 'CATEGORIES',
    },
    productDetail: {
      selectSize: 'SELECT FITTING CABIN SIZE',
      addedCabin: 'ADDED TO FITTING CABIN!',
      addToCart: 'ADD TO CART +',
    },
    cart: {
      title: 'Order Review',
      subtitle: 'Review premium items chosen during your session.',
      empty: 'Your fitting bag is currently empty.',
      browseCatalog: 'BROWSE CATALOG',
      size: 'Size',
      estimatedAmount: 'Estimated Amount',
      total: 'Total',
      keepShopping: 'KEEP SHOPPING',
      confirmNotify: 'CONFIRM & NOTIFY STAFF',
    },
    orderConfirmed: {
      title: 'StyleCue Assistant Notified',
      subtitle: 'Your personal fitting bundle is currently being prepared.',
      cabinCode: 'FITTING CABIN CODE',
      step1: '1. Order placed',
      step2: '2. Staff preparing in Main Hall cabin',
      step3: '3. Ready for collection',
      step3Ready: '— Cabin #3 unlocked!',
      startNew: 'START NEW SESSION',
      orderPlaced: 'ORDER PLACED — STAFF NOTIFIED',
    },
    order: {
      title: 'StyleCue Assistant Notified',
      subtitle: 'Your personal fitting bundle is currently being prepared.',
      cabinCode: 'FITTING CABIN CODE',
      step1: '1. Order placed',
      step2: '2. Staff preparing in Main Hall cabin',
      step3: '3. Ready for collection',
      step3Ready: '— Cabin #3 unlocked!',
      startNewSession: 'START NEW SESSION',
      orderPlaced: 'ORDER PLACED — STAFF NOTIFIED',
    },
    common: {
      back: 'BACK',
      continue: 'CONTINUE',
      fittingBag: 'Fitting Bag',
    },
  },
  si: {
    welcome: {
      findStyle: 'ඔබට ගැළපෙන විලාසිතාව තෝරාගන්න',
      aiTailored: 'AI තාක්ෂණයෙන්, ඔබ වෙනුවෙන්ම නිමැවුණු විලාසිතා',
      aiStylist: 'AI මෝස්තර සහයක',
      browseShop: 'විලාසිතා පිරික්සන්න',
      kioskSubtitle: 'STYLECUE ස්මාර්ට් කියෝස්ක් • ඩිජිටල් ඇඳුම් අත්හදාබැලීමේ සහයක',
    },
    step1: {
      title: 'ඔබ ඇඳුම් තෝරන්නේ කා සඳහාද?',
      subtitle: 'අපි ඔවුන්ගේ විලාසිතාවට හා ප්‍රමාණයට ගැළපෙනම ඇඳුම් පෙළක් සකස් කරමු.',
      men: 'පිරිමි',
      menSub: 'කැෂුවල් සහ ෆෝමල්',
      women: 'කාන්තා',
      womenSub: 'නවීන සහ සම්භාව්‍ය',
      kids: 'ළමා',
      kidsSub: 'සුවපහසු සහ ආකර්ෂණීය',
      itemCountMen: 'පිරිමි ඇඳුම් 740+ ක් ගබඩාවේ ඇත',
      itemCountWomen: 'කාන්තා ඇඳුම් 858+ ක් ගබඩාවේ ඇත',
      itemCountKids: 'ළමා ඇඳුම් 420+ ක් ගබඩාවේ ඇත',
    },
    step2: {
      title: 'ඔබ සොයන්නේ කුමක්ද?',
      subtitle: 'ඔබ කැමති සියලුම කාණ්ඩ තෝරන්න. AI මඟින් ඔබට ගැළපෙන ඇඳුම් කට්ටල සකස් කෙරේ.',
      casual: 'කැෂුවල් ඇඳුම්',
      formal: 'ෆෝමල් ඇඳුම්',
      accessories: 'උපාංග (Accessories)',
      ethnic: 'දේශීය / සාම්ප්‍රදායික',
      swimwear: 'පිහිනුම් ඇඳුම්',
      sportswear: 'ක්‍රීඩා ඇඳුම්',
      outerwear: 'කබා / ජැකට්',
      footwear: 'පාවහන්',
    },
    step3: {
      title: 'විලාසිතාව කුමන අවස්ථාවකටද?',
      subtitle: 'අවස්ථාවට උචිත වර්ණ සංකලන හා රෙදිපිළි අපි තෝරා දෙන්නෙමු.',
      casualSun: 'දෛනික / විවේකී',
      casualSunSub: 'සති අන්ත, සංචාර හා විවේකය',
      workCorp: 'කාර්යාලීය / වෘත්තීය',
      workCorpSub: 'රැස්වීම් හා කාර්යාල කටයුතු',
      weddingGala: 'විවාහ / උත්සව',
      weddingGalaSub: 'මංගල උත්සව හා සාද',
      partyNight: 'රාත්‍රී සාද',
      partyNightSub: 'උත්සව හා රාත්‍රී හමුවීම්',
    },
    step4: {
      title: 'වර්ණ ගැළපීම (Color Matching)',
      subtitle: 'ඔබේ සමේ වර්ණයට වඩාත්ම දීප්තිමත්ව ගැළපෙන වර්ණ අපි තෝරා දෙමු.',
      fair: 'පැහැපත් (Fair)',
      medium: 'මැද පැහැය (Medium)',
      rich: 'තද පැහැය (Rich/Deep)',
      selected: 'තෝරාගත් පැහැය',
      topMatches: 'වඩාත්ම ගැළපෙන වර්ණ:',
    },
    step5: {
      title: 'ඔබේ ප්‍රමාණය සොයාගන්න',
      subtitle: 'නිවැරදි ඇඳුම් ප්‍රමාණය නිර්දේශ කිරීමට මිණුම් ඇතුළත් කරන්න.',
      height: 'උස (සෙන්ටිමීටර)',
      waist: 'ඉන (අඟල්)',
      orChooseSize: 'නැතහොත් ප්‍රමාණය තෝරන්න',
    },
    step6: {
      title: 'ශරීර හැඩය (Body Type)',
      subtitle: 'ඔබේ ශරීර හැඩය තෝරන්න. වඩාත් මනා පෙනුමක් ලබාදෙන ඇඳුම් නිර්දේශ කරමු.',
      findOutfit: 'මගේ ඇඳුම් කට්ටලය සොයන්න',
    },
    matchResults: {
      aiMatchComplete: 'AI නිර්දේශය සූදානම්',
      tops: 'උඩුකය ඇඳුම්',
      bottoms: 'යටිකය ඇඳුම්',
      shoes: 'පාවහන්',
      accessories: 'උපාංග',
      livePreview: 'සජීවී පෙරදසුන',
      addToFittingBag: 'ඇඳුම් මල්ලට එක් කරන්න',
      addedToBag: 'මල්ලට එක් කෙරිණි',
      reviewCheckout: 'පිරික්සා තහවුරු කරන්න',
    },
    categories: {
      searchPlaceholder: 'ඇඳුම් හෝ විලාසිතා සොයන්න...',
      exploreTitle: 'ප්‍රමුඛ ඇඳුම් කාණ්ඩ ගවේෂණය කරන්න',
      aiStylistPrompt: 'AI මඟින් ඇඳුම් තෝරා ගැනීමට අවශ්‍යද?',
    },
    catalog: {
      all: 'සියල්ල',
      men: 'පිරිමි',
      women: 'කාන්තා',
      kids: 'ළමා',
      allStyles: 'සියලු විලාසිතා',
      casual: 'කැෂුවල්',
      formal: 'කාර්යාලීය',
      party: 'සාද',
      wedding: 'උත්සව',
      viewDetails: 'විස්තර බලන්න',
      allCategories: 'සියලු කාණ්ඩ',
      home: 'මුල් පිටුව',
      categories: 'කාණ්ඩ',
    },
    productDetail: {
      selectSize: 'අත්හදා බලන ප්‍රමාණය තෝරන්න',
      addedCabin: 'ඇඳුම් කුටියට එක් කෙරිණි!',
      addToCart: 'මල්ලට එක් කරන්න +',
    },
    cart: {
      title: 'ඇණවුම පිරික්සීම',
      subtitle: 'ඔබ තෝරාගත් සියලුම ඇඳුම් මෙතැනින් පරීක්ෂා කරන්න.',
      empty: 'ඔබගේ ඇඳුම් මල්ල හිස්ව පවතී.',
      browseCatalog: 'නාමාවලිය බලන්න',
      size: 'ප්‍රමාණය',
      estimatedAmount: 'ඇස්තමේන්තුගත මුදල',
      total: 'මුළු මුදල',
      keepShopping: 'තවදුරටත් තෝරන්න',
      confirmNotify: 'කාර්ය මණ්ඩලය දැනුවත් කරන්න',
    },
    orderConfirmed: {
      title: 'සේවක මණ්ඩලය දැනුවත් කෙරිණි',
      subtitle: 'ඔබගේ ඇඳුම් කට්ටලය මේ වන විට සූදානම් කෙරෙමින් පවතී.',
      cabinCode: 'ඇඳුම් මාරුකරන කුටියේ අංකය',
      step1: '1. ඇණවුම භාරගැනිණි',
      step2: '2. ප්‍රධාන ශාලාවේ කුටිය සූදානම් වෙමින් පවතී',
      step3: '3. කුටිය සූදානම්',
      step3Ready: '— #3 කුටිය විවෘතයි!',
      startNew: 'නව සැසියක් අරඹන්න',
      orderPlaced: 'ඇණවුම තහවුරුයි — කාර්ය මණ්ඩලය දැනුවත් කෙරිණි',
    },
    order: {
      title: 'සේවක මණ්ඩලය දැනුවත් කෙරිණි',
      subtitle: 'ඔබගේ ඇඳුම් කට්ටලය මේ වන විට සූදානම් කෙරෙමින් පවතී.',
      cabinCode: 'ඇඳුම් මාරුකරන කුටියේ අංකය',
      step1: '1. ඇණවුම භාරගැනිණි',
      step2: '2. ප්‍රධාන ශාලාවේ කුටිය සූදානම් වෙමින් පවතී',
      step3: '3. කුටිය සූදානම්',
      step3Ready: '— #3 කුටිය විවෘතයි!',
      startNewSession: 'නව සැසියක් අරඹන්න',
      orderPlaced: 'ඇණවුම තහවුරුයි — කාර්ය මණ්ඩලය දැනුවත් කෙරිණි',
    },
    common: {
      back: 'ආපසු',
      continue: 'ඉදිරියට',
      fittingBag: 'ඇඳුම් මල්ල',
    },
  },
  ta: {
    welcome: {
      findStyle: 'உங்களுக்கான சரியான ஆடையைத் தேர்ந்தெடுங்கள்',
      aiTailored: 'AI தொழில்நுட்பத்தில், உங்களுக்காகவே பிரத்யேகமாக உருவாக்கப்பட்டது',
      aiStylist: 'AI ஆடை வடிவமைப்பாளர்',
      browseShop: 'ஆடைகளை பார்வையிடுங்கள்',
      kioskSubtitle: 'STYLECUE ஸ்மார்ட் கியோஸ்க் • டிஜிட்டல் ஆடை பொருத்துதல் உதவியாளர்',
    },
    step1: {
      title: 'யாருக்காக ஆடைகளை தேர்ந்தெடுக்கிறீர்கள்?',
      subtitle: 'அவர்களின் விருப்பம் மற்றும் அளவுகளுக்கு ஏற்ப ஆடைகளை பரிந்துரைப்போம்.',
      men: 'ஆண்கள்',
      menSub: 'வடிவமைக்கப்பட்ட & கேஷுவல்',
      women: 'பெண்கள்',
      womenSub: 'நவீன & பாரம்பரிய',
      kids: 'சிறுவர்கள்',
      kidsSub: 'வசதியான & விளையாட்டு ஆடைகள்',
      itemCountMen: '740+ பிரீமியம் ஆண்கள் ஆடைகள் கையிருப்பில் உள்ளன',
      itemCountWomen: '858+ பிரீமியம் பெண்கள் ஆடைகள் கையிருப்பில் உள்ளன',
      itemCountKids: '420+ பிரீமியம் சிறுவர் ஆடைகள் கையிருப்பில் உள்ளன',
    },
    step2: {
      title: 'நீங்கள் என்ன தேடுகிறீர்கள்?',
      subtitle: 'பொருத்தமான வகைகளைத் தேர்ந்தெடுக்கவும். AI உங்களுக்கான சிறந்த சேர்க்கைகளை உருவாக்கும்.',
      casual: 'கேஷுவல் உடைகள்',
      formal: 'அலுவலக உடைகள்',
      accessories: 'அணிகலன்கள்',
      ethnic: 'பாரம்பரிய உடைகள்',
      swimwear: 'நீச்சல் உடைகள்',
      sportswear: 'விளையாட்டு உடைகள்',
      outerwear: 'மேலங்கிகள் / கோட்டுகள்',
      footwear: 'காலணிகள்',
    },
    step3: {
      title: 'எந்த நிகழ்விற்காக ஆடை தேவை?',
      subtitle: 'நிகழ்வுக்கு ஏற்ப வண்ணங்கள் மற்றும் துணி வகைகளை நாங்கள் தீர்மானிக்கிறோம்.',
      casualSun: 'தினசரி / ஓய்வு',
      casualSunSub: 'வார இறுதி, பயணம் & ஓய்வு',
      workCorp: 'அலுவலகம் / கார்ப்பரேட்',
      workCorpSub: 'சந்திப்புகள் & வணிக நிகழ்வுகள்',
      weddingGala: 'திருமணம் / விழாக்கள்',
      weddingGalaSub: 'திருமணம் மற்றும் விசேஷங்கள்',
      partyNight: 'இரவு விருந்து',
      partyNightSub: 'கொண்டாட்டங்கள் & விருந்துகள்',
    },
    step4: {
      title: 'வண்ண பொருத்தம் (Color Matching)',
      subtitle: 'உங்கள் சரும நிறத்திற்கு ஏற்ப மிக அழகாக பொருந்தக்கூடிய வண்ணங்களை நாங்கள் கண்டறிகிறோம்.',
      fair: 'வெளிர் நிறம் (Fair)',
      medium: 'நடுத்தர நிறம் (Medium)',
      rich: 'அடர் நிறம் (Rich/Deep)',
      selected: 'தேர்ந்தெடுக்கப்பட்டது',
      topMatches: 'சிறந்த வண்ணங்கள்:',
    },
    step5: {
      title: 'உங்கள் அளவை அறியுங்கள்',
      subtitle: 'சரியான அளவை பரிந்துரைக்க உங்கள் அளவீடுகளை உள்ளிடவும்.',
      height: 'உயரம் (செ.மீ)',
      waist: 'இடுப்பளவு (அங்குலம்)',
      orChooseSize: 'அல்லது பொது அளவைத் தேர்ந்தெடுக்கவும்',
    },
    step6: {
      title: 'உடல் அமைப்பு (Body Type)',
      subtitle: 'உங்களுக்கு ஏற்றவாறு ஆடையை தேர்வு செய்ய உங்கள் உடல் அமைப்பைத் தேர்ந்தெடுக்கவும்.',
      findOutfit: 'எனக்கான ஆடையைக் கண்டுபிடி',
    },
    matchResults: {
      aiMatchComplete: 'AI பொருத்தம் முடிந்தது',
      tops: 'மேல் சட்டைகள்',
      bottoms: 'கீழாடைகள்',
      shoes: 'காலணிகள்',
      accessories: 'அணிகலன்கள்',
      livePreview: 'நேரடி முன்னோட்டம்',
      addToFittingBag: 'பையில் சேர்க்கவும்',
      addedToBag: 'சேர்க்கப்பட்டது',
      reviewCheckout: 'சரிபார்த்து உறுதிப்படுத்துக',
    },
    categories: {
      searchPlaceholder: 'ஆடைகள் அல்லது வகைகளைத் தேடவும்...',
      exploreTitle: 'பிரீமியம் ஆடை வகைகளை ஆராயுங்கள்',
      aiStylistPrompt: 'AI ஆடை பரிந்துரைகள் தேவையா?',
    },
    catalog: {
      all: 'அனைத்தும்',
      men: 'ஆண்கள்',
      women: 'பெண்கள்',
      kids: 'சிறுவர்கள்',
      allStyles: 'அனைத்து பாணிகள்',
      casual: 'கேஷுவல்',
      formal: 'அலுவலகம்',
      party: 'விருந்து',
      wedding: 'விசேஷம்',
      viewDetails: 'விவரங்களை காண்க',
      allCategories: 'அனைத்து பிரிவுகள்',
      home: 'முகப்பு',
      categories: 'பிரிவுகள்',
    },
    productDetail: {
      selectSize: 'பொருத்தும் அறையின் அளவைத் தேர்ந்தெடுக்கவும்',
      addedCabin: 'அறைக்கு சேர்க்கப்பட்டது!',
      addToCart: 'பையில் சேர்க்கவும் +',
    },
    cart: {
      title: 'ஆர்டர் மதிப்பாய்வு',
      subtitle: 'நீங்கள் தேர்ந்தெடுத்த ஆடைகளை இங்கே சரிபார்க்கவும்.',
      empty: 'உங்கள் ஆடைப் பை காலியாக உள்ளது.',
      browseCatalog: 'பட்டியலைப் பார்க்கவும்',
      size: 'அளவு',
      estimatedAmount: 'மதிப்பிடப்பட்ட தொகை',
      total: 'மொத்தம்',
      keepShopping: 'மேலும் தேர்ந்தெடுக்க',
      confirmNotify: 'பணியாளருக்கு அறிவிக்கவும்',
    },
    orderConfirmed: {
      title: 'பணியாளர்களுக்கு அறிவிக்கப்பட்டது',
      subtitle: 'உங்கள் ஆடைகள் தற்போது தயார் செய்யப்பட்டு வருகின்றன.',
      cabinCode: 'டிரெஸ்சிங் ரூம் குறியீடு',
      step1: '1. ஆர்டர் பெறப்பட்டது',
      step2: '2. பிரதான அரங்கில் அறை தயாராகிறது',
      step3: '3. பெற்றுக்கொள்ள தயார்',
      step3Ready: '— அறை #3 திறக்கப்பட்டது!',
      startNew: 'புதிய அமர்வைத் தொடங்கு',
      orderPlaced: 'ஆர்டர் செய்யப்பட்டது — ஊழியர்களுக்கு தெரிவிக்கப்பட்டது',
    },
    order: {
      title: 'பணியாளர்களுக்கு அறிவிக்கப்பட்டது',
      subtitle: 'உங்கள் ஆடைகள் தற்போது தயார் செய்யப்பட்டு வருகின்றன.',
      cabinCode: 'டிரெஸ்சிங் ரூம் குறியீடு',
      step1: '1. ஆர்டர் பெறப்பட்டது',
      step2: '2. பிரதான அரங்கில் அறை தயாராகிறது',
      step3: '3. பெற்றுக்கொள்ள தயார்',
      step3Ready: '— அறை #3 திறக்கப்பட்டது!',
      startNewSession: 'புதிய அமர்வைத் தொடங்கு',
      orderPlaced: 'ஆர்டர் செய்யப்பட்டது — ஊழியர்களுக்கு தெரிவிக்கப்பட்டது',
    },
    common: {
      back: 'பின்செல்க',
      continue: 'தொடர்க',
      fittingBag: 'ஆடைப் பை',
    },
  },
};
