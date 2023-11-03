import {connectionMongoDb} from "@/app/util/client";

export default async function getList(){
    const client = await connectionMongoDb();
    const db = client.db("forum");

    return await db.collection('post').find().toArray();//특정 컬렉션의 데이터를 array로 받기
}