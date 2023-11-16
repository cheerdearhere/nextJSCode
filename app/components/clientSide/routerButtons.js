'use client'

import {useRouter} from "next/navigation";

const HomeBtn = (btnContent)=>{
    let router = useRouter();
    return (
        <button
            onClick={()=>{router.push('/')}}
        >
            {
                // navigation 사용
                btnContent
            }
        </button>
    )
}

const BackBtn = (btnContent)=>{
    let router = useRouter();
    return (
        <button
            onClick={()=>{router.back()}}
        >
            {
                // navigation 사용 Back
                btnContent
            }
        </button>
    )
}

const ForwardBtn = (btnContent)=>{
    let router = useRouter();
    return (
        <button
            onClick={()=>{router.forward()}}
        >
            {
                // navigation 사용 Forward
                btnContent
            }
        </button>
    )
}

const RefreshBtn = (btnContent)=>{
    let router = useRouter();
    return (
        <button
            onClick={()=>{router.refresh()}}
        >
            {
                btnContent
                /*navigation 사용 Back*/
            }
        </button>
    )
}

const CustomURLBtn = (props) =>{
    let router = useRouter();
    const {url, btnContent} = props;
    const goToUrl = ()=>{
        router.push(url);
    }
    return (
        <button onClick={goToUrl}>
            {btnContent}
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
    CustomURLBtn,
};