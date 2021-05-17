import React, { useCallback, useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { Close } from "@material-ui/icons";
import SendData from "../contenidos/SendData";
import Notification from "./Notification";

const Pop = ()=>{
    const [store,dispatch] = useContext(StoreContext)
    const [Send,setSend] = useState(false)
    const handleClose = ()=>{
        handleEfecto()
        setTimeout(() => {
            dispatch({type:'ActivePop',data:{active:false,type:''}})
        }, 600);
    }
    const handleEfecto=useCallback(()=>{
        setTimeout(() => {
            let efecto = document.querySelector('.rm-368')
            // console.log(efecto);
            efecto.classList.toggle('activity')
        }, 300);
    },[])
    
    const handleTypePop = ()=>{
        // console.log(store.pop.type);
        switch (store.pop.type) {
            case 'activity':
                handleEfecto()
                const {activity} = store.NavbarTop
                return(
                    <div className="rm-368 hvh-100 o-auto">
                        <div className="row w-100 p-20">
                            <div className="col col-sm-6">
                                <strong>Activity stream</strong>
                            </div>
                            <div className="col col-sm-6 text-right">
                                <span className="foter-icons" onClick={()=>handleClose()}><Close/></span>
                            </div>
                        </div>
                        {activity.map((e,index)=>{
                            return(
                                <div key={"activity-list-"+index} className="pl-20 pr-20">
                                    <div className="row w-100">
                                        <div className="col col-sm-3">
                                            <div className="icono-activity centrar m-auto">
                                                <div className="w-100 text-center">{e.icon}</div>
                                            </div>
                                            <div className="linea-pop"></div>
                                        </div>
                                        <div className="col col-sm-9 d-grid pb-20">
                                            <strong>{e.title}</strong>
                                            <small>{e.description}</small>
                                            {e.adjuntos.length > 0?
                                            <div className="adjuntos-pop pl-20 pr-20 centrar">
                                                {e.adjuntos.map((f,indice)=>{
                                                    return(
                                                        <div key={"activity-list-"+indice} className="d-grid ml-2">
                                                            <div className="centrar">
                                                                <div className="centrar">
                                                                    <span>{f.icono}</span>
                                                                </div>
                                                                <div className="d-grid ml-2">
                                                                    <small>{f.descripcion}</small>
                                                                    <small>{f.peso}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            :''}
                                            <small>{e.date}</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            case 'error':
                return(
                    <div className="row w-100 sm">
                        <Notification type="warning" text={store.pop.data.messE} button={true} setSend={setSend}/>
                        <SendData type='closePop' setSend={setSend} active={Send}/>
                        {/* <div className="col col-sm-4"></div>
                        <div className="col col-sm-4"></div>
                        <div className="col col-sm-4 sp">
                            <div className="card card-shadow alert-warning p-20 text-center mt-20">
                                <p>{store.pop.data.messE}</p>
                                <button className="btn btn-success w-50 m-auto" onClick={()=>setSend(true)}>Aceptar</button>
                            </div>
                        </div> */}
                    </div>
                )
            case 'pop':
                return(
                    <div className="row w-100 sm">
                        <Notification type={store.pop.data.typeClas} text={store.pop.data.text} button={store.pop.data.button} setSend={setSend} time={store.pop.data.time}/>
                        <SendData type='closePop' setSend={setSend} active={Send}/>
                        {/* <div className="col col-sm-4"></div>
                        <div className="col col-sm-4"></div>
                        <div className="col col-sm-4 sp">
                            <div className={"card card-shadow p-20 text-center mt-20 alert-"+store.pop.data.typeClas}>
                                <p className="sm">{store.pop.data.text}</p>
                                {store.pop.data.button?
                                <button className="btn btn-success w-50 m-auto" onClick={()=>setSend(true)}>Aceptar</button>:''}
                            </div>
                        </div> */}
                    </div>
                )
            default:
                break;
        }
    }
    return(
        <div className="pop">
            {handleTypePop()}
        </div>
    )
}
export default Pop