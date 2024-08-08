export interface NewsArticle {
  title: string;
  url: string;
  description?: string; // Optional field for the article description
  source: { id: string; name: string }; // Source of the news article
  publishedAt: string; // ISO string for the publication date
}
