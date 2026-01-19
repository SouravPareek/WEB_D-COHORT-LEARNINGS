import './App.css'
import React, { useState } from 'react'

const App = () => {
    const [name, setname] = useState('');

    const [allUsers, setallUsers] = useState([])
    
    const submitHandler = (e)=>{
        e.preventDefault()
        allUsers.push(name)

        setallUsers([...allUsers])
        setname('')
    }   
    
    return (
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <input
                    type="text" 
                    placeholder='enter'
                    value={name}
                    onChange={(e)=>{
                        setname(e.target.value)
                    }}
                    required
                />
                <button>Submit</button>
            </form>
            {allUsers.map((elem, idx)=>{
                return <h1 key={idx}>{elem}</h1>
            })}
        </div>
    )
}

export default App