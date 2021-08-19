import React, { useContext, useState } from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import Settings from "../pages/Settings";
import Pop from "../others/Pop";
import Default from "../pages/dashboard/Default";
import Foter from "./Foter";
import Navbar from "./Navbar";
import NavLeft from "./NavLeft";
import NavRight from "./pieces/NavRight";
import Shadow from "./pieces/Shadow";
import LayoutBasic from "../pages/Layouts/LayoutBasic";
import GoogleLogin from "../pages/GoogleLogin";

const NavbarContent = () => {
    const [store] = useContext(StoreContext)
    const [ActiveLateral,setActiveLateral] = useState(false)
    return (
        <div id="navbarContent">
            {store.pop.active ?<Pop/>:""}
            <NavRight data={store}/>
            <Navbar ActiveLateral={ActiveLateral} setActiveLateral={setActiveLateral}/>
            <NavLeft data={store.lateral} ActiveLateral={ActiveLateral}/>
            <Shadow />
            <main id="content" role="main" className="main pointer-event">
                <div className="content container-fluid">
                    <Switch>
                        {/* <Route exact path='/' component={Default} /> */}
                        <Route exact path='/settigs' component={Settings} />
                        <Route exact path='/layout' component={LayoutBasic} />
                        <Route exact path='/prueba' component={GoogleLogin} />
                    </Switch>
                    <Foter/>
                </div>
            </main>
            {/* /settigs */}
        </div>
    )
}
export default NavbarContent