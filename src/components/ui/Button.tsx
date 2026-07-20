


import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Variant = 'solid' | 'outline' | 'ghost';

interface CommonProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const base =
'group relative inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full text-[11px] font-sans font-semibold uppercase tracking-[0.24em] transition-all duration-500 ease-luxe overflow-hidden ring-1 ring-white/10';

const variants: Record<Variant, string> = {
  solid:
  'bg-gradient-to-r from-champagne via-[#f7d893] to-champagne text-charcoal shadow-[0_16px_48px_rgba(218,187,108,0.18)] hover:shadow-[0_20px_60px_rgba(218,187,108,0.24)]',
  outline:
  'border border-white/20 bg-white/5 text-warmwhite hover:border-champagne hover:text-champagne hover:bg-white/15',
  ghost: 'text-warmwhite/80 hover:text-champagne'
};

function Inner({ children }: {children: React.ReactNode;}) {
  return <span className="relative z-10 flex items-center gap-2">{children}</span>;
}

export function LinkButton({
  to,
  children,
  variant = 'solid',
  className
}: CommonProps & {to: string;}) {
  return (
    <Link to={to} className={twMerge(base, variants[variant], className)}>
      <Inner>{children}</Inner>
    </Link>);

}

export function ActionButton({
  children,
  variant = 'solid',
  className,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={twMerge(base, variants[variant], className)} {...rest}>
      <Inner>{children}</Inner>
    </button>);

}