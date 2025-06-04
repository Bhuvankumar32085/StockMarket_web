import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Make sure to create this file

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Logged in successfully");
      navigate("/");
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="login-box-container">
      <form onSubmit={handleSubmit} className="login-box-form">
        <h2 className="login-box-title">Login to Your Account</h2>

        <input
          className="login-box-input"
          placeholder="Username"
          value={form.username}
          autoComplete="off"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="login-box-input"
          type="password"
          placeholder="Password"
          value={form.password}
          autoComplete="new-password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" className="login-box-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
