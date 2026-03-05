import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div className='text-white'>
        <Navbar/>
        <Sections/>
        <Footer/>
    </div>
  )
}

export default App