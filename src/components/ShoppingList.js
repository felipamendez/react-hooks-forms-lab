import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItems }) {
  const [ selectedCategory, setSelectedCategory ] = useState("All");
  const [ search, setSearch ] = useState("")
  

  function handleFilter(e) {
    setSearch(e.target.value) 
    e.preventDefault()
   }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter((item) => item.name.includes(search))
  .filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory; 
    })
  
    

  return (
    <div className="ShoppingList">
      <ItemForm 
      
      items={items}
      setItems={setItems}
      />

      <Filter 
      onCategoryChange={handleCategoryChange}
      handleFilter={handleFilter}/>

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} 
          name={item.name} 
          category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
