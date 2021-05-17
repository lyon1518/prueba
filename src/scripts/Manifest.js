import { ErrorsDeveloper, ErrorsProduction } from "./Errors";
const Manifest = {
    GetServer() {
        // const server = process.env.NODE_ENV === 'developer' ? true : false
        const server = process.env.NODE_ENV === 'developer'? false:true
        // production
        // developer
        return server
    },
    GetError(error, type, property, typeData, propertyRequest) {
        let err = this.GetServer() ? ErrorsDeveloper[error] : ErrorsProduction[error] 
        if (ErrorsDeveloper[error] === undefined) {
            switch (type) {
                case 'typeData':
                    return 'El formato de ' + property + ' es un ' + typeData + ' y se esperaba un ' + propertyRequest
                case 'required':
                    return 'La propiedad ' + property + ' es obligatoria'
                default:
                    break;
            }
        }else{
            return err.message
        }
    }
}
export default Manifest