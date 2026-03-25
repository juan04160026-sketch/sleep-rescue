'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Button, buttonStyles } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { cn } from '@/lib/utils/cn';
import { useLocale } from '@/lib/i18n/locale';
import { uiText } from '@/lib/i18n/messages';

const presetSeconds = [60, 120, 300] as const;

export function CalmClient() {
  const [seconds, setSeconds] = useState<number>(120);
  const [running, setRunning] = useState(false);
  const { locale } = useLocale();
  const t = uiText[locale].calm;

  const minutesLabel = useMemo(() => {
    if (seconds < 120) return t.oneMinute;
    if (seconds < 300) return t.twoMinute;
    return t.fiveMinute;
  }, [seconds, t.fiveMinute, t.oneMinute, t.twoMinute]);

  const activeNote = t.presets[String(seconds) as '60' | '120' | '300'];

  return (
    <section className="py-8 sm:py-12">
      <Container className="max-w-5xl">
        <Card className="overflow-hidden px-4 py-8 sm:px-10 sm:py-12">
          <div className="mx-auto flex min-h-[62vh] max-w-3xl flex-col items-center text-center sm:min-h-[68vh]">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="display-type mt-5 text-[clamp(2.6rem,10vw,6rem)] leading-[0.95] text-[#f4edde] sm:mt-6 sm:leading-[0.92]">{t.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#c0bbaf] sm:mt-6 sm:text-lg sm:leading-8">{t.intro}</p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {presetSeconds.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setSeconds(preset)}
                  className={cn('rounded-full border px-4 py-2.5 text-sm transition duration-200', seconds === preset ? 'border-[#d9c39c]/40 bg-[#d9c39c]/10 text-[#f6eddc]' : 'border-white/10 bg-white/[0.02] text-[#b8b1a3] hover:border-white/16 hover:text-[#f2ebdd]')}
                >
                  {t.presetLabels[String(preset) as '60' | '120' | '300']}
                </button>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center">
              <div className="relative flex h-[16.5rem] w-[16.5rem] items-center justify-center sm:h-[24rem] sm:w-[24rem]">
                <div className={cn('breathing-halo', running && 'animate-breathe-halo')} />
                <div className={cn('breathing-orb', running && 'animate-breathe')} />
                <div className="absolute inset-auto flex flex-col items-center">
                  <div className="eyebrow">{minutesLabel}</div>
                  <div className="display-type mt-3 text-[1.9rem] leading-[0.95] text-[#f4edde] sm:mt-4 sm:text-[2.8rem] sm:leading-none">{t.inhale}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.34em] text-[#938d80]">{t.exhale}</div>
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#a8a091]">{activeNote}</p>

            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button onClick={() => setRunning((value) => !value)} size="lg" className="w-full sm:w-auto">{running ? t.pause : t.begin}</Button>
              <Link href="/plan" className={buttonStyles({ variant: 'ghost', size: 'lg', className: 'w-full sm:w-auto' })}>{t.backToPlan}</Link>
            </div>

            <div className="mt-auto w-full pt-12">
              <div className="soft-divider" />
              <div className="mt-6 grid gap-4 text-left md:grid-cols-3">
                {t.guidance.map((item) => (
                  <div key={item.title} className="border-t border-white/8 pt-4 md:border-t-0 md:pt-0">
                    <div className="text-[0.72rem] uppercase tracking-[0.34em] text-[#8f897d]">{item.title}</div>
                    <p className="mt-3 text-sm leading-7 text-[#b8b1a3]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
