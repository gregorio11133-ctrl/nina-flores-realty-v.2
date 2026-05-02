'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { Testimonial } from '@/types';
import { Trash2, Plus } from 'lucide-react';

const EMPTY = { client_name: '', quote: '', location: '', rating: 5 };

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const sb = createClient();
      const { data } = await sb.from('testimonials').select('*').order('created_at', { ascending: false });
      setItems(data ?? []);
    }
    load();
  }, []);

  async function add() {
    if (!form.client_name || !form.quote) return;
    setSaving(true);
    const sb = createClient();
    const { data } = await sb.from('testimonials').insert(form).select().single();
    if (data) setItems(prev => [data, ...prev]);
    setForm(EMPTY);
    setSaving(false);
  }

  async function remove(id: string) {
    const sb = createClient();
    await sb.from('testimonials').delete().eq('id', id);
    setItems(prev => prev.filter(t => t.id !== id));
  }

  const inputClass = "w-full px-3 py-2 border rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-maroon/40";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>Testimonials</h1>

      <div className="bg-white rounded p-6 shadow-sm mb-8">
        <h2 className="font-bold mb-4 text-sm uppercase tracking-wide opacity-60">Add Testimonial</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <input placeholder="Client Name *" value={form.client_name} onChange={e => setForm(p => ({ ...p, client_name: e.target.value }))} className={inputClass} />
          <input placeholder="Location (e.g. Oro Valley, AZ)" value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))} className={inputClass} />
        </div>
        <textarea placeholder="Quote *" value={form.quote} onChange={e => setForm(p => ({ ...p, quote: e.target.value }))} rows={3} className={`${inputClass} mb-3`} />
        <select value={form.rating} onChange={e => setForm(p => ({ ...p, rating: +e.target.value }))} className={`${inputClass} w-auto mb-3`}>
          {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Stars</option>)}
        </select>
        <button onClick={add} disabled={saving} className="flex items-center gap-2 px-4 py-2 rounded text-sm font-bold text-white disabled:opacity-50" style={{ background: 'var(--color-maroon)' }}>
          <Plus size={14} /> {saving ? 'Saving...' : 'Add Testimonial'}
        </button>
      </div>

      <div className="space-y-3">
        {items.map(t => (
          <div key={t.id} className="bg-white rounded p-4 shadow-sm flex gap-4 items-start">
            <div className="flex-1">
              <p className="font-bold text-sm">{t.client_name}</p>
              <p className="text-xs opacity-50">{t.location} · {'★'.repeat(t.rating)}</p>
              <p className="text-sm mt-1 opacity-70 italic">&ldquo;{t.quote}&rdquo;</p>
            </div>
            <button onClick={() => remove(t.id)} className="text-red-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
          </div>
        ))}
        {items.length === 0 && <p className="text-sm opacity-50">No testimonials yet.</p>}
      </div>
    </div>
  );
}
