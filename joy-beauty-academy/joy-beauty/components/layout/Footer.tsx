import Link from 'next/link';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BRAND } from '@/lib/constants';

const footerLinks = {
  Services: [
    { label: 'Nails', href: '/services' },
    { label: 'Hair & Braiding', href: '/services' },
    { label: 'Makeup', href: '/services' },
    { label: 'Lashes & Brows', href: '/services' },
    { label: 'Massage & Facials', href: '/services' },
  ],
  Academy: [
    { label: 'Nail Technology', href: '/academy' },
    { label: 'Makeup Artist', href: '/academy' },
    { label: 'Braiding Course', href: '/academy' },
    { label: 'Lash Cert.', href: '/academy' },
    { label: 'Enrol Now', href: '/academy' },
  ],
  Client: [
    { label: 'Book Appointment', href: '/book' },
    { label: 'My Dashboard', href: '/dashboard' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Sign In', href: '/auth/login' },
    { label: 'Create Account', href: '/auth/signup' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-bloom/8 overflow-hidden">
      {/* Gold top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-bloom/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-20 bg-bloom/4 blur-3xl rounded-full" />

      {/* Marquee */}
      <div className="border-b border-bloom/8 overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(6).fill(0).map((_, i) => (
            <span key={i} className="flex items-center gap-6 mx-6">
              {['Nails', 'Braiding', 'Makeup', 'Lashes', 'Massage', 'Facials', 'Wigs', 'Waxing', 'Hairdressing'].map((s, j) => (
                <span key={j} className="flex items-center gap-6">
                  <span className="text-xs tracking-[0.28em] uppercase text-muted font-body">{s}</span>
                  <span className={j % 2 === 0 ? 'text-bloom text-xs' : 'text-gold text-xs'}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl tracking-[0.2em] text-cream uppercase">
                  Joy Beauty
                </span>
                <span className="font-body text-xs tracking-[0.3em] uppercase text-muted mt-1">
                  Academy & Saloon
                </span>
              </div>
            </Link>

            <p className="font-accent italic text-cream-dim leading-relaxed mb-6 max-w-xs text-base">
              &ldquo;Where beauty is learned, lived & celebrated — Cape Town&apos;s home of artistry.&rdquo;
            </p>

            {/* Contact details */}
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-3 text-sm text-cream-dim hover:text-bloom transition-colors duration-300 font-body group"
                >
                  <Phone size={14} className="text-bloom flex-shrink-0 group-hover:scale-110 transition-transform" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 text-sm text-cream-dim hover:text-bloom transition-colors duration-300 font-body group"
                >
                  <Mail size={14} className="text-bloom flex-shrink-0 group-hover:scale-110 transition-transform" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=195+Voortrekker+Road+Maitland+Cape+Town"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-cream-dim hover:text-bloom transition-colors duration-300 font-body group"
                >
                  <MapPin size={14} className="text-bloom flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  {BRAND.address}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-cream-dim font-body">
                  <Clock size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="whitespace-pre-line">{BRAND.hours}</span>
                </div>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram', href: BRAND.instagram },
                { Icon: Facebook, label: 'Facebook', href: BRAND.facebook },
                { Icon: Twitter, label: 'Twitter', href: BRAND.twitter },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-bloom/20 flex items-center justify-center text-muted hover:text-bloom hover:border-bloom transition-all duration-300 group"
                >
                  <Icon size={15} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs tracking-[0.3em] uppercase text-muted font-body mb-5 pb-3 border-b border-bloom/8">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-dim hover:text-cream font-body transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map embed placeholder */}
        <div className="mt-12 glass-card overflow-hidden">
          <div className="p-4 border-b border-bloom/8 flex items-center justify-between">
            <span className="text-xs tracking-widest uppercase text-muted font-body">Find Us</span>
            <a
              href="https://maps.google.com/?q=195+Voortrekker+Road+Maitland+Cape+Town"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-bloom hover:text-bloom-light font-body transition-colors"
            >
              Open in Maps →
            </a>
          </div>
          <div className="h-36 bg-surface relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF1B8D" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <div className="w-8 h-8 bg-bloom rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse-bloom">
                <MapPin size={16} className="text-cream" />
              </div>
              <p className="text-xs text-cream-dim font-body">195 Voortrekker Rd, Maitland</p>
              <p className="text-xs text-muted font-body">Cape Town, South Africa</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-body tracking-wider">
            © {new Date().getFullYear()} Joy Beauty Academy & Saloon. All rights reserved. | Maitland, Cape Town
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
              <Link key={item} href="#" className="text-xs text-muted hover:text-cream-dim font-body transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
