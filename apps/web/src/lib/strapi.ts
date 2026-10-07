import type { Author, Category, Post } from './types';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

type StrapiListResponse<T> = {
  data: T[];
  meta?: unknown;
};

async function strapiFetch<T>(path: string): Promise<T> {
  const url = `${STRAPI_URL}/api${path}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi request failed (${res.status}): ${url}`);
  }

  return res.json() as Promise<T>;
}

export function getStrapiUrl() {
  return STRAPI_URL;
}

export async function getPosts(options?: {
  categorySlug?: string;
  limit?: number;
}): Promise<Post[]> {
  const params = new URLSearchParams();
  params.set('populate[0]', 'category');
  params.set('populate[1]', 'author');
  params.set('sort', 'publishedDate:desc');

  if (options?.limit) {
    params.set('pagination[pageSize]', String(options.limit));
  }

  if (options?.categorySlug) {
    params.set('filters[category][slug][$eq]', options.categorySlug);
  }

  const json = await strapiFetch<StrapiListResponse<Post>>(`/posts?${params}`);
  return json.data ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const params = new URLSearchParams();
  params.set('filters[slug][$eq]', slug);
  params.set('populate[0]', 'category');
  params.set('populate[1]', 'author');

  const json = await strapiFetch<StrapiListResponse<Post>>(`/posts?${params}`);
  return json.data?.[0] ?? null;
}

export async function getCategories(): Promise<Category[]> {
  const params = new URLSearchParams();
  params.set('sort', 'name:asc');
  const json = await strapiFetch<StrapiListResponse<Category>>(`/categories?${params}`);
  return json.data ?? [];
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const params = new URLSearchParams();
  params.set('filters[slug][$eq]', slug);
  const json = await strapiFetch<StrapiListResponse<Author>>(`/authors?${params}`);
  return json.data?.[0] ?? null;
}

export async function getPrimaryAuthor(): Promise<Author | null> {
  const params = new URLSearchParams();
  params.set('pagination[pageSize]', '1');
  const json = await strapiFetch<StrapiListResponse<Author>>(`/authors?${params}`);
  return json.data?.[0] ?? null;
}
