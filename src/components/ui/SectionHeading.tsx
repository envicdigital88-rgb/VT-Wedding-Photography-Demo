


import React from 'react';
import { Reveal, TextReveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div className={isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'}>
      {eyebrow &&
      <Reveal>
          <div
          className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}>
          
            <span className="h-px w-8 bg-champagne/60" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-sans">
              {eyebrow}
            </span>
            {isCenter && <span className="h-px w-8 bg-champagne/60" />}
          </div>
        </Reveal>
      }
      <h2
        className={`font-display font-medium leading-[1.1] text-3xl sm:text-4xl md:text-5xl ${
        light ? 'text-charcoal' : 'text-warmwhite'}`
        }>
        
        <TextReveal text={title} />
      </h2>
      {description &&
      <Reveal delay={0.15}>
          <p
          className={`mt-6 text-base md:text-lg font-sans font-light leading-relaxed ${
          light ? 'text-charcoal/70' : 'text-warmwhite/60'}`
          }>
          
            {description}
          </p>
        </Reveal>
      }
    </div>);

}