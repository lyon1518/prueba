const GetServer = {
    Server() {
        const server = process.env.NODE_ENV === 'development'? false:true
        // const server = process.env.NODE_ENV === 'development' ? true : false
        // production
        // developer
        return server
    },
}
export default GetServer