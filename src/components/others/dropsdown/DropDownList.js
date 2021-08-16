import React from "react";

const DropDowList = (props) => {
    const { index, data, dataRow } = props
    return (
        // key={'actionsR5' + i}
        <div className={index === 0 ? "dropdown d-unset mr-auto " : "dropdown d-unset mr-3"} >
            {/* <button className="btn btn-white dropdown-toggle" type="button" id={data?.list?.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
            <button className="btn btn-white" type="button" id={data?.list?.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {data?.list?.icon !== '' ?
                    <span className={"mr-1 fa fa-" + data?.list?.icon}></span>
                    : ''}
                {data?.list?.label}
                {data?.list?.down ?
                    <span className="fa fa-angle-down ml-2"></span>
                    : ''}
            </button>
            <div className="dropdown-menu" aria-labelledby={data?.list?.id}>
                {data?.ItemsList?.map((f, a) => {
                    if (f.component !== '' && f.component !== undefined) {
                        if (f.component !== undefined) {
                            return (
                                <div key={'itemList' + a}>
                                    <div className="dropdown-item pointer d-flex" onClick={() => dataRow !== undefined ? props.actionSelect(f, dataRow) : props.actionSelect(f)}>
                                        {f?.icon !== '' ?
                                            <span className={"mr-1 fa fa-" + f?.icon}></span>
                                            : ''}
                                        {f?.label}
                                    </div>
                                    {f?.divider ?
                                        <div className="dropdown-divider"></div>
                                        : ''}
                                </div>
                            )
                        } else {
                            return (
                                <div></div>
                            )
                        }
                    }
                    else if (f.action !== '') {
                        return (
                            <div key={'itemList' + a}>
                                <div className="dropdown-item pointer d-flex" onClick={f.action}>
                                    {f?.icon !== '' ?
                                        <span className={"mr-1 fa fa-" + f?.icon}></span>
                                        : ''}
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
                                    {f?.icon !== '' ?
                                        <span className={"mr-1 fa fa-" + f?.icon}></span>
                                        : ''}
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