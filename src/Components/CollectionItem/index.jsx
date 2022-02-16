import React from "react";
import "./style.scss";

const CollectionItem = ({ name, price, imageUrl }) => {
    return (
        <>
            <div className="collection-item">
                <div className="image" style={{ background: `url("${imageUrl}")` }}></div>
                <div className="collection-footer">
                    <span className="name">{name.toUpperCase()}</span>
                    <span className="price">{price}</span>
                </div>
            </div>
        </>

    )
}

export default CollectionItem;