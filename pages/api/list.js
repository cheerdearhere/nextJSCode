import {connectionMongoDb} from "@/app/util/client";
import HttpResponseStatus from "@/app/components/serverSide/HttpResponseStatus";


export default async function getList(resquest,response){
    const client = await connectionMongoDb();
    const db = client.db("forum");
    let list = await db.collection('post').find().toArray();//특정 컬렉션의 데이터를 array로 받기
    if(list.length ===0) return response.status(HttpResponseStatus.NO_DATA.CODE).json(HttpResponseStatus.NO_DATA.MESSAGE);

    return response.status(HttpResponseStatus.SUCCESS.CODE).json(list);
}