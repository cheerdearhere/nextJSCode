import {HTTP_METHODS} from "next/dist/server/web/http";
import HttpResponseStatus from "@/app/components/serverSide/HttpResponseStatus";
import {connectionMongoDb} from "@/app/util/mongoClient";

export default async function addPost(request,response){
    if(request.method !== HTTP_METHODS[3]){
        throw new Error(HttpResponseStatus.BAD_REQUEST.MESSAGE);
    }

    let client = await connectionMongoDb();
    const db = client.db("forum");
    let result = await db.collection('post').insertOne(request.body); //{_id:"aaa",title:"test",content:"data"}
    console.log(result);
    debugger;
    // if(!Object.hasOwn(result,"insertedId"))
    //     return response.status(HttpResponseStatus.NO_CONTENT.CODE).json(HttpResponseStatus.NO_CONTENT.MESSAGE);

    return response.status(HttpResponseStatus.CREATED.CODE).redirect("/list");
}