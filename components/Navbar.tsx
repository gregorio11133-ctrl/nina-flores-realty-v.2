'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import CincLink from './CincLink';

interface NavbarProps {
  locale: string;
}

type DropdownKey = 'firstTimeBuyers' | 'selling' | 'exploreSouthernAZ' | 'resources' | null;

export default function Navbar({ locale }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const base = locale === 'en' ? '' : '/es';

  const dropdowns: Record<string, { label: string; href?: string; items: { href: string; label: string }[] }> = {
    firstTimeBuyers: {
      label: 'First Time Home Buyers',
      href: `${base}/first-time-buyers`,
      items: [
        { href: `${base}/first-time-buyers`, label: 'Overview' },
        { href: `${base}/first-time-buyers#process`, label: 'The Buying Process' },
        { href: `${base}/first-time-buyers#prequalify`, label: 'Get Pre-Qualified' },
        { href: `${base}/blog?category=first-time-home-buyers`, label: 'First Timer Tips' },
      ],
    },
    selling: {
      label: 'Selling',
      items: [
        { href: `${base}/blog?category=selling-tips`, label: 'Selling Tips' },
        { href: `${base}/selling/home-worth`, label: "What's My Home Worth?" },
        { href: `${base}/selling/checklist`, label: 'Selling Checklist' },
      ],
    },
    exploreSouthernAZ: {
      label: 'Explore Southern AZ',
      items: [
        { href: `${base}/neighborhoods`, label: 'Neighborhoods' },
        { href: `${base}/events`, label: 'Events' },
        { href: `${base}/blog?category=neighborhood-spotlights`, label: 'Neighborhood Spotlights' },
      ],
    },
    resources: {
      label: 'Resources',
      items: [
        { href: `${base}/blog?category=market-updates`, label: 'Market Updates' },
        { href: `${base}/blog?category=buying-tips`, label: 'Buying Tips' },
        { href: `${base}/blog?category=selling-tips`, label: 'Selling Tips' },
        { href: `${base}/blog?category=relocation-guides`, label: 'Relocation Guides' },
      ],
    },
  };

  const linkStyle: React.CSSProperties = { fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' };

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      style={{ borderBottom: '1px solid var(--color-cream-dark)', overflow: 'visible' }}
      aria-label="Main navigation"
    >
      {/* Outer container: relative so logo can use absolute positioning */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 relative h-[80px]"
        style={{ overflow: 'visible' }}
      >
        {/* Logo: spans full navbar height, overflow hidden clips PNG's internal whitespace */}
        <div
          className="absolute inset-y-0 left-4 flex items-center"
          style={{ zIndex: 60 }}
        >
          <Logo locale={locale} />
        </div>

        {/* Nav content: padded left to clear the logo, full height flex row */}
        <div
          className="h-full flex items-center"
          style={{ paddingLeft: '230px' }}
        >
          {/* Desktop links — ml-auto pushes everything to the right */}
          <div className="hidden md:flex items-center gap-5 ml-auto">
            <Link href={`${base}/about`} className="text-sm hover:text-maroon transition-colors" style={linkStyle}>
              About
            </Link>

            {(Object.entries(dropdowns) as [string, typeof dropdowns[string]][]).map(([key, data]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key as DropdownKey)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-0.5">
                  {data.href ? (
                    <Link href={data.href} className="text-sm hover:text-maroon transition-colors" style={linkStyle}>
                      {data.label}
                    </Link>
                  ) : (
                    <span className="text-sm" style={linkStyle}>{data.label}</span>
                  )}
                  <ChevronDown size={13} className={`transition-transform ml-0.5 ${activeDropdown === key ? 'rotate-180' : ''}`} style={{ color: 'var(--color-charcoal)' }} />
                </div>
                {activeDropdown === key && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-sm border py-1.5 z-50"
                    style={{ borderColor: 'var(--color-cream-dark)' }}
                  >
                    {data.items.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:text-maroon transition-colors"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href={`${base}/contact`} className="text-sm hover:text-maroon transition-colors" style={linkStyle}>
              Contact
            </Link>

            <LanguageToggle />
            <CincLink
              href="https://ninaflores.viewalltucsonhomes.com/search"
              title="Opens property search"
              className="px-4 py-2 rounded text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
            >
              Search Homes
            </CincLink>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 ml-auto"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            style={{ color: 'var(--color-charcoal)' }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3"
          style={{ borderColor: 'var(--color-cream-dark)' }}
        >
          <Link
            href={`${base}/about`}
            onClick={() => setOpen(false)}
            className="text-base hover:text-maroon py-1"
            style={linkStyle}
          >
            About
          </Link>

          {(Object.entries(dropdowns) as [string, typeof dropdowns[string]][]).map(([key, data]) => (
            <div key={key}>
              <div className="flex items-center justify-between w-full py-1">
                {data.href ? (
                  <Link href={data.href} onClick={() => setOpen(false)} className="text-base hover:text-maroon" style={linkStyle}>
                    {data.label}
                  </Link>
                ) : (
                  <span className="text-base" style={linkStyle}>{data.label}</span>
                )}
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key as DropdownKey)}
                  className="p-1"
                  aria-label={`Toggle ${data.label} submenu`}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileExpanded === key ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--color-charcoal)' }}
                  />
                </button>
              </div>
              {mobileExpanded === key && (
                <div className="pl-4 mt-1 flex flex-col gap-2 border-l-2" style={{ borderColor: 'var(--color-maroon)' }}>
                  {data.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm py-1 hover:text-maroon"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href={`${base}/contact`}
            onClick={() => setOpen(false)}
            className="text-base hover:text-maroon py-1"
            style={linkStyle}
          >
            Contact
          </Link>

          <LanguageToggle />
          <CincLink
            href="https://ninaflores.viewalltucsonhomes.com/search"
            title="Opens property search"
            className="inline-flex w-fit px-4 py-2 rounded text-sm font-bold text-white"
            style={{ background: 'var(--color-maroon)' } as React.CSSProperties}
          >
            Search Homes
          </CincLink>
        </div>
      )}
    </nav>
  );
}
