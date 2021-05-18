import { BookOutlined, ChatOutlined, FormatShapes, GifSharp, HelpOutline, ShowChart } from "@material-ui/icons";
import React from "react";
import MainScripts from "../../../scripts/MainComponents";

const Help = () => {
    return (
        <div className="hs-unfold">
            <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="./"
                onClick={()=>MainScripts.handdleActive('otherLinksDropdown')}
                data-hs-unfold-options='{
                "target": "#otherLinksDropdown",
                "type": "css-animation",
                "animationIn": "slideInDown",
                "hideOnScroll": true
                }'>
                <i className="tio-help-outlined"><HelpOutline/></i>
            </a>

            <div id="otherLinksDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu navbar-vertical-footer-dropdown hs-unfold-reverse-y" onPointerLeave={()=>{MainScripts.handdleActive('otherLinksDropdown')}}>
                <span className="dropdown-header">Help</span>
                <a className="dropdown-item" href="/#">
                    <i className="tio-book-outlined dropdown-item-icon"><BookOutlined/></i>
                    <span className="text-truncate pr-2" title="Resources &amp; tutorials">Resources &amp; tutorials</span>
                </a>
                <a className="dropdown-item" href="/#">
                    <i className="tio-command-key dropdown-item-icon"><FormatShapes/></i>
                    <span className="text-truncate pr-2" title="Keyboard shortcuts">Keyboard shortcuts</span>
                </a>
                <a className="dropdown-item" href="/#">
                    <i className="tio-alt dropdown-item-icon"><ShowChart/></i>
                    <span className="text-truncate pr-2" title="Connect other apps">Connect other apps</span>
                </a>
                <a className="dropdown-item" href="/#">
                    <i className="tio-gift dropdown-item-icon"><GifSharp/></i>
                    <span className="text-truncate pr-2" title="What's new?">What's new?</span>
                </a>
                <div className="dropdown-divider"></div>
                <span className="dropdown-header">Contacts</span>
                <a className="dropdown-item" href="/#">
                    <i className="tio-chat-outlined dropdown-item-icon"><ChatOutlined/></i>
                    <span className="text-truncate pr-2" title="Contact support">Contact support</span>
                </a>
            </div>
        </div>
    )
}
export default Help