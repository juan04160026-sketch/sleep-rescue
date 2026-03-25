import { Card } from '@/components/shared/Card';
import type { PlanSection } from '@/types/plan';

export function PlanSectionCard({
  section,
  index,
  eyebrow,
}: {
  section: PlanSection;
  index: number;
  eyebrow: string;
}) {
  return (
    <Card className="p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[92px_minmax(0,1fr)]">
        <div className="text-[0.72rem] uppercase tracking-[0.34em] text-[#8f897d]">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="display-type mt-3 text-3xl leading-none text-[#f4edde] sm:text-[2.35rem]">{section.title}</h2>
          <ul className="mt-6 space-y-4">
            {section.items.map((item, itemIndex) => (
              <li key={item.label} className="flex gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-[#d9c39c]">
                  {itemIndex + 1}
                </span>
                <span className="text-base leading-7 text-[#d0c8ba]">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
