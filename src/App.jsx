import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MyCarousel from "./components/MyCarousel";
import Feedback from "./components/Feedback";
import RecipeFinder from "./components/RecipeFinder";
import AddRecipeForm from "./components/AddRecipeForm";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [localRecipes, setLocalRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setLocalRecipes(storedRecipes);
  }, []);

  const handleAddRecipe = (newRecipe) => {
    const updated = [...localRecipes, newRecipe];
    setLocalRecipes(updated);
    localStorage.setItem("recipes", JSON.stringify(updated));
  };

  return (
    <Router>
      <div className="app-container bg-gray-50 min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center pt-10 space-y-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Body />
                  <MyCarousel />
                  <RecipeFinder localRecipes={localRecipes} />
                  <Feedback />
                </>
              }
            />
            <Route
              path="/add"
              element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
