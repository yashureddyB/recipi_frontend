import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import MyCarousel from "./components/MyCarousel";
import Feedback from "./components/Feedback";
import RecipeFinder from "./components/RecipeFinder";
import AddRecipeForm from "./components/AddRecipeForm";
import KitchenTipsAccordion from "./components/KitchenTipsAccordion";

import Login from "./auth/Login";
import Register from "./auth/Register";
import ProtectedRoute from "./auth/ProtectedRoute";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [localRecipes, setLocalRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setLocalRecipes(storedRecipes);
  }, []);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...localRecipes, newRecipe];
    setLocalRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  return (
    <Router>
      <div className="app-container min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-pink-100">
        <Routes>
          {/* DEFAULT ROUTE → LOGIN */}
          <Route path="/" element={<Login />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />

          {/* HOME PAGE (PROTECTED) */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <main className="flex flex-col items-center justify-center pt-10 space-y-6">
                    <Body />
                    <MyCarousel />
                    <RecipeFinder localRecipes={localRecipes} />
                    <KitchenTipsAccordion />
                    <Feedback />
                  </main>
                </>
              </ProtectedRoute>
            }
          />

          {/* ADD RECIPE PAGE (PROTECTED) */}
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddRecipeForm onAddRecipe={handleAddRecipe} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;