const DEFAULT_GA_ID = 'G-2TL1Z4XHXT';

export type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getGoogleAnalyticsId() {
  const envId = process.env.NEXT_PUBLIC_GA_ID?.trim();
  if (envId) return envId;
  if (process.env.NODE_ENV === 'production') return DEFAULT_GA_ID;
  return null;
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}
