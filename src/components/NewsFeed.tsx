"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "@/services/newsService";
import { NewsArticle } from "../../types/NewsArticle";
import { useNewsStore } from "@/store/useNewsStore";

import InfiniteScroll from "react-infinite-scroll-component";

const NewsFeed = () => {
  const news = useNewsStore((state) => state.news);
  const isLoading = useNewsStore((state) => state.isLoading);
  const error = useNewsStore((state) => state.error);
  const fetchNewsData = useNewsStore((state) => state.fetchNewsData);

  useEffect(() => {
    fetchNewsData();
  }, [fetchNewsData]);

  // const [news, setNews] = useState<NewsArticle[] | null>(null);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   const getNews = async () => {
  //     try {
  //       const data = await fetchNews();
  //       setNews(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching news:", error);
  //     }
  //   };
  //   getNews();
  // }, []);

  const fetchMorNewseData = () => {
    if (news?.length < 200) {
      // TODO: fetch more news data from the API
      setNews((prevState) => [...prevState]);
    } else {
      setHasMore(false);
    }
  };

  if (isLoading) {
    return (
      <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-white p-5 rounded-lg shadow-md">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-gray-800">
          News Feed
        </h3>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-white p-5 rounded-lg shadow-md">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-gray-800">
          News Feed
        </h3>
        <p className="text-gray-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-white p-5 rounded-lg shadow-md">
      <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-gray-800">
        News Feed
      </h3>
      <h1 className="text-xl font-bold text-gray-900">Top Headlines</h1>
      <ul
        id="infiniteScrollContainer"
        className="space-y-4 mt-4 bg-sky-400 h-[calc(100dvh+130px)] overflow-y-scroll"
      >
        <InfiniteScroll
          dataLength={20} //This is important field to render the next data
          next={fetchMorNewseData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {news?.map((newsItem, index) => (
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
