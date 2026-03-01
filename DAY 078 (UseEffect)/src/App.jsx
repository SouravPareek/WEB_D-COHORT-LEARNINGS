import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
    
    const [Number1, setNumber1] = useState(0)
    const [Number2, setNumber2] = useState(0)
    const [Number3, setNumber3] = useState(0)

    useEffect(()=>{
        console.log("Use effect is in use");
    }, [Number1])

    return (
        <div>
            <h2>{Number1}</h2>
            <button onClick={()=>{
                setNumber1(Number1+1)
            }}>Increase Number 1</button>

            <h2>{Number2}</h2>
            <button onClick={()=>{
                setNumber2(Number2+1)
            }}>Increase Number 2</button>

            <h2>{Number3}</h2>
            <button onClick={()=>{
                setNumber3(Number3+1)
            }}>Increase Number 3</button>
        </div>
    )
}

export default App