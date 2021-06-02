const Squemas = {
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
    }
}
export default Squemas