'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, buttonStyles } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { trackEvent } from '@/lib/analytics/gtag';
import { getQuestions, getScenarioMap, getScenarioSeoContent, uiText } from '@/lib/i18n/messages';
import { useLocale } from '@/lib/i18n/locale';
import { clearFlowDraft, loadFlowDraft, loadPlan, saveFlowDraft, savePlan } from '@/lib/storage/session-plan';
import type { FlowAnswers, ScenarioKey } from '@/types/flow';
import { ProgressDots } from './ProgressDots';
import { QuestionCard } from './QuestionCard';

export function FlowExperience({ scenario }: { scenario: ScenarioKey }) {
  const router = useRouter();
  const { locale } = useLocale();
  const meta = getScenarioMap(locale)[scenario];
  const seo = getScenarioSeoContent(locale, scenario);
  const questions = getQuestions(locale)[scenario];
  const text = uiText[locale].flow;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FlowAnswers>({});
  const [hydrated, setHydrated] = useState(false);
  const [restored, setRestored] = useState(false);
  const [hasPlan, setHasPlan] = useState(false);

  useEffect(() => {
    const draft = loadFlowDraft(scenario);
    const existingPlan = loadPlan();
    setHasPlan(Boolean(existingPlan));

    if (draft) {
      setAnswers(draft.answers);
      setStep(Math.min(draft.step, Math.max(questions.length - 1, 0)));
      setRestored(true);
    } else {
      setAnswers({});
      setStep(0);
      setRestored(false);
    }
    setHydrated(true);
  }, [questions.length, scenario]);

  useEffect(() => {
    if (!hydrated) return;

    const hasProgress = Object.keys(answers).length > 0 || step > 0;
    if (!hasProgress) {
      clearFlowDraft(scenario);
      return;
    }

    saveFlowDraft({
      scenario,
      step,
      answers,
      updatedAt: Date.now(),
    });
  }, [answers, hydrated, scenario, step]);

  const currentQuestion = questions[step];
  const currentValue = currentQuestion ? answers[currentQuestion.id] : undefined;
  const ready = Boolean(currentValue);

  const helperCopy = useMemo(() => (scenario === 'reset-schedule' ? text.helperReset : text.helperDefault), [scenario, text.helperDefault, text.helperReset]);
  const quietNotes = text.quietNotes[scenario];

  function handleAnswerSelect(value: string) {
    if (!currentQuestion) return;

    if (currentValue !== value) {
      trackEvent('flow_answer_select', {
        scenario,
        question_id: currentQuestion.id,
        answer_value: value,
        step_number: step + 1,
      });
    }

    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  }

  function handleNext() {
    if (!currentQuestion || !currentValue) return;
    const nextAnswers = { ...answers, [currentQuestion.id]: currentValue };
    if (step === questions.length - 1) {
      trackEvent('flow_complete', {
        scenario,
        answer_count: Object.keys(nextAnswers).length,
        question_count: questions.length,
      });
      clearFlowDraft(scenario);
      savePlan({ scenario, answers: nextAnswers });
      router.push('/plan' as Route);
      return;
    }
    setAnswers(nextAnswers);
    setStep((value) => value + 1);
  }

  function handleReset() {
    clearFlowDraft(scenario);
    setAnswers({});
    setStep(0);
    setRestored(false);
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

              {restored ? (
                <div className="mt-6 rounded-[24px] border border-[#d9c39c]/18 bg-[linear-gradient(180deg,rgba(217,195,156,0.08),rgba(217,195,156,0.03))] p-4 sm:p-5">
                  <div className="text-sm leading-7 text-[#d4cbba]">{text.resumedDraft}</div>
                  <button type="button" onClick={handleReset} className={buttonStyles({ variant: 'subtle', className: 'mt-2 px-0 py-0 text-sm text-[#d9c39c] hover:text-[#f2ebdd]' })}>
                    {text.resetProgress}
                  </button>
                </div>
              ) : null}

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
                {hasPlan ? <Link href="/plan" className={buttonStyles({ variant: 'ghost' })}>{text.backToPlan}</Link> : null}
                <span className="text-sm text-[#8f897d]">{text.bestFit}</span>
              </div>
            </Card>
          </aside>

          <div className="order-1 space-y-4 sm:order-2">
            <Card className="p-5 sm:p-8 lg:p-10">
              <QuestionCard question={currentQuestion} value={currentValue} onSelect={handleAnswerSelect} step={step} total={questions.length} questionLabel={text.question} />
              <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pt-6">
                <button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} className={buttonStyles({ variant: 'ghost' })} disabled={step === 0}>{text.back}</button>
                <div className="text-sm text-[#8f897d]">{ready ? text.selectionSaved : text.chooseClosest}</div>
                <Button onClick={handleNext} disabled={!ready} size="lg" className="w-full sm:w-auto">{step === questions.length - 1 ? text.buildPlan : text.continue}</Button>
              </div>
            </Card>

            <div className="grid gap-4 xl:grid-cols-[1.03fr_0.97fr]">
              <Card className="p-6 sm:p-8">
                <div className="eyebrow">{seo.eyebrow}</div>
                <h2 className="display-type mt-4 text-[clamp(2rem,6vw,3.4rem)] leading-[0.96] text-[#f4edde] sm:leading-none">{seo.title}</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#c0bbaf]">{seo.intro}</p>

                <div className="mt-8 space-y-8">
                  {seo.sections.map((section) => (
                    <section key={section.title} className="border-t border-white/8 pt-6 first:border-t-0 first:pt-0">
                      <h3 className="display-type text-[1.8rem] leading-[0.98] text-[#f4edde]">{section.title}</h3>
                      <div className="mt-4 space-y-4 text-sm leading-7 text-[#bdb5a8] sm:text-base">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </Card>

              <div className="space-y-4">
                {seo.faq.map((item, index) => (
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
          </div>
        </div>
      </Container>
    </section>
  );
}
