import React from "react";

const IconText = (props) => {
    const {link,icon,text} = props
    return (
        <a className="dropdown-item my-2" href={link}>
            <div className="media align-items-center">
                <span className="icon icon-xs icon-soft-dark icon-circle mr-2">
                    <i className="tio-tune">{icon}</i>
                </span>

                <div className="media-body text-truncate">
                    <span>{text}</span>
                </div>
            </div>
        </a>
    )
}
export default IconText