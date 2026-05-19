import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: "What's My Home Worth? | Nina Flores REALTOR®",
  description:
    "Learn how real estate agents price homes, why professional pricing matters, and when to hire an appraiser. Get a free home valuation from Nina Flores in Tucson, AZ.",
};

export default async function HomeWorthPage({ params }: { params: Promise<{ locale: string }> }) {
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
          What&apos;s My Home Worth?
        </h1>
        <p
          className="opacity-75 max-w-xl mx-auto"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
        >
          Understanding how homes are priced — and who should help you do it.
        </p>
      </div>

      {/* Article body */}
      <article className="py-16 px-4" style={{ background: '#fff' }}>
        <div className="max-w-2xl mx-auto">

          {/* Intro */}
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
          >
            One of the most common questions sellers ask is: <em>&ldquo;How much is my home actually worth?&rdquo;</em> The
            answer depends on far more than what you paid for it — and getting it right can mean the difference between a
            quick, profitable sale and a listing that sits on the market for months.
          </p>

          {/* Section 1 */}
          <Section title="How Real Estate Agents Price Homes">
            <p>
              A licensed agent uses a <strong>Comparative Market Analysis (CMA)</strong> to determine your home&apos;s
              value. This is an in-depth look at recently sold homes in your area that are similar to yours in size,
              condition, age, and features.
            </p>
            <p>
              Key factors an agent weighs during a CMA:
            </p>
            <ul>
              <li><strong>Recent comparable sales ("comps")</strong> — homes sold nearby in the last 3–6 months</li>
              <li><strong>Active listings</strong> — your competition on the market right now</li>
              <li><strong>Expired listings</strong> — homes that did not sell, often because they were overpriced</li>
              <li><strong>Location specifics</strong> — school districts, lot size, views, noise, proximity to amenities</li>
              <li><strong>Condition and upgrades</strong> — renovated kitchens and baths, new roofs, curb appeal</li>
              <li><strong>Market trend</strong> — is inventory rising or falling? Are buyers or sellers in control?</li>
            </ul>
            <p>
              A CMA is <em>not</em> a formal appraisal, but it gives you a realistic, data-backed price range before
              you ever list. Done well, it positions your home to attract the right buyers quickly.
            </p>
          </Section>

          <Divider />

          {/* Section 2 */}
          <Section title="Why You Should Hire an Agent to Price Your Home">
            <p>
              Online estimators (Zillow&apos;s Zestimate, Redfin Estimate, etc.) are a starting point — not a strategy.
              They pull broad public data and have no knowledge of your home&apos;s interior condition, your neighbor&apos;s
              recent renovation, or the micro-market dynamics that a local expert sees every day.
            </p>
            <p>
              Here is why professional pricing matters:
            </p>
            <ul>
              <li>
                <strong>Overpricing costs you money.</strong> Homes that sit on the market develop a stigma. Buyers
                start to wonder what is wrong, and you often end up accepting less than if you had priced correctly
                from day one.
              </li>
              <li>
                <strong>Underpricing leaves equity on the table.</strong> A good agent helps you capture every dollar
                the market will support — and in a competitive situation, that means knowing when to expect and handle
                multiple offers.
              </li>
              <li>
                <strong>Pricing strategy is not just a number.</strong> It includes how you position the home online,
                what photography and marketing strategy you use, and how you respond to early market feedback.
              </li>
            </ul>
            <p>
              Nina Flores provides a free, no-obligation CMA for homeowners in the Tucson and Southern Arizona area.
              She walks you through the data, explains the reasoning behind the recommended price range, and helps you
              make the decision that is right for your goals.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-7 py-3.5 rounded-sm font-bold text-base text-white transition-opacity hover:opacity-90"
                style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
              >
                Request a Free Home Valuation →
              </Link>
            </div>
          </Section>

          <Divider />

          {/* Section 3 */}
          <Section title="When Do You Need a Licensed Appraiser?">
            <p>
              A real estate agent&apos;s CMA is ideal for listing strategy. But there are situations where you need a
              <strong> licensed appraiser</strong> — a neutral, state-certified professional whose written opinion of
              value carries legal and financial weight.
            </p>
            <p>
              You may need an appraiser when:
            </p>
            <ul>
              <li>You are <strong>refinancing</strong> — most lenders require a formal appraisal to validate the new loan amount</li>
              <li>You are <strong>settling an estate</strong> and need an official value for probate or tax purposes</li>
              <li>You are going through a <strong>divorce</strong> and need a neutral valuation accepted by the court</li>
              <li>You are <strong>disputing your property taxes</strong> and need documented evidence of value</li>
              <li>You want a <strong>pre-listing appraisal</strong> to price your home with maximum credibility</li>
              <li>Your buyer&apos;s lender <strong>requires an independent appraisal</strong> as part of the mortgage process</li>
            </ul>
            <p>
              An appraiser charges a fee (typically $300–$600 in the Tucson market) and provides a formal written
              report. Their valuation is independent and unbiased by the transaction.
            </p>
            <p>
              Not sure whether you need an agent&apos;s CMA, an appraisal, or both? Nina can help you think through
              your situation before you spend a dollar.
            </p>
          </Section>

          <Divider />

          {/* Section 4 — quick tips */}
          <Section title="Quick Tips Before You List">
            <ul>
              <li>
                <strong>Get a CMA first.</strong> Even if you ultimately hire an appraiser, the agent&apos;s CMA helps
                you understand current buyer demand and competitive positioning.
              </li>
              <li>
                <strong>Do a pre-listing walkthrough.</strong> Small repairs and staging updates can meaningfully
                increase your final sale price.
              </li>
              <li>
                <strong>Trust the data, not sentiment.</strong> Your home has memories and meaning — but buyers are
                comparing it to every other active listing in the price range.
              </li>
              <li>
                <strong>Review the market trend.</strong> A rising market may support pricing at the top of your
                range; a cooling market may call for more aggressive positioning.
              </li>
            </ul>
          </Section>

        </div>
      </article>

      {/* Appraiser CTA */}
      <section
        className="py-14 px-4"
        style={{ background: 'var(--color-cream)' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl font-black mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
          >
            Need a Licensed Appraiser?
          </h2>
          <p
            className="opacity-70 mb-6 max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
          >
            Nina can refer you to trusted, licensed appraisers in the Tucson area who provide fast turnaround and
            defensible valuations for any purpose.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
          >
            Contact an Appraiser Today
          </Link>
        </div>
      </section>

      {/* Nina CTA */}
      <section className="py-14 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          Ready to know what your home is worth?
        </h2>
        <p
          className="opacity-75 mb-6 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
        >
          Contact Nina for a free, no-obligation Comparative Market Analysis and a clear picture of your home&apos;s
          value in today&apos;s market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            Get My Free CMA
          </Link>
          <a
            href="tel:5203424124"
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base text-white border-2 transition-colors hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}
          >
            Call 520.342.4124
          </a>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        className="text-2xl font-black mb-4"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}
      >
        {title}
      </h2>
      <div
        className="flex flex-col gap-4 text-base leading-relaxed [&_strong]:font-bold [&_ul]:pl-5 [&_ul]:list-disc [&_li]:mb-2"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
      >
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return (
    <hr
      className="my-10"
      style={{ borderColor: 'var(--color-cream-dark)' }}
    />
  );
}
