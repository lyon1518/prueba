const encodes = {
    encodeType(data, type) {
        let encode = ''
        switch (type) {
            case 'basic':
                encode = data.join('-')
                // console.log(encode);
                encode = btoa(encode)
                // console.log(encode);
                return encode
            case 'medium':
                encode = data.reverse()
                // console.log(encode);
                encode = data.join('-')
                // console.log(encode);
                encode = btoa(encode)
                // console.log(encode);
                return encode
            case 'expert':
                encode = data.reverse()
                // console.log(encode);
                encode = data.join('-')
                // console.log(encode);
                encode = btoa(encode)
                // console.log(encode);
                encode = encode.split("")
                // console.log(encode);
                encode = encode.reverse()
                // console.log(encode);
                encode = encode.join('-')
                // console.log(encode);
                encode = btoa(encode)
                // console.log(encode);
                return encode
            default:
                break;
        }
    }
}
export default encodes