'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

const passwordRules = [
  { label: '8+ characters', test: (p: string) => p.length >= 8 },
  { label: 'Uppercase letter', test: (p: string) => /[A-Z]/.test(p) },
  { label: 'Number', test: (p: string) => /\d/.test(p) },
];

const memberBenefits = [
  'Priority appointment booking',
  'Loyalty points on every service',
  'Exclusive member-only pricing',
  'Beauty style history & records',
  'Early access to new services',
  'Birthday special offers',
];

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.includes('@')) e.email = 'Valid email required';
    if (form.password.length < 8) e.password = 'Password must be at least 8 characters';
    if (!form.consent) e.consent = 'You must accept the terms to continue';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    window.location.href = '/dashboard';
  };

  const pwStrength = passwordRules.filter((r) => r.test(form.password)).length;
  const strengthLabel = ['', 'Weak', 'Good', 'Strong'][pwStrength];
  const strengthColor = ['', 'text-red-400', 'text-gold', 'text-green-400'][pwStrength];

  return (
    <div className="min-h-screen bg-void flex pt-[30px]">
      {/* ── Left Panel ────────────────────────── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-obsidian via-surface to-obsidian" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
        />

        {/* Kente pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kente-signup" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
              <rect width="28" height="28" fill="#FF1B8D" opacity="0.18" />
              <rect x="28" y="28" width="28" height="28" fill="#D4AF37" opacity="0.18" />
              <rect x="14" y="14" width="28" height="28" fill="none" stroke="#FF1B8D" strokeWidth="0.5" opacity="0.4" />
              <circle cx="28" cy="28" r="8" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kente-signup)" />
        </svg>

        <div className="relative z-10 flex flex-col justify-center px-16">
          <Link href="/" className="mb-12 flex flex-col leading-none group">
            <span className="font-display font-bold text-xl tracking-[0.2em] text-cream uppercase group-hover:text-bloom transition-colors duration-300">
              Joy Beauty
            </span>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-muted mt-1">
              Academy & Saloon
            </span>
          </Link>

          <h2 className="font-display text-5xl font-bold text-cream leading-tight mb-6">
            Join Our
            <br />
            <span className="text-shimmer italic">Beauty Family</span>
          </h2>

          <p className="font-accent italic text-cream-dim text-lg leading-relaxed max-w-sm mb-8">
            Create your free account and enjoy exclusive perks with every visit to our Maitland studio.
          </p>

          {/* Benefits list */}
          <ul className="space-y-3">
            {memberBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm text-cream-dim font-body">
                <CheckCircle size={14} className="text-bloom flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>

          {/* Studio quick info */}
          <div className="mt-10 glass-card p-4 max-w-xs">
            <p className="text-xs tracking-widest uppercase text-muted font-body mb-2">Our Studio</p>
            <p className="text-sm text-cream-dim font-body">195 Voortrekker Rd, Maitland</p>
            <a href={`tel:${BRAND.phone}`} className="text-sm text-bloom font-body font-semibold mt-1 block hover:text-bloom-light transition-colors">
              {BRAND.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Form Panel ────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-14">
        <Link href="/" className="lg:hidden mb-10 flex flex-col items-center leading-none">
          <span className="font-display font-bold text-xl tracking-[0.2em] text-cream uppercase">Joy Beauty</span>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-muted mt-1">Academy & Saloon</span>
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-cream mb-2">Create Account</h1>
            <p className="text-cream-dim font-body text-sm">
              Already a member?{' '}
              <Link href="/auth/login" className="text-bloom hover:text-bloom-light transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              error={errors.name}
              required
              autoComplete="name"
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              error={errors.email}
              required
              autoComplete="email"
            />

            <Input
              label="Phone / WhatsApp"
              type="tel"
              placeholder="+27 000 000 0000"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              autoComplete="tel"
              hint="Used for appointment confirmations"
            />

            {/* Password with strength meter */}
            <div>
              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  error={errors.password}
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-3.5 text-muted hover:text-cream-dim transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {form.password && (
                <div className="mt-2.5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 flex-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${
                            i < pwStrength
                              ? pwStrength === 1 ? 'bg-red-500'
                                : pwStrength === 2 ? 'bg-gold'
                                : 'bg-green-500'
                              : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-xs font-body ${strengthColor}`}>{strengthLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {passwordRules.map((rule) => (
                      <span
                        key={rule.label}
                        className={`text-xs font-body flex items-center gap-1 ${
                          rule.test(form.password) ? 'text-green-400' : 'text-muted'
                        }`}
                      >
                        <CheckCircle size={10} />
                        {rule.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                  className="mt-0.5 w-4 h-4 accent-bloom flex-shrink-0"
                  required
                />
                <span className="text-xs text-muted font-body leading-relaxed">
                  I agree to the{' '}
                  <Link href="#" className="text-bloom hover:underline">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="#" className="text-bloom hover:underline">Privacy Policy</Link>
                  . I consent to receive booking confirmations and promotions.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-red-400 font-body mt-1" role="alert">{errors.consent}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="bloom"
              size="lg"
              fullWidth
              isLoading={loading}
              disabled={!form.name || !form.email || !form.password || !form.consent}
              className="mt-3"
            >
              Create My Free Account
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-muted font-body">or sign up with</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {['Google', 'Facebook'].map((provider) => (
              <button
                key={provider}
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 border border-white/10 text-cream-dim hover:border-bloom/30 hover:text-cream transition-all duration-300 text-sm font-body"
              >
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-muted font-body mt-6">
            Walk-ins also welcome at{' '}
            <span className="text-cream-dim">195 Voortrekker, Maitland</span>
          </p>
        </div>
      </div>
    </div>
  );
}
