import React, { useState } from "react";
import Avatar from "./Avatar";

const Tabs = (props)=>{
    const [Contenido,setContenido] = useState(props.datos[props.inicial])
    const [Type,setType] = useState(props.inicial)
    const {tabs} = props.datos
    const handleActiveTab = (id,type)=>{
    let activo = document.querySelector('.tabs-list-active')
        let tab = document.querySelector('#tabs'+id)
        activo.classList.remove('tabs-list-active')
        tab.classList.add('tabs-list-active')
        setContenido(props.datos[type])
        setType(type)
    }
    const Content = ()=>{
        switch (Type) {
            case 'mensages':
            case 'archivos':
                if (Contenido !== undefined) {
                    return(
                        <div className="hvh-60 o-auto">
                            {Contenido.map((e,index)=>{
                                return(
                                    <div key={'contenido-acordeon'+index} className={e.new?"row w-100 p-20 sm notification-item-lists notification-item-lists-active":"row w-100 p-20 sm notification-item-lists"}>
                                        <div className="col col-sm-2 sp d-flex">
                                            <div className={e.new?"circle-notification circle-notification-new":"circle-notification circle-notification-old"}></div>
                                            <div className="ml-2"><Avatar active={false} avatar={e.icon} color='primary' clases='MuiAvatar-root-content'/></div>
                                        </div>
                                        <div className="col col-sm-7 d-grid text-left">
                                            <strong>{e.name}</strong>
                                            <small>{e.descripcion}</small>
                                        </div>
                                        <div className="col col-sm-3 sp">
                                            <span>
                                                {e.hora}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
                break;
            // case 'archivos':
            //     return(
            //         <div>acrchivoa</div>
            //     )
            default:
                break;
        }
    }
    return(
        <div>
            <div className="d-flex">
                {tabs.map((e,index)=>{
                    return(
                        <div key={'tabs'+index} id={'tabs'+index} className={e.activo?"tabs-list tabs-list-active":"tabs-list"} onClick={()=>handleActiveTab(index,e.type)}>{e.name}<span>{e.cant !== ''?' ('+e.cant+') ':''}</span></div>
                    )
                })}
            </div>
            <div>
                {Content()}
            </div>
        </div>
    )
}
export default Tabs
