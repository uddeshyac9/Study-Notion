import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
//  import { BrowserRouter } from 'react-router-dom';
 import { Toaster } from "react-hot-toast";
 import { BrowserRouter as Router } from 'react-router-dom';
   


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename="/study-notion">
    <App />
    <Toaster/>
  </Router>,

)
