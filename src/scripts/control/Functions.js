import Encode from "./Encode";
import Validation from "../validty/Validation";
import Request from "../api/Request";
import ValidateForm from "../validty/ValidateForm";
const scritsGlobales = {
  async signIn(mail, pass, UserSError) {
    let obj = {}
    let encode = Encode.encodeType([mail.value, pass.value], 'expert')
    const dataSend = await Request.RequestPost('/singIn', encode)
    obj = ValidateForm.FormLoginIn([mail.value, pass.value], 'dC05LTItWS11LVEtWC1kLTItOS1tLWItQS1wLVgtWi1zLUYtbS1lLXUtOS0yLVotby0xLUMtTi16LUktVC1N', encode, dataSend, UserSError)
    return obj
  },
  getDocument(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
  }

}
Object.assign(scritsGlobales, Validation, Encode, Request)
export default scritsGlobales