import Link from 'next/link';
import type { Post } from '@/lib/types';
import { formatDate } from '@/lib/format';

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white/50 p-5 shadow-sm transition hover:border-accent/40 hover:shadow-md">
      <div className="mb-3 flex items-center gap-2">
        {post.category ? (
          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-accent">
            {post.category.name}
          </span>
        ) : null}
        <time className="text-xs text-charcoal/55" dateTime={post.publishedDate}>
          {formatDate(post.publishedDate)}
        </time>
      </div>
      <h3 className="font-sans text-lg font-semibold leading-snug text-charcoal group-hover:text-accent">
        <Link href={`/blog/${post.slug}`} className="stretched-link">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 font-serif text-[0.95rem] leading-relaxed text-charcoal/75">
        {post.excerpt}
      </p>
    </article>
  );
}
