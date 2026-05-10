# 🌸 Joy Beauty Academy & Saloon

**Cape Town's Premier Beauty Destination**  
195 Voortrekker Road, Maitland, Cape Town  
📞 +27 746082099 · ✉️ jamesontrank3@gmail.com

---

## ✨ Overview

A full-stack, production-ready website for **Joy Beauty Academy & Saloon** — built with Next.js 14 (App Router), Tailwind CSS, Three.js, and GSAP ScrollTrigger.

### Features
- 🎨 **Cinematic 3D hero** — Three.js particle system + GSAP scroll-driven animations
- 🌍 **African luxury aesthetic** — Pink & black Afro-Futurist design with Kente/Adinkra patterns
- 💅 **11 Services** — Nails, Hair, Makeup, Lashes, Massage, Wigs, Facials & more
- 🎓 **Academy section** — Course listings with enrollment CTAs
- 📅 **Multi-step booking form** — 3-step appointment request flow
- 👤 **Auth pages** — Login + Signup with validation
- 📊 **Client dashboard** — Appointments table, loyalty points, quick rebooking
- 📱 **Fully responsive** — Mobile-first design
- ⚡ **Performance optimized** — Dynamic imports, lazy loading, image optimization
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/joy-beauty.git
cd joy-beauty

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
joy-beauty/
├── app/
│   ├── layout.tsx              # Root layout (Navbar, Footer, metadata)
│   ├── page.tsx                # Homepage — cinematic hero + sections
│   ├── globals.css             # Design system CSS variables & animations
│   ├── services/page.tsx       # All 11 services with category filters
│   ├── gallery/page.tsx        # Masonry photo gallery / lookbook
│   ├── book/page.tsx           # 3-step booking form
│   ├── academy/page.tsx        # Beauty training courses
│   ├── dashboard/page.tsx      # Client portal
│   └── auth/
│       ├── login/page.tsx
│       └── signup/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed navbar with announcement bar
│   │   └── Footer.tsx          # Footer with contact + sitemap
│   ├── three/
│   │   └── CinematicScene.tsx  # Three.js + GSAP scene (SSR-safe)
│   └── ui/
│       ├── Button.tsx          # Variant button system
│       ├── Input.tsx           # Form input with validation states
│       ├── ServiceCard.tsx     # Service listing card
│       ├── CustomCursor.tsx    # Branded cursor (desktop)
│       └── ScrollProgress.tsx  # Scroll progress bar
├── lib/
│   ├── constants.ts            # All brand data, services, gallery
│   └── utils.ts                # Helper utilities
├── hooks/
│   └── useReveal.ts            # Intersection Observer scroll animations
├── vercel.json                 # Vercel deployment config
├── tailwind.config.js          # Full design system tokens
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `void` | `#050205` | Page background |
| `obsidian` | `#0D0508` | Secondary bg |
| `surface` | `#160B10` | Card bg |
| `bloom` | `#FF1B8D` | Primary accent (hot pink) |
| `bloom-light` | `#FF6BB5` | Hover states |
| `gold` | `#D4AF37` | Premium accent |
| `cream` | `#F5F0E8` | Primary text |
| `cream-dim` | `#C8BDB5` | Secondary text |
| `muted` | `#7A6570` | Placeholder / labels |

### Typography

- **Display**: Playfair Display (serif) — headlines
- **Body**: DM Sans — UI text, labels
- **Accent**: Cormorant Garamond — quotes, subheadings

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** ✅

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📦 GitHub Setup

```bash
# Initialize git
git init
git add .
git commit -m "🌸 Initial commit — Joy Beauty Academy & Saloon"

# Create GitHub repo (via GitHub CLI or dashboard)
gh repo create joy-beauty --public
git remote add origin https://github.com/YOUR_USERNAME/joy-beauty.git
git push -u origin main
```

---

## 🔧 Environment Variables

Create `.env.local` for any API integrations:

```env
# Booking / CMS (optional)
NEXT_PUBLIC_SITE_URL=https://joybeauty.co.za
RESEND_API_KEY=your_email_api_key
```

---

## 📞 Studio Details

| | |
|---|---|
| **Name** | Joy Beauty Academy & Saloon |
| **Phone** | +27 746082099 |
| **Email** | jamesontrank3@gmail.com |
| **Address** | 195 Voortrekker Road, Maitland, Cape Town |
| **Hours** | Mon–Sat: 8AM–7PM · Sun: 10AM–5PM |

---

## 🛠 Services

1. Manicure & Pedicure
2. Acrylic Nail Building
3. Gel Nails & Gel Tips
4. Makeup Artistry
5. Eyelash Extensions
6. Swedish Massage
7. Wig Making & Styling
8. Facials & Skin Care
9. Hairdressing
10. Waxing
11. Braiding

---

Built with ❤️ for Joy Beauty Academy & Saloon, Cape Town.
