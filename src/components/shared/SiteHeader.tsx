'use client';

import Link from 'next/link';
import { Container } from './Container';
import { localeOptions, uiText } from '@/lib/i18n/messages';
import { useLocale } from '@/lib/i18n/locale';

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const t = uiText[locale].header;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <Container className="max-w-6xl px-0">
        <div className="rounded-[24px] border border-white/8 bg-[#0c0f15]/72 px-4 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:rounded-full sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#d9c39c]">SR</span>
              <div className="min-w-0">
                <div className="truncate text-[0.68rem] uppercase tracking-[0.28em] text-[#8f897d] sm:text-[0.72rem] sm:tracking-[0.34em]">Sleep Rescue</div>
                <div className="hidden truncate text-xs text-[#c6beb0] sm:block">{t.tagline}</div>
              </div>
            </Link>

            <div className="flex flex-col gap-2 sm:items-end">
              <nav className="flex items-center justify-between gap-1 border-t border-white/8 pt-2 text-sm text-[#aca496] sm:justify-end sm:border-t-0 sm:pt-0">
                <Link href="/calm" className="rounded-full px-3 py-2 text-xs transition hover:bg-white/[0.04] hover:text-[#f2ebdd] sm:px-4 sm:text-sm">{t.calm}</Link>
                <Link href="/about" className="rounded-full px-3 py-2 text-xs transition hover:bg-white/[0.04] hover:text-[#f2ebdd] sm:px-4 sm:text-sm">{t.about}</Link>
                <Link href="/disclaimer" className="rounded-full px-3 py-2 text-xs transition hover:bg-white/[0.04] hover:text-[#f2ebdd] sm:px-4 sm:text-sm">{t.disclaimer}</Link>
              </nav>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-[0.7rem] uppercase tracking-[0.24em] text-[#8f897d]">{t.language}</span>
                <select
                  value={locale}
                  onChange={(event) => setLocale(event.target.value as typeof locale)}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-[#f2ebdd] outline-none transition hover:border-white/20 sm:text-sm"
                >
                  {localeOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#0c0f15] text-[#f2ebdd]">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
