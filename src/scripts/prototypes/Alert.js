import ButtonsC from "./Buttons";
class AlertClass {
    constructor(){
        this.type = ''
        this.icon = ''
        this.text = ''
        this.buttons = []
    }
    create(type,icon,text){
        this.type = type
        this.icon = icon
        this.text = text
    }
    addButtons(type,text,action){
        let button = new ButtonsC()
        button.create(type,text,action)
        this.buttons.push(button)
    }
}
export default AlertClass