import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Users, Award, Home, TrendingUp, Building2 } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'es'
    ? { title: 'Especialidades | Nina Flores REALTOR®', description: 'Compradores primerizos, propiedades de lujo, reubicación, inversión y nuevas construcciones en Tucson con Nina Flores.' }
    : { title: 'Specialties | Nina Flores REALTOR®', description: 'First-time buyers, luxury properties, relocation, investment, and new builds in Tucson with Nina Flores.' };
}

const SPECIALTIES = [
  {
    key: 'firstTimeBuyers',
    icon: Users,
    enTitle: 'First-Time Home Buyers',
    esTitle: 'Compradores Primerizos',
    enBody: [
      'Buying your first home is one of the biggest financial decisions of your life. Nina walks alongside first-time buyers with patience, education, and a commitment to making the process clear and stress-free.',
      'From understanding your credit score to navigating the closing table, Nina breaks down every step in plain language — in English or Spanish.',
      'Nina also works with first-time buyers to access state and local down payment assistance programs available in Arizona, which can make homeownership more accessible than you might think.',
    ],
    esBody: [
      'Comprar tu primera casa es una de las decisiones financieras más importantes de tu vida. Nina acompaña a los compradores primerizos con paciencia, educación y el compromiso de hacer el proceso claro y sin estrés.',
      'Desde entender tu puntaje de crédito hasta navegar la mesa de cierre, Nina explica cada paso en términos sencillos, en inglés o español.',
      'Nina también trabaja con compradores primerizos para acceder a programas de ayuda para el enganche disponibles en Arizona, que pueden hacer que la propiedad sea más accesible de lo que crees.',
    ],
  },
  {
    key: 'luxury',
    icon: Award,
    enTitle: 'Luxury Properties',
    esTitle: 'Propiedades de Lujo',
    enBody: [
      'Tucson\'s luxury market is quietly one of the best-kept secrets in the Southwest. From the custom estates of Catalina Foothills to golf communities in Oro Valley and Dove Mountain, premium properties here offer unmatched value.',
      'Nina brings discretion, market intelligence, and a refined network to every luxury transaction. She understands that high-end buyers and sellers require more than a transaction — they require a trusted advisor.',
    ],
    esBody: [
      'El mercado de lujo de Tucson es uno de los secretos mejor guardados del suroeste. Desde las residencias personalizadas de Catalina Foothills hasta las comunidades de golf en Oro Valley y Dove Mountain, las propiedades premium aquí ofrecen un valor incomparable.',
      'Nina aporta discreción, inteligencia de mercado y una red refinada en cada transacción de lujo. Comprende que los compradores y vendedores de alto nivel necesitan más que una transacción: necesitan un asesor de confianza.',
    ],
  },
  {
    key: 'relocation',
    icon: Home,
    enTitle: 'Relocation',
    esTitle: 'Reubicación',
    enBody: [
      'Tucson welcomes thousands of new residents every year — retirees, remote workers, military families, and professionals drawn by the cost of living, climate, and culture.',
      'Nina specializes in helping out-of-state buyers navigate Tucson remotely. She conducts virtual tours, provides detailed neighborhood analyses, and guides clients through the entire purchase process without requiring multiple trips.',
      'If you\'re relocating to Tucson, Nina is your first call.',
    ],
    esBody: [
      'Tucson recibe a miles de nuevos residentes cada año: jubilados, trabajadores remotos, familias militares y profesionales atraídos por el costo de vida, el clima y la cultura.',
      'Nina se especializa en ayudar a compradores de otros estados a navegar Tucson de forma remota. Realiza recorridos virtuales, proporciona análisis detallados de vecindarios y guía a los clientes a través de todo el proceso de compra sin necesidad de múltiples viajes.',
      'Si te estás mudando a Tucson, Nina es tu primer llamada.',
    ],
  },
  {
    key: 'investment',
    icon: TrendingUp,
    enTitle: 'Investment Properties',
    esTitle: 'Propiedades de Inversión',
    enBody: [
      'Tucson\'s rental market is robust, driven by the University of Arizona, Davis-Monthan Air Force Base, and a growing remote workforce. For investors, it offers consistent demand and strong cap rates compared to coastal markets.',
      'Nina helps investors identify single-family rentals, multi-family properties, and fix-and-flip opportunities across the Tucson metro. She understands what tenants want and what landlords need to protect their investment.',
    ],
    esBody: [
      'El mercado de alquiler de Tucson es sólido, impulsado por la Universidad de Arizona, la Base Aérea Davis-Monthan y una creciente fuerza laboral remota. Para los inversores, ofrece demanda constante y buenas tasas de rentabilidad en comparación con los mercados costeros.',
      'Nina ayuda a los inversores a identificar alquileres unifamiliares, propiedades multifamiliares y oportunidades de remodelación y venta en todo el área metropolitana de Tucson.',
    ],
  },
  {
    key: 'newBuilds',
    icon: Building2,
    enTitle: 'New Home Builds',
    esTitle: 'Nuevas Construcciones',
    enBody: [
      'New construction communities are expanding rapidly across Marana, Vail, Sahuarita, and Marana. While builders offer their own sales representatives, having Nina as your buyer\'s agent costs you nothing — and protects your interests at every stage.',
      'Nina knows the local builders, understands which communities offer the best value, and ensures your contract includes the right contingencies and upgrades. She\'s your advocate, not the builder\'s.',
    ],
    esBody: [
      'Las comunidades de nueva construcción se están expandiendo rápidamente en Marana, Vail y Sahuarita. Aunque los constructores ofrecen sus propios representantes de ventas, tener a Nina como tu agente compradora no te cuesta nada, y protege tus intereses en cada etapa.',
      'Nina conoce a los constructores locales, entiende qué comunidades ofrecen el mejor valor y se asegura de que tu contrato incluya las contingencias y mejoras correctas. Es tu defensora, no la del constructor.',
    ],
  },
];

export default async function SpecialtiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEs = locale === 'es';

  return (
    <>
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
          {isEs ? 'Especialidades' : 'Specialties'}
        </h1>
        <p className="mt-3 opacity-80 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
          {isEs ? 'La experiencia correcta para cada tipo de comprador o vendedor.' : 'The right expertise for every type of buyer or seller.'}
        </p>
      </div>

      {SPECIALTIES.map((s, idx) => (
        <section
          key={s.key}
          id={s.key}
          className="py-16 px-4"
          style={{ background: idx % 2 === 0 ? 'var(--color-cream)' : 'var(--color-cream-dark)' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--color-maroon)', color: 'white' }}>
                <s.icon size={20} />
              </div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
                {isEs ? s.esTitle : s.enTitle}
              </h2>
            </div>
            <div className="space-y-4 mb-8">
              {(isEs ? s.esBody : s.enBody).map((p, i) => (
                <p key={i} className="text-base leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-body)' }}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 px-4" style={{ background: 'var(--color-maroon)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            {isEs ? '¿Listo para empezar?' : 'Ready to Get Started?'}
          </h2>
          <div className="rounded-sm p-8 shadow-lg" style={{ background: 'var(--color-cream)' }}>
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </>
  );
}
