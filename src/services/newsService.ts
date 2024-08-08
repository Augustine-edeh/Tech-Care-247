import axios from "axios";

interface NewsArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export const fetchNews = async (): Promise<NewsArticle[]> => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        language: "en",
        category: "health",
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
