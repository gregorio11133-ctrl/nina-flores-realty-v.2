import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import {
  Search, FileText, Home, Key, CheckSquare, DollarSign, ExternalLink,
} from 'lucide-react';
import FloatingChat from '@/components/FloatingChat';
import CincLink from '@/components/CincLink';
import MovingAnimation from '@/components/MovingAnimation';

export const metadata: Metadata = {
  title: 'First Time Home Buyers | Nina Flores Realty',
  description: 'Buying your first home in Tucson? Nina Flores walks you through every step of the process with patience and expertise. Call 520.342.4124.',
};

export default async function FirstTimeBuyersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const base = locale === 'en' ? '' : '/es';

  const steps = [
    {
      icon: DollarSign,
      title: 'Get Pre-Qualified',
      body: "Before you fall in love with a home, find out what you can afford. Getting pre-qualified with a lender takes about 20 minutes and gives you a clear picture of your budget — plus it shows sellers you're serious. Nina works with trusted local lenders and can connect you today.",
      anchor: 'prequalify',
      href: `${base}/first-time-buyers/prequalify`,
      cta: 'Learn about pre-qualification →',
    },
    {
      icon: Search,
      title: 'Define What You Want',
      body: "Make a list of needs vs. wants — bedrooms, commute distance, school district, yard size. Don't worry if you're not sure yet. That's what Nina is here for. She'll ask the right questions to help you figure out what matters most before you set foot in a single home.",
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
      body: "Once under contract, you'll schedule a home inspection. This is your opportunity to learn everything about the property. If issues come up, Nina knows how to negotiate repairs or credits so you're protected. Nothing gets past her.",
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
            Buying a home for the first time can be confusing.
          </h1>
          <p
            className="text-lg leading-relaxed opacity-85"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            That&apos;s completely normal — and it&apos;s exactly why Nina is here. She&apos;s guided dozens of first-time buyers through the process from start to keys-in-hand, making sure you understand every step and never feel alone.
          </p>
        </div>
        {/* Moving animation — people carry boxes into a house */}
        <MovingAnimation />
      </section>

      {/* Reassurance strip */}
      <section className="py-10 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-lg leading-relaxed opacity-80"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
          >
            You don&apos;t need to have everything figured out before you call Nina. Most of her first-time buyers come to her with more questions than answers — and that&apos;s okay. The important thing is that you&apos;re taking the first step, and she&apos;ll handle the rest.
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
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
            >
              The Home Buying Process
            </h2>
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
                    {/* CTA */}
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
                return <div key={step.title} id={step.anchor}>{cardContent}</div>;
              }

              return (
                <Link key={step.title} href={step.href!} id={step.anchor} className="block group">
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pre-qualify CTA */}
      <section id="prequalify" className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to take the first step?
          </h2>
          <p
            className="mb-8 opacity-80 text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            Getting pre-qualified costs nothing and takes less than 30 minutes. Nina can connect you with a trusted local lender or answer any questions you have about the process first.
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            Get in Touch with Nina
          </Link>
        </div>
      </section>

      {/* FAQ / Common concerns */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
          >
            Common First-Timer Questions
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                q: 'How much do I need for a down payment?',
                a: 'Less than you think. Conventional loans can go as low as 3%, FHA loans at 3.5%, and there are first-time buyer programs in Arizona that offer down payment assistance. Nina will connect you with the right resources for your situation.',
              },
              {
                q: 'Does it cost anything to use a buyer\'s agent?',
                a: 'In most cases, no — the seller pays buyer agent commission. Nina represents your interests at no direct cost to you.',
              },
              {
                q: 'How long does it take to buy a home?',
                a: 'From pre-qualification to closing typically takes 30–45 days once you\'re under contract. Finding the right home can take anywhere from a few weeks to a few months depending on the market.',
              },
              {
                q: 'What if I\'m not ready to buy yet?',
                a: 'That\'s perfectly fine. Reach out anyway. Nina is happy to help you understand what you need to do to get ready — whether that\'s building credit, saving, or just learning what to expect. No pressure, ever.',
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

      {/* Floating chat */}
      <FloatingChat locale={locale} />
    </>
  );
}
