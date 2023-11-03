import {connectionMongoDb} from "@/app/util/client";
import Link from "next/link";

const List = async ()=>{
    const productListTitle = "Products";
    const client = await connectionMongoDb();
    const db = client.db("forum");
    const data = await db.collection('post').find().toArray();//특정 컬렉션의 데이터를 array로 받기
    // console.log(data);

    return (
        <div className="list-bg">
            <h2 className="product_title">{productListTitle}</h2>
            {
                data?.length > 0
                    ? data.map(item=>{
                        return (
                            <div key={item._id} className="list-item">
                                <Link href={`/detail/${item._id}`} prefetch={false}>
                                    <h4>{item.title}</h4>
                                </Link>
                                <p>{item.content}</p>
                            </div>
                        )
                    })
                    : ( <div>
                            <h4>게시물이 없습니다.</h4>
                        </div>)
            }
        </div>
    )
}
export default List;