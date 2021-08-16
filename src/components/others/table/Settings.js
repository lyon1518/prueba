import { Close } from "@material-ui/icons";
import React from "react";
const Settings = (props) => {
    const { component, data } = props.data
    return (
        <div className="pop">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-white">
                        <h1 className="mt-2">
                            {component?.icon !== '' ?
                                <span className={"mr-2 fa fa-" + component?.icon}></span>
                                : ''}
                            {component?.label}
                        </h1>
                        <button onClick={() => props.setActions(false)} type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                            <i className="tio-clear tio-lg"><Close /></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        {component?.component !== undefined ?
                            < component.component data={data} setSettingsParams={props.setSettingsParams} close={props.setActions} />
                            : ''}
                    </div>
                    {/* <div className="modal-footer justify-content-start bg-white text-right">
                        <button type="button" className="btn btn-success" data-dismiss="modal" aria-label="Close">
                            Guardar
                        </button>
                    </div> */}
                </div>
            </div>

        </div>

    )

}
export default Settings