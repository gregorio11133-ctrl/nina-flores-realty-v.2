'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, List, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────
   EVENTS DATA — Edit this array to add, remove, or update events.
   Each event needs: id, title, date (YYYY-MM-DD), location,
   description, and optionally: endDate, time, url, category.
───────────────────────────────────────────────────────────────── */
interface Event {
  id: string;
  title: string;
  date: string;       // YYYY-MM-DD
  endDate?: string;   // YYYY-MM-DD (for multi-day events)
  time?: string;      // e.g. "10:00 AM – 2:00 PM"
  location: string;
  description: string;
  category: 'community' | 'real-estate' | 'festival' | 'family' | 'other';
  url?: string;       // external event link (optional)
}

const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Tucson Home Buyer Workshop',
    date: '2026-05-24',
    time: '10:00 AM – 12:00 PM',
    location: 'Nina Flores Realty Office — Tucson, AZ',
    description: 'A free workshop covering the home buying process, financing options, and what to expect as a first-time buyer in the Tucson market.',
    category: 'real-estate',
    url: '/contact',
  },
  {
    id: '2',
    title: 'Fourth Avenue Street Fair',
    date: '2026-06-07',
    endDate: '2026-06-09',
    time: 'All Day',
    location: '4th Avenue, Tucson, AZ',
    description: 'One of Tucson\'s most beloved street fairs returns with hundreds of local vendors, live music, food, and arts and crafts.',
    category: 'festival',
  },
  {
    id: '3',
    title: 'Sellers Seminar: Price It Right',
    date: '2026-06-14',
    time: '11:00 AM – 1:00 PM',
    location: 'Omni Homes International — Tucson, AZ',
    description: 'Learn how professional agents price homes, what your home is worth in today\'s market, and how to get top dollar when selling.',
    category: 'real-estate',
    url: '/contact',
  },
  {
    id: '4',
    title: 'Marana Community Market',
    date: '2026-06-21',
    time: '8:00 AM – 1:00 PM',
    location: 'Marana Heritage River Park, Marana, AZ',
    description: 'Fresh produce, local artisans, food trucks, and family activities at the Marana Heritage River Park.',
    category: 'community',
  },
  {
    id: '5',
    title: 'Open House — Dove Mountain',
    date: '2026-07-12',
    time: '1:00 PM – 4:00 PM',
    location: 'Address provided upon registration',
    description: 'Join Nina for an open house in the beautiful Dove Mountain community. Refreshments provided.',
    category: 'real-estate',
    url: '/contact',
  },
  {
    id: '6',
    title: 'Tucson Meet Yourself Festival',
    date: '2026-10-10',
    endDate: '2026-10-12',
    time: 'All Day',
    location: 'Armory Park, Tucson, AZ',
    description: 'Tucson\'s premier multicultural festival celebrating food, folk arts, music, and dance from around the world.',
    category: 'festival',
  },
  // ── PAST EVENTS (keep for archive) ──
  {
    id: 'p1',
    title: 'Spring Home Buyer Info Night',
    date: '2026-03-15',
    time: '6:00 PM – 8:00 PM',
    location: 'Nina Flores Realty Office — Tucson, AZ',
    description: 'An overview of the spring market and tips for buyers entering the Tucson real estate market.',
    category: 'real-estate',
  },
  {
    id: 'p2',
    title: 'Tucson Gem & Mineral Show',
    date: '2026-02-08',
    endDate: '2026-02-16',
    time: 'All Day',
    location: 'Tucson Convention Center, Tucson, AZ',
    description: 'The world\'s largest gem, mineral, and fossil show, drawing collectors and visitors from around the globe.',
    category: 'festival',
  },
];

const CATEGORY_COLORS: Record<Event['category'], { bg: string; text: string; label: string }> = {
  'real-estate':  { bg: '#f3e6e8', text: '#6B1A2A', label: 'Real Estate' },
  'community':    { bg: '#e8f0e6', text: '#2a5c24', label: 'Community' },
  'festival':     { bg: '#fdf3e0', text: '#7a5c00', label: 'Festival' },
  'family':       { bg: '#e8eef8', text: '#1a3a6b', label: 'Family' },
  'other':        { bg: '#f0f0f0', text: '#444',    label: 'Event' },
};

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_NAMES   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function formatDateDisplay(dateStr: string) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

function isUpcoming(event: Event) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(event.date + 'T00:00:00');
  return eventDate >= today;
}

function EventCard({ event }: { event: Event }) {
  const cat = CATEGORY_COLORS[event.category];
  const [y, m, d] = event.date.split('-').map(Number);
  return (
    <div
      className="bg-white rounded-sm border overflow-hidden flex flex-col hover:shadow-md transition-shadow"
      style={{ borderColor: 'var(--color-cream-dark)' }}
    >
      {/* Date banner */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: 'var(--color-maroon)' }}
      >
        <div className="text-center leading-none">
          <p className="text-2xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{String(d).padStart(2,'0')}</p>
          <p className="text-xs uppercase tracking-widest text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
            {MONTH_NAMES[m - 1].slice(0, 3)} {y}
          </p>
        </div>
        <div className="w-px h-10 bg-white/20 mx-1" />
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm truncate" style={{ fontFamily: 'var(--font-body)' }}>{event.title}</p>
          {event.time && (
            <p className="text-white/65 text-xs mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
              <Clock size={10} className="inline mr-1" />{event.time}
            </p>
          )}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col gap-3">
        {/* Category badge */}
        <span
          className="self-start text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ background: cat.bg, color: cat.text, fontFamily: 'var(--font-body)' }}
        >
          {cat.label}
        </span>

        {/* Location */}
        <p className="text-xs flex items-start gap-1.5" style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)', opacity: 0.7 }}>
          <MapPin size={12} className="shrink-0 mt-0.5" />{event.location}
        </p>

        {/* Description */}
        <p className="text-sm flex-1" style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
          {event.description}
        </p>

        {/* CTA */}
        {event.url && (
          <Link
            href={event.url}
            className="self-start text-xs font-bold px-3 py-1.5 rounded-sm mt-auto transition-opacity hover:opacity-80"
            style={{ background: 'var(--color-maroon)', color: '#fff', fontFamily: 'var(--font-body)' }}
          >
            Learn More →
          </Link>
        )}
      </div>
    </div>
  );
}

function CalendarView({ events }: { events: Event[] }) {
  const today = new Date();
  const [year, setYear]   = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); // 0-indexed

  const firstDay   = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const [selected, setSelected] = useState<number | null>(null);

  const eventsByDay = new Map<number, Event[]>();
  events.forEach(evt => {
    const [ey, em, ed] = evt.date.split('-').map(Number);
    if (ey === year && em - 1 === month) {
      const arr = eventsByDay.get(ed) ?? [];
      arr.push(evt);
      eventsByDay.set(ed, arr);
    }
  });

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
    setSelected(null);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
    setSelected(null);
  };

  const selectedEvents = selected ? (eventsByDay.get(selected) ?? []) : [];

  return (
    <div>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 hover:opacity-70 transition-opacity" aria-label="Previous month">
          <ChevronLeft size={20} style={{ color: 'var(--color-maroon)' }} />
        </button>
        <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
          {MONTH_NAMES[month]} {year}
        </h3>
        <button onClick={nextMonth} className="p-2 hover:opacity-70 transition-opacity" aria-label="Next month">
          <ChevronRight size={20} style={{ color: 'var(--color-maroon)' }} />
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_NAMES.map(d => (
          <div key={d} className="text-center text-xs font-bold py-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)', opacity: 0.5 }}>
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-sm overflow-hidden">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="bg-white h-12" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const hasEvents = eventsByDay.has(day);
          const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
          const isSelected = selected === day;
          return (
            <button
              key={day}
              onClick={() => setSelected(isSelected ? null : day)}
              className="relative bg-white h-12 flex flex-col items-center justify-center transition-colors hover:bg-cream"
              style={{ background: isSelected ? 'var(--color-maroon)' : isToday ? 'var(--color-cream)' : '#fff' }}
            >
              <span
                className="text-sm font-bold"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: isSelected ? '#fff' : isToday ? 'var(--color-maroon)' : 'var(--color-charcoal)',
                }}
              >
                {day}
              </span>
              {hasEvents && (
                <span
                  className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: isSelected ? 'rgba(255,255,255,0.8)' : 'var(--color-gold)' }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected day events */}
      {selected && (
        <div className="mt-4">
          <h4 className="font-bold mb-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}>
            Events on {MONTH_NAMES[month]} {selected}:
          </h4>
          {selectedEvents.length === 0 ? (
            <p className="text-sm opacity-50" style={{ fontFamily: 'var(--font-body)' }}>No events on this date.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {selectedEvents.map(evt => <EventCard key={evt.id} event={evt} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  const [view, setView] = useState<'list' | 'calendar'>('list');

  const upcoming = EVENTS.filter(isUpcoming).sort((a, b) => a.date.localeCompare(b.date));
  const past     = EVENTS.filter(e => !isUpcoming(e)).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      {/* Header */}
      <div className="py-16 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(201,168,76,0.8)', fontFamily: 'var(--font-body)' }}>
          Southern Arizona
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Community Events
        </h1>
        <p className="opacity-75 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
          Workshops, open houses, festivals, and local happenings across Tucson and Southern Arizona.
        </p>
      </div>

      <section className="py-12 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-5xl mx-auto">

          {/* View toggle */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => setView('list')}
              className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold transition-colors"
              style={{
                background: view === 'list' ? 'var(--color-maroon)' : 'transparent',
                color: view === 'list' ? '#fff' : 'var(--color-charcoal)',
                border: '1px solid var(--color-maroon)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <List size={15} /> List
            </button>
            <button
              onClick={() => setView('calendar')}
              className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold transition-colors"
              style={{
                background: view === 'calendar' ? 'var(--color-maroon)' : 'transparent',
                color: view === 'calendar' ? '#fff' : 'var(--color-charcoal)',
                border: '1px solid var(--color-maroon)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <Calendar size={15} /> Calendar
            </button>
          </div>

          {/* ── LIST VIEW ── */}
          {view === 'list' && (
            <>
              {upcoming.length > 0 ? (
                <>
                  <h2 className="text-2xl font-black mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
                    Upcoming Events
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                    {upcoming.map(evt => <EventCard key={evt.id} event={evt} />)}
                  </div>
                </>
              ) : (
                <p className="text-center py-12 opacity-50" style={{ fontFamily: 'var(--font-body)' }}>
                  No upcoming events scheduled. Check back soon!
                </p>
              )}

              {/* Past events */}
              {past.length > 0 && (
                <>
                  <hr style={{ borderColor: 'var(--color-cream-dark)' }} className="mb-10" />
                  <h2 className="text-xl font-black mb-5 opacity-60" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
                    Past Events
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 opacity-70">
                    {past.map(evt => <EventCard key={evt.id} event={evt} />)}
                  </div>
                </>
              )}
            </>
          )}

          {/* ── CALENDAR VIEW ── */}
          {view === 'calendar' && (
            <div className="max-w-2xl mx-auto">
              <CalendarView events={EVENTS} />
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center" style={{ background: 'var(--color-maroon)' }}>
        <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          Have an event to share?
        </h2>
        <p className="opacity-75 mb-6 max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-cream)' }}>
          If you know of a community event that belongs here, reach out and let us know.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-sm font-bold text-base transition-opacity hover:opacity-90"
          style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
        >
          Suggest an Event
        </Link>
      </section>
    </>
  );
}
