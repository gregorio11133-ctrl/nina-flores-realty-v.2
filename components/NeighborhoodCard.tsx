import Image from 'next/image';
import Link from 'next/link';

interface NeighborhoodCardProps {
  slug: string;
  name: string;
  description: string;
  image?: string;
  locale: string;
}

export default function NeighborhoodCard({ slug, name, description, image, locale }: NeighborhoodCardProps) {
  const base = locale === 'en' ? '' : '/es';
  return (
    <Link
      href={`${base}/neighborhoods/${slug}`}
      className="group block rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="relative h-40 overflow-hidden" style={{ background: 'var(--color-cream-dark)' }}>
        {image ? (
          <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black opacity-10" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              {name[0]}
            </span>
          </div>
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(107,26,42,0.6) 0%, transparent 60%)' }} />
        <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
          {name}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-sm opacity-70 line-clamp-2" style={{ fontFamily: 'var(--font-body)' }}>{description}</p>
        <span className="inline-block mt-3 text-xs font-bold tracking-wide uppercase" style={{ color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}>
          Explore →
        </span>
      </div>
    </Link>
  );
}
