import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'es'
    ? { title: 'Contacto | Nina Flores REALTOR®', description: 'Contáctate con Nina Flores, REALTOR® bilingüe en Tucson, AZ. Teléfono: 520.342.4124.' }
    : { title: 'Contact | Nina Flores REALTOR®', description: 'Contact Nina Flores, bilingual REALTOR® in Tucson, AZ. Phone: 520.342.4124.' };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{t('title')}</h1>
        <p className="mt-3 opacity-80 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>{t('subtitle')}</p>
      </div>

      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info panel */}
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              Nina Flores
            </h2>
            <div className="space-y-5 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="flex items-start gap-3">
                <Phone size={18} style={{ color: 'var(--color-maroon)' }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wide text-xs opacity-50 mb-1">{t('phone')}</p>
                  <a href="tel:5203424124" className="text-base hover:underline" style={{ color: 'var(--color-charcoal)' }}>520.342.4124</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} style={{ color: 'var(--color-maroon)' }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wide text-xs opacity-50 mb-1">{t('email')}</p>
                  <a href="mailto:NinaFloresRealty@gmail.com" className="text-base hover:underline break-all" style={{ color: 'var(--color-charcoal)' }}>NinaFloresRealty@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: 'var(--color-maroon)' }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wide text-xs opacity-50 mb-1">{t('office')}</p>
                  <p style={{ color: 'var(--color-charcoal)' }}>Omni Homes International<br />7445 N Oracle Rd #201<br />Tucson, AZ 85704</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} style={{ color: 'var(--color-maroon)' }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wide text-xs opacity-50 mb-1">{t('hours')}</p>
                  <p style={{ color: 'var(--color-charcoal)' }}>{t('hoursValue')}</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="mt-8 rounded-sm overflow-hidden shadow-sm" style={{ border: '1px solid var(--color-cream-dark)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.5!2d-110.974!3d32.349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7445+N+Oracle+Rd+%23201%2C+Tucson%2C+AZ+85704!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Omni Homes International office location"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              {locale === 'es' ? 'Envía un Mensaje' : 'Send a Message'}
            </h2>
            <div className="rounded-sm p-6 shadow-sm" style={{ background: 'var(--color-white)' }}>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
