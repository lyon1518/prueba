import ErrorHandler from "../control/ErrorHandler"
import popSquema from "../prototypes/PopSquema"
import Validate from "./Validation"

const ValidateForm = {
    FormLoginIn(datos, code, encodes, data, UserError) {
        let obj = {}
        let valid = {}
        let complete = 0
        if (typeof data === 'string') {
            obj = new popSquema('ActivePop', 'warning', false, data)
        }
        else if (data.typeError !== undefined) {
            obj = new popSquema('ActivePop', 'warning', false, data.message)
        }
        else if (encodes === code) {
            obj = new popSquema('ActivePop', 'success', false, 'Iniciciando sesión', 1000)
            if (complete === 0) {
                valid = Validate.validSquemas('singIn', data.data === undefined ? data : data.data, UserError)
            }
        } else {
            obj = new popSquema('ActivePop', 'warning', true, ErrorHandler.GetError('ErrorSignIn'), '')
        }
        datos.forEach((e, index) => {
            if (e === '') {
                complete++
                obj = new popSquema('ActivePop', 'error', true, index === 0 ? ErrorHandler.GetError('EmptyEmail', UserError) : ErrorHandler.GetError('EmptyPass', UserError), '')
            }
        })
        if (valid.error !== undefined) {
            obj = new popSquema('ActivePop', 'warning', true, valid.messE, '')
        }
        if (UserError === undefined || UserError === '') {
            obj = new popSquema('ActivePop', 'error', true, ErrorHandler.GetError(UserError), '')
        }
        return obj
    }
}
Object.assign(ValidateForm, popSquema, Validate)
export default ValidateForm