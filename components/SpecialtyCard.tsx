import { type LucideIcon } from 'lucide-react';

interface SpecialtyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SpecialtyCard({ icon: Icon, title, description }: SpecialtyCardProps) {
  return (
    <div
      className="rounded-sm p-6 flex flex-col gap-3 transition-shadow hover:shadow-md"
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
    </div>
  );
}
