
import '../styles/form.scss'
import {Link} from 'react-router'
import axios from 'axios'
import { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e){
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/register", {
        username,
        email,
        password
    },{
        withCredentials: true
    })
    .then(res=>{
        console.log(res.data);
    })

    setUsername("")
    setEmail("")
    setPassword("")
  }
  
    return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='username' 
                placeholder='Enter username'
                onInput={(e)=>{
                    setUsername(e.target.value)
                }}
                value={username}
                />
                <input 
                type="email" 
                name='email' 
                placeholder='Enter email'
                onInput={(e)=>{
                    setEmail(e.target.value)
                }}
                value={email}
                />
                <input 
                type="password" 
                name='password' 
                placeholder='Enter password'
                onInput={(e)=>{
                    setPassword(e.target.value)
                }}
                value={password}
                />

                <button type="submit">Login</button>
            </form>

            <p>Already have an accout? <Link className='toggleAuthForm' to="/login">Login</Link></p>
        </div>
    </main>
  )
}

export default Register