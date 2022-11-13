import React from 'react';
import ReactDOM from 'react-dom/client';
import { InputProivder } from './Context/InputContext';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InputProivder>
      <App />
    </InputProivder>
  </React.StrictMode>
);


