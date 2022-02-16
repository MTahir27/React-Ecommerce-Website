import React from "react";
import "./style.scss";
import MenuItem from "../MenuItem";

class Directory extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="directory-menu">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>

        )
    }
}

export default Directory;