import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/shared/Footer';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { LocaleProvider } from '@/lib/i18n/locale';

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const displayFont = Newsreader({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Sleep Rescue',
  description: 'A calm nighttime decision tool with multilingual support for rough nights, wakeups, and schedule resets.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <LocaleProvider>
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
