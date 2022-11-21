import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newValue)=>{
    if(categories.some(value=>value===newValue))return
    setCategories([newValue,...categories])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={(value)=>onAddCategory(value)}/>
      
        {categories.map((category) => 
          (
            <GifGrid key={category} category={category}/>
          )
        )}
      
    </>
  );
};

export default GifExpertApp;
