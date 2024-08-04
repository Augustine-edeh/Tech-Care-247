"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        setNews(response.data.articles); // Access the articles from the response
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  if (!news) {
    return (
      <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-unnamed-color-ffffff p-5 rounded-2xl">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
          News feed
        </h3>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-unnamed-color-ffffff p-5 rounded-2xl">
      <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
        News feed
      </h3>
      <h1>Top Headlines</h1>
      <ul>
        {news.map((newsItem, index) => (
          <li key={index}>
            <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
              {newsItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
