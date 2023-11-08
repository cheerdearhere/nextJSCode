'use client'
import {useState} from "react";
import {apiCall} from "@/app/components/apiCall";
import {HTTP_METHODS} from "next/dist/server/web/http";
import {pageLinks} from "@/app/components/serverSide/linkList";

export default function Write(){
    const [textData,setTextData] = useState({
        title:"",
        content:"",
    });
    const handlerData = (e)=>{
        setTextData(prev=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    const dataValidation =()=>{
        if(textData.title === null || textData.title.trim().length < 1){
            alert("제목이 빈 상태에서 저장할 수 없습니다.");
            return false;
        }
        if(textData.content===null || textData.content.trim().length < 1){
            alert("내용이 빈 상태에서 저장할 수 없습니다.");
            return false;
        }
        return confirm("저장하시겠습니까?");
    }
    const submitData = async ()=>{
        if(!dataValidation()) return;

        let formData = new FormData();
        formData.append(
            "param",
            new Blob([JSON.stringify(textData)],{type: "application/json" })
        );
        const opt = {
            type: "application/json",
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
        const data = await apiCall(HTTP_METHODS[3],`${pageLinks.api}test`,opt,formData);
        alert(data);
    }
    return (
        <div>
            <h1>글 작성</h1>
            <div className="form-container">
                <label htmlFor="title">제목</label>
                <input
                    className="form-control"
                    id="title" type="text" name="title"
                    value={textData.title}
                    onChange={e=>handlerData(e)}
                />
            </div>
            <div className="form-container">
                <label htmlFor="content">내용</label>
                <textarea
                    className="form-control"
                    id="content" type="text" name="content"
                    placeholder="내용을 입력해주세요"
                    onChange={e=>handlerData(e)}
                ></textarea>
            </div>
            <button className="btn btn-outline-primary" onClick={()=>submitData()}>제출</button>
        </div>
    )
}