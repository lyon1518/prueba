import React from "react";
import MainScripts from "../../../scripts/MainComponents";

const DropDownUser = (props) => {
    const handdlePop = ()=>{
        MainScripts.handdleActive('accountNavbarDropdown')
    }
    return (
        <div className="hs-unfold">
            <a className="js-hs-unfold-invoker navbar-dropdown-account-wrapper" href="./"
                onClick={()=>handdlePop()}
                data-hs-unfold-options='{
                    "target": "#accountNavbarDropdown",
                    "type": "css-animation"
                }'>
                <div className="avatar avatar-sm avatar-circle">
                    {/* <img className="avatar-img" src="@@autopath/assets/img/160x160/img6.jpg" alt="Description" /> */}
                    <span className="avatar-initials bg-secondary text-white">HG</span>
                    <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                </div>
            </a>

            <div onPointerLeave={()=>{handdlePop()}} id="accountNavbarDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account" style={{width: "16rem"}}>
                <div className="dropdown-item-text">
                    <div className="media align-items-center">
                        <div className="avatar avatar-sm avatar-circle mr-2">
                            {/* <img className="avatar-img" src="@@autopath/assets/img/160x160/img6.jpg" alt="Description" /> */}
                            <span className="avatar-initials bg-secondary text-white">HG</span>
                        </div>
                        <div className="media-body">
                            <span className="card-title h5">Mark Williams</span>
                            <span className="card-text">mark@example.com</span>
                        </div>
                    </div>
                </div>

                <div className="dropdown-divider"></div>

                <div className="hs-unfold w-100">
                    <a className="js-hs-unfold-invoker navbar-dropdown-submenu-item dropdown-item d-flex align-items-center" href="./"
                        data-hs-unfold-options='{
           "target": "#navSubmenuPagesAccountDropdown1",
           "event": "hover"
         }'>
                        <span className="text-truncate pr-2" title="Set status">Set status</span>
                        <i className="tio-chevron-right navbar-dropdown-submenu-item-invoker ml-auto"></i>
                    </a>

                    <div id="navSubmenuPagesAccountDropdown1" className="hs-unfold-content hs-unfold-has-submenu dropdown-unfold dropdown-menu navbar-dropdown-sub-menu">
                        <a className="dropdown-item" href="/#">
                            <span className="legend-indicator bg-success mr-1"></span>
                            <span className="text-truncate pr-2" title="Available">Available</span>
                        </a>
                        <a className="dropdown-item" href="/#">
                            <span className="legend-indicator bg-danger mr-1"></span>
                            <span className="text-truncate pr-2" title="Busy">Busy</span>
                        </a>
                        <a className="dropdown-item" href="/#">
                            <span className="legend-indicator bg-warning mr-1"></span>
                            <span className="text-truncate pr-2" title="Away">Away</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/#">
                            <span className="text-truncate pr-2" title="Reset status">Reset status</span>
                        </a>
                    </div>
                </div>

                <a className="dropdown-item" href="/#">
                    <span className="text-truncate pr-2" title="Profile &amp; account">Profile &amp; account</span>
                </a>

                <a className="dropdown-item" href="/#">
                    <span className="text-truncate pr-2" title="Settings">Settings</span>
                </a>

                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="/#">
                    <div className="media align-items-center">
                        <div className="avatar avatar-sm avatar-dark avatar-circle mr-2">
                            <span className="avatar-initials">HS</span>
                        </div>
                        <div className="media-body">
                            <span className="card-title h5">Htmlstream <span className="badge badge-primary badge-pill text-uppercase ml-1">PRO</span></span>
                            <span className="card-text">hs.example.com</span>
                        </div>
                    </div>
                </a>

                <div className="dropdown-divider"></div>

                <div className="hs-unfold w-100">
                    <a className="js-hs-unfold-invoker navbar-dropdown-submenu-item dropdown-item d-flex align-items-center" href="./"
                        data-hs-unfold-options='{
           "target": "#navSubmenuPagesAccountDropdown2",
           "event": "hover"
         }'>
                        <span className="text-truncate pr-2" title="Customization">Customization</span>
                        <i className="tio-chevron-right navbar-dropdown-submenu-item-invoker  ml-auto"></i>
                    </a>

                    <div id="navSubmenuPagesAccountDropdown2" className="hs-unfold-content hs-unfold-has-submenu dropdown-unfold dropdown-menu navbar-dropdown-sub-menu">
                        <a className="dropdown-item" href="/#">
                            <span className="text-truncate pr-2" title="Invite people">Invite people</span>
                        </a>
                        <a className="dropdown-item" href="/#">
                            <span className="text-truncate pr-2" title="Analytics">Analytics</span>
                            <i className="tio-open-in-new"></i>
                        </a>
                        <a className="dropdown-item" href="/#">
                            <span className="text-truncate pr-2" title="Customize Front">Customize Front</span>
                            <i className="tio-open-in-new"></i>
                        </a>
                    </div>
                </div>

                <a className="dropdown-item" href="/#">
                    <span className="text-truncate pr-2" title="Manage team">Manage team</span>
                </a>

                <div className="dropdown-divider"></div>

                <div className="dropdown-item pointer" onClick={()=>props.setActivePop(true)}>
                    <span className="text-truncate pr-2" title="Sign out">Sign out</span>
                </div>
            </div>
        </div>
    )
}
export default DropDownUser