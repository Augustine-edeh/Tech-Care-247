import axios from "axios";
import { NewsArticle } from "../../types/NewsArticle";

// Update the function to accept page and pageSize as parameters
export const fetchNews = async (
  page: number,
  pageSize: number
): Promise<{ articles: NewsArticle[]; totalResults: number }> => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        language: "en",
        category: "health",
        pageSize,
        page,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });

    // Return the articles and totalResults
    return {
      articles: response.data.articles,
      totalResults: response.data.totalResults,
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Failed to fetch news");
  }
};
