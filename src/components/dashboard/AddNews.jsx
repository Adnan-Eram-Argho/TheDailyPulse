import axios from "axios";
import { useEffect, useState } from "react";


function AddNews() {
    const [newsType, setNewsType] = useState();
    useEffect(() => {
      async function load() {
        const data =await axios.get("http://localhost:3000/news_types");
        
        if (data?.status === 200) {
          setNewsType(data?.data);
          
        }
      }
  
  
      load()
    }, []);
    
    const  handleCreateRecipe=async(e)=>{
      e.preventDefault();
      const form =e.target;
      const id = form.id.value;
      const title = form.title.value;
      const image = form.img.value;
      const news_type=form.news_type.value;
      const description = form.description.value;
      const newsData = {id,title,image,news_type,description}
      console.log(newsData)
  
       await axios.post("http://localhost:3000/news_articles",newsData) 
    }
  return (
    <div className="w-full p-16">
    <h1 className="text-center text-3xl">Add recipe</h1>
  <form className="w-full" onSubmit={handleCreateRecipe}>
    <div className="mb-4">
      <label htmlFor="">id</label>
      <input
        type="text"
        name="id"
        placeholder="id"
        className="w-full py-5 px-7 border"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full py-5 px-7 border"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="">Image link</label>
      <input
        type="text"
        name="img"
        placeholder="Image"
        className="w-full py-5 px-7 border"
      />
    </div>
    <div className="mb-4">
        <label htmlFor="">news_type</label>
      <select name="news_type" id="" className="w-full py-5 px-7 border">
        
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
        className="w-full py-5 px-7 border"
      />
    </div>
    <div className="mb-4">
    
      <input
        type="submit"
        
        value={"Add Product"}
        className="w-full py-5 px-7 border btn btn-neutral"
      />
    </div>
  </form>
</div>
  )
}

export default AddNews
