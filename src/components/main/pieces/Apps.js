import { ViewModule } from "@material-ui/icons";
import React from "react";
import MainScripts from "../../../scripts/MainComponents";

const Apps = (props) => {
    const { apps } = props?.data?.NavbarTop
    // console.log(apps);
    return (
        <div className="hs-unfold">
            <a onClick={() => { MainScripts.handdleActive('appsDropdown') }} className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="./"
                data-hs-unfold-options='{
                    "target": "#appsDropdown",
                    "type": "css-animation"
                }'
            >
                <i className="tio-menu-vs-outlined"><ViewModule /></i>
            </a>

            <div onPointerLeave={() => { MainScripts.handdleActive('appsDropdown') }} id="appsDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu" style={{ width: "25rem" }}>
                <div className="card-header">
                    <span className="card-title h4">Web apps &amp; services</span>
                </div>

                <div className="card-body card-body-height">
                    <div className="nav nav-pills flex-column">
                        {apps.map((e, i) => {
                            return (
                                <a key={"app" + i} className="nav-link" href={e.link}>
                                    <div className="media align-items-center">
                                        {e.type === 'avatar'?
                                        <span className="mr-3">
                                            <img className="avatar avatar-xs avatar-4by3" src={e.icon} alt="Description" />
                                        </span>:
                                        <span className="avatar avatar-xs avatar-soft-dark mr-3">
                                            <span className="avatar-initials">{e.icon}</span>
                                        </span>
                                        }
                                        <div className="media-body text-truncate">
                                            <span className="h5 mb-0">{e.title}<span className="badge badge-primary badge-pill text-uppercase ml-1">{e.badge}</span></span>
                                            <span className="d-block font-size-sm text-body">{e.description}</span>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}

                        
                    </div>
                </div>

                <a className="card-footer text-center" href="/#">
                    View all apps
                    <i className="tio-chevron-right"></i>
                </a>
            </div>
        </div>
    )
}
export default Apps