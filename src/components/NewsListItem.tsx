import useMoodAnalysis from '../hooks/useMoodAnalysis';
import type { Article } from '../types/news';
import { moodMap } from '../constants/constants';

type NewsListItemProps = {
    article: Article;
};

const NewsListItem = ({ article }: NewsListItemProps) => {
    const cleanArticle = (article.title + ' ' + article.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '');
    const { mood } = useMoodAnalysis(cleanArticle);

    return (
        <li
            className="m-2 p-3 bg-gray-800 rounded-lg flex justify-between text-xl"
            style={{ color: moodMap[mood].color }}
        >
            <div className="text-left flex flex-col gap-4 group">
                <p className="group-hover:text-green-500">{article.title}</p>
                <p className="opacity-0 max-h-0 overflow-hidden transition-[opacity,max-height] duration-300 group-hover:opacity-100 group-hover:max-h-screen group-hover:delay-100">
                    {article.body.trim()}
                </p>
            </div>
            <p className="text-2xl">{moodMap[mood].emoji}</p>
        </li>
    );
};

export default NewsListItem;
