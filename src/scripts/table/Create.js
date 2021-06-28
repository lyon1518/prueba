import { addCol, controlTable } from "../prototypes/Table";
import ValidateTable from "../validty/ValidateTable";

const Tablas = {
    Tabla1: {
        headers: ['ID', 'Nombre', 'Estatus', 'Tipo', 'Email', 'Suscripción'],
        ids: ['id', 'name', 'status', 'type', 'email', 'signed'],
        urls: ['/settigs', '', '', '', '', ''],
        width: ['', '', '200px', '', '', ''],
        sort: [true, true, false, true, true, true],
        id:"tabla1",
        name:"Usuarios",
        squema:"tableDasbord",
        clase:"",
        paginador:true,
        search:true,
        controlPadding:true,
        checkbox:true,
        background:true,
    },
    Tabla2: {
        headers: ['ID', 'Nombre', 'Activo'],
        ids: ['id', 'name', 'active'],
        urls: ['/settigs', '', ''],
        width: ['', '', '200px'],
        sort: [true, true, true],
        id:"tabla2",
        name:"Usuarios 2",
        squema:"tableDasbord2",
        clase:"",
        paginador:false,
        search:false,
        controlPadding:true,
        checkbox:false,
        background:false,
    },
}
function ConstructTables(objects, tabla) {
    let table = {}
    let headers = []
    Tablas[tabla].headers.forEach((e, i) => {
        let row = new addCol(Tablas[tabla].ids[i], e, Tablas[tabla].urls[i], Tablas[tabla].sort[i], Tablas[tabla].width[i])
        headers.push(row)
    });
    let control = new controlTable(Tablas[tabla].id, Tablas[tabla].name, objects, Tablas[tabla].squema, Tablas[tabla].clase, Tablas[tabla].background, Tablas[tabla].paginador, Tablas[tabla].search, Tablas[tabla].controlPadding, Tablas[tabla].checkbox)
    table.headers = headers
    table.control = control
    return ValidateTable.DataTable2(table)
}


export default ConstructTables