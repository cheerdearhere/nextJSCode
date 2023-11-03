'use client'

import {useParams, usePathname, useSearchParams} from "next/navigation";

export default function urlInfo(){
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const pathParams = useParams();

    return {
        pathName, searchParams, pathParams
    }
}