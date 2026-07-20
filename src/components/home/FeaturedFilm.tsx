


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, XIcon } from 'lucide-react';
import { Reveal, TextReveal } from '../ui/Reveal';
import { IMAGES } from '../../data/images';

export function FeaturedFilm() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[70vh] min-h-[480px] w-full">
        <img
          src={IMAGES.beachLift}
          alt="Featured wedding film still — couple backlit on the beach"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-charcoal/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-sans">
              Featured Wedding Film
            </span>
          </Reveal>
          <h2 className="mt-5 font-display font-medium text-3xl sm:text-5xl md:text-6xl text-warmwhite max-w-3xl leading-tight">
            <TextReveal text="Echoes of the Sea" />
          </h2>

          <motion.button
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 relative flex items-center justify-center w-20 h-20 rounded-full group"
            aria-label="Play featured wedding film">
            
            <span className="absolute inset-0 rounded-full border border-champagne/50 group-hover:scale-125 transition-transform duration-500" />
            <span className="absolute inset-0 rounded-full bg-champagne/20 animate-ping" />
            <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-champagne text-charcoal transition-transform duration-300 group-hover:scale-105">
              <PlayIcon className="w-6 h-6 ml-0.5" fill="currentColor" />
            </span>
          </motion.button>

          <Reveal delay={0.2}>
            <p className="mt-8 text-warmwhite/60 font-sans font-light max-w-md">
              A cinematic wedding film capturing raw emotion, laughter and the sound of the waves.
            </p>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-5"
          onClick={() => setOpen(false)}>
          
            <button
            className="absolute top-6 right-6 text-warmwhite/70 hover:text-champagne transition-colors"
            aria-label="Close film">
            
              <XIcon className="w-8 h-8" />
            </button>
            <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl aspect-video glass flex flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}>
            
              <PlayIcon className="w-14 h-14 text-champagne" />
              <p className="font-display text-2xl text-warmwhite">Film Preview Coming Soon</p>
              <p className="text-sm text-warmwhite/50 font-sans font-light">
                Your wedding film reel will play here.
              </p>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}