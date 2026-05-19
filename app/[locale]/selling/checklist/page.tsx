import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selling Checklist | Nina Flores REALTOR®',
  description:
    'A step-by-step home selling checklist from Nina Flores — Tucson REALTOR®. From preparing your home to closing day.',
};

const CHECKLIST: { phase: string; items: string[] }[] = [
  {
    phase: 'Before You List',
    items: [
      'Interview at least two agents and review their CMA reports',
      'Set a target list price based on current market data',
      'Review your mortgage payoff amount and estimated closing costs',
      'Gather all paperwork: title, permits, warranties, HOA docs',
      'Make minor repairs: leaky faucets, chipped paint, broken hardware',
      'Deep clean the entire home inside and out',
      'Declutter every room — aim for 30–40% fewer items',
      'Stage the home or consult a professional stager',
      'Schedule professional photography (and video / 3D tour if applicable)',
      'Confirm any disclosure requirements with your agent',
    ],
  },
  {
    phase: 'Listing Active',
    items: [
      'Review your MLS listing for accuracy before it goes live',
      'Confirm your home is on all major portals: Zillow, Realtor.com, Redfin',
      'Set a showing schedule that works for your household',
      'Keep the home in "showing ready" condition at all times',
      'Review showing feedback with your agent after the first week',
      'Discuss a price reduction strategy if traffic is low after 14 days',
      'Be prepared to respond to offers within 24–48 hours',
    ],
  },
  {
    phase: 'Under Contract',
    items: [
      'Review all terms of the purchase contract with your agent',
      'Schedule the buyer\'s home inspection and be prepared for requests',
      'Negotiate any repair requests or seller concessions',
      'Confirm the buyer\'s financing is in process (pre-approval → full approval)',
      'Complete any agreed-upon repairs before the appraisal',
      'Cooperate with the lender\'s appraisal visit',
      'Begin coordinating your move-out timeline',
      'Transfer utilities and update your address with key institutions',
    ],
  },
  {
    phase: 'Closing Day',
    items: [
      'Do a final walkthrough of the property before signing',
      'Bring valid government-issued photo ID',
      'Confirm wire instructions or cashier\'s check for any closing costs',
      'Review the Closing Disclosure for accuracy',
      'Sign all documents at the title company',
      'Hand over all keys, garage openers, and access codes',
      'Confirm funds are received — then celebrate!',
    ],
  },
];

export default async function SellingChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Header */}
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: 'rgba(201,168,76,0.8)', fontFamily: 'var(--font-body)' }}
        >
          Selling Your Home
        </p>
        <h1
          className="text-4xl sm:text-5xl font-black text-white mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Selling Checklist
        </h1>
        <p
          className="opacity-75 max-w-xl mx-auto"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
        >
          From preparing your home to handing over the keys — every step, in order.
        </p>
      </div>

      {/* Checklist body */}
      <section className="py-14 px-4" style={{ background: '#fff' }}>
        <div className="max-w-2xl mx-auto">
          <p
            className="text-base mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)', opacity: 0.8 }}
          >
            Selling a home involves dozens of moving parts. This checklist keeps you on track from the moment you decide
            to list through closing day. Print it out, save it, or ask Nina to walk you through it step by step.
          </p>

          <div className="flex flex-col gap-10">
            {CHECKLIST.map(({ phase, items }) => (
              <div key={phase}>
                <h2
                  className="text-xl font-black mb-4 pb-2 border-b-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-maroon)',
                    borderColor: 'var(--color-gold)',
                  }}
                >
                  {phase}
                </h2>
                <ul className="flex flex-col gap-3">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="shrink-0 mt-0.5"
                        style={{ color: 'var(--color-gold)' }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          Ready to start the process?
        </h2>
        <p
          className="opacity-75 mb-6 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
        >
          Nina walks you through every step — from pricing strategy to closing table. Contact her today for a free
          consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            Contact Nina
          </Link>
          <Link
            href="/selling/home-worth"
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base text-white border-2 transition-colors hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}
          >
            What&apos;s My Home Worth?
          </Link>
        </div>
      </section>
    </>
  );
}
