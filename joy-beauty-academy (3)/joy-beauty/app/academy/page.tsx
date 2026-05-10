import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { COURSES, BRAND } from '@/lib/constants';
import { GraduationCap, Users, Star, Clock, CheckCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Academy',
  description:
    'Study at Joy Beauty Academy — professional nail technology, makeup, braiding, and lash extension courses in Cape Town.',
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-void">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-20 left-0 right-0 flex justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-gold/6 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={14} className="text-gold" />
              <span className="text-xs tracking-[0.4em] uppercase text-gold font-body">Joy Beauty Academy</span>
            </div>
            <h1 className="font-display text-display-lg font-bold text-cream leading-none mb-6">
              Launch Your
              <span className="text-gradient-bloom italic block">Beauty Career</span>
            </h1>
            <p className="text-cream-dim font-body leading-relaxed mb-4 text-lg">
              Professional, hands-on beauty training in Cape Town. Learn from working beauty professionals and leave with skills you can monetize immediately.
            </p>
            <p className="font-accent italic text-cream-dim mb-8">
              Based in Maitland — accessible to all of Cape Town.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="gold" size="lg">
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2">
                  <Phone size={14} />
                  Call to Enrol
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href={`mailto:${BRAND.email}`}>Email About Courses</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '4', label: 'Courses Offered', color: 'text-bloom' },
              { value: '100%', label: 'Hands-On Training', color: 'text-gold' },
              { value: 'Cape Town', label: 'Maitland Campus', color: 'text-bloom' },
              { value: '∞', label: 'Career Potential', color: 'text-gold' },
            ].map(({ value, label, color }) => (
              <div key={label} className="glass-card p-6 text-center">
                <div className={`font-display text-3xl font-bold ${color} mb-2`}>{value}</div>
                <div className="text-xs tracking-widest uppercase text-muted font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses ───────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.4em] uppercase text-bloom font-body">Training Programs</span>
            <h2 className="font-display text-display-md font-bold text-cream mt-3">
              Our <span className="text-shimmer italic">Courses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course) => (
              <article
                key={course.title}
                className={`glass-card p-8 relative overflow-hidden hover:border-bloom/25 transition-all duration-500 group ${
                  course.highlight ? 'border-gold/20' : ''
                }`}
              >
                {course.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-gold" />
                )}
                {course.highlight && (
                  <span className="absolute top-4 right-4 text-2xs tracking-widest uppercase text-gold font-body bg-gold/10 px-2 py-1 border border-gold/20">
                    Most Popular
                  </span>
                )}

                <div className="flex items-start justify-between mb-4 pr-20">
                  <h3 className="font-display text-xl font-semibold text-cream group-hover:text-bloom transition-colors duration-300">
                    {course.title}
                  </h3>
                </div>

                <p className="text-cream-dim font-body text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                <div className="flex items-center gap-6 pt-5 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-muted" strokeWidth={1.5} />
                    <span className="text-sm text-cream-dim font-body">{course.duration}</span>
                  </div>
                  <div className="font-display text-2xl font-bold text-shimmer">{course.price}</div>
                  <Button variant="bloom" size="sm" className="ml-auto">
                    <a href={`tel:${BRAND.phone}`}>Enquire</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ───────────────────────── */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm font-bold text-cream">
              What's <span className="text-gradient-bloom italic">Included</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Practical Training',
                icon: '🛠️',
                points: ['Real client sessions', 'Studio practice time', 'Model sourcing support', 'Professional equipment access'],
              },
              {
                title: 'Theory & Knowledge',
                icon: '📚',
                points: ['Anatomy & safety', 'Product knowledge', 'Business basics', 'Digital study material'],
              },
              {
                title: 'Certification',
                icon: '📜',
                points: ['Accredited certificate', 'Portfolio building', 'Graduate support', 'Job placement guidance'],
              },
            ].map(({ title, icon, points }) => (
              <div key={title} className="glass-card p-7">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-display text-lg font-semibold text-cream mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-cream-dim font-body">
                      <CheckCircle size={13} className="text-bloom flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enrol CTA ─────────────────────────────── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-display-sm font-bold text-cream mb-5">
            Ready to Start <span className="text-gradient-bloom italic">Training?</span>
          </h2>
          <p className="font-accent italic text-cream-dim text-lg mb-8 leading-relaxed">
            Call or WhatsApp us to discuss the right course for you and secure your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2">
                <Phone size={15} />
                {BRAND.phone}
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </Button>
          </div>
          <p className="text-xs text-muted font-body mt-6">
            195 Voortrekker Road, Maitland, Cape Town · Mon–Sat 8AM–7PM
          </p>
        </div>
      </section>
    </div>
  );
}
