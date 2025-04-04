
import './App.css'
import React from "react";
import NewsComponent from './components/NewsComponent'

const App = () => {
  return (
    <div className="container mt-4">
      <h1>Top News Headlines</h1>
      <NewsComponent />
    </div>
  );
};

export default App;