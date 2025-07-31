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
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
