import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
    
  //changing className in list 
  const classList = inCart ? "in-cart" : ""
  
  const handleClick = () => {
    setInCart(!inCart)
  }
 //button text
 const btnText = inCart ? "Remove From Cart" : "Add to Cart"


  return (
    <li className={classList}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"  onClick={handleClick}>{btnText}</button>
    </li>
  );
}

export default Item;
