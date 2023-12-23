import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
 import { BrowserRouter } from 'react-router-dom';
 import { Toaster } from "react-hot-toast";
//  import {createBrowserRouter} from "react-router-dom"
// import Home from './pages/Home.jsx';
//  const router = createBrowserRouter([
//   {
//     path: "/study-notion/",
//     element: <App/>,
//     children:[
//       {
//         path: "/study-notion/",
//         element: <Home/>
//       }
//     ]
//   }
//  ]
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster/>
  
  </BrowserRouter>,
)
