import { Tune } from "@material-ui/icons";
import React from "react";

const Settings = () => {
    return (
        <div className="hs-unfold" >
            <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="./"
                data-hs-unfold-options='{
                "target": "#styleSwitcherDropdown",
                "type": "css-animation",
                "animationIn": "fadeInRight",
                "animationOut": "fadeOutRight",
                "hasOverlay": true,
                "smartPositionOff": true
                }'>
                <i className="tio-tune"> <Tune/></i>
            </a>
        </div >
    )
}
export default Settings