import React from 'react'
import './login.scss'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        
        <div className="divider">
          <span>or</span>
        </div>

        <button className="google-btn">
          <FcGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  )
}

export default Login