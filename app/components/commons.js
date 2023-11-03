import {HTTP_METHODS} from "next/dist/server/web/http";

const pageLink = {
    home            : "/",
    list            : "/list",
    cart            : "/cart",
    payment         : "/cart/payment",
    api             : "/api/"//+link
}

const defaultOption = {
    type: "application/json",
}
const apiCall=async (method,url,customOptions={},param=new FormData())=>{
    if(!HTTP_METHODS.includes(method)){
        return;
    }

    switch(method){
        case HTTP_METHODS[0]: {
            return await fetch(url,{
                ...defaultOption,
                method,
            })
                .then(r=>r.json())
                .then(r=>{
                    return r
                })
                .catch(err=>console.error(err));
        }
        case HTTP_METHODS[3]: {
            return await fetch(url,{
                ...defaultOption,
                method,
                ...customOptions,
                body: param,
            })
                .then(r=>r.json())
                .then(r=>{
                    return r
                })
                .catch(err=>console.error(err));
        }
        case HTTP_METHODS[4]:
        case HTTP_METHODS[5]:
        case HTTP_METHODS[6]:
        {
            alert(`죄송합니다. 아직 지원하지 않는 요청 방식입니다. : ${method}`);
            break;
        }
        default : {
            alert("잘못된 요청입니다.");
            break;
        }
    }
}


export{
    pageLink,
    apiCall,
}