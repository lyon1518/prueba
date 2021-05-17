import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// import Navbar from "./components/navbs/Navbar-index";
import Login from "./components/contenidos/login";
import { StoreContext } from "./store/StoreProvider";
import NavbarContent from "./components/navbs/NavbarContent";
const RouterApp = ()=>{
    const [store] = useContext(StoreContext)
    const {sesion} = store
    const [Sesion,setSesion] = useState(false)
    useEffect(()=>{
        // console.log('route');
        setSesion(sesion.SignIn)
    },[sesion.SignIn])
    if (!Sesion) {
        return(
            <Login setSesion={setSesion}/>
        )
    }else{
        return(
            <BrowserRouter>
                <NavbarContent/>
                
                <Switch>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default RouterApp