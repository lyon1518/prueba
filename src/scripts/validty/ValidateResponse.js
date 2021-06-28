const ValidateResponse = {
    Response(valor) {
        switch (Object.prototype.toString.call(valor)) {
            case '[object Array]':
                return ('array')
            case '[object Object]':
                return ('object')
            default:
        }
    },
    convertArray(data){
        let arr = []
        let obj = Object.keys(data)
        obj.forEach(e=>{
            arr.push(data[e])
        })
        return arr
    }
}
export default ValidateResponse