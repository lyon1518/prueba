import { MoreVert, NotificationsActive } from "@material-ui/icons";
import React from "react";
import MainScripts from "../../../scripts/MainComponents";
import ListNotification from "../../others/navbar/ListNotification";

const Notifications = (props) => {
    const { mensages, archivos, settings } = props?.data?.notificacion
    const handdleChangeTab = (id) => {
        let notificationNavOne = document.querySelector('#notificationNavOne')
        let notificationNavTwo = document.querySelector('#notificationNavTwo')
        let notificationNavOneTab = document.querySelector('#notificationNavOne-tab')
        let notificationNavTwoTab = document.querySelector('#notificationNavTwo-tab')
        switch (id) {
            case 'notificationNavOne':
                notificationNavOne.classList.add('show', 'active')
                notificationNavTwo.classList.remove('show', 'active')
                notificationNavOneTab.classList.add('active')
                notificationNavTwoTab.classList.remove('active')
                break;
            case 'notificationNavTwo':
                notificationNavOne.classList.remove('show', 'active')
                notificationNavTwo.classList.add('show', 'active')
                notificationNavOneTab.classList.remove('active')
                notificationNavTwoTab.classList.add('active')
                break;
            default:
                break;
        }
    }
    const handleOptions = (e) => {
        e.preventDefault()
        let notificationSettingsOneDropdown = document.querySelector('#notificationSettingsOneDropdown')
        if (notificationSettingsOneDropdown.classList.contains("hs-unfold-content-initialized")) {
            notificationSettingsOneDropdown.classList.remove("hs-unfold-content-initialized", "hs-unfold-css-animation", "animated", "slideInUp")
        } else {
            notificationSettingsOneDropdown.classList.add("hs-unfold-content-initialized", "hs-unfold-css-animation", "animated", "slideInUp")
        }
    }
    return (
        <div className="hs-unfold">
            <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="./"
                onClick={()=>{MainScripts.handdleActive('notificationDropdown')}}
                data-hs-unfold-options='{
                    "target": "#notificationDropdown",
                    "type": "css-animation"
                    }'>
                <i className="tio-notifications-on-outlined"><NotificationsActive /></i>
                <span className="btn-status btn-sm-status btn-status-danger"></span>
            </a>

            <div onPointerLeave={()=>{MainScripts.handdleActive('notificationDropdown')}} id="notificationDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu" style={{ width: '25rem', display:'none !important'}}>
            {/* <div onPointerLeave={() => { MainScripts.handdleActive('appsDropdown') }} id="appsDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu" style={{ width: "25rem" }}></div> */}
                <div className="card-header">
                    <span className="card-title h4">Notifications</span>

                    <div className="hs-unfold">
                        <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="./"
                            onClick={handleOptions}
                            data-hs-unfold-options='{
                                "target": "#notificationSettingsOneDropdown",
                                "type": "css-animation"
                            }'>
                            <i className="tio-more-vertical"><MoreVert /></i>
                        </a>
                        <div id="notificationSettingsOneDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right">
                            <span className="dropdown-header">Settings</span>
                            {settings.list.map((e, i) => {
                                return (
                                    <a key={"sttigs" + i} className="dropdown-item" href={e.link}>
                                        <i className="tio-archive dropdown-item-icon">{e.icon}</i> {e.text}
                                    </a>
                                )
                            })}
                            
                            <div className="dropdown-divider"></div>
                            <span className="dropdown-header">Feedback</span>
                            {settings.fedbac.map((e, i) => {
                                return (
                                    <a key={"sttigs" + i} className="dropdown-item" href={e.link}>
                                        <i className="tio-archive dropdown-item-icon">{e.icon}</i> {e.text}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <ul className="nav nav-tabs nav-justified" id="notificationTab" role="tablist">
                    <li className="nav-item">
                        <a onClick={() => handdleChangeTab('notificationNavOne')} className="nav-link active" id="notificationNavOne-tab" data-toggle="tab" href="#notificationNavOne" role="tab" aria-controls="notificationNavOne" aria-selected="true">Messages (3)</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => handdleChangeTab('notificationNavTwo')} className="nav-link" id="notificationNavTwo-tab" data-toggle="tab" href="#notificationNavTwo" role="tab" aria-controls="notificationNavTwo" aria-selected="false">Archived</a>
                    </li>
                </ul>

                <div className="card-body-height">
                    <div className="tab-content" id="notificationTabContent">
                        <div className="tab-pane fade show active" id="notificationNavOne" role="tabpanel" aria-labelledby="notificationNavOne-tab">
                            <ul className="list-group list-group-flush navbar-card-list-group">
                                {mensages.map((e, i) => {
                                    return (
                                        <ListNotification key={"ListNotification" + i} active={e.new} avatar={e.icon} name={e.name} mess={e.descripcion} cita={e.etiqueta} type={e.type} hr={e.hora} link={e.link} badge={e.badge} />
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="tab-pane fade" id="notificationNavTwo" role="tabpanel" aria-labelledby="notificationNavTwo-tab">
                            <ul className="list-group list-group-flush navbar-card-list-group">
                                {archivos.map((e, i) => {
                                    return (
                                        <ListNotification key={"notificationNavTwo" + i} active={e.new} avatar={e.icon} name={e.name} mess={e.descripcion} cita={e.etiqueta} type={e.type} hr={e.hora} link={e.link} badge={e.badge} />
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>

                <a className="card-footer text-center" href="/#">
                    View all notifications
                    <i className="tio-chevron-right"></i>
                </a>
            </div>
        </div>
    )
}
export default Notifications