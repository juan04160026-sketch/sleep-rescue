'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useEffect, useState } from 'react';
import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { buttonStyles } from '@/components/shared/Button';
import { getScenarioList, uiText } from '@/lib/i18n/messages';
import { useLocale } from '@/lib/i18n/locale';
import { loadLatestFlowDraft, loadPlan } from '@/lib/storage/session-plan';
import type { ScenarioKey } from '@/types/flow';
import { ScenarioCard } from './ScenarioCard';

type ResumeState =
  | {
      kind: 'draft';
      scenario: ScenarioKey;
    }
  | {
      kind: 'plan';
      scenario: ScenarioKey;
    }
  | null;

export function HeroScenarioPicker() {
  const { locale } = useLocale();
  const t = uiText[locale].home;
  const scenarioList = getScenarioList(locale);
  const [resumeState, setResumeState] = useState<ResumeState>(null);

  useEffect(() => {
    const plan = loadPlan();
    const draft = loadLatestFlowDraft();

    if (draft && (!plan || draft.updatedAt > (plan.updatedAt ?? 0))) {
      setResumeState({ kind: 'draft', scenario: draft.scenario });
      return;
    }

    if (plan) {
      setResumeState({ kind: 'plan', scenario: plan.scenario });
      return;
    }

    setResumeState(null);
  }, []);

  const resumeHref = resumeState ? (resumeState.kind === 'draft' ? `/flow/${resumeState.scenario}` : '/plan') : null;
  const resumeTitle = resumeState ? (resumeState.kind === 'draft' ? t.resumeDraftTitle : t.resumePlanTitle) : null;
  const resumeBody = resumeState ? (resumeState.kind === 'draft' ? t.resumeDraftBody : t.resumePlanBody) : null;
  const resumeCta = resumeState ? (resumeState.kind === 'draft' ? t.resumeDraftCta : t.resumePlanCta) : null;

  return (
    <section className="overflow-hidden pb-14 pt-8 sm:pb-24 sm:pt-14">
      <Container className="max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="display-type mt-5 text-[clamp(2.65rem,10vw,6.25rem)] leading-[0.94] text-[#f4edde] sm:mt-6 sm:leading-[0.92]">{t.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#c0bbaf] sm:mt-6 sm:text-lg sm:leading-8">{t.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="#scenarios" className={buttonStyles({ variant: 'solid', size: 'lg', className: 'w-full sm:w-auto' })}>{t.ctaStart}</Link>
              <Link href="/calm" className={buttonStyles({ variant: 'ghost', size: 'lg', className: 'w-full sm:w-auto' })}>{t.ctaCalm}</Link>
            </div>

            {resumeState && resumeHref && resumeTitle && resumeBody && resumeCta ? (
              <Card className="mt-6 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-xl">
                    <div className="eyebrow">{t.resumeEyebrow}</div>
                    <h2 className="display-type mt-4 text-[1.8rem] leading-[0.98] text-[#f4edde] sm:text-[2.1rem]">{resumeTitle}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#bdb5a8] sm:text-base">{resumeBody}</p>
                  </div>
                  <Link href={resumeHref as Route} className={buttonStyles({ variant: 'ghost', size: 'lg', className: 'w-full sm:w-auto' })}>{resumeCta}</Link>
                </div>
              </Card>
            ) : null}
          </div>

          <Card className="overflow-hidden p-6 sm:p-8">
            <div className="eyebrow">{t.protocolEyebrow}</div>
            <ol className="mt-6 space-y-6">
              {t.protocolSteps.map((step, index) => (
                <li key={step.label} className="flex gap-4 border-t border-white/8 pt-6 first:border-t-0 first:pt-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium text-[#d9c39c]">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <div className="text-base font-medium text-[#f2ebdd]">{step.label}</div>
                    <p className="mt-2 text-sm leading-7 text-[#b8b1a3]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="soft-divider mt-8" />
            <p className="mt-6 text-sm leading-7 text-[#a8a091]">{t.protocolNote}</p>
          </Card>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:mt-18 sm:gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="eyebrow">{t.chooseEyebrow}</div>
            <h2 className="display-type mt-3 text-[clamp(2.1rem,8vw,4rem)] leading-[0.96] text-[#f4edde] sm:mt-4 sm:leading-none">{t.chooseTitle}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#ada596] sm:text-base">{t.chooseIntro}</p>
        </div>

        <div id="scenarios" className="mt-8 space-y-4 scroll-mt-28">
          {scenarioList.map((scenario, index) => (
            <ScenarioCard key={scenario.key} scenario={scenario} index={index} ctaLabel={t.scenarioCta} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
          {t.reassurance.map((item, index) => (
            <Card key={item.title} className="p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#d9c39c]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="eyebrow">Sleep Rescue</div>
              </div>
              <h3 className="display-type mt-5 text-[1.7rem] leading-[0.98] text-[#f4edde] sm:text-[1.95rem]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#bdb5a8] sm:text-base">{item.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-6 sm:p-8">
            <div className="eyebrow">{t.faqEyebrow}</div>
            <h2 className="display-type mt-4 text-[clamp(2rem,7vw,3.7rem)] leading-[0.96] text-[#f4edde] sm:leading-none">{t.faqTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#c0bbaf]">{t.faqIntro}</p>
          </Card>

          <div className="space-y-4">
            {t.faqItems.map((item, index) => (
              <Card key={item.question} className="p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#d9c39c]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#f2ebdd] sm:text-lg">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#bdb5a8] sm:text-base">{item.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
