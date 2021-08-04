import React, { useCallback, useEffect, useState } from "react";
import Apis from "../../../scripts/control/Apis";
import TableComponent from "../../others/Tables";
import Request from "../../../scripts/api/Request";
import { Tables } from "../../../scripts/prototypes/Table";
import Editar from "../../others/pop/Edit";
import { Edit, MoreVert } from "@material-ui/icons";
import DropDowList from "../../../scripts/prototypes/Layouts/DropDowList";

const Default = () => {
    const [DataTable1, setDataTable1] = useState({})
    // const [Rows, setRows] = useState({})
    const [Table1, setTable1] = useState({})
    const [Table2, setTable2] = useState({})
    const getDataTable = () => {
        // setRows(Create(DataTable1,"Tabla1"))
        // setTable2(Create(Apis.tableData2,"Tabla2"))
        let table = new Tables()
        let single = new DropDowList()
        let global = new DropDowList()
        table.create("tabla1","tabla1",DataTable1,"tableDasbord")
        table.setClasses('clasePrueba')
        table.setStyles({width:"100%",background:"red"}) 
        table.setPager([5,10,20,25])
        table.setSearch()
        table.setCheckbox()
        // table.create()
        // label, componente, grupal/indival (bool), custom/default(bool), data, icono, color
        single.setList('', 'single', <MoreVert/>)
        single.setItemList('Editar','/',<Edit/>,'',true,Editar)
        single.setItemList('Mostrar','/','','',false)
        single.setItemList('Prueba','','',prueba,false,'')
        table.setSingleActions(single)
        
        global.setList('', 'global', <MoreVert/>)
        global.setItemList('Editar','/',<Edit/>,'',false,Editar)
        table.setGlobalActions(global)

        // table.addActions('Editar',Editar,true,true,'',Edit,'warning')
        table.addCol("id","ID","/settings",true,"")
        table.addCol("name","Nombre","",true,"")
        table.addCol("status","Estatus","",true,"")
        table.addCol("type","Tipo","",true,"")
        table.addCol("email","Correo","",true,"")
        table.addCol("signed","Suscripción","",true,"")
        table.validity(table)
        // console.log(table);
        setTable1(table)

        let table2 = new Tables()
        table2.create("","tabla2",Apis.tableData2,"tableDasbord2")
        // table2.create()
        table2.addCol("id","ID","/settings",true,"")
        table2.addCol("name","Nombre","",true,"")
        table2.addCol("active","Activo","",true,"")
        // table2.validity(table2)
        setTable2(table2)
    }
    const prueba = ()=>{
        console.log('soy la prueba');
    }
    const getTableData = useCallback(async () => {
        const table = await Request.RequestGet('/table1')
        // const tabl2 = await Request.RequestGet('/table1','custom','server','prueba')
        // console.log(tabl2);
        setDataTable1(table.data)
    },[])
    useEffect(() => {
        getTableData()
        // console.log('ok');
    }, [getTableData])
    if (DataTable1 === undefined) {
        return(<div></div>)
    }
    else if(Object.keys(DataTable1).length === 0) {
        return(<div></div>)
    }else{
        return (
            <div>
                {/* <SendData type={Data.type} setActivePop={setActivePop} data={Data} active={ActivePop}/> */}
                <h5>Dashboard</h5>
                <hr />
                {/* <Tables DataTable={Rows}/> */}
                
                {Object.keys(Table1).length?
                    <div>
                        {/* {console.clear()} */}
                        {/* <Table DataTable={Rows} /> */}
                        <hr />
                        <TableComponent DataTable={Table1} />
                        <hr />
                        <TableComponent DataTable={Table2} />
                    </div>
                    : getDataTable()
                }
            </div>
        )
    }
}
export default Default