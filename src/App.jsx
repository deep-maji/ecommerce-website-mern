import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Sign from './components/Sign'
import Login from './components/Login'
import EcommerceAdmin from './components/Admin'
import Phone from './components/Phone'
import Headphone from './components/HeadPhone'
import Gaming from './components/Gaming'
import Computer from './components/Computer'
import Watch from './components/Watch'
import Camera from './components/Camera'
import Cart from './components/Cart'
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
          <Route path='/category/gaming' element={<Gaming/>}></Route>
          <Route path='/category/camera' element={<Camera/>}></Route>
          <Route path='/category/computer' element={<Computer/>}></Route>
          <Route path='/category/watch' element={<Watch/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
