import React, { useContext } from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import Settings from "../contenidos/Settings";
import Default from "../pages/dashboard/Default";
import Navbar from "./Navbar";
import NavLeft from "./NavLeft";
import NavRight from "./pieces/NavRight";
import Shadow from "./pieces/Shadow";

const NavbarContent = () => {
    const [store] = useContext(StoreContext)
    // console.log(store.lateral);
    return (
        <div id="navbarContent">
            <NavRight data={store} />
            <Navbar />
            <NavLeft data={store.lateral} />
            <Shadow />
            <main id="content" role="main" className="main pointer-event">
                <div class="content container-fluid">
                    <h1>contenidos para ver</h1>
                    <Switch>
                        <Route exact path='/' component={Default} />
                        <Route exact path='/settigs' component={Settings} />
                    </Switch>
                </div>
            </main>
            {/* /settigs */}
        </div>
    )
}
export default NavbarContent