/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — Afro-Futurist Noir Luxury
        void: '#050205',
        obsidian: '#0D0508',
        surface: '#160B10',
        'surface-elevated': '#1F1018',
        
        // Pink spectrum
        bloom: '#FF1B8D',
        'bloom-light': '#FF6BB5',
        'bloom-deep': '#C4006A',
        blush: '#E8B4CB',
        'blush-soft': '#F5D6E8',
        
        // Gold accents
        gold: '#D4AF37',
        'gold-light': '#F0D060',
        'gold-deep': '#A08020',
        
        // Text
        cream: '#F5F0E8',
        'cream-dim': '#C8BDB5',
        muted: '#7A6570',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        accent: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'display-xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.05em' }],
        'display-2xl': ['11rem', { lineHeight: '0.9', letterSpacing: '-0.06em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'gradient-bloom': 'linear-gradient(135deg, #FF1B8D 0%, #C4006A 100%)',
        'gradient-void': 'linear-gradient(180deg, #050205 0%, #0D0508 100%)',
        'gradient-radial-bloom': 'radial-gradient(ellipse at center, #FF1B8D22 0%, transparent 70%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #A08020 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'shimmer': 'shimmer 2.5s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-bloom': 'pulseBloom 3s ease-in-out infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        pulseBloom: {
          '0%, 100%': { boxShadow: '0 0 20px #FF1B8D33' },
          '50%': { boxShadow: '0 0 60px #FF1B8D66, 0 0 100px #FF1B8D22' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top', opacity: '1' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: '1' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom', opacity: '1' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom', opacity: '0' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 1%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(2%, -2%)' },
          '50%': { transform: 'translate(-3%, 2%)' },
          '60%': { transform: 'translate(1%, -1%)' },
          '70%': { transform: 'translate(-2%, 3%)' },
          '80%': { transform: 'translate(3%, -3%)' },
          '90%': { transform: 'translate(-1%, 2%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'bloom': '0 0 40px rgba(255, 27, 141, 0.3)',
        'bloom-lg': '0 0 80px rgba(255, 27, 141, 0.4)',
        'gold': '0 0 30px rgba(212, 175, 55, 0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 27, 141, 0.15)',
      },
    },
  },
  plugins: [],
};
