import { Close } from "@material-ui/icons";
import React from "react";
import MainScripts from "../../scripts/MainComponents";
import ListNavLef from "../others/navbar/ListNavLef";
import Help from "./pieces/Help";
import Language from "./pieces/Language";
import Settings from "./pieces/Settings";
const NavLeft = (props) => {
    return (
        <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered navbar-vertical-aside-initialized">
            <div className="navbar-vertical-container">
                <div className="navbar-vertical-footer-offset">
                    <div className="navbar-brand-wrapper justify-content-between">
                        <a className="navbar-brand" href="@@autopath/index.html" aria-label="Front">
                            <img className="navbar-brand-logo" src="@@autopath/assets/svg/logos/logo-belieff.svg" alt="Logo" />
                            <img className="navbar-brand-logo-mini" src="@@autopath/assets/svg/logos/logo-belieff-short.svg" alt="Logo" />
                        </a>

                        <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark"
                            onClick={() => MainScripts.handdleActiveLateral()}>
                            <i className="tio-clear tio-lg"><Close/></i>
                        </button>
                    </div>

                    <div className="navbar-vertical-content">
                        <ListNavLef data={props.data} ActiveLateral={props.ActiveLateral}/>
                    </div>

                    <div className="navbar-vertical-footer">
                        <ul className="navbar-vertical-footer-list">
                            <li className="navbar-vertical-footer-list-item">
                                <Settings/>
                                {/* @@include("../layouts-components/sidebar-builder-toggle-ghost-secondary.html") */}
                            </li>

                            <li className="navbar-vertical-footer-list-item">
                                {/* @@include("../layouts-components/dropdown-help.html") */}
                                <Help/>
                            </li>

                            <li className="navbar-vertical-footer-list-item">
                                {/* @@include("../layouts-components/dropdown-language.html") */}
                                <Language/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default NavLeft