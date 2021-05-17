import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";

const NavFloat = (props)=>{
    const [Interno,setInterno] = useState(false)
    const content = (type,data)=>{
        // console.log(data.data.sarch);
        if (data.data.sarch !== undefined) {
            var {RecentSearch,Members,Tutorials} = data.data.sarch
        }
        switch (type) {
            case 'search':
                return(
                    <div>
                        <div className="search-list">
                            <div className="p-20">
                                <p className="nav-title">RECENT SEARCHES</p>
                                <div className="d-flex">
                                    {RecentSearch.map((e,index)=>{
                                        return(
                                            <div className="recent-search centrar" key={'RecentSearch'+index}>{e}<span className="ml-2">{data.icon}</span></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <hr className="sm"/>
                            <div className="pt-20 pb-20">
                                <p className="nav-title pl-20">TUTORIALS</p>
                                {Tutorials.map((e,index)=>{
                                    return(
                                        <p className="tutorials-search centrar p-2 pl-20 pointer" key={'Tutorials'+index}>
                                            <span className="mr-2 fz-12 cir-icon centrar">{e.icon}</span>
                                            <span className="">{e.name}</span>
                                        </p>
                                    )
                                })}
                            </div>
                            <div className="pt-20 pb-20">
                                <p className="nav-title pl-20">MEMBERS</p>
                                {Members.map((e,index)=>{
                                    return(
                                        <p className="tutorials-search centrar p-2 pl-20 pointer" key={'Tutorials'+index}>
                                            <span className="mr-2 fz-12 centrar">{e.icon}</span>
                                            <span className="fz-12">{e.name}</span>
                                            <span className="ml-2 fz-12 centrar text-facebook">{e.badge}</span>
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="centrar hvh-10 search-all">
                            <Link className="m-auto" to="/">See all results</Link>
                        </div>
                    </div>
                )
            case 'notificacion':
                return(
                    <div className="container-fluid sp">
                        <div className="row p-10 w-100 sm">
                            <div className="col col-sm-6 centrar">
                                <h5>Notifications</h5>
                            </div>
                            <div className="col col-sm-6 centrar">
                                <div className='ml-auto foter-icons' onClick={()=>setInterno(!Interno)}>{data.icon}</div>
                                {Interno?
                                    <NavFloat data={data.data.notificacion.settings} type={data.data.notificacion.settings.type} clase='z-index-1 inter-settings w-198-px'/>:
                                    ''
                                }
                            </div>
                        </div>
                        <hr className="sm"/>
                        <Tabs datos={data.data.notificacion} inicial='mensages'/>
                    </div>
                )
            case 'settings':
                const {list,fedbac} = data.data
                return(
                    <div className="pb-10">
                        <div className="text-left d-grid">
                            <div className="nav-title pl-20 pt-20 pb-10">SETTINGS</div>
                            {list.map((e,index)=>{
                                return(
                                    <div className="p-1 notification-item-lists">
                                        <small className="pl-20" key={"sett"+index}>{e.icon} {e.text}</small>
                                    </div>
                                )
                            })}
                        </div>
                        <hr className="mb-0 mt-20"/>
                        <div className="text-left">
                            <div className="nav-title pl-20 pt-20 pb-10">FEEDBACK</div>
                            {fedbac.map((e,index)=>{
                                return(
                                    <div className="pl-10 pb-10 pt-10 notification-item-lists centrar">
                                        <small className="pl-20" key={"fedbac"+index}>{e.icon} {e.text}</small>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            
            default:
                break;
        }
    }
    return(
        <div className={props.clase+" menu-flotante-activo float-top"}>
            {content(props.type,props)}
        </div>
    )
}
export default NavFloat