import { useState } from 'react'
import React from 'react'
import Home from './pages/home';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';
import Connexion from './pages/connexion';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

 return(
  <>
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Apropos' element={<Apropos/>}/>
          <Route path='/Connexion' element={<Connexion/>}/>
      </Routes>
  </BrowserRouter>
   
  </>
   

 )

}

export default App;


