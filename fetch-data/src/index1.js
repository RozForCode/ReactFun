import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import { Home, About, Contact } from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

    </BrowserRouter>
)