import Wrapper from "./Wrapper"

const Request = {
    async RequestGet(url) {
        const get = await Wrapper.getData(url)
        return get
    },
    async RequestPost(url, service) {
        const post = await Wrapper.postData(url, service)
        return post
    },
    async RequestDelete(url, service) {
        const dell = await Wrapper.deleteData(url, service)
        return dell
    },
}
export default Request