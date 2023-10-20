'use client'
import {useEffect, useState} from "react";

const List = ()=>{
    const productListTitle = "Products";
    const [items, setItems]= useState([]);

    useEffect(() => {
        setItems([
            {
                seq: 1,
                type:"food",
                name:"상품1",
                price:40,
                amount: 2,
            },
            {
                seq:2,
                type:"tool",
                name:"상품2",
                price:30,
                amount: 4,
            }]);
    }, []);
    return (
        <div className="list_page">
            <h2 className="product_title">{productListTitle}</h2>
            <ul className="product_list">
                {
                    items?.length > 0
                        ? items.map((item,idx)=>{
                            return(
                                <li key={`item_${item.seq}`} className={`item_${item.type}`}>
                                    <h4 className="item_name">{`${idx}. ${item.name} $${item.price}(${item.amount})`}</h4>
                                </li>
                            );
                        })
                        :<></>

                }
            </ul>
        </div>
    )
}
export default List;