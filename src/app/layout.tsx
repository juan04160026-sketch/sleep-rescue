import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/shared/Footer';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { GoogleAnalytics } from '@/components/shared/GoogleAnalytics';
import { LocaleProvider } from '@/lib/i18n/locale';

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const displayFont = Newsreader({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400', '500', '600', '700'] });
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL('https://sleep-rescue.pages.dev'),
  title: {
    default: 'Sleep Rescue',
    template: '%s | Sleep Rescue',
  },
  description: 'A calm nighttime decision tool with multilingual support for rough nights, wakeups, and schedule resets.',
  keywords: ['sleep help', 'sleep rescue', 'cant sleep', 'woke up at night', 'sleep schedule reset', 'breathing tool'],
  alternates: {
    canonical: 'https://sleep-rescue.pages.dev',
  },
  openGraph: {
    title: 'Sleep Rescue',
    description: 'A calm nighttime decision tool with multilingual support for rough nights, wakeups, and schedule resets.',
    url: 'https://sleep-rescue.pages.dev',
    siteName: 'Sleep Rescue',
    type: 'website',
    images: [
      {
        url: '/og-card.svg',
        width: 1200,
        height: 630,
        alt: 'Sleep Rescue calm nighttime decision tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sleep Rescue',
    description: 'A calm nighttime decision tool with multilingual support for rough nights, wakeups, and schedule resets.',
    images: ['/og-card.svg'],
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <LocaleProvider>
          <GoogleAnalytics />
          <div className="page-shell">
            <SiteHeader />
            <main>{children}</main>
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
