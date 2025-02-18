import React from "react";
import LanguageSelection from "../components/LanguageSelection";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to LangLearn</h1>
      <p>Choose a language and start learning with the best resources available!</p>
      <LanguageSelection />
    </div>
  );
};

export default Home;
