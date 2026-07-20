










import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { ColorRevealImage } from '../ui/ColorRevealImage';
import { IMAGES } from '../../data/images';

const STORIES = [
{ image: IMAGES.mirunAbi, couple: 'Mirun & Abi', venue: 'Botanical Gardens, Kandy' },
{ image: IMAGES.garlandCouple, couple: 'Nadeesha & Charith', venue: 'Colombo Grand Estate' },
{ image: IMAGES.echoesSea, couple: 'Sarah & Daniel', venue: 'Krabi Coastline' }];


export function FeaturedStories() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Wedding Stories"
          title="Moments We Have Preserved"
          description="A glimpse into the celebrations we've been honoured to capture." />
        

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STORIES.map((s, i) =>
          <motion.div
            key={s.couple}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
            
              <Link to="/portfolio" className="group block relative overflow-hidden">
                <div className="overflow-hidden aspect-[3/4]">
                  <ColorRevealImage
                  src={s.image}
                  alt={`${s.couple} wedding at ${s.venue}`}
                  loading="lazy"
                  wrapperClassName="w-full h-full transition-transform duration-[1.4s] ease-luxe group-hover:scale-110"
                  className="w-full h-full object-cover" />
                
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent opacity-90 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-7 pointer-events-none">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-luxe">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-champagne font-sans">
                      {s.venue}
                    </span>
                    <div className="mt-2 flex items-end justify-between">
                      <h3 className="font-display text-2xl md:text-3xl text-warmwhite">
                        {s.couple}
                      </h3>
                      <ArrowUpRightIcon className="w-5 h-5 text-warmwhite/0 group-hover:text-champagne transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}