import React from 'react';   // It "index.js" actually kickstarts our application taking all the components and mounting them to 'dom'  
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // This is the root component

const root = ReactDOM.createRoot(document.getElementById('root')); //This position is rendered
root.render(
  <React.StrictMode>  {/*react does additional check during development and gives warning in console*/}
    <App />  {/* Its taking the App component and rendering it to the dom and it does that in 'root div in index.html'*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

