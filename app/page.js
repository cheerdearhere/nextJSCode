import {apiLinks} from "@/app/components/serverSide/linkList";

export default async function Home() {
    let clock= await fetch(apiLinks.getDatTime,{}).then(r=>r.json());
    return (
        <div className="container">
            <h1>Home</h1>
            <h3>{clock}</h3>
        </div>
    )
}
