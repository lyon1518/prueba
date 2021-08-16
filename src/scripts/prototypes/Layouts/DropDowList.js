import Layout1, { infoError } from "./Layout1";
function creteList(label, id, icon,down) {
    this.label = label
    this.id = id
    this.icon = icon
    this.down = down
}
function ListItem(label, url, icon, action, divider, component) {
    this.label = label
    this.url = url
    this.icon = icon
    this.action = action
    this.divider = divider
    this.component = component
}
class OptionList extends Layout1 {
    constructor() {
        super()
        this.listOptions = {
            list: {},
            ItemsList: []
        }
    }
    setList(id, label, icon, down) {
        let valid = this.validInfo({ 'id': id })
        // console.log(valid);
        if (valid.length > 0) {
            this.error = new infoError('La lista no es valida', 'El campo ' + valid[0] + ' esta vacio o no fue definido')
        } else {
            let newList = new creteList(label, id, icon, down)
            this.listOptions.list = newList
        }
    }
    setItemList(label, url, icon, action, divider, component) {
        let newItemList = new ListItem(label, url, icon, action, divider, component)
        this.listOptions.ItemsList.push(newItemList)
    }
}
export default OptionList