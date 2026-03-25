'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { buttonStyles } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { buildPlan } from '@/lib/flows/plan-builder';
import { getScenarioMap, uiText } from '@/lib/i18n/messages';
import { useLocale } from '@/lib/i18n/locale';
import { loadPlan } from '@/lib/storage/session-plan';
import type { PlanSession } from '@/types/plan';
import { PlanSectionCard } from './PlanSectionCard';

export function PlanClient() {
  const [session, setSession] = useState<PlanSession | null | undefined>(undefined);
  const { locale } = useLocale();
  const t = uiText[locale].plan;

  useEffect(() => {
    setSession(loadPlan());
  }, []);

  const plan = useMemo(() => {
    if (!session) return null;
    return buildPlan(locale, session.scenario, session.answers);
  }, [locale, session]);

  if (session === undefined) {
    return (
      <section className="py-16">
        <Container className="max-w-3xl">
          <Card className="p-8 text-center">
            <div className="eyebrow">{t.loadingEyebrow}</div>
            <p className="mt-4 text-base text-[#b7b0a1]">{t.loading}</p>
          </Card>
        </Container>
      </section>
    );
  }

  if (!session || !plan) {
    return (
      <section className="py-16">
        <Container className="max-w-3xl">
          <Card className="p-8 text-center sm:p-10">
            <div className="eyebrow">{t.noPlanEyebrow}</div>
            <h1 className="display-type mt-6 text-[clamp(2.75rem,5vw,4rem)] leading-none text-[#f4edde]">{t.noPlanTitle}</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#bdb5a8]">{t.noPlanIntro}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/" className={buttonStyles({ variant: 'solid', size: 'lg' })}>{t.goHome}</Link>
              <Link href="/calm" className={buttonStyles({ variant: 'ghost', size: 'lg' })}>{t.calm}</Link>
            </div>
          </Card>
        </Container>
      </section>
    );
  }

  const scenario = getScenarioMap(locale)[plan.scenario];

  return (
    <section className="py-10 sm:py-14">
      <Container className="max-w-6xl">
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            <Card className="p-7 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="eyebrow">{t.protocol}</div>
                  <h1 className="display-type mt-5 text-[clamp(2.3rem,9vw,4.9rem)] leading-[0.96] text-[#f4edde] sm:mt-6 sm:leading-[0.94]">{plan.headline}</h1>
                  <p className="mt-5 text-lg leading-8 text-[#c0bbaf]">{plan.summary}</p>
                </div>
                <div className="min-w-[220px] rounded-[28px] border border-white/8 bg-black/10 p-5">
                  <div className="eyebrow">{t.scenario}</div>
                  <div className="mt-3 text-xl font-medium text-[#f2ebdd]">{scenario.shortTitle}</div>
                  <p className="mt-2 text-sm leading-6 text-[#9f9788]">{scenario.focusLabel} · {scenario.durationLabel}</p>
                </div>
              </div>

              <div className="soft-divider mt-8" />

              <div className="mt-7 rounded-[24px] border border-[#d9c39c]/18 bg-[linear-gradient(180deg,rgba(217,195,156,0.08),rgba(217,195,156,0.03))] p-5 sm:mt-8 sm:rounded-[28px] sm:p-7">
                <div className="eyebrow">{t.primaryAction}</div>
                <h2 className="display-type mt-4 text-[2rem] leading-[0.96] text-[#f4edde] sm:text-[2.55rem] sm:leading-none">{plan.primaryAction.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#c2bbad]">{plan.primaryAction.description}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={plan.primaryAction.href} className={buttonStyles({ variant: 'solid', size: 'lg', className: 'w-full sm:w-auto' })}>{t.calm}</Link>
                  <Link href={`/flow/${plan.scenario}`} className={buttonStyles({ variant: 'ghost', size: 'lg', className: 'w-full sm:w-auto' })}>{t.rerun}</Link>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              {plan.sections.map((section, index) => (
                <PlanSectionCard key={section.key} section={section} index={index} eyebrow={t.sectionEyebrow} />
              ))}
            </div>
          </div>

          <div className="space-y-4 xl:pt-12">
            <Card className="p-6 sm:p-7">
              <div className="eyebrow">{t.stillAwake}</div>
              <h2 className="display-type mt-4 text-3xl leading-none text-[#f4edde] sm:text-[2.45rem]">{plan.nextStepTitle}</h2>
              <ul className="mt-6 space-y-4">
                {plan.nextStepItems.map((item, index) => (
                  <li key={item} className="flex gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-[#d9c39c]">{index + 1}</span>
                    <span className="text-sm leading-7 text-[#d0c8ba]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 sm:p-7"><div className="eyebrow">{t.quietReminder}</div><p className="display-type mt-4 text-[2rem] leading-none text-[#efe6d7]">{plan.calmPrompt}</p></Card>
            <div className="rounded-[28px] border border-white/8 bg-black/10 p-6 text-sm leading-7 text-[#a8a091]">{t.reminderBody}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
