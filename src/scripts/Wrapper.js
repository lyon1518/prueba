import Axios from "axios";
import Manifest from "./Manifest";

// const Url = Env.getUrl()
const Url = Manifest.GetServer()? process.env.REACT_APP_DEV_URL:process.env.REACT_APP_PROD_URL
function prototypeError(typeError,message){
    this.typeError = typeError
    this.message = message
}
const wrapper = {
    async getData(request){
        try {
            var res = {}
            res = await Axios.get(Url+request)
            // console.log(res);
            return await res
        } catch (error) {
            console.log(error.response);
            // console.log(new prototypeError('server','Hubo un error al procesar la informacion intentalo mas tarde'));
            return await new prototypeError('server','Hubo un error al procesar la informacion intentalo mas tarde')
        }
    },
    async postData(request,params){
        try {
            var info = {}
            
            const res = await Axios.post(Url+request,params)
            .catch(error=>{
                // console.log(error.response);
                info = error.response
            })
            if (Object.keys(info).length>0) {
                // console.log('res');
                // console.log(info);
                return await info
            }else{
                return await res
            }
        } catch (error) {
            console.log(error.response);
            // console.log(new prototypeError('server','Hubo un error al procesar la informacion intentalo mas tarde'));
            return await new prototypeError('server','Hubo un error al procesar la informacion intentalo mas tarde')
        }
    },
    async deleteData(request,data){
        try {
            const res = await Axios.delete(Url+request,{withCredentials:true, data})
            .catch(error=>{
                console.log(error.response);
            })
            return await res
        } catch (error) {
            console.log(error.response);
        }
    },
}

export default wrapper