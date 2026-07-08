import "../style/login.scss"
import FormGroup from "../components/FormGroup"
import { Link } from "react-router"

const Login = () => {
  return (
    <main className="login-page">
        <div className="form-container">
            <h1>Login</h1>
            <form>
                <FormGroup label={"Name"} placeholder={"Enter your email"}/>
                <FormGroup label={"Password"} placeholder={"Enter your password"}/>
                <button type="submit" className="button">Login</button>
                <p>Don't have an account?<Link to="/register">Register here</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Login