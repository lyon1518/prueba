import React from "react";

export default function Alert(props) {
    const { icon, text, type, buttons } = props.data
    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalTopCover">
                Top cover modal
            </button>

            <div id="exampleModalTopCover" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalTopCoverTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content h-auto">

                        <div className={"modal-top-cover bg-"+type+" text-center"}>
                            <figure className="position-absolute right-0 bottom-0 left-0" style={{ marginBottom: "-1px" }}>
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                                    <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
                                </svg>
                            </figure>

                            <div className="modal-close">
                                <button type="button" className="btn btn-icon btn-sm btn-ghost-light" data-dismiss="modal" aria-label="Close">
                                    <svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {icon !== ''?
                        <div className="modal-top-cover-icon">
                            <span className="icon icon-lg icon-light icon-circle icon-centered shadow-soft">
                                <i className={"fa fa-"+icon+" text-"+type}></i>
                            </span>
                        </div>
                        :''}

                        <div className="modal-body">
                            <p>{text}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            {buttons?.map((e,i)=>{
                                if(e.action !== ''){
                                    return(
                                        <button key={"buttonss"+i} data-dismiss="modal" type="button" className={"btn btn-"+e.type} onClick={e.action}>{e.text}</button>
                                    )
                                }else{
                                    return(<div key={"buttonss"+i}></div>)
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
