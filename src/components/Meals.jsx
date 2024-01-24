import React, { useEffect, useMemo, useState } from "react";
import MealItem from "./MealItem";
import { useHttp } from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/mealsss", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title={"Failed to fetch meals"} message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
};

export default Meals;
