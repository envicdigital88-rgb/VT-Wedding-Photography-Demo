



import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const QUICK = [
{ label: 'Home', to: '/' },
{ label: 'About', to: '/about' },
{ label: 'Portfolio', to: '/portfolio' },
{ label: 'Services', to: '/services' },
{ label: 'Contact', to: '/contact' }];


const SERVICES = [
'Wedding Photography',
'Wedding Cinematography',
'Engagement Sessions',
'Pre Wedding Shoots',
'Drone Coverage'];


export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl tracking-[0.15em] text-warmwhite">
              VT<span className="text-champagne"> WEDDINGS</span>
            </span>
            <p className="mt-5 text-sm font-sans font-light leading-relaxed text-warmwhite/50 max-w-xs">
              Premium wedding photography &amp; cinematic films crafted with passion across Sri Lanka.
            </p>
            <a
              href="https://www.instagram.com/vt_creative_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-champagne hover:text-warmwhite transition-colors duration-300"
              aria-label="VT Weddings on Instagram">
              
              <InstagramIcon className="w-5 h-5" />
              <span className="text-xs uppercase tracking-[0.2em]">Follow</span>
            </a>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-warmwhite/40 font-sans mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK.map((l) =>
              <li key={l.to}>
                  <Link
                  to={l.to}
                  className="text-sm font-sans font-light text-warmwhite/70 hover:text-champagne transition-colors duration-300">
                  
                    {l.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-warmwhite/40 font-sans mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) =>
              <li key={s}>
                  <Link
                  to="/services"
                  className="text-sm font-sans font-light text-warmwhite/70 hover:text-champagne transition-colors duration-300">
                  
                    {s}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-warmwhite/40 font-sans mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm font-sans font-light text-warmwhite/70">
              <li>
                <a href="tel:0754197970" className="flex items-center gap-3 hover:text-champagne transition-colors">
                  <PhoneIcon className="w-4 h-4 text-champagne" /> 075 419 7970
                </a>
              </li>
              <li>
                <a href="tel:0766668188" className="flex items-center gap-3 hover:text-champagne transition-colors">
                  <PhoneIcon className="w-4 h-4 text-champagne" /> 076 666 8188
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-champagne mt-0.5" /> Serving weddings across Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-warmwhite/40">
            © {new Date().getFullYear()} VT Weddings. All rights reserved.
          </p>
          <p className="text-xs font-sans text-warmwhite/30 tracking-wide">
            Capturing Timeless Love Stories
          </p>
        </div>
      </div>
    </footer>);

}