import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { AlertTriangle, TrendingUp, Home, Heart, BookOpen, CheckCircle } from 'lucide-react';
import FloatingChat from '@/components/FloatingChat';

export const metadata: Metadata = {
  title: 'Escape the Rent Trap | Nina Flores Realty',
  description: 'Stop paying someone else\'s mortgage. Nina Flores helps renters in Tucson make the leap to homeownership — even when it feels out of reach. Call 520.342.4124.',
};

export default async function RentTrapPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const base = locale === 'en' ? '' : '/es';

  return (
    <>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'var(--color-maroon)' }}
      >
        <div className="max-w-3xl mx-auto">
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
            Escape the Rent Trap
          </h1>
          <p
            className="text-lg leading-relaxed opacity-85 mb-8"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            Every month you write a rent check, you&apos;re building your landlord&apos;s wealth — not yours. Nina has helped renters across Tucson make the leap to homeownership, even when it felt impossible. You may be closer than you think.
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            Talk to Nina Today
          </Link>
        </div>
      </section>

      {/* Pitfalls of renting */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
            >
              The Real Cost of Renting
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
            >
              The Pitfalls of Renting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: 'No Equity, No Return',
                body: 'Every rent payment disappears. You get a place to sleep — but nothing to show for it financially. After 10 years of renting at $1,500/month, that\'s $180,000 gone with zero return.',
              },
              {
                icon: TrendingUp,
                title: 'Rent Keeps Going Up',
                body: 'Landlords raise rent. Year after year. You have no control over your housing costs — and in Tucson\'s market, rents have climbed significantly. A mortgage payment? Fixed for 30 years.',
              },
              {
                icon: AlertTriangle,
                title: 'No Stability or Control',
                body: 'Your landlord can sell the property, choose not to renew your lease, or decide to move in themselves. Renters live with uncertainty. Homeowners don\'t.',
              },
              {
                icon: AlertTriangle,
                title: 'No Tax Benefits',
                body: 'Homeowners can deduct mortgage interest and property taxes. Renters get none of that. Owning a home comes with real financial advantages that renting simply doesn\'t offer.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-6 rounded-sm"
                style={{ background: 'var(--color-white)', borderLeft: '4px solid var(--color-maroon)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--color-cream)', color: 'var(--color-maroon)' }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    className="font-bold text-base"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed opacity-75"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why owning is better */}
      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
            >
              The Other Side
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
            >
              Why Owning is Better
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Build Real Wealth',
                body: 'Every mortgage payment builds equity in an asset that appreciates over time. Homeownership is one of the most reliable ways to build long-term wealth in America.',
              },
              {
                icon: Home,
                title: 'Stability & Security',
                body: 'Your home is yours. Paint the walls, get a dog, remodel the kitchen. No landlord, no lease renewals, no forced moves. Your family has a permanent foundation.',
              },
              {
                icon: Heart,
                title: 'Community & Pride',
                body: 'Homeowners invest in their neighborhoods. Studies show homeowners report higher satisfaction, stronger community ties, and greater sense of pride and belonging.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-6 rounded-sm text-center"
                style={{ background: 'var(--color-white)', borderTop: '4px solid var(--color-gold)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'var(--color-cream)', color: 'var(--color-maroon)' }}
                >
                  <Icon size={22} />
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-75"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struggles & How Nina Helps */}
      <section className="py-16 px-4" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
            >
              You&apos;re Not Alone
            </p>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Common Struggles — and How Nina Helps
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                struggle: '"I don\'t have enough for a down payment."',
                help: 'Many buyers put down as little as 3–3.5%. There are also Arizona down payment assistance programs that can cover part or all of it. Nina will connect you with the right lender to explore every option.',
              },
              {
                struggle: '"My credit isn\'t good enough."',
                help: 'FHA loans allow credit scores as low as 580. And if you\'re not there yet, Nina can point you toward resources to improve your score and revisit buying in 6–12 months. She\'ll give you a real plan, not empty encouragement.',
              },
              {
                struggle: '"I don\'t understand any of this."',
                help: 'That\'s exactly why Nina exists. She speaks plainly, explains every document, and won\'t let you sign anything you don\'t fully understand. Most of her clients come to her knowing nothing about the process — and leave as confident homeowners.',
              },
              {
                struggle: '"I\'ve been told I can\'t afford it."',
                help: 'Maybe not yet — or maybe the person who told you that didn\'t look hard enough. Nina has helped buyers who thought homeownership was years away close on a home within months. The only way to know is to have a real conversation.',
              },
            ].map(({ struggle, help }) => (
              <div
                key={struggle}
                className="rounded-sm p-6"
                style={{ background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid var(--color-gold)' }}
              >
                <p
                  className="text-xl mb-3"
                  style={{ fontFamily: 'var(--font-script)', fontStyle: 'italic', fontWeight: 600, color: 'var(--color-gold)' }}
                >
                  {struggle}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)', opacity: 0.85 }}
                >
                  {help}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Workbook section */}
      <section className="py-16 px-4" style={{ background: 'var(--color-maroon)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--color-gold)' }}
          >
            <BookOpen size={30} />
          </div>
          <p
            className="text-xs uppercase tracking-widest mb-3 opacity-70"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
          >
            Free Resource
          </p>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get your workbook today
          </h2>
          <p
            className="text-base leading-relaxed mb-4 opacity-85"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            Nina&apos;s <strong>Renter&apos;s Guide to Homeownership</strong> walks you through everything — what to save, how to build credit, what to expect at every stage, and how to go from renting to owning a home in Tucson.
          </p>
          <div className="flex flex-col gap-3 mb-4">
            {[
              'How to calculate how much home you can actually afford',
              'What credit score you need and how to improve it fast',
              'Down payment options — including programs that help you',
              'A month-by-month savings plan to get you ready',
              'What happens at every stage from offer to closing',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 text-left max-w-md mx-auto">
                <CheckCircle size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <span
                  className="text-sm opacity-80"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-sm italic opacity-60 mb-8"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            Digital workbook — coming soon. Contact Nina to get yours directly.
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            Get the Workbook — Contact Nina
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
          >
            Ready to stop renting?
          </h2>
          <p
            className="text-base leading-relaxed opacity-75 mb-8"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
          >
            One conversation with Nina can change everything. No pressure, no obligation — just an honest look at where you stand and what it would take to get you into a home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${base}/contact`}
              className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)' }}
            >
              Talk to Nina
            </Link>
            <Link
              href={`${base}/buying`}
              className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-colors"
              style={{ border: '2px solid var(--color-maroon)', color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
            >
              Learn the Buying Process
            </Link>
          </div>
        </div>
      </section>

      <FloatingChat locale={locale} />
    </>
  );
}
