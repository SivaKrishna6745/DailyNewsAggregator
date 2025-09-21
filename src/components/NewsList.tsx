import { type Article } from '../types/news';
import NewsListItem from './NewsListItem';

type NewsListProps = {
    articles: Article[];
};

const NewsList = ({ articles }: NewsListProps) => {
    return (
        <ul className="md:w-3xl m-auto h-[60vh] overflow-y-scroll">
            {articles.map((article: Article) => (
                <NewsListItem key={article.id} article={article} />
            ))}
        </ul>
    );
};

export default NewsList;
