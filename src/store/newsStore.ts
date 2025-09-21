import { create } from 'zustand';
import { type Article } from '../types/news';

interface NewsState {
    articles: Article[];
    page: number;
    totalPosts: number;
    loading: boolean;
    error: string | null;
    fetchArticles: () => Promise<void>;
    prevPage: () => void;
    nextPage: () => void;
}

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const useNewsStore = create<NewsState>((set, get) => ({
    articles: [],
    page: 1,
    totalPosts: 0,
    loading: false,
    error: null,
    fetchArticles: async () => {
        const { page } = get();
        set({ loading: true, error: null });
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=10&page=${page}`
        );
        const data = await response.json();
        console.log(data);
        const totalCount = data.totalResults;
        set({ articles: data.articles, loading: false, totalPosts: Number(totalCount) });
    },
    prevPage: () => set((state) => ({ page: state.page - 1 })),
    nextPage: () => set((state) => ({ page: state.page + 1 })),
}));

export default useNewsStore;
