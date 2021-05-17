import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Navbar from "./Navbar";
import NavLeft from "./NavLeft";
import NavRight from "./pieces/NavRight";
import Shadow from "./pieces/Shadow";

const NavbarContent = ()=>{
    const [store] = useContext(StoreContext)
    // console.log(store.lateral);
    return(
        <div id="navbarContent">
            <NavRight data={store}/>
            <Navbar/>
            <NavLeft data={store.lateral}/>
            <Shadow/>
        </div>
    )
}
export default NavbarContent