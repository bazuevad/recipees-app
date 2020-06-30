import React, {useEffect,useState} from 'react';
import './App.css';

const App = () => {
  var APP_ID = '650b4ba9';
  var APP_KEY = 'a9e7a75fa0dd44368a600a3b7d20888d';
  var base_url = 'https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=a9e7a75fa0dd44368a600a3b7d20888d';
  
  
  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(base_url);
    const data = await response.json();
    console.log(data);

  }
  return (
    <div className="App">
      <form className = "search-form">
        <input className = "search-input" type="text"/>
        <button className = "search-button" type = "submit">Search</button>
      </form>
    </div>
  );
}

export default App;
