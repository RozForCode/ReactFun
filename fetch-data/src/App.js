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
  // handling loading states - loading state, success state and error state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/RozForCode`)
      .then(res => res.json())
      // data1 refers to the data that we get from the promise returned by previous .then()
      // which is then used to update the value of useState data that has been set to null
      .then(data1 => setData(data1));//shorthand could be .then(setData)

  }, []);
  if (data) return <GithubUser name={data.name} location={data.location} avatar={data.avatar_url} />
  return (
    <h1></h1>
  );
}

export default App;
