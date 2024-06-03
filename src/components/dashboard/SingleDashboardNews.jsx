/* eslint-disable react/prop-types */

import axios from "axios";
import { Link } from "react-router-dom";


function SingleDashboardNews({news}) {
    async function deleteElement(){
        const del = await axios.delete(`http://localhost:3000/news_articles/${news.id}`);
        if(del){
         
          window.location.reload();
  
        }
       }

  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl h-[500px] my-5">
    <figure><img src={news?.image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        {news?.title}
        
      </h2>
      <p>{news?.description}</p>
      <div className="card-actions justify-end">
         <Link to={`/dashboard/edit-news/${news?.id}`} className="btn bg-secondary-content">edit</Link>
         <button className="btn bg-secondary-content" onClick={deleteElement}>delete</button>
        <div className="badge badge-outline">{news.news_type}</div>
      </div>
    </div>
  </div>
  
  
  
  
  
     
      </>
  )
}

export default SingleDashboardNews