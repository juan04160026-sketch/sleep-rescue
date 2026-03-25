import type { Question } from '@/types/flow';
import { cn } from '@/lib/utils/cn';

export function QuestionCard({
  question,
  value,
  onSelect,
  step,
  total,
  questionLabel,
}: {
  question: Question;
  value?: string;
  onSelect: (value: string) => void;
  step: number;
  total: number;
  questionLabel: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          <div className="eyebrow">{questionLabel} {String(step + 1).padStart(2, '0')}</div>
          <h2 className="display-type mt-3 text-[clamp(2rem,8vw,4rem)] leading-[0.96] text-[#f4edde] sm:mt-4 sm:leading-none">{question.title}</h2>
          {question.helper ? <p className="mt-4 text-base leading-7 text-[#b6af9f]">{question.helper}</p> : null}
        </div>
        <div className="text-sm text-[#8f897d]">{step + 1} / {total}</div>
      </div>

      <div className="mt-8 grid gap-3 sm:mt-10">
        {question.options.map((option, index) => {
          const active = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={cn(
                'group rounded-[24px] border px-4 py-4 text-left transition duration-200 sm:rounded-[28px] sm:px-6 sm:py-5',
                active ? 'border-[#d9c39c]/40 bg-[#161a22] text-[#f8f1e6] shadow-[0_16px_50px_rgba(0,0,0,0.2)]' : 'border-white/8 bg-black/10 text-[#d3ccbf] hover:border-white/16 hover:bg-white/[0.03]',
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <span className={cn('mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs uppercase tracking-[0.22em]', active ? 'border-[#d9c39c]/35 bg-[#d9c39c]/10 text-[#d9c39c]' : 'border-white/10 bg-white/[0.02] text-[#8f897d]')}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="text-base font-medium text-inherit">{option.label}</div>
                    {option.hint ? <div className="mt-2 text-sm text-[#9a9385]">{option.hint}</div> : null}
                  </div>
                </div>
                <span className={cn('mt-1 h-3.5 w-3.5 rounded-full border transition-colors duration-200', active ? 'border-[#d9c39c] bg-[#d9c39c]' : 'border-white/18 bg-transparent')} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
