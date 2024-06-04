import axios from "axios";
import { useEffect, useState } from "react";
import SingleCardNews from "../components/hone/SingleCardNews";


function Health() {
    const [news, setNews] = useState();
    useEffect(() => {
      async function load() {
        const newsData = await axios.get("https://the-daily-pulse-server.vercel.app/news_articles");
        setNews(newsData?.data);
      }
      load();
    }, []);


    function healthfilter(news) {
        return news?.news_type == "Health";
      }
  return (
    <div>
    <h1 className="text-center mt-5 text-4xl">Here are all the Health News</h1>

    <div className="flex flex-wrap mt-5 mb-5 items-center justify-between">
      {news?.filter(healthfilter)?.map((singleNews) => (
        <SingleCardNews key={singleNews?._id} singleNews={singleNews} />
      ))}
    </div>
  </div>
  )
}

export default Health
