import Link from "next/link";
import {pageLink} from "@/app/components/commons";

export default function Cart(){
    return (
        <div>
            <h1>장바구니</h1>
            <Link href={pageLink.payment}>결제하기</Link>
        </div>
    );
}