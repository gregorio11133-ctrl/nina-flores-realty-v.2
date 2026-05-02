'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import CincLink from './CincLink';

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const base = locale === 'en' ? '' : '/es';

  const links = [
    { href: `${base}/about`, label: t('about') },
    { href: `${base}/neighborhoods`, label: t('neighborhoods') },
    { href: `${base}/specialties`, label: t('specialties') },
    { href: `${base}/blog`, label: t('blog') },
    { href: `${base}/contact`, label: t('contact') },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      style={{ borderBottom: '1px solid var(--color-cream-dark)' }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Logo locale={locale} />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href || '/'}
              className="text-sm font-body text-charcoal-mid hover:text-maroon transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle />
          <CincLink
            href="https://ninaflores.viewalltucsonhomes.com/search"
            title={t('searchHomesTitle')}
            className="px-4 py-2 rounded text-sm font-bold text-white transition-colors"
            style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
          >
            {t('searchHomes')}
          </CincLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4" style={{ borderColor: 'var(--color-cream-dark)' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href || '/'}
              onClick={() => setOpen(false)}
              className="text-base font-body text-charcoal hover:text-maroon"
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle />
          <CincLink
            href="https://ninaflores.viewalltucsonhomes.com/search"
            title={t('searchHomesTitle')}
            className="inline-flex w-fit px-4 py-2 rounded text-sm font-bold text-white"
            style={{ background: 'var(--color-maroon)' } as React.CSSProperties}
          >
            {t('searchHomes')}
          </CincLink>
        </div>
      )}
    </nav>
  );
}
