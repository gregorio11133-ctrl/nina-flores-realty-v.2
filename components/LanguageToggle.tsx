'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: string) {
    if (next === locale) return;
    localStorage.setItem('preferred-locale', next);
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === 'en' || segments[0] === 'es') segments.shift();
    const rest = segments.join('/');
    router.push(next === 'en' ? `/${rest}` : `/es/${rest}`);
  }

  return (
    <div className="flex items-center gap-1 text-sm font-body" aria-label="Language toggle">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-0.5 rounded transition-colors ${locale === 'en' ? 'text-maroon font-bold' : 'text-charcoal-mid hover:text-maroon'}`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <span className="text-charcoal-mid opacity-40">|</span>
      <button
        onClick={() => switchLocale('es')}
        className={`px-2 py-0.5 rounded transition-colors ${locale === 'es' ? 'text-maroon font-bold' : 'text-charcoal-mid hover:text-maroon'}`}
        aria-pressed={locale === 'es'}
      >
        ES
      </button>
    </div>
  );
}
