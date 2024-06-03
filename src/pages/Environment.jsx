import { useEffect, useState } from "react";
import SingleCardNews from "../components/hone/SingleCardNews";
import axios from "axios";

function Environment() {
  const [news, setNews] = useState();
  useEffect(() => {
    async function load() {
      const newsData = await axios.get("http://localhost:3000/news_articles");
      setNews(newsData?.data);
    }
    load();
  }, []);

  function environmentFilter(news) {
    return news?.news_type == "Environment";
  }
  return (
    <div>
      <h1 className="text-center mt-5 text-4xl">
        Here are all the Environment News
      </h1>

      <div className="flex flex-wrap mt-5 mb-5 items-center justify-between">
        {news?.filter(environmentFilter)?.map((singleNews) => (
          <SingleCardNews key={singleNews?.id} singleNews={singleNews} />
        ))}
      </div>
    </div>
  );
}

export default Environment;
