import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Login from "./components/pages/Login";
import { StoreContext } from "./store/StoreProvider";
// import NavbarContent from "./components/main/NavbarContent";
import GoogleLogin from "./components/pages/GoogleLogin";
const RouterApp = () => {
    const [store] = useContext(StoreContext)
    const { sesion } = store
    return (
        <BrowserRouter>
            {/* {sesion.SignIn ?
                <NavbarContent /> :
                <Login />
            } */}
            <Switch>
                {/* <Route exact path='/' component={Default} /> */}
                <Route exact path='/prueba' component={GoogleLogin} />
            </Switch>
        </BrowserRouter>
    )
}
export default RouterApp