import React, { useContext, useState } from "react";
import { LastPage,FirstPage,SearchOutlined,NotificationsActive,ViewModule,Timeline,Close,MoreVert } from "@material-ui/icons";
import { types } from "../../store/StoreReducer";
import { StoreContext } from "../../store/StoreProvider";
import NavFloat from "../others/NavFloat";
import DropDown from "../others/DropDown";
import Avatar from "../others/Avatar";
import Badge from '@material-ui/core/Badge';

const NavbarTop = ()=>{
    const [store,dispatch] = useContext(StoreContext)
    const [Lateral, setLateral] = useState(false)
    const [Search, setSearch] = useState(false)
    const handleLateral = ()=>{
        setLateral(!Lateral); 
        dispatch({type:types.changeStateNavbarVertical,data:!Lateral})
    }
    
    const handlePop=()=>{
        dispatch({type:types.ActivePop,data:{active:!store.pop.active,type:'activity'}})
    }
    return(
        <div className="p-2 border container-fluid navbar-top">
            <div className="row w-100">
                <div className="col col-sm-4 centrar">
                    {Lateral?
                    <div className='pointer' onClick={()=>handleLateral()}><LastPage/></div>
                    :<div className='pointer' onClick={()=>handleLateral()}><FirstPage/></div>}
                    <div className="input-group ml-10 search search-active p-relative">
                        <div className="input-group-prepend">
                            <span className="input-group-text search-inter"><SearchOutlined/></span>
                        </div>
                        <input type="text" className="form-control search-inter" placeholder="Search in front" onFocus={()=>setSearch(true)} onBlur={()=>setSearch(false)}/>
                        <div className="input-group-append ">
                            <span className="input-group-text search-inter">
                                {Search?<span className="pointer" onClick={()=>setSearch(false)}><Close/></span>:''}
                            </span>
                        </div>
                        {Search?<NavFloat data={store} type='search' icon={<SearchOutlined className="fz-13"/>} clase="w-100"/>:''}
                    </div>
                </div>
                <div className="col col-sm-8 text-rigth centrar sp">
                    <div className="ml-auto centrar">
                        
                        <DropDown icon={<Badge color="secondary" variant="dot" invisible={false}><NotificationsActive/></Badge>} 
                        position='rigth-position-0' data={store} type='notificacion' more={<MoreVert/>} width="60%"/>
                        <DropDown icon={<ViewModule/>} position='rigth-position-1' data={store} type='app'/>
                        <div className="w-42-px mr-8 foter-icons ">
                            <div onClick={()=>handlePop()}>
                                <Timeline/>
                            </div>
                            
                        </div>
                        <DropDown icon={<Avatar active={true} avatar='H' clases='MuiAvatar-root-navbar'/>} position='rigth-position-2' type='sesion'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavbarTop