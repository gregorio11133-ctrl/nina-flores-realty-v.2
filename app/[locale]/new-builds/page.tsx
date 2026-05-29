import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { Building2, CheckCircle, Shield, Search } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'es'
    ? { title: 'Nuevas Construcciones en Tucson | Nina Flores REALTOR®', description: 'Compra una casa nueva en Tucson con Nina Flores como tu agente de comprador. Sin costo adicional para ti.' }
    : { title: 'New Home Builds in Tucson | Nina Flores REALTOR®', description: 'Buy a new construction home in Tucson with Nina Flores as your buyer\'s agent — at no extra cost to you.' };
}

const WHY_NINA = [
  {
    enTitle: "Nina works for you — not the builder",
    esTitle: "Nina trabaja para ti, no para el constructor",
    enBody: "The builder's on-site sales rep represents the builder's interests. Nina represents yours — reviewing contracts, negotiating upgrades, and protecting your investment from day one.",
    esBody: "El representante de ventas del constructor representa los intereses del constructor. Nina representa los tuyos: revisa contratos, negocia mejoras y protege tu inversión desde el primer día.",
  },
  {
    enTitle: "No extra cost to you",
    esTitle: "Sin costo adicional para ti",
    enBody: "In new construction transactions, the builder pays the buyer's agent commission. You get expert representation at zero additional cost.",
    esBody: "En transacciones de nueva construcción, el constructor paga la comisión del agente del comprador. Obtienes representación experta sin costo adicional.",
  },
  {
    enTitle: "She knows the builders",
    esTitle: "Ella conoce a los constructores",
    enBody: "Nina has relationships with Tucson's leading homebuilders across Marana, Vail, Sahuarita, and Oro Valley. She knows which communities offer the best value, incentive programs, and warranty coverage.",
    esBody: "Nina tiene relaciones con los principales constructores de Tucson en Marana, Vail, Sahuarita y Oro Valley. Sabe qué comunidades ofrecen el mejor valor, programas de incentivos y cobertura de garantía.",
  },
  {
    enTitle: "Contract review and upgrade guidance",
    esTitle: "Revisión de contratos y asesoría en mejoras",
    enBody: "Builder contracts favor builders. Nina reviews every clause and helps you prioritize which upgrades deliver real resale value versus which ones are overpriced add-ons.",
    esBody: "Los contratos de los constructores favorecen a los constructores. Nina revisa cada cláusula y te ayuda a priorizar qué mejoras ofrecen valor real de reventa frente a cuáles son complementos sobrevalorados.",
  },
];

const COMMUNITIES = [
  { area: 'Marana', enDesc: 'Dove Mountain, Gladden Farms, Tangerine Road corridor — master-planned living with mountain views.', esDesc: 'Dove Mountain, Gladden Farms, corredor Tangerine — vida planificada con vistas a la montaña.' },
  { area: 'Vail', enDesc: 'Rincon Valley and surrounding new communities — top-rated schools and family-friendly atmosphere.', esDesc: 'Rincon Valley y comunidades nuevas — escuelas de alta calificación y ambiente familiar.' },
  { area: 'Sahuarita', enDesc: 'Rancho Sahuarita and Green Valley Farms — affordable new builds south of Tucson.', esDesc: 'Rancho Sahuarita y Green Valley Farms — nuevas construcciones accesibles al sur de Tucson.' },
  { area: 'Oro Valley', enDesc: 'Upscale communities with golf, mountain views, and premium amenities.', esDesc: 'Comunidades exclusivas con golf, vistas a la montaña y amenidades premium.' },
];

export default async function NewBuildsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEs = locale === 'es';
  const base = locale === 'en' ? '' : '/es';

  return (
    <>
      {/* Hero */}
      <div className="py-20 px-4 text-center" style={{ background: 'var(--color-charcoal)' }}>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: 'var(--color-maroon)' }}>
          <Building2 size={26} color="white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {isEs ? 'Nuevas Construcciones' : 'New Home Builds'}
        </h1>
        <p className="text-base opacity-70 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
          {isEs
            ? 'Comprar una casa nueva es emocionante — y tener a Nina de tu lado hace que el proceso sea seguro, claro y sin sorpresas.'
            : 'Buying a brand-new home is exciting — and having Nina in your corner makes the process safe, clear, and free of surprises.'}
        </p>
        <a
          href="https://www.showingnew.com/ninaflores"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
          style={{ background: 'var(--color-maroon)', color: 'white', fontFamily: 'var(--font-body)' }}
        >
          <Search size={16} />
          {isEs ? 'Buscar Nuevas Casas' : 'Search New Homes'}
        </a>
      </div>

      {/* Why Nina Section */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
              {isEs ? '¿Por qué necesitas un agente del comprador para nueva construcción?' : 'Why You Need a Buyer\'s Agent for New Construction'}
            </h2>
            <p className="text-base opacity-70 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
              {isEs
                ? 'Muchos compradores asumen que pueden trabajar directamente con el constructor. Aquí está la realidad:'
                : "Many buyers assume they can work directly with the builder. Here's the reality:"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_NINA.map((item) => (
              <div key={item.enTitle} className="rounded-sm p-6" style={{ background: '#fff', border: '1px solid var(--color-cream-dark)' }}>
                <div className="flex items-start gap-3">
                  <Shield size={20} className="shrink-0 mt-0.5" style={{ color: 'var(--color-maroon)' }} />
                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
                      {isEs ? item.esTitle : item.enTitle}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-75" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
                      {isEs ? item.esBody : item.enBody}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Communities */}
      <section className="py-16 px-4" style={{ background: '#fff' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-3 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
            {isEs ? 'Comunidades Activas de Nueva Construcción' : 'Active New Construction Communities'}
          </h2>
          <p className="text-base opacity-70 text-center mb-10" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
            {isEs
              ? 'Nina trabaja con constructores en estas áreas de alto crecimiento en el área de Tucson.'
              : "Nina works with builders across these high-growth areas in the Tucson metro."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {COMMUNITIES.map((c) => (
              <div key={c.area} className="rounded-sm p-5" style={{ background: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={16} style={{ color: 'var(--color-maroon)' }} />
                  <h3 className="font-bold text-base" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>{c.area}</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-75" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
                  {isEs ? c.esDesc : c.enDesc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.showingnew.com/ninaflores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
            >
              <Search size={16} />
              {isEs ? 'Buscar Nuevas Casas' : 'Search New Homes'}
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-10" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
            {isEs ? 'Cómo funciona con Nina' : 'How It Works with Nina'}
          </h2>
          <ol className="space-y-6">
            {(isEs ? [
              ['Conecta con Nina', 'Cuéntale sobre tu presupuesto, comunidad preferida y plazos. Ella te guiará hacia los constructores y comunidades adecuadas.'],
              ['Visita comunidades', 'Nina te acompaña a los modelos y centros de ventas para que no enfrentes la presión del vendedor solo.'],
              ['Revisa el contrato', 'Los contratos de constructores son extensos y favorecen al constructor. Nina los revisa línea por línea contigo.'],
              ['Selecciona mejoras', 'Nina te ayuda a elegir las mejoras que añaden valor real de reventa — y las que debes omitir.'],
              ['Cierre y entrega', 'Nina está presente en la inspección final y en el cierre para asegurarse de que todo esté en orden.'],
            ] : [
              ['Connect with Nina', "Tell her your budget, preferred community, and timeline. She'll guide you toward the right builders and communities."],
              ['Tour communities', "Nina accompanies you to model homes and sales centers so you don't face the salesperson alone."],
              ['Review the contract', "Builder contracts are lengthy and favor the builder. Nina reviews them line by line with you."],
              ['Select upgrades', "Nina helps you choose upgrades that add real resale value — and the ones to skip."],
              ['Close and move in', "Nina is present at the final walk-through and closing to ensure everything is as promised."],
            ]).map(([title, body], i) => (
              <li key={title} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white" style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>{title}</h3>
                  <p className="text-sm leading-relaxed opacity-75" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-4" style={{ background: '#fff' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
            {isEs ? 'Listo para explorar nuevas construcciones' : 'Ready to Explore New Builds?'}
          </h2>
          <LeadCaptureForm />
        </div>
      </section>
    </>
  );
}
