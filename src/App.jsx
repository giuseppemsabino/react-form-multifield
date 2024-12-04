import { useState } from 'react'

function App() {
 
  const [formData , setFormData] = useState({
    title : "",
    image: "",
    content: "",
    category: "News",
    published: false
  });
  const [articles, setArticles] = useState([]);


  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (myValue.trim()) {
      setArticles([...articles, myValue]); // Aggiunge l'articolo alla lista
      setMyValue(""); // Resetta l'input
    }
  }
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
          <input 
          type="text" 
          name="title" 
          value={formData.title}
          onChange={handleInputChange} 
          placeholder="inserici l'articolo"/>
          
          <button type='submit'>Invia</button>
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
  )
}

export default App
