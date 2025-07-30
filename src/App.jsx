import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/Home'
import Sign from './components/Sign'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/sign",
      element : <Sign/>
    },
    {
      path : "/login",
      element : <Login/>
    }
  ])

  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
