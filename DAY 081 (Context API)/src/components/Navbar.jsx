import React, { useState } from 'react'

const Navbar = (props) => {
  const [NewTheme, setNewTheme] = useState('')
    return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.changeTheme(NewTheme)
            setNewTheme('')
        }}>
            <input 
                type="text"
                placeholder='Enter new Theme here...'
                value={NewTheme}
                onChange={(e)=>{
                    setNewTheme(e.target.value)
                }}
            />
            <button>Click here</button>
        </form>
    </div>
  )
}

export default Navbar