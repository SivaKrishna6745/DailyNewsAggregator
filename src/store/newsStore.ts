import { create } from 'zustand';
import { type News } from '../types/news';

const useNewsStore = create<News>((set) => ({
    articles: [],
    loading: false,
    error: null,
    fetchArticles: async () => {
        set({ loading: true, error: null });
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await response.json();
        console.log(data);
        set({ articles: data, loading: false });
    },
}));

export default useNewsStore;
