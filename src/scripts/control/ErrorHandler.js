import Errors, {ErrosComponent} from "./Errors";
import ErrorsLogin from "./errors/Login";
// import GetServer from "./GetServer";
const ErrorHandler = {
    GetError(error, type, property, typeData, propertyRequest) {
        if (error !== undefined) {
            let err = Errors[error]
            if (process.env.REACT_APP_SERVER === "DEVELOPER") {
                if (err === undefined || err.messageD === '') {
                    let message = ""
                    message = 'No fue seleccionado uno de los errores registrados en nuestro catalogo selecciona alguno de ellos para mostrarlo'
                    switch (type) {
                        case 'typeData':
                            message = 'El formato de ' + property + ' es un ' + typeData + ' y se esperaba un ' + propertyRequest
                            break;
                        case 'required':
                            message = 'La propiedad ' + property + ' es obligatoria'
                            break;
                        case 'ErrorLogin':
                            console.table(ErrorsLogin);
                            break;
                        default:
                            console.table(ErrosComponent);
                            break;
                    }
                    return message
                } else {
                    return process.env.REACT_APP_SERVER === "DEVELOPER" ? err.messageD : err.messageP
                }
            } else {
                return process.env.REACT_APP_SERVER === "DEVELOPER" ? err.messageD : err.messageP
            }
        }
    }
}
export default ErrorHandler