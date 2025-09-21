import { useEffect } from 'react';
import './App.css';
import useNewsStore from './store/newsStore';
import { type Article } from './types/news';
import useMoodAnalysis from './hooks/useMoodAnalysis';
import NewsList from './components/NewsList';
import UserMoodAnalyzer from './components/UserMoodAnalyzer';
import { moodMap } from './constants/constants';

function App() {
    const { articles, loading, error, fetchArticles } = useNewsStore();
    useEffect(() => {
        fetchArticles();
    }, []);
    const completeArticle = articles
        .map((article: Article) => article.title + ' ' + article.body)
        .join(' ')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const { mood } = useMoodAnalysis(completeArticle);

    return (
        <div className="rounded-lg bg-gray-900">
            {loading ? (
                <div>Loading data, please wait...</div>
            ) : error ? (
                <div>Error while fetching data: {error}</div>
            ) : (
                <div className="flex flex-col gap-4 md:flex-row justify-between">
                    <div>
                        <UserMoodAnalyzer />
                    </div>
                    <div className="w-full h-px md:w-0.5 md:h-[90dvh] bg-gray-600"></div>
                    <div className="md:p-8">
                        <h1 className="text-3xl">Daily News Aggregator</h1>
                        <hr className="m-8" />
                        <h2 className="text-2xl capitalize m-8" style={{ color: moodMap[mood].color }}>
                            Today's news is {mood} {moodMap[mood].emoji}
                        </h2>
                        <NewsList articles={articles} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
