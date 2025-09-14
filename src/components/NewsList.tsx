import { type Article } from '../types/news';

type NewsListProps = {
    articles: Article[];
};

const NewsList = ({ articles }: NewsListProps) => {
    return (
        <ul className="w-2xl m-auto">
            {articles.map((article: Article) => (
                <li key={article.id} className="m-4 p-3 border-2 border-amber-600 rounded-md">
                    {article.title}
                </li>
            ))}
        </ul>
    );
};

export default NewsList;
