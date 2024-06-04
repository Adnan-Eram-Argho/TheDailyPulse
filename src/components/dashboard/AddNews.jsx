import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


function AddNews() {
    const [newsType, setNewsType] = useState();
    useEffect(() => {
      async function load() {
        const data =await axios.get("https://the-daily-pulse-server.vercel.app/news_types");
        
        if (data?.status === 200) {
          setNewsType(data?.data);
          
        }
      }
  
  
      load()
    }, []);
    
    const  handleCreateRecipe=async(e)=>{
      const token = localStorage.getItem('token')
      e.preventDefault();
      const form =e.target;
      
      const title = form.title.value;
      const image = form.img.value;
      const news_type=form.news_type.value;
      const description = form.description.value;
      const newsData = {title,image,news_type,description}
      console.log(newsData)
      let config = {
        headers: {
          authorization: `bearer ${token}`,
        }
      }
  
     const result=  await axios.post("https://the-daily-pulse-server.vercel.app/news_articles",newsData,config).then() 
     console.log(result)
     toast.success('Successfully added!')
    }
  return (
    <div className="w-full p-16">
    <h1 className="text-center text-3xl">Add News</h1>
  <form className="w-full" onSubmit={handleCreateRecipe}>
    
    <div className="mb-4">
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full py-5 px-7 border rounded-xl"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="">Image link</label>
      <input
        type="text"
        name="img"
        placeholder="Image"
        className="w-full py-5 px-7 border rounded-xl"
      />
    </div>
    <div className="mb-4">
        <label htmlFor="">news_type</label>
      <select name="news_type" id="" className="w-full py-5 px-7 border rounded-xl">
        
        {
            newsType?.map(news=><option key={news.id} value={news.news_type} >{news.news_type}</option>)
            
        }
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="">description</label>
      <textarea
        type="text"
        name="description"
        placeholder="description"
        className="w-full py-5 px-7 border rounded-xl"
      />
    </div>
    <div className="mb-4">
    
      <input
        type="submit"
        
        value={"Add News"}
        className="w-full py-5 px-7 border btn btn-neutral"
      />
    </div>
  </form>
</div>
  )
}

export default AddNews
