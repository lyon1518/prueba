import Axios from "axios";
// import GetServer from "../control/GetServer";
import Errors from "../control/Errors";

// const Url = Env.getUrl()
const Url = process.env.REACT_APP_SERVER === "DEVELOPER" ? process.env.REACT_APP_URL_DEV : process.env.REACT_APP_URL_PROD
// console.log(process.env);
function prototypeError(typeError, message) {
    this.typeError = typeError
    this.message = message
}
const wrapper = {
    ErrorResponse(error) {
        return process.env.REACT_APP_SERVER === "DEVELOPER" ? new prototypeError('server', Errors[error].messageD) : new prototypeError('server', Errors[error].messageP)
    },
    async getData(request) {
        try {
            var res = {}
            res = await Axios.get(Url + request)
            // console.log(res);
            return await res
        } catch (error) {
            // console.log(error.response);
            // console.log(new prototypeError('server','Hubo un error al procesar la informacion intentalo mas tarde'));
            return await this.ErrorResponse(error.response.status)
        }
    },
    async postData(request, params) {
        try {
            var res = {}
            res = await Axios.post(Url + request, params)
            // console.log(res);
            return await res
        } catch (error) {
            // console.log(error.response);
            return await this.ErrorResponse(error.response.status)
        }

    },
    async deleteData(request, params) {
        try {
            var res = {}
            res = await Axios.delete(Url + request, params)
            // console.log(res);
            return await res
        } catch (error) {
            // console.log(error.response);
            return await this.ErrorResponse(error.response.status)
        }
    },
}

export default wrapper