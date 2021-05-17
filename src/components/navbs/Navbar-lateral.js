import React, { useState } from "react";
import Acordeon from "../others/Acordeon";
import { Tune,HelpOutlineOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import SendData from "../contenidos/SendData";

const NavbarLateral = (props)=>{
    const {api} = props
    const history = useHistory();
    const [Send,setSend] = useState(false)
    const [Data,setData] = useState({})
    // console.log(api);
    const handdleRedirect = (data)=>{
        setData(data)
        setSend(true)
        history.push(data);
    }
    return(
        <div className="p-relative">
            <SendData type='link' setSend={setSend} data={Data} active={Send}/>
            <div className={!api.activeLateral?"p-8 text-center fixed-top w-225-px":"p-8 text-center fixed-top w-112-px"}>
                <div onClick={()=>handdleRedirect('/')} className="text-dark pointer"><h2>Logo</h2></div>
            </div>
            <div className={!api.activeLateral?"list-item-lateral navbar-lateral w-225-px":"list-item-lateral navbar-lateral"}>
                {api.lateral.map((e,index)=>{
                    return(
                        <div key={'lateral-list'+index}>
                            <div className={e.title !== ''?"nav-title ml-20 p-15":""}>{e.icon} {e.title} {e.badge === ''?'':<span className="badge">{e.badgeSubtitle}</span>}</div>
                            {
                                e?.list.map((f,indice)=>{
                                    return(
                                        <div key={'acordeon'+indice}>
                                            {f.list.length === 0?
                                            <div className="ml-18 pt-3 pb-3 fz-14 name-acordeon">
                                                {f.icon} {f.title} {f.badgeSubtitle === ''?'':<span className="badge">{f.badgeSubtitle}</span>}
                                            </div>:
                                            <Acordeon
                                            title={f.title}
                                            list={f.list}
                                            icon={f.icon}
                                            badge={f.badge}
                                            separador={f.separador}
                                            padding={38}
                                            key={'acordeon'+indice}
                                            />
                                            }
                                        </div>
                                    )
                                })
                            }
                            {e.separador?<hr/>:<div></div>}
                        </div>
                    )
                })}
            </div>
            <div className={!api.activeLateral?"text-center fixed-bottom w-225-px":"text-center fixed-bottom w-112-px"}>
                <div className="w-90 m-auto centrar h-100">
                    <div onClick={()=>handdleRedirect('/settigs')} className="foter-icons ml-auto text-dark"><Tune/></div>
                    <div className="foter-icons"><HelpOutlineOutlined/></div>
                    <div className="foter-icons mr-auto">h</div>
                </div>
            </div>
        </div>
    )
}
export default NavbarLateral