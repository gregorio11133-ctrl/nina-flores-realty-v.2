import '@/app/globals.css';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#f4f4f5', fontFamily: 'var(--font-body)' }}>
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-56 shrink-0 bg-white border-r flex flex-col" style={{ borderColor: '#e4e4e7' }}>
            <div className="p-5 border-b" style={{ borderColor: '#e4e4e7' }}>
              <p className="font-black text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-maroon)' }}>Nina Flores</p>
              <p className="text-xs opacity-50">Admin Panel</p>
            </div>
            <nav className="flex-1 p-3 space-y-1">
              {[
                { href: '/admin', label: 'Dashboard' },
                { href: '/admin/leads', label: 'Leads' },
                { href: '/admin/testimonials', label: 'Testimonials' },
                { href: '/admin/listings', label: 'Listings' },
                { href: '/admin/blog', label: 'Blog Posts' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="block px-3 py-2 rounded text-sm hover:bg-gray-50 transition-colors"
                  style={{ color: 'var(--color-charcoal)' }}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t" style={{ borderColor: '#e4e4e7' }}>
              <Link href="/" className="text-xs opacity-40 hover:opacity-70 transition-opacity">← Back to Site</Link>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
