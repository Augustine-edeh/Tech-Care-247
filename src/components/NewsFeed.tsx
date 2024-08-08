// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// const NewsFeed = () => {
//   const [news, setNews] = useState(null);

//   useEffect(() => {
//     axios
//       .get("/api/news")
//       .then((response) => {
//         console.log(response);

//         setNews(response.data.articles); // Access the articles from the response
//       })
//       .catch((error) => {
//         console.error("Error fetching news:", error);
//       });
//   }, []);

//   // useEffect(() => {
//   //   try {
//   //     const requestOptions = {
//   //       method: "GET",
//   //     };

//   //     fetch(
//   //       "https://newsapi.org/v2/top-headlines?apiKey=537c95553a3e424aaf50912bcd96d405&category=health",
//   //       requestOptions
//   //     )
//   //       .then((response) => response.json())
//   //       .then((result) => console.log(result))
//   //       .catch((error) => console.error(error));
//   //   } catch (error) {
//   //     console.error("Error fetching news:", error);
//   //   }
//   // }, []);

//   if (!news) {
//     return (
//       <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-unnamed-color-ffffff p-5 rounded-2xl">
//         <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
//           News feed
//         </h3>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-unnamed-color-ffffff p-5 rounded-2xl">
//       <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
//         News feed
//       </h3>
//       <h1>Top Headlines</h1>
//       <ul>
//         {news.map((newsItem, index) => (
//           <li key={index}>
//             <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
//               {newsItem.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewsFeed;
"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";
import { NewsArticle } from "../../types/NewsArticle";

const NewsFeed = () => {
  const [news, setNews] = useState<NewsArticle[] | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    getNews();
  }, []);

  if (!news) {
    return (
      <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-white p-5 rounded-lg shadow-md">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-gray-800">
          News Feed
        </h3>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-white p-5 rounded-lg shadow-md">
      <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-gray-800">
        News Feed
      </h3>
      <h1 className="text-xl font-bold text-gray-900">Top Headlines</h1>
      <ul className="space-y-4 mt-4">
        {news.map((newsItem, index) => (
          <li key={index} className="border-b border-gray-200 pb-4">
            <a
              href={newsItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <h4 className="text-lg font-semibold">{newsItem.title}</h4>
            </a>
            <p className="text-gray-600 mt-1">{newsItem.description}</p>
            <p className="text-gray-500 text-sm mt-1">
              Source: {newsItem.source.name}
            </p>
            <p className="text-gray-500 text-sm">
              Published on:{" "}
              {new Date(newsItem.publishedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
