import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/RozForCode`)
      .then(res => Response.json())
      .then(data => setData(data));//shorthand could be .then(setData)

  })
  return (
    <h1></h1>
  );
}

export default App;
