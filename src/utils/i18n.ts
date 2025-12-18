// Simple i18n system for MeaChat
// Supports English and Arabic

export type Locale = 'en' | 'ar';

export const messages = {
  en: {
    // Header
    'header.home': 'Home',
    'header.blog': 'Blog',
    'header.about': 'About',
    'header.english': 'English',
    'header.arabic': 'العربية',
    
    // Hero Section
    'hero.title': 'MeaChat instantly supports your customers with',
    'hero.title.highlight': 'AI-generated responses',
    'hero.subtitle': 'Connect WhatsApp, Instagram, and your website. Answer FAQs, qualify leads, and keep conversations active 24/7 without adding more agents.',
    'hero.cta.primary': 'Start free trial',
    'hero.cta.secondary': 'See MeaChat in action',
    'hero.trial': 'Free 14-day trial',
    'hero.no_card': 'No credit card required',
    
    // Features
    'features.title': 'Powerful',
    'features.title.highlight': 'Features',
    'features.subtitle': 'Everything you need to build, manage and scale conversational experiences across all channels.',
    
    // Channels
    'channels.title': 'Connect all your',
    'channels.title.highlight': 'messaging channels',
    'channels.subtitle': 'One AI chatbot for WhatsApp, Instagram, Facebook, Telegram, and your website. Manage every conversation from a single inbox.',
    
    // Integrations
    'integrations.title': 'Powerful',
    'integrations.title.highlight': 'Integrations',
    'integrations.subtitle': 'Connect MeaChat with your favorite tools to sync data, trigger automations, and keep every system up to date.',
    
    // Testimonials
    'testimonials.title': 'Trusted by Businesses',
    'testimonials.title.highlight': 'Worldwide',
    'testimonials.subtitle': 'See how companies are transforming their customer engagement with MeaChat.',
    
    // Pricing
    'pricing.title': 'Start Free –',
    'pricing.title.highlight': 'Scale with Power',
    'pricing.subtitle': 'Flexible pricing that grows with you. Add credits as needed, or let experts handle everything.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    
    // CTA
    'cta.title': 'Ready to',
    'cta.title.highlight': 'Automate Your Customer Conversations?',
    'cta.subtitle': 'Start free today. Scale with flexible add-ons. Get expert help when you need it.',
    'cta.button.primary': 'Start Free Now',
    'cta.button.secondary': 'Schedule Demo',
    'cta.features': 'No credit card required • Cancel anytime • 2-minute setup',
    
    // Footer
    'footer.copyright': '© 2025 Your name here. All rights reserved.',
  },
  ar: {
    // Header
    'header.home': 'الرئيسية',
    'header.blog': 'المدونة',
    'header.about': 'من نحن',
    'header.english': 'English',
    'header.arabic': 'العربية',
    
    // Hero Section
    'hero.title': 'ميتشات يدعم عملائك فوراً مع',
    'hero.title.highlight': 'ردود ذكاء اصطناعي',
    'hero.subtitle': 'اربط واتساب، إنستغرام، وموقعك الإلكتروني. أجب عن الأسئلة الشائعة، صنّف العملاء المحتملين، وحافظ على المحادثات نشطة 24/7 بدون إضافة موظفين.',
    'hero.cta.primary': 'ابدأ تجربة مجانية',
    'hero.cta.secondary': 'شاهد ميتشات بالعمل',
    'hero.trial': 'تجربة مجانية 14 يوم',
    'hero.no_card': 'لا حاجة لبطاقة ائتمان',
    
    // Features
    'features.title': 'ميزات',
    'features.title.highlight': 'قوية',
    'features.subtitle': 'كل ما تحتاجه لبناء وإدارة وتوسيع تجارب المحادثات عبر جميع القنوات.',
    
    // Channels
    'channels.title': 'اربط جميع',
    'channels.title.highlight': 'قنوات المراسلة',
    'channels.subtitle': 'بوت ذكاء اصطناعي واحد لواتساب، إنستغرام، فيسبوك، تيليجرام، وموقعك. أدر كل محادثة من صندوق بريد واحد.',
    
    // Integrations
    'integrations.title': 'تكاملات',
    'integrations.title.highlight': 'قوية',
    'integrations.subtitle': 'اربط ميتشات مع أدواتك المفضلة لمزامنة البيانات، تفعيل الأتمتة، والحفاظ على كل نظام محدثاً.',
    
    // Testimonials
    'testimonials.title': 'موثوق به من قبل الشركات',
    'testimonials.title.highlight': 'عالمياً',
    'testimonials.subtitle': 'شاهد كيف تحول الشركات تفاعلها مع العملاء باستخدام ميتشات.',
    
    // Pricing
    'pricing.title': 'ابدأ مجاناً –',
    'pricing.title.highlight': 'توسع بقوة',
    'pricing.subtitle': 'أسعار مرنة تنمو معك. أضف رصيداً حسب الحاجة، أو دع الخبراء يتولون كل شيء.',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    
    // CTA
    'cta.title': 'مستعد',
    'cta.title.highlight': 'لأتمتة محادثات عملائك؟',
    'cta.subtitle': 'ابدأ مجاناً اليوم. توسع مع إضافات مرنة. احصل على مساعدة الخبراء عند الحاجة.',
    'cta.button.primary': 'ابدأ مجاناً الآن',
    'cta.button.secondary': 'جدولة عرض توضيحي',
    'cta.features': 'لا حاجة لبطاقة ائتمان • إلغاء في أي وقت • إعداد دقيقتين',
    
    // Footer
    'footer.copyright': '© 2025 اسمك هنا. جميع الحقوق محفوظة.',
  }
};

/**
 * Get translation function for a specific locale
 * @param locale - The locale to use ('en' or 'ar')
 * @returns Translation function
 */
export function getT(locale: Locale) {
  return (key: string): string => {
    return messages[locale][key] || key;
  };
}

/**
 * Check if a locale is right-to-left
 * @param locale - The locale to check
 * @returns true if RTL, false otherwise
 */
export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}

/**
 * Get the opposite locale
 * @param locale - Current locale
 * @returns Opposite locale
 */
export function getOppositeLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}

/**
 * Get locale-specific URL
 * @param path - The path without locale prefix
 * @param locale - The locale
 * @returns Full path with locale prefix if Arabic
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'ar') {
    return `/ar${path === '/' ? '' : path}`;
  }
  return path;
}