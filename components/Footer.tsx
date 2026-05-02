import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Logo from './Logo';
import { Phone, Mail, MapPin, Link as LinkIcon } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const base = locale === 'en' ? '' : '/es';

  const links = [
    { href: `${base}/about`, label: tn('about') },
    { href: `${base}/neighborhoods`, label: tn('neighborhoods') },
    { href: `${base}/specialties`, label: tn('specialties') },
    { href: `${base}/blog`, label: tn('blog') },
    { href: `${base}/contact`, label: tn('contact') },
  ];

  return (
    <footer style={{ background: 'var(--color-charcoal)', color: 'var(--color-cream)' }} aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Logo locale={locale} variant="light" />
          <p className="mt-4 text-sm opacity-70" style={{ fontFamily: 'var(--font-body)' }}>
            {t('tagline')}
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-60 hover:opacity-100 transition-opacity text-xs font-bold tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
              IG
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-60 hover:opacity-100 transition-opacity text-xs font-bold tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
              FB
            </a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h3 className="font-bold text-sm tracking-widest uppercase opacity-50 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Navigation
          </h3>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href || '/'} className="text-sm opacity-70 hover:opacity-100 transition-opacity" style={{ fontFamily: 'var(--font-body)' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-sm tracking-widest uppercase opacity-50 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Contact
          </h3>
          <ul className="space-y-3 text-sm opacity-80" style={{ fontFamily: 'var(--font-body)' }}>
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0" />
              <a href="tel:5203424124" className="hover:opacity-100">520.342.4124</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0" />
              <a href="mailto:NinaFloresRealty@gmail.com" className="hover:opacity-100 break-all">NinaFloresRealty@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="shrink-0 mt-0.5" />
              <span>7445 N Oracle Rd #201<br />Tucson, AZ 85704</span>
            </li>
          </ul>
        </div>

        {/* Disclosures */}
        <div>
          <h3 className="font-bold text-sm tracking-widest uppercase opacity-50 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Disclosures
          </h3>
          <div className="text-xs opacity-60 space-y-2" style={{ fontFamily: 'var(--font-body)' }}>
            <p>{t('license')}: SA712911000</p>
            <p>{t('brokerage')}</p>
            <p>{t('address')}</p>
            <p className="mt-3 flex items-center gap-2">
              <span className="text-lg" aria-label="REALTOR® logo">®</span>
              REALTOR®
            </p>
            <p>{t('equal')}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs opacity-40" style={{ fontFamily: 'var(--font-body)' }}>
        © {new Date().getFullYear()} Nina Flores · {t('rights')}
      </div>
    </footer>
  );
}
