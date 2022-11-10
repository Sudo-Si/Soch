import React from 'react'
// import img  from './Sosh.png'
import Login from './components/Login2'
import Home from './container/Home'
import {Routes, Route } from 'react-router-dom'

// rafce

const App = () => {
  return (
    <Routes>
      <Route path ="login" element ={<Login/>}/> 
      <Route path ="/*" element ={<Home/>}/> 
    </Routes>
    
  )
}

export default App
