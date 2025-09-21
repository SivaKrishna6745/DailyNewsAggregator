export type Article = {
    author: string;
    content: string;
    title: string;
    description: string;
    source: {
        id: number;
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
