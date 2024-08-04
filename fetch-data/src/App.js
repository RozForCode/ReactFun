import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/RozForCode`)
      .then(res => res.json())
      .then(data => setData(data));//shorthand could be .then(setData)

  }, []);
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>
  return (
    <h1></h1>
  );
}

export default App;
