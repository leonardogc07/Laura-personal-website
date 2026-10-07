import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-charcoal/10 bg-cream/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="font-sans text-lg font-semibold tracking-tight text-charcoal">
          Laura
          <span className="ml-2 text-sm font-normal text-charcoal/60">notes on a gentle life</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-charcoal/80 transition hover:bg-accent/10 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
