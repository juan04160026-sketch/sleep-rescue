'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, buttonStyles } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { trackEvent } from '@/lib/analytics/gtag';
import { cn } from '@/lib/utils/cn';
import { useLocale } from '@/lib/i18n/locale';
import { uiText } from '@/lib/i18n/messages';

const presetSeconds = [60, 120, 300] as const;
const inhaleMs = 4000;
const exhaleMs = 6000;
const cycleMs = inhaleMs + exhaleMs;

function formatCountdown(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function CalmClient() {
  const [seconds, setSeconds] = useState<number>(120);
  const [running, setRunning] = useState(false);
  const [remainingMs, setRemainingMs] = useState<number>(120_000);
  const [elapsedMs, setElapsedMs] = useState<number>(0);
  const completionTrackedRef = useRef(false);
  const { locale } = useLocale();
  const t = uiText[locale].calm;

  const durationMs = seconds * 1000;
  const sessionComplete = !running && remainingMs === 0;

  const minutesLabel = useMemo(() => {
    if (seconds < 120) return t.oneMinute;
    if (seconds < 300) return t.twoMinute;
    return t.fiveMinute;
  }, [seconds, t.fiveMinute, t.oneMinute, t.twoMinute]);

  const activeNote = sessionComplete ? t.completeNote : t.presets[String(seconds) as '60' | '120' | '300'];
  const cyclePosition = elapsedMs % cycleMs;
  const phaseLabel = sessionComplete ? t.completeTitle : cyclePosition < inhaleMs ? t.inhale : t.exhale;
  const nextPhaseLabel = sessionComplete ? t.completeBody : cyclePosition < inhaleMs ? t.exhale : t.inhale;
  const countdown = useMemo(() => formatCountdown(remainingMs), [remainingMs]);

  useEffect(() => {
    if (!running) return;

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      let finished = false;

      setElapsedMs((value) => Math.min(value + delta, durationMs));
      setRemainingMs((value) => {
        const next = Math.max(value - delta, 0);
        if (next === 0) finished = true;
        return next;
      });

      if (finished) {
        setRunning(false);
        return;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [durationMs, running]);

  useEffect(() => {
    if (!sessionComplete || completionTrackedRef.current) return;
    completionTrackedRef.current = true;
    trackEvent('calm_session_complete', { duration_seconds: seconds });
  }, [seconds, sessionComplete]);

  function resetSession(nextSeconds: number) {
    completionTrackedRef.current = false;
    setRunning(false);
    setSeconds(nextSeconds);
    setElapsedMs(0);
    setRemainingMs(nextSeconds * 1000);
  }

  function handleToggle() {
    if (running) {
      setRunning(false);
      return;
    }

    const isFreshStart = remainingMs === durationMs || remainingMs === 0;

    if (remainingMs === 0) {
      setElapsedMs(0);
      setRemainingMs(durationMs);
    }

    if (isFreshStart) {
      completionTrackedRef.current = false;
      trackEvent('calm_session_start', {
        duration_seconds: seconds,
        start_type: remainingMs === 0 ? 'restart' : 'start',
      });
    }

    setRunning(true);
  }

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
                  onClick={() => resetSession(preset)}
                  className={cn(
                    'rounded-full border px-4 py-2.5 text-sm transition duration-200',
                    seconds === preset
                      ? 'border-[#d9c39c]/40 bg-[#d9c39c]/10 text-[#f6eddc]'
                      : 'border-white/10 bg-white/[0.02] text-[#b8b1a3] hover:border-white/16 hover:text-[#f2ebdd]',
                  )}
                >
                  {t.presetLabels[String(preset) as '60' | '120' | '300']}
                </button>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center">
              <div className="relative flex h-[16.5rem] w-[16.5rem] items-center justify-center sm:h-[24rem] sm:w-[24rem]">
                <div className={cn('breathing-halo', running && 'animate-breathe-halo')} />
                <div className={cn('breathing-orb', running && 'animate-breathe')} />
                <div className="absolute inset-auto flex flex-col items-center px-4" aria-live="polite">
                  <div className="eyebrow">{minutesLabel}</div>
                  <div className="mt-4 rounded-full border border-white/10 bg-black/12 px-4 py-2 text-sm font-medium tracking-[0.22em] text-[#d9c39c] sm:text-base">
                    {countdown}
                  </div>
                  <div className="display-type mt-5 text-[1.9rem] leading-[0.95] text-[#f4edde] sm:text-[2.8rem] sm:leading-none">{phaseLabel}</div>
                  <div className="mt-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#938d80] sm:text-xs">{nextPhaseLabel}</div>
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#a8a091]">{activeNote}</p>

            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button onClick={handleToggle} size="lg" className="w-full sm:w-auto">
                {running ? t.pause : sessionComplete ? t.restart : t.begin}
              </Button>
              <Link href="/plan" className={buttonStyles({ variant: 'ghost', size: 'lg', className: 'w-full sm:w-auto' })}>
                {t.backToPlan}
              </Link>
              <Link href="/" className={buttonStyles({ variant: 'ghost', size: 'lg', className: 'w-full sm:w-auto' })}>
                {t.home}
              </Link>
            </div>

            {sessionComplete ? (
              <Card className="mt-8 w-full p-5 text-left sm:p-6">
                <div className="eyebrow">{t.completeEyebrow}</div>
                <h2 className="display-type mt-4 text-[2rem] leading-[0.98] text-[#f4edde]">{t.completeTitle}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#bdb5a8] sm:text-base">{t.completeBody}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/plan" className={buttonStyles({ variant: 'solid', size: 'lg', className: 'w-full sm:w-auto' })}>{t.completePrimaryCta}</Link>
                  <Button onClick={() => resetSession(seconds)} variant="ghost" size="lg" className="w-full sm:w-auto">{t.restart}</Button>
                </div>
              </Card>
            ) : null}

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
