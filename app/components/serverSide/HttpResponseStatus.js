const HttpResponseStatus = {
    // 200~
    SUCCESS : {
        CODE: 200,
        MESSAGE: "success",
    },
    // 300~
    // 400~
    CLIENT_ERROR : {
        CODE: 400,
        MESSAGE : "client error"
    },
    BAD_REQEUST : {
        CODE: 401,
        MESSAGE: "bad request",
    },
    NOT_FOUND   : {
        CODE: 404,
        MESSAGE : "not found",
    },
    // 500~
    SERVER_ERROR : {
        CODE: 500,
        MESSAGE: "server error",
    }
}
export default HttpResponseStatus;