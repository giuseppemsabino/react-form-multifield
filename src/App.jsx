import { useState } from 'react'

function App() {
 
  const [myValue , setMyValue] = useState('');
  const [articles, setArticles] = useState([]);

  const handleInputChange = (e) => {
    setMyValue(e.target.value);
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
        <h1 className="mt-5">Hello world</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={myValue} onChange={handleInputChange} placeholder="inserici l'articolo"/>
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
