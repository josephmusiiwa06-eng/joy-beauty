import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  duration: string;
  href?: string;
  accent?: 'bloom' | 'gold';
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  duration,
  href = '/book',
  accent = 'bloom',
}: ServiceCardProps) {
  const accentStyles = {
    bloom: {
      icon: 'text-bloom bg-bloom/10 border-bloom/20',
      line: 'bg-bloom',
      hover: 'group-hover:border-bloom/30 group-hover:shadow-card-hover',
    },
    gold: {
      icon: 'text-gold bg-gold/10 border-gold/20',
      line: 'bg-gold',
      hover: 'group-hover:border-gold/30 group-hover:shadow-gold',
    },
  };

  const styles = accentStyles[accent];

  return (
    <Link href={href} className="group block">
      <article
        className={`relative glass-card p-8 transition-all duration-500 ${styles.hover} cursor-none`}
      >
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-px ${styles.line} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Icon */}
        <div className={`inline-flex p-3 border ${styles.icon} mb-6 transition-transform duration-500 group-hover:scale-110`}>
          <Icon size={22} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-semibold text-cream mb-3 group-hover:text-bloom transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-cream-dim font-body leading-relaxed mb-6">
          {description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <span className="font-display text-lg font-semibold text-shimmer">
            {price}
          </span>
          <span className="text-xs tracking-widest uppercase text-muted font-body">
            {duration}
          </span>
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <span className="text-bloom text-lg">→</span>
        </div>
      </article>
    </Link>
  );
}
