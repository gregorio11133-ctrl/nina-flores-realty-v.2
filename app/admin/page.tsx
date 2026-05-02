export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>
        Welcome, Nina
      </h1>
      <p className="text-sm opacity-60 mb-8">Manage your leads, listings, testimonials, and blog posts.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Leads', href: '/admin/leads', desc: 'View and follow up on contact form submissions' },
          { label: 'Testimonials', href: '/admin/testimonials', desc: 'Add and manage client testimonials' },
          { label: 'Featured Listings', href: '/admin/listings', desc: 'Manage manually-curated listing cards' },
          { label: 'Blog Posts', href: '/admin/blog', desc: 'Write and publish bilingual blog content' },
        ].map(c => (
          <a key={c.href} href={c.href} className="block p-5 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold mb-1" style={{ color: 'var(--color-maroon)' }}>{c.label}</p>
            <p className="text-xs opacity-60">{c.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
