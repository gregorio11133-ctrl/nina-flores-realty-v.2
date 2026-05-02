import Link from 'next/link';

interface LogoProps {
  locale: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ locale, className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#6B1A2A';
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.85)' : '#2C2C2C';

  return (
    <Link href={`/${locale === 'en' ? '' : locale}`} className={`flex items-center gap-3 no-underline ${className}`}>
      {/* House icon SVG */}
      <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M19 2L2 15V34H14V24H24V34H36V15L19 2Z" stroke={textColor} strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        <path d="M19 2L2 15" stroke={textColor} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M19 2L36 15" stroke={textColor} strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="15" y="24" width="8" height="10" stroke={textColor} strokeWidth="2" fill="none"/>
      </svg>

      {/* Text mark */}
      <div className="flex flex-col leading-none">
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '1.1rem', color: textColor, lineHeight: 1 }}>
          Nina
        </span>
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: '1.15rem', letterSpacing: '0.08em', color: textColor, lineHeight: 1.1 }}>
          FLORES
        </span>
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', color: subColor, textTransform: 'uppercase', lineHeight: 1.4 }}>
          REALTOR®
        </span>
      </div>
    </Link>
  );
}
