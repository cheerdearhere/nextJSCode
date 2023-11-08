import {HTTP_METHODS} from "next/dist/server/web/http";

const defaultOption = {
    cache: 'no-store',
    type: 'application/json'
}
const apiCall= (method,url,customOptions,param)=>{
    if(!HTTP_METHODS.includes(method)){
        return;
    }
    let res= useAPIFetch();
    if(res===null) {
        return null;
    }

    return res;
}
async function useAPIFetch(method,url,customOptions,param) {
    let res;
    switch (method) {
        case HTTP_METHODS[0]: {
            res = await fetch(url, {
                ...defaultOption,
                method,
            })
                .then(r => r.json())
                .then(r => r)
                .catch(err => console.error(err));
            if (!res.ok) throw new Error("failed to fetch Data");
            break;
        }
        case HTTP_METHODS[3]: {
            res = fetch(url, {
                ...defaultOption,
                method,
                ...customOptions,
                body: param,
            })
                .then(r => r.json())
                .then(r => r)
                .catch(err => console.error(err));
            if (!res.ok) throw new Error("failed to execute request");
            break;
        }
        case HTTP_METHODS[4]:
        case HTTP_METHODS[5]:
        case HTTP_METHODS[6]: {
            res=`죄송합니다. 아직 지원하지 않는 요청 방식입니다. : ${method}`;
            break;
        }
        default : {
            res="Bad request";
            break;
        }
    }
    return res;
}

export{
    apiCall,
}