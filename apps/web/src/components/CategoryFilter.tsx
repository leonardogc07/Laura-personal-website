import Link from 'next/link';
import type { Category } from '@/lib/types';

export function CategoryFilter({
  categories,
  activeSlug,
}: {
  categories: Category[];
  activeSlug?: string;
}) {
  const base =
    'rounded-full px-3.5 py-1.5 text-sm font-medium transition border';
  const idle = `${base} border-charcoal/15 text-charcoal/70 hover:border-accent/40 hover:text-accent`;
  const active = `${base} border-accent bg-accent text-white`;

  return (
    <div className="flex flex-wrap gap-2" role="navigation" aria-label="Filter by category">
      <Link href="/blog" className={!activeSlug ? active : idle}>
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.documentId}
          href={`/blog?category=${category.slug}`}
          className={activeSlug === category.slug ? active : idle}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
