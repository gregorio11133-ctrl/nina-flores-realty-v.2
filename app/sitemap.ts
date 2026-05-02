import type { MetadataRoute } from 'next';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ninafloresrealty.com';

const STATIC_PAGES = ['', '/about', '/contact', '/neighborhoods', '/specialties', '/blog'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of STATIC_PAGES) {
    entries.push({ url: `${BASE}${page}`, alternates: { languages: { es: `${BASE}/es${page}` } } });
  }

  for (const n of NEIGHBORHOODS) {
    entries.push({
      url: `${BASE}/neighborhoods/${n.slug}`,
      alternates: { languages: { es: `${BASE}/es/neighborhoods/${n.slug}` } },
    });
  }

  return entries;
}
