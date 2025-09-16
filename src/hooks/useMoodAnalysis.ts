import { useMemo } from 'react';
import { POSITIVES, NEGATIVES } from '../constants/constants';
import { type MoodKey } from '../types/news';

const useMoodAnalysis = (input: string) => {
    const headlineWords = input.toLowerCase().split(' ');
    const cleanHeadlineWords = headlineWords.map((str) => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, ''));
    const { positivesCount, negativesCount } = useMemo(() => {
        let positivesCount = 0;
        let negativesCount = 0;
        POSITIVES.forEach((word: string) => {
            if (cleanHeadlineWords.includes(word)) positivesCount += 1;
        });
        NEGATIVES.forEach((word: string) => {
            if (cleanHeadlineWords.includes(word)) negativesCount += 1;
        });
        return { positivesCount, negativesCount };
    }, [cleanHeadlineWords]);
    const mood: MoodKey =
        positivesCount > negativesCount ? 'positive' : positivesCount === negativesCount ? 'neutral' : 'negative';

    return {
        mood,
    };
};

export default useMoodAnalysis;
