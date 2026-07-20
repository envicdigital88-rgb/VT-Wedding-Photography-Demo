












import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const FEATURES = [
{
  title: 'Cinematic Storytelling',
  text: 'Films that unfold like cinema — every glance and vow woven into a lasting narrative.'
},
{
  title: 'Luxury Photo Editing',
  text: 'Hand-finished, editorial-grade retouching that elevates every single frame.'
},
{
  title: 'Professional Team',
  text: 'A seasoned crew of photographers and cinematographers devoted to your day.'
},
{
  title: 'Drone Coverage',
  text: 'Breathtaking aerial perspectives that add scale and grandeur to your story.'
},
{
  title: 'Premium Albums',
  text: 'Handcrafted heirloom albums designed to be treasured for generations.'
},
{
  title: 'Fast Delivery',
  text: 'Meticulously edited galleries and films delivered with reassuring speed.'
}];


export function WhyChoose() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose VT Weddings"
          title="Crafted for Couples Who Want More" />
        

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 hover:bg-white/10">
              <div className="mb-6 inline-flex h-12 min-w-[3rem] items-center justify-center rounded-2xl bg-champagne/10 text-champagne font-semibold text-sm">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-2xl text-warmwhite mb-3">
                {f.title}
              </h3>
              <p className="text-sm font-sans font-light leading-relaxed text-warmwhite/65">
                {f.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>);

}