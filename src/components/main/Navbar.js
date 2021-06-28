import { FirstPage, LastPage,SearchOutlined } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Apps from "./pieces/Apps";
import Notifications from "./pieces/Notifications";
import DropDownUser from "./pieces/DropDownUser";
import Icon from "./pieces/Icon";
import Search from "./pieces/Search";
import MainScripts from "../../scripts/MainComponents";
import SendData from "../pages/SendData";

const Navbar = (props) => {
    const [store] = useContext(StoreContext)
    const [ActivePop, setActivePop] = useState(false)
    const handdleCompress=()=>{
        MainScripts.handdleActiveLateral()
        props.setActiveLateral(!props.ActiveLateral)
    }
    return (
        <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered">
            <SendData type="singOut" setActivePop={setActivePop} data="" active={ActivePop}/>
            <div className="navbar-nav-wrap">
                <div className="navbar-brand-wrapper">
                    {/* @@include("../layouts-components/navbar-logo.html") */}
                    <a className="navbar-brand" href="./" aria-label="Front">
                        {/* LOGO */}
                        <img className="navbar-brand-logo" src="./" alt="Logo" />
                        {/* <img className="navbar-brand-logo-mini" src="./" alt="Logo"/> */}
                    </a>
                </div>

                <div className="navbar-nav-wrap-content-left">
                    {/* @@include("../layouts-components/navbar-vertical-aside-toggle.html") */}
                    <button type="button" className="js-navbar-vertical-aside-toggle-invoker close mr-3" onClick={() => handdleCompress()}>
                        <i className="tio-first-page navbar-vertical-aside-toggle-short-align">
                            <FirstPage />
                        </i>
                        <i className="tio-last-page navbar-vertical-aside-toggle-full-align" data-template='<div className="tooltip d-none d-sm-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>'>
                            <LastPage />
                        </i>
                    </button>
                    <div className="d-none d-md-block">
                        <Search data={store} />
                    </div>
                </div>

                <div className="navbar-nav-wrap-content-right">
                    <ul className="navbar-nav align-items-center flex-row">
                        <li className="nav-item d-md-none">
                            {/* @@include("../layouts-components/mobile-search-toggle.html") */}
                            <div className="hs-unfold">
                                <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="./"
                                    data-hs-unfold-options='{
                                    "target": "#searchDropdown",
                                    "type": "css-animation",
                                    "animationIn": "fadeIn",
                                    "hasOverlay": "rgba(46, 52, 81, 0.1)",
                                    "closeBreakpoint": "md"
                                    }'>
                                    <i className="tio-search">
                                        <SearchOutlined/>
                                    </i>
                                </a>
                            </div>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                            <Notifications data={store}/>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                            {/* @@include("../layouts-components/dropdown-apps.html") */}
                            <Apps data={store}/>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                            {/* @@include("../layouts-components/sidebar-activity-toggle.html") */}
                            <Icon/>
                        </li>

                        <li className="nav-item">
                            {/* @@include("../layouts-components/dropdown-user.html") */}
                            <DropDownUser setActivePop={setActivePop}/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Navbar