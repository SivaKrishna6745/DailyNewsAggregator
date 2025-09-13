import { useEffect } from 'react';
import './App.css';
import useNewsStore from './store/newsStore';
import { type Article } from './types/news';

function App() {
    const { articles, loading, error, fetchArticles } = useNewsStore();
    useEffect(() => {
        fetchArticles();
    }, []);

    if (loading) return <div>Loading data, please wait...</div>;
    if (error) return <div>Error while fetching data: {error}</div>;

    return (
        <>
            <h1 className="text-3xl">Daily News Aggregator</h1>
            <hr className="m-8" />
            <ul className="w-2xl m-auto">
                {articles.map((article: Article) => (
                    <li key={article.id} className="m-4 p-3 border-2 border-amber-600 rounded-md">
                        {article.title}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
