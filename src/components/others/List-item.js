import React from "react";
import { FiberManualRecord } from "@material-ui/icons";

const ListItem = (props)=>{
    return(
        <div className={props.active?"w-100 list-item-active p-8 pl-30 centrar":"w-100 p-8 pl-30 centrar"}>
            <FiberManualRecord className="fz-6"/>
            <div className="ml-2 text-dark-default item-select">{props.name} {props.badge !== ''?<span className="badge">{props.badge}</span>:<div></div>}</div>
        </div>
    )
}
export default ListItem