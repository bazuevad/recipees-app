import React, {useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipees' ;

const App = () => {
  var APP_ID = '650b4ba9';
  var APP_KEY = 'fe8e990ccf288435f9d7a0f88d403a7836';
  var base_url = 'https://api.spoonacular.com/recipes/search?query=cheese&number=10&apiKey=a9e7a75fa0dd44368a600a3b7d20888d';
  
  const [recipees, setRecipees] = useState([]);
  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(base_url);
    const data = await response.json();
    //console.log(data.results);
    setRecipees(data.results);
    console.log(data.results);

  }
  return (
    <div className="App">
      <form className = "search-form">
        <input className = "search-input" type="text"/>
        <button className = "search-button" type = "submit">Search</button>
      </form>
      {recipees.map(recipe =>(
        <Recipe  />
      ))};
    </div>
  );
}

export default App;
