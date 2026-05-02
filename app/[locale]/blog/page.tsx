import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import BlogCard from '@/components/BlogCard';
import type { BlogPost } from '@/types';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'es'
    ? { title: 'Blog | Nina Flores REALTOR®', description: 'Actualizaciones del mercado, consejos de compra y destacados de vecindarios de Tucson.' }
    : { title: 'Blog | Nina Flores REALTOR®', description: 'Tucson real estate market updates, buying tips, and neighborhood spotlights from Nina Flores.' };
}

const SEED_POSTS: BlogPost[] = [
  { id: '1', title: "Tucson's Real Estate Market in 2026: What Buyers Need to Know", slug: 'tucson-market-2026', excerpt: "Inventory is tightening and prices are holding steady. Here's what that means if you're planning to buy in the Tucson metro this year.", category: 'market-updates', language: 'en', published: true, published_at: '2026-04-01T00:00:00Z', created_at: '' },
  { id: '2', title: "5 Things First-Time Buyers Always Forget to Ask", slug: 'first-time-buyer-questions', excerpt: "The questions nobody tells you to ask — but every first-time buyer in Tucson wishes they had.", category: 'first-time-home-buyers', language: 'en', published: true, published_at: '2026-03-15T00:00:00Z', created_at: '' },
  { id: '3', title: "Why Marana Might Be the Best-Kept Secret in Tucson Real Estate", slug: 'marana-neighborhood-spotlight', excerpt: "New construction, growing amenities, and prices that still make sense. Marana deserves a closer look.", category: 'neighborhood-spotlights', language: 'en', published: true, published_at: '2026-03-01T00:00:00Z', created_at: '' },
  { id: '4', title: "Mercado Inmobiliario de Tucson 2026: Lo que los Compradores Necesitan Saber", slug: 'mercado-tucson-2026', excerpt: "El inventario se está reduciendo y los precios se mantienen estables. Aquí te explicamos qué significa si planeas comprar este año.", category: 'market-updates', language: 'es', published: true, published_at: '2026-04-01T00:00:00Z', created_at: '' },
];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });

  const posts = SEED_POSTS.filter(p => p.language === locale);
  const cats = t.raw('categories') as Record<string, string>;
  const categories = Object.entries(cats);

  return (
    <>
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{t('title')}</h1>
        <p className="mt-3 opacity-80 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>{t('subtitle')}</p>
      </div>

      <section className="py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Category tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(([key, label]) => (
              <span key={key} className="text-xs px-3 py-1 rounded-sm font-bold tracking-wide uppercase"
                style={{ background: 'var(--color-cream-dark)', color: 'var(--color-charcoal-mid)', fontFamily: 'var(--font-body)' }}>
                {label}
              </span>
            ))}
          </div>

          {posts.length === 0 ? (
            <p className="text-center opacity-50" style={{ fontFamily: 'var(--font-body)' }}>
              {locale === 'es' ? 'No hay artículos disponibles aún.' : 'No posts available yet.'}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => <BlogCard key={post.id} post={post} locale={locale} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
