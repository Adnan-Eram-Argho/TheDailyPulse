import axios from "axios";
import { useEffect, useState } from "react";
import SingleCardNews from "../components/hone/SingleCardNews";

function Search() {
    const [news, setNews] = useState();
    const [filterNews,setFilterNews] = useState();
    useEffect(() => {
      async function load() {
        const newsData = await axios.get("https://the-daily-pulse-server-git-main-adnan-eram-arghos-projects.vercel.app/news_articles");
        setNews(newsData?.data);
      }
      load();
    }, []);
    console.log(news)
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        if(!search ){
            alert("please enter a valid type of news")
        }
        const firstLetter = search.charAt(0);
        const rest =search.slice(1,search.length)
        const searchName = firstLetter.toUpperCase() +rest;
     
        function filter(news) {
            return news?.news_type == `${searchName}`;
            
          }
         const  searchNews = await news.filter(filter);
         if(searchNews.length==0){
            alert("please enter a valid type of news our types of newses are: Technology,Environment,Health,Business,local,World")
         }
         setFilterNews(searchNews);
        

    }
    console.log(filterNews)
    return (
      <div className="flex flex-col items-center justify-center w-full px-4 py-8">
        <h1 className="text-center text-4xl md:text-3xl sm:text-xl font-bold mb-8">Search The type of news you want to read</h1>
        <form className="flex flex-wrap justify-center gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="input input-bordered w-full  sm:w-full rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          />
          <input
            type="submit"
            value="search"
            
            className="btn btn-primary rounded-md py-2 px-4 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          />
        </form>

        <div className="flex flex-wrap gap-5">
        {
           filterNews?.map((singleNews) => (
            <SingleCardNews key={singleNews?._id} singleNews={singleNews} />) )
        }
        </div>
      </div>
    );
  }
  
  export default Search;