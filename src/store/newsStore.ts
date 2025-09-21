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

const useNewsStore = create<NewsState>((set, get) => ({
    articles: [],
    page: 1,
    totalPosts: 0,
    loading: false,
    error: null,
    fetchArticles: async () => {
        const { page } = get();
        set({ loading: true, error: null });
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        const data = await response.json();
        const totalCount = response.headers.get('X-Total-Count');
        set({ articles: data, loading: false, totalPosts: Number(totalCount) });
    },
    prevPage: () => set((state) => ({ page: state.page - 1 })),
    nextPage: () => set((state) => ({ page: state.page + 1 })),
}));

export default useNewsStore;
