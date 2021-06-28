import { Close } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

const Edit = (props) => {
    const [keys, setKeys] = useState({})
    const [data, setData] = useState([])
    useEffect(() => {
        let keys = Object.keys(props?.data?.data[0])
        setKeys(keys)
        setData(props?.data?.data)
        
    }, [props])
    return (
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header bg-white">
                    <h1 className="mt-2">Edicion</h1>
                    <button onClick={() => props.setSend(true)} type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                        <i className="tio-clear tio-lg"><Close /></i>
                    </button>
                </div>
                <div className="modal-body">
                    {data.map((e,i) => {
                        return (
                            <div key={"fila"+i}>
                                <h1>Fila {i+1}</h1>
                                <form>
                                    {keys.map((f,z) => {
                                        return (
                                            <div className="row form-group" key={"input"+z}>
                                                <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label input-label">
                                                    {f}
                                                    <i className="tio-help-outlined text-body ml-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Displayed on public forums, such as Front."></i>
                                                </label>

                                                <div className="col-sm-9">
                                                    <div className="input-group input-group-sm-down-break">
                                                        <input type="text" className="form-control" name={f} id={f+'-'+i} placeholder={f} aria-label="Your first name" defaultValue={e[f]} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </form>
                                {(i+1) < data.length? <hr />:''}
                            </div>
                        )
                    })}
                </div>
                <div className="modal-footer justify-content-start bg-white">
                    <button onClick={() => props.setSend(true)} type="button" className="btn btn-success" data-dismiss="modal" aria-label="Close">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Edit