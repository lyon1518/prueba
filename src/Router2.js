import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Settings from "./components/contenidos/Settings";
import Default from "./components/pages/dashboard/Default";
// import Tables from "./components/others/Tables";
const RouterApp = (props)=>{
    return(
        <BrowserRouter>
            <Redirect
            from={window.location.pathname}
            to={props.url} />
            <Switch>
                <Route exact path='/' component={Default}/>
                <Route exact path='/settigs' component={Settings}/>
            </Switch>
        </BrowserRouter>
    )
}
export default RouterApp