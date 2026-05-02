'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { BlogPost } from '@/types';
import { Trash2, Plus, Eye, EyeOff } from 'lucide-react';

const EMPTY = { title: '', slug: '', excerpt: '', content: '', category: 'market-updates', language: 'en' };
const CATEGORIES = ['market-updates', 'buying-tips', 'selling-tips', 'neighborhood-spotlights', 'relocation-guides', 'first-time-home-buyers', 'events'];

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const sb = createClient();
      const { data } = await sb.from('blog_posts').select('*').order('created_at', { ascending: false });
      setPosts(data ?? []);
    }
    load();
  }, []);

  async function save() {
    if (!form.title || !form.slug) return;
    setSaving(true);
    const sb = createClient();
    const { data } = await sb.from('blog_posts').insert({ ...form, published: false }).select().single();
    if (data) setPosts(prev => [data, ...prev]);
    setForm(EMPTY);
    setEditing(false);
    setSaving(false);
  }

  async function togglePublish(id: string, published: boolean) {
    const sb = createClient();
    const update = { published: !published, published_at: !published ? new Date().toISOString() : undefined };
    await sb.from('blog_posts').update(update).eq('id', id);
    setPosts(prev => prev.map(p => p.id === id ? { ...p, ...update } : p));
  }

  async function remove(id: string) {
    const sb = createClient();
    await sb.from('blog_posts').delete().eq('id', id);
    setPosts(prev => prev.filter(p => p.id !== id));
  }

  const inputClass = "w-full px-3 py-2 border rounded text-sm bg-white focus:outline-none";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>Blog Posts</h1>
        <button onClick={() => setEditing(!editing)} className="flex items-center gap-2 px-4 py-2 rounded text-sm font-bold text-white" style={{ background: 'var(--color-maroon)' }}>
          <Plus size={14} /> New Post
        </button>
      </div>

      {editing && (
        <div className="bg-white rounded p-6 shadow-sm mb-8">
          <h2 className="font-bold mb-4 text-sm uppercase tracking-wide opacity-60">New Post</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input placeholder="Title *" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-') }))} className={inputClass} />
            <input placeholder="Slug *" value={form.slug} onChange={e => setForm(p => ({ ...p, slug: e.target.value }))} className={inputClass} />
            <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))} className={inputClass}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c.replace(/-/g, ' ')}</option>)}
            </select>
            <select value={form.language} onChange={e => setForm(p => ({ ...p, language: e.target.value }))} className={inputClass}>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <input placeholder="Excerpt (short summary)" value={form.excerpt} onChange={e => setForm(p => ({ ...p, excerpt: e.target.value }))} className={`${inputClass} mb-3`} />
          <textarea placeholder="Content (Markdown)" value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} rows={10} className={`${inputClass} mb-3 font-mono text-xs`} />
          <div className="flex gap-3">
            <button onClick={save} disabled={saving} className="px-4 py-2 rounded text-sm font-bold text-white disabled:opacity-50" style={{ background: 'var(--color-maroon)' }}>
              {saving ? 'Saving...' : 'Save Draft'}
            </button>
            <button onClick={() => setEditing(false)} className="px-4 py-2 rounded text-sm font-bold" style={{ background: 'var(--color-cream-dark)' }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {posts.map(p => (
          <div key={p.id} className="bg-white rounded p-4 shadow-sm flex gap-4 items-start">
            <div className="flex-1">
              <p className="font-bold text-sm">{p.title}</p>
              <p className="text-xs opacity-50">{p.slug} · {p.category} · {p.language}</p>
              {p.excerpt && <p className="text-sm opacity-60 mt-1">{p.excerpt}</p>}
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => togglePublish(p.id, p.published)} title={p.published ? 'Unpublish' : 'Publish'}
                className="p-1.5 rounded transition-colors"
                style={{ color: p.published ? '#16a34a' : 'var(--color-charcoal-mid)' }}>
                {p.published ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
              <button onClick={() => remove(p.id)} className="p-1.5 text-red-400 hover:text-red-600 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-sm opacity-50">No posts yet.</p>}
      </div>
    </div>
  );
}
