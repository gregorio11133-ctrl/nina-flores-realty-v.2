import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  locale: string;
  className?: string;
}

export default function Logo({ locale, className = '' }: LogoProps) {
  const href = locale === 'en' ? '/' : '/es';
  return (
    <Link href={href} className={`flex items-center no-underline ${className}`}>
      <Image
        src="/nina-logo-nav.png"
        alt="Nina Flores REALTOR® Southern Arizona"
        width={5799}
        height={1969}
        priority
        style={{ height: '72px', width: 'auto', display: 'block' }}
      />
    </Link>
  );
}
