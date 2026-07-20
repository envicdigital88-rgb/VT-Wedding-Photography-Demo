















import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { LinkButton } from '../ui/Button';
import { ColorRevealImage } from '../ui/ColorRevealImage';
import { SERVICES } from '../../data/services';

export function ServicesPreview() {
  const items = SERVICES.slice(0, 6);
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services Crafted Around You"
          description="From intimate engagements to grand celebrations, every service is tailored to your story." />
        

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) =>
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i % 3 * 0.1, ease: [0.16, 1, 0.3, 1] }}>
            
              <Link to="/services" className="group block relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-charcoal/10 aspect-[4/5] shadow-[0_28px_90px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-1 hover:border-champagne/20">
                <ColorRevealImage
                src={s.image}
                alt={s.title}
                loading="lazy"
                wrapperClassName="absolute inset-0 transition-transform duration-[1.4s] ease-luxe group-hover:scale-110"
                className="w-full h-full object-cover rounded-[2.25rem]" />
              
                <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-7 pointer-events-none">
                  <h3 className="font-display text-2xl text-warmwhite">{s.title}</h3>
                  <p className="mt-2 text-sm font-sans font-light text-warmwhite/60 max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-luxe">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-champagne">
                    Explore <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}
        </div>

        <div className="mt-14 text-center">
          <LinkButton to="/services" variant="outline">
            View All Services
          </LinkButton>
        </div>
      </div>
    </section>);

}