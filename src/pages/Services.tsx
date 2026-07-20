








import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { FinalCTA } from '../components/home/FinalCTA';
import { ColorRevealImage } from '../components/ui/ColorRevealImage';
import { SERVICES } from '../data/services';
import { IMAGES } from '../data/images';

export function Services() {
  return (
    <main>
      <PageHero
        image={IMAGES.beachWalkHands}
        eyebrow="Services"
        title="Tailored to Your Story"
        subtitle="Every wedding is unique — our services are crafted to capture every meaningful moment." />
      

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-warmwhite/85">
              Every wedding is unique, and our services are tailored to capture every meaningful
              moment with creativity, elegance, and precision.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-6 md:space-y-8">
          {SERVICES.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group grid md:grid-cols-2 border border-white/10 overflow-hidden hover:border-champagne/40 transition-colors duration-500">
                
                <div className={`overflow-hidden aspect-[4/3] md:aspect-auto ${reversed ? 'md:order-2' : ''}`}>
                  <ColorRevealImage
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    wrapperClassName="w-full h-full transition-transform duration-[1.5s] ease-luxe group-hover:scale-105"
                    className="w-full h-full object-cover" />
                  
                </div>
                <div className="flex flex-col justify-center p-9 md:p-14">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-champagne/60 font-sans">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl text-warmwhite">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-warmwhite/60 font-sans font-light leading-relaxed">
                    {s.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-champagne hover:gap-4 transition-all duration-400">
                    
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>);

          })}
        </div>
      </section>

      <FinalCTA />
    </main>);

}