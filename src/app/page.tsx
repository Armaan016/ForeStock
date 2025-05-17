import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center bg-white shadow-md rounded-lg p-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ForeStock</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your one-stop platform for stock market insights. Analyze stock data, view trends, and stay updated with the latest market news.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/test-api">
            {/* <a className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
              Stock Data
            </a> */}
            Stock Data
          </Link>
          <Link href="/stocks-news">
            {/* <a className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
              Stock News
              </a> */}
            Stock News
          </Link>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-12 text-center max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose ForeStock?</h2>
        <p className="text-gray-600 mb-6">
          ForeStock provides real-time stock data and news to help you make informed decisions. Whether you&apos;re a seasoned investor or just starting out, we&apos;ve got you covered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Real-Time Data</h3>
            <p className="text-gray-600">Access up-to-date stock prices and trends to stay ahead in the market.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Market News</h3>
            <p className="text-gray-600">Stay informed with the latest news and insights about the stock market.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">User-Friendly Interface</h3>
            <p className="text-gray-600">Navigate easily through our platform and find the information you need.</p>
          </div>
        </div>
      </div>
    </div>
  );
}