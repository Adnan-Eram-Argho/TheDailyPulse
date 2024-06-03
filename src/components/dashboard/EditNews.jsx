import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditNews() {
  const { id } = useParams();
  const [newsType, setNewsType] = useState([]);
  const [newses, setNewses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const newsTypeData = await axios.get("http://localhost:3000/news_types");
        if (newsTypeData?.status === 200) {
          setNewsType(newsTypeData?.data);
        }

        const newsData = await axios.get(`http://localhost:3000/news_articles/${id}`);
        setNewses(newsData?.data);
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const image = form.img.value;
    const news_type = form.news_type.value;
    const description = form.description.value;
    const newsData = { id, title, image, news_type, description };
    console.log(newsData);

    await axios.patch(`http://localhost:3000/news_articles/${id}`, newsData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full p-16">
      <h1 className="text-center text-3xl">Edit News</h1>
      <form className="w-full" onSubmit={handleCreateRecipe}>
        <div className="mb-4">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            placeholder="ID"
            className="w-full py-5 px-7 border"
            defaultValue={newses?.id}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full py-5 px-7 border"
            defaultValue={newses?.title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="img">Image link</label>
          <input
            type="text"
            name="img"
            placeholder="Image"
            className="w-full py-5 px-7 border"
            defaultValue={newses?.image}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="news_type">News Type</label>
          <select
            name="news_type"
            className="w-full py-5 px-7 border"
            defaultValue={newses?.news_type}
          >
            {newsType?.map((news) => (
              <option key={news.id} value={news.news_type}>
                {news.news_type}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            defaultValue={newses?.description}
            className="w-full py-5 px-7 border"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value="Update News"
            className="w-full py-5 px-7 border btn btn-neutral"
          />
        </div>
      </form>
    </div>
  );
}

export default EditNews;
