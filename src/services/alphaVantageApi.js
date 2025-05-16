import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';
console.log('API_KEY:', API_KEY); 

export const fetchStockData = async (symbol) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: { // Corrected from "paracms" to "params"
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