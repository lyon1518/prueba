import Errors, { ErrosComponent } from "./Errors";
import ErrorsLogin from "./errors/Login";
// import GetServer from "./GetServer";
const ErrorHandler = {
    ErrorDeveloper(data) {
        let keys = Object.keys(data)
        keys.forEach(e => {
            delete data[e].messageP
        });
    },
    PathError(message,requireds) {
        // console.log(process.env);
        if (requireds !== undefined && process.env.NODE_ENV === "development") {
            console.log("Estos son los campos obligatorios");
            console.table(requireds);
        }
        var e = new Error(message);
        console.log(e);
        return e
    },
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
                            this.PathError(message)
                            this.ErrorDeveloper(ErrorsLogin)
                            console.table(ErrorsLogin);
                            break;
                        case 'ErrorRequest':
                            this.PathError(message)
                            this.ErrorDeveloper(ErrorsLogin)
                            console.table(ErrorsLogin);
                            break;
                        default:
                            // throw e;
                            this.PathError(message)
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