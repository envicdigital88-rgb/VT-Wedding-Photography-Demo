


import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const LINKS = [
{ label: 'Home', to: '/' },
{ label: 'About', to: '/about' },
{ label: 'Portfolio', to: '/portfolio' },
{ label: 'Services', to: '/services' },
{ label: 'Contact', to: '/contact' }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled ?
        'bg-charcoal/85 backdrop-blur-xl border-b border-white/10 py-4' :
        'bg-transparent py-6'}`
        }>
        
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none group" aria-label="VT Weddings home">
            <span className="font-display text-xl sm:text-2xl tracking-[0.15em] text-warmwhite">
              VT<span className="text-champagne"> WEDDINGS</span>
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.4em] text-warmwhite/40 font-sans">
              Sri Lanka
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) =>
            <li key={l.to}>
                <NavLink
                to={l.to}
                className={({ isActive }) =>
                `relative text-xs uppercase tracking-[0.22em] font-sans transition-colors duration-300 py-1 ${
                isActive ? 'text-champagne' : 'text-warmwhite/70 hover:text-warmwhite'}`

                }>
                
                  {({ isActive }) =>
                <>
                      {l.label}
                      <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-champagne transition-all duration-500 ease-luxe ${
                    isActive ? 'w-full' : 'w-0'}`
                    } />
                  
                    </>
                }
                </NavLink>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-7 py-3 rounded-full text-[11px] uppercase tracking-[0.24em] font-sans font-semibold bg-gradient-to-r from-champagne via-[#f7d893] to-champagne text-charcoal shadow-[0_15px_35px_rgba(218,187,108,0.16)] hover:shadow-[0_18px_44px_rgba(218,187,108,0.25)] transition-all duration-500">
              Reserve Now
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-warmwhite p-1"
              aria-label="Open menu">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] bg-charcoal/98 backdrop-blur-xl lg:hidden">
          
            <div className="flex items-center justify-between px-5 py-6">
              <span className="font-display text-xl tracking-[0.15em] text-warmwhite">
                VT<span className="text-champagne"> WEDDINGS</span>
              </span>
              <button onClick={() => setOpen(false)} className="text-warmwhite p-1" aria-label="Close menu">
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center gap-8 mt-16">
              {LINKS.map((l, i) =>
            <motion.li
              key={l.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}>
              
                  <NavLink
                to={l.to}
                className={({ isActive }) =>
                `font-display text-3xl tracking-wide ${
                isActive ? 'text-champagne' : 'text-warmwhite'}`

                }>
                
                    {l.label}
                  </NavLink>
                </motion.li>
            )}
              <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6">
              
                <Link
                to="/contact"
                className="inline-flex px-9 py-4 rounded-full text-xs uppercase tracking-[0.24em] font-sans font-semibold bg-gradient-to-r from-champagne via-[#f7d893] to-champagne text-charcoal shadow-[0_12px_30px_rgba(218,187,108,0.18)] hover:shadow-[0_14px_36px_rgba(218,187,108,0.26)] transition-all duration-500">
                  Reserve Your Date
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}