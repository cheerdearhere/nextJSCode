import {HTTP_METHODS} from "next/dist/server/web/http";
import HttpResponseStatus from "@/app/components/serverSide/HttpResponseStatus";
import {connectionMongoDb} from "@/app/util/mongoClient";
import {domain, pageLinks} from "@/app/components/serverSide/linkList";

export default async function addPost(request,response){
    if(request.method !== HTTP_METHODS[3]){
        throw new Error(HttpResponseStatus.BAD_REQUEST.MESSAGE);
    }
    try{
        const title = request.body.title;
        const content = request.body.content;
        if(title === '' || content === ''){
            return response.status(HttpResponseStatus.NOT_ACCEPTABLE.CODE).json(HttpResponseStatus.NOT_ACCEPTABLE);
        }
        if(title.trim()===''||content.trim()===''){
            return response.status(HttpResponseStatus.NOT_ACCEPTABLE.CODE).json(HttpResponseStatus.NOT_ACCEPTABLE);
        }
        if(title.length > 200 ||content.length>200){
            return response.status(HttpResponseStatus.PAYLOAD_TOO_LARGE.CODE).json(HttpResponseStatus.PAYLOAD_TOO_LARGE);
        }
        let client = await connectionMongoDb();
        const db = client.db("forum");
        let result = await db.collection('post').insertOne(request.body); //{_id:"aaa",title:"test",content:"data"
        if(result.acknowledged){
            response.redirect( domain+pageLinks.list,HttpResponseStatus.CREATED.CODE);
        }
        return response.status(HttpResponseStatus.INTERNAL_SERVER_ERROR.CODE).json(HttpResponseStatus.INTERNAL_SERVER_ERROR);
    }catch (err){
        console.error(err);
    }
}