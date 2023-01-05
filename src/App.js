import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const APP_ID = "#"
  const APP_KEY = "#" 

  useEffect(() => {
   getRecipes()
  }, [])
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data)
  }

  return(
    <div className='App'>
      <form className='search'>
        <input className='search-bar' type="text" />
        <button className='search-button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App;
