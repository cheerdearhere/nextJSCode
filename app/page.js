import { connectionMongoDb} from "@/app/util/client";

export default async function Home() {
    let data=[];
    const client = await connectionMongoDb();
    try{
        const db = client.db("forum").command({ping:1});
        data = await db.collection('post').find().toArray();//특정 컬렉션의 데이터를 array로 받기
    }catch(err){
        console.dir(err);
    }finally {
        await client.close();
    }

    return (
        <main>
            <h4>HOME</h4>
            {
                data?.length > 0
                    ? data.map(item=><div>item.id</div>)
                    : <p>비어있음</p>
            }
        </main>
    )
}
