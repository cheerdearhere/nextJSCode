'use client'

import {useRouter} from "next/navigation";

const HomeBtn = ()=>{
    let router = useRouter();
    return (
        <button
            onClick={()=>{router.push('/')}}
        >
            navigation 사용
        </button>
    )
}

const BackBtn = ()=>{
    let router = useRouter();
    return (
        <button
            onClick={()=>{router.back()}}
        >
            navigation 사용 Back
        </button>
    )
}

const ForwardBtn = ()=>{
    let router = useRouter();
    return (
        <button
            onClick={()=>{router.forward()}}
        >
            navigation 사용 Forward
        </button>
    )
}

const RefreshBtn = ()=>{
    let router = useRouter();
    return (
        <button
            onClick={()=>{router.refresh()}}
        >
            navigation 사용 Back
        </button>
    )
}

const PrefetchBtn = (url) =>{
    let router = useRouter();
    return (
        <button onClick={()=>router.prefetch(url)}>
            navigation prefetch
        </button>
    );
}
// <Link href={`/detail/${item._id}`} > 기본 기능
//막으려면 prefetch={false} 추가

export {
    HomeBtn,
    BackBtn,
    RefreshBtn,
    ForwardBtn,
    PrefetchBtn,
};