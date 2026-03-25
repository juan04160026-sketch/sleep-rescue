import Link from 'next/link';
import { Card } from '@/components/shared/Card';
import type { ScenarioMeta } from '@/types/flow';

export function ScenarioCard({ scenario, index, ctaLabel }: { scenario: ScenarioMeta; index: number; ctaLabel: string }) {
  return (
    <Link href={`/flow/${scenario.key}`} className="group block h-full">
      <Card className="p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/16 sm:p-7">
        <div className="grid gap-5 lg:grid-cols-[84px_minmax(0,1fr)_220px] lg:items-center">
          <div className="text-[0.72rem] uppercase tracking-[0.34em] text-[#8f897d]">{String(index + 1).padStart(2, '0')}</div>

          <div>
            <div className="flex flex-wrap items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-[#989182]">
              <span>{scenario.windowLabel}</span>
              <span className="text-white/20">/</span>
              <span>{scenario.durationLabel}</span>
            </div>
            <h3 className="display-type mt-3 text-[2rem] leading-[0.95] text-[#f4edde] sm:mt-4 sm:text-[2.35rem] sm:leading-none">{scenario.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c2bbad] sm:text-base">{scenario.description}</p>
            <p className="mt-4 text-sm leading-7 text-[#d9c39c]">{scenario.lead}</p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-end">
            <div className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-[#d9c39c]">{scenario.focusLabel}</div>
            <div className="inline-flex items-center gap-2 text-sm text-[#f2ebdd]">
              {ctaLabel}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
