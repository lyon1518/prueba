import HeaderTable, { contructorTable } from "../prototypes/HeadersTable"
import ValidateResponse from "./ValidateResponse"
import Validate from "./Validation"

const ValidateTable = {
    DataTable(data, squema, headers, tableData, links, title, id, UserSError, checkbox, search, fondo, paginator, controlPadings) {
        let row = []
        let error = {}
        let result = {}
        let valid = ValidateResponse.Response(data)
        if (valid === 'array') {
            data.forEach(e => {
                let valid = Validate.validSquemas(squema, e, UserSError)
                if (valid.error !== undefined) {
                    error = valid
                } else {
                    row.push(e)
                }
            })
        } else {
            let keys = Object.keys(data)
            keys.forEach(e => {
                let valid = Validate.validSquemas(squema, data[e], UserSError)
                if (valid.error !== undefined) {
                    error = valid
                } else {
                    row.push(data[e])
                }
            })
        }
        if (Object.keys(error).length > 0) {
            result = error
        } else {
            result = new contructorTable(row, HeaderTable.getHeader(data, headers), tableData, links, title, id, checkbox, search, fondo, paginator, controlPadings)
        }
        return result
    }
}
Object.assign(ValidateTable, contructorTable,Validate)
export default ValidateTable