import React from "react";
import "./style.scss";

const MenuItem = ({ title, size, imageUrl }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{ background: `url("${imageUrl}")` }}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;