import axios from "axios";
import { useNewsStore } from "@/store/useNewsStore";
import { NewsArticle } from "../../types/NewsArticle";

interface NewsResponse {
  articles: NewsArticle[];
  totalResults: number;
}

export const fetchNews = async (): Promise<NewsResponse> => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        language: "en",
        category: "health",
        pageSize: 10,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });

    return {
      articles: response.data.articles,
      totalResults: response.data.totalResults,
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
