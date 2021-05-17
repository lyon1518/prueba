import React from "react";

const ListNavLef = (props) => {
    const handdleNav = (id) => {
        window.event.preventDefault()
        let ids = []
        for (let a = 0; a < window.event.path.length; a++) {
            if (window.event.path[a].id !== "" && window.event.path[a].id !== undefined) {
                ids.push(window.event.path[a].id)
            }
        }
        let list = document.querySelector('#' + ids[0])
        list.classList.toggle('show')
    }
    return (
        <ul className="navbar-nav navbar-nav-lg nav-tabs">
            {props.data.map((e, i) => {
                return (
                    <ul className="navbar-nav navbar-nav-lg nav-tabs" key={"nvbtbs" + i}>
                        <li className="nav-item">
                            <small className="nav-subtitle" title="Pages">{e.title}</small>
                            <small className="tio-more-horizontal nav-subtitle-replacer"></small>
                        </li>
                        {e.list.map((f, z) => {
                            return (
                                <li id={"nvl2" + z + f.title} className="navbar-vertical-aside-has-menu" onClick={() => handdleNav("nvl2" + z + f.title)} key={"nvl2" + z}>
                                    <a className={f.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} href={f.link} title="Apps">
                                        <i className="tio-apps nav-icon">{f.icon}</i>
                                        <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">{f.title} <span className="badge badge-info badge-pill ml-1">{f.badge}</span></span>
                                    </a>

                                    <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                        {f.list.map((g, y) => {
                                            return (
                                                <li id={"nvl3" + f.title + y + g.title} className="navbar-vertical-aside-has-menu" key={"nvl3" + y}>
                                                    <a className={g.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} href={g.link} title={g.title}>
                                                        <span className="tio-circle nav-indicator-icon">{g.icon}</span>
                                                        <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">{g.title} <span className="badge badge-info badge-pill ml-1">{g.badge}</span></span>
                                                    </a>
                                                    <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                                        {g.list.map((h, x) => {
                                                            return (
                                                                <li id={"nvl4" + g.title + x + h.title} className="navbar-vertical-aside-has-menu" key={"nvl4" + x}>
                                                                    <a className={h.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} href={h.link} title={h.title}>
                                                                        <span className="tio-circle nav-indicator-icon">{h.icon}</span>
                                                                        <span className="text-truncate">{h.title}<span className="badge badge-info badge-pill ml-1">{h.badge}</span></span>
                                                                    </a>
                                                                    <ul className="js-navbar-vertical-aside-submenu nav nav-sub">
                                                                        {h.list.map((i, w) => {
                                                                            return (
                                                                                <li id={"nvl5" + h.title + w + i.title} className="navbar-vertical-aside-has-menu" key={"nvl5" + w}>
                                                                                    <a className={i.list.length > 0 ? "js-navbar-vertical-aside-menu-link nav-link nav-link-toggle" : "nav-link"} href={i.link} title={i.title}>
                                                                                        <span className="tio-circle nav-indicator-icon">{i.icon}</span>
                                                                                        <span className="text-truncate">{i.title}<span className="badge badge-info badge-pill ml-1">{i.badge}</span></span>
                                                                                    </a>
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