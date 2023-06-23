import { useState } from 'react'
import React from 'react'
import Home from './pages/home';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';
import Connexion from './pages/connexion';
import Inscription from './pages/inscription';
import Expedition from './pages/expedition';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './App.css'


function App() {
    
 return(
  <>
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Apropos' element={<Apropos/>}/>
          <Route path='/Connexion' element={<Connexion/>}/>
          <Route path='/Inscription' element={<Inscription/>}/>
          <Route path='/Expedition' element={<Expedition/>}/>
      </Routes>
  </BrowserRouter>
  </>

 )

}

export default App;


