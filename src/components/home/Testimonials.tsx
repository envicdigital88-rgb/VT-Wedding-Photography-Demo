




import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const TESTIMONIALS = [
{
  quote: 'Every photo brought our wedding day back to life. Absolutely breathtaking.',
  couple: 'Amanda & Kevin'
},
{
  quote:
  'Professional, friendly, and incredibly talented. Our cinematic film exceeded every expectation.',
  couple: 'Sarah & Daniel'
},
{
  quote: 'Choosing VT Weddings was one of the best decisions we made.',
  couple: 'Nadeesha & Charith'
}];


export function Testimonials() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Kind Words" title="Loved by Our Couples" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) =>
          <motion.div
            key={t.couple}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative border border-white/10 bg-charcoal p-9 md:p-10 hover:border-champagne/40 transition-colors duration-500">
            
              <QuoteIcon className="w-9 h-9 text-champagne/40 mb-6" />
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-warmwhite/85 italic">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-6 bg-champagne" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-champagne font-sans">
                  {t.couple}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}