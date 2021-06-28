import ValidateResponse from "../validty/ValidateResponse";
import ValidateTable from "../validty/ValidateTable";

function controlTable(id, name, data, squema, clase, background, paginador, search, controlPadding, checkbox) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.squema = squema;
    this.clase = clase;
    this.background = background;
    this.paginador = paginador;
    this.search = search;
    this.controlPadding = controlPadding;
    this.checkbox = checkbox;
}
function addCol(id, nombre, url, sort, width) {
    this.id = id;
    this.nombre = nombre;
    this.url = url;
    this.sort = sort;
    this.width = width;
}
function ErrorTable(messE) {
    this.error = true
    this.type = 'errorProperty'
    this.messE = messE
}
class Tables {
    create(id, name, obj, squema, clase, background, paginador, search, controlPadding, checkbox) {
        this.SquemaCreate(id, name, obj, squema)
        this.Convert(obj)
        this.id = id;
        this.name = name;
        this.squema = squema;
        this.clase = clase;
        this.background = background;
        this.paginador = paginador;
        this.search = search;
        this.controlPadding = controlPadding;
        this.checkbox = checkbox;
        this.cols = []
    }
    Convert(data){
        this.obj = ValidateResponse.convertArray(data)
    }
    SquemaCreate(id, name, obj, squema) {
        if (id === undefined || name === undefined || obj === undefined || squema === undefined || id === "" || name === "" || obj === "" || squema === "") {
            this.error = new ErrorTable("El esquema para la creacion de tabla no cumple con los parametros")
        }
    }
    actions(edit, delet, notification) {
        this.action = {
            edit: edit,
            delet: delet,
            notification: notification,
        }
    }
    addCol(id, nombre, url, sort, width) {
        let col2 = new addCol(id, nombre, url, sort, width)
        this.cols.push(col2)
    }
    validity(data) {
        if (data.error !== undefined) {
            return data
        }
        if (ValidateTable.DataTable2(data.obj, data.squema).error !== undefined) {
            console.log(ValidateTable.DataTable2(data.obj, data.squema))
            this.error = ValidateTable.DataTable2(data.obj, data.squema)
        } else {
            data.obj = ValidateTable.DataTable2(data.obj, data.squema)
        }
    }
}

export { controlTable, addCol, Tables }