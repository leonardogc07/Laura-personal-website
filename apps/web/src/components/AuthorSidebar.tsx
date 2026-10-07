import Link from 'next/link';
import type { Author } from '@/lib/types';

export function AuthorSidebar({ author }: { author: Author }) {
  return (
    <aside className="rounded-2xl border border-charcoal/10 bg-white/60 p-5">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        Author
      </p>
      <h2 className="mt-2 font-sans text-xl font-semibold text-charcoal">{author.name}</h2>
      {author.role ? <p className="mt-1 text-sm text-charcoal/60">{author.role}</p> : null}
      {author.bio ? (
        <p className="mt-3 font-serif text-sm leading-relaxed text-charcoal/80">{author.bio}</p>
      ) : null}
      <Link
        href="/about"
        className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
      >
        More about Laura
      </Link>
    </aside>
  );
}
