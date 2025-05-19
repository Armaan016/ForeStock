import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center bg-forest-green shadow-lg rounded-lg p-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to ForeStock</h1>
        <p className="text-lg text-gray-200 mb-6">
          Your one-stop platform for stock market insights. Analyze stock data, view trends, and stay updated with the latest market news.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-md hover:bg-secondary hover:text-secondary-foreground transition transform hover:scale-105" href="/stocks-api">
            Stock Data
          </Link>
          <Link className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-md hover:bg-secondary hover:text-secondary-foreground transition transform hover:scale-105" href="/stocks-news">
            Stock News
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center max-w-4xl">
        <h2 className="text-2xl font-semibold text-forest-green mb-4">Why Choose ForeStock?</h2>
        <p className="text-gray-200 mb-6">
          ForeStock provides real-time stock data and news to help you make informed decisions. Whether you&apos;re a seasoned investor or just starting out, we&apos;ve got you covered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-forest-green shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-2">Real-Time Data</h3>
            <p className="text-black">Access up-to-date stock prices and trends to stay ahead in the market.</p>
          </div>
          <div className="bg-forest-green shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-2">Market News</h3>
            <p className="text-black">Stay informed with the latest news and insights about the stock market.</p>
          </div>
          <div className="bg-forest-green shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-2">User-Friendly Interface</h3>
            <p className="text-black">Navigate easily through our platform and find the information you need.</p>
          </div>
        </div>
      </div>
    </div>
  );
}