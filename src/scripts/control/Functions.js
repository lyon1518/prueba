import Encode from "./Encode";
import Validation from "../validty/Validation";
import Request from "../api/Request";
import ValidateForm from "../validty/ValidateForm";
const scritsGlobales = {
  async signIn(mail, pass, UserSError) {
    let obj = {}
    let encode = Encode.encodeType([mail.value, pass.value], 'expert')
    const dataSend = await Request.RequestPost('/singIn', encode, 'object', 'personalize', 'Mensaje personalizado')
    obj = ValidateForm.FormLoginIn([mail.value, pass.value], 'dC05LTItWS11LVEtWC1kLTItOS1tLWItQS1wLVgtWi1zLUYtbS1lLXUtOS0yLVotby0xLUMtTi16LUktVC1N', encode, dataSend, UserSError)
    return obj
  },
  WhatType(valor) {
    switch (Object.prototype.toString.call(valor)) {
      case '[object Array]':
        return ('array')
      case '[object Object]':
        return ('object')
      default:
    }
  },
  validInfo(obj) {
    let ob = Object.keys(obj)
    let empty = []
    ob.forEach(e => {
      if (obj[e] !== undefined) {
        if (obj[e] === '') {
          empty.push(e)
        }
      } else {
        empty.push(e)
      }
    })
    return empty
  },
  erroServer(development, prod) {
    console.log(process.env);
    let error = process.env.NODE_ENV === "development" ? development : prod
    // let error = process.env.REACT_APP_SERVER === "development" ? development : prod
    return error
  }
}
Object.assign(scritsGlobales, Validation, Encode, Request)
export default scritsGlobales