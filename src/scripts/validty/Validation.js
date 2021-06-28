import ErrorHandler from "../control/ErrorHandler"
import Squemas from "../squemas/Squemas"

const Validate = {
    validSquemas(squema, object, UserSError) {
        let squem = Squemas.getSquemas(squema)
        let keys = Object.keys(squem)
        let objeto = {}
        keys.forEach(e => {
            let childrens = Object.keys(squem[e])
            if (squem[e].required === 'required' && squem[e].type !== typeof object[e]) {
                objeto.error = true
                objeto.type = 'errorProperty'
                objeto.messE = ErrorHandler.GetError(UserSError,'typeData',e,typeof object[e],squem[e].type)
            }
            else if (squem[e].required === 'required' && (object[e] === undefined || object[e] === '')) {
                objeto.error = true
                objeto.type = 'errorProperty'
                objeto.messE = ErrorHandler.GetError(UserSError,'required',e)
            }
            childrens.forEach(f => {
                if (typeof squem[e][f] === 'object') {
                    if (this.getChildrens(squem[e], object[e], f) !== undefined) {
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
            objeto.messE = ErrorHandler.GetError(UserSError, 'required', children)
            
        } else if (squema[children].required === 'required' && squema[children].type !== typeof object[children]) {
            objeto.error = true
            objeto.type = 'errorProperty'
            objeto.messE = ErrorHandler.GetError(UserSError,'typeData',children,typeof object[children],squema[children].type)
        }
        if (Object.keys(objeto).length > 0) {
            return objeto
        }
    },
}
export default Validate