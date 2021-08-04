import React from "react";
const settings = [
    { id: 'searchSettings', label: 'Buscador' },
    { id: 'checkSettings', label: 'Checkbox' },
    { id: 'pageSettings', label: 'Paginador' },
    { id: 'classSettings', label: 'Clases' },
    { id: 'stylesSettings', label: 'Estilos' },
]
const Options = (props) => {
    const handdleSave = ()=>{
        let arr = []
        let checks = document.querySelector('#OptionsSettings')
        for (let a = 0; a < checks.length-1; a++) {
            arr.push(checks[a].checked)
        }
        // console.log(arr);
        props.setSettingsParams(arr)
        props.close(false)
    }
    return (
        <form id='OptionsSettings'>
            {props?.data?.map((e, i) => {
                if (e !== undefined) {
                    return (
                        <div className="form-group" key={'settings' + i}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id={settings[i].id} className="custom-control-input" defaultChecked />
                                <label className="custom-control-label" htmlFor={settings[i].id}>{settings[i].label}</label>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={'settings' + i}></div>
                    )
                }
            })}
            <div className="modal-footer justify-content-start bg-white text-right">
                <button type="button" className="btn btn-success" onClick={()=>handdleSave()}>
                    Guardar
                </button>
            </div>
        </form>
    )
}
export default Options