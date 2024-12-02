import React from "react";
import "./login.scss";
import { FcGoogle } from "react-icons/fc";
import Button from "@/common/Button";

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
          <Button title="Login" path="/dashboard" className="login-btn" />
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
  );
};

export default Login;
