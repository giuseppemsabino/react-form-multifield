import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
    category: "News",
    published: false,
  });
  const [articles, setArticles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setArticles([...articles, formData]);
    setFormData({
      title: "",
      image: "",
      content: "",
      category: "News",
      published: false,
    });
  };
  const handleDelete = (index) => {
    const newArticles = [...articles];
    newArticles.splice(index, 1);
    setArticles(newArticles);
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-5">Gestione Articoli Blog</h1>
        <form onSubmit={handleFormSubmit}>

          {/* title camp */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="inserici l'articolo"
          />

          {/* image camp */}
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="URL immagine"
          />

          {/* content camp  */}
          <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Contenuto dell'articolo"
            ></textarea>

          {/* category camp */}
          <select 
          name="category" 
          value={formData.category}
          onChange={handleInputChange}
          >

          <option value="...">...</option>
          <option value="News">News</option>
          <option value="Technology">Technology</option>
          <option value="Life">Life</option>

          </select>  

          <label>
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleInputChange}
              />
              Pubblica
            </label>

          <button type="submit">Invia</button>
        </form>

        <ul className="mt-3">
          {articles.map((article, index) => (
            <li key={index}>
              {article}
              <button onClick={() => handleDelete(index)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
