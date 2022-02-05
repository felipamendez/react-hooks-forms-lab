import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function ItemForm({
  items,
  setItems,
}) {
  const [ newName, setNewName ] = useState("")
  const [ newCategory, setNewCategory ] = useState("Produce")

  function handleNewNameChange (e) {
    setNewName(e.target.value)
  }
  
  function handleNewCategoryChange (e) {
    setNewCategory(e.target.value)
    console.log(e.target.value)
  }
  
  function handleFormSubmit (e) {
    e.preventDefault()
    handleAddItem(newItem)
  }
  
  const newItem = 
  { id: uuid(),
    name: newName, 
    category: newCategory }
    // console.log(newItem)
  
  function handleAddItem(newItem){
    setItems([...items, newItem])
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name: 
        <input 
        type="text" 
        name="name" 
        onChange={handleNewNameChange}
        value={newName}/>
      </label>

      <label>
        Category:
        <select 
        name="category" 
        onChange={handleNewCategoryChange}
        value={newCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
