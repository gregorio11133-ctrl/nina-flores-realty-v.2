import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'es'
    ? { title: 'Vecindarios de Tucson | Nina Flores REALTOR®', description: 'Explora los vecindarios de Tucson, Vail, Oro Valley, Green Valley, Marana y más con Nina Flores.' }
    : { title: 'Tucson Area Neighborhoods | Nina Flores REALTOR®', description: 'Explore Tucson, Vail, Oro Valley, Green Valley, Marana, and surrounding communities with Nina Flores.' };
}

export default async function NeighborhoodsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'neighborhoods' });

  return (
    <>
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{t('title')}</h1>
        <p className="mt-3 opacity-80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>{t('subtitle')}</p>
      </div>

      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEIGHBORHOODS.map(n => (
            <NeighborhoodCard
              key={n.slug}
              slug={n.slug}
              name={locale === 'es' ? n.nameEs : n.name}
              description={locale === 'es' ? n.descriptionEs : n.description}
              locale={locale}
            />
          ))}
        </div>
      </section>
    </>
  );
}
