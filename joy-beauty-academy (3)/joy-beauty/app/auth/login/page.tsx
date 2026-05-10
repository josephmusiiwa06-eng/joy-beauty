'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Phone } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) {
      setError('Please fill in your email and password.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-void flex pt-[30px]">
      {/* ── Decorative Left Panel ──────────────── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-surface to-obsidian" />
        <div className="absolute inset-0 bg-gradient-radial-bloom opacity-35" />

        {/* Adinkra SVG pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="adinkra-login" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="28" fill="none" stroke="#FF1B8D" strokeWidth="0.6" />
              <circle cx="40" cy="40" r="18" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="8" fill="#FF1B8D" opacity="0.3" />
              <path d="M12 40 L68 40 M40 12 L40 68" stroke="#FF1B8D" strokeWidth="0.5" />
              <path d="M20 20 L60 60 M60 20 L20 60" stroke="#D4AF37" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#adinkra-login)" />
        </svg>

        {/* Floating decorative orbs */}
        <div className="absolute top-24 right-16 w-28 h-28 border border-bloom/12 rounded-full animate-float" />
        <div className="absolute bottom-36 right-28 w-18 h-18 border border-gold/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-8 w-5 h-5 bg-bloom/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16">
          <Link href="/" className="mb-14 flex flex-col leading-none group">
            <span className="font-display font-bold text-xl tracking-[0.2em] text-cream uppercase group-hover:text-bloom transition-colors duration-300">
              Joy Beauty
            </span>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-muted mt-1">
              Academy & Saloon
            </span>
          </Link>

          <h2 className="font-display text-5xl font-bold text-cream leading-tight mb-6">
            Welcome
            <br />
            <span className="text-gradient-bloom italic">Back</span>
          </h2>

          <p className="font-accent italic text-cream-dim text-xl leading-relaxed max-w-sm mb-10">
            Sign in to manage your appointments, track your loyalty points, and access your beauty history.
          </p>

          {/* Contact quick access */}
          <div className="glass-card p-5 max-w-sm">
            <p className="text-xs tracking-widest uppercase text-muted font-body mb-3">Need Help?</p>
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-2 text-sm text-bloom font-body font-semibold hover:text-bloom-light transition-colors"
            >
              <Phone size={14} />
              {BRAND.phone}
            </a>
            <p className="text-xs text-muted font-body mt-1">{BRAND.addressShort}</p>
          </div>
        </div>
      </div>

      {/* ── Form Panel ────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Mobile logo */}
        <Link href="/" className="lg:hidden mb-12 flex flex-col items-center leading-none">
          <span className="font-display font-bold text-xl tracking-[0.2em] text-cream uppercase">Joy Beauty</span>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-muted mt-1">Academy & Saloon</span>
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="font-display text-3xl font-bold text-cream mb-2">Sign In</h1>
            <p className="text-cream-dim font-body text-sm">
              New to Joy Beauty?{' '}
              <Link href="/auth/signup" className="text-bloom hover:text-bloom-light transition-colors">
                Create a free account
              </Link>
            </p>
          </div>

          {error && (
            <div
              className="mb-6 p-4 border border-red-500/30 bg-red-500/5 text-red-400 text-sm font-body"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Input
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              required
              autoComplete="email"
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                required
                autoComplete="current-password"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5 accent-bloom" />
                <span className="text-xs text-muted font-body">Remember me</span>
              </label>
              <Link href="#" className="text-xs text-muted hover:text-bloom transition-colors font-body">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="bloom"
              size="lg"
              fullWidth
              isLoading={loading}
              className="mt-2 animate-pulse-bloom"
            >
              Sign In to My Account
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-muted font-body">or</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {['Google', 'Facebook'].map((provider) => (
              <button
                key={provider}
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 border border-white/10 text-cream-dim hover:border-bloom/30 hover:text-cream transition-all duration-300 text-sm font-body"
              >
                {provider === 'Google' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity="0.7">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" opacity="1" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" opacity="1" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" opacity="1" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" opacity="1" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-muted font-body mt-8">
            By signing in, you agree to our{' '}
            <Link href="#" className="text-bloom hover:underline">Terms</Link> and{' '}
            <Link href="#" className="text-bloom hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
