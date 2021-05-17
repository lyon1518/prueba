import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import { ExpandMoreRounded, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../others/List-item";

const Acordeon = (props)=>{
    const {title,icon,list,badge,estilo,separador} = props
    // console.log(props);
    return(
        <div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={estilo+' fz-14 centrar name-acordeon'}><FiberManualRecord className="fz-6"/> <span>{icon}</span> <span className="centrar ml-8">{title}</span> {badge === ''?'':<span className="badge centrar ml-10">{badge}</span>}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="list-lateral w-100">
                        {list.map((e,index)=>{
                            if (e.list.length > 0) {
                                return(
                                    <Acordeon
                                    title={e.title}
                                    list={e.list}
                                    icon={e.icon}
                                    badge={e.badge}
                                    estilo={'pl-15'}
                                    key={"list-item"+index}
                                    />
                                )
                            }else{
                                return(
                                    <div key={"list-item"+index}>
                                        <div>
                                            {e.link === ''?
                                            <ListItem active={e.active} name={e.title} badge={e.badge} padd={props.padding}/>:
                                            <Link to={e.link} className={e.active?"w-100 list-item-active p-8 pl-30 centrar":"w-100 p-8 pl-30 centrar"}>
                                                <FiberManualRecord className="fz-6"/>
                                                <div className="ml-2 text-dark-default item-select">{e.title} {e.badge !== ''?<span className="badge">{e.badge}</span>:<div></div>}</div>
                                            </Link>
                                            }
                                        </div>
                                        {e.separador?<hr/>:<div></div>}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </AccordionDetails>
            </Accordion>
            {separador?<hr/>:<div></div>}
        </div>
    )
}
export default Acordeon