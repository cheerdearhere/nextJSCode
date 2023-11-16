// 'use client'
import {apiLinks} from "@/app/components/serverSide/linkList";
// import {useRouter} from "next/navigation";
import {HTTP_METHODS} from "next/dist/server/web/http";
// import {useState} from "react";

export default async function WriteForm(){
    // const [formData,setFormData] = useState({
    //     title:"",
    //     content:"",
    // });
    // const handleForm = e=>{
    //     const {name,value} = e.target;
    //     setFormData(prev=> ({ ...prev, [name]: value }));
    // }
    // const saveAndRedirect=(e)=>{
    //     e.preventDefault();
    //
    //     let sendData = new FormData();
    //     sendData.append("body",new Blob([JSON.stringify(sendData),{type:"application/json"}]));
    //     const postOpt = {
    //         type: "application/json",
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     }
    //     const result = fetch(apiLinks.addPost,postOpt,sendData);
    //     console.log(result);
    //     const router = new useRouter();
    //     router.push(result.toString());
    //
    // }
    return(
        <div className="p-20 container">
            <form action={apiLinks.addPost} method={HTTP_METHODS[3]}>
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input
                        name="title"
                        className="form-control"
                        placeholder="여기에 입력"
                        required={true}
                        // onChange={e=>handleForm(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <input
                        name="content"
                        className="form-control"
                        placeholder="내용은 여기"
                        required={true}
                        // onChange={e=>handleForm(e)}
                    />
                </div>
                <button type="submit">등록</button>
                {/*<button onClick={e=>saveAndRedirect(e)}>등록</button>*/}
            </form>
        </div>
    );
}