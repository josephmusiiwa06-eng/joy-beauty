'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Calendar,
  Star,
  Settings,
  LogOut,
  Bell,
  Plus,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
  GraduationCap,
  Heart,
  Phone,
  Crown,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SERVICES, BRAND } from '@/lib/constants';

type AppStatus = 'confirmed' | 'pending' | 'completed' | 'cancelled';

const appointments: Array<{
  id: string;
  service: string;
  date: string;
  time: string;
  technician: string;
  status: AppStatus;
  price: string;
}> = [
  {
    id: '1',
    service: 'Acrylic Nail Building + Nail Art',
    date: 'Jul 25, 2024',
    time: '10:00 AM',
    technician: 'Precious N.',
    status: 'confirmed',
    price: 'R 380',
  },
  {
    id: '2',
    service: 'Box Braids (Full Head)',
    date: 'Jul 18, 2024',
    time: '9:00 AM',
    technician: 'Nomsa D.',
    status: 'completed',
    price: 'R 650',
  },
  {
    id: '3',
    service: 'Volume Lash Extensions',
    date: 'Jul 5, 2024',
    time: '2:00 PM',
    technician: 'Leah M.',
    status: 'completed',
    price: 'R 480',
  },
  {
    id: '4',
    service: 'Swedish Massage (60 min)',
    date: 'Jun 28, 2024',
    time: '3:00 PM',
    technician: 'Zola K.',
    status: 'completed',
    price: 'R 450',
  },
  {
    id: '5',
    service: 'Gel Nails & Tips',
    date: 'Jun 10, 2024',
    time: '11:00 AM',
    technician: 'Precious N.',
    status: 'cancelled',
    price: 'R 280',
  },
];

const statusConfig: Record<AppStatus, { badge: string; Icon: React.ElementType; label: string }> = {
  confirmed: { badge: 'bg-bloom/10 text-bloom border border-bloom/25', Icon: Clock, label: 'Confirmed' },
  pending: { badge: 'bg-gold/10 text-gold border border-gold/25', Icon: Clock, label: 'Pending' },
  completed: { badge: 'bg-green-500/10 text-green-400 border border-green-500/25', Icon: CheckCircle2, label: 'Completed' },
  cancelled: { badge: 'bg-red-500/10 text-red-400 border border-red-500/25', Icon: XCircle, label: 'Cancelled' },
};

const sidebarNav = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Appointments', icon: Calendar },
  { label: 'Loyalty Points', icon: Crown },
  { label: 'Favourites', icon: Heart },
  { label: 'Academy', icon: GraduationCap },
  { label: 'Settings', icon: Settings },
];

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('Overview');
  const [notifOpen, setNotifOpen] = useState(false);

  const totalSpend = appointments
    .filter((a) => a.status === 'completed')
    .reduce((acc, a) => acc + parseInt(a.price.replace(/[^0-9]/g, '')), 0);

  const stats = [
    { label: 'Total Visits', value: '8', sub: '+2 this month', color: 'text-bloom' },
    { label: 'Joy Points', value: '1,240', sub: '+360 earned', color: 'text-gold' },
    { label: 'Next Session', value: 'Jul 25', sub: 'Acrylic Nails 10AM', color: 'text-bloom' },
    { label: 'Total Saved', value: `R ${Math.round(totalSpend * 0.08)}`, sub: 'Loyalty rewards', color: 'text-gold' },
  ];

  return (
    <div className="min-h-screen bg-void pt-[60px] flex">
      {/* ── Sidebar ─────────────────────────────── */}
      <aside className="hidden lg:flex flex-col w-60 border-r border-bloom/8 px-3 py-8 fixed top-[60px] bottom-0 left-0 z-30 bg-obsidian/50 backdrop-blur-sm">
        {/* User avatar */}
        <div className="flex items-center gap-3 px-3 mb-8 pb-7 border-b border-bloom/8">
          <div className="w-10 h-10 bg-gradient-bloom rounded-full flex items-center justify-center font-display font-bold text-cream flex-shrink-0 text-sm">
            T
          </div>
          <div className="min-w-0">
            <div className="font-body font-semibold text-cream text-sm truncate">Thandi Ngcobo</div>
            <div className="text-xs text-muted font-body flex items-center gap-1 mt-0.5">
              <Crown size={10} className="text-gold flex-shrink-0" />
              Gold Member
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5" aria-label="Dashboard navigation">
          {sidebarNav.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-body transition-all duration-200 ${
                activeNav === label
                  ? 'bg-bloom/10 text-bloom border-r-2 border-bloom -mr-px'
                  : 'text-muted hover:text-cream-dim hover:bg-white/3'
              }`}
            >
              <Icon size={15} strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </nav>

        {/* Contact quick-dial */}
        <div className="px-3 py-4 border-t border-bloom/8 space-y-3">
          <a
            href={`tel:${BRAND.phone}`}
            className="flex items-center gap-2.5 text-xs text-muted hover:text-bloom transition-colors font-body group"
          >
            <Phone size={13} className="group-hover:scale-110 transition-transform" />
            {BRAND.phone}
          </a>
          <button className="w-full flex items-center gap-2.5 text-sm font-body text-muted hover:text-red-400 transition-colors py-1">
            <LogOut size={14} strokeWidth={1.5} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main ──────────────────────────────────── */}
      <main className="flex-1 lg:ml-60 px-5 py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-9 gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-cream">
              Hey Thandi <span className="text-gradient-bloom">✦</span>
            </h1>
            <p className="text-muted font-body text-sm mt-0.5">
              Welcome back to Joy Beauty — Maitland, Cape Town
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="w-9 h-9 border border-bloom/20 flex items-center justify-center text-muted hover:text-bloom hover:border-bloom transition-all duration-300 relative"
                aria-label="Notifications"
              >
                <Bell size={15} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-bloom rounded-full text-cream text-[9px] flex items-center justify-center font-body font-bold">
                  2
                </span>
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-11 w-72 glass-card border border-bloom/15 shadow-card z-50 animate-fade-in">
                  <div className="px-4 py-3 border-b border-bloom/8">
                    <span className="text-xs tracking-widest uppercase text-muted font-body">Notifications</span>
                  </div>
                  {[
                    { msg: 'Appointment confirmed: Jul 25 — Acrylic Nails', time: '2h ago', dot: 'bg-bloom' },
                    { msg: 'You earned 120 Joy Points from your last visit!', time: '1d ago', dot: 'bg-gold' },
                  ].map(({ msg, time, dot }) => (
                    <div key={msg} className="px-4 py-3 border-b border-bloom/5 flex gap-3 hover:bg-white/3 transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full ${dot} mt-1.5 flex-shrink-0`} />
                      <div>
                        <p className="text-xs text-cream-dim font-body leading-relaxed">{msg}</p>
                        <p className="text-xs text-muted font-body mt-1">{time}</p>
                      </div>
                    </div>
                  ))}
                  <button className="w-full text-center py-3 text-xs text-muted hover:text-bloom font-body transition-colors">
                    Mark all as read
                  </button>
                </div>
              )}
            </div>

            <Button variant="bloom" size="sm">
              <Link href="/book" className="flex items-center gap-1.5">
                <Plus size={13} />
                New Booking
              </Link>
            </Button>
          </div>
        </div>

        {/* ── Stats row ─────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-9">
          {stats.map(({ label, value, sub, color }) => (
            <div key={label} className="glass-card p-5 hover:border-bloom/15 transition-all duration-300">
              <div className="text-xs tracking-widest uppercase text-muted font-body mb-2">{label}</div>
              <div className={`font-display text-2xl font-bold mb-1 ${color}`}>{value}</div>
              <div className="text-xs text-muted font-body">{sub}</div>
            </div>
          ))}
        </div>

        {/* ── Next appointment banner ────────────── */}
        <div className="glass-card p-6 mb-8 border border-bloom/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-bloom" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl opacity-5 font-display font-bold text-bloom select-none">
            NEXT
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs tracking-widest uppercase text-bloom font-body">Upcoming Session</span>
              <h3 className="font-display text-lg font-semibold text-cream mt-1">
                Acrylic Nail Building + Nail Art
              </h3>
              <p className="text-sm text-cream-dim font-body mt-1">
                Thu, Jul 25 · 10:00 AM · with Precious N.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">Reschedule</Button>
              <Button variant="bloom" size="sm">
                <a href={`tel:${BRAND.phone}`}>Call Studio</a>
              </Button>
            </div>
          </div>
        </div>

        {/* ── Appointment table + right col ─────── */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Appointments table */}
          <section className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-lg font-semibold text-cream">Recent Appointments</h2>
              <button className="text-xs text-muted hover:text-bloom font-body flex items-center gap-1 transition-colors">
                View All <ChevronRight size={12} />
              </button>
            </div>

            <div className="glass-card overflow-hidden">
              {/* Mobile card view */}
              <div className="lg:hidden divide-y divide-white/4">
                {appointments.slice(0, 4).map((apt) => {
                  const { badge, Icon, label } = statusConfig[apt.status];
                  return (
                    <div key={apt.id} className="p-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-body font-semibold text-cream truncate">{apt.service}</p>
                          <p className="text-xs text-muted font-body mt-0.5">{apt.date} · {apt.time}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-body flex-shrink-0 ${badge}`}>
                          <Icon size={10} />
                          {label}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted font-body">{apt.technician}</span>
                        <span className="text-sm font-semibold text-bloom font-body">{apt.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop table */}
              <table className="luxury-table hidden lg:table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Tech</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((apt) => {
                    const { badge, Icon, label } = statusConfig[apt.status];
                    return (
                      <tr key={apt.id}>
                        <td>
                          <div className="text-sm text-cream font-body">{apt.service}</div>
                          <div className="text-xs text-muted font-body mt-0.5">{apt.time}</div>
                        </td>
                        <td className="text-sm text-cream-dim font-body whitespace-nowrap">{apt.date}</td>
                        <td className="text-sm text-cream-dim font-body">{apt.technician}</td>
                        <td className="text-sm font-semibold text-cream font-body whitespace-nowrap">{apt.price}</td>
                        <td>
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-body whitespace-nowrap ${badge}`}>
                            <Icon size={11} />
                            {label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* Right column */}
          <div className="space-y-5">
            {/* Loyalty card */}
            <div className="glass-card p-6 border-t-2 border-gold relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-gold/5 rounded-full" />
              <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-bloom/5 rounded-full" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="text-xs tracking-widest uppercase text-gold font-body mb-1">Joy Points</div>
                    <div className="font-display text-4xl font-bold text-shimmer">1,240</div>
                  </div>
                  <Crown size={28} className="text-gold opacity-40" />
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-muted font-body mb-2">
                    <span>Next reward at 1,500 pts</span>
                    <span className="text-gold">260 away</span>
                  </div>
                  <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-gold rounded-full" style={{ width: '82.6%' }} />
                  </div>
                </div>
                <p className="text-xs text-muted font-body">Earn 10 pts per R100 spent. Redeem for free services.</p>
              </div>
            </div>

            {/* Quick re-book */}
            <section>
              <h3 className="font-display text-sm font-semibold text-cream mb-4 tracking-wide">
                Book Again
              </h3>
              <div className="space-y-2">
                {SERVICES.slice(0, 5).map((s) => (
                  <Link
                    href="/book"
                    key={s.title}
                    className="flex items-center justify-between glass-card px-4 py-3 hover:border-bloom/20 transition-all duration-300 group"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-body font-semibold text-cream group-hover:text-bloom transition-colors duration-300 truncate">
                        {s.title}
                      </div>
                      <div className="text-xs text-muted font-body">{s.duration}</div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                      <span className="text-xs font-semibold text-bloom font-body">{s.price}</span>
                      <ChevronRight size={12} className="text-muted group-hover:text-bloom transition-colors" />
                    </div>
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block text-center py-2.5 text-xs tracking-widest uppercase text-muted hover:text-bloom font-body transition-colors"
                >
                  View All 11 Services →
                </Link>
              </div>
            </section>

            {/* Academy CTA */}
            <div className="glass-card p-5 border border-gold/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-full -mr-8 -mt-8" />
              <div className="relative z-10">
                <GraduationCap size={20} className="text-gold mb-3" strokeWidth={1.5} />
                <h3 className="font-body font-semibold text-cream text-sm mb-1.5">Interested in Training?</h3>
                <p className="text-xs text-muted font-body mb-4 leading-relaxed">
                  Enrol in our nail tech, makeup, braiding, or lash extension courses.
                </p>
                <Button variant="gold" size="sm" fullWidth>
                  <Link href="/academy">Browse Courses</Link>
                </Button>
              </div>
            </div>

            {/* Studio contact */}
            <div className="glass-card p-4">
              <p className="text-xs tracking-widest uppercase text-muted font-body mb-3">Contact Studio</p>
              <a href={`tel:${BRAND.phone}`} className="text-sm text-bloom font-body font-semibold block hover:text-bloom-light transition-colors">
                {BRAND.phone}
              </a>
              <p className="text-xs text-muted font-body mt-1.5">{BRAND.address}</p>
              <p className="text-xs text-muted font-body mt-0.5">Mon–Sat 8AM–7PM · Sun 10AM–5PM</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
