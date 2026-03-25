import { cn } from '@/lib/utils/cn';

export function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={cn(
            'h-[3px] flex-1 rounded-full transition-colors duration-300',
            index < current ? 'bg-[#93a0bc]' : index === current ? 'bg-[#d9c39c]' : 'bg-white/10',
          )}
        />
      ))}
    </div>
  );
}
