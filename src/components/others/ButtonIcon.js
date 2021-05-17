import React from "react";
const ButtonIncon = (props) => {
    const {link,text,icon} = props
    return (
        <span className="h4 mr-1">
            <a className="btn btn-xs btn-soft-dark btn-pill" href={link}>
                {text} <i className="ml-1">{icon}</i>
            </a>
        </span>
    )
}
export default ButtonIncon