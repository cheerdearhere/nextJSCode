import Link from "next/link";
import {apiLinks} from "@/app/components/serverSide/linkList";


const List = async ()=>{
    const productListTitle = "Products";
    const data= await fetch(apiLinks.getList,{}).then(res=>res.json()).then(r=>r);
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