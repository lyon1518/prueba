import React from "react";
import MainScripts from "../../../scripts/MainComponents";

const Language = () => {
    return (
        <div className="hs-unfold">
            <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="./"
                onClick={() => MainScripts.handdleActive('languageDropdown')}
                data-hs-unfold-options='{
      "target": "#languageDropdown",
      "type": "css-animation",
      "animationIn": "slideInDown",
      "hideOnScroll": true
     }'>
                <img className="avatar avatar-xss avatar-circle" src="@@autopath/node_modules/flag-icon-css/flags/1x1/us.svg" alt="Flag" />
            </a>

            <div id="languageDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu navbar-vertical-footer-dropdown hs-unfold-reverse-y" onPointerLeave={() => { MainScripts.handdleActive('languageDropdown') }}>
                <span className="dropdown-header">Select language</span>
                <a className="dropdown-item" href="/#">
                    <img className="avatar avatar-xss avatar-circle mr-2" src="@@autopath/node_modules/flag-icon-css/flags/1x1/us.svg" alt="Flag" />
                    <span className="text-truncate pr-2" title="English">English (US)</span>
                </a>
                <a className="dropdown-item" href="/#">
                    <img className="avatar avatar-xss avatar-circle mr-2" src="@@autopath/node_modules/flag-icon-css/flags/1x1/gb.svg" alt="Flag" />
                    <span className="text-truncate pr-2" title="English">English (UK)</span>
                </a>
                <a className="dropdown-item" href="/#">
                    <img className="avatar avatar-xss avatar-circle mr-2" src="@@autopath/node_modules/flag-icon-css/flags/1x1/de.svg" alt="Flag" />
                    <span className="text-truncate pr-2" title="Deutsch">Deutsch</span>
                </a>
                <a className="dropdown-item" href="/#">
                    <img className="avatar avatar-xss avatar-circle mr-2" src="@@autopath/node_modules/flag-icon-css/flags/1x1/dk.svg" alt="Flag" />
                    <span className="text-truncate pr-2" title="Dansk">Dansk</span>
                </a>
                <a className="dropdown-item" href="/#">
                    <img className="avatar avatar-xss avatar-circle mr-2" src="@@autopath/node_modules/flag-icon-css/flags/1x1/it.svg" alt="Flag" />
                    <span className="text-truncate pr-2" title="Italiano">Italiano</span>
                </a>
                <a className="dropdown-item" href="/#">
                    <img className="avatar avatar-xss avatar-circle mr-2" src="@@autopath/node_modules/flag-icon-css/flags/1x1/cn.svg" alt="Flag" />
                    <span className="text-truncate pr-2" title="中文 (繁體)">中文 (繁體)</span>
                </a>
            </div>
        </div>
    )
}
export default Language