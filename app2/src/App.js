import logo from './logo.svg';
import './App.css';

import { useRef } from 'react'
import { useState } from 'react';
// ref- way to react out to individual elements and check it's value
// good for handling uncontrolled components -- useRef is not going to reRender so we always have to reach out to get the value

// also possilbe to manage forms using state, when we use ref we create a uncontrolled component
// 
function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const txtTitle = useRef(),
    hexColor = useRef();
  const submit = e => {

    e.preventDefault();
    const title1 = txtTitle.current.value;
    const color1 = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={submit}>
          <input value={title} onChange={(event) => setTitle(event.target.value)} ref={txtTitle} type="text" placeholder='color title..' />
          <input value={color} onChange={(event) => { setColor(event.target.value) }} ref={hexColor} type="color" />
          <button>ADD</button>
        </form>
      </header>
    </div>
  );
}

export default App;
