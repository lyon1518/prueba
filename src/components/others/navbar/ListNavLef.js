import { MoreHoriz } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const ListNavLef = (props) => {
    // const handdleEevent = ()=>{
    //     console.log('prueba');
    // }
    const handdleNav = (id) => {
        window.event.preventDefault()
        let ids = []
        for (let a = 0; a < window.event.path.length; a++) {
            if (window.event.path[a].id !== "" && window.event.path[a].id !== undefined) {
                ids.push(window.event.path[a].id)
            }
        }
        console.log(id);
        let list = document.querySelector('#' + ids[0])
        let minimode = document.querySelector('.navbar-vertical-aside-mini-mode')
        if (list !== undefined && list !== null) {
            list.classList.toggle('show')
            if (minimode !== undefined) {
                if (list.children[1] !== undefined) {
                    if (list.children[1].style.display === "block") {
                        list.children[1].style = "display:none"
                    } else {
                        list.children[1].style = "display:block"
                        let top = window.event.clientY - 20
                        list.children[1].style.top = top + "px";
                        if (list.children[1].classList.contains('tooltip')) {
                            list.children[1].style.width = "max-content";
                            list.children[1].style.left = "90px";
                            list.children[1].style.display = "block";
                            list.children[1].classList.toggle('show');
                        }
                    }
                }
            }
        }

    }
    return (
        <ul className="navbar-nav navbar-nav-lg nav-tabs">
            {props.data.map((e, i) => {
                return (
                    <ul className="navbar-nav navbar-nav-lg nav-tabs" key={"nvbtbs" + i}>
                        {e.title !== undefined || e.title !== '' ?
                            <li className="nav-item">
                                <small className={e.title !== ""?"nav-subtitle":"sp"} title="Pages">{e.title}</small>
                                <small className="tio-more-horizontal nav-subtitle-replacer"><MoreHoriz /></small>
                            </li> : <div></div>
                        }
                        {e.list.map((f, z) => {
                            return (
                                !props.ActiveLateral ?
                                    <li id={"nvl2" + z + f.title} className="navbar-vertical-aside-has-menu" onClick={() => handdleNav("nvl2" + z + f.title)} key={"nvl2" + z}>:

                                        {f.list.length === 0 ?
                                            <Link className={f.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} to={f.link} title="Apps">
                                                <i className="tio-apps nav-icon">{f.icon}</i>
                                                <span className="text-truncate">{f.title} <span className="badge badge-info badge-pill ml-1">{f.badge}</span></span>
                                            </Link> :
                                            <div className={f.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} title="Apps">
                                                <i className="tio-apps nav-icon">{f.icon}</i>
                                                <span className="text-truncate">{f.title} <span className="badge badge-info badge-pill ml-1">{f.badge}</span></span>
                                            </div>
                                        }
                                        <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                            {f.list.map((g, y) => {
                                                return (
                                                    <li id={"nvl3" + f.title + y + g.title} className="navbar-vertical-aside-has-menu" key={"nvl3" + y}>
                                                        {g.list.length === 0 ?
                                                            <Link className={g.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} to={g.link} title={g.title}>
                                                                <span className="tio-circle nav-indicator-icon">{g.icon}</span>
                                                                <span className="text-truncate">{g.title} <span className="badge badge-info badge-pill ml-1">{g.badge}</span></span>
                                                            </Link> :
                                                            <div className={g.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} title={g.title}>
                                                                <span className="tio-circle nav-indicator-icon">{g.icon}</span>
                                                                <span className="text-truncate">{g.title} <span className="badge badge-info badge-pill ml-1">{g.badge}</span></span>
                                                            </div>
                                                        }
                                                        <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                                            {g.list.map((h, x) => {
                                                                return (
                                                                    <li id={"nvl4" + g.title + x + h.title} className="navbar-vertical-aside-has-menu" key={"nvl4" + x}>
                                                                        {h.list.length === 0 ?
                                                                            <Link className={h.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} to={h.link} title={h.title}>
                                                                                <span className="tio-circle nav-indicator-icon">{h.icon}</span>
                                                                                <span className="text-truncate">{h.title}<span className="badge badge-info badge-pill ml-1">{h.badge}</span></span>
                                                                            </Link> :
                                                                            <div className={h.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} title={h.title}>
                                                                                <span className="tio-circle nav-indicator-icon">{h.icon}</span>
                                                                                <span className="text-truncate">{h.title}<span className="badge badge-info badge-pill ml-1">{h.badge}</span></span>
                                                                            </div>
                                                                        }
                                                                        <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                                                            {h.list.map((i, w) => {
                                                                                return (
                                                                                    <li id={"nvl5" + h.title + w + i.title} className="navbar-vertical-aside-has-menu" key={"nvl5" + w}>
                                                                                        <Link className={i.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} to={i.link} title={i.title}>
                                                                                            <span className="tio-circle nav-indicator-icon">{i.icon}</span>
                                                                                            <span className="text-truncate">{i.title}<span className="badge badge-info badge-pill ml-1">{i.badge}</span></span>
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            })}

                                                                        </ul>
                                                                    </li>
                                                                )
                                                            })}

                                                        </ul>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li> :
                                    <li id={"nvl2" + z + f.title.replace(' ', '')} className="navbar-vertical-aside-has-menu" onMouseOver={() => handdleNav("nvl2" + z + f.title)} key={"nvl2" + z}>
                                        {f.list.length === 0 ?
                                            <Link className={f.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} to={f.link} title="Apps">
                                                <i className="tio-apps nav-icon">{f.icon}</i>
                                                <span className="text-truncate">{f.title} <span className="badge badge-info badge-pill ml-1">{f.badge}</span></span>
                                            </Link> :
                                            <div className={f.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} title="Apps">
                                                <i className="tio-apps nav-icon">{f.icon}</i>
                                                <span className="text-truncate">{f.title} <span className="badge badge-info badge-pill ml-1">{f.badge}</span></span>
                                            </div>
                                        }
                                        {f.list.length === 0 ?
                                            // <div id={"tooltip"+f.title} className="tooltip fade show bs-tooltip-right" role="tooltip" style={{ position: "absolute", transform: "translate3d(83px, 301px, 0px)", top: "0px", left: "0px", willChange: "transform", width: "max-content" }} x-placement="right">
                                            <div id={"tooltip" + f.title} className="tooltip fade bs-tooltip-right" role="tooltip" x-placement="right">
                                                <div className="arrow" style={{ top: "8px" }}></div>
                                                <div className="tooltip-inner">{f.title}</div>
                                            </div> : ''
                                        }
                                        <ul className="js-navbar-vertical-aside-submenu nav nav-sub" onBlur={() => handdleNav("nvl2" + z + f.title)}>
                                            {f.list.map((g, y) => {
                                                return (
                                                    <li id={"nvl3" + f.title + y + g.title} className="navbar-vertical-aside-has-menu" key={"nvl3" + y}>
                                                        {g.list.length === 0 ?
                                                            <Link className={g.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} to={g.link} title={g.title}>
                                                                <span className="tio-circle nav-indicator-icon">{g.icon}</span>
                                                                <span className="text-truncate">{g.title} <span className="badge badge-info badge-pill ml-1">{g.badge}</span></span>
                                                            </Link> :
                                                            <div className={g.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} title={g.title}>
                                                                <span className="tio-circle nav-indicator-icon">{g.icon}</span>
                                                                <span className="text-truncate">{g.title} <span className="badge badge-info badge-pill ml-1">{g.badge}</span></span>
                                                            </div>
                                                        }
                                                        <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                                            {g.list.map((h, x) => {
                                                                return (
                                                                    <li id={"nvl4" + g.title + x + h.title} className="navbar-vertical-aside-has-menu" key={"nvl4" + x}>
                                                                        {h.list.length === 0 ?
                                                                            <Link className={h.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} to={h.link} title={h.title}>
                                                                                <span className="tio-circle nav-indicator-icon">{h.icon}</span>
                                                                                <span className="text-truncate">{h.title}<span className="badge badge-info badge-pill ml-1">{h.badge}</span></span>
                                                                            </Link> :
                                                                            <div className={h.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} title={h.title}>
                                                                                <span className="tio-circle nav-indicator-icon">{h.icon}</span>
                                                                                <span className="text-truncate">{h.title}<span className="badge badge-info badge-pill ml-1">{h.badge}</span></span>
                                                                            </div>
                                                                        }
                                                                        <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                                                            {h.list.map((i, w) => {
                                                                                return (
                                                                                    <li id={"nvl5" + h.title + w + i.title} className="navbar-vertical-aside-has-menu" key={"nvl5" + w}>
                                                                                        <Link className={i.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} to={i.link} title={i.title}>
                                                                                            <span className="tio-circle nav-indicator-icon">{i.icon}</span>
                                                                                            <span className="text-truncate">{i.title}<span className="badge badge-info badge-pill ml-1">{i.badge}</span></span>
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            })}

                                                                        </ul>
                                                                    </li>
                                                                )
                                                            })}

                                                        </ul>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                            )
                        })}
                    </ul>
                )
            })}
        </ul>
    )
}
export default ListNavLef