import { create } from "zustand";
import { fetchNews } from "@/services/newsService";
import { NewsArticle } from "../../types/NewsArticle";

interface NewsState {
  news: NewsArticle[];
  totalResults: number;
  isLoading: boolean;
  error: string | null;
  fetchNewsData: (page: number, pageSize: number) => Promise<void>;
}

export const useNewsStore = create<NewsState>((set) => ({
  news: [],
  totalResults: 0,
  isLoading: false,
  error: null,
  fetchNewsData: async (page: number, pageSize: number) => {
    set({ isLoading: true });
    try {
      const { articles, totalResults } = await fetchNews(page, pageSize);
      set((state) => ({
        news: page === 1 ? articles : [...state.news, ...articles],
        totalResults, // Directly update totalResults
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
}));
