import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Your custom CSS
import './assets/css/custom.css';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
