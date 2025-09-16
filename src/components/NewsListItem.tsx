import useMoodAnalysis from '../hooks/useMoodAnalysis';
import type { Article } from '../types/news';
import { moodMap } from '../constants/constants';

type NewsListItemProps = {
    article: Article;
};

const NewsListItem = ({ article }: NewsListItemProps) => {
    const cleanArticle = (article.title + ' ' + article.description).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '');
    const { mood } = useMoodAnalysis(cleanArticle);
    return (
        <li
            key={article.id}
            className="m-2 p-3 bg-gray-800 rounded-lg flex justify-between text-xl"
            style={{ color: moodMap[mood].color }}
        >
            <span>{article.title}</span>
            <span className="capitalize">{moodMap[mood].emoji}</span>
        </li>
    );
};

export default NewsListItem;
