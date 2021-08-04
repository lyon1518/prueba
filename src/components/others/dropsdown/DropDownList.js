import React from "react";

const DropDowList = (props) => {
    const {index,data,dataRow} = props
    return (
        // key={'actionsR5' + i}
        <div className={index === 0 ? "dropdown d-unset mr-auto" : "dropdown d-unset mr-3"} >
            {/* <button className="btn btn-white dropdown-toggle" type="button" id={data?.list?.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
            <button className="btn btn-white" type="button" id={data?.list?.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-1">{data?.list?.icon}</span>
                {data?.list?.label}
            </button>
            <div className="dropdown-menu" aria-labelledby={data?.list?.id}>
                {data?.ItemsList?.map((f, a) => {
                    if (f.component !== '' && f.component !== undefined) {
                        if (f.component !== undefined) {
                            // console.log(f);
                            return(
                                <div key={'itemList' + a}>
                                    <div className="dropdown-item pointer" onClick={()=>dataRow !== undefined? props.actionSelect(f,dataRow):props.actionSelect(f)}>
                                        <span className="mr-1">{f?.icon}</span>
                                        {f?.label}
                                    </div>
                                    {f?.divider ?
                                        <div className="dropdown-divider"></div>
                                        : ''}
                                </div>
                            )
                        }else{
                            return(
                                <div></div>
                            )
                        }
                    }
                    else if (f.action !== '') {
                        return (
                            <div key={'itemList' + a}>
                                <div className="dropdown-item pointer" onClick={f.action}>
                                    <span className="mr-1">{f?.icon}</span>
                                    {f?.label}
                                </div>
                                {f?.divider ?
                                    <div className="dropdown-divider"></div>
                                    : ''}
                            </div>
                        )
                    } else {
                        return (
                            <div key={'itemList' + a}>
                                <a className="dropdown-item" href={f.url}>
                                    <span className="mr-1">{f?.icon}</span>
                                    {f?.label}
                                </a>
                                {f?.divider ?
                                    <div className="dropdown-divider"></div>
                                    : ''}
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default DropDowList