
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/pages/Home.js'
import Services from './components/pages/Services.js'
import Products from './components/pages/Products.js'
import SignUp from './components/pages/SignUp.js'



function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
   
    </>
      
      
    
  );
}

export default App;
