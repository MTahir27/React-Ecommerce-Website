import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo/logo.svg";

const Navbar = () => {
    return (
        <nav>
            <Logo className="logo" />
            <h1>Navbar</h1>
        </nav>
    )
}

export default Navbar;