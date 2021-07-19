import { Close } from "@material-ui/icons";
import React, { useCallback, useEffect, useState } from "react";
const setting = [
    { text: 'Fondo', id: 'FondoId' },
    { text: 'Checkbox', id: 'CheckboxId' },
    { text: 'Control de espaciado', id: 'ControlEspaciadoId' },
    { text: 'Paginador', id: 'PaginadorId' },
    { text: 'Buscador', id: 'BuscadorId' }
]
const Settings = (props) => {
    const [Setting, setSetting] = useState(undefined)
    const handleChangeOptions = () => {
        let data = document.querySelector('#setInTable')
        props.setSettingsParams([data[0].checked, data[1].checked, data[2].checked, data[3].checked, data[4].checked])
        props.setSettingsActive(false)
    }
    const activeSettings = useCallback(() => {
        let sett = props.settings
        setting[0].value = sett[0]
        setting[1].value = sett[1]
        setting[2].value = sett[2]
        setting[3].value = sett[3]
        setting[4].value = sett[4]
        // console.log(setting);
        setSetting(setting)
    }, [props])
    useEffect(() => {
        // console.log(props);
        if (props.settings !== undefined) {
            activeSettings()
        }else{
            setSetting(props)
        }

    }, [props, activeSettings])
    if (Setting !== undefined) {
        return (
            <div className="pop">
                {props.settings !== undefined?
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-white">
                                <h1 className="mt-2">Configuración</h1>
                                <button onClick={() => props.setSettingsActive(false)} type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                                    <i className="tio-clear tio-lg"><Close /></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="setInTable">
                                    {Setting.map((e, i) => {
                                        return (
                                            <div className="custom-control custom-checkbox mt-4" key={'Options' + i}>
                                                <input type="checkbox" className="custom-control-input" id={e.id} defaultChecked={e.value} />
                                                <label className="custom-control-label text-dark" htmlFor={e.id}>{e.text}</label>
                                            </div>
                                        )
                                    })}
                                </form>
                            </div>
                            <div className="modal-footer justify-content-start bg-white text-right">
                                <button onClick={() => handleChangeOptions()} type="button" className="btn btn-success" data-dismiss="modal" aria-label="Close">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                    // : <div></div>}
                    : ''} 
                    {props.actions !== undefined?
                    <div>
                        {/* {console.log(Setting)} */}
                        <props.data setActions={props.setActions} selected={props.selected}/>
                    </div>
                    :''}
            </div>
    
        )
    }else{
        return(<div></div>)
    }
}
export default Settings