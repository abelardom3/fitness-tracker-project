import React from 'react';
import ReactDOM from 'react-dom/client';
import { InputProivder } from './Context/InputContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './CSS/index.css';
import './CSS/register.css'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <InputProivder>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </InputProivder>
    </BrowserRouter>
  </React.StrictMode>
);


