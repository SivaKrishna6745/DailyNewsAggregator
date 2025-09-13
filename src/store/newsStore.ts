import { create } from 'zustand';
import { type News } from '../types/news';

const mockArticles = [
    {
        id: 1,
        title: 'Study finds coffee may boost productivity',
        description:
            'Researchers have found a link between moderate coffee consumption and increased focus and productivity in office workers.',
        source: {
            name: 'Science Today',
        },
        url: 'https://example.com/study-coffee-productivity',
        urlToImage: 'https://example.com/images/coffee.jpg',
    },
    {
        id: 2,
        title: 'New electric vehicle from local startup hits the market',
        description:
            'A local startup has unveiled its first production electric vehicle, featuring an extended battery range and a sleek, minimalist design.',
        source: {
            name: 'Tech Insider',
        },
        url: 'https://example.com/new-ev-startup',
        urlToImage: 'https://example.com/images/electric-car.jpg',
    },
    {
        id: 3,
        title: 'World leaders meet to discuss climate change summit goals',
        description:
            'Delegates from over 100 countries have convened in Geneva to negotiate new targets for the upcoming global climate summit.',
        source: {
            name: 'Global News Hub',
        },
        url: 'https://example.com/climate-summit-meeting',
        urlToImage: 'https://example.com/images/world-leaders.jpg',
    },
    {
        id: 4,
        title: 'Seasonal allergies expected to be severe this spring',
        description:
            'Health officials are warning that a combination of factors could lead to a particularly challenging allergy season for millions of people.',
        source: {
            name: 'Health Journal',
        },
        url: 'https://example.com/severe-allergies-spring',
        urlToImage: 'https://example.com/images/allergies.jpg',
    },
];

const useNewsStore = create<News>((set) => ({
    articles: [],
    loading: false,
    error: null,
    fetchArticles: async () => {
        set({ loading: true, error: null });
        setTimeout(() => {
            set({ articles: mockArticles, loading: false });
        }, 750);
    },
}));

export default useNewsStore;
