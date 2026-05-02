'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { Lead } from '@/types';

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const sb = createClient();
      const { data } = await sb.from('leads').select('*').order('created_at', { ascending: false });
      setLeads(data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  async function markContacted(id: string, current: boolean) {
    const sb = createClient();
    await sb.from('leads').update({ contacted: !current }).eq('id', id);
    setLeads(prev => prev.map(l => l.id === id ? { ...l, contacted: !current } : l));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>Leads</h1>
      {loading ? <p className="text-sm opacity-50">Loading...</p> : (
        <div className="space-y-3">
          {leads.map(lead => (
            <div key={lead.id} className="bg-white rounded p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <p className="font-bold">{lead.name}</p>
                <p className="text-sm opacity-60">{lead.email} {lead.phone && `· ${lead.phone}`}</p>
                <p className="text-xs mt-1 opacity-50">{lead.inquiry_type} · {lead.preferred_language} · {new Date(lead.created_at).toLocaleDateString()}</p>
                {lead.message && <p className="text-sm mt-2 opacity-70">{lead.message}</p>}
              </div>
              <button
                onClick={() => markContacted(lead.id, lead.contacted)}
                className="shrink-0 px-3 py-1.5 rounded text-xs font-bold border transition-colors"
                style={lead.contacted
                  ? { background: '#dcfce7', color: '#166534', borderColor: '#bbf7d0' }
                  : { background: 'var(--color-cream)', color: 'var(--color-maroon)', borderColor: 'var(--color-maroon)' }}
              >
                {lead.contacted ? 'Contacted ✓' : 'Mark Contacted'}
              </button>
            </div>
          ))}
          {leads.length === 0 && <p className="text-sm opacity-50">No leads yet.</p>}
        </div>
      )}
    </div>
  );
}
