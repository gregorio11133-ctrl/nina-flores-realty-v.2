'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function LeadCaptureForm() {
  const t = useTranslations('lead');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const inputClass = "w-full px-4 py-2.5 border rounded-sm text-sm bg-white focus:outline-none focus:ring-2 transition-shadow";
  const inputStyle = { borderColor: 'var(--color-cream-dark)', fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' };
  const focusStyle = { '--tw-ring-color': 'var(--color-maroon)' } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('name')} *</label>
          <input type="text" name="name" required className={inputClass} style={{ ...inputStyle, ...focusStyle }} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('email')} *</label>
          <input type="email" name="email" required className={inputClass} style={{ ...inputStyle, ...focusStyle }} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('phone')}</label>
          <input type="tel" name="phone" className={inputClass} style={{ ...inputStyle, ...focusStyle }} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('language')}</label>
          <select name="preferred_language" className={inputClass} style={{ ...inputStyle, ...focusStyle }}>
            <option value="en">{t('langEn')}</option>
            <option value="es">{t('langEs')}</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('inquiryType')}</label>
        <select name="inquiry_type" className={inputClass} style={{ ...inputStyle, ...focusStyle }}>
          <option value="buy">{t('buy')}</option>
          <option value="sell">{t('sell')}</option>
          <option value="invest">{t('invest')}</option>
          <option value="relocate">{t('relocate')}</option>
          <option value="browsing">{t('browsing')}</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>{t('message')}</label>
        <textarea name="message" rows={4} className={inputClass} style={{ ...inputStyle, ...focusStyle, resize: 'vertical' }} />
      </div>

      {status === 'success' && (
        <p className="text-sm font-semibold" style={{ color: '#2d6a4f' }}>{t('success')}</p>
      )}
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
  );
}
