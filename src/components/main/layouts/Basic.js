import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import DropDowList from "../../others/dropsdown/DropDownList";
const Basic = (props) => {
    const { data } = props
    const { breadcrums, title, navLeft, navRight, Tabs } = data
    const [Tt, setTt] = useState([])
    const [activeTab, setActiveTab] = useState('')
    useEffect(() => {
        if (title !== undefined) {
            let tit = Object.keys(title).length
            setTt(tit)
        }
        window.document.title = title?.PageTitle
        $('.dropdown-toggle').dropdown()
    }, [title])
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-no-gutter">
                    {breadcrums?.map((e, i) => {
                        return (
                            <li className={(breadcrums.length - 1) === i ? "breadcrumb-item fz-14 active" : "breadcrumb-item fz-14"} key={'bread1' + i}>
                                {e.link !== undefined && e.link !== "" ?
                                    <a className="breadcrumb-link centrar" href={e.link}>
                                        <small className="mr-1">{e.icon}</small>
                                        {e.label}
                                    </a> :
                                    <div>
                                        <span className="mr-1">{e.icon}</span>
                                        {e.label}
                                    </div>
                                }
                            </li>
                        )
                    })}
                </ol>
            </nav>
            {Tt > 0 ?
                <div>
                    <hr />
                    <h2>{title.ContentTitle}</h2>
                </div>
                : ''}
            <div className="row align-items-sm-center mb-4">
                <div className="col-lg-6 mb-2 mb-lg-0">
                    {navLeft?.map((e, i) => {
                        if (e?.list !== undefined) {
                            return (
                                <DropDowList index={i} data={e} key={'actionsL' + i} />
                            )
                        } else {
                            return (
                                e.url === '' ?
                                    <button key={'actions4' + i} id={e.id} type="button" className="btn btn-white mr-3" data-toggle="tooltip" data-placement="top" title="" data-fc-today onClick={e.action}>{e.icon} {e.label}</button> :
                                    <Link key={'actions4' + i} id={e.id} to={e.url} className="btn btn-white mr-3" data-toggle="tooltip" data-placement="top" title="" data-fc-today>{e.icon} {e.label}</Link>

                            )
                        }
                    })}
                </div>
                <div className="col-lg-6 mb-2 mb-lg-0 d-flex">
                    {navRight?.map((e, i) => {
                        if (e?.list !== undefined) {
                            return (
                                <DropDowList index={i} data={e} key={'actionsR' + i} />
                            )
                        } else {
                            return (
                                e.url === '' ?
                                    <button key={'actions' + i} id={e.id} type="button" className={i === 0 ? "btn btn-white ml-auto mr-3" : "btn btn-white mr-3"} data-toggle="tooltip" data-placement="top" title="" data-fc-today onClick={e.action}>{e.icon} {e.label}</button> :
                                    <Link key={'actions' + i} id={e.id} to={e.url} className={i === 0 ? "btn btn-white ml-auto mr-3" : "btn btn-white mr-3"} data-toggle="tooltip" data-placement="top" title="" data-fc-today>{e.icon} {e.label}</Link>
                            )
                        }
                    })}
                </div>
            </div>
            <div className="tabs-conten">
                <div className="row">
                    <div className="col col-xs-12 col-md-10">
                        <div className="text-left">
                            <ul className="nav nav-segment nav-pills mb-1" role="tablist">
                                {Tabs?.map((e, i) => {
                                    return (
                                        <li className="nav-item" key={'tabs' + i} onClick={() => setActiveTab(e.idTab)}>
                                            <a className={i === 0 ? "nav-link active" : "nav-link"} id={e.idTab} data-toggle="pill" href={"#" + e.idContent} role="tab" aria-controls={e.idContent} aria-selected="true">{e.label}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xs-12 col-md-2">
                        {Tabs?.map((e, i) => {
                            if (e?.actions !== undefined) {
                                return (
                                    activeTab === e.idTab ?
                                        <DropDowList index={1} data={e?.actions?.listOptions} key={'actionsT' + i} controls={e} /> :
                                        ''
                                )
                            } else {
                                return (
                                    <div key={'actionsR' + i}></div>
                                )
                            }
                        })}
                    </div>
                </div>
                <hr />
                <div className="tab-content">
                    {Tabs?.map((e, i) => {
                        return (
                            <div key={'tabsContent' + i} className={i === 0?"tab-pane fade show active":"tab-pane fade"} id={e.idContent} role="tabpanel" aria-labelledby={e.idTab}>
                                {e.content}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Basic