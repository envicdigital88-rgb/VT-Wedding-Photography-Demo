












import React from 'react';
import { motion } from 'framer-motion';
import {
  FilmIcon,
  SparklesIcon,
  CameraIcon,
  PlaneIcon,
  BookOpenIcon,
  ClockIcon } from
'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const FEATURES = [
{
  icon: FilmIcon,
  title: 'Cinematic Storytelling',
  text: 'Films that unfold like cinema — every glance and vow woven into a lasting narrative.'
},
{
  icon: SparklesIcon,
  title: 'Luxury Photo Editing',
  text: 'Hand-finished, editorial-grade retouching that elevates every single frame.'
},
{
  icon: CameraIcon,
  title: 'Professional Team',
  text: 'A seasoned crew of photographers and cinematographers devoted to your day.'
},
{
  icon: PlaneIcon,
  title: 'Drone Coverage',
  text: 'Breathtaking aerial perspectives that add scale and grandeur to your story.'
},
{
  icon: BookOpenIcon,
  title: 'Premium Albums',
  text: 'Handcrafted heirloom albums designed to be treasured for generations.'
},
{
  icon: ClockIcon,
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
        

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i % 3 * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-charcoal p-9 md:p-11 transition-colors duration-500 hover:bg-ink">
                
                <div className="flex items-center justify-center w-14 h-14 border border-champagne/30 text-champagne mb-7 transition-all duration-500 group-hover:bg-champagne group-hover:text-charcoal">
                  <Icon className="w-6 h-6" strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-2xl text-warmwhite mb-3">{f.title}</h3>
                <p className="text-sm font-sans font-light leading-relaxed text-warmwhite/55">
                  {f.text}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}