'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Testimonial } from '@/types';

const SEED: Testimonial[] = [
  { id: '1', client_name: 'Maria & Carlos R.', quote: 'Nina made buying our first home in Tucson so much easier than we expected. She explained every step in Spanish and was always available when we had questions.', location: 'Marana, AZ', rating: 5, active: true, created_at: '' },
  { id: '2', client_name: 'The Johnson Family', quote: 'We relocated from California and Nina found us the perfect home in Oro Valley within two weeks of arriving. Her knowledge of the local market is unmatched.', location: 'Oro Valley, AZ', rating: 5, active: true, created_at: '' },
  { id: '3', client_name: 'David T.', quote: "I've worked with several agents over the years. Nina is in a different league — professional, honest, and she actually listens to what you're looking for.", location: 'Tucson, AZ', rating: 5, active: true, created_at: '' },
];

interface Props { testimonials?: Testimonial[]; }

export default function TestimonialsCarousel({ testimonials = SEED }: Props) {
  const t = useTranslations('testimonials');
  const [idx, setIdx] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  const prev = () => setIdx(i => (i - 1 + count) % count);
  const next = () => setIdx(i => (i + 1) % count);
  const current = testimonials[idx];

  return (
    <section style={{ background: 'var(--color-cream-dark)' }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
          {t('title')}
        </h2>

        <div className="relative min-h-[180px] flex flex-col items-center justify-center">
          <div className="flex gap-1 mb-4" aria-label={`${current.rating} stars`}>
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={18} fill="var(--color-gold)" stroke="var(--color-gold)" />
            ))}
          </div>

          <blockquote
            className="text-lg italic leading-relaxed mb-4 max-w-2xl"
            style={{ fontFamily: 'var(--font-script)', color: 'var(--color-charcoal)', fontSize: '1.25rem' }}
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div>
            <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-maroon)' }}>
              {current.client_name}
            </p>
            {current.location && (
              <p className="text-xs opacity-60" style={{ fontFamily: 'var(--font-body)' }}>{current.location}</p>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} aria-label="Previous testimonial" className="p-2 rounded-full transition-colors hover:bg-cream" style={{ color: 'var(--color-maroon)' }}>
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Go to testimonial ${i + 1}`}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === idx ? 'var(--color-maroon)' : 'var(--color-maroon)', opacity: i === idx ? 1 : 0.25 }}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next testimonial" className="p-2 rounded-full transition-colors" style={{ color: 'var(--color-maroon)' }}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
