import { useState } from "react";
import Hero from "../components/hone/Hero";
import NewsTypes from "../components/hone/NewsTypes";
import { useEffect } from "react";
import axios from "axios";
import LatestNews from "../components/hone/LatestNews";
import SingleCardNews from "../components/hone/SingleCardNews";
import { Link } from "react-router-dom";

function Home() {
  const [news, setNews] = useState();
  useEffect(() => {
    async function load() {
      const newsData = await axios.get("https://the-daily-pulse-server-git-main-adnan-eram-arghos-projects.vercel.app/news_articles");
      setNews(newsData?.data);
    }
    load();
  }, []);
  //tech
  function techfilter(news) {
    return news?.news_type == "Technology";
  }
  //business
  function business(news) {
    return news?.news_type == "Business";
  }
  //Environment
  function Environment(news) {
    return news?.news_type == "Environment";
  }
  return (
    <div className="w-10/12 m-auto">
      <Hero />
      <NewsTypes />

      <h1 className="text-center mt-5 text-4xl">Latest News</h1>
      <div className="flex flex-wrap mt-5 mb-5 items-center gap-5">
        {news
          ?.reverse()
          ?.splice(0, 3)
          ?.map((singleNews) => (
            <LatestNews key={singleNews?._id} singleNews={singleNews} />
          ))}
      </div>
      {
        //tech
      }
      <h1 className="text-center mt-5 text-4xl">Tech News</h1>
      <div className="flex flex-wrap mt-5 mb-5 items-center gap-5">
        {news?.filter(techfilter)?.splice(0, 3)?.map((singleNews) => (
          <SingleCardNews key={singleNews?._id} singleNews={singleNews} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to={"technology"}
          className="btn mr-5 bg-secondary-content mt-2 w-80 text-2xl"
        >
          
          see more
        </Link>
      </div>
      {
        //business
      }
      <h1 className="text-center mt-5 text-4xl">Business News</h1>
      <div className="flex flex-wrap mt-5 mb-5 items-center gap-5">
        {news?.filter(business)?.splice(0, 3)?.map((singleNews) => (
          <SingleCardNews key={singleNews?._id} singleNews={singleNews} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to={"business"}
          className="btn mr-5 bg-secondary-content mt-2 w-80 text-2xl"
        >
          
          see more
        </Link>
      </div>
      {
        //Environment
      }

      <h1 className="text-center mt-5 text-4xl">Environment News</h1>
      <div className="flex flex-wrap mt-5 mb-5 items-center gap-5  ">
        {news?.filter(Environment)?.splice(0, 3)?.map((singleNews) => (
          <SingleCardNews key={singleNews?._id} singleNews={singleNews} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to={"environment"}
          className="btn mr-5 bg-secondary-content mt-2 w-80 text-2xl mb-5"
        >
          {" "}
          see more
        </Link>
      </div>
    </div>
  );
}

export default Home;
