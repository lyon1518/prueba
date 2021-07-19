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
    validData(data,type){
        let res = this.Response(data) === type
        return res
    },
    convertArray(data){
        if (data !== undefined) {
            if(this.validData(data,'object')){
                let arr = []
                let obj = Object.keys(data)
                obj.forEach(e=>{
                    arr.push(data[e])
                })
                return arr
            }else{
                return data
            }
        }else{
            return data
        }
    },
    convertObjec(data){
        if (data !== undefined) {
            if(this.validData(data,'array')){
                let obj = {}
                data.forEach(e=>{
                    obj[e] = e
                })
                return obj
            }else{
                return data
            }
        }else{
            return data
        }
    }
}
export default ValidateResponse