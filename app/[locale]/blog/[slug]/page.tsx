import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ReactMarkdown from 'react-markdown';
import type { BlogPost } from '@/types';

const SEED_POSTS: BlogPost[] = [
  {
    id: '1', title: "Tucson's Real Estate Market in 2026: What Buyers Need to Know",
    slug: 'tucson-market-2026',
    excerpt: "Inventory is tightening and prices are holding steady.",
    content: `## What's Happening in Tucson Right Now\n\nThe Tucson real estate market in 2026 is telling a familiar story: low inventory, steady prices, and buyers who hesitate often lose out.\n\n## Key Trends\n\n- **Median home price:** $345,000 (up ~4% year-over-year)\n- **Days on market:** averaging 21 days for well-priced homes\n- **Competition:** Multiple-offer situations remain common under $400,000\n\n## What This Means for You\n\nIf you're planning to buy, get pre-qualified before you start your search. Nina works exclusively with buyers who are pre-qualified or paying cash — it protects your time and hers.\n\n[Contact Nina](/contact) to discuss your timeline and strategy.`,
    category: 'market-updates', language: 'en', published: true, published_at: '2026-04-01T00:00:00Z', created_at: '',
  },
  {
    id: '2', title: "5 Things First-Time Buyers Always Forget to Ask",
    slug: 'first-time-buyer-questions',
    excerpt: "The questions nobody tells you to ask.",
    content: `## Questions That Matter\n\nEvery first-time buyer is focused on price and location — but the questions that save you money and headaches are often the ones nobody thinks to ask.\n\n## 1. What's the HOA history?\n\nHOA fees can increase. Ask for the last three years of meeting minutes.\n\n## 2. Why are the sellers leaving?\n\nThis isn't always answerable, but it's worth asking. Patterns can tell you things a disclosure won't.\n\n## 3. What are the utility costs?\n\nRequest the last 12 months of utility bills. Tucson summers are unforgiving.\n\n## 4. Has there been any unpermitted work?\n\nIn Arizona, unpermitted additions can become your problem the moment you sign.\n\n## 5. What does the neighborhood feel like at night?\n\nDrive by after dark. It costs nothing and tells you everything.\n\nHave more questions? [Talk to Nina.](/contact)`,
    category: 'first-time-home-buyers', language: 'en', published: true, published_at: '2026-03-15T00:00:00Z', created_at: '',
  },
  {
    id: '3', title: "Why Marana Might Be the Best-Kept Secret in Tucson Real Estate",
    slug: 'marana-neighborhood-spotlight',
    excerpt: "New construction, growing amenities, and prices that still make sense.",
    content: `## The Case for Marana\n\nWhen people ask Nina where the value is in Tucson right now, she often says the same thing: *Go northwest.*\n\nMarana has everything that buyers in larger metros wish they could afford: new construction homes, good schools, easy freeway access, and a growing commercial corridor along Tangerine Road.\n\n## What Marana Offers\n\n- **Dove Mountain** — Ritz-Carlton resort, world-class golf, luxury homes\n- **Gladden Farms** — Master-planned community with parks and trails\n- **New construction** — Multiple builders actively developing in the area\n- **Proximity** — 20 minutes to central Tucson, 30 minutes to the airport\n\n## The Bottom Line\n\nIf you're flexible on location and want the most home for your dollar in the Tucson metro, Marana deserves a serious look.\n\n[Search Homes in Marana](https://ninaflores.viewalltucsonhomes.com/search/quick/PDQVLZZZT1Y9NLNJ9/homes-for-sale-in-marana)`,
    category: 'neighborhood-spotlights', language: 'en', published: true, published_at: '2026-03-01T00:00:00Z', created_at: '',
  },
];

export function generateStaticParams() {
  return SEED_POSTS.flatMap(p => [
    { locale: 'en', slug: p.slug },
    { locale: 'es', slug: p.slug },
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = SEED_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = SEED_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        {post.category && (
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}>
            {post.category.replace(/-/g, ' ')}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl font-black text-white max-w-3xl mx-auto leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          {post.title}
        </h1>
        {post.published_at && (
          <p className="mt-4 text-sm opacity-60" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
            {new Date(post.published_at).toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        )}
      </div>

      <div className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-2xl mx-auto prose prose-lg" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
          <ReactMarkdown>{post.content ?? ''}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
