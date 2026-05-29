import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  Search, FileText, Home, Key, CheckSquare, DollarSign, ExternalLink, Download,
} from 'lucide-react';
import FloatingChat from '@/components/FloatingChat';
import CincLink from '@/components/CincLink';
import MovingAnimation from '@/components/MovingAnimation';
import MortgageCalculator from '@/components/MortgageCalculator';

export const metadata: Metadata = {
  title: 'Buying a Home in Tucson | Nina Flores Realty',
  description: 'Ready to buy a home in Tucson? Nina Flores guides you through every step — from pre-qualification to closing. Call 520.342.4124.',
};

export default async function BuyingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const base = locale === 'en' ? '' : '/es';
  const t = await getTranslations({ locale, namespace: 'calculator' });

  const calcLabels = {
    title: t('title'),
    subtitle: t('subtitle'),
    homePrice: t('homePrice'),
    downPayment: t('downPayment'),
    interestRate: t('interestRate'),
    loanTerm: t('loanTerm'),
    years: t('years'),
    monthlyPayment: t('monthlyPayment'),
    disclaimer: t('disclaimer'),
    prequalNote: t('prequalNote'),
    prequalBtn: t('prequalBtn'),
  };

  const steps = [
    {
      icon: DollarSign,
      title: 'Get Pre-Qualified',
      body: "Before you fall in love with a home, find out what you can afford. Getting pre-qualified with a lender takes about 20 minutes and gives you a clear picture of your budget — plus it shows sellers you're serious. Nina works with trusted local lenders and can connect you today.",
      href: `${base}/first-time-buyers/prequalify`,
      cta: 'Learn about pre-qualification →',
    },
    {
      icon: Search,
      title: 'Define What You Want',
      body: "Make a list of needs vs. wants — bedrooms, commute distance, school district, yard size. Not sure where to start? That's what Nina is here for. She'll ask the right questions to help you figure out what matters most.",
      href: `${base}/first-time-buyers/wish-list`,
      cta: 'Build your home wish list →',
    },
    {
      icon: Home,
      title: 'Start Your Home Search',
      body: "Now the fun part. Nina will set up a personalized search for you through the MLS so you're notified the moment a home that fits your criteria hits the market. Tucson moves fast — being ready means you won't miss out.",
      href: 'https://ninaflores.viewalltucsonhomes.com/search',
      external: true,
      cta: 'Search Now',
    },
    {
      icon: FileText,
      title: 'Make an Offer',
      body: "Found the one? Nina will help you craft a competitive offer based on comparable sales, market conditions, and your goals. She'll negotiate on your behalf — calmly, confidently, and always with your interests first.",
      href: `${base}/first-time-buyers/process`,
      cta: 'See the buying process →',
    },
    {
      icon: CheckSquare,
      title: 'Inspections & Due Diligence',
      body: "Once under contract, you'll schedule a home inspection. This is your opportunity to learn everything about the property. If issues come up, Nina knows how to negotiate repairs or credits so you're protected.",
      href: `${base}/first-time-buyers/process`,
      cta: 'See the buying process →',
    },
    {
      icon: Key,
      title: 'Close & Get Your Keys',
      body: "Closing day is the finish line — but Nina will have walked you through every document beforehand so there are no surprises. You'll sign, the keys will be yours, and she'll be right there celebrating with you.",
      href: `${base}/first-time-buyers/process`,
      cta: 'See the buying process →',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-0 px-4 text-center"
        style={{ background: 'var(--color-maroon)', minHeight: '40vh', overflowX: 'hidden' }}
      >
        <div className="max-w-3xl mx-auto pb-8">
          <p
            className="text-xs uppercase tracking-widest mb-4 opacity-70"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
          >
            Nina Flores · REALTOR® · Southern Arizona
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Buying a home can be confusing.
          </h1>
          <p
            className="text-lg leading-relaxed opacity-85 mb-8"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            That&apos;s completely normal — and it&apos;s exactly why Nina is here. She&apos;s guided buyers through every kind of home purchase, making sure you understand every step and never feel alone.
          </p>

          {/* Top CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link
              href={`${base}/first-time-buyers`}
              className="inline-block px-6 py-3 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
            >
              I&apos;m a First Time Homebuyer
            </Link>
            <a
              href="/BuyerGuide.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(201,168,76,0.5)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)' }}
            >
              <Download size={14} /> Get My FREE Buyer&apos;s Guide
            </a>
          </div>
        </div>
        <MovingAnimation />
      </section>

      {/* Reassurance strip */}
      <section className="py-10 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-lg leading-relaxed opacity-80"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
          >
            You don&apos;t need to have everything figured out before you call Nina. Most buyers come to her with more questions than answers — and that&apos;s okay. The important thing is that you&apos;re taking the first step, and she&apos;ll handle the rest.
          </p>
        </div>
      </section>

      {/* Step by step process */}
      <section id="process" className="py-16 px-4" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
            >
              Step by Step
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
            >
              The Home Buying Process
            </h2>
            <Link
              href={`${base}/first-time-buyers/process`}
              className="inline-block px-6 py-2.5 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)' }}
            >
              See in More Detail →
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isExternal = step.external;

              const cardContent = (
                <div
                  className="flex gap-6 rounded-sm p-6 transition-shadow hover:shadow-md"
                  style={{ background: 'var(--color-white)', borderLeft: '4px solid var(--color-maroon)' }}
                >
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--color-cream)', color: 'var(--color-maroon)' }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className="text-xs font-black opacity-30"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed opacity-75 mb-4"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {step.body}
                    </p>
                    {isExternal ? (
                      <CincLink
                        href={step.href!}
                        className="inline-flex items-center gap-1.5 px-5 py-2 rounded-sm text-sm font-bold text-white transition-opacity hover:opacity-90"
                        style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
                      >
                        {step.cta} <ExternalLink size={13} />
                      </CincLink>
                    ) : (
                      <span
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
                      >
                        {step.cta}
                      </span>
                    )}
                  </div>
                </div>
              );

              if (isExternal) {
                return <div key={step.title}>{cardContent}</div>;
              }

              return (
                <Link key={step.title} href={step.href!} className="block group">
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browse Homes */}
      <section className="py-16 px-4" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
          >
            Tucson MLS · Updated Daily
          </p>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Browse Homes for Sale
          </h2>
          <p
            className="text-base mb-8 opacity-70"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            View the latest listings in Tucson and Southern Arizona — updated directly from the MLS. Filter by price, neighborhood, beds, and more.
          </p>
          <CincLink
            href="https://ninaflores.viewalltucsonhomes.com/search"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
          >
            Search Available Homes <ExternalLink size={15} />
          </CincLink>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-16 px-4" style={{ background: '#1c1c1c' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p
              className="text-xs uppercase tracking-widest mb-2 opacity-60"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
            >
              Estimate Your Payment
            </p>
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mortgage Calculator
            </h2>
          </div>
          <MortgageCalculator labels={calcLabels} />
        </div>
      </section>

      {/* Search Homes CTA */}
      <section className="py-12 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <div className="max-w-2xl mx-auto">
          <p
            className="text-base mb-6 opacity-80"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            Ready to start browsing? Nina can set up a personalized search so you hear about new listings the moment they hit the market.
          </p>
          <CincLink
            href="https://ninaflores.viewalltucsonhomes.com/search"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
          >
            Search Homes <ExternalLink size={15} />
          </CincLink>
        </div>
      </section>

      {/* Rent Trap section */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
          >
            Still Renting?
          </p>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
          >
            Stuck in the Rent Trap?
          </h2>
          <p
            className="text-base leading-relaxed opacity-80 mb-8"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
          >
            Every month you rent, you&apos;re building someone else&apos;s wealth. Nina has helped renters just like you make the transition to homeownership — even when it felt impossible. You may be closer than you think.
          </p>
          <Link
            href={`${base}/rent-trap`}
            className="inline-block px-7 py-3 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-maroon)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)' }}
          >
            Renter&apos;s Homebuying Guide →
          </Link>
        </div>
      </section>

      {/* Pre-qualify CTA */}
      <section className="py-16 px-4 text-center" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
          >
            Ready to take the first step?
          </h2>
          <p
            className="mb-8 opacity-80 text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
          >
            Getting pre-qualified costs nothing and takes less than 30 minutes. Nina can connect you with a trusted local lender or answer any questions you have about the process first.
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-maroon)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)' }}
          >
            Get in Touch with Nina
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
          >
            Common Buyer Questions
          </h2>

          {/* Buyer's Advisory download */}
          <div className="text-center mb-8">
            <a
              href="/BuyerAdvisory.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)' }}
            >
              <Download size={14} /> Buyer&apos;s Advisory (Arizona REALTORS® — PDF)
            </a>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                q: 'How much do I need for a down payment?',
                a: 'Less than you think. Conventional loans can go as low as 3%, FHA loans at 3.5%, and there are buyer programs in Arizona that offer down payment assistance. Nina will connect you with the right resources for your situation.',
              },
              {
                q: "Does it cost anything to use a buyer's agent?",
                a: 'In most cases, no — the seller pays buyer agent commission. Nina represents your interests at no direct cost to you.',
              },
              {
                q: 'How long does it take to buy a home?',
                a: "From pre-qualification to closing typically takes 30–45 days once you're under contract. Finding the right home can take anywhere from a few weeks to a few months depending on the market.",
              },
              {
                q: "What if I'm not ready to buy yet?",
                a: "That's perfectly fine. Reach out anyway. Nina is happy to help you understand what you need to do to get ready — whether that's building credit, saving, or just learning what to expect. No pressure, ever.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-sm p-6"
                style={{ background: 'var(--color-white)', borderTop: '2px solid var(--color-cream-dark)' }}
              >
                <h3
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {q}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-75"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`${base}/first-time-buyers/tips`}
              className="inline-block px-7 py-3 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)' }}
            >
              See More Tips →
            </Link>
          </div>
        </div>
      </section>

      {/* New Builds CTA */}
      <section className="py-16 px-4" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
          >
            New Construction
          </p>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Considering a Brand-New Home?
          </h2>
          <p
            className="text-base leading-relaxed opacity-75 mb-8"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            New construction communities are booming across Marana, Vail, Sahuarita, and Oro Valley. Nina can represent you as your buyer&apos;s agent in any new build — at no extra cost to you — protecting your interests every step of the way.
          </p>
          <Link
            href={`${base}/new-builds`}
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            Explore New Home Builds →
          </Link>
        </div>
      </section>

      <FloatingChat locale={locale} />
    </>
  );
}
