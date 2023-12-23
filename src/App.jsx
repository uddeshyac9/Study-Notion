import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import PrivateRoute from './components/PrivateRoute'



function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)

  return (
<div className='w-screen h-[110vh] overflow-x-hidden bg-richblack-900 flex flex-col'>
  <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
  <Routes>
    <Route path='/study-notion/' element={<Home/>}/>
    <Route path='/study-notion/login' element={<Login setIsLoggedin={setIsLoggedin}/>}/>
    <Route path='/study-notion/signup' element={<SignUp setIsLoggedin={setIsLoggedin}/>}/>
     
          <Route path="/study-notion/dashboard" element={ 
             <PrivateRoute  isLoggedin={isLoggedin}>
          <Dashboard />
          </PrivateRoute>
          
          } />
       
    <Route path='/study-notion/about' element={<About/>}/>
    <Route path='/study-notion/contact' element={<Contact/>}/>

 
  </Routes>
  
</div>
  )
}

export default App
