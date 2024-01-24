import Header from "./components/Header";
import MealItem from "./components/MealItem";

function App() {
  return (
    <>
      <Header />
      <main id="meals">
        <MealItem
          meal={"Mac and cheese"}
          price={"$8.99"}
          description={"Lorem ipsum"}
        />
        <MealItem />
      </main>
    </>
  );
}

export default App;
