import { useEffect, useState } from 'react';
import './App.css';
import useNewsStore from './store/newsStore';
import { type Article } from './types/news';
import useMoodAnalysis from './hooks/useMoodAnalysis';
import NewsList from './components/NewsList';
import UserMoodAnalyzer from './components/UserMoodAnalyzer';

function App() {
    const { articles, loading, error, fetchArticles } = useNewsStore();
    useEffect(() => {
        fetchArticles();
    }, []);
    const completeArticle = articles
        .map((article: Article) => article.title + ' ' + article.description)
        .join(' ')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const { mood } = useMoodAnalysis(completeArticle);

    return (
        <>
            {loading ? (
                <div>Loading data, please wait...</div>
            ) : error ? (
                <div>Error while fetching data: {error}</div>
            ) : (
                <>
                    <h1 className="text-3xl">Daily News Aggregator</h1>
                    <hr className="m-8" />
                    <h2 className="text-2xl capitalize m-8">Today's news is {mood}</h2>
                    <NewsList articles={articles} />
                    <UserMoodAnalyzer />
                </>
            )}
        </>
    );
}

export default App;
