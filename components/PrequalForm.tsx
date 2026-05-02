'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';

interface PrequalFormProps {
  onClose: () => void;
}

export default function PrequalForm({ onClose }: PrequalFormProps) {
  const t = useTranslations('prequal');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/prequal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const inputClass = "w-full px-4 py-2.5 border rounded-sm text-sm bg-white focus:outline-none focus:ring-2 transition-shadow";
  const inputStyle = { borderColor: 'var(--color-cream-dark)', fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="prequal-title"
    >
      <div className="relative w-full max-w-lg rounded-sm shadow-2xl p-8" style={{ background: 'var(--color-cream)' }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal-mid hover:text-charcoal transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 id="prequal-title" className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
          {t('title')}
        </h2>
        <p className="text-sm mb-6 opacity-70" style={{ fontFamily: 'var(--font-body)' }}>{t('subtitle')}</p>

        {status === 'success' ? (
          <div className="text-center py-8">
            <p className="text-lg font-semibold" style={{ color: '#2d6a4f', fontFamily: 'var(--font-display)' }}>{t('success')}</p>
            <button onClick={onClose} className="mt-4 px-6 py-2 rounded-sm text-sm font-bold text-white" style={{ background: 'var(--color-maroon)' }}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('name')} *</label>
              <input type="text" name="name" required className={inputClass} style={inputStyle} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('email')} *</label>
                <input type="email" name="email" required className={inputClass} style={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('phone')}</label>
                <input type="tel" name="phone" className={inputClass} style={inputStyle} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('loanAmount')}</label>
              <input type="text" name="loan_amount" placeholder="e.g. $350,000" className={inputClass} style={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('notes')}</label>
              <textarea name="notes" rows={3} className={inputClass} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            {status === 'error' && (
              <p className="text-sm font-semibold" style={{ color: 'var(--color-maroon)' }}>{t('error')}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 rounded-sm font-bold text-white text-sm tracking-wide transition-colors disabled:opacity-60"
              style={{ background: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
            >
              {status === 'loading' ? t('submitting') : t('submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
