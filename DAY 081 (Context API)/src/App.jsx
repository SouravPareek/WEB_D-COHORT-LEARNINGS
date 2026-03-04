import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [Theme, setTheme] = useState('light')

  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
  }
    return (
    <div>
        <h1>Theme is {Theme}</h1>
        <Navbar changeTheme = {changeTheme}/>
    </div>
  )
}

export default App