import { Home } from "@material-ui/icons";
import React, { useCallback, useEffect, useState } from "react";
import Layout1 from "../../../scripts/prototypes/Layouts/Layout1";
import DropDowList from "../../../scripts/prototypes/Layouts/DropDowList";
import Basic from "../../main/layouts/Basic";
import Default from "../dashboard/Default";

const LayoutBasic = () => {
    const [breadc,setBreadc] = useState({})
    const getData = useCallback(()=>{
        let Layout = new Layout1()
        // Layout.createLayout()
        Layout.addBreadcrum('Home','/',<Home/>)
        Layout.addBreadcrum('Users','/')
        Layout.addBreadcrum('Overview')
        Layout.setTitle('Layout','Layout1')
        Layout.addNavItemLef('prueba','id1',<Home/>,'/')
        Layout.addNavItemLef('prueba2','id2','','',action)
        Layout.addNavItemRight('prueba3','id3','','/')
        Layout.addNavItemRight('prueba4','id4','','')
        let DropdownList = new DropDowList()
        let DropdownList2 = new DropDowList()
        DropdownList.setList('Settings', 'list1', <Home/>)
        DropdownList.setItemList('prueba1','/',<Home/>,action,true)
        DropdownList.setItemList('prueba2','/',<Home/>,'',false)
        Layout.addNavItemLefList(DropdownList)
        DropdownList2.setList('Acctions', 'list2', <Home/>)
        DropdownList2.setItemList('prueba3','/',<Home/>,action,true)
        DropdownList2.setItemList('prueba4','/',<Home/>,'',false)
        Layout.addNavItemRightList(DropdownList2)
        Layout.addTabs('tab1','tab1Content','Actividades',<Default/>)
        Layout.addTabs('tab2','tab2Content','Contactos','Prueba',DropdownList2)
        console.log(Layout);
        setBreadc(Layout)
    },[])
    const action = ()=>{
        console.log('prueba');
    }
    useEffect(()=>{
        getData()
    },[getData])
    return (
        <div>
            <Basic data={breadc}/>
        </div>
    )
}
export default LayoutBasic