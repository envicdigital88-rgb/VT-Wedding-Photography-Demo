








import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, TextReveal } from '../ui/Reveal';
import { LinkButton } from '../ui/Button';
import { ColorRevealImage } from '../ui/ColorRevealImage';
import { IMAGES } from '../../data/images';

export function AboutPreview() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage: `url(${IMAGES.thailandBoatLounge})`,
        backgroundBlendMode: 'multiply'
      }}>
      <div className="absolute inset-0 bg-charcoal/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/90 pointer-events-none" />
      <div className="mx-auto relative max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative">
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[1.25rem] shadow-2xl shadow-black/20">
            <ColorRevealImage
              src={IMAGES.thailandBoatLounge}
              alt="Couple sharing an intimate moment on a longtail boat"
              loading="lazy"
              wrapperClassName="w-full"
              className="w-full aspect-[4/5] object-cover" />

            {/* Blend image edges into the charcoal section */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-charcoal via-transparent to-charcoal/80" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-charcoal/40 via-transparent to-transparent" />
          </motion.div>
          <div className="absolute -bottom-6 -right-4 sm:-right-6 w-40 h-52 sm:w-48 sm:h-60 border border-champagne/30 hidden sm:block" />
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
