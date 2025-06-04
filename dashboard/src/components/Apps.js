import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Protected from "../pages/Protected";

const Apps = () => {
  return (
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
  );
}

export default Apps;