import axios from "axios";
import { useEffect, useState } from "react";
import SingleDashboardNews from "./SingleDashboardNews";

function AllNews() {
  const [newses, setNewses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const newsData = await axios.get("https://the-daily-pulse-server.vercel.app/news_articles");
        setNewses(newsData?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen"><span className="loading loading-spinner loading-lg text-center"></span></div>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1 className="text-3xl my-5 font-bold">All news</h1>
      <div className="flex flex-wrap mt-5 w-11/12 m-auto">
        {newses.map((news) => (
          <SingleDashboardNews key={news._id} news={news} />
        ))}
      </div>
    </>
  );
}

export default AllNews;
