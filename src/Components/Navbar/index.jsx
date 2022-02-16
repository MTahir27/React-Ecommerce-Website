import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ReactComponent as Logo } from "../../assets/images/logo/logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop" >Shop</Link>
                <Link className="option" to="/contact" >Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;