import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

interface SpecialtyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function SpecialtyCard({ icon: Icon, title, description, href }: SpecialtyCardProps) {
  const inner = (
    <div
      className="rounded-sm p-6 flex flex-col gap-3 transition-all hover:shadow-md hover:-translate-y-0.5 h-full"
      style={{ background: 'var(--color-white)', borderTop: '3px solid var(--color-maroon)' }}
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--color-cream)', color: 'var(--color-maroon)' }}>
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed opacity-75" style={{ fontFamily: 'var(--font-body)' }}>
        {description}
      </p>
      {href && (
        <span
          className="text-xs font-bold uppercase tracking-widest mt-auto pt-2 inline-flex items-center gap-1"
          style={{ color: 'var(--color-maroon)', fontFamily: 'var(--font-body)' }}
        >
          Learn More →
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{inner}</Link>;
  }
  return inner;
}
