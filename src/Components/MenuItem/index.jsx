import React from "react";
import "./style.scss";

const MenuItem = ({ ...otherMenuProps }) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="title">{titile}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;