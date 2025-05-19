"use client";
import { fetchGeneralStockNews } from '../../services/alphaVantageApi';
import { useState, useEffect } from 'react';

export default function StockNews() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setError(null);
                const generalNews = await fetchGeneralStockNews();
                setNews(generalNews);
            } catch (err) {
                setError('Failed to fetch stock news. Check the console for details.');
                console.error(err);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-forest-green mb-6">Stock News</h1>
            {error && <p className="text-red-500">{error}</p>}
            {news.length > 0 ? (
                <div className="w-full max-w-4xl">
                    <ul className="space-y-4">
                        {news.map((article, index) => (
                            <li
                                key={index}
                                className="bg-forest-green text-black p-4 rounded-lg shadow-md"
                            >
                                <h3 className="text-lg font-bold">{article.title}</h3>
                                <p className="text-sm">{article.summary}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Read more
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading news...</p>
            )}
        </div>
    );
}