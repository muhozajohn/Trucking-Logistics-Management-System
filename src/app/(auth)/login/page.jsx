"use client";
import React, { useState } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { checkLogin } from "../../../services/authService";
import Spinner from "../../../common/Spinner";
import "./login.scss";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleGoogleLogin = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     try {
  //       const userInfo = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
  //       );

  //       const result = await googleLogin(userInfo.data);

  //       if (result.success) {
  //         localStorage.setItem("user", JSON.stringify(result.user));
  //         router.push("/dashboard");
  //       } else {
  //         setErrors({ login: result.message });
  //       }
  //     } catch (error) {
  //       setErrors({ login: "Google login failed" });
  //     }
  //   },
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (validateForm()) {
      setIsLoading(true);
      try {
        const result = await checkLogin(formData.email, formData.password);

        if (result.success) {
          localStorage.setItem("user", JSON.stringify(result.user));
          router.push("/dashboard");
        } else {
          setErrors({ login: result.message });
        }
      } catch (error) {
        setErrors({ login: "Authentication failed" });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              minLength={3}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          {errors.login && (
            <div className="error login-error">{errors.login}</div>
          )}
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Login"}
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button
          className="google-btn"
          type="button"
          // onClick={() => handleGoogleLogin()}
        >
          <FcGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
