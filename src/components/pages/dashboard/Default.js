import React, { useCallback, useEffect, useState } from "react";
import Apis from "../../../scripts/control/Apis";
import Tables from "../../others/Tables";
import Request from "../../../scripts/api/Request";
import ValidateTable from "../../../scripts/validty/ValidateTable";
const Default = () => {
    const [DataTable1, setDataTable1] = useState({})
    const [Rows, setRows] = useState({})
    const [Table2, setTable2] = useState({})
    const getDataTable = () => {
        // Objeto para tablas
        // data (Objeto,Array), squema,headers,tableData,links,title,id,checkbox,search,fondo,paginator,controlPadings,UserSError
        let dataTable = ValidateTable.DataTable(DataTable1,
            'tableDasbord',
            ['ID', 'Nombre', 'Estatus', 'Tipo', 'Email', 'Suscripción'],
            ['id', 'name', 'status', 'type', 'email', 'signed'],
            ['/settigs', '', '', '', '', ''],
            'Usuarios',
            'tabla1',
            'ErrorTable',
            true,
            true,
            true,
            true,
            true,
        )
        let Tabla2 = ValidateTable.DataTable(Apis.tableData2,
            'tableDasbord2',
            ['ID', 'Nombre', 'Activo'],
            ['id', 'name', 'active'],
            ['/settigs', '', ''],
            'Usuarios 2',
            'tabla2',
            'Table',
            false,
            false,
            false,
            false,
            false,
        )
        setRows(dataTable)
        setTable2(Tabla2)
        
    }

    const getTableData = useCallback(async () => {
        const table = await Request.RequestSend('get', '/table1')
        setDataTable1(table.data)
    },[])
    useEffect(() => {
        getTableData()
        // console.log('ok');
    }, [getTableData])
    if (Object.keys(DataTable1).length === 0) {
        return(<div></div>)
    }else{
        return (
            <div>
                {/* <SendData type={Data.type} setActivePop={setActivePop} data={Data} active={ActivePop}/> */}
                <h5>Dashboard</h5>
                <hr />
                {/* <Tables DataTable={Rows}/> */}
                
                {Object.keys(Rows).length?
                    <div>
                        {/* {console.clear()} */}
                        <Tables DataTable={Rows} />
                        <hr />
                        <Tables DataTable={Table2} />
                    </div>
                    : getDataTable()
                }
            </div>
        )
    }
}
export default Default