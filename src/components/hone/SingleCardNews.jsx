/* eslint-disable react/prop-types */


function SingleCardNews({singleNews}) {
  return (
    <>
 
  <div className="card w-96 bg-base-100 shadow-xl h-[500px] mt-5">
  <figure><img src={singleNews?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> 
      {singleNews?.title}
      
    </h2>
    <p>{singleNews?.description}</p> 
    <div className="card-actions justify-end">
       
      <div className="badge badge-outline">{singleNews.news_type}</div>
    </div>
  </div>
</div>





   
    </>
  )
}

export default SingleCardNews
