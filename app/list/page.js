'use client'
import Link from "next/link";
import {apiCall, pageLink} from "@/app/components/commons";
import {HTTP_METHODS} from "next/dist/server/web/http";
import {useEffect, useState} from "react";

const List = async ()=>{
    const productListTitle = "Products";
    const [data,setData]=useState([]);
    useEffect(async () => {
        const data = await apiCall(HTTP_METHODS[0],`${pageLink.api}list`);
        console.log(data);
        // setData(()=>return data);
    }, []);


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