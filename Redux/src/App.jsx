import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'
import { changeThemeToDark, changeThemeToLight } from './redux/slices/themeSlice'

const App = () => {
    const num = useSelector((state)=>state.counter.value)
    const theme = useSelector((state)=>state.theme.value)

    const dispatch = useDispatch()
  
    return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>{
            dispatch(increment())
        }}>+</button>
        <button onClick={()=>{
            dispatch(decrement())
        }}>-</button>


        <h1>{theme}</h1>
        <button onClick={()=>{
            dispatch(changeThemeToDark())
        }
        }>Change theme to dark</button>
        <button onClick={()=>{
            dispatch(changeThemeToLight())
        }
        }>Change theme to light</button>
    </div>
  )
}

export default App