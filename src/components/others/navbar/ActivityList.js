import React from "react";

const ActivityList = (props) => {
    const { type, icon, title, description, adjuntos, date } = props.data
    return (
        <li className="step-item">
            <div className="step-content-wrapper">
                {type === 'avatar' ?
                    <div className="step-avatar">
                        <img className="step-avatar-img" src={icon} alt="Description" />
                    </div> :
                    <span className="step-icon step-icon-soft-dark">{icon}</span>
                }

                <div className="step-content">
                    <h5 className="mb-1">{title}</h5>

                    <p className="font-size-sm mb-1">{description}</p>
                    {adjuntos.length > 0?
                    <ul className="list-group list-group-sm">
                        <li className="list-group-item list-group-item-light">
                            <div className="row gx-1">
                                {adjuntos.map((e, i) => {
                                    return (
                                        <div className="col-6" key={"adjuntos" + i}>
                                            <div className="media">
                                                <span className="mt-1 mr-2">
                                                    
                                                    {e.icono}
                                                </span>
                                                <div className="media-body text-truncate">
                                                    <span className="d-block font-size-sm text-dark text-truncate" title="weekly-reports.xls">{e.descripcion}</span>
                                                    <small className="d-block text-muted">{e.peso}</small>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </li>
                    </ul>:''
                    }

                    <small className="text-muted text-uppercase">{date}</small>
                </div>
            </div>
        </li>
    )
}
export default ActivityList