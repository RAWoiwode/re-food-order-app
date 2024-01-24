import React from "react";

const MealItem = ({ image, meal, price, description }) => {
  return (
    <div className="meal-item">
      <img src={image} alt="" />
      <h2>{meal}</h2>
      <h3 className="meal-item-price">{price}</h3>
      <p className="meal-item-description">{description}</p>
      <button className="button meal-item-actions">Add to cart</button>
    </div>
  );
};

export default MealItem;
