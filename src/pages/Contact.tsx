










import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneIcon,
  InstagramIcon,
  MapPinIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon,
  ChevronDownIcon } from
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
  const [currentStep, setCurrentStep] = useState(1);
  const [preferredContact, setPreferredContact] = useState<'email' | 'whatsapp'>('email');
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day');
  const [serviceType, setServiceType] = useState('wedding-photography');
  const [venueType, setVenueType] = useState('indoor');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [hearAbout, setHearAbout] = useState('');

  const SERVICE_TYPES = [
    { key: 'wedding-photography', label: 'Wedding Photography' },
    { key: 'engagement-session', label: 'Engagement Session' },
    { key: 'pre-wedding-shoot', label: 'Pre-Wedding Shoot' },
    { key: 'family-shoot', label: 'Family Shoot' },
    { key: 'maternity-shoot', label: 'Maternity Shoot' },
    { key: 'other', label: 'Other' },
  ];

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const values = {
      name: formData.get('name')?.toString() ?? '',
      partner: formData.get('partner')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      phone: formData.get('phone')?.toString() ?? '',
      date: formData.get('date')?.toString() ?? '',
      venueType,
      serviceType,
      preferredContact,
      timeOfDay,
      location: formData.get('location')?.toString() ?? '',
      hearAbout: formData.get('hearAbout')?.toString() ?? '',
    };

    const message = [
      "Hello, I'd like to reserve my wedding with your studio.",
      '',
      `Name: ${values.name}`,
      `Partner: ${values.partner}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Wedding Date: ${values.date}`,
      `Venue Type: ${values.venueType}`,
      `Service Type: ${values.serviceType}`,
      `Preferred Contact: ${values.preferredContact === 'whatsapp' ? 'WhatsApp' : 'Email'}`,
      `Time of Day: ${values.timeOfDay === 'day' ? 'Day' : 'Night'}`,
      `Event Location: ${values.location}`,
      `How did you hear about us: ${values.hearAbout}`,
    ].join('\n');

    const encodedText = encodeURIComponent(message);
    if (preferredContact === 'whatsapp') {
      const whatsappUrl = `https://wa.me/?text=${encodedText}`;
      window.open(whatsappUrl, '_blank');
    } else {
      const mailtoUrl = `mailto:?subject=${encodeURIComponent('Wedding Reservation Request')}&body=${encodedText}`;
      window.location.href = mailtoUrl;
    }

    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main>
      <PageHero
        image={IMAGES.beachKiss}
        eyebrow="Contact"
        title="Reserve Your Wedding Date"
        subtitle="We would love to hear about your special day and how we can create unforgettable memories together." />
      

      {/* Event information form */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2 flex flex-col justify-center gap-8">
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-champagne font-sans">
                Why Choose Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-warmwhite leading-tight">
                Begin Your <span className="text-warmwhite/50">Forever With</span> Confidence.
              </h2>
              <p className="text-warmwhite/60 font-sans font-light leading-relaxed max-w-xl">
                We accept only a select number of weddings per year to guarantee every couple receives our complete dedication and artistry.
              </p>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-[#111] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-10 rounded-full border border-champagne/30 bg-champagne/10 flex items-center justify-center text-champagne">
                  24
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.26em] text-champagne font-semibold">24-Hour Response</h3>
                  <p className="mt-2 text-sm text-warmwhite/60 font-sans">We respond to every enquiry within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-10 rounded-full border border-champagne/30 bg-champagne/10 flex items-center justify-center text-champagne">
                  <span className="text-xs">+</span>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.26em] text-champagne font-semibold">Limited Bookings</h3>
                  <p className="mt-2 text-sm text-warmwhite/60 font-sans">We accept only select weddings each year.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-10 rounded-full border border-champagne/30 bg-champagne/10 flex items-center justify-center text-champagne">
                  ★
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.26em] text-champagne font-semibold">5-Star Studio</h3>
                  <p className="mt-2 text-sm text-warmwhite/60 font-sans">300+ five-star reviews from happy couples.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-10 rounded-full border border-champagne/30 bg-champagne/10 flex items-center justify-center text-champagne">
                  ♥
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.26em] text-champagne font-semibold">Full Heart Guarantee</h3>
                  <p className="mt-2 text-sm text-warmwhite/60 font-sans">100% dedication from enquiry to delivery.</p>
                </div>
              </div>
            </div>

            <div>
              <a href="#booking-form" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-champagne font-semibold hover:text-warmwhite transition-colors duration-300">
                Visit contact page →
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div id="booking-form" className="rounded-[2rem] border border-white/10 bg-[#100f0b] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col gap-6 border-b border-white/10 pb-8 mb-8">
                <div className="flex items-center gap-6">
                  <div className="rounded-full border border-champagne/20 bg-[#19140d] px-4 py-2 text-xs uppercase tracking-[0.3em] text-champagne font-semibold">
                    {currentStep === 1 ? '01' : '02'}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-champagne/80 font-sans">{currentStep === 1 ? 'Step 01' : 'Step 02'}</p>
                    <h3 className="text-xl font-semibold text-warmwhite">
                      {currentStep === 1 ? 'Your Details' : 'Event Details'}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#111] p-4 h-full" />
                  <div className="rounded-3xl border border-white/10 bg-transparent p-4 h-full" />
                </div>
              </div>

              <form onSubmit={submit} className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className={`rounded-3xl p-4 text-sm ${currentStep === 1 ? 'border border-champagne/50 bg-[#19140d] text-champagne shadow-[0_0_0_1px_rgba(218,187,108,0.45)]' : 'border border-white/10 bg-transparent text-warmwhite/50'}`}>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-champagne/80">Step 01</p>
                    <p className="mt-3 font-semibold text-warmwhite">Your Details</p>
                  </div>
                  <div className={`rounded-3xl p-4 text-sm ${currentStep === 2 ? 'border border-champagne/50 bg-[#19140d] text-champagne shadow-[0_0_0_1px_rgba(218,187,108,0.45)]' : 'border border-white/10 bg-transparent text-warmwhite/50'}`}>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-champagne/80">Step 02</p>
                    <p className="mt-3 font-semibold text-warmwhite">Event Details</p>
                  </div>
                </div>

                {currentStep === 1 ? (
                  <div className="grid gap-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <label className="space-y-3">
                        <span className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans">Your Name *</span>
                        <input
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-warmwhite placeholder-warmwhite/30 focus:border-champagne focus:outline-none"
                          placeholder="First Last"
                        />
                      </label>
                      <label className="space-y-3">
                        <span className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans">Partner’s Name *</span>
                        <input
                          name="partner"
                          type="text"
                          required
                          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-warmwhite placeholder-warmwhite/30 focus:border-champagne focus:outline-none"
                          placeholder="First Last"
                        />
                      </label>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <label className="space-y-3">
                        <span className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans">Email Address *</span>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-warmwhite placeholder-warmwhite/30 focus:border-champagne focus:outline-none"
                          placeholder="your@email.com"
                        />
                      </label>
                      <label className="space-y-3">
                        <span className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans">Phone Number *</span>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-warmwhite placeholder-warmwhite/30 focus:border-champagne focus:outline-none"
                          placeholder="+94"
                        />
                      </label>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <label className="space-y-3">
                        <span className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans">Wedding Date</span>
                        <input
                          name="date"
                          type="date"
                          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-warmwhite focus:border-champagne focus:outline-none"
                        />
                      </label>
                      <label className="space-y-3 relative">
                        <span className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans">Venue Type</span>
                        <div className="relative">
                          <select
                            name="venueType"
                            value={venueType}
                            onChange={(e) => setVenueType(e.target.value)}
                            className="w-full rounded-2xl border border-white/10 bg-[#111] px-4 py-3 pr-10 text-warmwhite focus:border-champagne focus:outline-none appearance-none"
                          >
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                            <option value="destination">Destination</option>
                          </select>
                          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-warmwhite/50" />
                        </div>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-champagne/80 font-sans">Service Type</div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {SERVICE_TYPES.map((type) => (
                          <button
                            key={type.key}
                            type="button"
                            onClick={() => setServiceType(type.key)}
                            className={`rounded-2xl border px-4 py-4 text-left text-sm transition duration-300 ${
                              serviceType === type.key
                                ? 'border-champagne bg-champagne/15 text-warmwhite shadow-[0_0_0_1px_rgba(218,187,108,0.65)]'
                                : 'border-white/10 bg-white/5 text-warmwhite/70 hover:border-champagne/40 hover:text-warmwhite'
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setPreferredContact('email')}
                        className={`rounded-2xl border px-6 py-4 text-left text-sm transition duration-300 ${
                          preferredContact === 'email'
                            ? 'border-champagne bg-champagne/15 text-warmwhite shadow-[0_0_0_1px_rgba(218,187,108,0.65)]'
                            : 'border-white/10 bg-white/5 text-warmwhite/70 hover:border-champagne/40'
                        }`}
                      >
                        <p className="text-[10px] uppercase tracking-[0.24em] text-champagne/80">Preferred Contact Method</p>
                        <span className="mt-2 block text-base text-warmwhite">Email</span>
                        <p className="mt-1 text-sm text-warmwhite/50">We reply to your inbox within 24 hours.</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreferredContact('whatsapp')}
                        className={`rounded-2xl border px-6 py-4 text-left text-sm transition duration-300 ${
                          preferredContact === 'whatsapp'
                            ? 'border-champagne bg-champagne/15 text-warmwhite shadow-[0_0_0_1px_rgba(218,187,108,0.65)]'
                            : 'border-white/10 bg-[#1f1a12] text-champagne hover:border-champagne/40 hover:bg-[#241d13]'
                        }`}
                      >
                        <p className="text-[10px] uppercase tracking-[0.24em] text-champagne/80 font-sans">Preferred Contact Method</p>
                        <span className="mt-2 block text-base text-warmwhite">WhatsApp</span>
                        <p className="mt-1 text-sm text-warmwhite/50">Open a direct chat with our studio.</p>
                      </button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setTimeOfDay('day')}
                        className={`rounded-2xl border px-6 py-4 text-sm uppercase tracking-[0.24em] transition duration-300 ${
                          timeOfDay === 'day'
                            ? 'border-champagne bg-champagne/15 text-warmwhite shadow-[0_0_0_1px_rgba(218,187,108,0.65)]'
                            : 'border-white/10 bg-white/5 text-warmwhite/70 hover:border-champagne/40'
                        }`}
                      >
                        Day Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setTimeOfDay('night')}
                        className={`rounded-2xl border px-6 py-4 text-sm uppercase tracking-[0.24em] transition duration-300 ${
                          timeOfDay === 'night'
                            ? 'border-champagne bg-champagne/15 text-warmwhite shadow-[0_0_0_1px_rgba(218,187,108,0.65)]'
                            : 'border-white/10 bg-white/5 text-warmwhite/70 hover:border-champagne/40'
                        }`}
                      >
                        Night Time
                      </button>
                    </div>

                    <label className="space-y-3">
                      <span className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans">Event Location</span>
                      <input
                        name="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-warmwhite placeholder-warmwhite/30 focus:border-champagne focus:outline-none"
                        placeholder="Venue address or city"
                      />
                    </label>

                    <label className="space-y-3">
                      <span className="block text-[10px] uppercase tracking-[0.24em] text-warmwhite/50 font-sans">How did you hear about us?</span>
                      <textarea
                        name="hearAbout"
                        value={hearAbout}
                        onChange={(e) => setHearAbout(e.target.value)}
                        className="w-full min-h-[130px] rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-warmwhite placeholder-warmwhite/30 focus:border-champagne focus:outline-none"
                        placeholder="Instagram, referral, Google search, etc."
                      />
                    </label>
                  </div>
                )}

                <div className="rounded-2xl border border-white/10 bg-[#111] p-5 text-sm text-warmwhite/60">
                  {preferredContact === 'whatsapp'
                    ? 'Submitting this form will open WhatsApp with your details pre-filled—simply send the message to our studio.'
                    : 'Submitting this form will open your email client with a pre-filled reservation message.'}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {currentStep === 2 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="rounded-2xl border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.24em] text-warmwhite/80 transition-colors duration-300 hover:text-champagne"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <ActionButton type="submit" variant="solid" className="rounded-2xl px-8 py-3 text-sm uppercase tracking-[0.24em]">
                    {currentStep === 1 ? 'Continue to Event Details' : sent ? (
                      <>
                        <CheckIcon className="w-4 h-4 mr-2" /> Submitted
                      </>
                    ) : (
                      'Reserve Now'
                    )}
                  </ActionButton>
                </div>
              </form>
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