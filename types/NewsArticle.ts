export interface NewsArticle {
  title: string;
  url: string;
  description?: string | null; // Optional field for the article description
  source: { id: string | null; name: string }; // Source of the news article
  publishedAt: string; // ISO string for the publication date
}
