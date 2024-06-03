import axios from "axios";
import { useEffect, useState } from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
  } from "recharts";
  
  function MainDashboard() {
    const [newses, setNewses] = useState();
    useEffect(() => {
      async function load() {
        const newsData = await axios.get("http://localhost:3000/news_articles");
        setNewses(newsData?.data);
      }
      load();
    }, []);
    let technum = newses?.filter(news=>news?.news_type == "Technology");
    if(!technum?.length){
      technum = [];
    }
    let businessNum = newses?.filter(news=>news?.news_type == "Business");
    if(!businessNum?.length){
      businessNum = [];
    }
    let enviNumber = newses?.filter(news=>news?.news_type == "Environment");
    if(!enviNumber?.length){
      enviNumber = [];
    }
    let localNumber = newses?.filter(news=>news?.news_type == "Local");
    if(!localNumber?.length){
      localNumber = [];
    }
    let worldNumber = newses?.filter(news=>news?.news_type == "World");
    if(!worldNumber?.length){
      worldNumber = [];
    }
    let healthNumber = newses?.filter(news=>news?.news_type == "Health");
    if(!healthNumber?.length){
      healthNumber = [];
    }
    



    const data = [
      { name: "Tecjnoplogy", Number: technum.length },
      { name: "business", Number: businessNum?.length },
      { name: "environment", Number: enviNumber?.length },
      { name: "local", Number: localNumber?.length },
      { name: "health", Number: worldNumber?.length },
      { name: "world", Number: healthNumber?.length },
      
    ];
  
    return (
        <>
        <h1 className="text-center text-3xl font-bold"> Over view</h1>
      <div className="w-full h-64 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Line type="monotone" dataKey="Number" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      </>
    );
  }
  
  export default MainDashboard;
  