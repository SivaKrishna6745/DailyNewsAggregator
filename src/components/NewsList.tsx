import useNewsStore from '../store/newsStore';
import { type Article } from '../types/news';
import NewsListItem from './NewsListItem';

type NewsListProps = {
    articles: Article[];
    prev: () => void;
    next: () => void;
};

const NewsList = ({ articles, prev, next }: NewsListProps) => {
    const { page, totalPosts } = useNewsStore();
    const lastPage = Math.ceil(totalPosts / 10);

    return (
        <div className="flex flex-col gap-8">
            <ul className="md:w-3xl m-auto h-[50vh] overflow-y-scroll">
                {articles.map((article: Article) => (
                    <NewsListItem key={article.id} article={article} />
                ))}
            </ul>
            <div className="flex justify-center items-center gap-8">
                <button className="btn bg-blue-400 px-4 py-2" onClick={prev} disabled={page === 1}>
                    Prev
                </button>
                <button className="btn bg-blue-400 px-4 py-2" onClick={next} disabled={page === lastPage}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default NewsList;
