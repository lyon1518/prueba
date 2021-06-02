import Encode from "./Encode";
import Validation from "../validty/Validation";
import Request from "../api/Request";
import ValidateForm from "../validty/ValidateForm";
const scritsGlobales = {
  async signIn(mail, pass, UserSError) {
    let obj = {}
    let encode = Encode.encodeType([mail.value, pass.value], 'expert')
    const dataSend = await Request.RequestSend('post', '/singIn', encode)
    obj = ValidateForm.FormLoginIn([mail.value, pass.value], 'dC05LTItWS11LVEtWC1kLTItOS1tLWItQS1wLVgtWi1zLUYtbS1lLXUtOS0yLVotby0xLUMtTi16LUktVC1N', encode, dataSend, UserSError)
    return obj
  }
}
Object.assign(scritsGlobales, Validation,Encode,Request)
export default scritsGlobales