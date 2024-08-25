import './index.css'; // Import your main CSS file where Tailwind CSS is included
import React, { Component } from 'react';
import Search from "./components/Search"

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">
          Tailwind CSS is Working!
        </h1>
        <p className="text-lg text-gray-700 text-center">
          This is a test component to verify Tailwind styles are applied correctly.
        </p>
      </div>
      <Search />
    </div>
  );
}

export default App;
