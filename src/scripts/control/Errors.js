import Login from "./errors/Login";
import Table from "./errors/Table";
import Request from "./errors/Request";
const ErrosComponent = {
    login:'ErrorLogin',
    table:"Table",
}
const Errors = {}
Object.assign(Errors, Login,Table,Request)
export {ErrosComponent}
export default Errors