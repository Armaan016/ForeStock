"use client";
import { fetchStockData, fetchStockQuote } from '../../services/alphaVantageApi';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TestAPI() {
    const [symbol, setSymbol] = useState(''); // Stock symbol
    const [data, setData] = useState(null); // API response data
    const [error, setError] = useState(null); // Error message
    const [isClient, setIsClient] = useState(false); // Track if the component is mounted on the client

    useEffect(() => {
        setIsClient(true); // Set to true when the component is mounted on the client
    }, []);

    const handleFetchData = async () => {
        try {
            setError(null);
            const stockData = await fetchStockData(symbol); // Fetch stock data
            setData(stockData);
        } catch (err) {
            setError('Failed to fetch stock data. Check the console for details.');
            console.error(err);
        }
    };

    const handleFetchQuote = async () => {
        try {
            setError(null);
            const stockQuote = await fetchStockQuote(symbol); // Fetch stock quote
            setData(stockQuote);
        } catch (err) {
            setError('Failed to fetch stock quote. Check the console for details.');
            console.error(err);
        }
    };

    // Prepare data for the chart
    const chartData =
        data && data['Time Series (Daily)']
            ? {
                labels: Object.keys(data['Time Series (Daily)']).reverse(), // Dates (x-axis)
                datasets: [
                    {
                        label: 'Closing Price',
                        data: Object.values(data['Time Series (Daily)'])
                            .map((day) => parseFloat(day['4. close']))
                            .reverse(), // Closing prices (y-axis)
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.2,
                    },
                ],
            }
            : null;

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', color: '#333', minHeight: '100vh' }}>
            <h1>Test Alpha Vantage API</h1>
            <input
                type="text"
                placeholder="Enter stock symbol (e.g., AAPL)"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                style={{
                    marginRight: '10px',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />
            <button
                onClick={handleFetchData}
                style={{
                    marginRight: '10px',
                    padding: '5px 10px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Fetch Stock Data
            </button>
            <button
                onClick={handleFetchQuote}
                style={{
                    padding: '5px 10px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Fetch Stock Quote
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <div>
                    <pre
                        style={{
                            marginTop: '20px',
                            background: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '4px',
                            overflowX: 'auto',
                        }}
                    >
                        {JSON.stringify(data, null, 2)}
                    </pre>
                    {isClient && chartData && (
                        <div style={{ marginTop: '20px' }}>
                            <h2>Stock Price Chart</h2>
                            <Line data={chartData} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}