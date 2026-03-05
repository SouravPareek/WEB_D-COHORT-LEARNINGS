import React, { createContext } from 'react'
import { useState } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = ({children}) => {
  const [Theme, setTheme] = useState('light')
    return (
    <ThemeDataContext.Provider value={[Theme, setTheme]}>
        {children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext