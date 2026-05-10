'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SERVICES, BOOKING_TIMES, BRAND } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: '', date: '', time: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof typeof form, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-bloom/10 border border-bloom/30 flex items-center justify-center text-4xl animate-pulse-bloom">
            🌸
          </div>
          <h2 className="font-display text-3xl font-bold text-cream mb-4">
            Booking <span className="text-gradient-bloom italic">Requested!</span>
          </h2>
          <p className="font-accent italic text-cream-dim text-lg mb-6">
            Thank you {form.name}! We'll confirm your appointment shortly via phone or email.
          </p>
          <div className="glass-card p-6 text-left mb-6">
            {[
              { label: 'Service', value: form.service },
              { label: 'Date', value: form.date },
              { label: 'Time', value: form.time },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between text-sm py-2 border-b border-white/5 last:border-0">
                <span className="text-muted font-body">{label}</span>
                <span className="text-cream font-body">{value || 'TBD'}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted font-body mb-6">
            Questions? Call us on <a href={`tel:${BRAND.phone}`} className="text-bloom">{BRAND.phone}</a>
          </p>
          <Button variant="outline" onClick={() => { setSubmitted(false); setStep(1); setForm({ name:'',email:'',phone:'',service:'',date:'',time:'',notes:'' }); }}>
            Book Another Session
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void">
      {/* Hero */}
      <section className="relative pt-40 pb-14 px-6">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-bloom/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-bloom font-body">Reserve Your Spot</span>
          <h1 className="font-display text-display-lg font-bold text-cream mt-4 leading-none">
            Book a
            <span className="text-gradient-bloom italic block">Session</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2">
              {[
                { n: 1, label: 'Your Details' },
                { n: 2, label: 'Service' },
                { n: 3, label: 'Date & Time' },
              ].map(({ n, label }, i) => (
                <div key={n} className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => step > n && setStep(n)}
                    className={`w-8 h-8 flex items-center justify-center text-sm font-body font-semibold transition-all duration-300 ${
                      n === step ? 'bg-bloom text-cream' : n < step ? 'bg-bloom/20 text-bloom border border-bloom/40' : 'border border-white/10 text-muted'
                    }`}
                  >
                    {n < step ? '✓' : n}
                  </button>
                  <span className={`text-xs tracking-widest uppercase font-body ${n === step ? 'text-cream' : 'text-muted'}`}>{label}</span>
                  {i < 2 && <div className="w-6 h-px bg-white/10 flex-shrink-0" />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-up">
                  <h2 className="font-display text-xl font-semibold text-cream mb-4">Your Details</h2>
                  <Input label="Full Name" placeholder="Your full name" value={form.name} onChange={(e) => update('name', e.target.value)} required autoComplete="name" />
                  <Input label="Email Address" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => update('email', e.target.value)} required autoComplete="email" />
                  <Input label="Phone / WhatsApp" type="tel" placeholder="+27 000 000 0000" value={form.phone} onChange={(e) => update('phone', e.target.value)} required autoComplete="tel" hint="We may WhatsApp you to confirm your booking" />
                  <Button type="button" variant="bloom" size="lg" onClick={() => form.name && form.email && form.phone && setStep(2)} disabled={!form.name || !form.email || !form.phone} fullWidth>
                    Continue to Service Selection
                  </Button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="animate-fade-up">
                  <h2 className="font-display text-xl font-semibold text-cream mb-5">Choose a Service</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-h-[480px] overflow-y-auto pr-1">
                    {SERVICES.map((s) => (
                      <button
                        key={s.title}
                        type="button"
                        onClick={() => update('service', s.title)}
                        className={`p-4 text-left transition-all duration-300 border ${
                          form.service === s.title ? 'border-bloom bg-bloom/8 text-cream' : 'border-white/8 glass-card text-cream-dim hover:border-bloom/30'
                        }`}
                      >
                        <div className="font-body font-semibold text-sm mb-1">{s.title}</div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted font-body">{s.duration}</span>
                          <span className="text-xs font-semibold text-bloom font-body">{s.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button type="button" variant="ghost" size="lg" onClick={() => setStep(1)}>Back</Button>
                    <Button type="button" variant="bloom" size="lg" onClick={() => form.service && setStep(3)} disabled={!form.service} fullWidth>
                      Continue to Date & Time
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-up">
                  <h2 className="font-display text-xl font-semibold text-cream mb-4">Choose Date & Time</h2>
                  <Input label="Preferred Date" type="date" value={form.date} onChange={(e) => update('date', e.target.value)} min={new Date().toISOString().split('T')[0]} required />

                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-muted font-body block mb-3">Preferred Time</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {BOOKING_TIMES.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => update('time', time)}
                          className={`py-2.5 text-xs font-body transition-all duration-300 ${
                            form.time === time ? 'bg-bloom text-cream' : 'border border-white/8 text-muted hover:border-bloom/30 hover:text-cream-dim'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-muted font-body block mb-2">Notes / Special Requests (optional)</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      rows={3}
                      placeholder="Nail inspo, allergies, wig style, braid length, etc..."
                      className="input-luxury w-full px-4 py-3.5 text-sm font-body resize-none text-cream placeholder:text-muted"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button type="button" variant="ghost" size="lg" onClick={() => setStep(2)}>Back</Button>
                    <Button type="submit" variant="bloom" size="lg" isLoading={loading} disabled={!form.date || !form.time} fullWidth className="animate-pulse-bloom">
                      Confirm Booking Request
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-semibold text-cream mb-5">Studio Info</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://maps.google.com/?q=195+Voortrekker+Road+Maitland+Cape+Town" target="_blank" rel="noopener noreferrer" className="flex gap-3 group">
                    <MapPin size={16} className="text-bloom flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="text-sm text-cream-dim font-body group-hover:text-cream transition-colors">
                      195 Voortrekker Road<br />Maitland, Cape Town
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${BRAND.phone}`} className="flex gap-3 group">
                    <Phone size={16} className="text-bloom flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="text-sm text-bloom font-body font-semibold group-hover:text-bloom-light transition-colors">{BRAND.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BRAND.email}`} className="flex gap-3 group">
                    <Mail size={16} className="text-bloom flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="text-sm text-cream-dim font-body group-hover:text-cream transition-colors break-all">{BRAND.email}</span>
                  </a>
                </li>
                <li>
                  <div className="flex gap-3">
                    <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-sm text-cream-dim font-body whitespace-pre-line">{BRAND.hours}</span>
                  </div>
                </li>
              </ul>

              <a
                href="https://maps.google.com/?q=195+Voortrekker+Road+Maitland+Cape+Town"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 text-xs text-bloom hover:text-bloom-light font-body tracking-wider transition-colors"
              >
                <Navigation size={12} />
                Get Directions
              </a>
            </div>

            <div className="glass-card p-5 border-l-2 border-bloom">
              <h3 className="font-body font-semibold text-cream mb-3 text-sm">Booking Policy</h3>
              <ul className="space-y-2 text-xs text-muted font-body leading-relaxed">
                <li>• Deposit may be required for some services</li>
                <li>• Please cancel at least 24 hours in advance</li>
                <li>• Arrive 5–10 min early for your appointment</li>
                <li>• Walk-ins welcome subject to availability</li>
                <li>• WhatsApp bookings also accepted</li>
              </ul>
            </div>

            <div className="glass-card p-5 border-l-2 border-gold">
              <p className="font-accent italic text-cream-dim text-sm leading-relaxed">
                "Prefer to book by phone? Call or WhatsApp <strong className="text-bloom not-italic">{BRAND.phone}</strong> anytime during business hours."
              </p>
            </div>

            {/* Quick service summary */}
            {form.service && (
              <div className="glass-card p-5 border border-bloom/20 animate-fade-in">
                <h3 className="font-body font-semibold text-bloom text-sm mb-3">Selected</h3>
                <p className="text-cream font-body text-sm font-semibold">{form.service}</p>
                <button onClick={() => { update('service', ''); setStep(2); }} className="text-xs text-muted font-body mt-2 hover:text-cream transition-colors">
                  Change service →
                </button>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}
