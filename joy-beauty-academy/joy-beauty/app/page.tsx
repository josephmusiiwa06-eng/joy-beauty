import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ChevronDown, Star, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SERVICES, TESTIMONIALS, BRAND } from '@/lib/constants';

const CinematicScene = dynamic(
  () => import('@/components/three/CinematicScene').then((m) => m.CinematicScene),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      <CinematicScene />

      {/* ═══ HERO ══════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16"
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-gradient-radial-bloom opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void pointer-events-none" />

        {/* Concentric circles — African aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-bloom/4 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-bloom/6 rounded-full pointer-events-none animate-[spin_25s_linear_infinite]" />

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-7 animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-bloom" />
          <span className="text-xs tracking-[0.45em] uppercase text-bloom font-body font-medium">
            Cape Town's Premier Beauty Destination
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-bloom" />
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-bold leading-none tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="block text-[clamp(2.8rem,9vw,8rem)] text-cream">
            JOY BEAUTY
          </span>
          <span className="block text-[clamp(1.6rem,5vw,4rem)] text-gradient-bloom italic font-accent font-normal mt-2">
            Academy & Saloon
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-accent italic text-[clamp(1rem,2.2vw,1.4rem)] text-cream-dim max-w-lg leading-relaxed mb-4 animate-fade-up"
          style={{ animationDelay: '0.55s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {BRAND.tagline}
        </p>
        <p
          className="font-body text-sm text-muted mb-10 animate-fade-up"
          style={{ animationDelay: '0.65s', opacity: 0, animationFillMode: 'forwards' }}
        >
          195 Voortrekker Rd, Maitland · Cape Town
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <Button variant="bloom" size="lg" className="animate-pulse-bloom">
            <Link href="/book">Book an Appointment</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/services" className="flex items-center gap-2">
              Explore Services
            </Link>
          </Button>
          <Button variant="gold" size="lg">
            <Link href="/academy" className="flex items-center gap-2">
              <GraduationCap size={15} />
              Enrol in Academy
            </Link>
          </Button>
        </div>

        {/* Quick stats */}
        <div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-14 animate-fade-up"
          style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {[
            { value: '11', label: 'Services Offered' },
            { value: '1000+', label: 'Happy Clients' },
            { value: '4', label: 'Training Courses' },
            { value: '5★', label: 'Rated in CT' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl font-bold text-shimmer">{value}</div>
              <div className="text-xs tracking-widest uppercase text-muted font-body mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0, animation: 'fadeIn 1s 1.5s forwards' }}>
          <span className="text-2xs tracking-[0.35em] uppercase text-muted font-body">Scroll</span>
          <div className="w-px h-10 relative overflow-hidden bg-white/8">
            <div className="absolute inset-0 bg-bloom animate-scroll-line" />
          </div>
          <ChevronDown size={13} className="text-muted animate-bounce" />
        </div>
      </section>

      {/* ═══ MARQUEE SERVICES TICKER ═══════════════════════ */}
      <div className="border-y border-bloom/10 py-3.5 overflow-hidden bg-surface/40 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="flex items-center gap-6 mx-6">
              {['Manicure & Pedicure', 'Acrylic Nails', 'Gel Nails & Tips', 'Makeup', 'Eyelash Extensions', 'Swedish Massage', 'Wig Making', 'Facials', 'Hairdressing', 'Waxing', 'Braiding'].map((s, j) => (
                <span key={j} className="flex items-center gap-6">
                  <span className="text-xs tracking-[0.28em] uppercase text-muted font-body">{s}</span>
                  <span className={j % 2 === 0 ? 'text-bloom' : 'text-gold'}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ SERVICES SECTION ══════════════════════════════ */}
      <section className="relative py-28 px-6" aria-label="Services overview">
        {/* Section glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-bloom/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-bloom font-body">What We Do</span>
              <h2 className="font-display text-display-md font-bold text-cream mt-3 leading-tight">
                Our
                <span className="text-gradient-bloom italic"> Services</span>
              </h2>
              <p className="font-body text-cream-dim mt-3 max-w-md">
                From nails to hair to wellness — 11 expert beauty services under one roof in Maitland, Cape Town.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm tracking-widest uppercase text-muted hover:text-bloom transition-colors duration-300 font-body flex items-center gap-2 group flex-shrink-0"
            >
              See Full Menu
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.slice(6, 9).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg">
              <Link href="/services">View All 11 Services + Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ ACADEMY CALLOUT ═══════════════════════════════ */}
      <section className="relative py-24 px-6 overflow-hidden" aria-label="Academy">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface to-obsidian" />
        {/* Kente pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-8 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="kente-home" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <rect width="24" height="24" fill="#FF1B8D" opacity="0.4" />
                <rect x="24" y="24" width="24" height="24" fill="#D4AF37" opacity="0.4" />
                <rect x="24" width="24" height="24" fill="#C4006A" opacity="0.25" />
                <rect y="24" width="24" height="24" fill="#F0D060" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kente-home)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-gold font-body">Joy Beauty Academy</span>
            <h2 className="font-display text-display-sm font-bold text-cream mt-4 mb-5">
              Turn Your Passion Into a{' '}
              <span className="text-gradient-bloom italic">Career</span>
            </h2>
            <p className="text-cream-dim font-body leading-relaxed mb-3">
              Joy Beauty Academy offers professional beauty courses right here in Cape Town. Whether you're starting fresh or leveling up your skills, we train you to industry standard.
            </p>
            <p className="text-cream-dim font-body leading-relaxed mb-8">
              Nail Technology · Makeup · Braiding · Lash Extensions — all taught by seasoned professionals in a hands-on, supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="gold" size="lg">
                <Link href="/academy">View Courses & Fees</Link>
              </Button>
              <Button variant="outline" size="md">
                <a href={`tel:${BRAND.phone}`}>Call to Enrol</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Nail Technology', weeks: '8 Weeks', price: 'R 4,500', hot: true },
              { label: 'Makeup Artist', weeks: '6 Weeks', price: 'R 5,200', hot: false },
              { label: 'Braiding Masterclass', weeks: '4 Weeks', price: 'R 2,800', hot: false },
              { label: 'Lash Extension Cert.', weeks: '3 Days', price: 'R 1,800', hot: true },
            ].map(({ label, weeks, price, hot }) => (
              <div
                key={label}
                className={`glass-card p-5 relative overflow-hidden hover:border-bloom/25 transition-all duration-300 group ${hot ? 'border-gold/20' : ''}`}
              >
                {hot && (
                  <span className="absolute top-3 right-3 text-2xs tracking-widest uppercase text-gold font-body bg-gold/10 px-1.5 py-0.5 border border-gold/20">
                    Popular
                  </span>
                )}
                <div className="font-body font-semibold text-cream text-sm mb-2 pr-12">{label}</div>
                <div className="text-xs text-muted font-body mb-3">{weeks}</div>
                <div className="font-display text-lg font-bold text-shimmer">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═════════════════════════════════ */}
      <section className="py-24 px-6" aria-label="Why Joy Beauty">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.4em] uppercase text-bloom font-body">Why Joy Beauty</span>
            <h2 className="font-display text-display-md font-bold text-cream mt-3">
              Beauty Done <span className="text-shimmer italic">Right</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '💅', title: 'Expert Nail Techs', desc: 'Certified in acrylic, gel, nail art, and manicure/pedicure for all nail types' },
              { emoji: '🌍', title: 'African Heritage', desc: 'Braiding traditions and natural hair expertise rooted in African beauty culture' },
              { emoji: '🎓', title: 'Academy Certified', desc: 'Learn from working professionals. Our graduates work across Cape Town and beyond' },
              { emoji: '💆', title: 'Full Wellness', desc: 'Swedish massage, facials, and skin care for total body confidence and relaxation' },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="glass-card p-6 text-center hover:border-bloom/20 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{emoji}</div>
                <h3 className="font-body font-semibold text-cream mb-2 text-sm">{title}</h3>
                <p className="text-xs text-muted font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-surface/30" aria-label="Client testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.4em] uppercase text-bloom font-body">Happy Clients</span>
            <h2 className="font-display text-display-md font-bold text-cream mt-3">
              What Our <span className="text-shimmer italic">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                className="glass-card p-8 relative overflow-hidden hover:border-bloom/20 transition-all duration-500"
              >
                <div className="absolute top-4 right-6 font-display text-8xl text-bloom/5 leading-none select-none" aria-hidden="true">"</div>
                <div className="flex gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <blockquote className="font-accent italic text-cream-dim leading-relaxed mb-6 relative z-10 text-[0.95rem]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-bloom flex items-center justify-center text-cream font-display font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-cream text-sm">{t.name}</div>
                    <div className="text-xs text-muted font-body">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT QUICK ACCESS ══════════════════════════ */}
      <section className="py-20 px-6" aria-label="Contact details">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-3">📍</div>
              <h3 className="font-body font-semibold text-cream text-sm mb-1 tracking-wide">Find Us</h3>
              <p className="text-sm text-cream-dim font-body">195 Voortrekker Road</p>
              <p className="text-sm text-cream-dim font-body">Maitland, Cape Town</p>
            </div>
            <div>
              <div className="text-2xl mb-3">📞</div>
              <h3 className="font-body font-semibold text-cream text-sm mb-1 tracking-wide">Call Us</h3>
              <a href={`tel:${BRAND.phone}`} className="text-sm text-bloom font-body font-semibold hover:text-bloom-light transition-colors block">
                {BRAND.phone}
              </a>
              <p className="text-xs text-muted font-body mt-1">Mon–Sat 8AM–7PM</p>
            </div>
            <div>
              <div className="text-2xl mb-3">✉️</div>
              <h3 className="font-body font-semibold text-cream text-sm mb-1 tracking-wide">Email Us</h3>
              <a href={`mailto:${BRAND.email}`} className="text-sm text-bloom font-body font-semibold hover:text-bloom-light transition-colors break-all">
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═════════════════════════════════════ */}
      <section className="relative py-24 px-6 overflow-hidden" aria-label="Book now">
        <div className="absolute inset-0 bg-gradient-bloom opacity-8" />
        <div className="absolute inset-0 bg-gradient-radial-bloom" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bloom to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bloom to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold text-cream mb-5">
            Ready to Glow Up?
            <br />
            <span className="text-gradient-bloom italic">Book Today.</span>
          </h2>
          <p className="text-cream-dim font-body text-lg leading-relaxed mb-10 font-accent italic">
            Walk-ins welcome · Appointments preferred · Located at 195 Voortrekker, Maitland
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="bloom" size="lg" className="animate-pulse-bloom">
              <Link href="/book">Book Appointment Online</Link>
            </Button>
            <Button variant="gold" size="lg">
              <a href={`tel:${BRAND.phone}`}>Call {BRAND.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
