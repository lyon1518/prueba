import React from "react";

const ListNotification = (props) => {
    const { active, avatar, name, mess, cita, type, hr, link, badge } = props
    return (
        <li className="list-group-item custom-checkbox-list-wrapper">
            <div className="row">
                <div className="col-auto position-static">
                    <div className="d-flex align-items-center">
                        <div className="custom-control custom-checkbox custom-checkbox-list">
                            <input type="checkbox" className="custom-control-input" id="notificationCheck2" defaultChecked={active?true:false} />
                            <label className="custom-control-label" htmlFor="notificationCheck2"></label>
                            <span className="custom-checkbox-list-stretched-bg"></span>
                        </div>
                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                            {type === 'avatar'?
                            <img className="avatar-img" src={avatar} alt="Description" />:
                            <span className="avatar-initials">{avatar}</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="col ml-n3">
                    <span className="card-title h5">{name}</span>
                    <p className="card-text font-size-sm">{mess}<span className="badge badge-success">{badge}</span></p>
                    <blockquote className="blockquote blockquote-sm">
                        {cita}
                    </blockquote>
                </div>
                <small className="col-auto text-muted text-cap">{hr}</small>
            </div>
            <a className="stretched-link" href={link}> </a>
        </li>
    )
}
export default ListNotification