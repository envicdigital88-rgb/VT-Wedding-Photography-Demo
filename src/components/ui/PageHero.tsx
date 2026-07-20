





import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from './Reveal';

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ image, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden flex items-center justify-center">
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/60" />

      <div className="relative z-10 text-center px-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex items-center justify-center gap-3 mb-5">
          
          <span className="h-px w-8 bg-champagne/60" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-sans">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-champagne/60" />
        </motion.div>
        <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-warmwhite leading-tight">
          <TextReveal text={title} delay={0.3} />
        </h1>
        {subtitle &&
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-5 max-w-xl mx-auto text-warmwhite/60 font-sans font-light">
          
            {subtitle}
          </motion.p>
        }
      </div>
    </section>);

}