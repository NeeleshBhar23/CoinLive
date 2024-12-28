import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&apiKey=15d0fb95b6664d59b15b2141a3e3f677`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch news!');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading Updates For You!😊</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error} Sorry! Try Again😊</div>;

  return (
    <div className="p-4 bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center">Latest Crypto News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 bg-gray-800 hover:shadow-lg transition-shadow"
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="mt-2 text-sm text-gray-600">
                {article.description}
              </p>
            </a>
            <p className="text-xs mt-2 text-gray-500">
              Published on: {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
