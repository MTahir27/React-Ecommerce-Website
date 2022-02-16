import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ReactComponent as Logo } from "../../assets/images/logo/logo.svg";

const Navbar = () => {
    return (
        <header className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <section className="options">
                <Link className="option" to="/shop" >Shop</Link>
                <Link className="option" to="/contact" >Contact</Link>
            </section>
        </header>
    )
}

export default Navbar;