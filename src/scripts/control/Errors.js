import Login from "./errors/Login";
import Table from "./errors/Table";
import Request from "./errors/Request";
const ErrosComponent = {
    login:'ErrorLogin',
    table:"Table",
    request:"ErrorRequest",
}
const ErrosRequest = {
    options:['array','object','custom'],
    errorOptions:['server','personalize']
}
const Errors = {}
Object.assign(Errors, Login,Table,Request)
export {ErrosComponent,ErrosRequest}
export default Errors