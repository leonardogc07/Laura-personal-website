export type Category = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string | null;
};

export type Author = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  role?: string | null;
  bio?: string | null;
  email?: string | null;
};

export type Post = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  category?: Category | null;
  author?: Author | null;
};
