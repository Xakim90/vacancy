import React from "react";

// customizable
// button accepts icon if passed src of img
// pass bgColor, border and hovered: boolean
// type prop to use in forms

function CustomButton({
    onClick,
    text,
    type = "button",
    height = "42px",
    backgroundColor = "#4E5C86!important",
    color = "#fff",
    icon,
    border = "none",
    hovered = false,
    padding = "0 24px",
    disabled = false,
    cursor = "pointer",
    glowOnHover = true,
    className = "glow-on-hover"
}) {
    return (
        <button
            onClick={onClick}
            className={className}
            style={{ backgroundColor, color, border, height, padding, cursor }}
            type={type}
            background="red!important"
        >
            {icon ? (
                <span className="button-icon">
                    <img src={icon} alt="" />
                </span>
            ) : (
                ""
            )}
            {icon ? "" : <span>{text}</span>}
        </button>
    );
}

export default CustomButton;
