import axios from "axios";
import { useEffect, useState } from "react";
import SingleCardNews from "../components/hone/SingleCardNews";


function Local() {
    const [news, setNews] = useState();
    useEffect(() => {
      async function load() {
        const newsData = await axios.get("http://localhost:5000/news_articles");
        setNews(newsData?.data);
      }
      load();
    }, []);

    function localFilter(news) {
        return news?.news_type == "Local";
      }
  return (
    <div>
    <h1 className="text-center mt-5 text-4xl">Here are all the Tech News</h1>

    <div className="flex flex-wrap mt-5 mb-5 items-center justify-between">
      {news?.filter(localFilter)?.map((singleNews) => (
        <SingleCardNews key={singleNews?._id} singleNews={singleNews} />
      ))}
    </div>
  </div>
  )
}

export default Local
