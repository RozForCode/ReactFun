import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";



//example of destructoring, we can also do that for arrays {below}
function App({ library }) {
  //use Effect happens alongside render
  // if you use empty array effect only happens once
  // useEffect(() => {
  //   console.log(`It's ${emotion} right now`)
  // }, [])
  // or we can pass an property or state so that when it changes the effect occurs
  useEffect(() => {
    console.log(`It's ${emotion} right now`)
  }, [emotion])
  // now we'll keep track of a variable
  useEffect(() => {
    console.log(`Secondary emotion is ${secondary}`)
  }, [secondary])

  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("tired");

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello from {library}</p>
        <p>Current emotion is {emotion}</p>
        <button onClick={() => { setEmotion("sad") }}>Sad</button>
        <button onClick={() => { setEmotion("excited") }}>Excited</button>
        <h2>Current secondary emotion is {secondary}</h2>
        <button onClick={() => { setSecondary("Grateful") }}>Grateful</button>


        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;


//Notes - managing state in very imp, modern way to handle state variables in an app 
// is to use a function called useState

//example of array destructuring
// const [first, second, third, fourth] = ['Mississauga', 'Brampton', 'Oakville', 'Vauhon']
// console.log(first);

//Note -useEffect - another important hook - that is used to manage side-effects that aren't related to
// a rendered component - working with animations