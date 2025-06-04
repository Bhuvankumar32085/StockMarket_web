import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

const AuthButton = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    // Initial state: token exists or nahi

    localStorage.removeItem("token");
    navigate("/"); // login page pe redirect
  };

  if (token) {
    // User logged in — show logout button
    return (
      <button className="passLogin" onClick={handleLogout}>
        Logout
      </button>
    );
  } else {
    // User not logged in — show login button
    return (
      <>
      <Link to="/apps/login">
        <button className="passLogin">Login</button>
      </Link>

      <Link to="/apps/signup">
        <button className="passLogin">signup</button>
      </Link>
      </>
    );
  }
};

export default AuthButton;
