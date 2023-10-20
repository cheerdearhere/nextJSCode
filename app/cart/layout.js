import Link from "next/link";
import {pageLink} from "@/app/components/commons";

export default function CartLayout({ children }) {
    return (
        <div>
            <div>
                <p>현대카드 무이자이벤트중</p>
            </div>
            {children}
        </div>
    );
}
