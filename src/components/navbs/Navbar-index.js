import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import NavbarLateral from "./Navbar-lateral";
import NavbarTop from "./Navbar-top";
import NavbarCompress from "./Navbar-compress";
import Pop from "../others/Pop";
import { useMediaQuery } from "@material-ui/core";
// import Settings from "../contenidos/Settings";
import Router2 from "../../Router2";
const NavbarIndex = () => {
    const [store] = useContext(StoreContext)
    const { activeLateral } = store
    const matches = useMediaQuery('(max-width:1200px)');
    return (
        <div className="container-fluid sp navbar-index">
            {store.pop.active ? <Pop /> : ''}
            {matches ?
                <div>
                    <NavbarTop />
                    {/* <h1>Movil {matches}</h1> */}
                    <div className="p-20">
                        <Router2 url={store.linkUrl}/>
                    </div>
                </div>
                :
                <div className="row w-100 m-auto">
                    <div className={!activeLateral ? "col col-sm-2 sp border hvh-100" : "col col-sm-1 sp border hvh-100"}>
                        {!activeLateral ?
                            <NavbarLateral api={store} /> :
                            <NavbarCompress api={store} />
                        }
                    </div>
                    <div className={!activeLateral ? "col col-sm-10 sp border" : "col col-sm-11 sp border"}>
                        <NavbarTop />

                        {/* <h1>PC {matches}</h1> */}
                        <div className="p-20">
                            <Router2 url={store.linkUrl}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default NavbarIndex