export type Article = {
    id: number;
    title: string;
    description: string;
    source: {
        name: string;
    };
    url: string;
    urlToImage: string;
};

export type News = {
    articles: Article[];
    loading: boolean;
    error: string | null;
    fetchArticles: () => Promise<void>;
};

export type MoodKey = 'positive' | 'negative' | 'neutral';

export type MoodMapObject = {
    [key in MoodKey]: {
        color: string;
        emoji: string;
    };
};
