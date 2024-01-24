import { useEffect } from "react";
import Header from "./components/Header";
import MealItem from "./components/MealItem";
import Meals from "./components/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
