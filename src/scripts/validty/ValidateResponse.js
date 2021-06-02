const ValidateResponse = {
    Response(valor) {
        switch (Object.prototype.toString.call(valor)) {
            case '[object Array]':
                return ('array')
            case '[object Object]':
                return ('object')
            default:
        }
    }
}
export default ValidateResponse