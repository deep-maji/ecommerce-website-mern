import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import MainBody from './components/MainBody'


function App() {

  return (
    <>
      <Navbar/>
      <MainBody/>
      <Footer/>
    </>
  )
}

export default App
