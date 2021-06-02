import ErrorHandler from "../control/ErrorHandler"
import popSquema from "../prototypes/PopSquema"
import Validate from "./Validation"

const ValidateForm = {
    FormLoginIn(datos, code, encodes, data, UserError) {
        let obj = {}
        let valid = {}
        let complete = 0
        // console.log(data);
        if (data.typeError !== undefined) {
            obj = new popSquema('ActivePop', 'warning', false, data.message)
        }
        else if (encodes === code) {
            obj = new popSquema('ActivePop', 'success', false, 'Iniciciando sesión', 1000)
            if (complete === 0) {
                valid = Validate.validSquemas('singIn', data.data, UserError)
            }
        } else {
            obj = new popSquema('ActivePop', 'warning', true, ErrorHandler.GetError('ErrorSignIn'), '')
        }
        datos.forEach((e, index) => {
            if (e === '') {
                complete++
                obj = new popSquema('ActivePop', 'error', true, index === 0 ? ErrorHandler.GetError('EmptyEmail') : ErrorHandler.GetError('EmptyPass'), '')
            }
        })

        if (valid.error !== undefined) {
            obj = new popSquema('ActivePop', 'warning', true, valid.messE, '')
        }
        return obj
    }
}
Object.assign(ValidateForm, popSquema,Validate)
export default ValidateForm