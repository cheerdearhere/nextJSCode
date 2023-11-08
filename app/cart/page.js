import Link from "next/link";
import {pageLinks} from "@/app/components/serverSide/linkList";


export default function Cart(){
    return (
        <div>
            <h1>장바구니</h1>
            <Link href={pageLinks.payment}>결제하기</Link>
        </div>
    );
}