import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/Home'
import Sign from './components/Sign'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Sign' element={<Sign/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
