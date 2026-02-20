import React, { useState } from 'react'

const App = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')

    let SubmitHandler = (e)=>{
        e.preventDefault()
        users.push(name)
        setUsers(users)
        setName('')
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                    SubmitHandler(e)
                }}>
                <input
                type="text"
                value={name}
                placeholder='Enter your name'
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                required
                />
                <button>Submit</button>
            </form>

            {users.map((elem, idx)=>{
                return <h2 key = {idx}>{elem}</h2>
            })}
        </div>
    )
}

export default App