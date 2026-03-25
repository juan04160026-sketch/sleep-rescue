'use client';

import Link from 'next/link';
import { Container } from './Container';
import { useLocale } from '@/lib/i18n/locale';
import { uiText } from '@/lib/i18n/messages';

export function Footer() {
  const { locale } = useLocale();
  const t = uiText[locale].footer;

  return (
    <footer className="pb-8 pt-12 text-sm text-[#938d80]">
      <Container className="max-w-6xl">
        <div className="soft-divider" />
        <div className="flex flex-col gap-6 pt-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow">Sleep Rescue</div>
            <p className="mt-3 leading-7 text-[#a9a292]">{t.blurb}</p>
          </div>
          <div className="flex flex-wrap gap-5 text-[#bdb5a8]">
            <Link href="/calm" className="transition hover:text-[#f2ebdd]">{t.calm}</Link>
            <Link href="/about" className="transition hover:text-[#f2ebdd]">{t.about}</Link>
            <Link href="/disclaimer" className="transition hover:text-[#f2ebdd]">{t.disclaimer}</Link>
            <Link href="/" className="transition hover:text-[#f2ebdd]">{t.startOver}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
