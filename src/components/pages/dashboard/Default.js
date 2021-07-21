import React, { useCallback, useEffect, useState } from "react";
import Apis from "../../../scripts/control/Apis";
import TableComponent from "../../others/Tables";
import Request from "../../../scripts/api/Request";
import { Tables } from "../../../scripts/prototypes/Table";
import Editar from "../../others/pop/Edit";
import { Edit } from "@material-ui/icons";
import Navbar from "../../pages/Login";
const Default = () => {
    const [DataTable1, setDataTable1] = useState({})
    // const [Rows, setRows] = useState({})
    const [Table1, setTable1] = useState({})
    const [Table2, setTable2] = useState({})
    const getDataTable = () => {
        // setRows(Create(DataTable1,"Tabla1"))
        // setTable2(Create(Apis.tableData2,"Tabla2"))
        let table = new Tables()
        table.create("tabla1","tabla1",DataTable1,"tableDasbord","",true,true,true,true,true)
        // table.create()
        table.addActions('grupal','default',Editar,'Editar','warning',Edit)
        table.addActions('grupal','default',Navbar,'Mostrar','success','mostrar')
        table.addActions('grupal','custom','','Prueba','dark','Prueba',prueba)
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
        table2.create("tabla2","tabla2",Apis.tableData2,"tableDasbord2","",true,true,true,true,true)
        // table2.create()
        table2.actions(true,false,false)
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