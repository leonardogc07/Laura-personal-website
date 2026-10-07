import type { Post } from '@/lib/types';
import { PostCard } from './PostCard';

export function PostGrid({ posts }: { posts: Post[] }) {
  if (!posts.length) {
    return (
      <p className="rounded-2xl border border-dashed border-charcoal/20 bg-white/40 px-4 py-10 text-center text-charcoal/60">
        No posts yet. Start Strapi and make sure seed content has loaded, then refresh.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.documentId} post={post} />
      ))}
    </div>
  );
}
