import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Phone, Mail, Globe } from 'lucide-react';
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

  const bio = isEs ? [
    'Nina Flores nació y creció en el sur de Arizona. Desde pequeña, aprendió a valorar las comunidades que hacen única a esta región: los vecindarios llenos de historia, las familias que llevan generaciones aquí y los recién llegados que están construyendo sus sueños en el desierto.',
    'Convertirse en REALTOR® no fue una decisión de negocios. Fue una vocación. Nina vio cómo muchas familias de habla hispana enfrentaban barreras — idioma, terminología legal, procesos desconocidos — y decidió ser el puente que necesitaban.',
    'Hoy, Nina trabaja con compradores primerizos, familias que se reubican, inversionistas y quienes buscan propiedades de lujo. Su enfoque es simple: conocer las necesidades de cada cliente y encontrar no solo una casa, sino el hogar correcto.',
    'Cuando no está mostrando propiedades, Nina pasa tiempo con su familia, explora los restaurantes de Tucson y se mantiene activa en su comunidad.',
  ] : [
    'Nina Flores was born and raised in Southern Arizona. Growing up, she developed a deep appreciation for the communities that make this region unique — historic neighborhoods, multigenerational families, and newcomers building their dreams in the desert.',
    'Becoming a REALTOR® was not a business decision. It was a calling. Nina saw how many Spanish-speaking families faced barriers — language, legal terminology, unfamiliar processes — and decided to become the bridge they needed.',
    'Today, Nina works with first-time buyers, relocating families, investors, and luxury property seekers. Her approach is simple: understand each client\'s needs and find not just a house, but the right home.',
    'When she\'s not showing homes, Nina spends time with her family, explores Tucson\'s restaurant scene, and stays active in her community.',
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
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="shrink-0 flex flex-col items-center gap-4">
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
              <div className="flex items-center gap-2">
                <Globe size={14} style={{ color: 'var(--color-maroon)' }} />
                <span>English · Español</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            {bio.map((p, i) => (
              <p key={i} className="text-base leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-body)' }}>{p}</p>
            ))}

            <div className="mt-8 rounded-sm p-6" style={{ background: 'var(--color-cream-dark)', borderLeft: '4px solid var(--color-maroon)' }}>
              <p className="font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
                {isEs ? 'Credenciales' : 'Credentials'}
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
