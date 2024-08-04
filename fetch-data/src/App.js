import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <img src={avatar} alt={name} height='200px' width='200px' />
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/RozForCode`)
      .then(res => res.json())
      .then(data => setData(data));//shorthand could be .then(setData)

  }, []);
  if (data) return <GithubUser name={data.name} location={data.location} avatar={data.avatar_url} />
  return (
    <h1></h1>
  );
}

export default App;
