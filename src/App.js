
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar></Navbar>
      <Switch>
        <Route path='/' exact></Route>
      </Switch>
    </BrowserRouter>
   
    </>
      
      
    
  );
}

export default App;
