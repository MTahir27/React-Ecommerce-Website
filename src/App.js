import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import ShopPage from "./Pages/Shop";
import SigninSignup from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <ShopPage />
      <SigninSignup />
    </div>
  );
}

export default App;
