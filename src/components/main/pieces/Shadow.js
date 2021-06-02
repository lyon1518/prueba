import React from "react";
import MainScripts from "../../../scripts/MainComponents";
const Shadow = () => {
    const handdleSahdow = ()=>{
        MainScripts.handdleActive('activitySidebar','fadeInRight')
        MainScripts.handdlePop('none')
    }
    return(
        <div id="modal" className="hs-unfold-overlay" style={{display: 'none'}} onClick={()=>handdleSahdow()}></div>
    )
}
export default Shadow