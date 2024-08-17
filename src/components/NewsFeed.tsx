"use client";

import { useEffect, useState } from "react";
import { useNewsStore } from "@/store/useNewsStore";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsFeed = () => {
  const news = useNewsStore((state) => state.news);
  const totalResults = useNewsStore((state) => state.totalResults);
  const isLoading = useNewsStore((state) => state.isLoading);
  const error = useNewsStore((state) => state.error);
  const fetchNewsData = useNewsStore((state) => state.fetchNewsData);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchNewsData(page, 10); // Fetch initial news
  }, [fetchNewsData, page]);

  const fetchMoreNews = async () => {
    if (news.length < totalResults) {
      setPage((prevPage) => prevPage + 1);
      await fetchNewsData(page + 1, 10); // Fetch more news
    } else {
      setHasMore(false);
    }
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
    <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-white p-5 rounded-lg shadow-md">
      <h1 className="font-manrope font-extrabold text-2xl leading-[33px] text-gray-800">
        News Feed
      </h1>
      <h3 className="text-xl font-bold text-gray-900">Top Headlines</h3>
      <ul
        id="infiniteScrollContainer"
        className="space-y-4 mt-4 bg-sky-400 h-[calc(100dvh+130px)] overflow-y-scroll"
      >
        <InfiniteScroll
          dataLength={news.length} // Length of current news array
          next={fetchMoreNews}
          hasMore={hasMore}
          loader={<h4>Wait, please...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
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
                Published on:{" "}
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
