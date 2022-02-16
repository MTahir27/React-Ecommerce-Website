import React from "react";
import "./style.scss";
import CollectionItem from "../CollectionItem";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            {
                items.map(({ id, ...otherItemsProps }) => {
                    return (

                        <CollectionItem key={id} {...otherItemsProps} />
                    )
                })
            }
        </div>
    )
}

export default CollectionPreview;