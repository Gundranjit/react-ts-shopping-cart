import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';  // Import Tailwind CSS instead of Bootstrap
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
