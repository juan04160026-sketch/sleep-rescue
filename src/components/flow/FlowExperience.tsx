'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, buttonStyles } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { getQuestions, getScenarioMap, uiText } from '@/lib/i18n/messages';
import { useLocale } from '@/lib/i18n/locale';
import { savePlan } from '@/lib/storage/session-plan';
import type { FlowAnswers, ScenarioKey } from '@/types/flow';
import { ProgressDots } from './ProgressDots';
import { QuestionCard } from './QuestionCard';

export function FlowExperience({ scenario }: { scenario: ScenarioKey }) {
  const router = useRouter();
  const { locale } = useLocale();
  const meta = getScenarioMap(locale)[scenario];
  const questions = getQuestions(locale)[scenario];
  const text = uiText[locale].flow;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FlowAnswers>({});

  const currentQuestion = questions[step];
  const currentValue = currentQuestion ? answers[currentQuestion.id] : undefined;
  const ready = Boolean(currentValue);

  const helperCopy = useMemo(() => (scenario === 'reset-schedule' ? text.helperReset : text.helperDefault), [scenario, text.helperDefault, text.helperReset]);
  const quietNotes = text.quietNotes[scenario];

  function handleNext() {
    if (!currentQuestion || !currentValue) return;
    const nextAnswers = { ...answers, [currentQuestion.id]: currentValue };
    if (step === questions.length - 1) {
      savePlan({ scenario, answers: nextAnswers });
      router.push('/plan' as Route);
      return;
    }
    setAnswers(nextAnswers);
    setStep((value) => value + 1);
  }

  if (!currentQuestion) return null;

  return (
    <section className="py-10 sm:py-14">
      <Container className="max-w-6xl">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <aside className="order-2 self-start xl:order-1 xl:sticky xl:top-28">
            <Card className="p-6 sm:p-8">
              <div className="eyebrow">{meta.windowLabel}</div>
              <h1 className="display-type mt-4 text-[clamp(2.35rem,9vw,4.75rem)] leading-[0.96] text-[#f4edde] sm:mt-5 sm:leading-[0.94]">{meta.title}</h1>
              <p className="mt-5 text-base leading-8 text-[#c0bbaf]">{meta.lead}</p>

              <div className="mt-8 rounded-[28px] border border-white/8 bg-black/10 p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="eyebrow">{text.progress}</div>
                    <div className="mt-3 text-3xl font-medium text-[#f4edde]">{String(step + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="text-sm text-[#8f897d]">{text.totalLabel} {questions.length}</div>
                </div>
                <div className="mt-4"><ProgressDots current={step} total={questions.length} /></div>
              </div>

              <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                <div>
                  <div className="eyebrow">{text.approach}</div>
                  <p className="mt-3 text-sm leading-7 text-[#b5ae9f]">{helperCopy}</p>
                </div>
                {quietNotes.map((note) => (
                  <p key={note} className="hidden border-t border-white/8 pt-4 text-sm leading-7 text-[#a59d8f] sm:block">{note}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/" className={buttonStyles({ variant: 'ghost' })}>{text.startOver}</Link>
                <span className="text-sm text-[#8f897d]">{text.bestFit}</span>
              </div>
            </Card>
          </aside>

          <Card className="order-1 p-5 sm:order-2 sm:p-8 lg:p-10">
            <QuestionCard question={currentQuestion} value={currentValue} onSelect={(value) => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))} step={step} total={questions.length} questionLabel={text.question} />
            <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pt-6">
              <button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} className={buttonStyles({ variant: 'ghost' })} disabled={step === 0}>{text.back}</button>
              <div className="text-sm text-[#8f897d]">{ready ? text.selectionSaved : text.chooseClosest}</div>
              <Button onClick={handleNext} disabled={!ready} size="lg" className="w-full sm:w-auto">{step === questions.length - 1 ? text.buildPlan : text.continue}</Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
