






import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, PaletteIcon, GemIcon, AwardIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal, TextReveal } from '../components/ui/Reveal';
import { Stats } from '../components/home/Stats';
import { FinalCTA } from '../components/home/FinalCTA';
import { IMAGES } from '../data/images';

const VALUES = [
{ icon: HeartIcon, title: 'Passion', text: 'We pour genuine love into every frame and every film we create.' },
{ icon: PaletteIcon, title: 'Creativity', text: 'An artistic eye that transforms fleeting moments into art.' },
{ icon: GemIcon, title: 'Authenticity', text: 'Real emotions, honestly captured — never staged, always true.' },
{ icon: AwardIcon, title: 'Excellence', text: 'Uncompromising quality from first consultation to final delivery.' }];


const TEAM = [
{ role: 'Lead Photographer', image: IMAGES.brideBW },
{ role: 'Lead Cinematographer', image: IMAGES.beachSilhouette },
{ role: 'Creative Editor', image: IMAGES.hennaHands },
{ role: 'Drone Operator', image: IMAGES.chaseTide }];


const PROCESS = [
{ no: '01', title: 'Consultation', text: 'We begin by listening — understanding your vision, style and story.' },
{ no: '02', title: 'Planning', text: 'A tailored plan covering timelines, locations and creative direction.' },
{ no: '03', title: 'Wedding Day Coverage', text: 'Discreet, artful coverage capturing every genuine moment.' },
{ no: '04', title: 'Editing', text: 'Hand-finished retouching and cinematic edits crafted with care.' },
{ no: '05', title: 'Delivery', text: 'Your gallery, films and heirloom albums, beautifully delivered.' }];


export function About() {
  return (
    <main>
      <PageHero
        image={IMAGES.brideGown}
        eyebrow="About VT Weddings"
        title="Our Story"
        subtitle="A passion for capturing love, emotion and unforgettable memories." />
      

      {/* Story */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-champagne/60" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-sans">
                  Who We Are
                </span>
              </div>
            </Reveal>
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-warmwhite leading-[1.15]">
              <TextReveal text="Preserving Emotions for Generations" />
            </h2>
            <Reveal delay={0.2}>
              <div className="mt-7 space-y-5 text-warmwhite/60 font-sans font-light leading-relaxed">
                <p>
                  Every wedding tells a unique story filled with love, emotion, and unforgettable
                  memories. VT Weddings was founded with a passion for capturing those genuine
                  moments through timeless photography and cinematic films.
                </p>
                <p>
                  Our goal is not simply to take photographs, but to preserve emotions that couples
                  can relive for generations. Every smile, every glance, every joyful tear is
                  captured with creativity, attention to detail, and artistic excellence.
                </p>
              </div>
            </Reveal>
          </div>
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden">
            
            <img
              src={IMAGES.mirunAbi}
              alt="Intimate portrait of a couple on their wedding day"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover" />
            
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-6">
          {[
          {
            label: 'Our Mission',
            text: 'To create timeless wedding memories through exceptional photography and cinematic storytelling while delivering an unforgettable client experience from beginning to end.'
          },
          {
            label: 'Our Vision',
            text: "To become one of Sri Lanka's most trusted luxury wedding photography and cinematography studios, recognized for creativity, professionalism, and storytelling excellence."
          }].
          map((b, i) =>
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/10 p-10 md:p-12 hover:border-champagne/40 transition-colors duration-500">
            
              <span className="text-[11px] uppercase tracking-[0.35em] text-champagne font-sans">
                {b.label}
              </span>
              <p className="mt-6 font-serif text-xl md:text-2xl leading-relaxed text-warmwhite/85">
                {b.text}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What Guides Us" title="Our Values" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group text-center border border-white/10 p-9 hover:bg-ink transition-colors duration-500">
                  
                  <div className="mx-auto flex items-center justify-center w-14 h-14 border border-champagne/30 text-champagne mb-6 transition-all duration-500 group-hover:bg-champagne group-hover:text-charcoal">
                    <Icon className="w-6 h-6" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-2xl text-warmwhite mb-3">{v.title}</h3>
                  <p className="text-sm font-sans font-light text-warmwhite/55 leading-relaxed">
                    {v.text}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="The People Behind the Lens" title="Meet Our Team" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) =>
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group">
              
                <div className="overflow-hidden aspect-[3/4] relative">
                  <img
                  src={m.image}
                  alt={m.role}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-all duration-[1.2s] ease-luxe group-hover:grayscale-0 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-display text-xl text-warmwhite">Team Member</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-champagne font-sans">
                    {m.role}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading eyebrow="How We Work" title="Our Process" />
          <div className="mt-16 relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-12">
              {PROCESS.map((p, i) =>
              <motion.div
                key={p.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative pl-16 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 sm:items-center ${
                i % 2 === 0 ? '' : 'sm:[direction:rtl]'}`
                }>
                
                  <div
                  className={`sm:[direction:ltr] ${
                  i % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:pl-12'}`
                  }>
                  
                    <span className="font-display text-4xl text-champagne/40">{p.no}</span>
                    <h3 className="mt-1 font-display text-2xl text-warmwhite">{p.title}</h3>
                    <p className="mt-2 text-sm font-sans font-light text-warmwhite/55 leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                  <span className="absolute left-6 sm:left-1/2 top-2 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 w-3 h-3 rounded-full bg-champagne ring-4 ring-charcoal" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <FinalCTA />
    </main>);

}