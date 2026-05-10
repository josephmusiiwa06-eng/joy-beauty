import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Button } from '@/components/ui/Button';
import { SERVICES, SERVICE_CATEGORIES, ADD_ONS, BRAND } from '@/lib/constants';
import { Clock, Shield, Leaf, Award, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full beauty service menu at Joy Beauty Academy & Saloon — Nails, Makeup, Braiding, Lashes, Massage, Wigs, Facials, Hairdressing, Waxing in Maitland, Cape Town.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-void">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-16 left-1/3 w-80 h-80 bg-bloom/7 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-16 right-1/4 w-60 h-60 bg-gold/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={13} className="text-bloom" />
              <span className="text-xs tracking-widest uppercase text-muted font-body">
                195 Voortrekker Rd, Maitland · Cape Town
              </span>
            </div>
            <span className="text-xs tracking-[0.4em] uppercase text-bloom font-body">Full Service Menu</span>
            <h1 className="font-display text-display-lg font-bold text-cream mt-4 leading-none">
              Beauty
              <span className="text-gradient-bloom italic block">Services</span>
            </h1>
            <p className="mt-5 text-lg text-cream-dim font-body leading-relaxed max-w-lg">
              Eleven expert services — nails, hair, makeup, lashes, massage, facials, waxing, wigs and more — all under one roof in Cape Town.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="bloom" size="md">
              <Link href="/book">Book Any Service</Link>
            </Button>
            <Button variant="outline" size="md">
              <a href={`tel:${BRAND.phone}`}>Call {BRAND.phone}</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bloom/20 to-transparent" />
      </section>

      {/* ── Service Promise ────────────────────────────── */}
      <section className="py-10 px-6 border-b border-bloom/8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock, title: 'Punctual Always', desc: 'We respect your time — appointments run on schedule' },
            { icon: Leaf, title: 'Quality Products', desc: 'Melanin-safe, skin-friendly formulations' },
            { icon: Shield, title: 'Hygiene First', desc: 'Sanitized tools & workstations for every client' },
            { icon: Award, title: 'Certified Staff', desc: 'Trained & experienced beauty professionals' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center gap-2.5 p-4">
              <div className="w-9 h-9 border border-bloom/20 flex items-center justify-center text-bloom">
                <Icon size={16} strokeWidth={1.5} />
              </div>
              <h3 className="font-body font-semibold text-cream text-sm">{title}</h3>
              <p className="text-xs text-muted font-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Category filter + Grid ─────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <h2 className="font-display text-2xl font-semibold text-cream">
              All Services{' '}
              <span className="text-muted font-body text-base font-normal">({SERVICES.length})</span>
            </h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`px-3.5 py-1.5 text-xs tracking-widest uppercase font-body transition-all duration-300 ${
                    cat === 'All'
                      ? 'bg-bloom text-cream'
                      : 'border border-bloom/20 text-muted hover:border-bloom hover:text-bloom'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-Ons ─────────────────────────────────────── */}
      <section className="py-14 px-6 border-t border-bloom/8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-xs tracking-[0.4em] uppercase text-gold font-body">Extras</span>
            <h2 className="font-display text-2xl font-semibold text-cream mt-2">
              Enhancements & Add-Ons
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ADD_ONS.map(({ name, price }) => (
              <div
                key={name}
                className="glass-card p-4 flex items-center justify-between hover:border-bloom/20 transition-all duration-300"
              >
                <span className="text-sm text-cream-dim font-body">{name}</span>
                <span className="text-sm font-semibold text-bloom font-body ml-3 flex-shrink-0">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing note ─────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto glass-card p-6 border-l-2 border-gold">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-body font-semibold text-cream mb-1.5">Pricing & Consultations</h3>
              <p className="text-sm text-cream-dim font-body leading-relaxed">
                Prices are starting guides — final pricing depends on hair length, nail complexity, and your specific needs. Contact us for a personalised quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button variant="bloom" size="sm">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button variant="outline" size="sm">
                <a href={`mailto:${BRAND.email}`}>Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
