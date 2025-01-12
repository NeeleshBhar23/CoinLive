// import React, { useEffect, useState } from 'react';

// const NewsFeed = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           `https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&apiKey=15d0fb95b6664d59b15b2141a3e3f677`
//         );
//         if (!response.ok) {
//           throw new Error('Failed to fetch news!');
//         }
//         const data = await response.json();
//         setNews(data.articles);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) return <div className="text-center mt-10">Loading Updates For You!😊</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error} Sorry! Try Again😊</div>;

//   return (
//     <div className="p-4 bg-gray-900">
//       <h1 className="text-4xl font-bold mb-6 text-center">Latest Crypto News</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {news.map((article, index) => (
//           <div
//             key={index}
//             className="border rounded-lg shadow-md p-4 bg-gray-800 hover:shadow-lg transition-shadow"
//           >
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={article.urlToImage}
//                 alt={article.title}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h2 className="text-xl font-semibold">{article.title}</h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 {article.description}
//               </p>
//             </a>
//             <p className="text-xs mt-2 text-gray-500">
//               Published on: {new Date(article.publishedAt).toLocaleDateString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsFeed;

import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching the news from Currents API
  const fetchCryptoNews = async () => {
    const apiKey = 'wPCTTp_EVLmeliwUfEHgMAK1XWjZcQrxX2wOEve5GraZ2Gh3'; 
    const url = `https://api.currentsapi.services/v1/search?keywords=cryptocurrency&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Filter out cryptocurrency-related news from the fetched data
      const filteredNews = data.news.filter((article) =>
        article.title.toLowerCase().includes('crypto') ||
        article.title.toLowerCase().includes('bitcoin') ||
        article.description.toLowerCase().includes('crypto')
      );

      setNews(filteredNews);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoNews();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen py-10 ">
  <div className="container mx-auto px-5">
    <h1 className="text-4xl font-bold mb-5 text-center text-gray-100">
      Latest <strong style={{ color: '#5f06ee' }}> Cryptocurrency </strong> News
    </h1>

    {loading ? (
      <p className="text-center text-gray-600">Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center p-5">
              <img
                src={item.image ? item.image : 'https://via.placeholder.com/100'}
                alt={item.title}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="ml-5 flex-1">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl font-semibold text-gray-100">{item.title}</h2>
                </a>
                <p className="text-sm text-gray-600 mt-2">{item.published}</p>
                <p className="text-gray-400 mt-1">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default NewsFeed;
