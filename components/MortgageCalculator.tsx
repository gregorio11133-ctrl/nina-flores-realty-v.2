'use client';

import { useState } from 'react';
import PrequalForm from './PrequalForm';

interface MortgageCalculatorProps {
  labels: {
    title: string;
    subtitle: string;
    homePrice: string;
    downPayment: string;
    interestRate: string;
    loanTerm: string;
    years: string;
    monthlyPayment: string;
    disclaimer: string;
    prequalNote: string;
    prequalBtn: string;
  };
}

export default function MortgageCalculator({ labels }: MortgageCalculatorProps) {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [showPrequal, setShowPrequal] = useState(false);

  const principal = homePrice * (1 - downPct / 100);
  const monthly = (() => {
    if (rate === 0) return principal / (term * 12);
    const r = rate / 100 / 12;
    const n = term * 12;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  })();

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  const sliderStyle = { accentColor: 'var(--color-maroon)' };

  return (
    <>
      <div className="rounded-sm p-4 md:p-8 shadow-sm" style={{ background: 'var(--color-white)' }}>
        <h2 className="text-xl md:text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
          {labels.title}
        </h2>
        <p className="hidden md:block text-sm mb-3 md:mb-6 opacity-60" style={{ fontFamily: 'var(--font-body)' }}>{labels.subtitle}</p>

        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {/* Home Price */}
          <div>
            <div className="flex justify-between text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
              <label>{labels.homePrice}</label>
              <span className="font-bold" style={{ color: 'var(--color-maroon)' }}>{fmt(homePrice)}</span>
            </div>
            <input type="range" min={100000} max={2000000} step={5000} value={homePrice}
              onChange={e => setHomePrice(+e.target.value)} className="w-full" style={sliderStyle} />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
              <label>{labels.downPayment}</label>
              <span className="font-bold" style={{ color: 'var(--color-maroon)' }}>{downPct}% · {fmt(homePrice * downPct / 100)}</span>
            </div>
            <input type="range" min={3} max={50} step={1} value={downPct}
              onChange={e => setDownPct(+e.target.value)} className="w-full" style={sliderStyle} />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
              <label>{labels.interestRate}</label>
              <span className="font-bold" style={{ color: 'var(--color-maroon)' }}>{rate}%</span>
            </div>
            <input type="range" min={2} max={12} step={0.1} value={rate}
              onChange={e => setRate(parseFloat(e.target.value))} className="w-full" style={sliderStyle} />
          </div>

          {/* Loan Term */}
          <div>
            <div className="flex justify-between text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
              <label>{labels.loanTerm}</label>
              <span className="font-bold" style={{ color: 'var(--color-maroon)' }}>{term} {labels.years}</span>
            </div>
            <input type="range" min={10} max={30} step={5} value={term}
              onChange={e => setTerm(+e.target.value)} className="w-full" style={sliderStyle} />
          </div>
        </div>

        {/* Result */}
        <div className="mt-4 md:mt-8 rounded-sm p-4 md:p-6 text-center" style={{ background: 'var(--color-cream)' }}>
          <p className="text-sm uppercase tracking-widest opacity-60 mb-1" style={{ fontFamily: 'var(--font-body)' }}>
            {labels.monthlyPayment}
          </p>
          <p className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
            {fmt(monthly)}
          </p>
          <p className="text-xs mt-2 opacity-50" style={{ fontFamily: 'var(--font-body)' }}>/mo · {labels.disclaimer}</p>
        </div>

        {/* Pre-qual CTA */}
        <div className="hidden md:flex mt-3 md:mt-6 rounded-sm p-3 md:p-5 flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: 'var(--color-maroon)', color: 'var(--color-cream)' }}>
          <div className="flex-1">
            <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>{labels.prequalNote}</p>
          </div>
          <button
            onClick={() => setShowPrequal(true)}
            className="shrink-0 px-5 py-2.5 rounded-sm font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
          >
            {labels.prequalBtn}
          </button>
        </div>
      </div>

      {showPrequal && <PrequalForm onClose={() => setShowPrequal(false)} />}
    </>
  );
}
