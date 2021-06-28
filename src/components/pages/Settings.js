import React, { useContext, useState } from "react";
import Sidebar from "../../scripts/prototypes/Sidebar";
import { StoreContext } from "../../store/StoreProvider";
import SendData from "./SendData";

var titulos = []
const Settings = ()=>{
    const [store] = useContext(StoreContext)
    const {lateral} = store
    
    const [Send,setSend] = useState(false)
    const [Data,setData] = useState({})
    const [Padres,setPadres] = useState([])
    const [selecPadres,setSelecPadres] = useState('')
    const handdleAdd = ()=>{
        // (active, badge, icon, title, separador, link, list, padre)
        var side = new Sidebar(false, 'new', '', 'Item', false,'/pruebas', [], selecPadres);
        setData(side.add())
        setSend(true)
    }
    const handdleDelete = ()=>{
        // (active, badge, icon, title, separador, link, list, padre)
        var side = new Sidebar(selecPadres);
        setData(side.remove())
        setSend(true)
    }
    const hanndleGetTitle = (data) =>{
        data.forEach((a,z)=>{
            let obj = {}
            obj.title = a.title
            obj.value = z
            titulos.push(obj)
            a.list.forEach((b,y)=>{
                let obj = {}
                obj.title = b.title
                obj.value = z+','+y
                titulos.push(obj)
                b.list.forEach((c,x)=>{
                    let obj = {}
                    obj.title = c.title
                    obj.value = z+','+y+','+x
                    titulos.push(obj)
                    c.list.forEach((d,w)=>{
                        let obj = {}
                        obj.title = d.title
                        obj.value = z+','+y+','+x+','+w
                        titulos.push(obj)
                    })
                })
            })
        })
        // console.log(titulos);
        setPadres(titulos)
    }
    const handdleInicial = ()=>{
        if (Padres.length === 0) {
            hanndleGetTitle(lateral)
        }
    }
    const Selection = ()=>{
        setSelecPadres(window.event.target.value)
    }
    return(
        // <div className="en-contenido w-83 p-20">
        <div className="w-90 p-20 m-auto">
            {handdleInicial()}
            <SendData type={Data.type} setSend={setSend} data={Data} active={Send}/>
            <div className="card card-shadow w-80 m-auto p-20">
                <h5>Menu Lateral</h5>
                <hr/>
                <div className="row w-100">
                    <div className="col col-sm-8 p-10">Agregar nueva lista</div>
                    <div className="col col-sm-4 text-center p-10">
                        <input className="form-check-input form-control h-40" type="checkbox" name="defaultCheck1"/>
                    </div>
                    <div className="col col-sm-8 p-10">Seleccionar padre</div>
                    <div className="col col-sm-4 text-center p-10">
                        <select className="w-100 form-control" value={selecPadres} onChange={()=>Selection()}>
                            <option>Selecciona una opcion</option>
                            <option value="new">Nueva lista</option>
                            {Padres.map((e,index)=>{
                                return(
                                    <option value={e.value} key={'padres'+index}>{e.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col col-sm-8 p-10">Titulo de la lista</div>
                    <div className="col col-sm-4 text-center p-10">
                        {/* <input className="w-100" type="text" name="titulo" id="titulo" placeholder="Titulo de la lista"/> */}
                    </div>
                    <div className="col col-sm-8 p-10">Usar separador</div>
                    <div className="col col-sm-4 text-center p-10">
                        <input className="form-check-input form-control h-40" type="checkbox" name="separador"/>
                    </div>
                    <div className="col col-sm-8 p-10">Etiqueta del item</div>
                    <div className="col col-sm-4 text-center p-10">
                        <input className="w-100" type="text" name="etiqueta" placeholder="Etiqueta de la lista"/>
                    </div>
                    <div className="col col-sm-8 p-10">Icono del item</div>
                    <div className="col col-sm-4 text-center p-10">

                    </div>
                    <div className="col col-sm-8 p-10"></div>
                    <div className="col col-sm-4 text-center p-10">
                        <button className="btn btn-danger" onClick={()=>handdleDelete()}>Eliminar</button>
                        <button className="btn btn-primary ml-2" onClick={()=>handdleAdd()}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Settings