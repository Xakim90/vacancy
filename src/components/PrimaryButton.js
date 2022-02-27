import React from "react";
import "./PrimaryButton.less";

const PrimaryButton = ({ btnText = "", }) => {

    return (
        <button className="glow-on-hover">
            {btnText}
        </button>
    )
}
export default PrimaryButton;