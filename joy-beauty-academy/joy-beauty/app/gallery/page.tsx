import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { GALLERY_ITEMS, BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View the portfolio of Joy Beauty Academy & Saloon — nails, braids, makeup, lashes and more from our Cape Town studio.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-void">
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6">
        <div className="absolute top-20 right-16 w-56 h-56 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-bloom font-body">Our Work</span>
            <h1 className="font-display text-display-lg font-bold text-cream mt-4 leading-none">
              Gallery
            </h1>
          </div>
          <p className="text-cream-dim font-accent italic text-lg max-w-xs">
            Real results from real clients — every look crafted with love in Maitland, Cape Town.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 border-b border-bloom/10 pb-4 overflow-x-auto">
            {['All', 'Nails', 'Hair', 'Makeup', 'Lashes', 'Skin'].map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-xs tracking-widest uppercase font-body transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  i === 0
                    ? 'text-cream border-b-2 border-bloom -mb-[17px]'
                    : 'text-muted hover:text-cream-dim'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_ITEMS.map((item, i) => (
              <article
                key={item.id}
                className="break-inside-avoid group relative overflow-hidden"
                style={{ height: i % 3 === 0 ? '360px' : i % 3 === 1 ? '290px' : '320px' }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-xs tracking-widest uppercase font-body bg-bloom/85 backdrop-blur-sm text-cream">
                    {item.category}
                  </span>
                </div>

                {/* Title reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-base font-semibold text-cream">{item.title}</h3>
                  <Link href="/book" className="text-bloom text-xs font-body mt-1 block">Book this look →</Link>
                </div>

                <div className="absolute inset-0 border border-bloom/0 group-hover:border-bloom/25 transition-all duration-500 pointer-events-none" />
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <Button variant="outline" size="lg">See More on Instagram</Button>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 text-center border-t border-bloom/8">
        <span className="text-xs tracking-[0.4em] uppercase text-muted font-body">Follow Our Journey</span>
        <h2 className="font-display text-3xl font-bold text-cream mt-3 mb-3">
          @JoyBeautyCapeTown
        </h2>
        <p className="text-cream-dim font-body mb-8">Daily transformations, behind-the-scenes, and fresh looks</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="bloom">
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </Button>
          <Button variant="outline">
            <Link href="/book">Book Your Look</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
