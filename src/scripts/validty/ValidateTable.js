import { contructorTable } from "../prototypes/HeadersTable"
import ValidateResponse from "./ValidateResponse"
import Validate from "./Validation"

const ValidateTable = {
    DataTable2(data, squema) {
        let row = []
        let error = {}
        let result = {}
        let validData = ValidateResponse.Response(data)
        let objeto = validData === "array" ? data : Object.keys(data)
        if(squema === "" || squema === undefined){
            row = ValidateResponse.convertArray(data)
            // console.log(data);
        }else{
            objeto.forEach(e => {
                let valid = Validate.validSquemas(squema, validData === "array" ? e : data[e], "Table")
                if (valid.error !== undefined) {
                    error = valid
                } else {
                    row.push(validData === "array" ? e : data[e])
                }
            })
        }
        if (Object.keys(error).length > 0) {
            result = error
        } else {
            data = row
            result = data
        }
        return result
    }
}
Object.assign(ValidateTable, contructorTable, Validate)
export default ValidateTable