import { FormatShapesOutlined } from "@material-ui/icons";
import React from "react";

const Foter = () => {
    return (
        <div className="footer">
            <div className="row justify-content-between align-items-center">
                <div className="col">
                    <p className="font-size-sm mb-0">&copy; Front. <span className="d-none d-sm-inline-block">2020 Htmlstream.</span></p>
                </div>
                <div className="col-auto">
                    <div className="d-flex justify-content-end">
                        <ul className="list-inline list-separator d-flex">
                            <li className="list-inline-item">
                                <a className="list-separator-link" href="/#">FAQ</a>
                            </li>

                            <li className="list-inline-item">
                                <a className="list-separator-link" href="/#">License</a>
                            </li>

                            <li className="list-inline-item">
                                <FormatShapesOutlined/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Foter