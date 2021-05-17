import React, { memo, useContext } from "react";
import { MoreHoriz,FiberManualRecord,ArrowLeft } from "@material-ui/icons";
import ListItem from "../others/List-item";
import { StoreContext } from "../../store/StoreProvider";
import { types } from "../../store/StoreReducer";
import Acordeon from "../others/Acordeon";

const NavbarCompress = memo((props)=>{
    const {api} = props
    const [store,dispatch] = useContext(StoreContext)
    const {lateral} = store
    const handleHover = (ateral,atributos,stado)=>{
        lateral[ateral].list[atributos].active = stado
        dispatch({type:types.changeFloat})
        let float = document.querySelector('#float-menu-'+ateral+'-'+atributos)
        if (float !== null) {
            if (float.classList.contains('solo')) {
                float.classList.toggle('oculto')
                let top = window.event.clientY
                float.style.top = top+"px";    
            }else{
                let top = window.event.clientY
                float.style.top = top-10+"px";
            }
        }
    }
    return(
        <div className="navbar-compres">
            <div className={!api.activeLateral?"p-8 text-center fixed-top w-225-px":"p-8 text-center fixed-top w-112-px"}>
                <h2>Logo</h2>
            </div>
                {lateral.map((e,index)=>{
                    return(
                        <div key={'lateral-list'+index}>
                            <div className={e.title !== ''?"nav-title ml-20 p-15":"oculto"}><MoreHoriz/></div>
                            {
                                e.list.map((f,indice)=>{
                                    return(
                                        <div key={'acordeon'+indice} className="d-flex" onMouseEnter={()=>handleHover(index,indice,true)} onMouseLeave={()=>handleHover(index,indice,false)}>
                                            <div className={f.active?"p-10 pl-30 w-100 pointer compres-item compres-item-active":"p-10 pl-30 w-100 pointer compres-item"} >
                                                {f.list.length===0?<span className='pl-10'></span>:<FiberManualRecord className="fz-6"/>} {f.icon}
                                            </div>
                                            {f.list.length===0?
                                                <div className="float-menu pl-1 d-flex oculto solo" id={'float-menu-'+index+'-'+indice}>
                                                    <span><ArrowLeft/></span>
                                                    <div className="label-left">
                                                        {f.title}
                                                    </div>
                                                </div>:
                                                <div className='float-menu' id={'float-menu-'+index+'-'+indice}>
                                                    {f.active?
                                                        <div className="menu-flotante-activo">
                                                            {f.list.map((e,a)=>{
                                                                if (e.list.length > 0) {
                                                                    return(
                                                                        <Acordeon
                                                                        title={e.title}
                                                                        list={e.list}
                                                                        icon={''}
                                                                        badge={e.badge}
                                                                        estilo={'pl-15'}
                                                                        key={'list-float'+a}
                                                                        />
                                                                        // console.log(e);
                                                                    )
                                                                }
                                                                else{
                                                                    return(
                                                                        <ListItem active={e.active} name={e.title} badge={e.badge} key={'list-float'+a}/>
                                                                    )
                                                                }
                                                            })}
                                                        </div>
                                                        :<div></div>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    )
                                })
                            }
                            {e.separador?<hr/>:
                            <div></div>}
                        </div>
                    )
                })}
        </div>
    )
})

export default NavbarCompress