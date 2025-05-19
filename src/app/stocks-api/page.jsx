"use client";
import { fetchStockData } from '../../services/alphaVantageApi';
import { useState } from 'react';
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

export default function StockData() {
    const [symbol, setSymbol] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchData = async () => {
        try {
            setError(null);
            const stockData = await fetchStockData(symbol);
            setData(stockData);
        } catch (err) {
            setError('Failed to fetch stock data. Check the console for details.');
            console.error(err);
        }
    };

    const chartData =
        data && data['Time Series (Daily)']
            ? {
                labels: Object.keys(data['Time Series (Daily)']).reverse(),
                datasets: [
                    {
                        label: 'Closing Price',
                        data: Object.values(data['Time Series (Daily)'])
                            .map((day) => parseFloat(day['4. close']))
                            .reverse(),
                        borderColor: 'rgba(34, 139, 34, 1)',
                        backgroundColor: 'rgba(34, 139, 34, 0.2)',
                        tension: 0.2,
                    },
                ],
            }
            : null;

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-forest-green mb-6">Stock Data</h1>
            <div className="w-full max-w-lg">
                <input
                    type="text"
                    placeholder="Enter stock symbol (e.g., AAPL)"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    className="w-full p-3 rounded-lg border border-forest-green bg-black text-forest-green placeholder-forest-green mb-4"
                />
                <button
                    onClick={handleFetchData}
                    className="w-full bg-forest-green text-black py-3 rounded-lg hover:bg-black hover:text-forest-green transition"
                >
                    Fetch Stock Data
                </button>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {chartData && (
                <div
                    className="mt-8 w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg"
                    style={{ animation: 'fadeIn 1s ease-in-out' }}
                >
                    <Line data={chartData} />
                </div>
            )}
        </div>
    );
}