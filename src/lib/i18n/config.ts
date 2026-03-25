export const supportedLocales = ['en', 'zh', 'ja', 'es', 'th', 'hi', 'ko'] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'en';

export const localeOptions: Array<{ value: Locale; label: string; short: string }> = [
  { value: 'en', label: 'English', short: 'EN' },
  { value: 'zh', label: '中文', short: '中文' },
  { value: 'ja', label: '日本語', short: 'JA' },
  { value: 'es', label: 'Español', short: 'ES' },
  { value: 'th', label: 'ไทย', short: 'TH' },
  { value: 'hi', label: 'हिन्दी', short: 'HI' },
  { value: 'ko', label: '한국어', short: 'KO' },
];

export const localeHtmlLang: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
  ja: 'ja',
  es: 'es',
  th: 'th',
  hi: 'hi',
  ko: 'ko',
};

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function normalizeLocale(value?: string | null): Locale | null {
  if (!value) return null;

  const normalized = value.toLowerCase();

  if (normalized.startsWith('zh')) return 'zh';
  if (normalized.startsWith('ja')) return 'ja';
  if (normalized.startsWith('es')) return 'es';
  if (normalized.startsWith('th')) return 'th';
  if (normalized.startsWith('hi')) return 'hi';
  if (normalized.startsWith('ko')) return 'ko';
  if (normalized.startsWith('en')) return 'en';

  return null;
}

export function getPreferredLocale(preferredLanguages: readonly string[] = []): Locale {
  for (const language of preferredLanguages) {
    const locale = normalizeLocale(language);
    if (locale) return locale;
  }

  return defaultLocale;
}
