import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landig_page/home/HomePage";
import Signup from "./landig_page/signup/Signup";
import ProductPage from "./landig_page/product/ProductsPage";
import Supportpage from "./landig_page/support/SupportPage";
import PricingPage from "./landig_page/pricing/PrincingPage";
import AboutPage from "./landig_page/apout/AboutPage";
import Navbar from "./landig_page/Navbar";
import Footer from "./landig_page/Footer";
import NotFoundPage from "./landig_page/NotFound";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<Supportpage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
