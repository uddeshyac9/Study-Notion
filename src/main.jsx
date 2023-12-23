import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
 import { BrowserRouter } from 'react-router-dom';
 import { Toaster } from "react-hot-toast";
 import { RouterProvider, createBrowserRouter } from "react-router-dom";

 const router = createBrowserRouter([
  {
    path: "/study-notion/",
    element: <App/>,
  }
 ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<RouterProvider router={router} />
    <Toaster/>
  
  </BrowserRouter>,
)
