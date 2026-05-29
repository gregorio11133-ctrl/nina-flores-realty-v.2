import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Phone, Mail } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'es'
    ? { title: 'Sobre Nina Flores | REALTOR® Bilingüe en Tucson', description: 'Conoce a Nina Flores, REALTOR® bilingüe con Omni Homes International en Tucson, AZ. Licencia SA712911000.' }
    : { title: 'About Nina Flores | Bilingual Tucson REALTOR®', description: 'Meet Nina Flores, bilingual REALTOR® with Omni Homes International in Tucson, AZ. License SA712911000.' };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEs = locale === 'es';

  const bio: ReactNode[] = isEs ? [
    'Nina Flores nació y creció en el sur de Arizona. Desde pequeña, aprendió a valorar las comunidades que hacen única a esta región: los vecindarios llenos de historia, las familias que llevan generaciones aquí y los recién llegados que están construyendo sus sueños en el desierto.',
    'Después de perder su hogar de la infancia durante la recesión de 2008, Nina, sus tres hermanos y su madre soltera se mudaron de un apartamento rentado a otro. Se las arreglaron, pero con los precios de renta en aumento, vecinos cuestionables y siempre a la merced de un arrendador poco dispuesto a reparar los problemas de la propiedad, echar raíces era todo un desafío. Cuando Nina y su esposo compraron su primera casa a los 24 años, ella finalmente encontró un sentido de estabilidad y paz que cambió el rumbo de su vida. Es este sentido de estabilidad y paz lo que la inspiró a entrar en el mundo de los bienes raíces, para ayudar a otros a alcanzarlo.',
    'Hoy, Nina trabaja con compradores primerizos, familias que se reubican, inversionistas y quienes buscan propiedades de lujo. También siente una profunda pasión por ayudar a los inquilinos a escapar del ciclo del alquiler — conectándolos con programas de asistencia para el pago inicial, prestamistas especializados y estrategias reales que hacen posible ser propietario de una vivienda, incluso cuando parece inalcanzable. Su enfoque es simple: conocer las necesidades de cada cliente y encontrar no solo una casa, sino el hogar correcto.',
    <>Cuando no está mostrando propiedades, le gusta pasar tiempo con su familia y sus dos perros, Frank y Beans. Además de ayudar a otros en bienes raíces, administra una tienda de segunda mano en línea llamada{' '}<a href="https://www.shopangelmade.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-maroon)', textDecoration: 'underline' }}>Coyote Flower</a>{' '}y es productora del podcast{' '}<a href="https://eltucsonan.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-maroon)', textDecoration: 'underline' }}>El Tucsonan</a>.</>,
  ] : [
    'Nina Flores was born and raised in Southern Arizona. Growing up, she developed a deep appreciation for the communities that make this region unique — historic neighborhoods, multigenerational families, and newcomers building their dreams in the desert.',
    'After losing her childhood home during the 2008 recession, Nina, her three siblings, and her single mother moved from one rented apartment to another. They got by, but with rising rent prices, questionable neighbors, and always being at the mercy of a landlord unwilling to fix property issues, setting down roots was a challenge. So when Nina and her husband purchased their first home at 24 years old, she finally had a sense of stability and peace that changed the trajectory of her life. It is this sense of stability and peace that inspired her to get into real estate — to help others achieve it for themselves.',
    'Today, Nina works with first-time buyers, relocating families, investors, and luxury property seekers. She also has a deep passion for helping renters break free from the cycle of renting — connecting them with down payment assistance programs, specialized lenders, and real strategies that make homeownership possible, even when it feels out of reach. Her approach is simple: understand each client\'s needs and find not just a house, but the right home.',
    <>When she&apos;s not showing homes, she likes to spend time with her family and two dogs, Frank and Beans. In addition to helping others in real estate, she runs an online thrift store called{' '}<a href="https://www.shopangelmade.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-maroon)', textDecoration: 'underline' }}>Coyote Flower</a>{' '}and is a producer for{' '}<a href="https://eltucsonan.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-maroon)', textDecoration: 'underline' }}>El Tucsonan Podcast</a>!</>,
  ];

  return (
    <>
      {/* Page header */}
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <p className="text-xs uppercase tracking-widest mb-2 opacity-70" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-gold)' }}>
          {isEs ? 'Tu Agente de Confianza' : 'Your Trusted Agent'}
        </p>
        <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
          {isEs ? 'Sobre Nina Flores' : 'About Nina Flores'}
        </h1>
      </div>

      {/* Bio section */}
      <section className="relative py-16 px-4" style={{ background: 'var(--color-cream)' }}>

        {/* Agave — desktop only, behind entire section, left edge */}
        <div className="absolute left-0 bottom-0 h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/agave.png" alt="" style={{ height: 'calc(100% + 32px)', width: 'auto', opacity: 0.18 }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">

          {/* Left sidebar — sticky on desktop */}
          <div className="shrink-0 flex flex-col items-center gap-4 md:sticky md:top-24">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl" style={{ border: '4px solid var(--color-maroon)' }}>
              <Image src="/nina-flores.jpg" alt="Nina Flores, REALTOR®" width={224} height={224} className="object-cover w-full h-full" />
            </div>
            <div className="text-center">
              <p className="font-black text-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>Nina Flores</p>
              <p className="text-sm opacity-60" style={{ fontFamily: 'var(--font-body)' }}>REALTOR® · SA712911000</p>
              <p className="text-sm opacity-60" style={{ fontFamily: 'var(--font-body)' }}>Omni Homes International</p>
            </div>
            <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: 'var(--color-maroon)' }} />
                <a href="tel:5203424124" className="hover:underline">520.342.4124</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: 'var(--color-maroon)' }} />
                <a href="mailto:NinaFloresRealty@gmail.com" className="hover:underline break-all">NinaFloresRealty@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Bio content + License Info */}
          <div className="relative flex-1 space-y-4">
            {bio.map((p, i) => (
              <p key={i} className="relative text-base leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-body)', zIndex: 30 }}>{p}</p>
            ))}

            {/* Agave — mobile only, overlays License Info tile, no layout space */}
            <div className="absolute bottom-0 right-0 pointer-events-none md:hidden" style={{ zIndex: 20 }} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/agave.png" alt="" style={{ height: '520px', width: 'auto', opacity: 0.18 }} />
            </div>

            {/* Javelina family walking animation */}
            <div className="relative w-full overflow-hidden" style={{ height: '130px', zIndex: 10 }} aria-hidden="true">
              <svg viewBox="0 0 900 130" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                {/* Subtle ground line */}
                <line x1="0" y1="120" x2="900" y2="120" stroke="var(--color-maroon)" strokeWidth="1" opacity="0.15" />

                {/* Family group — translates left to right */}
                <g>
                  <animateTransform attributeName="transform" type="translate" from="-600 0" to="1200 0" dur="18s" repeatCount="indefinite" />

                  {/* === Adult 1 (front/leading) === */}
                  <g transform="translate(320, 85)">
                    {/* Body */}
                    <ellipse cx="0" cy="0" rx="38" ry="20" fill="#2d2d2d" />
                    {/* Shoulder stripe */}
                    <ellipse cx="-7" cy="0" rx="11" ry="17" fill="#3c3c3c" />
                    {/* Head */}
                    <circle cx="33" cy="-11" r="14" fill="#222" />
                    {/* Snout */}
                    <ellipse cx="44" cy="-7" rx="9" ry="7" fill="#1a1a1a" />
                    {/* Nostril */}
                    <circle cx="50" cy="-5" r="1.5" fill="#0f0f0f" />
                    {/* Eye */}
                    <circle cx="36" cy="-15" r="2.5" fill="#e8e8e8" />
                    <circle cx="36.5" cy="-15" r="1.3" fill="#111" />
                    {/* Ears */}
                    <polygon points="24,-22 27,-33 32,-22" fill="#1a1a1a" />
                    <polygon points="20,-20 22,-28 26,-20" fill="#1a1a1a" />
                    {/* Tail stub */}
                    <ellipse cx="-38" cy="-4" rx="5" ry="4" fill="#1a1a1a" />
                    {/* Front outer leg */}
                    <g transform="translate(20, 19)">
                      <rect x="-3" y="0" width="6" height="16" rx="3" fill="#222" />
                      <animateTransform attributeName="transform" type="rotate" values="13 0 0; -13 0 0; 13 0 0" dur="0.7s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Front inner leg */}
                    <g transform="translate(11, 19)">
                      <rect x="-3" y="0" width="6" height="14" rx="3" fill="#222" />
                      <animateTransform attributeName="transform" type="rotate" values="-11 0 0; 11 0 0; -11 0 0" dur="0.7s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Back inner leg */}
                    <g transform="translate(-15, 19)">
                      <rect x="-3" y="0" width="6" height="16" rx="3" fill="#222" />
                      <animateTransform attributeName="transform" type="rotate" values="-11 0 0; 11 0 0; -11 0 0" dur="0.7s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Back outer leg */}
                    <g transform="translate(-25, 19)">
                      <rect x="-3" y="0" width="6" height="14" rx="3" fill="#222" />
                      <animateTransform attributeName="transform" type="rotate" values="13 0 0; -13 0 0; 13 0 0" dur="0.7s" repeatCount="indefinite" additive="sum" />
                    </g>
                  </g>

                  {/* === Baby (middle) === */}
                  <g transform="translate(185, 95)">
                    {/* Body */}
                    <ellipse cx="0" cy="0" rx="22" ry="12" fill="#3a3a3a" />
                    {/* Head */}
                    <circle cx="19" cy="-7" r="9" fill="#2d2d2d" />
                    {/* Snout */}
                    <ellipse cx="26" cy="-4" rx="5" ry="4" fill="#222" />
                    {/* Nostril */}
                    <circle cx="29" cy="-3" r="1" fill="#0f0f0f" />
                    {/* Eye */}
                    <circle cx="21" cy="-9" r="1.8" fill="#e8e8e8" />
                    <circle cx="21.3" cy="-9" r="0.9" fill="#111" />
                    {/* Ear */}
                    <polygon points="13,-14 15,-21 19,-14" fill="#222" />
                    {/* Tail stub */}
                    <ellipse cx="-22" cy="-2" rx="3" ry="2.5" fill="#222" />
                    {/* Front outer leg */}
                    <g transform="translate(10, 11)">
                      <rect x="-2.5" y="0" width="5" height="14" rx="2.5" fill="#2d2d2d" />
                      <animateTransform attributeName="transform" type="rotate" values="15 0 0; -15 0 0; 15 0 0" dur="0.55s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Front inner leg */}
                    <g transform="translate(3, 11)">
                      <rect x="-2.5" y="0" width="5" height="12" rx="2.5" fill="#2d2d2d" />
                      <animateTransform attributeName="transform" type="rotate" values="-12 0 0; 12 0 0; -12 0 0" dur="0.55s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Back inner leg */}
                    <g transform="translate(-9, 11)">
                      <rect x="-2.5" y="0" width="5" height="14" rx="2.5" fill="#2d2d2d" />
                      <animateTransform attributeName="transform" type="rotate" values="-12 0 0; 12 0 0; -12 0 0" dur="0.55s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Back outer leg */}
                    <g transform="translate(-16, 11)">
                      <rect x="-2.5" y="0" width="5" height="12" rx="2.5" fill="#2d2d2d" />
                      <animateTransform attributeName="transform" type="rotate" values="15 0 0; -15 0 0; 15 0 0" dur="0.55s" repeatCount="indefinite" additive="sum" />
                    </g>
                  </g>

                  {/* === Adult 2 (rear/trailing) — opposite leg phase === */}
                  <g transform="translate(60, 85)">
                    {/* Body */}
                    <ellipse cx="0" cy="0" rx="38" ry="20" fill="#2d2d2d" />
                    {/* Shoulder stripe */}
                    <ellipse cx="-7" cy="0" rx="11" ry="17" fill="#3c3c3c" />
                    {/* Head */}
                    <circle cx="33" cy="-11" r="14" fill="#222" />
                    {/* Snout */}
                    <ellipse cx="44" cy="-7" rx="9" ry="7" fill="#1a1a1a" />
                    {/* Nostril */}
                    <circle cx="50" cy="-5" r="1.5" fill="#0f0f0f" />
                    {/* Eye */}
                    <circle cx="36" cy="-15" r="2.5" fill="#e8e8e8" />
                    <circle cx="36.5" cy="-15" r="1.3" fill="#111" />
                    {/* Ears */}
                    <polygon points="24,-22 27,-33 32,-22" fill="#1a1a1a" />
                    <polygon points="20,-20 22,-28 26,-20" fill="#1a1a1a" />
                    {/* Tail stub */}
                    <ellipse cx="-38" cy="-4" rx="5" ry="4" fill="#1a1a1a" />
                    {/* Front outer leg — opposite phase */}
                    <g transform="translate(20, 19)">
                      <rect x="-3" y="0" width="6" height="16" rx="3" fill="#222" />
                      <animateTransform attributeName="transform" type="rotate" values="-13 0 0; 13 0 0; -13 0 0" dur="0.7s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Front inner leg — opposite phase */}
                    <g transform="translate(11, 19)">
                      <rect x="-3" y="0" width="6" height="14" rx="3" fill="#222" />
                      <animateTransform attributeName="transform" type="rotate" values="11 0 0; -11 0 0; 11 0 0" dur="0.7s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Back inner leg — opposite phase */}
                    <g transform="translate(-15, 19)">
                      <rect x="-3" y="0" width="6" height="16" rx="3" fill="#222" />
                      <animateTransform attributeName="transform" type="rotate" values="11 0 0; -11 0 0; 11 0 0" dur="0.7s" repeatCount="indefinite" additive="sum" />
                    </g>
                    {/* Back outer leg — opposite phase */}
                    <g transform="translate(-25, 19)">
                      <rect x="-3" y="0" width="6" height="14" rx="3" fill="#222" />
                      <animateTransform attributeName="transform" type="rotate" values="-13 0 0; 13 0 0; -13 0 0" dur="0.7s" repeatCount="indefinite" additive="sum" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <div className="relative mt-2 rounded-sm p-6" style={{ background: 'var(--color-cream-dark)', borderLeft: '4px solid var(--color-maroon)', zIndex: 10 }}>
              <p className="font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
                {isEs ? 'Información de Licencia' : 'License Information'}
              </p>
              <ul className="text-sm space-y-1 opacity-80" style={{ fontFamily: 'var(--font-body)' }}>
                <li>REALTOR® — National Association of REALTORS®</li>
                <li>{isEs ? 'Licencia' : 'License'}: SA712911000</li>
                <li>Omni Homes International</li>
                <li>7445 N Oracle Rd #201, Tucson, AZ 85704</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
            {isEs ? 'Ponte en Contacto' : 'Get in Touch'}
          </h2>
          <div className="rounded-sm p-8 shadow-sm" style={{ background: 'var(--color-white)' }}>
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </>
  );
}
