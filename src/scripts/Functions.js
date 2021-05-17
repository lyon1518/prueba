import popSquema from "./squemas/popSquema";
import Encode from "./encode";
import HeadersTable, { contructorTable } from "./HeadersTable";
import {ErrorsProduction,ErrorsDeveloper} from "./Errors";
import Manifest from "./Manifest";
import Wrapper from "./Wrapper";
const scritsGlobales = {
  validDataTable(data, squema, headers, tableData, links, title, id, UserSError, checkbox, search, fondo, paginator, controlPadings) {
    let row = []
    let error = {}
    let result = {}
    let valid = this.validObject(data)
    if (valid === 'array') {
      data.forEach(e => {
        let valid = this.validSquemas(squema, e, UserSError)
        if (valid.error !== undefined) {
          error = valid
        } else {
          row.push(e)
        }
      })
    } else {
      let keys = Object.keys(data)
      keys.forEach(e => {
        let valid = this.validSquemas(squema, data[e], UserSError)
        if (valid.error !== undefined) {
          error = valid
        } else {
          row.push(data[e])
        }
      })
    }
    if (Object.keys(error).length > 0) {
      result = error
    } else {
      result = new contructorTable(row, HeadersTable.getHeader(data, headers), tableData, links, title, id, checkbox, search, fondo, paginator, controlPadings)
    }
    return result
  },
  validObject(valor) {
    switch (Object.prototype.toString.call(valor)) {
      case '[object Array]':
        return ('array')
      case '[object Object]':
        return ('object')
      default:
    }
  },
  async RequestSend(type, url, params) {
    switch (type) {
      case 'get':
        const get = await Wrapper.getData(url)
        return get
      case 'post':
        const post = await Wrapper.postData(url, params)
        return post
      case 'delete':
        const dell = await Wrapper.deleteData(url, params)
        return dell
      default:
        break;
    }
  },
  async signIn(mail, pass, data, UserSError) {
    let obj = {}
    let encode = Encode.encodeType([mail.value, pass.value], 'expert')
    const dataSend = await this.RequestSend('post', '/singIn', encode)
    // console.log(UserSError);
    // obj = this.validData([mail.value, pass.value], 'dC05LTItWS11LVEtWC1kLTItOS1tLWItQS1wLVgtWi1zLUYtbS1lLXUtOS0yLVotby0xLUMtTi16LUktVC1N', encode, data, UserSError)
    obj = this.validData([mail.value, pass.value], 'dC05LTItWS11LVEtWC1kLTItOS1tLWItQS1wLVgtWi1zLUYtbS1lLXUtOS0yLVotby0xLUMtTi16LUktVC1N', encode, dataSend.data, UserSError)
    return obj
  },
  validData(datos, code, encodes, data, UserError) {
    let obj = {}
    let valid = {}
    let complete = 0
    if (encodes === code) {
      obj = new popSquema('ActivePop', 'success', false, 'Iniciciando sesión', 1000)
      if (complete===0) {
      valid = this.validSquemas('singIn', data, UserError)
    }
    } else {
      obj = new popSquema('ActivePop', 'warning', true, Manifest.GetError('ErrorSignIn'), '')
    }
    datos.forEach((e, index) => {
      if (e === '') {
        complete++
        obj = new popSquema('ActivePop', 'error', true, index === 0 ? Manifest.GetError('EmptyEmail') : Manifest.GetError('EmptyPass'), '')
      }
    })
    
    if (valid.error !== undefined) {
      obj = new popSquema('ActivePop', 'warning', true, valid.messE, '')
    }
    return obj
  },
  getSquemas(data) {
    let schema = {}
    switch (data) {
      case 'sidebar':
        schema.active = { required: 'optional', type: 'boolean' }
        schema.badge = { required: 'optional', type: 'string' }
        schema.icon = { required: 'optional', type: 'string' }
        schema.title = { required: 'required', type: 'string' }
        schema.separador = { required: 'optional', type: 'boolean' }
        schema.link = { required: 'optional', type: 'string' }
        schema.list = { required: 'optional', type: 'object' }
        schema.padre = { required: 'required', type: 'string' }
        return schema
      case 'tableDasbord':
        schema.name = { required: 'required', type: 'string' }
        schema.status = { required: 'required', type: 'string' }
        schema.type = { required: 'optional', type: 'string' }
        schema.email = { required: 'required', type: 'string' }
        schema.signed = { required: 'optional', type: 'string' }
        schema.id = { required: 'required', type: 'string' }
        return schema
      case 'tableDasbord2':
        schema.name = { required: 'required', type: 'string' }
        schema.active = { required: 'required', type: 'string' }
        schema.id = { required: 'required', type: 'number' }
        return schema
      case 'singIn':
        schema.UserInfo = { required: 'required', type: 'object' }
        schema.UserInfo.name = { required: 'required', type: 'string' }
        schema.UserInfo.email = { required: 'required', type: 'string' }
        schema.UserInfo.created_at = { required: 'optional', type: 'string' }
        schema.SesionInfo = { required: 'required', type: 'object' }
        schema.SesionInfo.token = { required: 'required', type: 'string' }
        schema.SesionInfo.expires_at = { required: 'required', type: 'string' }
        schema.SesionInfo.created_at = { required: 'optional', type: 'string' }
        // schema.SesionInfo.created_at.prue = { required: 'required', type: 'string' }
        schema.SignIn = { required: 'required', type: 'boolean' }
        return schema
      default:
        break;
    }
  },
  getChildrens(squema, object, children, UserSError) {
    let childrens = Object.keys(squema[children])
    let objeto = {}
    
    childrens.forEach(e => {
      if (typeof squema[children][e] === 'object' && object[children] !== undefined) {
        if (this.getChildrens(squema[children], object[children], e) !== undefined) {
          objeto = this.getChildrens(squema[children], object[children], e)
        }
      }
    });

    if (squema[children].required === 'required' && (object[children] === undefined || object[children] === '')) {
      objeto.error = true
      objeto.type = 'errorProperty'
      if (ErrorsDeveloper['Error' + children] !== undefined) {
        console.log("this.getErrorsDeveloper('Error')");
        objeto.messE = ErrorsDeveloper[UserSError]?.message
      } else {
        // console.log(Manifest.GetError(UserSError,'required',children));
        objeto.messE = Manifest.GetError(UserSError,'required',children)
      }
    } else if (squema[children].required === 'required' && squema[children].type !== typeof object[children]) {
      objeto.error = true
      objeto.type = 'errorProperty'
      objeto.messE = !Manifest.GetServer() ? ErrorsDeveloper[UserSError]?.message :
        'El formato de ' + children + ' es un ' + typeof object[children] + ' y se esperaba un ' + squema[children].type
    }
    if (Object.keys(objeto).length > 0) {
      return objeto
    }
  },
  validSquemas(squema, object, UserSError) {
    let squem = this.getSquemas(squema)
    let keys = Object.keys(squem)
    let objeto = {}
    keys.forEach(e => {
      let childrens = Object.keys(squem[e])
      if (squem[e].required === 'required' && squem[e].type !== typeof object[e]) {
        objeto.error = true
        objeto.type = 'errorProperty'
        console.log(Manifest.GetError(UserSError));
        objeto.messE = !Manifest.GetServer() ? ErrorsDeveloper[UserSError].message :
          'El formato de ' + e + ' es un ' + typeof object[e] + ' y se esperaba un ' + squem[e].type
      }
      else if (squem[e].required === 'required' && (object[e] === undefined || object[e] === '')) {
        objeto.error = true
        objeto.type = 'errorProperty'
        console.log('acas');
        objeto.messE = Manifest.GetServer() ? ErrorsProduction[UserSError].message :
          'La propiedad ' + e + ' es obligatoria'
      }
      childrens.forEach(f => {
        if (typeof squem[e][f] === 'object') {
          if (this.getChildrens(squem[e], object[e], f) !== undefined) {
            // console.log('childrens');
            // console.log(object);
            // console.log(e);
            // console.log(object[e]);
            objeto = this.getChildrens(squem[e], object[e], f, UserSError)
          }
        }
      })
    });
    if (objeto.error === undefined) {
      return object
    } else {
      return objeto
    }
  }
}
export default scritsGlobales