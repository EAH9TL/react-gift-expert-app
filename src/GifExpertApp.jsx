import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["JavaScript"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, 'Kaiju no. 8'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory}></AddCategory>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
