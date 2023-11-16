import {apiLinks} from "@/app/components/serverSide/linkList";
import {HTTP_METHODS} from "next/dist/server/web/http";

export default async function WriteForm(){
    return(
        <div className="p-20 container">
            <form action={apiLinks.addPost} method={HTTP_METHODS[3]}>
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input id="title" name="title" className="form-control" placeholder="여기에 입력" required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <input id="content" name="content" className="form-control" placeholder="내용은 여기" required={true}/>
                </div>
                <button type="submit">등록</button>
            </form>
        </div>
    );
}