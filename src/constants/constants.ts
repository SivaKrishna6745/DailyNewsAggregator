import { type MoodMapObject } from '../types/news';
export const POSITIVES = ['growth', 'success', 'win', 'hope'];

export const NEGATIVES = ['loss', 'crisis', 'down', 'fail'];

export const moodMap: MoodMapObject = {
    positive: {
        color: '#34d399',
        emoji: '😊',
    },
    negative: {
        color: '#ef4444',
        emoji: '😔',
    },
    neutral: {
        color: '#a3a3a3',
        emoji: '😑',
    },
};
