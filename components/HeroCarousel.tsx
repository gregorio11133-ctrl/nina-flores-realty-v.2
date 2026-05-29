'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import CincLink from './CincLink';
import MortgageCalculator from './MortgageCalculator';

interface HeroCarouselProps {
  locale: string;
}

/* ── Slide 1: Luxury botanical corner decoration ── */
function BotanicalDecor({ side }: { side: 'left' | 'right' }) {
  const flip = side === 'right';
  return (
    <svg
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-44 h-80 opacity-[0.18]"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    >
      {/* Main vine stem */}
      <path d="M 28 400 C 18 310 72 255 42 175 C 14 100 68 68 48 8"
        stroke="#C9A84C" strokeWidth="1.8" fill="none" />

      {/* Branch 1 — upper */}
      <path d="M 50 80 Q 100 62 96 44" stroke="#C9A84C" strokeWidth="1.1" fill="none" />
      <path d="M 82 52 C 104 40 106 30 96 44 C 88 52 80 56 82 52Z" fill="#F5EFE6" opacity="0.9" />
      <path d="M 90 40 C 108 30 108 22 96 44 C 90 50 86 42 90 40Z" fill="#F5EFE6" opacity="0.6" />

      {/* Branch 2 — mid-upper */}
      <path d="M 46 155 Q 98 138 94 120" stroke="#C9A84C" strokeWidth="1.1" fill="none" />
      <path d="M 80 128 C 102 116 104 106 94 120 C 86 128 78 132 80 128Z" fill="#F5EFE6" opacity="0.9" />
      <path d="M 88 116 C 106 106 106 98 94 120 C 88 126 84 118 88 116Z" fill="#F5EFE6" opacity="0.6" />

      {/* Branch 3 — mid */}
      <path d="M 42 230 Q 94 212 90 194" stroke="#C9A84C" strokeWidth="1.1" fill="none" />
      <path d="M 76 202 C 98 190 100 180 90 194 C 82 202 74 206 76 202Z" fill="#F5EFE6" opacity="0.9" />
      <path d="M 84 190 C 102 180 102 172 90 194 C 84 200 80 192 84 190Z" fill="#F5EFE6" opacity="0.6" />

      {/* Branch 4 — lower */}
      <path d="M 36 308 Q 88 290 84 272" stroke="#C9A84C" strokeWidth="1.1" fill="none" />
      <path d="M 70 280 C 92 268 94 258 84 272 C 76 280 68 284 70 280Z" fill="#F5EFE6" opacity="0.8" />

      {/* Gold flower at top of vine */}
      <circle cx="50" cy="8" r="8" fill="#C9A84C" opacity="0.65" />
      <ellipse cx="50" cy="-5" rx="5" ry="9" fill="#C9A84C" opacity="0.45" />
      <ellipse cx="50" cy="21" rx="5" ry="9" fill="#C9A84C" opacity="0.45" />
      <ellipse cx="37" cy="8" rx="9" ry="5" fill="#C9A84C" opacity="0.45" />
      <ellipse cx="63" cy="8" rx="9" ry="5" fill="#C9A84C" opacity="0.45" />
      <ellipse cx="39" cy="-2" rx="5" ry="9" fill="#C9A84C" opacity="0.35" transform="rotate(-45 39 -2)" />
      <ellipse cx="61" cy="-2" rx="5" ry="9" fill="#C9A84C" opacity="0.35" transform="rotate(45 61 -2)" />
      <ellipse cx="39" cy="18" rx="5" ry="9" fill="#C9A84C" opacity="0.35" transform="rotate(45 39 18)" />
      <ellipse cx="61" cy="18" rx="5" ry="9" fill="#C9A84C" opacity="0.35" transform="rotate(-45 61 18)" />

      {/* Small flower mid-vine */}
      <circle cx="94" cy="192" r="6" fill="#C9A84C" opacity="0.55" />
      <ellipse cx="94" cy="183" rx="4" ry="7" fill="#C9A84C" opacity="0.38" />
      <ellipse cx="94" cy="201" rx="4" ry="7" fill="#C9A84C" opacity="0.38" />
      <ellipse cx="85" cy="192" rx="7" ry="4" fill="#C9A84C" opacity="0.38" />
      <ellipse cx="103" cy="192" rx="7" ry="4" fill="#C9A84C" opacity="0.38" />

      {/* Berry clusters */}
      <circle cx="58" cy="78" r="3.5" fill="#C9A84C" opacity="0.6" />
      <circle cx="66" cy="72" r="2.5" fill="#C9A84C" opacity="0.5" />
      <circle cx="62" cy="68" r="2" fill="#C9A84C" opacity="0.4" />
      <circle cx="50" cy="152" r="3" fill="#C9A84C" opacity="0.55" />
      <circle cx="58" cy="146" r="2" fill="#C9A84C" opacity="0.45" />
      <circle cx="42" cy="305" r="2.5" fill="#C9A84C" opacity="0.5" />

      {/* Saguaro cactus bottom corner */}
      <rect x="6" y="305" width="18" height="95" rx="9" fill="#F5EFE6" opacity="0.35" />
      <rect x="0" y="326" width="12" height="52" rx="6" fill="#F5EFE6" opacity="0.28" transform="rotate(-10 6 352)" />
      <rect x="18" y="340" width="10" height="42" rx="5" fill="#F5EFE6" opacity="0.25" transform="rotate(12 23 361)" />
      <circle cx="15" cy="304" r="6" fill="#C9A84C" opacity="0.45" />
      <ellipse cx="15" cy="296" rx="4" ry="6" fill="#C9A84C" opacity="0.32" />
      <ellipse cx="15" cy="312" rx="4" ry="6" fill="#C9A84C" opacity="0.32" />
      <ellipse cx="8" cy="304" rx="6" ry="4" fill="#C9A84C" opacity="0.32" />
      <ellipse cx="22" cy="304" rx="6" ry="4" fill="#C9A84C" opacity="0.32" />

      {/* Ground desert plants */}
      <path d="M 0 398 C 8 376 22 372 18 390" fill="#F5EFE6" opacity="0.28" />
      <path d="M 22 400 C 30 378 46 374 40 394" fill="#F5EFE6" opacity="0.22" />
      <path d="M 50 400 C 58 380 70 378 66 396" fill="#F5EFE6" opacity="0.2" />
      <path d="M 72 400 C 78 384 86 382 82 398" fill="#F5EFE6" opacity="0.18" />
    </svg>
  );
}

/* ── Slide 3: Gold festive star/orb decorations ── */
function FestiveDecor() {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Star-shaped balloons: puffed 5-point star + knot + long S-curve string */}

      {/* Balloon 1 — large, left */}
      <path d="M 80,92 L 91,105 L 107,111 L 97,126 L 97,143 L 80,138 L 63,143 L 63,126 L 53,111 L 69,105 Z"
        fill="#C9A84C" stroke="#C9A84C" strokeWidth="5" strokeLinejoin="round" opacity="0.13" />
      <ellipse cx="71" cy="103" rx="7" ry="5" fill="white" opacity="0.07" />
      <circle cx="80" cy="141" r="3" fill="#C9A84C" opacity="0.22" />
      <path d="M 80,144 C 68,172 96,200 80,232 C 64,262 90,294 74,335"
        stroke="#C9A84C" strokeWidth="1.3" opacity="0.28" fill="none" strokeLinecap="round" />

      {/* Balloon 2 — medium, left */}
      <path d="M 130,56 L 138,67 L 151,71 L 143,82 L 143,96 L 130,92 L 117,96 L 117,82 L 109,71 L 122,67 Z"
        fill="#C9A84C" stroke="#C9A84C" strokeWidth="4" strokeLinejoin="round" opacity="0.10" />
      <ellipse cx="122" cy="65" rx="6" ry="4" fill="white" opacity="0.06" />
      <circle cx="130" cy="95" r="2.5" fill="#C9A84C" opacity="0.2" />
      <path d="M 130,98 C 118,124 146,150 130,180 C 114,208 140,234 124,268"
        stroke="#C9A84C" strokeWidth="1.1" opacity="0.25" fill="none" strokeLinecap="round" />

      {/* Balloon 3 — large, right */}
      <path d="M 720,72 L 730,84 L 745,90 L 736,103 L 735,119 L 720,115 L 705,119 L 704,103 L 695,90 L 710,84 Z"
        fill="#C9A84C" stroke="#C9A84C" strokeWidth="5" strokeLinejoin="round" opacity="0.12" />
      <ellipse cx="711" cy="82" rx="7" ry="5" fill="white" opacity="0.07" />
      <circle cx="720" cy="118" r="3" fill="#C9A84C" opacity="0.22" />
      <path d="M 720,121 C 708,150 734,178 718,212 C 702,244 728,272 712,314"
        stroke="#C9A84C" strokeWidth="1.3" opacity="0.28" fill="none" strokeLinecap="round" />

      {/* Balloon 4 — medium, right */}
      <path d="M 670,43 L 678,53 L 689,57 L 682,67 L 682,79 L 670,76 L 658,79 L 658,67 L 651,57 L 662,53 Z"
        fill="#C9A84C" stroke="#C9A84C" strokeWidth="4" strokeLinejoin="round" opacity="0.10" />
      <ellipse cx="662" cy="51" rx="6" ry="4" fill="white" opacity="0.06" />
      <circle cx="670" cy="79" r="2.5" fill="#C9A84C" opacity="0.2" />
      <path d="M 670,82 C 658,108 682,133 668,164 C 654,193 678,220 660,252"
        stroke="#C9A84C" strokeWidth="1.1" opacity="0.25" fill="none" strokeLinecap="round" />

      {/* Balloon 5 — medium, top center */}
      <path d="M 400,34 L 409,45 L 423,51 L 415,63 L 414,77 L 400,74 L 386,77 L 385,63 L 377,51 L 391,45 Z"
        fill="#C9A84C" stroke="#C9A84C" strokeWidth="4" strokeLinejoin="round" opacity="0.09" />
      <ellipse cx="392" cy="43" rx="6" ry="4" fill="white" opacity="0.06" />
      <circle cx="400" cy="76" r="2.5" fill="#C9A84C" opacity="0.18" />
      <path d="M 400,79 C 388,106 414,132 398,163 C 382,192 408,218 392,250"
        stroke="#C9A84C" strokeWidth="1.1" opacity="0.22" fill="none" strokeLinecap="round" />

      {/* Circular orbs (replacing 6-point stars) — soft glow: outer + inner circle */}
      {/* Orb top-left */}
      <circle cx="60" cy="43" r="14" fill="#C9A84C" opacity="0.06" />
      <circle cx="60" cy="43" r="7" fill="#C9A84C" opacity="0.16" />
      {/* Orb top-right large */}
      <circle cx="740" cy="58" r="18" fill="#C9A84C" opacity="0.05" />
      <circle cx="740" cy="58" r="9" fill="#C9A84C" opacity="0.14" />
      {/* Orb top-center */}
      <circle cx="400" cy="28" r="12" fill="#C9A84C" opacity="0.05" />
      <circle cx="400" cy="28" r="6" fill="#C9A84C" opacity="0.13" />
      {/* Orb mid-left */}
      <circle cx="200" cy="59" r="10" fill="#C9A84C" opacity="0.05" />
      <circle cx="200" cy="59" r="5" fill="#C9A84C" opacity="0.14" />
      {/* Orb mid-right */}
      <circle cx="580" cy="39" r="10" fill="#C9A84C" opacity="0.05" />
      <circle cx="580" cy="39" r="5" fill="#C9A84C" opacity="0.14" />
      {/* Orb bottom-left */}
      <circle cx="160" cy="429" r="9" fill="#C9A84C" opacity="0.05" />
      <circle cx="160" cy="429" r="4" fill="#C9A84C" opacity="0.10" />
      {/* Orb bottom-right */}
      <circle cx="630" cy="439" r="9" fill="#C9A84C" opacity="0.05" />
      <circle cx="630" cy="439" r="4" fill="#C9A84C" opacity="0.10" />

      {/* Confetti streaks */}
      <rect x="100" y="400" width="3" height="14" rx="1.5" fill="#C9A84C" opacity="0.12" transform="rotate(20 101 407)" />
      <rect x="680" y="410" width="3" height="12" rx="1.5" fill="#C9A84C" opacity="0.12" transform="rotate(-15 681 416)" />
      <rect x="300" y="450" width="2" height="10" rx="1" fill="#C9A84C" opacity="0.1" transform="rotate(10 301 455)" />
      <rect x="500" y="440" width="2" height="10" rx="1" fill="#C9A84C" opacity="0.1" transform="rotate(-20 501 445)" />
    </svg>
  );
}

export default function HeroCarousel({ locale }: HeroCarouselProps) {
  const t = useTranslations();
  const base = locale === 'en' ? '' : '/es';
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = 4;

  const next = useCallback(() => setCurrent(c => (c + 1) % slides), []);
  const prev = () => setCurrent(c => (c - 1 + slides) % slides);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [paused, next]);

  const calcLabels = {
    title: t('calculator.title'),
    subtitle: t('calculator.subtitle'),
    homePrice: t('calculator.homePrice'),
    downPayment: t('calculator.downPayment'),
    interestRate: t('calculator.interestRate'),
    loanTerm: t('calculator.loanTerm'),
    years: t('calculator.years'),
    monthlyPayment: t('calculator.monthlyPayment'),
    disclaimer: t('calculator.disclaimer'),
    prequalNote: t('calculator.prequalNote'),
    prequalBtn: t('calculator.prequalBtn'),
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: '88vh' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── SLIDE 1 ── Luxury dark botanical */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${current === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        style={{
          background: 'radial-gradient(ellipse at 30% 60%, #4a1522 0%, #2a0d12 45%, #1c1c1c 100%)',
        }}
      >
        {/* Subtle gold grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Botanical corner decorations */}
        <div className="absolute bottom-0 left-0 pointer-events-none select-none">
          <BotanicalDecor side="left" />
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none select-none">
          <BotanicalDecor side="right" />
        </div>

        {/* Top-edge thin gold rule */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
        />

        <div className="relative z-10 h-full flex items-center px-6 md:px-16 max-w-7xl mx-auto w-full py-6 md:py-16">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center w-full">
            {/* Left: headline + CTAs */}
            <div className="flex-1 text-left">
              {/* Eyebrow */}
              <p
                className="text-xs uppercase tracking-[0.25em] mb-2 md:mb-4"
                style={{ color: 'rgba(201,168,76,0.8)', fontFamily: 'var(--font-body)' }}
              >
                Nina Flores · REALTOR® · Southern Arizona
              </p>
              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 md:mb-5 leading-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t('hero.headline')}
              </h1>
              {/* Thin gold divider */}
              <div
                className="mb-3 md:mb-5 w-20 h-px"
                style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.7), transparent)' }}
              />
              <p
                className="text-sm sm:text-lg mb-4 md:mb-8 opacity-75"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
              >
                {t('hero.subheadline')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <CincLink
                  href="https://ninaflores.viewalltucsonhomes.com/search"
                  className="px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90 text-center"
                  style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' } as React.CSSProperties}
                >
                  {t('hero.ctaSearch')}
                </CincLink>
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-sm font-bold text-base text-white transition-colors hover:bg-white/10 text-center"
                  style={{ border: '1px solid rgba(201,168,76,0.5)', fontFamily: 'var(--font-body)' }}
                >
                  {t('hero.ctaContact')}
                </a>
                <Link
                  href={`${base}/buying`}
                  className="px-8 py-3.5 rounded-sm font-bold text-base text-white transition-colors hover:bg-white/10 text-center"
                  style={{ border: '1px solid rgba(255,255,255,0.3)', fontFamily: 'var(--font-body)' }}
                >
                  {locale === 'es' ? 'Guía Gratuita para Comprar' : 'Get your FREE Homebuying Guide'}
                </Link>
              </div>
            </div>

            {/* Right: Mortgage Calculator — desktop only; mobile renders it below carousel */}
            <div className="hidden md:block w-full lg:w-[480px] shrink-0">
              <MortgageCalculator labels={calcLabels} />
            </div>
          </div>
        </div>
      </div>

      {/* ── SLIDE 2 ── Sell with Confidence */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 flex items-center justify-center ${current === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        style={{ background: 'var(--color-cream)' }}
      >
        <div className="text-center px-6 max-w-2xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
          >
            Nina Flores · REALTOR®
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
          >
            Sell with Confidence
          </h2>
          <p
            className="text-lg mb-10 opacity-70"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
          >
            Nina handles every detail — pricing, marketing, negotiating — so you walk away with the best possible outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-sm font-bold text-base text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
            >
              Contact Nina
            </a>
            <Link
              href={`${base}/selling/home-worth`}
              className="px-8 py-3.5 rounded-sm font-bold text-base border-2 transition-colors hover:bg-maroon/10 text-center"
              style={{ borderColor: 'var(--color-maroon)', color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
            >
              What&apos;s My Home Worth?
            </Link>
          </div>
        </div>
      </div>

      {/* ── SLIDE 3 ── Escape the Rent Trap */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 flex items-center justify-center ${current === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        style={{ background: 'var(--color-maroon)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 48px)',
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-4 opacity-70"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
          >
            Stop Renting · Start Owning
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Escape the Rent Trap
          </h2>
          <p
            className="text-lg mb-6 opacity-80"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            Nina helps renters make the leap to homeownership — even when it feels out of reach. Get your workbook today.
          </p>
          <Link
            href={`${base}/rent-trap`}
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            Renter&apos;s Guide to Homeownership
          </Link>
        </div>
      </div>

      {/* ── SLIDE 4 ── Explore Southern AZ / Events */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 flex items-center justify-center ${current === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        style={{ background: 'var(--color-charcoal)' }}
      >
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #F5EFE6 0px, #F5EFE6 1px, transparent 1px, transparent 60px)',
        }} />

        {/* Festive gold star + balloon decorations */}
        <FestiveDecor />

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-4 opacity-60"
            style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
          >
            Southern Arizona
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get to know Southern AZ
          </h2>
          <p
            className="text-xl mb-10 opacity-70"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}
          >
            Find your next event here
          </p>
          <Link
            href={`${base}/events`}
            className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            Browse Events
          </Link>
        </div>
      </div>

      {/* ── Navigation arrows ── */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Dots ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: slides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{
              background: i === current ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)',
              transform: i === current ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
