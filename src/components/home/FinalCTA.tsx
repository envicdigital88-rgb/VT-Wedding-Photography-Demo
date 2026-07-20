








import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, TextReveal } from '../ui/Reveal';
import { LinkButton } from '../ui/Button';
import { IMAGES } from '../../data/images';

export function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative py-28 md:py-40">
        <img
          src={IMAGES.beachKiss}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-charcoal/80" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.4em] text-champagne font-sans">
              Your Story Awaits
            </span>
          </Reveal>
          <h2 className="mt-6 font-display font-medium text-4xl sm:text-5xl md:text-6xl text-warmwhite leading-tight">
            <TextReveal text="Let's Tell Your Love Story Together" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-7 text-warmwhite/65 font-sans font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Reserve your wedding date today and let us create timeless memories you'll treasure
              forever.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-11">
              <LinkButton to="/contact" variant="solid">
                Reserve Your Date
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}