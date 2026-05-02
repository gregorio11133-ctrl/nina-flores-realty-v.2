import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Home, Award, TrendingUp, Building2, Wrench, Users } from 'lucide-react';
import CincLink from '@/components/CincLink';
import SpecialtyCard from '@/components/SpecialtyCard';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import ListingCard from '@/components/ListingCard';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import MortgageCalculator from '@/components/MortgageCalculator';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'es'
    ? { title: 'Nina Flores | REALTOR® en Tucson | Omni Homes International', description: 'Nina Flores es una REALTOR® bilingüe en Tucson, AZ. Especialista en compradores primerizos, propiedades de lujo, reubicación e inversión. Llama al 520.342.4124.' }
    : { title: 'Nina Flores | Tucson REALTOR® | Omni Homes International', description: 'Nina Flores is a bilingual REALTOR® in Tucson, AZ specializing in first-time buyers, luxury properties, relocation, and investment. Call 520.342.4124.' };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const base = locale === 'en' ? '' : '/es';

  const specialties = [
    { icon: Users, key: 'firstTimeBuyers' },
    { icon: Award, key: 'luxury' },
    { icon: Home, key: 'relocation' },
    { icon: TrendingUp, key: 'investment' },
    { icon: Building2, key: 'newBuilds' },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden" style={{ background: 'var(--color-charcoal)' }}>
        <div className="absolute inset-0 opacity-50">
          <Image src="/nina-flores.jpg" alt="Tucson real estate" fill className="object-cover" style={{ objectPosition: 'center 20%' }} priority />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(107,26,42,0.80) 0%, rgba(44,44,44,0.75) 100%)' }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4 opacity-70" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-gold)' }}>
            Omni Homes International · Tucson, AZ
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}>
            {t('hero.headline')}
          </h1>
          <p className="text-base sm:text-lg mb-8 opacity-80" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
            {t('hero.subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CincLink
              href="https://ninaflores.viewalltucsonhomes.com/search"
              className="px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
            >
              {t('hero.ctaSearch')}
            </CincLink>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-sm font-bold text-base border-2 text-white transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
            >
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg" style={{ border: '4px solid var(--color-maroon)' }}>
            <Image src="/nina-flores.jpg" alt="Nina Flores, REALTOR®" width={192} height={192} className="object-cover w-full h-full" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}>
              {t('about.kicker')}
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              {t('about.title')}
            </h2>
            <p className="text-base leading-relaxed mb-6 opacity-80" style={{ fontFamily: 'var(--font-body)' }}>
              {t('about.body')}
            </p>
            <Link
              href={`${base}/about`}
              className="inline-block px-6 py-2.5 rounded-sm font-bold text-sm text-white transition-colors hover:opacity-90"
              style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
            >
              {t('about.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              {t('specialties.title')}
            </h2>
            <p className="max-w-2xl mx-auto opacity-70" style={{ fontFamily: 'var(--font-body)' }}>
              {t('specialties.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialties.map(({ icon, key }) => (
              <SpecialtyCard
                key={key}
                icon={icon}
                title={t(`specialties.${key}.title`)}
                description={t(`specialties.${key}.desc`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              {t('listings.title')}
            </h2>
            <p className="opacity-70" style={{ fontFamily: 'var(--font-body)' }}>{t('listings.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ListingCard />
          </div>
          <div className="text-center mt-8">
            <CincLink
              href="https://ninaflores.viewalltucsonhomes.com/search"
              className="inline-block px-8 py-3 rounded-sm font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
            >
              {t('listings.viewAll')}
            </CincLink>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              {t('neighborhoods.title')}
            </h2>
            <p className="max-w-2xl mx-auto opacity-70" style={{ fontFamily: 'var(--font-body)' }}>
              {t('neighborhoods.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NEIGHBORHOODS.slice(0, 8).map(n => (
              <NeighborhoodCard
                key={n.slug}
                slug={n.slug}
                name={locale === 'es' ? n.nameEs : n.name}
                description={locale === 'es' ? n.descriptionEs : n.description}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Mortgage Calculator */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-3xl mx-auto">
          <MortgageCalculator labels={{
            title: t('calculator.title'),
            subtitle: t('calculator.subtitle'),
            homePrice: t('calculator.homePrice'),
            downPayment: t('calculator.downPayment'),
            interestRate: t('calculator.interestRate'),
            loanTerm: t('calculator.loanTerm'),
            years: t('calculator.years'),
            monthlyPayment: t('calculator.monthlyPayment'),
            disclaimer: t('calculator.disclaimer'),
            prequalNote: t('calculator.prequalNote'),
            prequalBtn: t('calculator.prequalBtn'),
          }} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            {t('cta.title')}
          </h2>
          <p className="mb-8 opacity-80" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
            {t('cta.subtitle')}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            {t('cta.btn')}
          </a>
        </div>
      </section>

      {/* Contact / Lead Capture */}
      <section id="contact" className="py-16 px-4" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
              {t('lead.title')}
            </h2>
            <p className="opacity-70" style={{ fontFamily: 'var(--font-body)' }}>{t('lead.subtitle')}</p>
          </div>
          <div className="rounded-sm p-8 shadow-sm" style={{ background: 'var(--color-white)' }}>
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </>
  );
}
