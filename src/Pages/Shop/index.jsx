import React from "react";
import "./style.scss";
import ShopData from "./shopdata"
import CollectionPreview from "../../Components/CollectionPreview";

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: ShopData
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherItems }) => {
                        return (

                            < CollectionPreview key={id} {...otherItems} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage;