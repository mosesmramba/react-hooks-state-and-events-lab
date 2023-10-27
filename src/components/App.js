import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
 
  // replace 'false' with a state variable that can be toggled between true and false
  const [isDarkMode, setIsDarkMode] = useState(false);
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light";

  //function to handle click
  function handleClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
