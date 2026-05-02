import { ExternalLink } from 'lucide-react';

interface CincLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export default function CincLink({ href, children, className = '', title = 'Opens property search', style }: CincLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`inline-flex items-center gap-1.5 ${className}`}
      style={style}
    >
      {children}
      <ExternalLink size={14} aria-hidden="true" />
    </a>
  );
}
