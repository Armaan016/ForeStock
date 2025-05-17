import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStockData = async (symbol) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: 'TIME_SERIES_DAILY',
                symbol: symbol,
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
};

export const fetchStockQuote = async (symbol) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: 'GLOBAL_QUOTE',
                symbol: symbol,
                apikey: API_KEY,
            },
        });
        return response.data['Global Quote'];
    } catch (error) {
        console.error('Error fetching stock quote:', error);
        throw error;
    }
};

export const fetchStockNews = async (symbol) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: 'NEWS_SENTIMENT',
                tickers: symbol,
                apikey: API_KEY,
            },
        });
        return response.data.feed; 
    } catch (error) {
        console.error('Error fetching stock news:', error);
        throw error;
    }
};

export const fetchGeneralStockNews = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: 'NEWS_SENTIMENT',
                apikey: API_KEY,
            },
        });
        return response.data.feed; // The "feed" key contains the news articles
    } catch (error) {
        console.error('Error fetching general stock news:', error);
        throw error;
    }
};