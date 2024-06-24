import "./App.css";
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import SignUp from "./pages/Sign_up"
import Dashboard from"./pages/Dashboard"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const[isLoggedIn , setIsLoggedIn]=useState(false);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 fle flec column min-height: 100vh">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/signUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard/>
          </PrivateRoute>
          
          }/>

      </Routes>
      
    </div>
  )
}

export default App;
