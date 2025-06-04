import { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/api/register", form);
      alert("Registered successfully");
      setForm({ username: "", password: "" });  // Clear form
      navigate("/apps/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Create Account</h2>
        <input
          className="register-input"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          autoComplete="off"
          minLength={3}
        />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          autoComplete="new-password"
          minLength={5}
        />
        <button className="register-btn" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
