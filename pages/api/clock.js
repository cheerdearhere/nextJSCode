import HttpResponseStatus from "@/app/components/serverSide/HttpResponseStatus";

export default function clockHandler(request,response){
    let current = new Date();
    const {location="ko-KR",options={
        weekday: 'long',
        year: 'numeric',
        month:'long',
        day:'numeric',
    }} = request;
    const h = current.getHours();
    const m = current.getMinutes();
    const s = current.getSeconds();
    const dateString = current.toLocaleDateString(location,options);
    const timeString = `${h}:${m}:${s}`;
    const dateTimeString =dateString+' '+timeString;
    return response.status(HttpResponseStatus.SUCCESS.CODE).json(dateTimeString);
}