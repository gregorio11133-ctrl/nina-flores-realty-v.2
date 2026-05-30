import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { MapPin, BookOpen } from 'lucide-react';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import LeadCaptureForm from '@/components/LeadCaptureForm';
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
  const base = locale === 'en' ? '' : '/es';
  const isEs = locale === 'es';

  return (
    <>
      {/* Hero */}
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{t('title')}</h1>
        <p className="mt-3 opacity-80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>{t('subtitle')}</p>
        <div className="mt-6">
          <a
            href="/RelocationGuide.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            <BookOpen size={15} />
            {isEs ? 'Guía Gratuita de Reubicación' : 'FREE Relocation Guide'}
          </a>
        </div>
      </div>

      {/* Neighborhood Grid */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEIGHBORHOODS.map(n => (
            <NeighborhoodCard
              key={n.slug}
              slug={n.slug}
              name={isEs ? n.nameEs : n.name}
              description={isEs ? n.descriptionEs : n.description}
              image={n.image}
              locale={locale}
            />
          ))}
        </div>
      </section>

      {/* Relocation Section */}
      <section className="py-16 px-4" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}>
                {isEs ? 'Reubicación' : 'Relocation'}
              </p>
              <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
                {isEs ? '¿Te mudas desde otro estado?' : 'Moving from out of State?'}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)', opacity: 0.8 }}>
                {isEs
                  ? 'Reubicarse puede parecer abrumador, especialmente cuando no conoces el área. Nina ha ayudado a decenas de familias a hacer una transición sin problemas a Tucson y el sur de Arizona. Desde entender los distritos escolares hasta encontrar el vecindario adecuado para tu estilo de vida, Nina está contigo en cada paso.'
                  : "Relocating can feel overwhelming — especially when you don't know the area. Nina has helped dozens of families make a smooth transition to Tucson and Southern Arizona. From understanding school districts to finding the right neighborhood for your lifestyle, Nina is with you every step of the way."}
              </p>
              <ul className="space-y-2 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                {(isEs
                  ? ['Orientación personalizada del vecindario', 'Información sobre distritos escolares y comodidades', 'Tours virtuales y en persona disponibles']
                  : ['Personalized neighborhood orientation', 'School district & amenities guidance', 'Virtual and in-person tours available']
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.85 }}>
                    <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--color-maroon)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`${base}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
                >
                  <BookOpen size={15} />
                  {isEs ? 'Guía Gratuita de Reubicación' : 'Free Relocation Guide'}
                </a>
                <a
                  href={`${base}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm border transition-colors hover:bg-gray-50"
                  style={{ borderColor: 'var(--color-maroon)', color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
                >
                  {isEs ? 'Contactar a Nina' : 'Contact Nina'}
                </a>
              </div>
            </div>
            <div
              className="rounded-sm overflow-hidden"
              style={{ background: 'var(--color-cream)', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-cream-dark)' }}
            >
              <div className="text-center px-8">
                <div className="text-5xl mb-4">🏡</div>
                <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)', opacity: 0.5 }}>
                  {isEs ? 'Foto próximamente' : 'Photo Coming Soon'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Homebuying Banner */}
      <section className="py-12 px-4" style={{ background: 'var(--color-cream-dark, #e8d9b8)' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div>
            <h3 className="text-xl font-black mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
              {isEs ? '¿Nuevo en el proceso de compra?' : 'New to the homebuying process?'}
            </h3>
            <p className="text-sm opacity-70" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
              {isEs
                ? 'Lee nuestra guía de consejos para compradores — para que entres al proceso con confianza.'
                : "Read our tips for homebuying guide — so you walk into the process with confidence."}
            </p>
          </div>
          <Link
            href={`${base}/first-time-buyers/tips`}
            className="shrink-0 px-6 py-3 rounded-sm font-bold text-sm text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            {isEs ? 'Consejos para Comprar' : 'Tips for Homebuying'}
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4" style={{ background: '#fff' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
              {isEs ? '¿Listo para explorar?' : 'Ready to Explore?'}
            </h2>
            <p className="text-base opacity-70" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
              {isEs
                ? 'Cuéntale a Nina sobre tu búsqueda y te ayudará a encontrar el vecindario perfecto.'
                : "Tell Nina about your search and she'll help you find the perfect neighborhood."}
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>
    </>
  );
}
