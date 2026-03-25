import { cn } from '@/lib/utils/cn';
import type { PropsWithChildren } from 'react';

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('panel-surface rounded-[32px]', className)}>{children}</div>;
}
