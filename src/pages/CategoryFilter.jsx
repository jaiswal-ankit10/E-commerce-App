import React, { useState } from "react";

const CategoryFilter = ({ categories, updateCategory }) => {
  const [active, setActive] = useState("All");
  const handleCategoryClick = (category) => {
    setActive(category);
    updateCategory(category);
  };

  return (
    <ul className="flex gap-3 w-full justify-center cursor-pointer mb-10">
      {categories.map((category) => (
        <li
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-1 rounded-full border 
                      transition
                      ${
                        active === category
                          ? "bg-primary text-primary-content border-primary"
                          : "border-base-content/30 hover:bg-base-200"
                      }`}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
