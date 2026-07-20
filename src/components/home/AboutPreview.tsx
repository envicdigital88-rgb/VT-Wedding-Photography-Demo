








import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, TextReveal } from '../ui/Reveal';
import { LinkButton } from '../ui/Button';
import { IMAGES } from '../../data/images';

export function AboutPreview() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative">
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden">
            
            <img
              src={IMAGES.hennaHands}
              alt="Close detail of a bride's henna-adorned hands"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover" />
            
          </motion.div>
          <div className="absolute -bottom-6 -right-4 sm:-right-6 w-40 h-52 sm:w-48 sm:h-60 border border-champagne/30 hidden sm:block" />
          <div className="absolute -top-5 -left-4 glass px-5 py-3 hidden md:block animate-float">
            <span className="font-display text-2xl text-champagne">8+</span>
            <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-warmwhite/60">
              Years
            </span>
          </div>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-champagne/60" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-sans">
                Our Story
              </span>
            </div>
          </Reveal>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-warmwhite leading-[1.15]">
            <TextReveal text="Every Love Story Deserves to Be Remembered Beautifully" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-7 text-warmwhite/60 font-sans font-light leading-relaxed text-base md:text-lg">
              At VT Weddings, we believe every wedding is a once-in-a-lifetime story worth
              preserving with elegance and emotion. Our team combines artistic photography with
              cinematic filmmaking to capture genuine moments that you'll cherish forever.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10">
              <LinkButton to="/about" variant="outline">
                Learn More
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}