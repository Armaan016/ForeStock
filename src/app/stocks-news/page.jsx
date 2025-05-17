"use client";
import { fetchGeneralStockNews } from '../../services/alphaVantageApi';
import { useState, useEffect } from 'react';

export default function StockNews() {
    const [news, setNews] = useState([]); // News articles
    const [error, setError] = useState(null); // Error message

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setError(null);
                const generalNews = await fetchGeneralStockNews(); // Fetch general stock news
                setNews(generalNews);
            } catch (err) {
                setError('Failed to fetch stock news. Check the console for details.');
                console.error(err);
            }
        };

        fetchNews();
    }, []); // Fetch news when the component mounts

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', color: '#333', minHeight: '100vh' }}>
            <h1>Stock News</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {news.length > 0 ? (
                <div style={{ marginTop: '20px' }}>
                    <h2>Latest News</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {news.map((article, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: '20px',
                                    padding: '10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <h3>{article.title}</h3>
                                <p>{article.summary}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
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