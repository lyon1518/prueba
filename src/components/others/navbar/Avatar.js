import React from "react";

const Avatar = (props) => {
    const { link, type, text, icon, badge } = props
    return (
        <a className="dropdown-item my-2" href={link}>
            <div className="media align-items-center">
                {type === "" ?
                    <div className="avatar avatar-xs avatar-soft-info avatar-circle mr-2">
                        <span className="avatar-initials">{icon}</span>
                    </div> :
                    <img className="avatar avatar-xs avatar-circle mr-2" src={icon} alt="Description" />
                }
                <div className="media-body text-truncate">
                    <span>{text}
                        {badge === "" ? '' :
                            <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed">{badge}</i>
                        }
                    </span>
                </div>
            </div>
        </a>
    )
}
export default Avatar