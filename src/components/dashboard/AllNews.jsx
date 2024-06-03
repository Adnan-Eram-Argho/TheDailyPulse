import axios from "axios";
import { useEffect, useState } from "react";
import SingleDashboardNews from "./SingleDashboardNews";


function AllNews() {
  const [newses, setNewses] = useState();
  useEffect(() => {
    async function load() {
      const newsData = await axios.get("http://localhost:3000/news_articles");
      setNewses(newsData?.data);
    }
    load();
  }, []);
  return ( <>
  <h1 className="text-3xl my-5 font-bold">All news</h1>
    <div className="flex flex-wrap mt-5 w-11/12 m-auto">
      {
        newses?.map(news=><SingleDashboardNews key={news.id} news={news}/>)
      }
    </div>
    </>
  )
}

export default AllNews
