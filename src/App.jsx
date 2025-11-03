import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MyCarousel from "./components/MyCarousel";
import Feedback from "./components/Feedback";
import RecipeFinder from "./components/RecipeFinder";

function App() {
  return (
    <div className="app-container bg-gray-50 min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center pt-10 space-y-6">
        <Body />
        <MyCarousel />
        <RecipeFinder />
        <Feedback />
      </main>
    </div>
  );
}

export default App;
