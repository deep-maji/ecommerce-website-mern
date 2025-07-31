import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Sign from './components/Sign'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sign' element={<Sign/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
