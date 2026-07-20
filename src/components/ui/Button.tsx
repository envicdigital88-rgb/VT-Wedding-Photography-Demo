


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
'group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] font-sans font-medium uppercase tracking-[0.28em] transition-all duration-500 ease-luxe overflow-hidden';

const variants: Record<Variant, string> = {
  solid:
  'bg-champagne text-charcoal hover:bg-warmwhite',
  outline:
  'border border-white/25 text-warmwhite hover:border-champagne hover:text-champagne',
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