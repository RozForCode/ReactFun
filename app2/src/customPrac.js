import logo from './logo.svg';
import './App.css';

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    // useState returns a pair
    // useRef returns a object
    // our hook will return 
    return [

        {
            value, onChange: e => {
                setValue(e.target.value)
            }
        },
        () => { setValue(initialValue) }
    ]
}



import { useRef } from 'react'
import { useState } from 'react';
// ref- way to react out to individual elements and check it's value
// good for handling uncontrolled components -- useRef is not going to reRender so we always have to reach out to get the value

// also possilbe to manage forms using state, when we use ref we create a uncontrolled component
// 
function App() {
    const [title, setTitle] = useInput("");
    const [color, setColor] = useInput("#000000");
    const txtTitle = useRef(),
        hexColor = useRef();
    const submit = e => {

        e.preventDefault();
        const title1 = txtTitle.current.value;
        const color1 = hexColor.current.value;
        alert(`${title}, ${color}`);
        txtTitle.current.value = "";
        hexColor.current.value = "";
        setColor("#000000");
        setTitle("");
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

// we can create our own custom hooks
// they are made to deal with repeatable patterns
// custom hook is a function that start with the word use