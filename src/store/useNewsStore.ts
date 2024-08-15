import { create } from "zustand";
import { fetchNews } from "@/services/newsService";
import { NewsArticle } from "../../types/NewsArticle";

interface NewsStore {
  news: NewsArticle[];
  totalResults: number;
  isLoading: boolean;
  error: string | null;
  fetchNewsData: () => Promise<void>;
}

export const useNewsStore = create<NewsStore>((set) => ({
  news: [],
  totalResults: 0,
  isLoading: false,
  error: null,

  fetchNewsData: async () => {
    set({ isLoading: true, error: null });
    try {
      const { articles, totalResults } = await fetchNews();
      set({ news: articles, totalResults, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: "Failed to fetch news data. Please try again later.",
      });
      console.error("Failed to fetch news data:", error);
    }
  },
}));
