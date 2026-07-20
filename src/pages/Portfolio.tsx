







import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { FinalCTA } from '../components/home/FinalCTA';
import { GALLERY_IMAGES, GalleryImage, IMAGES } from '../data/images';

const FILTERS = [
{ key: 'all', label: 'All' },
{ key: 'weddings', label: 'Weddings' },
{ key: 'engagements', label: 'Engagements' },
{ key: 'preshoots', label: 'Pre Shoots' },
{ key: 'receptions', label: 'Receptions' },
{ key: 'films', label: 'Wedding Films' }] as
const;

type FilterKey = (typeof FILTERS)[number]['key'];

export function Portfolio() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
    filter === 'all' ?
    GALLERY_IMAGES :
    GALLERY_IMAGES.filter((i) => i.category === filter),
    [filter]
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((n) => n === null ? n : (n + 1) % filtered.length),
    [filtered.length]
  );
  const prev = useCallback(
    () => setLightbox((n) => n === null ? n : (n - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, next, prev]);

  return (
    <main>
      <PageHero
        image={IMAGES.echoesSea}
        eyebrow="Portfolio"
        title="A Gallery of Timeless Moments"
        subtitle="Explore our finest work across weddings, engagements and cinematic films." />
      

      {/* Filters */}
      <section className="bg-charcoal pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-2">
            {FILTERS.map((f) =>
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`relative px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-sans transition-colors duration-400 ${
              filter === f.key ?
              'text-charcoal' :
              'text-warmwhite/60 hover:text-warmwhite'}`
              }>
              
                {filter === f.key &&
              <motion.span
                layoutId="filterPill"
                className="absolute inset-0 bg-champagne"
                transition={{ type: 'spring', stiffness: 400, damping: 34 }} />

              }
                <span className="relative z-10">{f.label}</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="bg-charcoal pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) =>
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightbox(i)}
                className="group relative mb-5 block w-full overflow-hidden">
                
                  <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1.4s] ease-luxe group-hover:scale-110" />
                
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-end p-5">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-warmwhite opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {img.alt}
                    </span>
                  </div>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] bg-charcoal/97 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={close}>
          
            <button
            className="absolute top-6 right-6 text-warmwhite/70 hover:text-champagne transition-colors z-10"
            onClick={close}
            aria-label="Close">
            
              <XIcon className="w-8 h-8" />
            </button>
            <button
            className="absolute left-4 sm:left-8 text-warmwhite/60 hover:text-champagne transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous">
            
              <ChevronLeftIcon className="w-9 h-9" />
            </button>
            <button
            className="absolute right-4 sm:right-8 text-warmwhite/60 hover:text-champagne transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next">
            
              <ChevronRightIcon className="w-9 h-9" />
            </button>

            <motion.img
            key={filtered[lightbox].src}
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()} />
          
          </motion.div>
        }
      </AnimatePresence>

      <FinalCTA />
    </main>);

}