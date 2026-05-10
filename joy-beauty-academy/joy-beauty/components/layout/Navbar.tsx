'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { BRAND } from '@/lib/constants';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Academy', href: '/academy' },
  { label: 'Book Now', href: '/book' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-bloom/90 backdrop-blur-sm py-1.5 px-4 text-center">
        <a
          href={`tel:${BRAND.phone}`}
          className="inline-flex items-center gap-2 text-xs text-cream font-body tracking-wider"
        >
          <Phone size={11} />
          Book via call: <span className="font-semibold">{BRAND.phone}</span>
          <span className="hidden sm:inline text-cream/70 mx-2">|</span>
          <span className="hidden sm:inline text-cream/80">{BRAND.addressShort}</span>
        </a>
      </div>

      <header
        className={`fixed top-[30px] left-0 right-0 z-40 transition-all duration-700 ${
          scrolled
            ? 'bg-obsidian/88 backdrop-blur-xl border-b border-bloom/12 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Joy Beauty Academy Home">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
              aria-hidden="true"
            >
              <circle cx="18" cy="18" r="17" stroke="url(#jb-ring)" strokeWidth="0.7" opacity="0.35" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <ellipse
                  key={i}
                  cx="18"
                  cy="9.5"
                  rx="2.4"
                  ry="5.5"
                  fill={i % 2 === 0 ? '#FF1B8D' : '#D4AF37'}
                  opacity={i % 2 === 0 ? '0.88' : '0.72'}
                  transform={`rotate(${deg} 18 18)`}
                />
              ))}
              <circle cx="18" cy="18" r="4.5" fill="url(#jb-center)" />
              <circle cx="18" cy="18" r="2.2" fill="#F5F0E8" opacity="0.9" />
              <defs>
                <linearGradient id="jb-ring" x1="1" y1="1" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF1B8D" />
                  <stop offset="1" stopColor="#D4AF37" />
                </linearGradient>
                <radialGradient id="jb-center" cx="50%" cy="50%" r="50%">
                  <stop stopColor="#FF1B8D" />
                  <stop offset="1" stopColor="#C4006A" />
                </radialGradient>
              </defs>
            </svg>

            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-[1.05rem] tracking-[0.16em] text-cream uppercase">
                Joy Beauty
              </span>
              <span className="font-body text-[0.52rem] tracking-[0.35em] uppercase text-muted mt-0.5">
                Academy & Saloon
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-widest uppercase font-body transition-colors duration-300 relative group ${
                  pathname === link.href ? 'text-bloom' : 'text-cream-dim hover:text-cream'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-bloom transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auth/login"
              className="text-xs tracking-widest uppercase text-cream-dim hover:text-cream transition-colors duration-300 font-body"
            >
              Sign In
            </Link>
            <Link
              href="/book"
              className="relative px-5 py-2.5 text-xs tracking-widest uppercase font-body font-medium text-cream overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-bloom" />
              <span className="absolute inset-0 bg-gradient-to-r from-bloom via-gold to-bloom-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Book Now</span>
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-obsidian/97 backdrop-blur-xl border-b border-bloom/10 transition-all duration-500 ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col px-6 py-8 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base tracking-widest uppercase font-body ${
                  pathname === link.href ? 'text-bloom' : 'text-cream-dim'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-bloom/10 my-1" />
            <Link href="/auth/login" className="text-sm tracking-widest uppercase text-muted font-body">Sign In</Link>
            <Link href="/auth/signup" className="text-sm tracking-widest uppercase text-muted font-body">Create Account</Link>
            <div className="mt-2 pt-4 border-t border-bloom/10 space-y-2">
              <a href={`tel:${BRAND.phone}`} className="block text-sm text-bloom font-body font-semibold">{BRAND.phone}</a>
              <p className="text-xs text-muted font-body">{BRAND.address}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
