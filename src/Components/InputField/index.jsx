import React from "react";
import "./style.scss";

const InputField = ({ handleChange, label, ...otherInputProps }) => {
    return (
        <div className="group">
            {
                label ? (<label className={`${props.value.length ? "shrink" : null} form-input-label`} htmlFor={label}>{label}</label>) : null

            }
            <input className="form-input" onChange={handleChange} {...otherInputProps} />
        </div>
    )
}

export default InputField;