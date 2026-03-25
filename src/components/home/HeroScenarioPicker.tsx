'use client';

import Link from 'next/link';
import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { buttonStyles } from '@/components/shared/Button';
import { getScenarioList, uiText } from '@/lib/i18n/messages';
import { useLocale } from '@/lib/i18n/locale';
import { ScenarioCard } from './ScenarioCard';

export function HeroScenarioPicker() {
  const { locale } = useLocale();
  const t = uiText[locale].home;
  const scenarioList = getScenarioList(locale);

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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {t.reassurance.map((item) => (
            <div key={item.title} className="border-t border-white/10 pt-4">
              <div className="text-[0.72rem] uppercase tracking-[0.34em] text-[#8f897d]">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-[#b5ae9f]">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
