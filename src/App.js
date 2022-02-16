import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import ShopPage from "./Pages/Shop";
import SigninSignup from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/login" element={<SigninSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
