import { useEffect, useState } from 'react';
import './App.css';
import useNewsStore from './store/newsStore';
import { type Article } from './types/news';
import useMoodAnalysis from './hooks/useMoodAnalysis';

function App() {
    const { articles, loading, error, fetchArticles } = useNewsStore();
    const [typedInput, setTypedInput] = useState<string>('');
    const [userInput, setUserInput] = useState<string>('');
    useEffect(() => {
        fetchArticles();
    }, []);
    const completeArticles = articles.map((article: Article) => article.title + ' ' + article.description);
    const completeArticle = completeArticles.join(' ').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const { mood } = useMoodAnalysis(userInput || completeArticle);
    const handleAnalysis = () => {
        setUserInput(typedInput);
    };

    if (loading) return <div>Loading data, please wait...</div>;
    if (error) return <div>Error while fetching data: {error}</div>;

    return (
        <>
            <h1 className="text-3xl">Daily News Aggregator</h1>
            <hr className="m-8" />
            <div className="flex justify-center items-center gap-8">
                <textarea
                    rows={3}
                    cols={30}
                    placeholder="Enter keyword..."
                    className="border-2 border-green-300 rounded-md px-4 py-2 outline-none"
                    value={typedInput}
                    onChange={(e) => setTypedInput(e.target.value)}
                />
                <button
                    onClick={handleAnalysis}
                    className="outline-none p-3 bg-slate-600 text-white text-lg rounded-md cursor-pointer"
                >
                    Analyze
                </button>
            </div>
            <h2 className="text-2xl capitalize m-8">Today's news is {mood}</h2>
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
