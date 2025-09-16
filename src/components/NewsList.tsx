import { type Article } from '../types/news';
import NewsListItem from './NewsListItem';

type NewsListProps = {
    articles: Article[];
};

const NewsList = ({ articles }: NewsListProps) => {
    return (
        <ul className="w-3xl m-auto">
            {articles.map((article: Article) => (
                <NewsListItem article={article} />
            ))}
        </ul>
    );
};

export default NewsList;
