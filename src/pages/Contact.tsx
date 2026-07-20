










import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneIcon,
  InstagramIcon,
  MapPinIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon } from
'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ActionButton } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { IMAGES } from '../data/images';

const FAQS = [
{
  q: 'How early should we book?',
  a: 'We recommend booking several months in advance to secure your preferred date.'
},
{
  q: 'Do you travel outside Colombo?',
  a: 'Yes. We provide wedding coverage across Sri Lanka.'
},
{
  q: 'Do you offer drone coverage?',
  a: 'Yes. Drone photography and videography are available depending on venue permissions and weather conditions.'
},
{
  q: 'How long does editing take?',
  a: 'Delivery timelines will be discussed during consultation.'
}];


const FIELDS = [
{ name: 'name', label: 'Name', type: 'text' },
{ name: 'email', label: 'Email', type: 'email' },
{ name: 'phone', label: 'Phone', type: 'tel' },
{ name: 'date', label: 'Wedding Date', type: 'date' },
{ name: 'venue', label: 'Venue', type: 'text' }] as
const;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main>
      <PageHero
        image={IMAGES.beachLaugh}
        eyebrow="Contact"
        title="Reserve Your Wedding Date"
        subtitle="We would love to hear about your special day and how we can create unforgettable memories together." />
      

      {/* Form + details */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-5 gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl text-warmwhite">Tell Us Your Story</h2>
              <p className="mt-4 text-warmwhite/60 font-sans font-light leading-relaxed max-w-lg">
                Get in touch to discuss your wedding plans, availability, and how we can bring your
                vision to life.
              </p>
            </Reveal>

            <form onSubmit={submit} className="mt-10 grid sm:grid-cols-2 gap-6">
              {FIELDS.map((f) =>
              <div key={f.name} className={f.name === 'venue' ? 'sm:col-span-2' : ''}>
                  <label
                  htmlFor={f.name}
                  className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans mb-3">
                  
                    {f.label}
                  </label>
                  <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required={f.name === 'name' || f.name === 'email'}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-warmwhite font-sans font-light placeholder-warmwhite/30 focus:border-champagne focus:outline-none transition-colors duration-300 [color-scheme:dark]" />
                
                </div>
              )}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans mb-3">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-warmwhite font-sans font-light placeholder-warmwhite/30 focus:border-champagne focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your wedding..." />
                
              </div>
              <div className="sm:col-span-2 mt-2">
                <ActionButton type="submit" variant="solid" className="w-full sm:w-auto">
                  {sent ?
                  <>
                      <CheckIcon className="w-4 h-4" /> Message Sent
                    </> :

                  'Send Enquiry'
                  }
                </ActionButton>
              </div>
            </form>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="glass p-8 md:p-10 h-full flex flex-col justify-center gap-8">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-champagne font-sans mb-5">
                  Call Us
                </h3>
                <a href="tel:0754197970" className="flex items-center gap-3 text-warmwhite/80 hover:text-champagne transition-colors font-sans font-light text-lg">
                  <PhoneIcon className="w-5 h-5 text-champagne" /> 075 419 7970
                </a>
                <a href="tel:0766668188" className="mt-3 flex items-center gap-3 text-warmwhite/80 hover:text-champagne transition-colors font-sans font-light text-lg">
                  <PhoneIcon className="w-5 h-5 text-champagne" /> 076 666 8188
                </a>
              </div>
              <div className="hairline" />
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-champagne font-sans mb-5">
                  Follow
                </h3>
                <a
                  href="https://www.instagram.com/vt_creative_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-warmwhite/80 hover:text-champagne transition-colors font-sans font-light text-lg">
                  
                  <InstagramIcon className="w-5 h-5 text-champagne" /> @vt_creative_studio
                </a>
              </div>
              <div className="hairline" />
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-champagne font-sans mb-5">
                  Coverage
                </h3>
                <p className="flex items-start gap-3 text-warmwhite/80 font-sans font-light text-lg">
                  <MapPinIcon className="w-5 h-5 text-champagne mt-1" /> Weddings across Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-ink pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative aspect-[21/9] w-full overflow-hidden border border-white/10 flex items-center justify-center bg-charcoal">
            <img
              src={IMAGES.gardenWalk}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale" />
            
            <div className="relative z-10 text-center">
              <MapPinIcon className="w-10 h-10 text-champagne mx-auto mb-4" />
              <p className="font-display text-2xl text-warmwhite">Google Maps</p>
              <p className="mt-1 text-sm text-warmwhite/50 font-sans font-light">
                Location map placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-charcoal pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    aria-expanded={isOpen}>
                    
                    <span
                      className={`font-display text-xl md:text-2xl transition-colors duration-300 ${
                      isOpen ? 'text-champagne' : 'text-warmwhite group-hover:text-champagne'}`
                      }>
                      
                      {f.q}
                    </span>
                    <span className="shrink-0 text-champagne">
                      {isOpen ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden">
                      
                        <p className="pb-6 text-warmwhite/60 font-sans font-light leading-relaxed max-w-2xl">
                          {f.a}
                        </p>
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>);

            })}
          </div>
        </div>
      </section>
    </main>);

}