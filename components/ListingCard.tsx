import Image from 'next/image';
import { useTranslations } from 'next-intl';
import CincLink from './CincLink';
import { Bed, Bath, Square } from 'lucide-react';
import type { FeaturedListing } from '@/types';

const SEED_LISTINGS: FeaturedListing[] = [
  { id: '1', address: '4521 E Sunrise Dr, Tucson, AZ 85718', price: 485000, bedrooms: 4, bathrooms: 2.5, sqft: 2340, photo_url: '', cinc_url: 'https://ninaflores.viewalltucsonhomes.com/featured', active: true, display_order: 1, created_at: '' },
  { id: '2', address: '1105 W Calle Torim, Tucson, AZ 85745', price: 319000, bedrooms: 3, bathrooms: 2, sqft: 1680, photo_url: '', cinc_url: 'https://ninaflores.viewalltucsonhomes.com/featured', active: true, display_order: 2, created_at: '' },
  { id: '3', address: '9872 N Thornberry Dr, Marana, AZ 85742', price: 549000, bedrooms: 5, bathrooms: 3, sqft: 3100, photo_url: '', cinc_url: 'https://ninaflores.viewalltucsonhomes.com/featured', active: true, display_order: 3, created_at: '' },
];

interface Props { listings?: FeaturedListing[]; }

function Card({ listing }: { listing: FeaturedListing }) {
  const t = useTranslations('listings');
  const fmt = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <div className="rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ background: 'var(--color-white)' }}>
      <div className="relative h-48" style={{ background: 'var(--color-cream-dark)' }}>
        {listing.photo_url ? (
          <Image src={listing.photo_url} alt={listing.address} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="text-6xl" style={{ color: 'var(--color-maroon)' }}>🏠</span>
          </div>
        )}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-sm font-bold text-white text-sm" style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}>
          {fmt(listing.price)}
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-sm mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
          {listing.address}
        </p>
        <div className="flex gap-4 text-xs opacity-60 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          {listing.bedrooms && <span className="flex items-center gap-1"><Bed size={12} /> {listing.bedrooms} {t('beds')}</span>}
          {listing.bathrooms && <span className="flex items-center gap-1"><Bath size={12} /> {listing.bathrooms} {t('baths')}</span>}
          {listing.sqft && <span className="flex items-center gap-1"><Square size={12} /> {listing.sqft.toLocaleString()} {t('sqft')}</span>}
        </div>
        <CincLink
          href={listing.cinc_url}
          className="text-sm font-bold transition-colors hover:opacity-80"
          style={{ color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
        >
          {t('viewListing')}
        </CincLink>
      </div>
    </div>
  );
}

export default function ListingCard({ listings = SEED_LISTINGS }: Props) {
  return (
    <>
      {listings.map(l => <Card key={l.id} listing={l} />)}
    </>
  );
}
