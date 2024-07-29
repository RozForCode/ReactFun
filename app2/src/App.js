import logo from './logo.svg';
import './App.css';

import { useRef } from 'react'
// ref- way to react out to individual elements and check it's value
// good for handling uncontrolled components -- useRef is not going to reRender so we always have to reach out to get the value
function App() {
  const txtTitle = useRef(),
    hexColor = useRef();
  const submit = e => {

    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={submit}>
          <input ref={txtTitle} type="text" placeholder='color title..' />
          <input ref={hexColor} type="color" />
          <button>ADD</button>
        </form>
      </header>
    </div>
  );
}

export default App;
