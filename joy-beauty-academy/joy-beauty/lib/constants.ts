import {
  Sparkles,
  Hand,
  Gem,
  Palette,
  Eye,
  Wind,
  Scissors,
  Star,
  Flower,
  Zap,
  Heart,
  Crown,
} from 'lucide-react';

export const BRAND = {
  name: 'Joy Beauty Academy & Saloon',
  shortName: 'JOY BEAUTY',
  tagline: 'Where beauty is learned, lived & celebrated.',
  phone: '+27 746082099',
  email: 'jamesontrank3@gmail.com',
  address: '195 Voortrekker Road, Maitland, Cape Town',
  addressShort: 'Maitland, Cape Town',
  hours: 'Mon–Sat: 8AM – 7PM\nSun: 10AM – 5PM',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
} as const;

export const SERVICES = [
  {
    icon: Hand,
    title: 'Manicure & Pedicure',
    description:
      'Luxurious hand and foot treatments with classic or gel polish. Includes cuticle care, shaping, exfoliation, and a relaxing soak — your nails deserve royal attention.',
    price: 'From R180',
    duration: '45–90 min',
    accent: 'bloom' as const,
    category: 'Nails',
  },
  {
    icon: Gem,
    title: 'Acrylic Nail Building',
    description:
      'Full sets, infills, and nail art using premium acrylic systems. We sculpt length, shape, and strength — from natural looks to bold stilettos.',
    price: 'From R280',
    duration: '1.5–2.5 hrs',
    accent: 'gold' as const,
    category: 'Nails',
  },
  {
    icon: Sparkles,
    title: 'Gel Nails & Gel Tips',
    description:
      'Soft gel overlays, hard gel extensions, and gel tips for natural-looking, chip-resistant wear. Long-lasting shine that moves with your lifestyle.',
    price: 'From R250',
    duration: '1–2 hrs',
    accent: 'bloom' as const,
    category: 'Nails',
  },
  {
    icon: Palette,
    title: 'Makeup Artistry',
    description:
      'From everyday glam to bridal and editorial looks. Our certified artists use professional-grade, melanin-safe products for every skin tone.',
    price: 'From R350',
    duration: '1–2 hrs',
    accent: 'gold' as const,
    category: 'Makeup',
  },
  {
    icon: Eye,
    title: 'Eyelash Extensions',
    description:
      'Classic, hybrid, volume, and mega-volume lash sets applied strand by strand. Wake up with effortless drama — no mascara needed.',
    price: 'From R380',
    duration: '1.5–3 hrs',
    accent: 'bloom' as const,
    category: 'Lashes',
  },
  {
    icon: Wind,
    title: 'Swedish Massage',
    description:
      'Full-body relaxation massage using long, flowing strokes that melt tension, improve circulation, and restore your glow from the inside out.',
    price: 'From R450',
    duration: '60–90 min',
    accent: 'gold' as const,
    category: 'Wellness',
  },
  {
    icon: Crown,
    title: 'Wig Making & Styling',
    description:
      'Custom lace wigs, frontals, and closures crafted to your head shape and lifestyle. Ready-to-wear and raw hair installs also available.',
    price: 'From R600',
    duration: '3–6 hrs',
    accent: 'bloom' as const,
    category: 'Hair',
  },
  {
    icon: Flower,
    title: 'Facials & Skin Care',
    description:
      'Deep cleansing, hydrating, brightening, and anti-aging facials tailored to your skin type. Leave with a visible, natural radiance.',
    price: 'From R320',
    duration: '45–75 min',
    accent: 'gold' as const,
    category: 'Skin',
  },
  {
    icon: Scissors,
    title: 'Hairdressing',
    description:
      'Cuts, trims, blow-outs, relaxers, colour, highlights, and keratin treatments. Natural and relaxed hair specialists on site.',
    price: 'From R200',
    duration: '1–3 hrs',
    accent: 'bloom' as const,
    category: 'Hair',
  },
  {
    icon: Zap,
    title: 'Waxing',
    description:
      'Full-body, facial, and bikini waxing using low-temperature, sensitive-skin formulas. Smooth, long-lasting results with minimal discomfort.',
    price: 'From R120',
    duration: '20–60 min',
    accent: 'gold' as const,
    category: 'Body',
  },
  {
    icon: Star,
    title: 'Braiding',
    description:
      'Box braids, cornrows, Senegalese twists, Fulani braids, knotless braids, and more — honoring African hair heritage with expert hands.',
    price: 'From R350',
    duration: '2–6 hrs',
    accent: 'bloom' as const,
    category: 'Hair',
  },
  {
    icon: Heart,
    title: 'Full Glam Package',
    description:
      'The complete Joy experience: makeup + lashes + nails + brow shaping. Arrive as you are — leave as the best version of yourself.',
    price: 'From R950',
    duration: '4–5 hrs',
    accent: 'gold' as const,
    category: 'Packages',
  },
] as const;

export const SERVICE_CATEGORIES = [
  'All', 'Nails', 'Hair', 'Makeup', 'Lashes', 'Skin', 'Wellness', 'Body', 'Packages',
];

export const TESTIMONIALS = [
  {
    name: 'Lerato Mokoena',
    role: 'Bride, Cape Town',
    quote:
      'Joy Beauty Academy did my bridal makeup and lashes — I was absolutely stunning. Every single guest complimented me. They are true artists!',
    rating: 5,
  },
  {
    name: 'Sandi Williams',
    role: 'Nail Tech Student',
    quote:
      'I enrolled in their nail course and it changed my life. The tutors are patient, knowledgeable, and genuinely invest in your success.',
    rating: 5,
  },
  {
    name: 'Thandi Ngcobo',
    role: 'Regular Client, Maitland',
    quote:
      'My knotless braids lasted 3 months and looked fresh the whole time. The team in Maitland is so talented and the vibe is always warm and welcoming.',
    rating: 5,
  },
];

export const GALLERY_ITEMS = [
  {
    id: '1',
    title: 'Knotless Box Braids',
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1617327721703-16c6d2d9f0de?w=600&q=80',
  },
  {
    id: '2',
    title: 'Bridal Glam Makeup',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  },
  {
    id: '3',
    title: 'Acrylic Nail Art',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  },
  {
    id: '4',
    title: 'Volume Lash Set',
    category: 'Lashes',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
  },
  {
    id: '5',
    title: 'Gel Nail Ombre',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  },
  {
    id: '6',
    title: 'Hydrating Facial',
    category: 'Skin',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  },
  {
    id: '7',
    title: 'Cornrow Artistry',
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
  },
  {
    id: '8',
    title: 'Everyday Glam',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
  },
  {
    id: '9',
    title: 'Custom Wig Install',
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
  },
];

export const BOOKING_TIMES = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
];

export const ADD_ONS = [
  { name: 'Nail Art Design', price: '+R50' },
  { name: 'Brow Shaping', price: '+R80' },
  { name: 'Lash Tint', price: '+R90' },
  { name: 'Scalp Treatment', price: '+R120' },
  { name: 'Paraffin Wax Hands', price: '+R80' },
  { name: 'Gel Polish Upgrade', price: '+R60' },
  { name: 'Face Mask Add-On', price: '+R100' },
  { name: 'Touch-Up Glam Kit', price: '+R50' },
];

export const COURSES = [
  {
    title: 'Nail Technology Diploma',
    duration: '8 Weeks',
    price: 'R 4,500',
    description: 'Full certification in acrylic, gel, and nail art. Job-ready in 2 months.',
    highlight: true,
  },
  {
    title: 'Makeup Artist Certificate',
    duration: '6 Weeks',
    price: 'R 5,200',
    description: 'Professional makeup for all skin tones, bridal, editorial, and SFX basics.',
    highlight: false,
  },
  {
    title: 'Braiding Masterclass',
    duration: '4 Weeks',
    price: 'R 2,800',
    description: 'Knotless braids, box braids, cornrows, and protective styles.',
    highlight: false,
  },
  {
    title: 'Lash Extension Cert.',
    duration: '3 Days',
    price: 'R 1,800',
    description: 'Classic, hybrid, and volume lash application from scratch.',
    highlight: false,
  },
];
