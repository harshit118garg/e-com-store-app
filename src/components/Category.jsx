import React from "react";
import "./styles/Category.scss";

const Category = ({ categoriesArray, data, setCategoryItems }) => {
  const filterItems = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setCategoryItems(updatedList);
  };

  return (
    <div className="buttons mx-2 text-center">
      <button
        className="btn me-2 text-uppercase"
        onClick={() => setCategoryItems(data)}
      >
        ALL
      </button>
      {categoriesArray.map((category, index) => (
        <button
          key={index}
          className="btn me-2 text-uppercase"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
