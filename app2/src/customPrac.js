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
    const [title, resetTitle] = useInput("");
    const [color, resetColor] = useInput("#000000");
    const submit = e => {

        e.preventDefault();
        alert(`${title}, ${color}`);
        resetColor();
        resetTitle();
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                //action
                <form onSubmit={submit}>
                    <input {...title} type="text" placeholder='color title..' />
                    <input  {...color} type="color" />
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