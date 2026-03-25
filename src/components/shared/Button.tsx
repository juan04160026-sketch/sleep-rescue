import { cn } from '@/lib/utils/cn';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'solid' | 'ghost' | 'subtle';
type ButtonSize = 'md' | 'lg';

export function buttonStyles({
  variant = 'solid',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    'inline-flex items-center justify-center rounded-full border font-medium transition duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6d3]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d11]',
    'disabled:cursor-not-allowed disabled:opacity-45',
    size === 'lg' ? 'min-h-12 px-6 py-3.5 text-sm' : 'min-h-11 px-5 py-3 text-sm',
    variant === 'solid' &&
      'border-[#efe2cc]/90 bg-[#efe2cc] text-[#0b0d11] shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:bg-[#f6ead8]',
    variant === 'ghost' &&
      'border-white/10 bg-white/[0.02] text-[#f2ebdd] hover:border-white/18 hover:bg-white/[0.05]',
    variant === 'subtle' && 'border-transparent bg-transparent text-[#b8b1a3] hover:text-[#f2ebdd]',
    className,
  );
}

export function Button({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  }
>) {
  return (
    <button className={buttonStyles({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
