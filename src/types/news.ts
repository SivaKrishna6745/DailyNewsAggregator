export type Article = {
    id: number;
    userId: number;
    title: string;
    body: string;
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
