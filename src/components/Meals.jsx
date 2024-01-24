import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      setLoadedMeals(data);
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            meal={meal.name}
            price={meal.price}
            description={meal.description}
            image={meal.image}
          />
        );
      })}
    </ul>
  );
};

export default Meals;
