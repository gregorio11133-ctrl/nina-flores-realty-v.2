import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  locale: string;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const t = useTranslations('blog');
  const base = locale === 'en' ? '' : '/es';
  const cats = t.raw('categories') as Record<string, string>;
  const catLabel = post.category ? (cats[post.category] ?? post.category) : '';

  return (
    <Link
      href={`${base}/blog/${post.slug}`}
      className="block rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="p-6">
        {catLabel && (
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-2 py-0.5 rounded-sm"
            style={{ background: 'var(--color-cream)', color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}>
            {catLabel}
          </span>
        )}
        <h3 className="font-bold text-lg mb-2 leading-snug" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm opacity-70 line-clamp-3 mb-4" style={{ fontFamily: 'var(--font-body)' }}>{post.excerpt}</p>
        )}
        <div className="flex items-center justify-between">
          {post.published_at && (
            <span className="text-xs opacity-50" style={{ fontFamily: 'var(--font-body)' }}>
              {new Date(post.published_at).toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          )}
          <span className="text-xs font-bold" style={{ color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}>
            {t('readMore')} →
          </span>
        </div>
      </div>
    </Link>
  );
}
