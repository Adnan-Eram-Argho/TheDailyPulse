/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
function LatestNews({singleNews}) {
    
  return (
    <>
    <div className="indicator">
  <span className="indicator-item badge badge-secondary">New</span> 
  <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
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
</div>




   
    </>
  )
}

export default LatestNews
