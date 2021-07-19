import Wrapper from "./Wrapper"
import ValidateResponse from "../validty/ValidateResponse";
import { ErrosRequest } from "../control/Errors";

const Request = {
    tranformRequest(data, response, error, personalize) {
        let request = undefined
        request = data
        if (response !== undefined && data.typeError === undefined) {
            switch (response) {
                case 'array':
                    request = ValidateResponse.convertArray(data.data)
                    break;
                case 'object':
                    request = ValidateResponse.convertObjec(data.data)
                    break;
                case 'custom':
                    request = personalize
                    break;
                case '':
                    console.table('Seleeciona una opcion de respuesta');
                    console.table(ErrosRequest.options);
                    break;
                default:
                    break;
            }
        }
        else if (error !== undefined) {
            switch (error) {
                case 'personalize':
                    request = personalize
                    break;
                case 'server':
                    request = data
                    break;
                case '':
                    console.table('Seleeciona una opcion de error');
                    console.table(ErrosRequest.errorOptions);
                    break;

                default:
                    break;
            }
        }
        return request
    },
    async RequestGet(url, response, error, personalize) {
        const get = await Wrapper.getData(url)
        return this.tranformRequest(get, response, error, personalize)
    },
    async RequestPost(url, service, response, error, personalize) {
        const post = await Wrapper.postData(url, service)
        return this.tranformRequest(post, response, error, personalize)
    },
    async RequestDelete(url, service, response, error, personalize) {
        const dell = await Wrapper.deleteData(url, service)
        return this.tranformRequest(dell, response, error, personalize)
    },
}
export default Request