import ValidateResponse from "../validty/ValidateResponse";

function haedersObject(id, disablePadding, label) {
    this.id = id;
    this.disablePadding = disablePadding;
    this.label = label;
}
function contructorTable(row, headers, tableData, links, title, id, checkbox, search, fondo, paginator, controlPadings) {
this.row = row
this.headers = headers
this.tableData = tableData
this.links = links
this.checkbox = checkbox
this.title = title
this.id = id
this.search = search
this.fondo = fondo
this.paginator = paginator
this.controlPadings = controlPadings
}
const HeaderTable = {
    getHeader(data,headers){
        let head = []
        let valid = ValidateResponse.Response(data)
        let keys
        if (valid === 'array') {
            keys = Object.keys(data[0])
        }else{
            let obj = Object.keys(data)
            keys = Object.keys(data[obj[0]])
        }
        headers.forEach((e,i) => {
            let obj = new haedersObject(keys[i],true,e)
            head.push(obj)
        });
        return head
    }
}
export {contructorTable}
export default HeaderTable
// { id: 'name', disablePadding: true, label: 'FULL NAME' },
//   { id: 'status', disablePadding: false, label: 'STATUS' },
//   { id: 'type', disablePadding: false, label: 'TYPE' },
//   { id: 'email', disablePadding: false, label: 'EMAIL' },
//   { id: 'signed', disablePadding: false, label: 'SIGNED UP' },
//   { id: 'id', disablePadding: false, label: 'USER ID' },