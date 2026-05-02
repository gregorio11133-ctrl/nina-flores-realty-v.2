'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { FeaturedListing } from '@/types';
import { Trash2, Plus } from 'lucide-react';

const EMPTY = { address: '', price: '', bedrooms: '', bathrooms: '', sqft: '', photo_url: '', cinc_url: '' };

export default function ListingsPage() {
  const [items, setItems] = useState<FeaturedListing[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const sb = createClient();
      const { data } = await sb.from('featured_listings').select('*').order('display_order');
      setItems(data ?? []);
    }
    load();
  }, []);

  async function add() {
    if (!form.address || !form.price || !form.cinc_url) return;
    setSaving(true);
    const sb = createClient();
    const payload = { ...form, price: +form.price, bedrooms: form.bedrooms ? +form.bedrooms : null, bathrooms: form.bathrooms ? +form.bathrooms : null, sqft: form.sqft ? +form.sqft : null };
    const { data } = await sb.from('featured_listings').insert(payload).select().single();
    if (data) setItems(prev => [...prev, data]);
    setForm(EMPTY);
    setSaving(false);
  }

  async function remove(id: string) {
    const sb = createClient();
    await sb.from('featured_listings').delete().eq('id', id);
    setItems(prev => prev.filter(l => l.id !== id));
  }

  const inputClass = "w-full px-3 py-2 border rounded text-sm bg-white focus:outline-none";
  const fmt = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>Featured Listings</h1>

      <div className="bg-white rounded p-6 shadow-sm mb-8">
        <h2 className="font-bold mb-4 text-sm uppercase tracking-wide opacity-60">Add Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <input placeholder="Address *" value={form.address} onChange={e => setForm(p => ({ ...p, address: e.target.value }))} className={inputClass} />
          <input placeholder="Price * (e.g. 350000)" type="number" value={form.price} onChange={e => setForm(p => ({ ...p, price: e.target.value }))} className={inputClass} />
          <input placeholder="Bedrooms" type="number" value={form.bedrooms} onChange={e => setForm(p => ({ ...p, bedrooms: e.target.value }))} className={inputClass} />
          <input placeholder="Bathrooms (e.g. 2.5)" value={form.bathrooms} onChange={e => setForm(p => ({ ...p, bathrooms: e.target.value }))} className={inputClass} />
          <input placeholder="Sq Ft" type="number" value={form.sqft} onChange={e => setForm(p => ({ ...p, sqft: e.target.value }))} className={inputClass} />
          <input placeholder="Photo URL" value={form.photo_url} onChange={e => setForm(p => ({ ...p, photo_url: e.target.value }))} className={inputClass} />
        </div>
        <input placeholder="CINC Listing URL *" value={form.cinc_url} onChange={e => setForm(p => ({ ...p, cinc_url: e.target.value }))} className={`${inputClass} mb-3`} />
        <button onClick={add} disabled={saving} className="flex items-center gap-2 px-4 py-2 rounded text-sm font-bold text-white disabled:opacity-50" style={{ background: 'var(--color-maroon)' }}>
          <Plus size={14} /> {saving ? 'Saving...' : 'Add Listing'}
        </button>
      </div>

      <div className="space-y-3">
        {items.map(l => (
          <div key={l.id} className="bg-white rounded p-4 shadow-sm flex gap-4 items-start">
            <div className="flex-1">
              <p className="font-bold text-sm">{l.address}</p>
              <p className="text-sm opacity-60">{fmt(l.price)} · {l.bedrooms}bd / {l.bathrooms}ba · {l.sqft?.toLocaleString()} sqft</p>
              <a href={l.cinc_url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">View CINC listing ↗</a>
            </div>
            <button onClick={() => remove(l.id)} className="text-red-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
          </div>
        ))}
        {items.length === 0 && <p className="text-sm opacity-50">No listings yet.</p>}
      </div>
    </div>
  );
}
