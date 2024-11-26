"use client";

import { useEffect, useState } from "react";
import { useNewsStore } from "@/store/useNewsStore";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./infiniteScroll/Loader";
import EndMessage from "./infiniteScroll/EndMessage";

const NewsFeed = () => {
  const news = useNewsStore((state) => state.news);
  const totalResults = useNewsStore((state) => state.totalResults);
  const isLoading = useNewsStore((state) => state.isLoading);
  const error = useNewsStore((state) => state.error);
  const fetchNewsData = useNewsStore((state) => state.fetchNewsData);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchNewsData(page, 20); // Fetch initial news
  }, [fetchNewsData, page]);

  const fetchMoreNews = async () => {
    setTimeout(async () => {
      if (news.length < totalResults) {
        setPage((prevPage) => prevPage + 1);
        await fetchNewsData(page + 1, 10); // Fetch more news
      } else {
        setHasMore(false);
      }
    }, 5000);
  };

  if (isLoading) {
    return (
      <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-white p-5 rounded-lg shadow-md">
        <h1 className="font-manrope font-extrabold text-2xl leading-[33px] text-gray-800">
          News Feed
        </h1>
        <h3 className="text-xl font-bold text-gray-900">Top Headlines</h3>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-white p-5 rounded-lg shadow-md">
        <h1 className="font-manrope font-extrabold text-2xl leading-[33px] text-gray-800">
          News Feed
        </h1>
        <h2 className="text-xl font-bold text-gray-900">Top Headlines</h2>
        <p className="text-gray-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-unnamed-color-ffffff p-5">
      <div>
        <h1 className="font-manrope font-extrabold text-2xl leading-8 text-gray-800">
          News Feed
        </h1>
        <h3 className="text-xl font-bold text-gray-900">Top Headlines</h3>
      </div>
      <ul
        id="infiniteScrollContainer"
        className="space-y-4 mt-4 overflow-y-auto flex-1"
      >
        <InfiniteScroll
          dataLength={news.length} // Length of current news array
          next={fetchMoreNews}
          hasMore={hasMore}
          scrollableTarget={"infiniteScrollContainer"}
          loader={<Loader />}
          endMessage={<EndMessage />}
        >
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
                Published on:
                {new Date(newsItem.publishedAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </InfiniteScroll>
      </ul>
    </div>
  );
};

export default NewsFeed;
