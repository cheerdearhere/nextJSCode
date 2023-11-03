import HttpResponseStatus from "@/app/components/serverSide/HttpResponseStatus";

export default function handler(request,response){
    // if(request.method===HTTP_METHODS[0]){
    //
    // }else if(request.method === HTTP_METHODS[3]){
    //
    // }

    let returnMsg = `${request.method} test : ${HttpResponseStatus.SUCCESS.MESSAGE} ${new Date().toLocaleDateString()}`;
    return response.status(HttpResponseStatus.SUCCESS.CODE).json(returnMsg);
}