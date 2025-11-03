# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






import React, { useState } from "react";

const RecipeFinder = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchRecipe = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setRecipes([]);

    
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();

      if (data.meals && Array.isArray(data.meals)) {
        setRecipes(data.meals);
      } else {
        setError("No recipes found. Try another name.");
      }
    
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        🍳 Recipe Finder
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-80 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={searchRecipe}
          className="bg-green-500 text-white px-6 rounded-r-lg hover:bg-green-600 transition"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-gray-600">Loading recipes...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Recipes */}
      {recipes.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {meal.strMeal}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Category:</strong> {meal.strCategory}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Area:</strong> {meal.strArea}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {meal.strInstructions?.slice(0, 100)}...
              </p>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-green-600 hover:text-green-800 text-sm font-semibold"
              >
                ▶ Watch on YouTube
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeFinder;
