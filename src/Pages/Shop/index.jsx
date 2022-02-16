import React from "react";
import "./style.scss";
import shopData from "./shopdata";
import CollectionPreview from "../../Components/CollectionPreview";

class ShopPage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <CollectionPreview />
        )
    }
}

export default ShopPage;