import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = "0c4138ad"
  const APP_KEY = "b893f9cbbe6a42bdb8275c5d8ae9fb0a" 

  const[recipes, setRecipes] = useState([])

  useEffect(() => {
   getRecipes()
  }, [])
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  return(
    <>
    <div className='App'>
      <form className='search'>
        <input className='search-bar' type="text" />
        <button className='search-button' type='submit'>
          Submit
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
    </div>
    </>
  )
}

export default App;
