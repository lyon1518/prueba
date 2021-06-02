import { Timeline } from "@material-ui/icons";
import React from "react";
import MainScripts from "../../../scripts/MainComponents";

const IconNav = () => {
    const handdlePop = ()=>{
        MainScripts.handdleActive('activitySidebar','fadeInRight')
        MainScripts.handdlePop('block')
    }
    return (
        <div className="hs-unfold">
            <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="./"
                onClick={()=>handdlePop()}
                data-hs-unfold-options='{
                "target": "#activitySidebar",
                "type": "css-animation",
                "animationIn": "fadeInRight",
                "animationOut": "fadeOutRight",
                "hasOverlay": true,
                "smartPositionOff": true
                }'>
                <i className="tio-voice-line"><Timeline/></i>
            </a>
        </div>
    )
}
export default IconNav