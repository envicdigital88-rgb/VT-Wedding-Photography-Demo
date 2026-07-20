







import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { LinkButton } from '../ui/Button';
import { TextReveal } from '../ui/Reveal';
import { IMAGES } from '../../data/images';

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offset * 0.4}px) scale(1.1)` }}>
        
        <motion.img
          src={IMAGES.garlandCouple}
          alt="A wedding couple posing with floral garlands at sunset"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover" />
        
      </div>

      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-3 mb-8">
          
          <span className="h-px w-10 bg-champagne/70" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-champagne font-sans">
            Premium Wedding Studio · Sri Lanka
          </span>
          <span className="h-px w-10 bg-champagne/70" />
        </motion.div>

        <h1 className="font-display font-medium text-warmwhite leading-[1.05] text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl">
          <TextReveal text="Capturing Timeless" delay={0.6} />
          <br />
          <span className="italic text-champagne">
            <TextReveal text="Love Stories" delay={1} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 max-w-xl text-warmwhite/70 font-sans font-light text-base md:text-lg leading-relaxed">
          
          Luxury wedding photography &amp; cinematic films crafted with passion across Sri Lanka.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-11 flex flex-col sm:flex-row items-center gap-4">
          
          <LinkButton to="/portfolio" variant="solid">
            View Portfolio
          </LinkButton>
          <LinkButton to="/contact" variant="outline">
            Reserve Your Date
          </LinkButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        
        <span className="text-[9px] uppercase tracking-[0.3em] text-warmwhite/40 font-sans">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          
          <ChevronDownIcon className="w-5 h-5 text-champagne" />
        </motion.div>
      </motion.div>
    </section>);

}