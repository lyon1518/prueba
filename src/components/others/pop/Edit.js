import React, { useEffect, useState } from "react";

const Edit = (props) => {
    const [keys, setKeys] = useState({})
    const [data, setData] = useState([])
    useEffect(() => {
        // console.log(props);
        let keys = []
        let arr = []
        if (props.data.name !== undefined) {
            keys = Object.keys(props?.data)
            arr.push(props?.data)
        }else{
            keys = Object.keys(props?.data[0])
            arr = props.data
        }
        setKeys(keys)
        setData(arr)

    }, [props])
    return (
        <div className="modal-body">
            {data?.map((e, i) => {
                return (
                    <div key={"fila" + i}>
                        <h1>Fila {i + 1}</h1>
                        <form>
                            {keys.map((f, z) => {
                                return (
                                    <div className="row form-group" key={"input" + z}>
                                        <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label input-label">
                                            {f}
                                            <i className="tio-help-outlined text-body ml-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Displayed on public forums, such as Front."></i>
                                        </label>

                                        <div className="col-sm-9">
                                            <div className="input-group input-group-sm-down-break">
                                                <input type="text" className="form-control" name={f} id={f + '-' + i} placeholder={f} aria-label="Your first name" defaultValue={e[f]} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </form>
                        {(i + 1) < data.length ? <hr /> : ''}
                    </div>
                )
            })}
        </div>
    )
}
export default Edit