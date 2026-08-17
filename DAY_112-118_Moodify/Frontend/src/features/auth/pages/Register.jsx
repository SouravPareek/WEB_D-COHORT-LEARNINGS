import "../style/register.scss";
import FormGroup from "../components/FormGroup";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const Register = () => {
    const {handleRegister} = useAuth()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        await handleRegister({username, email, password})
        navigate("/")
    }
    return (
        <main className="register-page">
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <FormGroup 
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        label={"Name"} 
                        placeholder={"Enter your name"} />
                    <FormGroup
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        label={"Email"}
                        placeholder={"Enter your email"}
                    />
                    <FormGroup
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        label={"Password"}
                        placeholder={"Enter your password"}
                    />
                    <button type="submit" className="button">
                        Register
                    </button>
                    <p>
                        Already have an account?
                        <Link to="/login">Login here</Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Register;
