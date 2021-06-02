import { Close } from "@material-ui/icons";
import React from "react";
import MainScripts from "../../../scripts/MainComponents";
import ActivityList from "../../others/navbar/ActivityList";

const NavRight = (props) => {
    const handdleSahdow = (event)=>{
        event.preventDefault()
        MainScripts.handdleActive('activitySidebar','fadeInRight')
        MainScripts.handdlePop('none')
    }
    return (
        <div id="activitySidebar" className="hs-unfold-content sidebar sidebar-bordered sidebar-box-shadow">
            <div className="card card-lg sidebar-card">
                <div className="card-header">
                    <h4 className="card-header-title">Activity stream</h4>

                    <a className="js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-dark ml-2" href="./"
                        onClick={handdleSahdow}
                        data-hs-unfold-options='{
                        "target": "#activitySidebar",
                        "type": "css-animation",
                        "animationIn": "fadeInRight",
                        "animationOut": "fadeOutRight",
                        "hasOverlay": true,
                        "smartPositionOff": true
                        }'>
                        <i className="tio-clear tio-lg"><Close/></i>
                    </a>
                </div>

                <div className="card-body sidebar-body sidebar-scrollbar">
                    <ul className="step step-icon-sm step-avatar-sm">
                        {props.data.NavbarTop.activity.map((e,i)=>{
                            return(
                                <ActivityList key={"ActivityList"+i} data={e}/>
                            )
                        })}
                        
                    </ul>

                    <a className="btn btn-block btn-white" href="./">View all <i className="tio-chevron-right"></i></a>
                </div>
            </div>
        </div>
    )
}
export default NavRight