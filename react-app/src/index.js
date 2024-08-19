import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App library="NSJ" />
  </React.StrictMode>
);
// createRoot adds the component in the DOM
//It creates a "root" object, which is the entry point for rendering your React component tree into the DOM.
//This root object manages the rendering process, allowing React to handle updates more efficiently 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
