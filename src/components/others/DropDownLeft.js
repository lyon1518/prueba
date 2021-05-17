import React, { useState } from "react"
import { ChevronRight } from "@material-ui/icons";

const DropDownLeft = (props)=>{
    const [Left,setLeft] = useState(false)
    const conten = (data)=>{
        switch (data) {
            case 'status':
                return(
                    <div className="btn-group dropleft w-100">
                        <div className="centrar notification-item-lists w-100 pl-4" onClick={()=>setLeft(!Left)}>
                            <small className="col col-md-9 text-left">Set status</small>
                            <div className="col col-md-3 text-right"><ChevronRight/></div>
                        </div>
                        <div className={Left?"dropdown-menu card-shadow d-block":"dropdown-menu card-shadow oculto"}>
                            <div className="notification-item-lists p-1 pl-40 centrar">
                                <div className="cir-status bg-success"></div>
                                <small className="ml-2">Available</small>
                            </div>
                            <div className="notification-item-lists p-1 pl-40 centrar">
                                <div className="cir-status bg-danger"></div>
                                <small className="ml-2">Busy</small>
                            </div>
                            <div className="notification-item-lists p-1 pl-40 centrar">
                                <div className="cir-status bg-warning"></div>
                                <small className="ml-2">Await</small>
                            </div>
                            <hr className="sm"/>
                            <div className="notification-item-lists p-1 pl-40 centrar"><small>Reset status</small></div>
                        </div>
                    </div>
                )
            case 'cutomization':
                return(
                    <div className="btn-group dropleft w-100">
                        <div className="centrar notification-item-lists w-100 pl-4" onClick={()=>setLeft(!Left)}>
                            <small className="col col-md-9 text-left">Customization</small>
                            <div className="col col-md-3 text-right"><ChevronRight/></div>
                        </div>
                        <div className={Left?"dropdown-menu card-shadow d-block":"dropdown-menu card-shadow oculto"}>
                            <div className="notification-item-lists p-1 pl-40 centrar">
                                <small className="ml-2">Invite people</small>
                            </div>
                            <div className="notification-item-lists p-1 pl-40 centrar">
                                <small className="ml-2">Analytics</small>
                            </div>
                            <div className="notification-item-lists p-1 pl-40 centrar">
                                <small className="ml-2">Customized Front</small>
                            </div>
                        </div>
                    </div>
                )
            default:
                break;
        }
    }
    return(
        <div>
            {conten(props.type)}
        </div>
    )
}
export default DropDownLeft