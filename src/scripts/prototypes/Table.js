import ValidateResponse from "../validty/ValidateResponse";
import ValidateTable from "../validty/ValidateTable";
import ErrorHandler from "../control/ErrorHandler";
import Functions from "../control/Functions";

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
    create(id, name, obj, squema) {
        this.SquemaCreate(id, name, obj, squema)
        this.Convert(obj)
        this.id = id;
        this.name = name;
        this.squema = squema;
        this.cols = []
        this.actionst = []
    }
    setClasses(clas) {
        this.clase = clas;
    }
    setStyles(styles) {
        this.styles = styles;
    }
    setPager(pager){
        this.setPager =  pager
    }
    setSearch(){
        this.search = true;   
    }
    setCheckbox(){
        this.checkbox = true;
    }
    Convert(data) {
        this.obj = ValidateResponse.convertArray(data)
    }
    erroServer(development,prod){
        let error = process.env.REACT_APP_SERVER === "DEVELOPER"?development:prod
        return error
    }
    SquemaCreate(id, name, obj, squema) {
        let valid = Functions.validInfo({"id":id,"name":name,"obj":obj})
        if (valid.length > 0) {
            let dateError = Functions.erroServer('La tabla no es valida: El campo ' + valid[0] + ' esta vacio o no fue definido','Hay un error inesperado al cargar la tabla')
            ErrorHandler.PathError(dateError,["id", "name", "obj"])
            this.error = new ErrorTable(dateError)
        }
    }
    actions(edit, delet, notification) {
        this.action = {
            edit: edit,
            delet: delet,
            notification: notification
        }
    }
    // addActions(grup, type, component, title, color, icon, action) {
    setSingleActions(single){
        if (single.error === undefined) {
            this.singleActions = single.listOptions
        }else{
            this.error = single.error 
        }
    }
    setGlobalActions(global){
        if (global.error === undefined) {
            this.globalActions = global.listOptions
        }else{
            this.error = global.error 
        }
    }
    addActions(title, component, grup, type, action, icon,color) {
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