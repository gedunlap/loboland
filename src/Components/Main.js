import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Gallery from '../Pages/Gallery'
import Services from '../Pages/Services'
import Header from '../Header/Header'


function Main() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  )
}

export default Main