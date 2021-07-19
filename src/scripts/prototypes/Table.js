import ValidateResponse from "../validty/ValidateResponse";
import ValidateTable from "../validty/ValidateTable";
import ErrorHandler from "../control/ErrorHandler";

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
function addAction(grup, type, component, title, color, icon, action) {
    this.title = title;
    this.color = color;
    this.icon = icon;
    this.grup = grup;
    this.type = type;
    this.component = component;
    this.action = action;
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
        this.actionst = []
    }
    Convert(data) {
        this.obj = ValidateResponse.convertArray(data)
    }
    
    SquemaCreate(id, name, obj, squema) {
        if (id === undefined || name === undefined || obj === undefined || squema === undefined || id === "" || name === "" || obj === "" || squema === "") {
            let messa = "El esquema para la creación de tabla no cumple con los parametros"
            ErrorHandler.PathError(messa,["id", "name", "obj", "squema"])
            this.error = new ErrorTable(messa)
        }
    }
    actions(edit, delet, notification) {
        this.action = {
            edit: edit,
            delet: delet,
            notification: notification
        }
    }
    addActions(grup, type, component, title, color, icon, action) {
        this.SquemaActions(grup, type, title, color, icon)
        let col2 = new addAction(grup, type, component, title, color, icon, action)
        this.actionst.push(col2)
    }
    SquemaActions(grup, type, title, color, icon) {
        if (grup === undefined || type === undefined || title === undefined || color === undefined || icon === undefined || grup === "" || type === "" || title === "" || color === "" || icon === "") {
            let messa = "El esquema para añadir acciones no cumple con la información necesaria para contruirlo"
            ErrorHandler.PathError(messa,["grup", "type", "title", "color", "icon"])
            this.error = new ErrorTable(messa)
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