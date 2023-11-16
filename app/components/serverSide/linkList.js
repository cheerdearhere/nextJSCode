const domain = "http://localhost:3000";
const apiLinks = {
    doPostTest         : `${domain}/api/test`,
    getList            : `${domain}/api/list`,
    getDatTime         : `${domain}/api/clock`,
    addPost          : `${domain}/api/post/new`,
}
const pageLinks = {
    home            : "/",
    list            : "/list",
    cart            : "/cart",
    payment         : "/cart/payment",
    write           : "/write",
    //need pathVariable
    detail          : `/detail/`,//+id
}
export {
    domain,
    apiLinks,
    pageLinks,
}