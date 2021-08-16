import { Home } from "@material-ui/icons";
import React, { useCallback, useEffect, useState } from "react";
import Layout1 from "../../../scripts/prototypes/Layouts/Layout1";
import DropDowList from "../../../scripts/prototypes/Layouts/DropDowList";
import AlertClass from "../../../scripts/prototypes/Alert";
import Basic from "../../main/layouts/Basic";
import Default from "../dashboard/Default";
import Alert from "../../others/alerts/Alert";
import BadgeComponent from "../../others/Badge";
import BadgeClass from "../../../scripts/prototypes/Badge";

const LayoutBasic = () => {
    const [breadc,setBreadc] = useState({})
    const getData = useCallback(()=>{
        let Layout = new Layout1()
        // Layout.createLayout()
        Layout.addBreadcrum('Home','/',<Home/>)
        Layout.addBreadcrum('Users','/')
        Layout.addBreadcrum('Overview')

        Layout.setTitle('Layout','Layout1')

        Layout.addNavItemLeft('prueba','id1',<Home/>,'/')
        Layout.addNavItemLeft('prueba2','id2','','',action)
        
        Layout.addNavItemRight('prueba3','id3','','/')
        Layout.addNavItemRight('prueba4','id4','','')
        
        let DropdownList = new DropDowList()
        let DropdownList2 = new DropDowList()

        let badgeD = new BadgeClass()
        badgeD.create('danger',10)

        DropdownList.setList('list1','Settings', 'cog',true)
        DropdownList.setItemList(<div>prueba1 <BadgeComponent data={badgeD}/></div>,'/','user',action,true)
        DropdownList.setItemList('prueba2','/','beer','',false)
        Layout.addNavItemLeftList(DropdownList)

        DropdownList2.setList('list2','Acctions', 'cogs',true)
        DropdownList2.setItemList('prueba3','/','user',action,false)
        DropdownList2.setItemList('prueba4','/','users','',false)
        Layout.addNavItemRightList(DropdownList2)
        
        let alertC = new AlertClass()
        alertC.create('warning','trash','Realmente deceas eliminar el elmento')
        alertC.addButtons('dark','Aceptar',action)
        alertC.addButtons('warning','Regresar','')
        
        let badgeC = new BadgeClass()
        badgeC.create('info',5)

        Layout.addTabs('tab1','tab1Content','Actividades',<BadgeComponent data={badgeC}/>,<Default/>,'')
        Layout.addTabs('tab2','tab2Content','Contactos','',<Alert data={alertC}/>,DropdownList2)
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