import React from "react";
import "./style.scss";

const CollectionItem = () => {
    return (
        <div className="collection-item">
            <div className="image" style={{ background: `url("https://i.ibb.co/ZYW3VTp/brown-brim.png")` }}></div>
            <div className="collection-footer">
                <span className="name">Name</span>
                <span className="price">123</span>
            </div>
        </div>
    )
}

export default CollectionItem;