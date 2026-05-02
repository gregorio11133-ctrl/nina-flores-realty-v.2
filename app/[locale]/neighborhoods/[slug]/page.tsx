import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { CheckCircle2 } from 'lucide-react';
import CincLink from '@/components/CincLink';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { NEIGHBORHOODS, getNeighborhood } from '@/lib/neighborhoods';

export function generateStaticParams() {
  return NEIGHBORHOODS.flatMap(n => [
    { locale: 'en', slug: n.slug },
    { locale: 'es', slug: n.slug },
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) return {};
  const name = locale === 'es' ? n.nameEs : n.name;
  return {
    title: locale === 'es'
      ? `Casas en Venta en ${name} | Nina Flores REALTOR®`
      : `Homes for Sale in ${name}, AZ | Nina Flores REALTOR®`,
    description: locale === 'es' ? n.descriptionEs : n.description,
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const n = getNeighborhood(slug);
  if (!n) notFound();

  const t = await getTranslations({ locale, namespace: 'neighborhoods' });
  const isEs = locale === 'es';
  const name = isEs ? n.nameEs : n.name;
  const description = isEs ? n.descriptionEs : n.description;
  const highlights = isEs ? n.highlightsEs : n.highlights;

  return (
    <>
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <p className="text-xs uppercase tracking-widest mb-2 opacity-70" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-gold)' }}>
          {isEs ? 'Vecindario' : 'Neighborhood Guide'}
        </p>
        <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{name}</h1>
      </div>

      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-10 opacity-80" style={{ fontFamily: 'var(--font-body)' }}>{description}</p>

          <div className="rounded-sm p-6 mb-10" style={{ background: 'var(--color-cream-dark)' }}>
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              {isEs ? 'Lo Más Destacado' : 'Area Highlights'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-maroon)' }} className="shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-12">
            <CincLink
              href={n.cinc_url}
              className="inline-block px-8 py-3.5 rounded-sm font-bold text-white text-base transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
              title={isEs ? 'Abre la búsqueda de propiedades' : 'Opens property search'}
            >
              {t('searchIn')} {name}
            </CincLink>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
            {isEs ? '¿Interesado en este vecindario?' : 'Interested in This Neighborhood?'}
          </h2>
          <div className="rounded-sm p-8 shadow-sm" style={{ background: 'var(--color-white)' }}>
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </>
  );
}
