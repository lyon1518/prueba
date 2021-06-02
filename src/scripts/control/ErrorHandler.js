import Errors from "./Errors";
import GetServer from "./GetServer";
const ErrorHandler = {
    GetError(error, type, property, typeData, propertyRequest) {
        if (error !== undefined) {
            let err = Errors[error]
            if (GetServer.Server()) {
                if (err === undefined || err.messageD === '') {
                    switch (type) {
                        case 'typeData':
                            return 'El formato de ' + property + ' es un ' + typeData + ' y se esperaba un ' + propertyRequest
                        case 'required':
                            return 'La propiedad ' + property + ' es obligatoria'
                        default:
                            break;
                    }
                } else {
                    return GetServer.Server() ? err.messageD : err.messageP
                }
            }else {
                return GetServer.Server() ? err.messageD : err.messageP
            }
        }
    }
}
export default ErrorHandler