import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Sign from './components/Sign'
import Login from './components/Login'
import EcommerceAdmin from './components/Admin'
import Phone from './components/Phone'
import Headphone from './components/HeadPhone'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sign' element={<Sign/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin' element={<EcommerceAdmin/>}></Route>
          <Route path='/category/phone' element={<Phone/>}></Route>
          <Route path='/category/headphone' element={<Headphone/>}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
