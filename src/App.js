import React, {useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipees' ;
import $ from "jquery";

const App = () => {
  const DARIA = '650b4ba9';
  var APP_KEY = 'fe8e990ccf288435f9d7a0f88d403a7836';
  
  const [recipees, setRecipees] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");


  useEffect(()=>{
    getRecipes();
  },[query]);
  var second_url = `https://api.edamam.com/search?q=${query}&app_id=650b4ba9&app_key=fe8e990ccf288435f9d7a0f88d403a78`;

  const getSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  };

  const getRecipes = async () => {
    const response = await fetch(second_url);
    const data = await response.json();
    setRecipees(data.hits);
    console.log(data.hits);
    console.log('${DARIA}');
    
  };

  const updateSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
   
    <div className = "app">
      <h4 className="about">
       <a href ="https://github.com/bazuevad/recipees-app/tree/master/src" className = "code">Code</a>
       <a href ="https://www.linkedin.com/in/dariabazueva/" className = "me">Author</a>
       <a href ="https://github.com/bazuevad" className = "projects">My Other Projects</a>
      </h4>
      <form onSubmit={updateSearch} className = "search-form">
        <input className = "search-input" type="text" value ={search} onChange={getSearch}/>
        <button className = "search-button" type = "submit">Search</button>
      </form>
      <div className="recipe">
      {recipees.map(recipe =>(
        <Recipe 
          key = {recipe.recipe.label}
          title = {recipe.recipe.label} 
          time = {recipe.recipe.totalTime} 
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          url = {recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
