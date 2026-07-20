




import React, { useEffect, useState } from 'react';
import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MessageCircleIcon } from 'lucide-react';

// Scroll progress bar pinned to top
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-champagne origin-left z-[70]" />);


}

// Floating WhatsApp button
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94754197970"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[65] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-110 animate-float">
      
      <MessageCircleIcon className="w-7 h-7" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>);

}

// Elegant intro loader with the VT Weddings text logo
export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done &&
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal">
        
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center">
          
            <div className="font-display text-3xl sm:text-5xl tracking-[0.3em] text-warmwhite">
              VT<span className="text-champagne"> WEDDINGS</span>
            </div>
            <div className="mt-4 text-[10px] uppercase tracking-[0.5em] text-warmwhite/40 font-sans">
              Timeless Love Stories
            </div>
            <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="mt-8 h-px w-40 mx-auto bg-champagne origin-left" />
          
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}

// Scroll to top on route change
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}