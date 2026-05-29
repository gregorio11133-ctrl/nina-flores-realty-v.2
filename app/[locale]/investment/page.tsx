import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { TrendingUp, Home, Building2, Repeat, Star, Globe } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'es'
    ? { title: 'Propiedades de Inversión en Tucson | Nina Flores REALTOR®', description: 'Encuentra propiedades de inversión en Tucson — alquileres, multifamiliares, flipping y más con Nina Flores.' }
    : { title: 'Investment Properties in Tucson | Nina Flores REALTOR®', description: 'Find investment properties in Tucson — rentals, multifamily, flipping, STRs, and generational wealth with Nina Flores.' };
}

const INVESTMENT_TYPES = [
  {
    icon: Home,
    enTitle: 'Single-Family Rentals',
    esTitle: 'Alquileres Unifamiliares',
    enBody: "Tucson's rental market is driven by the University of Arizona, Davis-Monthan Air Force Base, and a steady influx of remote workers. Single-family homes in strong school districts and near employment hubs consistently command reliable rents and low vacancy. Nina helps you identify properties with the best cap rates and long-term appreciation potential.",
    esBody: 'El mercado de alquiler de Tucson está impulsado por la Universidad de Arizona, la Base Aérea Davis-Monthan y una constante afluencia de trabajadores remotos. Nina te ayuda a identificar propiedades con las mejores tasas de rentabilidad y potencial de apreciación a largo plazo.',
  },
  {
    icon: Building2,
    enTitle: 'Multifamily Properties',
    esTitle: 'Propiedades Multifamiliares',
    enBody: 'Duplexes, triplexes, and small apartment buildings in Tucson offer investors the ability to scale income while managing one property. Nina has experience navigating multifamily transactions and can connect you with lenders who specialize in investor financing to maximize your leverage.',
    esBody: 'Dúplex, tríplex y pequeños edificios de apartamentos en Tucson ofrecen a los inversores la capacidad de escalar ingresos mientras administran una sola propiedad. Nina tiene experiencia en transacciones multifamiliares y puede conectarte con prestamistas especializados en financiamiento para inversores.',
  },
  {
    icon: Star,
    enTitle: 'Generational Wealth',
    esTitle: 'Riqueza Generacional',
    enBody: "Real estate has created more generational wealth than almost any other asset class. Whether you're purchasing your first investment property or expanding a portfolio, Nina helps you think long-term — building equity that can be passed down or leveraged for future purchases. Tucson's steady appreciation and lower price point make it an ideal market for building lasting wealth.",
    esBody: 'Los bienes raíces han generado más riqueza generacional que casi cualquier otra clase de activos. Nina te ayuda a pensar a largo plazo, construyendo capital que se puede transmitir o aprovechar para compras futuras. El precio accesible de Tucson y su apreciación constante lo convierten en un mercado ideal para construir riqueza duradera.',
  },
  {
    icon: Repeat,
    enTitle: 'Fix & Flip',
    esTitle: 'Comprar, Renovar y Vender',
    enBody: "Tucson's housing stock includes a significant number of older properties ripe for renovation. For experienced flippers or first-time investors looking to build equity fast, Nina can identify undervalued properties, connect you with contractor networks, and advise on which improvements deliver the best resale return in this specific market.",
    esBody: 'Tucson tiene una gran cantidad de propiedades más antiguas listas para renovar. Nina puede identificar propiedades subvaloradas, conectarte con redes de contratistas y asesorarte sobre qué mejoras generan el mejor retorno en este mercado específico.',
  },
  {
    icon: Globe,
    enTitle: 'Short-Term Rentals (STRs)',
    esTitle: 'Alquileres a Corto Plazo (STR)',
    enBody: "Tucson draws visitors year-round — snowbirds, university families, Gem Show attendees, and desert tourism enthusiasts. Short-term rental properties near the U of A, downtown, or the foothills can generate significantly higher per-night income than traditional leases. Nina understands STR zoning rules in Tucson and can help you find STR-eligible properties in high-demand areas.",
    esBody: 'Tucson atrae visitantes durante todo el año. Las propiedades de alquiler a corto plazo cerca de la U of A, el centro o las colinas pueden generar ingresos por noche significativamente más altos que los arrendamientos tradicionales. Nina entiende las reglas de zonificación de STR en Tucson y puede ayudarte a encontrar propiedades elegibles en áreas de alta demanda.',
  },
];

export default async function InvestmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEs = locale === 'es';
  const base = locale === 'en' ? '' : '/es';

  return (
    <>
      {/* Hero */}
      <div className="py-20 px-4 text-center" style={{ background: 'var(--color-charcoal)' }}>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: 'var(--color-maroon)' }}>
          <TrendingUp size={26} color="white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {isEs ? 'Propiedades de Inversión' : 'Investment Properties'}
        </h1>
        <p className="text-base opacity-70 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
          {isEs
            ? 'Tucson es uno de los mercados de inversión más sólidos del suroeste — y Nina conoce cada oportunidad.'
            : "Tucson is one of the Southwest's most solid investment markets — and Nina knows every opportunity."}
        </p>
      </div>

      {/* Why Tucson */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
            {isEs ? '¿Por qué invertir en Tucson?' : 'Why Invest in Tucson?'}
          </h2>
          <p className="text-base leading-relaxed opacity-80 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
            {isEs
              ? 'Con precios por debajo del mercado en comparación con Phoenix o ciudades costeras, demanda de alquiler impulsada por más de 45,000 estudiantes universitarios y una base militar activa, y un crecimiento de población constante, Tucson ofrece una combinación poco común de accesibilidad y oportunidad.'
              : "With price points well below Phoenix or coastal metros, rental demand driven by 45,000+ university students and an active military base, and consistent population growth, Tucson offers an uncommon combination of affordability and opportunity."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(isEs
              ? ['Precios accesibles', 'Demanda universitaria', 'Base militar activa', 'Crecimiento constante']
              : ['Affordable entry point', 'University-driven demand', 'Active military base', 'Consistent growth']
            ).map((item) => (
              <div key={item} className="rounded-sm p-4 text-sm font-semibold" style={{ background: '#fff', border: '1px solid var(--color-cream-dark)', fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      {INVESTMENT_TYPES.map((type, idx) => (
        <section
          key={type.enTitle}
          className="py-14 px-4"
          style={{ background: idx % 2 === 0 ? '#fff' : 'var(--color-cream)' }}
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--color-maroon)' }}>
              <type.icon size={22} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
                {isEs ? type.esTitle : type.enTitle}
              </h2>
              <p className="text-base leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
                {isEs ? type.esBody : type.enBody}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          {isEs ? '¿Listo para encontrar tu próxima inversión?' : 'Ready to find your next investment?'}
        </h2>
        <p className="text-base opacity-80 mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
          {isEs ? 'Contacta a Nina hoy.' : 'Contact Nina Today.'}
        </p>
        <Link
          href={`${base}/contact`}
          className="inline-block px-8 py-4 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
          style={{ background: 'var(--color-cream)', color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
        >
          {isEs ? 'Contactar a Nina Hoy' : 'Contact Nina Today'}
        </Link>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-4" style={{ background: '#fff' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
            {isEs ? 'Hablemos sobre tu inversión' : "Let's Talk About Your Investment"}
          </h2>
          <LeadCaptureForm />
        </div>
      </section>
    </>
  );
}
