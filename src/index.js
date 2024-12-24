import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import the global CSS
import App from './App';  // Import the main App component
import reportWebVitals from './reportWebVitals';  // Optional for web performance metrics

// Renders the App component inside the element with the id 'root' in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
