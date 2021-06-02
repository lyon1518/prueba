import Wrapper from "./Wrapper"

const Request = {
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
}
export default Request