import Image from 'next/image';

export default function OmniBanner() {
  return (
    <div
      className="w-full flex items-center justify-center gap-3 py-1.5 px-4"
      style={{ background: 'var(--color-cream)', borderBottom: '1px solid var(--color-cream-dark)' }}
    >
      <Image
        src="/omni-logo.svg"
        alt="Omni Homes International"
        width={100}
        height={32}
        className="object-contain"
        priority
      />
      <span
        className="text-xs tracking-wide opacity-60 hidden sm:inline"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-charcoal)' }}
      >
        Sales Agent of Omni Homes International · License SA712911000
      </span>
    </div>
  );
}
