import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/pages/Login";
import { StoreContext } from "./store/StoreProvider";
import NavbarContent from "./components/main/NavbarContent";
const RouterApp = ()=>{
    const [store] = useContext(StoreContext)
    const {sesion} = store
    return(
        <BrowserRouter>
            {sesion.SignIn?
            <NavbarContent/>:
            <Login/>
            }
        </BrowserRouter>
    )
}
export default RouterApp