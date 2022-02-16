import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import ShopPage from "./Pages/Shop";
import SigninSignup from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
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
